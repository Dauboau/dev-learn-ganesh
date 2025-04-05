import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './news/news.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: '**',
        component: HeaderComponent
    }
];
