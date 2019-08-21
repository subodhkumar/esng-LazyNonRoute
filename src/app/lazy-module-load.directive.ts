import { LAZY_MODULES, LAZY_MODULE_MAP } from './lazy-module-provider';
import { Directive, OnInit, OnDestroy, Input, NgModuleRef, ViewContainerRef, Injector, NgModuleFactoryLoader, Inject, NgModuleFactory, Type } from '@angular/core';
type ModuleWithRoot = Type<any> & {rootComponent: Type<any>}


@Directive({
  selector: '[appLazyModuleLoad]'
})
export class LazyModuleLoadDirective implements OnInit, OnDestroy {

  @Input('appLazyModuleLoad') moduleName: keyof LAZY_MODULES;
  private moduleRef: NgModuleRef<any>;
  constructor(
    private vcr: ViewContainerRef,
    private injector: Injector,
    private loader: NgModuleFactoryLoader,
    @Inject(LAZY_MODULE_MAP) private modulesMap
  ) { }


  ngOnInit() {
    this.loader.load(this.modulesMap[this.moduleName]).then((moduleFactory: NgModuleFactory<any>)=>{
      this.moduleRef = moduleFactory.create(this.injector);
      const rootComponent = (moduleFactory.moduleType as ModuleWithRoot).rootComponent;

      const compFactory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponent);
      this.vcr.createComponent(compFactory);
    })
  }

  ngOnDestroy() {
    this.moduleRef && this.moduleRef.destroy();
  }

}
