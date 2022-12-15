import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CreateUserData } from 'src/models/createUser-data.models';
import { UsersService } from 'src/app/services/users.service';
import { ImageSnippet } from 'src/models/image-snippet.models';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  createData!: CreateUserData;
  public form!: FormGroup;
  public selectedFile!: ImageSnippet;
  public imgSrc!: string;

  constructor(private service: UsersService) {}
  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = new FormGroup({
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
      skillName: new FormControl(),
      skillLevel: new FormControl(),
      languageName: new FormControl(),
      languagelevel: new FormControl(),
    });
  }

  public CreateUserForm(event: any): void {
    this.createData = this.form.getRawValue();
    this.createData.image = document
      .querySelector('#img__preview')
      ?.getAttribute('src');
    this.service.postUsers(this.createData).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => console.log(error)
    );
  }

  public previewFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imgSrc = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
