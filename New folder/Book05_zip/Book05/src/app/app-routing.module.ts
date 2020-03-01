import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'toc',
    loadChildren: () => import('./toc/toc.module').then( m => m.TOCPageModule)
  },
  {
    path: 'chapter1',
    loadChildren: () => import('./chapter1/chapter1.module').then( m => m.Chapter1PageModule)
  },
  {
    path: 'chapter2',
    loadChildren: () => import('./chapter2/chapter2.module').then( m => m.Chapter2PageModule)
  },
  {
    path: 'chapter3',
    loadChildren: () => import('./chapter3/chapter3.module').then( m => m.Chapter3PageModule)
  },
  {
    path: 'chapter4',
    loadChildren: () => import('./chapter4/chapter4.module').then( m => m.Chapter4PageModule)
  },
  {
    path: 'chapter5',
    loadChildren: () => import('./chapter5/chapter5.module').then( m => m.Chapter5PageModule)
  },
  {
    path: 'chapter6',
    loadChildren: () => import('./chapter6/chapter6.module').then( m => m.Chapter6PageModule)
  },
  {
    path: 'chapter7',
    loadChildren: () => import('./chapter7/chapter7.module').then( m => m.Chapter7PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
