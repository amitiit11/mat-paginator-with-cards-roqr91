import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef,ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator,MatSort } from '@angular/material';
import { ModelComponent } from './model/model.component';

export interface Card {
  title: string;
  image:string;
  subtitle: string;
  text: string;
  flag:boolean;
  poc:string;
  technology:string;
  domain:string;
}

const DATA: Card[] = [
  {
    title: 'Shiba Inu 1',
    subtitle: 'Dog Breed',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    flag:false,
    poc:"shiba.inu1@gmail.com",
    technology:"angular",
    domain:"development"
  },
  {
    title: 'Shiba Inu 2',
    subtitle: 'Dog Breed',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    flag:false,
    poc:"shiba.inu2@gmail.com",
    technology:"angular",
    domain:"development"
  },
  {
    title: 'Shiba Inu 3',
    subtitle: 'Dog Breed',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    flag:false,
    poc:"shiba.inu3@gmail.com",
    technology:"angular",
    domain:"development"
  },
  {
    title: 'Shiba Inu 4',
    subtitle: 'Dog Breed',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    flag:false,
    poc:"shiba.inu4@gmail.com",
    technology:"angular",
    domain:"development"
  },
  {
    title: 'Shiba Inu 5',
    subtitle: 'Dog Breed',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    flag:false,
    poc:"shiba.inu5@gmail.com",
    technology:"angular",
    domain:"support"
  },
  {
    title: 'Shiba Inu 6',
    subtitle: 'Dog Breed',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    flag:false,
    poc:"shiba.inu6@gmail.com",
    technology:"angular",
    domain:"support"
  },
  {
    title: 'Shiba Inu 7',
    subtitle: 'Dog Breed',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    flag:false,
    poc:"shiba.inu7@gmail.com",
    technology:"angular",
    domain:"development"
  },
  {
    title: 'Shiba Inu 8',
    subtitle: 'Dog Breed',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    flag:false,
    poc:"shiba.inu8@gmail.com",
    technology:"angular",
    domain:"development"
  },
  {
    title: 'Shiba Inu 9',
    subtitle: 'Dog Breed',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    flag:false,
    poc:"shiba.inu9@gmail.com",
    technology:"angular",
    domain:"development"
  },
  {
    title: 'Shiba Inu 10',
    subtitle: 'Dog Breed',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    flag:false,
    poc:"shiba.inu10@gmail.com",
    technology:"angular",
    domain:"development"
  },
  {
    title: 'Shiba Inu 11',
    subtitle: 'Dog Breed',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    flag:false,
    poc:"shiba.inu11@gmail.com",
    technology:"angular",
    domain:"development"
  },
  {
    title: 'Shiba Inu 12',
    subtitle: 'Dog Breed',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    flag:false,
    poc:"shiba.inu1@gmail2.com",
    technology:"angular",
    domain:"development"
  },{
    title: 'Shiba Inu 13',
    subtitle: 'Dog Breed',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    flag:false,
    poc:"shiba.inu13@gmail.com",
    technology:"angular",
    domain:"development"
  },
  {
    title: 'Shiba Inu 14',
    subtitle: 'Dog Breed',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    flag:false,
    poc:"shiba.inu1@gmail.com",
    technology:"angular",
    domain:"development"
  },
  {
    title: 'Shiba Inu 15',
    subtitle: 'Dog Breed',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    flag:false,
    poc:"shiba.inu15@gmail.com",
    technology:"angular",
    domain:"development"
  },{
    title: 'Shiba Inu 16',
    subtitle: 'Dog Breed',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    flag:false,
    poc:"shiba.inu16@gmail.com",
    technology:"angular",
    domain:"development"
  },{
    title: 'Shiba Inu 17',
    subtitle: 'Dog Breed',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    flag:false,
    poc:"shiba.inu17@gmail.com",
    technology:"angular",
    domain:"development"
  },
  {
    title: 'Shiba Inu 18',
    subtitle: 'Dog Breed',
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    flag:false,
    poc:"shiba.inu18@gmail.com",
    technology:"angular",
    domain:"development"
  }
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public category = ['One','Two','County', 'Three', 'Zebra', 'XiOn'];
    
  searchText='';
  toggleSearch: boolean = false;
  selected='';
  
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort: MatSort;
  @ViewChild('searchbar',{static: false}) searchbar: ElementRef;
  @ViewChild('modal', {static: false}) modal: ModelComponent;

 
  obs: Observable<any>;
  dataSource: MatTableDataSource<Card> = new MatTableDataSource<Card>(DATA);

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }
  public filteredList1 = this.category.slice();

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.obs = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }
  details(){

    console.log(this.dataSource)
  }

  applyFilter(filterValue: string) {
    console.log(filterValue)
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  openSearch() {
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }
  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
  }
  openModal() {
    this.modal.open();
  }
}