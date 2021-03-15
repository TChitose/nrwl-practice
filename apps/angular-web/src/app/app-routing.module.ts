import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';

const routes: Routes = [
  { matcher: (url) => {
    if (url.length === 1 && url[0].path === 'list') {
      return {
        consumed: url,
      };
    }
    return null;
  },loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
  { matcher: (url) => {
    if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
      return {
        consumed: url,
        posParams: {
          username: new UrlSegment(url[0].path.substr(1), {})
        }
      };
    }

    return null;
  }, loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) },
  { path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
