import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HomePage } from '../pages/home/home';
declare var SMS:any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  apiEndpoint:string = 'http://192.168.1.101:3000/sms';

  constructor(public http: Http, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    let $http = this.http;
    let $endPoint = this.apiEndpoint;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      if (SMS) {
        SMS.startWatch(function(){
              console.log('watching started');
           }, function(){
          console.log('failed to start watching');
        });
        document.addEventListener('onSMSArrive', function(e:any){
          var sms = (e && e.data) || false;
          console.log(sms);

          $http.post($endPoint, sms, {})
            .toPromise()
            .then((res:Response) => {
              let data = res.json();
              console.log(data);
            })
            .catch(error => {
              console.log('cannot send request');
              console.log(error.error); // error message as string
              console.log(error.status, error.headers);
            });

        });
      } else {
        console.log('SMS is ', SMS);
      }
    });
  }
}
