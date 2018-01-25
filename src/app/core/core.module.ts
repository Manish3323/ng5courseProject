import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { DataStorageService } from '../shared/datastorage.service';
import { AuthService } from '../auth/auth.service';
import { RecipesService } from '../Services/recipes.service';

@NgModule({
    declarations:[
        HomeComponent,
        HeaderComponent
    ],
    imports:[
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        RecipesService,
        DataStorageService,
        AuthService
    ]
})
export class CoreModule{

}