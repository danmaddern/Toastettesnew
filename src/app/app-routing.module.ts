import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
/* import { GalleryComponent } from './gallery/gallery.component'; */
import { LocationComponent } from './location/location.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent
                },
  { path: 'contact', component: ContactusComponent
                },
  { path: 'menu', component: MenuComponent
                 },
  { path: 'about', component: AboutComponent
                },
  { path : 'gallery', component: GalleryComponent},
 { path : 'location' , component: LocationComponent
                }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
