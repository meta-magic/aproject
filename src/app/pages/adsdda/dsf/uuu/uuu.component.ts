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
	selector: 'uuu',
	templateUrl: 'uuu.component.html'
})
export class UuuComponent implements OnInit
{
	uuuModel:UuuModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.uuuModel=new UuuModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class UuuModel
{
}
