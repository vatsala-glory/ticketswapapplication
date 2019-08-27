import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-result',
  templateUrl: './ticket-result.component.html',
  styleUrls: ['./ticket-result.component.scss']
})
export class TicketResultComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    //Inject a service to fetch the data for param.
    this.route.params.subscribe(data => {
      console.log(data.data)
    });
  }

}
