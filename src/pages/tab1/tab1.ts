import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Tabs} from 'ionic-angular';

/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad Tab1Page');
  }

  toSecondPage(){
    this.navCtrl.push('SecondPage', {pid: 2, pname: '二级页面'});
  }

  toTabs(index: number){
    var t: Tabs = this.navCtrl.parent;
    t.select(index);
  }


}
