import { Injectable, OnInit } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { UserData } from './userdata.model';

@Injectable({
  providedIn: 'root'
})
export class Model  {

 private userdata = new Array;

 private rawdata: UserData[] = new Array<UserData>();
 private interm: UserData[] = new Array<UserData>();
 private flag: boolean;

 constructor(private dataSource: RestDataSource) {

    this.dataSource.getData().subscribe(data => {this.rawdata = data['_embedded'];
                                                 console.log(this.rawdata);
                                                 this.rawdata = this.rawdata['usuarios'];
                                                 //this.interm.push(this.rawdata[0]);
                                                 console.log(this.interm);
                                                 /*for (let i = 0; i < this.rawdata.length; i++) {
                                                  if(this.rawdata[i].idUsuario ='1212121AAAA'){this.flag = true;}
                                                 }*/

});

  }

 getData(): UserData[] {

 return this.rawdata;

 }

 saveData(userdata: UserData) {
    //if(this.flag == true){}
    this.dataSource.saveData(userdata).subscribe(p => this.userdata.push(p));
  
 }


}
