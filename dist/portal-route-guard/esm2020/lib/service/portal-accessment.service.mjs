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
import { Inject, Injectable } from '@angular/core';
import { PORTAL_GUARD_OPTION } from './portal-guard-option.token';
import * as i0 from "@angular/core";
/**
 * Portal 訪問服務
 */
export class PortalAccessmentService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLWFjY2Vzc21lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvcnRhbC1yb3V0ZS1ndWFyZC9zcmMvbGliL3NlcnZpY2UvcG9ydGFsLWFjY2Vzc21lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0dBU0c7QUFFSCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFbEU7O0dBRUc7QUFJSCxNQUFNLE9BQU8sdUJBQXVCO0lBTWxDOztPQUVHO0lBQ0gsWUFDZ0QsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFUMUU7O1dBRUc7UUFDSyxrQkFBYSxHQUFHLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBUXBFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksV0FBVyxDQUFDLEtBQTZCO1FBQzlDLGFBQWE7UUFDYixPQUFPLElBQUksQ0FBQyxhQUFhO2FBQ3RCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3BELEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O29IQTNCVSx1QkFBdUIsa0JBVXhCLG1CQUFtQjt3SEFWbEIsdUJBQXVCLGNBRnRCLE1BQU07MkZBRVAsdUJBQXVCO2tCQUhuQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBV0ksTUFBTTsyQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOWwiOahiOWQjeeose+8miBwb3J0YWwtcm91dGUtZ3VhcmRcbiAqIOmDqOmWgOS7o+iZn++8miBNTEQ1MDBcbiAqIOaqlOahiOiqquaYju+8miBQb3J0YWwg6Kiq5ZWP5pyN5YuZXG4gKiBAQ1JFQVRFIE1vbmRheSwgMTR0aCBNYXJjaCAyMDIyIDk6MzY6MDMgYW1cbiAqIEBhdXRob3IgU3RldmUgQ1kgTGluXG4gKiBAY29udGFjdCBTdGV2ZV9DWV9MaW5Ad2lzdHJvbi5jb20gIzEzNDJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBATk9URVxuICovXG5cbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUG9ydGFsR3VhcmRPcHRpb24gfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgUE9SVEFMX0dVQVJEX09QVElPTiB9IGZyb20gJy4vcG9ydGFsLWd1YXJkLW9wdGlvbi50b2tlbic7XG5cbi8qKlxuICogUG9ydGFsIOioquWVj+acjeWLmVxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUG9ydGFsQWNjZXNzbWVudFNlcnZpY2UgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIC8qKlxuICAgKiBQb3J0YWwg5a2Y5Y+W5b+F5aGr5qyE5L2NXG4gICAqL1xuICBwcml2YXRlIGVzc2VudGlhbEtleXMgPSBbJ3VzZXJJRCcsICd0b2tlbicsICdzeXNJZCcsICdzaXRlJywgJ3BsYW50J107XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBvcHRpb25zICAgICAgICAgICBQb3J0YWwg6Lev55Sx5a6I6KGb6YWN572uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBPUlRBTF9HVUFSRF9PUFRJT04pIHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogUG9ydGFsR3VhcmRPcHRpb25cbiAgKSB7XG4gICAgdGhpcy5lc3NlbnRpYWxLZXlzID0gdGhpcy5vcHRpb25zLmVzc2VudGlhbEtleXMgfHwgdGhpcy5lc3NlbnRpYWxLZXlzO1xuICB9XG5cbiAgLyoqXG4gICAqIOaYr+WQpuWFgeioseioquW/mOipsumggemdolxuICAgKlxuICAgKiBAbWV0aG9kIHB1YmxpY1xuICAgKiBAcGFyYW0gcm91dGUg6Lev55Sx5b+r54WnXG4gICAqIEByZXR1cm4g5Zue5YKz5piv5ZCm5YWB6Kix6Kiq5b+Y6Kmy6aCB6Z2iXG4gICAqL1xuICBwdWJsaWMgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICAvLyDmqqLoppbmmK/lkKblhYHoqLHoqKrllY/poIHpnaJcbiAgICByZXR1cm4gdGhpcy5lc3NlbnRpYWxLZXlzXG4gICAgICAubWFwKChrZXkpID0+IHJvdXRlLnF1ZXJ5UGFyYW1NYXAua2V5cy5pbmNsdWRlcyhrZXkpKVxuICAgICAgLmV2ZXJ5KChyZXN1bHQpID0+IHJlc3VsdCA9PT0gdHJ1ZSk7XG4gIH1cbn1cbiJdfQ==