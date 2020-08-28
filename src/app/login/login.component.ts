import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  // users = [
  //   { email: "abc@com.au", pwd: "123" },
  //   { email: "abd@com.au", pwd: "123" },
  //   { email: "abe@com.au", pwd: "123" }
  // ];

  email: string;
  password: string;
  showmessage = false;
  hidemessage = true;
  uri: string = "http://localhost:3000";
  // http: any;

  constructor(
    private router: Router,
    private form: FormsModule,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  itemClicked() {
    const obj = {
      email: this.email,
      upwd: this.password
    };

    // this.http.get(`${this.uri}/api/login/${this.email}&${this.password}`).
    this.http.post(`${this.uri}/api/auth`, obj).subscribe(data => {
      if (Object.keys(data).length === 0 && data.constructor === Object) {
        this.showmessage = true;
        this.hidemessage = false;
      } else {
        // this.aaa = data;
        console.log(data);
        sessionStorage.setItem("user", JSON.stringify(data));
        // this.router.navigateByUrl(
        //   "/account/" + encodeURIComponent(JSON.stringify(data))
        // );
        this.router.navigateByUrl("/profile");
      }
    });
  }
}
