import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { PortalGuardOption } from '../models';
import * as i0 from "@angular/core";
/**
 * Portal 訪問服務
 */
export declare class PortalAccessmentService implements CanActivate {
    private readonly options;
    /**
     * Portal 存取必填欄位
     */
    private essentialKeys;
    /**
     * @param options           Portal 路由守衛配置
     */
    constructor(options: PortalGuardOption);
    /**
     * 是否允許訪忘該頁面
     *
     * @method public
     * @param route 路由快照
     * @return 回傳是否允許訪忘該頁面
     */
    canActivate(route: ActivatedRouteSnapshot): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PortalAccessmentService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PortalAccessmentService>;
}
