import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/models';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent {
  nameControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(2),
  ]);

  surnameControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(2),
  ]);

  emailControl = new FormControl(null, [Validators.required, Validators.email]);

  passwordControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(20),
  ]);

  userForm = new FormGroup<IUser>({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
    password: this.passwordControl,
  });

  onSave() {
    alert(JSON.stringify(this.userForm.value));
  }
}
