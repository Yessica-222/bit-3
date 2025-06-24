import { Component } from '@angular/core';
import { ArticleService } from '../../../services/article.service';
import { ArticleInterface } from '../../../interfaces/article.interface';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './article.html',
  styleUrl: './article.css'
})
export class Article {
  articles: ArticleInterface[] = [];
  loading = true;
  error = '';

  constructor(private articleService: ArticleService) {}

  async ngOnInit() {
    try {
      this.articles = await this.articleService.getArticles();
    } catch (err) {
      this.error = 'No se pudieron cargar los artículos.';
    } finally {
      this.loading = false;
    }
  }
}
