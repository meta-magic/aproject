/**
 * Created by: deepali arvind
 * Date: 11/07/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'uitwo',
	templateUrl: 'uitwo.component.html'
})
export class UitwoComponent implements OnInit
{
	uitwoModel:UitwoModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.uitwoModel=new UitwoModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class UitwoModel
{
	 email: string; 
	 password: string; 
}
