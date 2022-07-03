import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.scss']
})
export class ProgramsListComponent implements OnInit {

  collection = [{
      
      
    "firstName": "01",
    imageurl: "assets/categories/cat-1.png",
    "userName": "LoremIpsum",
    "email": "10"

},
{


"firstName": "02",
imageurl: "assets/categories/cat-2.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "03",
imageurl: "assets/categories/cat-3.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "04",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "05",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "06",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "07",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "08",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "09",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "10",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "11",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "12",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "13",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "14",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "15",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "16",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

}

];

p: number = 1;
showAction: boolean;

  constructor() { }

  ngOnInit(): void {
  }


}
