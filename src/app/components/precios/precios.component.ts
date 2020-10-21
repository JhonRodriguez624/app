import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authu.service';
import { Model } from '../model/repository.model';
import { RestDataSource } from '../model/rest.datasource';
import { UserData } from '../model/userdata.model';




@Component({

  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styles: [],

})

export class PreciosComponent implements OnInit{


  showTable: boolean;

  constructor(public auth: AuthService, private model: Model) {
  }
  getData(): UserData[]{

    return this.model.getData();

  }

  imprimir() {
    this.showTable = true;
  }

  ngOnInit(): void {

  }


}
