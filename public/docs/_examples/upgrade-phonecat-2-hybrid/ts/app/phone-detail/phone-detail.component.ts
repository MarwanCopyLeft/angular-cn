// #docplaster
// #docregion initialclass
import { Component, Inject } from '@angular/core';

import { Phone, PhoneData } from '../core/phone/phone.service';
// #enddocregion initialclass
// #docregion checkmark-pipe

// #docregion initialclass
@Component({
  moduleId: module.id,
  selector: 'phone-detail',
  templateUrl: 'phone-detail.template.html',
  // #enddocregion initialclass
  // #docregion initialclass
})
// #enddocregion checkmark-pipe
export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(@Inject('$routeParams')
                $routeParams: angular.route.IRouteParamsService,
              phone: Phone) {
    phone.get($routeParams['phoneId']).subscribe(phone => {
      this.phone = phone;
      this.setImage(phone.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}
// #enddocregion initialclass
