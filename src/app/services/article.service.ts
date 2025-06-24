import { Injectable } from '@angular/core';
import { ArticleInterface } from '../interfaces/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'https://dev.to/api/articles';

  async getArticles(): Promise<ArticleInterface[]> {
    const res = await fetch(this.apiUrl);
    if (!res.ok) throw new Error('Error al obtener los artículos');
    const data = await res.json();

    return data.map((item: any) => {
      // Asegura que los tags sean un arreglo
      const tags = Array.isArray(item.tag_list)
        ? item.tag_list
        : (item.tag_list || '').split(',').map((tag: string) => tag.trim());

      return {
        ...item,
        tag_list: tags
      } as ArticleInterface;
    });
  }

  async getArticleById(id: string): Promise<ArticleInterface> {
    const res = await fetch(`${this.apiUrl}/${id}`);
    if (!res.ok) throw new Error('Artículo no encontrado');
    const item = await res.json();

    const tags = Array.isArray(item.tag_list)
      ? item.tag_list
      : (item.tag_list || '').split(',').map((tag: string) => tag.trim());

    return {
      ...item,
      tag_list: tags
    } as ArticleInterface;
  }
}
