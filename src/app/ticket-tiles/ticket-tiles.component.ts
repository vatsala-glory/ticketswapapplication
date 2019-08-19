import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-tiles',
  templateUrl: './ticket-tiles.component.html',
  styleUrls: ['./ticket-tiles.component.scss']
})


export class TicketTilesComponent implements OnInit {
  @Input() tile: String;

  constructor() { }

  ngOnInit() {
    console.log(this.tile);
  }

}
