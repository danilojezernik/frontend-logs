import {Component, inject, OnInit} from '@angular/core';
import {HypnosisStudioAlenService} from "../../../../../services/api/hypnosis-studio-alen-api.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-unique-counts',
  templateUrl: './unique-counts.component.html'
})
export class UniqueCountsComponent implements OnInit {

  _api = inject(HypnosisStudioAlenService)
  uniqueClientHosts: any[] = [];

  ngOnInit() {
    this.getUniqueClientHosts()

  }

  getUniqueClientHosts() {
    this._api.showAllUniqueClientHostBackend().subscribe((data) => {
      this.uniqueClientHosts = data;
    })
  }

  exportToExcel(): void {
    this._api.exportUniqueClientHosts().subscribe(
      (data: Blob) => {

        // Create a Blob URL for the Excel file
        const blobUrl = URL.createObjectURL(data);

        // Create a link element and trigger a download
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'unique_client_hosts.xlsx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Release the Blob URL
        URL.revokeObjectURL(blobUrl);
      },
      error => {
        console.error('Error exporting to Excel:', error);
        if (error instanceof HttpErrorResponse) {
          console.error(`Status: ${error.status}, ${error.statusText}`);
        }
      }
    );
  }
}
