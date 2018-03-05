import { PageInterface } from './menu';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: '页面1', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home' },
    { title: '页面2', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'contacts' },
    { title: '页面3', pageName: 'TabsPage', tabComponent: 'Tab3Page', index: 2, icon: 'contacts' },
    { title: '特殊的', pageName: 'SpecialPage', icon: 'home' },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index};
    }
    console.log(page);
    console.log(params);
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      console.log('--41--');
        this.nav.getActiveChildNav().select(page.index);
    } else {
      console.log('--44--');
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
  }

}