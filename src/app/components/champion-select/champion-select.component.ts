import { Component } from '@angular/core';
import { champions } from 'src/config/data';
import { IChampion } from 'src/config/interface';
import { ChampionCardComponent } from '../champion-card/champion-card.component';

@Component({
  selector: 'app-champion-select',
  templateUrl: './champion-select.component.html',
  styleUrls: ['./champion-select.component.css'],
})

export class ChampionSelectComponent {
  selectedRole: string = '';
  selectedName: string = '';
  Champions: IChampion[] = champions;
  SortedChampions: IChampion[] = champions;
  currentLane: string = 'TOP LANER';
  topSelected: IChampion | undefined = undefined;
  junglerSelected: IChampion | undefined = undefined;
  midSelected: IChampion | undefined = undefined;
  adSelected: IChampion | undefined = undefined;
  supportSelected: IChampion | undefined = undefined;

  selectRole(roleName: string): void {
    if (roleName === this.selectedRole) {
      this.selectedRole = '';
    }
    else this.selectedRole = roleName;
  }

  selectSearch(championName: string): void {
    this.selectedName = championName;
  }

  getFilteredChampions(): IChampion[] {
    if (this.selectedRole && this.selectedName.length > 0) {
      this.SortedChampions = this.Champions.filter(champion => champion.name.toLocaleLowerCase().includes(this.selectedName.toLocaleLowerCase())).filter(champion => champion.roles.includes(this.selectedRole));
      return this.SortedChampions;
    }

    if (this.selectedRole && this.selectedName.length === 0) {
      this.SortedChampions = this.Champions.filter(champion => champion.roles.includes(this.selectedRole));
      return this.SortedChampions;
    }

    if (!this.selectedRole && this.selectedName.length > 0) {
      this.SortedChampions = this.Champions.filter(champion => champion.name.toLocaleLowerCase().includes(this.selectedName.toLocaleLowerCase()));
      return this.SortedChampions;
    }

    return this.Champions;
  }

  chooseLaner(champion:IChampion): void {
    switch(this.currentLane){
      case('TOP LANER'):
        this.topSelected = champion;
        this.currentLane = 'JUNGLER';
        break;
      case ('JUNGLER'):
        this.junglerSelected = champion;
        this.currentLane = 'MID';
        break;
      case ('MID'):
        this.midSelected = champion;
        this.currentLane = 'AD CARRY';
        break;
      case ('AD CARRY'):
        this.adSelected = champion;
        this.currentLane = 'SUPPORT';
        break;
      case ('SUPPORT'):
        this.supportSelected = champion;
        this.currentLane = '';
    }
  }

  changeLaner(lane: string):void{
    switch(lane){
      case('TOP'):
        
        break;
      case('JUNGLE'):
        break;
      case('MID'):
        break;
      case('AD'):
        break;
      case('SUPPORT'):
        break;
    }
  }
}