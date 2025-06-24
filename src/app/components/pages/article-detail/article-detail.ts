import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleInterface } from '../../../interfaces/article.interface';
import { ArticleService } from '../../../services/article.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.css',
})
export class ArticleDetail {
   article!: ArticleInterface;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.articleService.getArticleById(id)
      .then(data => {
        this.article = data;
        this.loading = false;
      })
      .catch(err => {
        console.error(err);
        this.error = 'Error al cargar el artículo';
        this.loading = false;
      });
  }
}
