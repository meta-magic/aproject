/**
 * Created by Sagar Jadhav.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {TopNavBarComponent} from "../layout/topnavbar.component";
import {AmexioWidgetModule} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component:HomeComponent,
    children: [
          	{
     	path: 'core/aprj', loadChildren: './../pages/testyy/core/aprj/aprj.module#AprjModule'
     	},	
	     	{
     	path: 'core/asfafui', loadChildren: './../pages/testyy/core/asfafui/asfafui.module#AsfafuiModule'
     	},	
	     	{
     	path: 'dsf/uuu', loadChildren: './../pages/adsdda/dsf/uuu/uuu.module#UuuModule'
     	},	
	    ]
  }
];


@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    TopNavBarComponent
  ]
})
export class HomeModule {
}