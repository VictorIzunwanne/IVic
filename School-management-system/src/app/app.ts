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
  menuIcon = 'menu';

  ngOnInit() {
    const menu = document.querySelector('.menu') as HTMLElement;
    const cont = document.querySelector('.container') as HTMLElement;
    const header = document.querySelector('header') as HTMLElement;
    const thmBtn = document.querySelector('.theme-btn') as HTMLElement;

    if (this.theme === 'dark') {
      menu.classList.add('darken');
      cont.classList.add('dark');
      header.classList.add('dark');
      this.thm = 'dark';
      thmBtn.style.border = '1px solid #fff';
    } else {
      menu.classList.remove('darken');
      cont.classList.remove('dark');
      header.classList.remove('dark');
      this.thm = 'light';
      thmBtn.style.border = '1px solid #000';
    }
  }

  toggleMenu() {
    const menu = document.querySelector('.menu') as HTMLElement;
    menu.classList.toggle('opened');

    const shadow = document.querySelector('.shadow') as HTMLElement;
    shadow.classList.toggle('show');

    menu.classList.contains('opened') ? (this.menuIcon = 'close') : (this.menuIcon = 'menu');
  }

  closeMenu() {
    const menu = document.querySelector('.menu') as HTMLElement;
    menu.classList.remove('opened');

    const shadow = document.querySelector('.shadow') as HTMLElement;
    shadow.classList.remove('show');

    this.menuIcon = 'menu';
  }

  toggleTheme() {
    const menu = document.querySelector('.menu') as HTMLElement;
    const cont = document.querySelector('.container') as HTMLElement;
    const header = document.querySelector('header') as HTMLElement;
    const thmBtn = document.querySelector('.theme-btn') as HTMLElement;

    menu.classList.toggle('darken');
    cont.classList.toggle('dark');
    header.classList.toggle('dark');

    if (this.theme === 'light') {
      this.theme = 'dark';
      this.thm = 'dark';
      localStorage.setItem('theme', 'dark');
      thmBtn.style.border = '1px solid #fff';
    } else {
      this.theme = 'light';
      this.thm = 'light';
      localStorage.setItem('theme', 'light');
      thmBtn.style.border = '1px solid #000';
    }
  }

  reloadPage() {
    window.location.reload();
  }
}
