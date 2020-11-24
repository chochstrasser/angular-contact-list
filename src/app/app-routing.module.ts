import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/layout/main/main.component';
import { EditComponent } from './components/layout/edit/edit.component';
import { AddComponent } from './components/layout/add/add.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'edit', component: EditComponent },
  { path: 'add', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
