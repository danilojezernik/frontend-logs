import {Component, inject, OnInit} from '@angular/core';
import {HypnosisStudioAlenService} from "../../../../services/api/hypnosis-studio-alen-api.service";

@Component({
  selector: 'app-index',
  templateUrl: './index-hypnosis-studio-alen.component.html'
})
export class IndexHypnosisStudioAlenComponent implements OnInit {

  _api = inject(HypnosisStudioAlenService)

  privateActionCount: number | undefined;
  publicActionCount: number | undefined;
  backendActionCount: number | undefined;

  ngOnInit() {
    this.loadAllActionCounts()
  }

  loadAllActionCounts() {
    this._api.getAllPrivateLogs().subscribe(data => {
      this.privateActionCount = data.length;
    })

    this._api.getAllPublicLogs().subscribe(data => {
      this.publicActionCount = data.length;
    })

    this._api.getAllBackendLogs().subscribe(data => {
      this.backendActionCount = data.length;
    })
  }


}
