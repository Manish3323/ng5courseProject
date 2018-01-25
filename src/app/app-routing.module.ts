import { NgModule } from '@angular/core/';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    { path : 'recipes' , loadChildren: './recipes/recipes.module#RecipesModule'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}