import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CreateUserData } from 'src/models/createUser-data.models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  createData!: CreateUserData;
  public form!: FormGroup;

  constructor(private service: UsersService) {}
  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      languages: new FormControl(),
      loginData: new FormGroup({
        userName: new FormControl(),
        password: new FormControl(),
        date: new FormControl(new Date()),
      }),
      personalInformationData: new FormGroup({
        name: new FormControl(),
        occupation: new FormControl(),
        cpf: new FormControl(),
        zipCode: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        email: new FormControl(),
        phone: new FormControl(),
      }),
      skillData: new FormGroup({
        skillName: new FormControl(),
        level: new FormControl(),
      }),
    });
  }

  public CreateUserForm(event: any): void {
    this.createData = this.form.getRawValue();
    this.service.postUsers(this.createData).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => console.log(error)
    );
  }
}
