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
	selector: 'uhu',
	templateUrl: 'uhu.component.html'
})
export class UhuComponent implements OnInit
{
	uhuModel:UhuModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.uhuModel=new UhuModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class UhuModel
{
}
