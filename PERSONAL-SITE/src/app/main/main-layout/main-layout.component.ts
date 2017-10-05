import { Component, OnInit } from '@angular/core';
import { Page, Pages } from '../shared/utilities';
import { NavigationService } from '../shared/navigation.service';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  pages: Array<Page>
  currentPage: Page;
  test;
  
  constructor(private nav: NavigationService) {}
  ngOnInit(): void {
    this.pages = Pages;
    this.nav.currentPage.subscribe((page: Page) => {
      this.currentPage = page
    });
  }

  navigate(input: number){
    this.nav.next(this.currentPage, input);
  }
}