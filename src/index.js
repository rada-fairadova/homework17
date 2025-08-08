import Team from './Team.js';

const team = new Team();
team.add('Лучник');
team.add('Зомби');
team.add('Маг');
team.add('Демон');

for (const member of team) {
  console.log(member);
}
