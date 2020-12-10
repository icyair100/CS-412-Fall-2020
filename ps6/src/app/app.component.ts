import { Component, OnInit } from '@angular/core';
import {jokes} from './data/jokesMOCK';
import {Joke} from './data/Joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ps6';
  jokes: Joke[] = jokes;
  Joke: Joke;
  selectedJoke: Joke;
  fubar: any;

  isShowDivIf = false;

  toggleData(): void {
    this.isShowDivIf = !this.isShowDivIf;
  }

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedJoke(joke: Joke): void {
    this.selectedJoke = joke;
    console.log(`${joke.setup}`);
  }
}
