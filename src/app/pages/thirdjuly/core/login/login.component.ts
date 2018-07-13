/**
 * Created by: deepali arvind
 * Date: 13/07/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'login',
	templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit
{
	loginModel:LoginModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.loginModel=new LoginModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class LoginModel
{
	 email: string; 
	 password: string; 
}
