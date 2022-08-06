import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastDetailsComponent } from './public/cast/cast-details.component';
import { GenreComponent } from './public/genre/genre.component';
import { MovieDatailsComponent } from './public/movie/movie-datails.component';
import { MovieComponent } from './public/movie/movie.component';

const routes: Routes = [
  { path: "", component: MovieComponent },
  { path: "Genre", component: GenreComponent },
  { path: "Movie-Details/:movieId", component: MovieDatailsComponent },
  { path: "Cast-Details/:castId", component: CastDetailsComponent },
  { path: "Account", loadChildren: () => import("./account/account.module").then(mod => mod.AccountModule) },
  { path: "Admin", loadChildren: () => import("./admin/admin.module").then(mod => mod.AdminModule) },
  { path: "User", loadChildren: () => import("./user/user.module").then(mod => mod.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
