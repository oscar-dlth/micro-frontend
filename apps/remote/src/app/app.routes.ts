import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./../../../remote/src/app/abc/abc.module').then(m => m.AbcModule)
  }
];
