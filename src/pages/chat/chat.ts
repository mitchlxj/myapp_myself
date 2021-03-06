import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatdetailsPage } from '../chatdetails/chatdetails';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { WebsocketProvider } from '../../providers/websocket/websocket';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  users: string[];

  chatdetailsPage: any;

  chatMessageCount:number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rest: RestProvider,
    public storage: Storage,
    public websocket:WebsocketProvider
  ) {

    this.chatdetailsPage = ChatdetailsPage;
  }

  ionViewDidLoad() {
    this.storage.get('UserId').then(userId => {
      if(userId != null){
        this.rest.getUsersList(userId)
        .subscribe(users => {
          this.users = users;

          
        })
      }
    })

  }

  ionViewDidEnter(){
    console.log(this.websocket.chatMessageCount);
    this.chatMessageCount = this.websocket.chatMessageCount;
  }

}
