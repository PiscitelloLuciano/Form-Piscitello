import { FormControl } from '@angular/forms';

export interface IUser {
  name: FormControl<string | null>;
  surname: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}
