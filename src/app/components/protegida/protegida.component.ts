import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authu.service';
import { ConnectionData } from '../model/connection.data.model';


@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})

export class ProtegidaComponent implements OnInit {

  public rawdata: ConnectionData[] = new Array<ConnectionData>();
  public dataconnection;

  constructor(public auth: AuthService) {
  }



  ngOnInit(): void {
    console.log('ngOnInit protegida');

    this.auth.userProfile$.subscribe(
      data => this.rawdata = data,
      error => console.log(error)
    );
    this.rawdata = Object.values(this.rawdata);
   
    this.dataconnection = {
      data: [
        {email: this.rawdata[7], given_name: this.rawdata[0], name: this.rawdata[3],
         sub: this.rawdata[9], locate: this.rawdata[5], nickname: this.rawdata[2],
         picture: this.rawdata[4], update_at: this.rawdata[6], family_name: this.rawdata[1],
         email_verified: this.rawdata[8]}
      ]
    };
   /*
    this.dataconnection['email'] =this.rawdata[7];
    this.dataconnection['given_name'] =this.rawdata[0];
    this.dataconnection['name'] =this.rawdata[3];
    this.dataconnection['sub'] =this.rawdata[9];
    this.dataconnection['locate'] =this.rawdata[5];
    this.dataconnection['nickname'] =this.rawdata[2];
    this.dataconnection['picture'] =this.rawdata[4];
    this.dataconnection['updated_at'] =this.rawdata[6];
    this.dataconnection['family_name'] =this.rawdata[1];
    this.dataconnection['email_verified'] =this.rawdata[8];
    */

    //console.log(this.dataconnection);
  }

}
