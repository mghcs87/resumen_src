import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { GlobalModule } from '../global/global.module';
import { SummaryComponent } from './home/component/summary/summary.component';
import { TranslateModule } from '@ngx-translate/core';
import { ContactComponent } from './home/component/contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    SummaryComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatIconModule,
    PagesRoutingModule,
    GlobalModule
  ]
})
export class PagesModule { }
