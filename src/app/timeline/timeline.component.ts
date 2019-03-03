import { Component, OnInit } from '@angular/core';
import { Track } from '../track.model';
import { DataService } from '../data.service';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  tokenValue:string;
  trans1: Transaction[];
  trans2: Track[];

  constructor(private dataService: DataService) { }

  ngOnInit() {


  }
  serv(token:any) {
    this.tokenValue=token
    console.log(this.tokenValue);
    this.dataService.getTransaction()
    .subscribe(data => { this.trans1 = data, console.log(data) });

    this.dataService.getTrack()
      .subscribe(data1 => { this.trans2 = data1, console.log(data1) });
  }


}
