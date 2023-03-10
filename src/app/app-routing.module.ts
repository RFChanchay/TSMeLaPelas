import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate
} from '@angular/fire/auth-guard';
import { LoginPage } from './pages/login/login.page';
import { TabsPageModule } from './tabs/tabs.module';
const redirectUnauthorizedToLogin = ()=> redirectUnauthorizedTo('login');
const redirectLoggedInToHome = ()=> redirectLoggedInTo('tabs');


const routes: Routes = [
  {
    path: '',
    //component:TabsPageModule,
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
    
  },
  {
    path:'tabs',
    loadChildren : () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'eventinfo',
    loadChildren: () => import('./pages/eventinfo/eventinfo.module').then( m => m.EventinfoPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
    ...canActivate(redirectLoggedInToHome)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
