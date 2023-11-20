import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {path:"", component:FrontLayoutComponent, children:[
       {path:"", loadChildren:()=>import("./views/front/home/home.module").then(m=>m.HomeModule)},
       {path:"user", loadChildren:()=>import("./views/front/user/user.module").then(m=>m.UserModule)},
  
  ]},
  {path:"admin",component: AdminLayoutComponent, children: [
       {path:"dashboard", loadChildren:()=>import ("./views/admin/dashboard/dashboard.module").then(m=>m.DashboardModule)},    
       {path:"login", loadChildren:()=>import ("./views/admin/login-admin/login-admin.module").then(m=>m.LoginAdminModule)},
       {path:"universite", loadChildren:()=>import ("./views/admin/universite/universite.module").then(m=>m.UniversiteModule)}, 
       {path:"reservation", loadChildren:()=>import ("./views/admin/reservation/reservation.module").then(m=>m.ReservationModule)},
       {path:"foyer",loadChildren:()=>import ("./views/admin/foyer/foyer.module").then(m=>m.FoyerModule)},
       {path:"etudiant",loadChildren:()=>import ("./views/admin/etudiant/etudiant.module").then(m=>m.EtudiantModule)}
       
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
