import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AddEditResolverDirective } from './directives/add-edit-resolver.directive';
import { ReusableCardModule } from './reusable-card/reusable-card.module';
import { LogoutBtnModule } from './logout-btn/logout-btn.module';
import { LoginComponent } from './login/login.component';

// menu module
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    AddEditResolverDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    TabViewModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReusableCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    LogoutBtnModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
