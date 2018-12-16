import { Component } from "@angular/core";
import { Angulartics2GoogleAnalytics } from "angulartics2/ga";
import { SEOService } from "./services/seo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private seoService: SEOService
  ) {
    angulartics2GoogleAnalytics.startTracking();
    this.seoService.addSeoData();
  }
  title = "gift-exchange";
}
