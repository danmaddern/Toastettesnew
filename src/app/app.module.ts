import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { EmailComponent } from './email/email.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
/* import { GalleryComponent } from './gallery/gallery.component'; */
import { ContactusComponent } from './contactus/contactus.component';
import { OrdernowComponent } from './ordernow/ordernow.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { GalleryComponent } from './gallery/gallery.component';
import {NgxGalleryModule} from 'ngx-gallery';
import {SharedModule} from './shared/shared.module';

/* import { GalleryModule } from '@ngx-gallery/core'; */
/* import { LightboxModule } from 'ngx-lightbox';
import {GallerizeModule} from '@ngx-gallery/gallerize'; */

@NgModule({
  exports: [
    MatButtonModule,
    MatToolbarModule,
  ]
})
export class MaterialModule { }

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    EmailComponent,
    MenuComponent,
    FooterComponent,
    /* GalleryComponent, */
    ContactusComponent,
    OrdernowComponent,
    HomeComponent,
    AboutComponent,
    LocationComponent,
    GalleryComponent,
    /* LightboxModule, GallerizeModule */

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    NgxGalleryModule,
    SharedModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

