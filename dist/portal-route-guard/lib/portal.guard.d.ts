import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { PortalGuardOption } from './models';
import { PortalAccessmentService } from './service';
import * as i0 from "@angular/core";
/**
 * Portal 路由守衛
 */
export declare class PortalGuard implements CanActivate {
    private readonly options;
    private readonly router;
    private readonly accessmentService;
    /**
     * @param options           Portal 路由守衛配置
     * @param router            路由功能
     * @param accessmentService Portal 訪問服務
     */
    constructor(options: PortalGuardOption, router: Router, accessmentService: PortalAccessmentService);
    /**
     * 是否允許訪忘該頁面
     *
     * @method public
     * @param route 路由快照
     * @return 回傳是否允許訪忘該頁面
     */
    canActivate(route: ActivatedRouteSnapshot): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PortalGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PortalGuard>;
}
