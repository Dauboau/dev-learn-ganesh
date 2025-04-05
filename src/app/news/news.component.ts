import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { FooterComponent } from "../components/footer/footer.component";
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { News } from '../../interfaces/GaneshData';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { GaneshDataService } from '../ganesh-data.service';

@Component({
  selector: 'app-news',
  imports: [HeaderComponent, FooterComponent, TranslocoModule, CommonModule, NgbPaginationModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  language:string

  constructor(
    private translocoService: TranslocoService,
    private ganeshDataService: GaneshDataService
  ) {
    this.language = this.translocoService.getActiveLang();
  }

  news: News[] = [
    {
      titulo: '',
      descricao: ''
    }
  ];
  
  pageSize = 5;
  page = 1;

  ngOnInit() {
    this.ganeshDataService.getGaneshData().subscribe({
      next: (data) => {
        this.news = data.noticias[this.language.toLowerCase() as 'pt-br' | 'en-us'];
      },
      error: (error) => {
        console.error('Error: ', error);
      }
    });
  }

}
