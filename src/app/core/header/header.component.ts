import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { RecipesService } from '../../Services/recipes.service';
import { DataStorageService } from '../../shared/datastorage.service';
import { Recipe } from '../../recipeList/recipe.model';
import { AuthService } from '../../auth/auth.service';
import * as fromApp from '../../store/app.reducer';
import * as fromAuth from '../../auth/store/auth.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;
  // tslint:disable-next-line:max-line-length
  constructor(private dataService: DataStorageService, private store: Store <fromApp.AppState>,private recipeServ: RecipesService, public authService: AuthService){}
  ngOnInit(){
    this.authState = this.store.select('auth');
  }
  saveRecipes() {
    this.dataService.saveRecipes().subscribe((res: Promise<any>) => {
      console.log(res);
    });
  }
  fetchRecipes() {
    this.dataService.fetchRecipes();
  }
}
