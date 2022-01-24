import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalConfigService {

  constructor() { }

  setObject(storageKeyObject: string, value: any) {
    localStorage.setItem(storageKeyObject, JSON.stringify(value));
  }

  getObject(storageKeyObject: string): any {
    return  JSON.parse(localStorage.getItem(storageKeyObject) as string) || null;
  }

  removeObject(storageKeyObject: string) {
    localStorage.removeItem(storageKeyObject);
  }

  setFlag(storageKeyFlag: string, value: boolean) {
    if (value) {
      localStorage.setItem(storageKeyFlag, '1');
    } else {
      localStorage.setItem(storageKeyFlag, '0');
    }
  }

  getFlag(storageKeyFlag: string): boolean {
    let val = localStorage.getItem(storageKeyFlag);
    return val === '1';
  }

  removeFlag(storageKeyObject: string) {
    localStorage.removeItem(storageKeyObject);
  }
}
