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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortalGuard } from './portal.guard';
import { PortalAccessmentService, PORTAL_GUARD_OPTION } from './service';
import * as i0 from "@angular/core";
/**
 * Portal 路由守衛模組
 */
export class PortalGuardModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLXJvdXRlLWd1YXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3BvcnRhbC1yb3V0ZS1ndWFyZC9zcmMvbGliL3BvcnRhbC1yb3V0ZS1ndWFyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBRXpFOztHQUVHO0FBYUgsTUFBTSxPQUFPLGlCQUFpQjtJQUM1Qjs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsT0FBTyxDQUNuQixPQUEwQjtRQUUxQixPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLG1CQUFtQjtvQkFDNUIsUUFBUSxFQUFFLE9BQU87aUJBQ2xCO2dCQUNELFdBQVc7Z0JBQ1gsdUJBQXVCO2FBQ3hCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzhHQXRCVSxpQkFBaUI7K0dBQWpCLGlCQUFpQixZQVhsQixZQUFZOytHQVdYLGlCQUFpQixhQVRqQjtRQUNUO1lBQ0UsT0FBTyxFQUFFLG1CQUFtQjtZQUM1QixRQUFRLEVBQUUsSUFBSTtTQUNmO1FBQ0QsV0FBVztRQUNYLHVCQUF1QjtLQUN4QixZQVRRLENBQUMsWUFBWSxDQUFDOzJGQVdaLGlCQUFpQjtrQkFaN0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxFQUFFO29CQUNoQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLG1CQUFtQjs0QkFDNUIsUUFBUSxFQUFFLElBQUk7eUJBQ2Y7d0JBQ0QsV0FBVzt3QkFDWCx1QkFBdUI7cUJBQ3hCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDlsIjmoYjlkI3nqLHvvJogcG9ydGFsLXJvdXRlLWd1YXJkXG4gKiDpg6jploDku6PomZ/vvJogTUxENTAwXG4gKiDmqpTmoYjoqqrmmI7vvJogUG9ydGFsIOi3r+eUseWuiOihm+aooee1hFxuICogQENSRUFURSBNb25kYXksIDE0dGggTWFyY2ggMjAyMiA4OjI1OjQwIGFtXG4gKiBAYXV0aG9yIFN0ZXZlIENZIExpblxuICogQGNvbnRhY3QgU3RldmVfQ1lfTGluQHdpc3Ryb24uY29tICMxMzQyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQE5PVEVcbiAqL1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvcnRhbEd1YXJkT3B0aW9uIH0gZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHsgUG9ydGFsR3VhcmQgfSBmcm9tICcuL3BvcnRhbC5ndWFyZCc7XG5pbXBvcnQgeyBQb3J0YWxBY2Nlc3NtZW50U2VydmljZSwgUE9SVEFMX0dVQVJEX09QVElPTiB9IGZyb20gJy4vc2VydmljZSc7XG5cbi8qKlxuICogUG9ydGFsIOi3r+eUseWuiOihm+aooee1hFxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogUE9SVEFMX0dVQVJEX09QVElPTixcbiAgICAgIHVzZVZhbHVlOiBudWxsLFxuICAgIH0sXG4gICAgUG9ydGFsR3VhcmQsXG4gICAgUG9ydGFsQWNjZXNzbWVudFNlcnZpY2UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFBvcnRhbEd1YXJkTW9kdWxlIHtcbiAgLyoqXG4gICAqIFBvcnRhbCDot6/nlLHlrojooZvmqKHntYTphY3nva5cbiAgICpcbiAgICogQG1ldGhvZCBwdWJsaWNcbiAgICogQHBhcmFtIG9wdGlvbnMgUG9ydGFsIOi3r+eUseWuiOihm+mFjee9rlxuICAgKiBAcmV0dXJuIOWbnuWCsyBQb3J0YWwg6Lev55Sx5a6I6KGb5qih57WEXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoXG4gICAgb3B0aW9uczogUG9ydGFsR3VhcmRPcHRpb25cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxQb3J0YWxHdWFyZE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUG9ydGFsR3VhcmRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFBPUlRBTF9HVUFSRF9PUFRJT04sXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIFBvcnRhbEd1YXJkLFxuICAgICAgICBQb3J0YWxBY2Nlc3NtZW50U2VydmljZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19