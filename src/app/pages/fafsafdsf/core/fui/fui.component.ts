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
	selector: 'fui',
	templateUrl: 'fui.component.html'
})
export class FuiComponent implements OnInit
{
	fuiModel:FuiModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.fuiModel=new FuiModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class FuiModel
{
}
