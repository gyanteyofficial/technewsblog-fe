import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CATEGORIES } from '../../models/article.model';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-filter.html',
  styleUrl: './category-filter.css',
})
export class CategoryFilterComponent {
  @Input() selected = 'All';
  @Output() categoryChange = new EventEmitter<string>();

  categories = CATEGORIES;

  select(cat: string) {
    this.categoryChange.emit(cat);
  }

  getCategoryClass(cat: string): string {
    return cat.toLowerCase().replace(/[^a-z]/g, '');
  }
}
