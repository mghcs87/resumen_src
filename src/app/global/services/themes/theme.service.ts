import { Injectable } from '@angular/core';
import { LocalConfigService } from '../localConfig/local-config.service';

export const STORAGE_DARK_THEME = 'dark_theme'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private localConfigService: LocalConfigService) { }

  get themeDark(): boolean{
    return this.localConfigService.getFlag(STORAGE_DARK_THEME);
  }

  initTheme(){
    const dark = this.localConfigService.getFlag(STORAGE_DARK_THEME);
    this.setAppTheme(dark);
  }

  setAppTheme(dark: boolean){
    document.body.classList.toggle('dark', dark);
    this.localConfigService.setFlag(STORAGE_DARK_THEME, dark);
  }
  
}
