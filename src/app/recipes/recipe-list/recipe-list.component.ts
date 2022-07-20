import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes:Recipe[] = [
    new Recipe('Lasagna', 'test description', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Flasagna-beef-10696399.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Flasagna.html&tbnid=mSff-aGaw0AlBM&vet=12ahUKEwiulr6tr8_4AhX4_DgGHZerBbMQMygHegUIARCUAg..i&docid=n9-94MDlzPEvKM&w=800&h=536&q=lasagna%20image&ved=2ahUKEwiulr6tr8_4AhX4_DgGHZerBbMQMygHegUIARCUAg'),
    new Recipe('Pineapple Lasagna', 'test description', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Flasagna-beef-10696399.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Flasagna.html&tbnid=mSff-aGaw0AlBM&vet=12ahUKEwiulr6tr8_4AhX4_DgGHZerBbMQMygHegUIARCUAg..i&docid=n9-94MDlzPEvKM&w=800&h=536&q=lasagna%20image&ved=2ahUKEwiulr6tr8_4AhX4_DgGHZerBbMQMygHegUIARCUAg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe)
  {
    this.recipeWasSelected.emit(recipe);
  }

}
