import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostsResolver } from './post.resolver.service';
const routes: Routes = [{
  path: 'post',
  component: PostComponent,
  // data : { someProp: propValue},
  resolve: {
      posts: PostsResolver
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
