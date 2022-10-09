import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  TypesDocuments: any = ['Cedula de Ciudadania', 'Pasaporte', 'Tarjeta Identidad'];
  Locations: any = ['Usme', 'Kennedy', 'Engativa']
  TypeIncapacity: any = ['Fisica', 'Mental']
  Poblations: any = ['Afro', 'Nativos']
  DiferentialFocus: any = ['Test']

  constructor() { }

  ngOnInit(): void {
  }

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  username: string="";
  password: string="";
  names: string ="";
  surnames: string ="";
  typeDocument: string="";
  numberDocument: string="";
  direction: string="";
  cellphone: string="";
  ocupation: string="";
  show: boolean= false;

  submit(){
    console.log("user name is " + this.names)
    this.clear();
  }

  clear(){
    this.names ="";
    this.surnames = "";
    this.typeDocument = "";
    this.numberDocument = "";
    this.direction = "";
    this.show = true;
  }
}
