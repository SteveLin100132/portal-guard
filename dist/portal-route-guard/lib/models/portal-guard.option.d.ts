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
 * Portal 路由守衛配置
 */
export interface PortalGuardOption {
    /**
     * Portal 存取必填欄位
     */
    essentialKeys?: string[];
    /**
     * 拒絕訪問重新導入的頁面路徑
     */
    rejectPath?: string;
}
