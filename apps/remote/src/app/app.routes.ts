import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./abc/abc.module').then(m => m.AbcModule)
  }
];
