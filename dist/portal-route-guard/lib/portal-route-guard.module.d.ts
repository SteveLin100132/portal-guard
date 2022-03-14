import { ModuleWithProviders } from '@angular/core';
import { PortalGuardOption } from './models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * Portal 路由守衛模組
 */
export declare class PortalGuardModule {
    /**
     * Portal 路由守衛模組配置
     *
     * @method public
     * @param options Portal 路由守衛配置
     * @return 回傳 Portal 路由守衛模組
     */
    static forRoot(options: PortalGuardOption): ModuleWithProviders<PortalGuardModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PortalGuardModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PortalGuardModule, never, [typeof i1.CommonModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PortalGuardModule>;
}
