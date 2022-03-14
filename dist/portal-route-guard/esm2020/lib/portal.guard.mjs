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
import { Inject, Injectable } from '@angular/core';
import { PORTAL_GUARD_OPTION } from './service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./service";
/**
 * Portal 路由守衛
 */
export class PortalGuard {
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
PortalGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PortalGuard, deps: [{ token: PORTAL_GUARD_OPTION }, { token: i1.Router }, { token: i2.PortalAccessmentService }], target: i0.ɵɵFactoryTarget.Injectable });
PortalGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PortalGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PortalGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PORTAL_GUARD_OPTION]
                }] }, { type: i1.Router }, { type: i2.PortalAccessmentService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9ydGFsLXJvdXRlLWd1YXJkL3NyYy9saWIvcG9ydGFsLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7R0FTRztBQUVILE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25ELE9BQU8sRUFBMkIsbUJBQW1CLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7QUFFekU7O0dBRUc7QUFJSCxNQUFNLE9BQU8sV0FBVztJQUN0Qjs7OztPQUlHO0lBQ0gsWUFDZ0QsT0FBMEIsRUFDdkQsTUFBYyxFQUNkLGlCQUEwQztRQUZiLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQ3ZELFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXlCO0lBQzFELENBQUM7SUFFSjs7Ozs7O09BTUc7SUFDSSxXQUFXLENBQUMsS0FBNkI7UUFDOUMsYUFBYTtRQUNiLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFM0QsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUNqRDtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7O3dHQTdCVSxXQUFXLGtCQU9aLG1CQUFtQjs0R0FQbEIsV0FBVyxjQUZWLE1BQU07MkZBRVAsV0FBVztrQkFIdkIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQVFJLE1BQU07MkJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDlsIjmoYjlkI3nqLHvvJogcG9ydGFsLXJvdXRlLWd1YXJkXG4gKiDpg6jploDku6PomZ/vvJogTUxENTAwXG4gKiDmqpTmoYjoqqrmmI7vvJogUG9ydGFsIOi3r+eUseWuiOihm1xuICogQENSRUFURSBNb25kYXksIDE0dGggTWFyY2ggMjAyMiA5OjEwOjM3IGFtXG4gKiBAYXV0aG9yIFN0ZXZlIENZIExpblxuICogQGNvbnRhY3QgU3RldmVfQ1lfTGluQHdpc3Ryb24uY29tICMxMzQyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQE5PVEVcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUG9ydGFsR3VhcmRPcHRpb24gfSBmcm9tICcuL21vZGVscyc7XG5pbXBvcnQgeyBQb3J0YWxBY2Nlc3NtZW50U2VydmljZSwgUE9SVEFMX0dVQVJEX09QVElPTiB9IGZyb20gJy4vc2VydmljZSc7XG5cbi8qKlxuICogUG9ydGFsIOi3r+eUseWuiOihm1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUG9ydGFsR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0gb3B0aW9ucyAgICAgICAgICAgUG9ydGFsIOi3r+eUseWuiOihm+mFjee9rlxuICAgKiBAcGFyYW0gcm91dGVyICAgICAgICAgICAg6Lev55Sx5Yqf6IO9XG4gICAqIEBwYXJhbSBhY2Nlc3NtZW50U2VydmljZSBQb3J0YWwg6Kiq5ZWP5pyN5YuZXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBPUlRBTF9HVUFSRF9PUFRJT04pIHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogUG9ydGFsR3VhcmRPcHRpb24sXG4gICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFjY2Vzc21lbnRTZXJ2aWNlOiBQb3J0YWxBY2Nlc3NtZW50U2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIOaYr+WQpuWFgeioseioquW/mOipsumggemdolxuICAgKlxuICAgKiBAbWV0aG9kIHB1YmxpY1xuICAgKiBAcGFyYW0gcm91dGUg6Lev55Sx5b+r54WnXG4gICAqIEByZXR1cm4g5Zue5YKz5piv5ZCm5YWB6Kix6Kiq5b+Y6Kmy6aCB6Z2iXG4gICAqL1xuICBwdWJsaWMgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICAvLyDmqqLoppbmmK/lkKblhYHoqLHoqKrllY/poIHpnaJcbiAgICBjb25zdCBhY2Nlc3NlZCA9IHRoaXMuYWNjZXNzbWVudFNlcnZpY2UuY2FuQWN0aXZhdGUocm91dGUpO1xuXG4gICAgLy8g5LiN5YWB6Kix6Kiq5ZWP5LiU5bi25pyJ5ouS57WV5a2Y5Y+W55qE6aCB6Z2i77yM5YmH6Lev55Sx6Iez6Kmy6aCB6Z2iXG4gICAgaWYgKCFhY2Nlc3NlZCAmJiB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLnJlamVjdFBhdGgpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLm9wdGlvbnMucmVqZWN0UGF0aF0pO1xuICAgIH1cblxuICAgIHJldHVybiBhY2Nlc3NlZDtcbiAgfVxufVxuIl19