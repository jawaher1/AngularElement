import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { MinotoreWidgetService } from '@minotoreproject/widgetcore';
import { LibraryService } from '../services/library.service'
import { SaleService } from '../services/sale.service';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'barchart-app',
  templateUrl: './custom-widget.component.html',
  styleUrls: ['./custom-widget.component.css'],
  providers: [MinotoreWidgetService]
})
export class CustomWidgetComponent implements OnInit {
  public widgetSelector: string;
  // Provide the characteristics host with the widget input id
  @Input() public widgetConfigId: string;
  // Provide the characteristics host with the widget input id
  @Input() public widgetConfiguration: string;
  @Input() public libraryName: string = "Lib1";
  public booksNames: any[] = []
  public SoldUnits: any[] = []
  public bookPrices: any[] = []
  public sales: any[] = []
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,

  };

  public mbarChartLabels: string[] = this.booksNames
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartColors: Array<any> = [

    {
      backgroundColor: 'rgba(77,20,96,0.3)',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)'
    }
  ];

  // Components Options to be bound to the library's component in the HTML template
  public options: any;

  constructor(private minotoreWidgetService: MinotoreWidgetService, private elementRef: ElementRef, private libraryservice: LibraryService, private saleservice: SaleService) {

  }

  ngOnInit() {
    this.getSales(this.libraryName);
    this.sales = this.CalculateSales(this.SoldUnits, this.bookPrices)


  }


  public barChartData: any[] = [
    { data: this.SoldUnits, label: ' Sales' },
  ];



  public getSales(libName) {
    console.log(this.libraryName)
    this.saleservice.getSalesbyLibrary(libName).subscribe((data) => {
      for (let k in data) {
        this.booksNames.push(data[k].bookName);
        this.SoldUnits.push(data[k].unitsSold)
        this.bookPrices.push(data[k].bookPrice)
      }
      console.log(this.booksNames);
      console.log(this.SoldUnits);
      console.log(this.bookPrices);
    }
      , error => {
        console.log(error);
      })
  }


  
  CalculateSales(l1, l2) {
    var res = []
    for (let i in l1) {
      res.push(l1[i] * l2[i])

    }
    return res
  }


}