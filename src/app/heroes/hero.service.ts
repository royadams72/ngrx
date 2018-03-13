// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
//
// import { Hero, ToastService, ReactiveDataService } from '../core';
//
// @Injectable()
// export class HeroService extends ReactiveDataService<Hero> {
//   constructor(http: HttpClient, toastService: ToastService) {
//     super('Hero', http, toastService, 'heroes');
//   }
// }


import { Injectable } from '@angular/core';
import { EntityServiceBase, EntityServiceFactory } from 'ngrx-data';
import { Hero } from '../core';

@Injectable()
export class HeroService extends EntityServiceBase<Hero> {
  constructor(entityServiceFactory: EntityServiceFactory) {
    super('Hero', entityServiceFactory);
  }
}
