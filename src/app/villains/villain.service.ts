// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
//
// import { Villain, ToastService, ReactiveDataService } from '../core';
//
// @Injectable()
// export class VillainService extends ReactiveDataService<Villain> {
//   constructor(http: HttpClient, toastService: ToastService) {
//     super('Villain', http, toastService);
//   }
// }

import { Injectable } from '@angular/core';
import { EntityServiceBase, EntityServiceFactory } from 'ngrx-data';
import { Villain } from '../core';

@Injectable()
export class VillainService extends EntityServiceBase<Villain> {
  constructor(entityServiceFactory: EntityServiceFactory) {
    super('Villain', entityServiceFactory);
  }
}
