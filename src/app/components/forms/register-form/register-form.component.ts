import { Component, OnInit } from '@angular/core';
import { Gender } from '../../../models/Gender';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  genders: any = Gender;

  constructor() { }

  ngOnInit(): void {
  }

}
