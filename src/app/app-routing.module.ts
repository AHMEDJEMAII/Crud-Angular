import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {component:LoginComponent,path:'login'},
  {component:RegisterComponent,path:'register'},
  {component:HomeComponent,path:'',canActivate:[AuthGuard]},
  {component:UserlistingComponent,path:'user',canActivate:[AuthGuard]},



  {path:"", component:FrontLayoutComponent, children:[
       {path:"front", loadChildren:()=>import("./views/front/home/home.module").then(m=>m.HomeModule)},
       {path:"user", loadChildren:()=>import("./views/front/user/user.module").then(m=>m.UserModule)},
  
  ]},
  {path:"admin",component: AdminLayoutComponent, children: [
       {path:"dashboard",  canActivate:[AuthGuard] , loadChildren:()=>import ("./views/admin/dashboard/dashboard.module").then(m=>m.DashboardModule)},    
       {path:"login", canActivate:[AuthGuard] , loadChildren:()=>import ("./views/admin/login-admin/login-admin.module").then(m=>m.LoginAdminModule)},
       {path:"universite",  canActivate:[AuthGuard] , loadChildren:()=>import ("./views/admin/universite/universite.module").then(m=>m.UniversiteModule)}, 
       {path:"reservation", canActivate:[AuthGuard] , loadChildren:()=>import ("./views/admin/reservation/reservation.module").then(m=>m.ReservationModule)},
       {path:"foyer", canActivate:[AuthGuard] ,loadChildren:()=>import ("./views/admin/foyer/foyer.module").then(m=>m.FoyerModule)},
       {path:"etudiant" ,canActivate:[AuthGuard] , loadChildren:()=>import ("./views/admin/etudiant/etudiant.module").then(m=>m.EtudiantModule)}
       
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }

