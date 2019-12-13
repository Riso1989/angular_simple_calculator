import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  showSpinner = false;

  public startSpin() {
    (async () => { 
      this.showSpinner = true;
      await this.delay(5000);
      this.showSpinner = false;
  })();
  }

   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
}
