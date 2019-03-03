import { Component, OnInit } from '@angular/core';
import { Donee } from '../donee.model';
import { DataService } from '../data.service';
import { Donor } from '../donor.model';
import { Transaction } from '../transaction.model';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  di: Transaction[];

  constructor(private dataService: DataService,private orderPipe: OrderPipe) { 
    //console.log(this.orderPipe.transform(this.array, this.order)); // both this.array and this.order are from above example AppComponent
  }

  ngOnInit() {
    return this.dataService.getTransaction()
    .subscribe( data => this.di = data );
  }

}
