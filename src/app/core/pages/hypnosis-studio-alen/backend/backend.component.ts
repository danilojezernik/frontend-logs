import {Component, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HypnosisStudioAlenService} from "../../../../services/api/hypnosis-studio-alen-api.service";
import {CalcIndexService} from "../../../../services/calc-index/calc-index.service";
import {MatTableDataSource} from "@angular/material/table";
import {Logging} from "../../../../services/models/logging";
import {Subject} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html'
})
export class BackendComponent implements OnInit, OnDestroy {

  _api = inject(HypnosisStudioAlenService)
  _calculateIndex = inject(CalcIndexService)

  backend: any | undefined;
  spinner: boolean = false;

  dataSource = new MatTableDataSource<Logging>()
  displayColumns: string[] = ['log_id', 'route_action', 'domain', 'client_host', 'content', 'datum_vnosa', 'action']

  private destroy$: Subject<boolean> = new Subject<boolean>();

  /**
   * ViewChild decorator to get a reference to the MatPaginator component.
   * Used to access and manipulate the MatPaginator component in the template.
   *
   */
    // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.loadAllEventsBackend()
  }
  /**
   * Method to handle actions after the view and child views are initialized.
   * Assigns the paginator to the MatTable dataSource.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; // Assign the paginator to the MatTable dataSource
  }

  loadAllEventsBackend() {
    this.spinner = true;
    this._api.getAllBackendLogs().subscribe( (data) => {
      this.backend = data;
      this.dataSource.data = data;
      this.spinner = false
    }, error => {
      console.error(error)
      this.spinner = false
    })
  }

  deleteLog(id: string) {
    this.spinner = true
    this._api.deleteBackendById(id).subscribe(() => {
      this.spinner = false;
      this.loadAllEventsBackend()
    })
  }

  deleteAllLogs() {
    if (confirm('Ali si prepričan, da želiš izbrisati vse vnose?')) {
      this.spinner = true;
      this._api.deleteBackend().subscribe(() => {
        this.spinner = false;
        this.loadAllEventsBackend()
      })
    }
  }

  calculateIndex(element: any): number {
    // The `calculateIndex` method calls the service's `calculateIndex` method
    // to calculate the index of the given element.
    return this._calculateIndex.calculateIndex(this.dataSource, element);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
