import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
    private translocoService: TranslocoService,
    private router: Router
  ) {
    this.selectedLanguage = this.translocoService.getActiveLang();
  }

  selectLanguage(language: string): void {
    this.translocoService.setActiveLang(language);
    this.selectedLanguage = language;

    const url = this.router.url;
    this.router.navigateByUrl("/dummy", { skipLocationChange: true }).then(() => {
      this.router.navigate([url]);
      console.log("ok");
    });

  }

}
