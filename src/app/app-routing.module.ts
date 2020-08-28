import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AccountComponent } from "./account/account.component";
import { ProfileComponent } from "./profile/profile.component";
import { LogoutComponent } from "./logout/logout.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "account/:email", component: AccountComponent },
  { path: "profile", component: ProfileComponent },
  { path: "logout", component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
