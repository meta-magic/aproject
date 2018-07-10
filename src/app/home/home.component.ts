import {Component} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'homeqq',
  templateUrl: 'home.html'
})
export class HomeComponent {
   menuData:any;	
  constructor(private _router : Router){
    
 this.menuData=[{"text":"Core","expand":true,"children":[{"text":"Aprj","routerLink":"core/aprj","selected":false},{"text":"Asfafui","routerLink":"core/asfafui","selected":false}]},{"text":"Dsf","expand":true,"children":[{"text":"Uuu","routerLink":"dsf/uuu","selected":false}]}];   }
  routeToLink(data: any){
     if(!data.hasOwnProperty('children') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
}
