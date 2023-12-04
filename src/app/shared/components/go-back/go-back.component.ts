import {Component, inject} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'go-back',
  templateUrl: './go-back.component.html'
})
export class GoBackComponent {

  _location = inject(Location)

  goBack() {
    this._location.back()
  }
}
