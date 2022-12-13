import { BasicInfo } from './../../../models/basic-info.models';
import { Component, Input } from '@angular/core';
import { Knowledge } from 'src/models/knowledge.models';

@Component({
  selector: 'app-info-general',
  templateUrl: './info-general.component.html',
  styleUrls: ['./info-general.component.css']
})
export class InfoGeneralComponent {
  @Input() public basicInfo!: BasicInfo;
  @Input() public skills!: Knowledge;
  @Input() public languages!: Knowledge;
}

