import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Article } from './components/pages/article/article';
import { NotFound } from './components/pages/not-found/not-found';
import { ArticleList } from './components/pages/article-list/article-list';
import { ArticleDetail } from './components/pages/article-detail/article-detail';

export const routes: Routes = [
  { 
    path: '',
    redirectTo:'home', 
    pathMatch:'full' 
  },
  { 
    path: 'home', 
    component: Home, 
    title: 'Home | Principal'
  },
  { 
    path: 'article', 
    component: Article, 
    title: 'Article'
  },
  { 
    path: 'articles', 
    component: ArticleList,
    title:'Articles | Lista'
  },
  { 
    path: 'articles/:id', 
    component: ArticleDetail, 
    title:'Article | Detalles'
  },
  { path: '**', 
    component: NotFound, 
    title: 'Error 404 | Page Not Found'
  }
];
