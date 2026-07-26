import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('School-management-system');

  theme = localStorage.getItem('theme') || 'light';
  thm = this.theme;

  ngOnInit() {
    const menu = document.querySelector('.menu') as HTMLElement;
    const cont = document.querySelector('.container') as HTMLElement;
    const header = document.querySelector('header') as HTMLElement;

    if (this.theme === 'dark') {
      menu.classList.add('darken');
      cont.classList.add('dark');
      header.classList.add('dark');
      this.thm = 'dark';
    } else {
      menu.classList.remove('darken');
      cont.classList.remove('dark');
      header.classList.remove('dark');
      this.thm = 'light';
    }
  }

  toggleMenu() {
    const menu = document.querySelector('.menu') as HTMLElement;
    menu.classList.toggle('opened');
  }

  closeMenu() {
    const menu = document.querySelector('.menu') as HTMLElement;
    menu.classList.remove('opened');
  }

  toggleTheme() {
    const menu = document.querySelector('.menu') as HTMLElement;
    const cont = document.querySelector('.container') as HTMLElement;
    const header = document.querySelector('header') as HTMLElement;

    menu.classList.toggle('darken');
    cont.classList.toggle('dark');
    header.classList.toggle('dark');

    if (this.theme === 'light') {
      this.theme = 'dark';
      this.thm = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      this.theme = 'light';
      this.thm = 'light';
      localStorage.setItem('theme', 'light');
    }
  }

  reloadPage() {
    window.location.reload();
  }
}
