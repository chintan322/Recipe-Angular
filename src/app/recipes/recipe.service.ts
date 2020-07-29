import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Dhosa',
      'South Indian Fastfood',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Banjo_Shark_recipe.jpg/1200px-Banjo_Shark_recipe.jpg',
      [new Ingredient('Rice', 10), new Ingredient('urad dal', 20)]
    ),
    new Recipe(
      'Sendwich',
      'Breakfast food!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Banjo_Shark_recipe.jpg/1200px-Banjo_Shark_recipe.jpg',
      [
        new Ingredient('Potato', 10),
        new Ingredient('Bread', 20),
        new Ingredient('chutney', 5),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
