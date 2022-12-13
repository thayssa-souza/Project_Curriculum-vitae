import { LoginData } from './login-data.models';
import { PersonaInformationData } from './personal-information.models';
import { SkillsData } from './skills-data.models';

export interface CreateUserData {
  id?: number | string;
  loginData: LoginData;
  personalInformationData: PersonaInformationData;
  skillData?: SkillsData[];
  languages?: string[];
}
