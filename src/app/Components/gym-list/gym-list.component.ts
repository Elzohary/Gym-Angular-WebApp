import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Igym, Igyms } from 'src/app/Models/igym';
import { GymsService } from 'src/app/Services/gyms.service';

@Component({
  selector: 'app-gym-list',
  templateUrl: './gym-list.component.html',
  styleUrls: ['./gym-list.component.css']
})
export class GymListComponent implements OnInit, OnDestroy {

  /* gyms : Igyms | undefined; */
  gyms: any;
  gymSubscription: Subscription | undefined ;
  constructor(private gymService : GymsService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getGyms();

  }

  getGyms() {
    this.gymSubscription = this.gymService.getAllGyms().subscribe((_gyms)=>{
      this.gyms = _gyms;
    });

    
    }
  

  ngOnDestroy(): void {
    if(this.gymSubscription) {
      this.gymSubscription.unsubscribe();
    }
  }


}
