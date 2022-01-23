import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadComponent } from './components/bad/bad.component';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    BadComponent,
    NavbarComponent
  ],
  exports: [
    BadComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class GlobalModule { }
