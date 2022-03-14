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
import { InjectionToken } from '@angular/core';
/**
 * Portal 路由守衛配置注入 Token
 */
export const PORTAL_GUARD_OPTION = new InjectionToken('portal-guard-option');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLWd1YXJkLW9wdGlvbi50b2tlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvcnRhbC1yb3V0ZS1ndWFyZC9zcmMvbGliL3NlcnZpY2UvcG9ydGFsLWd1YXJkLW9wdGlvbi50b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0dBU0c7QUFFSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9DOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQ25ELHFCQUFxQixDQUN0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWwiOahiOWQjeeose+8miBwb3J0YWwtcm91dGUtZ3VhcmRcclxuICog6YOo6ZaA5Luj6Jmf77yaIE1MRDUwMFxyXG4gKiDmqpTmoYjoqqrmmI7vvJogUG9ydGFsIOi3r+eUseWuiOihm+mFjee9ruazqOWFpSBUb2tlblxyXG4gKiBAQ1JFQVRFIE1vbmRheSwgMTR0aCBNYXJjaCAyMDIyIDg6NTU6NDkgYW1cclxuICogQGF1dGhvciBTdGV2ZSBDWSBMaW5cclxuICogQGNvbnRhY3QgU3RldmVfQ1lfTGluQHdpc3Ryb24uY29tICMxMzQyXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEBOT1RFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUG9ydGFsR3VhcmRPcHRpb24gfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuLyoqXHJcbiAqIFBvcnRhbCDot6/nlLHlrojooZvphY3nva7ms6jlhaUgVG9rZW5cclxuICovXHJcbmV4cG9ydCBjb25zdCBQT1JUQUxfR1VBUkRfT1BUSU9OID0gbmV3IEluamVjdGlvblRva2VuPFBvcnRhbEd1YXJkT3B0aW9uPihcclxuICAncG9ydGFsLWd1YXJkLW9wdGlvbidcclxuKTtcclxuIl19