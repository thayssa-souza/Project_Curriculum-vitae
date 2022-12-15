import { BasicInfo } from '../../../models/basic-info.models';
import { Component, Input, OnInit } from '@angular/core';
import { Knowledge } from 'src/models/knowledge.models';
import { UsersService } from 'src/app/services/users.service';
import { CreateUserData } from 'src/models/createUser-data.models';

@Component({
  selector: 'app-info-general-dynamic',
  templateUrl: './info-general-dynamic.component.html',
  styleUrls: ['./info-general-dynamic.component.css'],
})
export class InfoGeneralDynamicComponent implements OnInit {
  @Input() public basicInfo!: BasicInfo;
  @Input() public skills!: Knowledge;
  @Input() public languages!: Knowledge;

  constructor(private service: UsersService) {}

  ngOnInit(): void {
    this.service.getLogins().subscribe((logins: CreateUserData[]) => {
      for (let index = 0; index < 1; index++) {
        const user = logins[0];

        document
          .getElementById('info-general__img')
          ?.setAttribute('src', user.image);

        let teste = document.getElementById('info-general__occupation');
        teste!.innerHTML = user.personalInformationData.occupation;

        teste = document.getElementById('info-general__house');
        teste!.innerHTML = `
          ${user.personalInformationData.state}
          ,
          ${user.personalInformationData.city}
        `;

        teste = document.getElementById('info-general__email');
        teste!.innerHTML =
          user.personalInformationData.email == null
            ? 'No registery'
            : user.personalInformationData.email;

        teste = document.getElementById('info-general__phone');
        teste!.innerHTML =
          user.personalInformationData.phone == null
            ? 'No registery'
            : user.personalInformationData.phone;

        teste = document.getElementById('skills-items__name');
        teste!.innerHTML =
          user.skillName == null ? 'No registery' : user.skillName;

        teste = document.getElementById('skills-items__name-bar');

        switch (user.skillLevel) {
          case 'begginer':
            teste?.setAttribute('class', 'boxBeginner');
            break;
          case 'intermediary':
            teste?.setAttribute('class', 'boxIntermediary');
            break;
          case 'advanced':
            teste?.setAttribute('class', 'boxAdvanced');
            break;
          default:
            break;
        }

        teste = document.getElementById('language-itens');
        teste!.innerHTML =
          user.languageName == null ? 'No registery' : user.languageName;

        teste = document.getElementById('language-itens__bar');
        switch (user.languagelevel) {
          case 'begginer':
            teste?.setAttribute('class', 'boxBeginner');
            break;
          case 'intermediary':
            teste?.setAttribute('class', 'boxIntermediary');
            break;
          case 'advanced':
            teste?.setAttribute('class', 'boxAdvanced');
            break;
          default:
            break;
        }

        // teste = document.getElementById('info-general__occupation');
        // teste!.innerHTML = user.personalInformationData.occupation;

        // teste = document.getElementById('info-general__occupation');
        // teste!.innerHTML = user.personalInformationData.occupation;

        // teste = document.getElementById('info-general__occupation');
        // teste!.innerHTML = user.personalInformationData.occupation;
      }
    });
  }
}
