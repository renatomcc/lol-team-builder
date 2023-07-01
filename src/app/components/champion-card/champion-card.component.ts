import { Component, Input } from '@angular/core';
import { IChampion } from 'src/config/interface';

@Component({
  selector: 'app-champion-card',
  templateUrl: './champion-card.component.html',
  styleUrls: ['./champion-card.component.css']
})
export class ChampionCardComponent {
  @Input() champion: IChampion | undefined;
}
