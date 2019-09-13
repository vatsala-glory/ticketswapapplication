import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';
import { Event } from './event';

@Component({
  selector: 'app-ticket-result',
  templateUrl: './ticket-result.component.html',
  styleUrls: ['./ticket-result.component.scss']
})
export class TicketResultComponent implements OnInit {

  constructor( private route: ActivatedRoute, private dataService : DataService) { }

  availableEventlist: Event;

  ngOnInit() {
    this.route.params.subscribe(data => {
     this.dataService.fetchData(data.data)
     .subscribe((data) => {
       this.availableEventlist = data['data'];
     })
    });
  }

}
