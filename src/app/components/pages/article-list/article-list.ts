import { Component } from '@angular/core';
import { ArticleService } from '../../../services/article.service';
import { ArticleInterface } from '../../../interfaces/article.interface';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './article-list.html',
  styleUrl: './article-list.css'
})
export class ArticleList {
  articles: ArticleInterface[] = [];
  loading = true;
  error = '';

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
  this.articleService.getArticles()
    .then(data => {
      console.log(data); // Agrega esto para verificar si llegan datos
      this.articles = data;
      this.loading = false;
    })
    .catch(err => {
      this.error = 'Error al cargar los artículos';
      this.loading = false;
    });
}

}
