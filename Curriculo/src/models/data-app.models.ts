import { Footer } from './footer.models';
import { Experiences } from './experiences.models';
import { BasicInfo } from './basic-info.models';
import { Knowledge } from './knowledge.models';


export interface DataApp {
    basicInfo : BasicInfo;
    skilss: Knowledge[];
    languages: Knowledge[];
    experience: Experiences[];
    footer : Footer;
  }
