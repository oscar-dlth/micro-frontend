import { loadRemoteModule } from '@angular-architects/module-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'microfrontend',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      type: 'module',
      exposedModule: './Module'
    })
    .then(m => m.AbcModule)
  }
];
