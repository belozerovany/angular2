import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../app/home/home.component";
import { UserSettingsComponent } from "../app/user-settings/user-settings.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "settings", component: UserSettingsComponent }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
