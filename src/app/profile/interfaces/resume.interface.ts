import {Contact} from "./contact.interface";
import {Education} from "./education.interface";
import {Work} from "./work.interface";
import {Skills} from "./skills.interface";
import {Hobby} from "./hobby.interface";
import {Social} from "./social.interface";

export interface Resume {
  contact: Contact;
  educations: Education[];
  works: Work[];
  skills: Skills[];
  hobbies: Hobby[];
  socials: Social[];
}
