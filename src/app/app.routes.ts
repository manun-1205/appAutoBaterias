import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { VentanaPrincipalComponentComponent } from '../app/models/VentanaPrincipal/VentanaPrincipal.component';


export const routes: Routes = [
    { path: '', component: VentanaPrincipalComponentComponent },
    { path: '**', redirectTo: '' }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

