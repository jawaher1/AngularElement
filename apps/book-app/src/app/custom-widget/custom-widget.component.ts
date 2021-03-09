import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { MinotoreWidgetService } from '@minotoreproject/widgetcore';
import { Subscription } from 'rxjs';
import { BookService } from '../services/book.service';
import { LibraryService } from '../services/library.service'
import { NovelService } from '../services/novel.service';
import { MagazineService } from '../services/magazine.service'
import { Book } from '../models/book.model'
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { FormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { merge } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { exit } from 'process';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'book-widget',
  templateUrl: './custom-widget.component.html',
  styleUrls: ['./custom-widget.component.css'],
  providers: [MinotoreWidgetService, BookService]
})
export class CustomWidgetComponent implements OnInit {
  public widgetSelector: string;
  // Provide the characteristics host with the widget input id
  @Input() public widgetConfigId: string;
  // Provide the characteristics host with the widget input id
  @Input() public widgetConfiguration: string;
  @Input() public libraryName: string;

  LibForm: FormGroup;
  public placeholder: string = 'Select a library';
  books : any[] = []
  novels = []
  magazines = []

  LibOptions: string[] = ["all"];

  // Components Options to be bound to the library's component in the HTML template
  public options: any;

  constructor(private minotoreWidgetService: MinotoreWidgetService, private elementRef: ElementRef,
    private formBuilder: FormBuilder,

    private bookservice: BookService,
    private libraryservice: LibraryService,
    private novelservice: NovelService,
    private magazineservice: MagazineService
  ) {

  }
  ngOnInit() {
    this.getAllBooks()

    this.LibForm = new FormGroup({
      library: new FormControl(''),
    });
    this.LibForm = this.formBuilder.group({
      library: '',
    });
    this.libraryservice.getLibraries().subscribe((data) => {
      for (let k in data) {
        this.LibOptions.push(data[k].name);
      }
      console.log(this.LibOptions);
    }
      , error => {
        console.log(error);
      })

    


  }
  
  

  onChange(deviceValue) {
    this.libraryName = deviceValue["itemData"].value
    console.log(this.libraryName)
    this.getBooks(this.libraryName)
  }

  getBooks(libraryName) {
    if (libraryName == "all") {
      this.bookservice.getBooks().subscribe(
        data => {
          this.books = data
          console.log(this.books)
        },
        error => {
          console.log(error)
        })
    }
    else {

      this.bookservice.getBooksbyLibrary(this.libraryName).subscribe(
        data => {
          this.books = data

        },
        error => {
          console.log(error)
        })
    }
    console.log(this.books)
  }
  getAllBooks(){
    this.bookservice.getBooks().subscribe(
      data => {
        this.books = data
        console.log(this.books)
      },
      error => {
        console.log(error)
      })
  }



}

