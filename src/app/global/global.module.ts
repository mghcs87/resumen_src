import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadComponent } from './components/bad/bad.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    BadComponent
  ],
  exports: [
    BadComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class GlobalModule { }
