import { AppServiceService } from './../../services/app-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { ProfileMenuPage } from '../popup/profile-menu/profile-menu.page';
import { SearchChefModel } from './models/searchChef';

@Component({
  selector: 'app-search-chef',
  templateUrl: './search-chef.page.html',
  styleUrls: ['./search-chef.page.scss'],
})
export class SearchChefPage implements OnInit {
  dish : any = [];
  returnDataFromModal : any;
  constructor(private modalCtrl : ModalController,private service: AppServiceService, public loadingController: LoadingController, private router: Router,public popoverController: PopoverController) { }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllDishes().subscribe((res) => {
        this.dish = res.document.records;
        console.log(this.dish);
        this.loadingController.dismiss();
      });
    });
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please Wait .. ",
    });
    await loading.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
     component: ProfileMenuPage,
      event: ev,
      mode: 'ios',
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
  }

  goToEvent() {}
  notificationModal(en : any){}
  presentModal(en : any) {}
}
