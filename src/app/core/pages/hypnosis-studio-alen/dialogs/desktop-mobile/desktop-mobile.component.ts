import {Component, inject, OnInit} from '@angular/core';
import {HypnosisStudioAlenService} from "../../../../../services/api/hypnosis-studio-alen-api.service";

@Component({
  selector: 'app-desktop-mobile',
  templateUrl: './desktop-mobile.component.html'
})
export class DesktopMobileComponent implements OnInit {

  _api = inject(HypnosisStudioAlenService)

  desktopCount: number = 0;
  mobileCount: number = 0;

  ngOnInit() {
    this.fetchCounts('Desktop');
    this.fetchCounts('Mobile');
  }

  fetchCounts(deviceType: string) {
    this._api.getCountByDevice(deviceType).subscribe(
      (data) => {
        if(deviceType == 'Desktop') {
          this.desktopCount = data.count;
        } else if (deviceType == 'Mobile') {
          this.mobileCount = data.count;
        }
      }, error => {
        console.error(error)
      }
    )
  }
}
