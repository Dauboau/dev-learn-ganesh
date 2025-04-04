import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { FooterComponent } from "../components/footer/footer.component";
import { HomeService } from './home.service';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  language:string

  constructor(
    private translocoService: TranslocoService,
    private homeService: HomeService
  ) {
    this.language = this.translocoService.getActiveLang();
  }

  title: string = "";
  subtitile: string = "";

  ngOnInit() {
    this.homeService.getGaneshData().subscribe({
      next: (data) => {
        const homeData = data.informacoes[this.language.toLowerCase() as 'pt-br' | 'en-us'];
        this.title = homeData.grupo;
        this.subtitile = homeData.subtitulo;
      },
      error: (error) => {
        console.error('Error: ', error);
      }
    });
  }

}
