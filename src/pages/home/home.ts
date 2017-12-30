import {Component} from "@angular/core";
import {PhionicGameManager} from "./PhionicGameManager";
import {ScreenOrientation} from "@ionic-native/screen-orientation";
import {Platform} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private screenOrientation: ScreenOrientation, public platform: Platform) {
    this.lockInPortraitMode();
    new PhionicGameManager().start();
  }

  private lockInPortraitMode() {
    if (this.onAPhone()) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
  }

  private onAPhone() {
    return this.platform.is('cordova');
  }
}
