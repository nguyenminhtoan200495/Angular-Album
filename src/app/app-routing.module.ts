import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { PostsComponent }   from './posts/posts.component';
import { AlbumsComponent }      from './albums/albums.component';
import { PhotosComponent }  from './photos/photos.component';


const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'photos', component: PhotosComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
