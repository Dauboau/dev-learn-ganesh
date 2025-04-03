import { Injectable } from '@angular/core';
import { SupportedLanguage } from './enums/SupportedLanguage';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private language: SupportedLanguage = SupportedLanguage.PT;

  constructor() {

  }

  setLanguage(language: SupportedLanguage): void {
    this.language = language;
  }

  getLanguage(): SupportedLanguage {
    return this.language;
  }

}


