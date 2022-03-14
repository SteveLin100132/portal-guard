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
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PortalGuardOption } from './models';
import { PortalGuard } from './portal.guard';
import { PortalAccessmentService, PORTAL_GUARD_OPTION } from './service';

/**
 * Portal 路由守衛模組
 */
@NgModule({
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
})
export class PortalGuardModule {
  /**
   * Portal 路由守衛模組配置
   *
   * @method public
   * @param options Portal 路由守衛配置
   * @return 回傳 Portal 路由守衛模組
   */
  public static forRoot(
    options: PortalGuardOption
  ): ModuleWithProviders<PortalGuardModule> {
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
