import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

type ThemeMode = 'system' | 'dark';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  themeMode = signal<ThemeMode>('system');

  isDarkForced = computed(() => this.themeMode() === 'dark');

  ngOnInit() {
    const saved = localStorage.getItem('theme') as ThemeMode | null;
    if (saved === 'dark') {
      this.themeMode.set('dark');
      document.documentElement.classList.add('theme-dark');
    } else {
      this.themeMode.set('system');
      document.documentElement.classList.remove('theme-dark');
    }
  }

  toggleTheme() {
    if (this.themeMode() === 'system') {
      this.themeMode.set('dark');
      document.documentElement.classList.add('theme-dark');
      localStorage.setItem('theme', 'dark');
    } else {
      this.themeMode.set('system');
      document.documentElement.classList.remove('theme-dark');
      localStorage.removeItem('theme');
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
