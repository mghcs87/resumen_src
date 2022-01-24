import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadComponent } from './components/bad/bad.component';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    BadComponent,
    FooterComponent,
    NavbarComponent
  ],
  exports: [
    BadComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class GlobalModule { }
