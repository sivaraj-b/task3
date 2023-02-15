import { Component,OnInit } from '@angular/core';
import { ApicallService } from './service/apicall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'task3';

  public apiData : any[] =[];

  constructor(private _apiCallservice : ApicallService ){}


  ngOnInit(){
    this._apiCallservice.getData().subscribe(data => this.apiData =data);
  }
}
