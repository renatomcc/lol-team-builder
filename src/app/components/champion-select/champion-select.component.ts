import { Component } from '@angular/core';
import { champions } from 'src/config/data';
import { IChampion } from 'src/config/interface';

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

  selectRole(roleName: string): void {
    if (roleName === this.selectedRole) {
      this.selectedRole = '';
    }
    else this.selectedRole = roleName;
  }

  selectSearch(championName: string): void {
    console.log('chamou select')
    this.selectedName = championName;
  }

  getChampionsFilteredByRole(): IChampion[] {
    if (this.selectedRole) {
      this.SortedChampions = this.Champions.filter(champion => champion.roles.includes(this.selectedRole));
      return this.SortedChampions;
    } else {
      return this.Champions;
    }
  }

  getChampionsFilteredBySearch(): IChampion[] {
    if (this.selectedName.length > 0) {
      console.log('chamou filter')
      this.SortedChampions = this.Champions.filter(champion => champion.name.toLocaleLowerCase().includes(this.selectedName.toLocaleLowerCase()));
      console.log(this.SortedChampions.filter(champion => champion.name.includes(this.selectedName)));
      return this.SortedChampions;
    } else {
      return this.Champions;
    }
  }
}