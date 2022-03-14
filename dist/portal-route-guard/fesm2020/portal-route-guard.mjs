import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Inject, NgModule } from '@angular/core';
import * as i1 from '@angular/router';

/**
 * 專案名稱： portal-route-guard
 * 部門代號： MLD500
 * 檔案說明： Portal 路由守衛配置
 * @CREATE Monday, 14th March 2022 8:52:48 am
 * @author Steve CY Lin
 * @contact Steve_CY_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 專案名稱： portal-route-guard
 * 部門代號： MLD500
 * 檔案說明： 資料模型匯出點
 * @CREATE Monday, 14th March 2022 8:52:20 am
 * @author Steve CY Lin
 * @contact Steve_CY_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 專案名稱： portal-route-guard
 * 部門代號： MLD500
 * 檔案說明： Portal 路由守衛配置注入 Token
 * @CREATE Monday, 14th March 2022 8:55:49 am
 * @author Steve CY Lin
 * @contact Steve_CY_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
/**
 * Portal 路由守衛配置注入 Token
 */
const PORTAL_GUARD_OPTION = new InjectionToken('portal-guard-option');

/**
 * 專案名稱： portal-route-guard
 * 部門代號： MLD500
 * 檔案說明： Portal 訪問服務
 * @CREATE Monday, 14th March 2022 9:36:03 am
 * @author Steve CY Lin
 * @contact Steve_CY_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
/**
 * Portal 訪問服務
 */
class PortalAccessmentService {
    /**
     * @param options           Portal 路由守衛配置
     */
    constructor(options) {
        this.options = options;
        /**
         * Portal 存取必填欄位
         */
        this.essentialKeys = ['userID', 'token', 'sysId', 'site', 'plant'];
        this.essentialKeys = this.options.essentialKeys || this.essentialKeys;
    }
    /**
     * 是否允許訪忘該頁面
     *
     * @method public
     * @param route 路由快照
     * @return 回傳是否允許訪忘該頁面
     */
    canActivate(route) {
        // 檢視是否允許訪問頁面
        return this.essentialKeys
            .map((key) => route.queryParamMap.keys.includes(key))
            .every((result) => result === true);
    }
}
PortalAccessmentService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PortalAccessmentService, deps: [{ token: PORTAL_GUARD_OPTION }], target: i0.ɵɵFactoryTarget.Injectable });
PortalAccessmentService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PortalAccessmentService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PortalAccessmentService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PORTAL_GUARD_OPTION]
                }] }]; } });

/**
 * 專案名稱： portal-route-guard
 * 部門代號： MLD500
 * 檔案說明： 服務匯出點
 * @CREATE Monday, 14th March 2022 8:55:26 am
 * @author Steve CY Lin
 * @contact Steve_CY_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 專案名稱： portal-route-guard
 * 部門代號： MLD500
 * 檔案說明： Portal 路由守衛
 * @CREATE Monday, 14th March 2022 9:10:37 am
 * @author Steve CY Lin
 * @contact Steve_CY_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
/**
 * Portal 路由守衛
 */
class PortalGuard {
    /**
     * @param options           Portal 路由守衛配置
     * @param router            路由功能
     * @param accessmentService Portal 訪問服務
     */
    constructor(options, router, accessmentService) {
        this.options = options;
        this.router = router;
        this.accessmentService = accessmentService;
    }
    /**
     * 是否允許訪忘該頁面
     *
     * @method public
     * @param route 路由快照
     * @return 回傳是否允許訪忘該頁面
     */
    canActivate(route) {
        // 檢視是否允許訪問頁面
        const accessed = this.accessmentService.canActivate(route);
        // 不允許訪問且帶有拒絕存取的頁面，則路由至該頁面
        if (!accessed && this.options && this.options.rejectPath) {
            this.router.navigate([this.options.rejectPath]);
        }
        return accessed;
    }
}
PortalGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PortalGuard, deps: [{ token: PORTAL_GUARD_OPTION }, { token: i1.Router }, { token: PortalAccessmentService }], target: i0.ɵɵFactoryTarget.Injectable });
PortalGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PortalGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PortalGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PORTAL_GUARD_OPTION]
                }] }, { type: i1.Router }, { type: PortalAccessmentService }]; } });

/**
 * 專案名稱： portal-route-guard
 * 部門代號： MLD500
 * 檔案說明： Portal 路由守衛模組
 * @CREATE Monday, 14th March 2022 8:25:40 am
 * @author Steve CY Lin
 * @contact Steve_CY_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
/**
 * Portal 路由守衛模組
 */
class PortalGuardModule {
    /**
     * Portal 路由守衛模組配置
     *
     * @method public
     * @param options Portal 路由守衛配置
     * @return 回傳 Portal 路由守衛模組
     */
    static forRoot(options) {
        return {
            ngModule: PortalGuardModule,
            providers: [
                {
                    provide: PORTAL_GUARD_OPTION,
                    useValue: options,
                },
                PortalGuard,
                PortalAccessmentService,
            ],
        };
    }
}
PortalGuardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PortalGuardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PortalGuardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PortalGuardModule, imports: [CommonModule] });
PortalGuardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PortalGuardModule, providers: [
        {
            provide: PORTAL_GUARD_OPTION,
            useValue: null,
        },
        PortalGuard,
        PortalAccessmentService,
    ], imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PortalGuardModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [],
                    providers: [
                        {
                            provide: PORTAL_GUARD_OPTION,
                            useValue: null,
                        },
                        PortalGuard,
                        PortalAccessmentService,
                    ],
                }]
        }] });

/**
 * 專案名稱： portal-route-guard
 * 部門代號： MLD500
 * 檔案說明： Portal 路由守衛模組匯出點
 * @CREATE Monday, 14th March 2022 8:36:16 am
 * @author Steve CY Lin
 * @contact Steve_CY_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 專案名稱： portal-route-guard
 * 部門代號： MLD500
 * 檔案說明： 套件匯出點
 * @CREATE Monday, 14th March 2022 8:25:40 am
 * @author Steve CY Lin
 * @contact Steve_CY_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PortalAccessmentService, PortalGuard, PortalGuardModule };
//# sourceMappingURL=portal-route-guard.mjs.map
