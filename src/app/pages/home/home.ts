import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero';
import { CategoryFilterComponent } from '../../components/category-filter/category-filter';
import { ArticleCardComponent } from '../../components/article-card/article-card';
import { ARTICLES } from '../../data/articles.data';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, CategoryFilterComponent, ArticleCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  selectedCategory = signal('All');

  sortedArticles = computed(() =>
    [...ARTICLES].sort((a, b) => b.date.getTime() - a.date.getTime())
  );

  filteredArticles = computed(() => {
    const cat = this.selectedCategory();
    const articles = this.sortedArticles();
    return cat === 'All' ? articles : articles.filter((a) => a.category === cat);
  });

  featuredArticles = computed(() =>
    this.filteredArticles().filter((a) => a.featured).slice(0, 2)
  );

  regularArticles = computed(() =>
    this.filteredArticles().filter((a) => !a.featured)
  );

  onCategoryChange(cat: string) {
    this.selectedCategory.set(cat);
  }

  trackById(_: number, article: Article) {
    return article.id;
  }
}
