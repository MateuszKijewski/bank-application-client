import { TypeofExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Gender } from '../../../models/gender-enum';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  genders: typeof Gender  = Gender;

  constructor() { }

  ngOnInit(): void {
  }

}
