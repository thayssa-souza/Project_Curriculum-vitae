import { FormGroup, FormControl } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';
import { ContactFormData } from 'src/models/contact-form-data.models';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  @Output() public sendForm: EventEmitter<ContactFormData> = new EventEmitter<ContactFormData>();
  public form!: FormGroup;

  ngOnInit(){
    this.buildForm();

  }

  private buildForm(): void{
    this.form = new FormGroup({
      nome: new FormControl(),
      email: new FormControl(),
      message: new FormControl(),
    });

  }

  public submitForm(): void {
    //this.sendForm.emit(this.form);
    alert("mensagem enviada")
    console.log(this.form);
   }



}
