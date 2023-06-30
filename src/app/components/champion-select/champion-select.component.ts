import { Component } from '@angular/core';
import { champions } from 'src/config/data';
import { IChampion } from 'src/config/interface';

@Component({
  selector: 'app-champion-select',
  templateUrl: './champion-select.component.html',
  styleUrls: ['./champion-select.component.css']
})
export class ChampionSelectComponent {
  selectedRole: string | null = null;

  selectRole(roleName: string): void {
    this.selectedRole = roleName;
  }

  Champions: IChampion[] = champions;

}
