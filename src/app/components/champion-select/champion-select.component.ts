import { Component } from '@angular/core';
import { champions } from 'src/config/data';
import { IChampion } from 'src/config/interface';

@Component({
  selector: 'app-champion-select',
  templateUrl: './champion-select.component.html',
  styleUrls: ['./champion-select.component.css']
})
export class ChampionSelectComponent {
  selectedRole: string = '';
  Champions: IChampion[] = champions;

  selectRole(roleName: string): void {
    if (roleName === this.selectedRole) {
      this.selectedRole = '';
    }
    else this.selectedRole = roleName;
  }

  getFilteredChampions(): IChampion[] {
    if (this.selectedRole) {
      return this.Champions.filter(champion => champion.roles.includes(this.selectedRole));
    } else {
      return this.Champions;
    }
  }

}
