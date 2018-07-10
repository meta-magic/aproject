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
	selector: 'asfafui',
	templateUrl: 'asfafui.component.html'
})
export class AsfafuiComponent implements OnInit
{
	asfafuiModel:AsfafuiModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.asfafuiModel=new AsfafuiModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class AsfafuiModel
{
}
