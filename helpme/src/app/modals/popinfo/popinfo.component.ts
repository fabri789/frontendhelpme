import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  constructor( public router:Router, public popcontroller : PopoverController) { }

  ngOnInit() {}


  irLogin(){
    this.popcontroller.dismiss().then(() => this.router.navigate(['/login']))

}
}
