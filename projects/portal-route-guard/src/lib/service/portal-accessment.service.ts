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
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { PortalGuardOption } from '../models';
import { PORTAL_GUARD_OPTION } from './portal-guard-option.token';

/**
 * Portal 訪問服務
 */
@Injectable({
  providedIn: 'root',
})
export class PortalAccessmentService implements CanActivate {
  /**
   * Portal 存取必填欄位
   */
  private essentialKeys = ['userID', 'token', 'sysId', 'site', 'plant'];

  /**
   * @param options           Portal 路由守衛配置
   */
  constructor(
    @Inject(PORTAL_GUARD_OPTION) private readonly options: PortalGuardOption
  ) {
    this.essentialKeys = this.options?.essentialKeys || this.essentialKeys;
  }

  /**
   * 是否允許訪忘該頁面
   *
   * @method public
   * @param route 路由快照
   * @return 回傳是否允許訪忘該頁面
   */
  public canActivate(route: ActivatedRouteSnapshot): boolean {
    // 檢視是否允許訪問頁面
    return this.essentialKeys
      .map((key) => route.queryParamMap.keys.includes(key))
      .every((result) => result === true);
  }
}
