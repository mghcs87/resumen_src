import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalConfigService } from './global/services/localConfig/local-config.service';
import { ThemeService } from './global/services/themes/theme.service';

export const STORAGE_LANG = 'lang'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private translate: TranslateService,
    private localConfigService: LocalConfigService,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.translate.setDefaultLang(this.localConfigService.getObject(STORAGE_LANG) || 'en');
    this.themeService.initTheme();
  }
  
}
