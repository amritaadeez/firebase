import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  collection = [{
      
      
    "firstName": "01",
    imageurl: "assets/categories/cat-1.png",
    "userName": "LoremIpsum",
    "email": "LoremIpsum@lorem"

},
{


"firstName": "02",
imageurl: "assets/categories/cat-2.png",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "03",
imageurl: "assets/categories/cat-3.png",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "04",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "05",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "06",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "07",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "08",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "09",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "10",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "11",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "12",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "13",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "14",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "15",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "16",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

}

];

p: number = 1;
  showAction: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  editAction(){
    this.showAction = true
  }
  cancelAction(){
    this.showAction = false
  }

}
