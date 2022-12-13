import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginFormData } from 'src/models/login-data.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginData!: LoginFormData;
  public form!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      userName: new FormControl(),
      password: new FormControl(),
    });
  }

  public loginForm(event: any): void {
    event.preventDefault();
    this.loginData = this.form.getRawValue();
    console.log(this.loginData);
  }
}
