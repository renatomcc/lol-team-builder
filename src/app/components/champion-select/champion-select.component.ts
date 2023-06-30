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
    this.selectedName = championName;
  }

  getChampionsFilteredBySearch(): IChampion[] {
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
}