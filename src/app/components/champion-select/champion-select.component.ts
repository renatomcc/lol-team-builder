import { Component } from '@angular/core';
import { champions } from 'src/config/data';
import { IChampion } from 'src/config/interface';
import { filter, map, of } from 'rxjs';

@Component({
  selector: 'app-champion-select',
  templateUrl: './champion-select.component.html',
  styleUrls: ['./champion-select.component.css'],
})

export class ChampionSelectComponent {
  Champions$ = of(champions);
  SortedChampions$ = of(champions);

  selectedRole: string = '';
  selectedName: string = '';
  currentLane: string = '';
  teamFull: boolean = false;

  topSelected: IChampion | undefined = undefined;
  junglerSelected: IChampion | undefined = undefined;
  midSelected: IChampion | undefined = undefined;
  adSelected: IChampion | undefined = undefined;
  supportSelected: IChampion | undefined = undefined;

  teamSelected: IChampion[] = [];

  showTextBox: boolean = false;


  selectRole(roleName: string): void {
    if (roleName === this.selectedRole) {
      this.selectedRole = '';
      this.filterChampions();
    }
    else {
      this.selectedRole = roleName;
      this.filterChampions();
    }
  }

  selectSearch(championName: string): void {
    this.selectedName = championName;
    this.filterChampions();
  }

  filterChampions(): void {
    if (this.selectedRole && this.selectedName.length > 0) {
      this.SortedChampions$ = this.Champions$.pipe(map((champions) => champions.filter((champion) => champion.name.toLocaleLowerCase().includes(this.selectedName.toLocaleLowerCase())).filter((champion) => champion.roles.includes(this.selectedRole)))
      );
    }

    if (this.selectedRole && this.selectedName.length === 0) {
      this.SortedChampions$ = this.Champions$.pipe(map((champions) => champions.filter((champion) => champion.roles.includes(this.selectedRole))));
    }

    if (!this.selectedRole && this.selectedName.length > 0) {
      this.SortedChampions$ = this.Champions$.pipe(map((champions) => champions.filter((champion) => champion.name.toLocaleLowerCase().includes(this.selectedName.toLocaleLowerCase()))));
    }
  }

  sendChampToLane(champion: IChampion): void {
    if (this.teamSelected.includes(champion)) {
      window.alert('Campeão já selecionado!');
      return;
    }
    switch (this.currentLane) {
      case ('TOP LANER'):
        this.topSelected = champion;
        this.addChampionToTeam(champion);
        this.currentLane = '';
        break;
      case ('JUNGLER'):
        this.junglerSelected = champion;
        this.addChampionToTeam(champion);
        this.currentLane = '';
        break;
      case ('MID'):
        this.midSelected = champion;
        this.addChampionToTeam(champion);
        this.currentLane = '';
        break;
      case ('AD CARRY'):
        this.adSelected = champion;
        this.addChampionToTeam(champion);
        this.currentLane = '';
        break;
      case ('SUPPORT'):
        this.supportSelected = champion;
        this.addChampionToTeam(champion);
        this.currentLane = '';
    }
  }

  chooseLaner(lane: string): void {
    switch (lane) {
      case ('TOP'):
        if (this.topSelected) this.removeChampionFromTeam(this.topSelected);
        this.topSelected = undefined;
        this.currentLane = 'TOP LANER';
        break;
      case ('JUNGLE'):
        if (this.junglerSelected) this.removeChampionFromTeam(this.junglerSelected);
        this.junglerSelected = undefined;
        this.currentLane = 'JUNGLER';
        break;
      case ('MID'):
        if (this.midSelected) this.removeChampionFromTeam(this.midSelected);
        this.midSelected = undefined;
        this.currentLane = 'MID';
        break;
      case ('AD'):
        if (this.adSelected) this.removeChampionFromTeam(this.adSelected);
        this.adSelected = undefined;
        this.currentLane = 'AD CARRY';
        break;
      case ('SUPPORT'):
        if (this.supportSelected) this.removeChampionFromTeam(this.supportSelected);
        this.supportSelected = undefined;
        this.currentLane = 'SUPPORT';
        break;
    }
  }

  addChampionToTeam(champion: IChampion): void {
    this.teamSelected = [...this.teamSelected, champion]
    if (this.teamSelected.length == 5) {
      this.teamFull = true;
    }
  }

  removeChampionFromTeam(champion: IChampion): void {
    this.teamSelected = this.teamSelected.filter(c => c !== champion);
    this.teamFull = false;
  }

  isRoleMatched(champion: IChampion, role: string): boolean {
    if (champion && champion.roles && champion.roles.includes(role)) {
      return true;
    }
    return false;
  }
}