import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormUserComponent } from './form-user/form-user.component';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, FormUserComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
