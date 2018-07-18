/**
 * Created by: deepali arvind
 * Date: 17/07/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'uitesxt',
	templateUrl: 'uitesxt.component.html'
})
export class UitesxtComponent implements OnInit
{
	uitesxtModel:UitesxtModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.uitesxtModel=new UitesxtModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class UitesxtModel
{
}
