/**
 * Created by: deepali arvind
 * Date: 10/07/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'aprj',
	templateUrl: 'aprj.component.html'
})
export class AprjComponent implements OnInit
{
	aprjModel:AprjModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.aprjModel=new AprjModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class AprjModel
{
	 email: string; 
	 password: string; 
}
