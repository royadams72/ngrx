import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MasterDetailCommands, Hero, Villain } from '../../core';
import { HeroService } from '../hero.service';
import { VillainService } from '../../villains/villain.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesComponent implements MasterDetailCommands<Hero>, OnInit {
  selected: Hero;
  commands = this;
  id: number
  heroes$: Observable<Hero[]>;
  loading$: Observable<boolean>;
  villain: Villain = {
    id: 1234,
    name: "string",
    saying: "string"
  }
  constructor(private heroService: HeroService, private villanService: VillainService) {
    this.heroes$ = heroService.entities$;
    this.loading$ = heroService.loading$;
  }

  ngOnInit() {
    this.getHeroes();

  }

  close() {
    this.selected = null;
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getHeroes() {
    this.heroService.getAll();
  }

  add(hero: Hero) {
    this.heroService.add(hero);
    this.villanService.add(this.villain)
  }

  delete(hero: Hero) {
    this.heroService.delete(hero.id);
  }

  update(hero: Hero) {
    this.heroService.update(hero);
  }

  select(hero: Hero) {
    this.selected = hero;
  }
  getByKey(hero: Hero) {
    this.heroService.getByKey(hero.id)
    console.log()
  }
  unselect() {
    this.selected = null;
  }
}
