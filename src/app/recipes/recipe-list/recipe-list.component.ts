import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Feijoada', 'uma bela feijoada completa.', 'https://img.cybercook.uol.com.br/receitas/776/fei' +
      'joada.jpeg?w=583&h=350&fit=max'),
    new Recipe('Lasanha', 'Lasanha a bolonhesa.', 'https://guiadacozinha.com.br/wp-content/uploads/2014/01/Lasanha-carne-cenoura.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
