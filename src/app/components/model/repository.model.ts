import { Injectable, OnInit } from '@angular/core';
import { RestDataSource } from "./rest.datasource";
import { UserData } from './userdata.model';

@Injectable({
  providedIn: 'root'
})
export class Model  {

 private userdata;
 private final: UserData[] = new Array<UserData>();
 private rawdata: UserData[] = new Array<UserData>();
 private interm: UserData[] = new Array<UserData>();

 constructor(private dataSource: RestDataSource) {

    this.dataSource.getData().subscribe(data => {this.rawdata = data['_embedded'];
                                                 //console.log(this.rawdata);
                                                 this.rawdata = this.rawdata['usuarios'];
                                                 this.interm.push(this.rawdata[0]);
                                                 console.log(this.interm);
});

  }

 getData(): UserData[] {

 return this.interm;

 }

 saveData(userdata: UserData) {
   if (userdata.idUsuario == null) {
      this.dataSource.saveData(userdata)
      .subscribe(p => this.userdata.push(p));
      }
 }
 

}
