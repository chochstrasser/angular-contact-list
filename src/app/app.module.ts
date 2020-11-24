import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { ButtonComponent } from './components/button/button.component';
import { MainComponent } from './components/layout/main/main.component';
import { EditComponent } from './components/layout/edit/edit.component';
import { AddComponent } from './components/layout/add/add.component';

@NgModule({
  declarations: [AppComponent, TableComponent, ButtonComponent, MainComponent, EditComponent, AddComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
