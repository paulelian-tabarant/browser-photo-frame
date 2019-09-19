import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlideshowModule } from 'ng-simple-slideshow';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { AlbumLoginComponent } from './album-login/album-login.component';
import { AlbumComponent } from './album/album.component';
import { AlbumEditComponent } from './album-edit/album-edit.component';
import { UserMenuComponent } from './user-menu/user-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    AlbumLoginComponent,
    AlbumComponent,
    AlbumEditComponent,
    UserMenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: AlbumLoginComponent },
      { path: 'albumView/:name', component: AlbumComponent },
      { path: 'userMenu', component: UserMenuComponent },
      { path: 'albumEdit/:name', component: AlbumEditComponent },
    ], { useHash: true }),
    SlideshowModule,
    HttpClientModule,
    FormsModule,
    FileUploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
