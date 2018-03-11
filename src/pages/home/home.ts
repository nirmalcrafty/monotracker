import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DetailsPage } from '../details/details';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any;
  constructor(public navCtrl: NavController, public app: App, public authService: AuthServiceProvider) {

  }
  ngOnInit() {
    this.authService.getPosts("sports", 5).subscribe(response => {
      console.log(response._body);
      this.items = response.data.children;
    });

    // this.authService.getIssueDetails().subscribe(response =>{
    //   console.log(response);
    // });

  }

  viewItem(item) {
    this.navCtrl.push(DetailsPage, { item: item })
  }
  logout() {
    const root = this.app.getRootNav();
    root.popToRoot();
  }
}
