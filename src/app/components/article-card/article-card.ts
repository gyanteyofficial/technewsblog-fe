import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, DatePipe, RouterLink],
  templateUrl: './article-card.html',
  styleUrl: './article-card.css',
})
export class ArticleCardComponent {
  @Input() article!: Article;
  @Input() featured = false;

  getCategoryClass(cat: string): string {
    return cat.toLowerCase().replace(/[^a-z]/g, '');
  }
}
