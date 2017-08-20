import { PersonnalInformation, GithubInformation } from '../core/personnal-information';
import { Project } from './project/project';

export var basics: PersonnalInformation = new PersonnalInformation(
  'John DOE',
  '', // position not used yet
  'Somewhere in France',
  'john.doe@mail.com',
  '+33 1 22 33 44 55',
  new GithubInformation(
    'JohnDoe',
    'https://github.com/'
  )
);

export var projects: Project[] = [
  new Project(
    'Awesome project',
    'Personnal',
    'Since August 2017',
    'Tech lead',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    ['Awesome tech', 'Git', 'Responsive', 'Wow!'],
    3,
    'https://github.com/'
  ),
  new Project(
    'Another awesome project',
    '@ AwesomeCorp',
    '2016 - 2017',
    'Enthousiast developer',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    ['Awesome tech', 'Git', 'Responsive', 'Wow!'],
    5,
    'https://github.com/'
  ),
  new Project(
    'No github project',
    '@ EvilCorp',
    '2015',
    'Enthousiast developer',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    ['Awesome tech', 'Git', 'Responsive', 'Wow!'],
    3
  )
];
