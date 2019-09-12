import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from './music.service';

@Component({
  selector: 'app-ticket-result',
  templateUrl: './ticket-result.component.html',
  styleUrls: ['./ticket-result.component.scss']
})
export class TicketResultComponent implements OnInit {

  constructor( private route: ActivatedRoute, private musicService : MusicService) { }

  ngOnInit() {
    //Inject a service to fetch the data for param.
    this.route.params.subscribe(data => {
      this.musicService.fetchData(data.data);
    });
  }

}
