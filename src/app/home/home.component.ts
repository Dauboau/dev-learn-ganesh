import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { FooterComponent } from "../components/footer/footer.component";
import { GaneshDataService } from '../ganesh-data.service';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, TranslocoModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  language:string

  constructor(
    private translocoService: TranslocoService,
    private ganeshDataService: GaneshDataService
  ) {
    this.language = this.translocoService.getActiveLang();
  }

  title: string = "";
  subtitile: string = "";
  about: string[] = [];

  ngOnInit() {
    this.ganeshDataService.getGaneshData().subscribe({
      next: (data) => {
        const homeData = data.informacoes[this.language.toLowerCase() as 'pt-br' | 'en-us'];
        this.title = homeData.grupo;
        this.subtitile = homeData.subtitulo;
        this.about = homeData.sobre;
      },
      error: (error) => {
        console.error('Error: ', error);
      }
    });
  }

}
