import {Component, inject, OnInit} from '@angular/core';
import {HypnosisStudioAlenService} from "../../../../services/api/hypnosis-studio-alen-api.service";
import {DesktopMobileComponent} from "../dialogs/desktop-mobile/desktop-mobile.component";
import {MatDialog} from "@angular/material/dialog";
import {UniqueCountsComponent} from "../dialogs/unique-counts/unique-counts.component";

@Component({
  selector: 'app-index',
  templateUrl: './index-hypnosis-studio-alen.component.html'
})
export class IndexHypnosisStudioAlenComponent implements OnInit {

  _dialog = inject(MatDialog)
  _api = inject(HypnosisStudioAlenService)

  privateActionCount: number | undefined;
  publicActionCount: number | undefined;
  backendActionCount: number | undefined;
  uniqueClientHostsAll: number | undefined

  ngOnInit() {
    this.loadAllActionCounts()
    this.getUniqueClientHosts()
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

  openDialogFetchCounts() {
    this._dialog.open(DesktopMobileComponent, {
      width: '350px',
      height: '250px'
    })
  }

  openDialogUniqueCounts() {
    this._dialog.open(UniqueCountsComponent, {
      height: '70%',
      maxWidth: '550px'
    })
  }

  getUniqueClientHosts() {
    this._api.showAllUniqueClientHostBackend().subscribe((data) => {
      this.uniqueClientHostsAll = data.length;
    })
  }

}
