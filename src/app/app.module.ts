import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { UserSettingsComponent } from "./user-settings/user-settings.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "../routing/app-routing.module";

@NgModule({
  declarations: [AppComponent, UserSettingsComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
