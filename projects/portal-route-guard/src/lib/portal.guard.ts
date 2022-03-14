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
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { PortalGuardOption } from './models';
import { PortalAccessmentService, PORTAL_GUARD_OPTION } from './service';

/**
 * Portal 路由守衛
 */
@Injectable({
  providedIn: 'root',
})
export class PortalGuard implements CanActivate {
  /**
   * @param options           Portal 路由守衛配置
   * @param router            路由功能
   * @param accessmentService Portal 訪問服務
   */
  constructor(
    @Inject(PORTAL_GUARD_OPTION) private readonly options: PortalGuardOption,
    private readonly router: Router,
    private readonly accessmentService: PortalAccessmentService
  ) {}

  /**
   * 是否允許訪忘該頁面
   *
   * @method public
   * @param route 路由快照
   * @return 回傳是否允許訪忘該頁面
   */
  public canActivate(route: ActivatedRouteSnapshot): boolean {
    // 檢視是否允許訪問頁面
    const accessed = this.accessmentService.canActivate(route);

    // 不允許訪問且帶有拒絕存取的頁面，則路由至該頁面
    if (!accessed && this.options && this.options.rejectPath) {
      this.router.navigate([this.options.rejectPath]);
    }

    return accessed;
  }
}
