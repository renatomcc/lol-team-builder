import { Component, Input } from '@angular/core';
import { IChampion } from 'src/config/interface';
import { getClasses } from 'src/config/getClasses';
import { champions } from 'src/config/data';

@Component({
  selector: 'app-champion-card',
  templateUrl: './champion-card.component.html',
  styleUrls: ['./champion-card.component.css']
})
export class ChampionCardComponent {
  @Input() champion: IChampion = champions[0];
  getClasses(championRole: string): string {
    var classImage: string = "";
    switch (championRole) {
      case "Assassino":
        classImage = "https://i.ibb.co/KDynnRV/Assassin.png";
        break;
      case "Lutador":
        classImage = "https://i.ibb.co/8YxB85L/Fighter.png";
        break;
      case "Mago":
        classImage = "https://i.ibb.co/FzLYXcx/Mage.png";
        break;
      case "Atirador":
        classImage = "https://i.ibb.co/m9TGpqb/Marksman.png";
        break;
      case "Suporte":
        classImage = "https://i.ibb.co/BLCJJjV/Support.png";
        break;
      case "Tanque":
        classImage = "https://i.ibb.co/GvySsqx/Tank.png";
        break;
    }
    return classImage;
  }
}
