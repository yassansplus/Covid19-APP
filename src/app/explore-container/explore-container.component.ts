import { Component, OnInit, Input } from '@angular/core';
import {ApiCovidService} from '../service/api-covid.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(private apiCovid: ApiCovidService) { }

  ngOnInit() {}

}
