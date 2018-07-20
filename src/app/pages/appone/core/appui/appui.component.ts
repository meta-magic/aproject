/**
 * Created by: deepali arvind
 * Date: 20/07/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'appui',
	templateUrl: 'appui.component.html'
})
export class AppuiComponent implements OnInit
{
	appuiModel:AppuiModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.appuiModel=new AppuiModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class AppuiModel
{
}
