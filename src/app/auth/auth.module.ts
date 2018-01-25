import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent
    ],
    imports: [
        AuthRoutingModule,
        SharedModule
    ]
})
export class AuthModule{}