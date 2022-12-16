import { Component, Input } from '@angular/core';
import { ExperienceData } from 'src/models/experience-data.models';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  @Input() public experienceData!: ExperienceData[];

}
