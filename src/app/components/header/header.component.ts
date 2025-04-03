import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  imports: [NgbDropdownModule,RouterModule,TranslocoModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  selectedLanguage:string

  constructor(
    private translocoService: TranslocoService
  ) {
    this.selectedLanguage = this.translocoService.getActiveLang();
  }

  selectLanguage(language: string): void {
    this.translocoService.setActiveLang(language);
    this.selectedLanguage = language;
  }

}
