/**
 * Created by: deepali arvind
 * Date: 19/07/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'loginui',
	templateUrl: 'loginui.component.html'
})
export class LoginuiComponent implements OnInit
{
	loginuiModel:LoginuiModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.loginuiModel=new LoginuiModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class LoginuiModel
{
	 email: string; 
	 password: string; 
}
