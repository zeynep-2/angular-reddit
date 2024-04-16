import { Component, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  /*
  votes: number;
  title: string;
  link: string;
  */
  @Input() article!: Article; /* we created an external Article class article.model.ts */
  constructor() {
    /*this.title = 'Angular'; this.link = 'http://angular.io'; this.votes = 10;*/
    /*this.article = new Article(
      'Angular',
      'http://angular.io',
      10
    );*/
  }
  voteUp() {
    this.article.votes += 1;
    return false;
  }
  voteDown() {
    this.article.votes -= 1;
    return false;
  }
  ngOnInit() {
  }

}
