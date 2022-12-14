import { BasicInfo } from './../../../models/basic-info.models';
import { Component, Input } from '@angular/core';
import { KnowledgeSectionData } from 'src/models/knowledge-section-data.models';

@Component({
  selector: 'app-info-general',
  templateUrl: './info-general.component.html',
  styleUrls: ['./info-general.component.css']
})
export class InfoGeneralComponent {
  @Input() public basicInfo!: BasicInfo;
  @Input() public skills!: KnowledgeSectionData;
  @Input() public languages!: KnowledgeSectionData;
}

