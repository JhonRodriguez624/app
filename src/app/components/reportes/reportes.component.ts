import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/app/services/authu.service';
//import { HttpprocedService } from 'src/app/services/httpproced.service';
import { Model } from '../model/repository.model';
import { UserData } from '../model/userdata.model';





@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
})



export class ReportesComponent implements OnInit {
  private userdata: UserData = new UserData();
  
  constructor(public auth: AuthService, private model: Model) { }

  submitForm(form: NgForm) {
    if (form.valid) {
    this.model.saveData(this.userdata);
    this.userdata = new UserData();
    form.reset();
    }
    }
 
  resetForm() {
    this.userdata = new UserData();
    }
    
  ngOnInit(): void {
  }

}
