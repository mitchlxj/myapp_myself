import {
  NgModule,
  ErrorHandler
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  IonicApp,
  IonicModule,
  IonicErrorHandler
} from 'ionic-angular';
import {
  MyApp
} from './app.component';


import {
  HomePage
} from '../pages/home/home';
import {
  TabsPage
} from '../pages/tabs/tabs';

import {
  StatusBar
} from '@ionic-native/status-bar';
import {
  SplashScreen
} from '@ionic-native/splash-screen';
import {
  MorePage
} from '../pages/more/more';
import {
  NotificationPage
} from '../pages/notification/notification';
import {
  ChatPage
} from '../pages/chat/chat';
import {
  DiscoveryPageModule
} from '../pages/discovery/discovery.module';
import {
  RestProvider
} from '../providers/rest/rest';

import {
  HttpModule
} from '@angular/http';
import {
  IonicStorageModule
} from '@ionic/storage';
import {
  RegisterPageModule
} from '../pages/register/register.module';
import {
  UserPageModule
} from '../pages/user/user.module';
import {
  HeadfacePageModule
} from '../pages/headface/headface.module';
import {
  Camera
} from '@ionic-native/camera';
import {
  File
} from '@ionic-native/file';
import {
  FilePath
} from '@ionic-native/file-path';
import {
  Transfer,
} from '@ionic-native/transfer';
import { QuestionPageModule } from '../pages/question/question.module';
import { DetailsPageModule } from '../pages/details/details.module';
import { AnswerPageModule } from '../pages/answer/answer.module';
import { ComponentsModule } from '../components/components.module';
import { FavoriatePage } from '../pages/favoriate/favoriate';
import { FavoriatePageModule } from '../pages/favoriate/favoriate.module';
import { ChatdetailsPageModule } from '../pages/chatdetails/chatdetails.module';
import { EmojiProvider } from '../providers/emoji/emoji';
import { ChatserviceProvider } from '../providers/chatservice/chatservice';
import { WebsocketProvider } from '../providers/websocket/websocket';
import { LoginPageModule } from '../pages/login/login.module';
import { SharePageModule } from '../pages/share/share.module';


@NgModule({
  declarations: [
    MyApp,
    MorePage,
    HomePage,
    NotificationPage,
    ChatPage,
    TabsPage,
    
    
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(), //全局定义storage模块
    DiscoveryPageModule,
    RegisterPageModule,
    UserPageModule,
    HeadfacePageModule,
    QuestionPageModule,
    AnswerPageModule,
    DetailsPageModule,
    LoginPageModule,
    ComponentsModule,
    ChatdetailsPageModule,
    FavoriatePageModule,
    SharePageModule,
    HttpModule, //全局需要导入HTTP
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MorePage,
    ChatPage,
    HomePage,
    NotificationPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    RestProvider,
    File,
    Transfer,
    Camera,
    FilePath,
    EmojiProvider,
    ChatserviceProvider,
    WebsocketProvider,

  ]
})
export class AppModule {}
