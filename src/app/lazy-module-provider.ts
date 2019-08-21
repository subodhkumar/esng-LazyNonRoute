import {InjectionToken} from '@angular/core';

export type LAZY_MODULES = {
    moduleOne: String;
}

export const lazyModuleList: LAZY_MODULES = {
    moduleOne: 'src/app/lazy-feature/lazy-feature.module#LazyFeatureModule'
};

export const LAZY_MODULE_MAP = new InjectionToken('LAZY_MODULES_MAP',{
    factory: ()=>lazyModuleList
});