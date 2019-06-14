import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
/*if sort need types.. seems it work anyhow
export interface Car {
  ranking: number;
  number: number;
  state: string;
  category: string;
  team: string;
  tyre: string;
  driver: string;
  car: string;
}*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'lemantiming';
//  npm install cors-anywhere  ; cd node_modules/cors-anywhere/lib;  npm run start
  url = 'http://localhost:8080/https://storage.googleapis.com/fiawec-prod/assets/live/WEC/__data.json';

  
  private HttpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }),
    withCredentials: false
}

displayedColumns: string[] = [
  "ranking", 
  //"categoryPosition",
  "number",
  "state", 
  "category", 
  "team", 
  "tyre", 
  "driver",
  "car",
  //"lap",
  "gap",
  "pitstop",
  "bestlap",
  "bestSector1",
  "bestSector2",
  "bestSector3",
  "currentSector1",
  "currentSector2",
  "currentSector3"];

public constructor(private http: HttpClient)
  {

  }

  public obj: Object = new Object();
  public objstr : string = "";
  public isinited : boolean = false;

  public entries:[];

  public dataSource = new MatTableDataSource();
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  async getjson() : Promise<void>
  {
    console.log("get from " + this.url);

    this.obj = await this.http.get<Object>(this.url, this.HttpOptions).toPromise();
    this.objstr = this.obj.toString();
    this.entries = this.obj["entries"];
    this.dataSource = new MatTableDataSource(this.entries);
    if(!this.sort)
      console.log("wtf);")
    this.dataSource.sort = this.sort;

    this.isinited = true;
    console.log(this.entries);
    console.log(this.obj);

  }

  ngAfterViewInit()
  {
    console.log("ngAfterViewInit");
    this.getjson();

  }
  ngOnInit()
  {
  }

}
