import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('Test Recipe','This is simply a test','https://i.ytimg.com/vi/vX3_ooFc88o/maxresdefault.jpg'),
    new Recipe('Test Recipe','This is simply a test','https://i.ytimg.com/vi/vX3_ooFc88o/maxresdefault.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
