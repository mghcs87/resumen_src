import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalConfigService } from './global/services/localConfig/local-config.service';

export const STORAGE_LANG = 'lang'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private translate: TranslateService,
    private localConfigService: LocalConfigService
  ) { }

  ngOnInit() {
    this.translate.setDefaultLang(this.localConfigService.getObject(STORAGE_LANG) || 'en');
  }
  
}
