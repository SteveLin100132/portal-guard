# Wistron I40 Portal Guard

# Install

```
npm i portal-route-guard --save
```

# Table of Contents

- [Feature](#feature)
- [Usage](#usage)
- [Additional](#additional)

# Feature

- Portal 路由守衛模組 - 檢查系統是否是透過 Portal 訪問

# Usage

## Initial Module

初始化 Portal 路由守衛模組，`forRoot` 在有需要提供拒絕存取的頁面時添加即可

app.module.ts

```typescript
import { PortalGuardModule } from 'wistroni40-portal-guard';
...

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortalGuardModule.forRoot({ rejectPath: '/rejection' }),
  ],
  ...
})
export class AppModule {}
```

## Setup Route

設定路由，將頁面的路由透過 `canActivate` 確保該頁面需先從 Portal 進入後才可訪問

app-routing.module.ts

```typescript
import { PortalGuard } from 'wistroni40-portal-guard';
...

const routes: Routes = [
  // 需透過 Portal 進入後才可訪問的頁面，非 Lazy Load 同樣適用
  {
    path: 'your_path',
    loadChildren: () => import('your_target').then((m) => m.PageModule),
    canActivate: [PortalGuard],
  },
  // 提供拒絕存取的頁面
  {
    path: 'your_reject_path',
    loadChildren: () => import('your_rejection').then((m) => m.RejectionModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

> 完成 `Initial Module` 及 `Setup Route` 即可使用

# Additional

## Use Service

若需要單獨在其他的 Schematic 中驗證，可透過 `PortalAccessmentService` 進行判斷

app.component.ts

```typescript
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { PortalAccessmentService } from "wistroni40-portal-guard";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: PortalAccessmentService
  ) {}

  public ngOnInit(): void {
    this.route.queryParams
      .pipe(map(() => this.service.canActivate(this.route.snapshot)))
      .subscribe((accessed) => console.log(accessed));
  }
}
```

## Portal Guard Option

Portal 路由守衛模組配置

| Parameter     |   Type   | Required |                    Default                    | Description                        |
| :------------ | :------: | :------: | :-------------------------------------------: | :--------------------------------- |
| essentialKeys | string[] | Optional | ['userID', 'token', 'sysId', 'site', 'plant'] | 透過 Portal 訪問必要的參數         |
| rejectPath    |  string  | Optional |                   undefined                   | 拒絕訪問頁面後要重新路由的頁面路徑 |
