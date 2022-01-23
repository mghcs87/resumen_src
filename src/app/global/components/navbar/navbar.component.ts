import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { STORAGE_LANG } from 'src/app/app.component';
import { LocalConfigService } from '../../services/localConfig/local-config.service';
import { ThemeService } from '../../services/themes/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  darkTheme: boolean;
  lang: string = 'en';

  constructor(
    private translate: TranslateService,
    private themeService: ThemeService,
    private localConfigService: LocalConfigService
  ) {
    this.darkTheme = this.themeService.themeDark;
  }

  ngOnInit(): void {
    this.lang = this.localConfigService.getObject(STORAGE_LANG) || 'en';
  }

  setLang(value: 'es' | 'en'){
    this.translate.use(value);
    this.localConfigService.setObject(STORAGE_LANG, value);
    this.lang = value;
  }

  setTheme(){
    this.darkTheme = !this.darkTheme;
    this.themeService.setAppTheme(this.darkTheme);
  }

}
