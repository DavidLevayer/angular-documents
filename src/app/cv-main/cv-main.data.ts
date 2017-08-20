import { Skill } from './sidebar/skill';
import { PersonnalInformation, GithubInformation } from '../core/personnal-information';

export const basics: PersonnalInformation = new PersonnalInformation(
  'John DOE',
  'Enthousiast developer',
  'Somewhere in France',
  'john.doe@mail.com',
  '+33 1 22 33 44 55',
  new GithubInformation(
    'JohnDoe',
    'https://github.com/'
  )
);

export const aboutMe = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export const skills: Skill[] = [
  new Skill('Java', '90%'),
  new Skill('Angular', '80%'),
  new Skill('HTML', '60%'),
  new Skill('CSS', '50%'),
  new Skill('Docker', '30%'),
];
