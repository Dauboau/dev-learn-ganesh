import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LanguageService } from '../../language.service';
import { SupportedLanguage } from '../../enums/SupportedLanguage';

@Component({
  selector: 'app-header',
  imports: [NgbDropdownModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    private languageService: LanguageService
  ) {}

  selectedLanguage: string = this.languageService.getLanguage();

  selectLanguage(language: string): void {
    this.languageService.setLanguage(language as SupportedLanguage);
    this.selectedLanguage = this.languageService.getLanguage();
  }

}
