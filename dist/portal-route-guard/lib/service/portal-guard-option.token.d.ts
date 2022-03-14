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
import { PortalGuardOption } from '../models';
/**
 * Portal 路由守衛配置注入 Token
 */
export declare const PORTAL_GUARD_OPTION: InjectionToken<PortalGuardOption>;
