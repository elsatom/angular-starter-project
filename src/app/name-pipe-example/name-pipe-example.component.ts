import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-pipe-example',
  templateUrl: './name-pipe-example.component.html',
  styleUrls: ['./name-pipe-example.component.css']
})
export class NamePipeExampleComponent implements OnInit {

  myName: string;
  names = [];
  constructor() {
    this.myName = 'elsa p tom';
    this.names = [
      { firstName: 'elsa', id: 1 },
      { firstName: 'tom', id: 2 },
      { firstName: 'john', id: 3 },
      { firstName: 'merlin', id: 4 },
      { firstName: 'sunil', id: 5 }
    ];
  }

  ngOnInit() {
  }

}
