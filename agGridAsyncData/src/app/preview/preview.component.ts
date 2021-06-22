import { Component, OnInit } from '@angular/core';
import { ColumnApi, GridApi, GridReadyEvent, ValueSetterParams } from 'ag-grid-community';
import { combineLatest, forkJoin, from, Observable, of, Subject } from 'rxjs';
import { concatMap, delay, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  private subject = new Subject<boolean>();

  nodeDecorator: any = {};

  getRowNodeId: any;

  columnDefs = [
    {
      field: 'make'
    },
    {
      field: 'model'
    },
    {
      field: 'price',
      sortable: true
    }
  ];

  rowData: any[] = [];

  private gridApi!: GridApi;
  private columnApi!: ColumnApi;

  constructor(
    private data: DataService
  ) {

  }

  ngOnInit(): void {
    this.getRowNodeId = function (data: any) {
      return data.id;
    };

    combineLatest([
      this.loadCars(),
      this.subject.asObservable()
    ])
      .subscribe(
        (datas: any[]) => {
          console.log('forkJoin: ', datas);
          this.rowData = datas[0];
          this.loadPrices(datas[0]);
        }
      );
  }

  onGridReady({api, columnApi}: GridReadyEvent): void {
    console.log('onGridReady');

    this.gridApi = api;
    this.columnApi = columnApi;

    this.subject.next(true);
  }

  private loadCars(): Observable<any[]> {
    return this.data.getCars()
      .pipe(
        delay(2000),
        map(
          (data: any[]) => {
            const arr: any[] = [];
            data.forEach(d => {
              arr.push({...d, price: -1})
            })
            return arr;
          }
        )
      );
  }

  private loadPrices(arr: any[]) {
    console.log('loadPrices');

    from(arr)
      .pipe(
        tap(
          dat => console.log('tap: ', dat)
        ),
        mergeMap((x:any) => {
          return this.data.getPrice(x.id)
        })
      )
      .subscribe(price => {
        console.log('price: ', price);


        const index = this.rowData.findIndex((row: any) => row.id === price.id);
        if (index !== -1) {
        //   this.rowData[index] = { ...this.rowData[index], price: price.price };
          this.rowData[index].price = price.price;

          const id = this.rowData[index].id;
          console.log('id: ', id);

          const rowNode = this.gridApi.getRowNode(id);
          if (rowNode) {
            console.log('rowNode:', rowNode);
            rowNode.setDataValue('price', price.price);
          }

        }
      })



  }

}
