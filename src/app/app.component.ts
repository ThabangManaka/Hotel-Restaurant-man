import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from './services/app-service.service';
import { Platform } from '@ionic/angular';

import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Search Chef', url: '/search-chef', icon: 'search' },
    { title: 'Setting', url: '/setting', icon: 'settings' },
    { title: 'Payment History', url: '/payment', icon: 'wallet' },
    { title: 'My Orders', url: '/my-orders', icon: 'pricetags' },
    { title: 'Profile Page', url: '/profile-page', icon: 'person-circle' },
    { title: 'Messages', url: '/messages', icon: 'create' },
    { title: 'Filters', url: '/filters', icon: 'filter' },
    { title: 'Book A Chef', url: '/book-achef', icon: 'bookmarks' },
    { title: 'Change Address', url: '/change-address', icon: 'locate' },
    { title: 'My Favourite', url: '/my-favourite', icon: 'mail' },
    { title: 'Your Order', url: '/your-order', icon: 'checkmark-done' },
    { title: 'Chef Details', url: '/chef-details', icon: 'person' },
    { title: 'Preferences', url: '/preferences', icon: 'hammer' },
    { title: 'Events', url: '/events', icon: 'calendar' },
    { title: 'Gallery', url: '/gallery', icon: 'camera' },
     { title: 'Blog', url: '/blog', icon: 'book' },
     { title: 'Support', url: '/support', icon: 'accessibility' },
    { title: 'FAQs & Help', url: '/faq', icon: 'apps' },
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Register', url: '/register', icon: 'person-add' },
    { title: 'Forget Password', url: '/forget-password', icon: 'key' },
    { title: 'Phone Verification', url: '/verify-phone', icon: 'call' },
    { title: 'Onboard Screen', url: '/swipper', icon: 'toggle' },
  ];
  public labels = [];
  constructor(  private router: Router,
    private service: AppServiceService,
    private platform: Platform,) {
      this.initializeApp()
    }



   initializeApp() {
    this.platform.ready().then(() => {
     // this.statusBar.styleDefault();
      //this.splashScreen.hide();
    });
     //this.pushToAppOnboarding();
   }
}
