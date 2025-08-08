export default class Team {
  constructor() {
    this.members = new Set();
  }
  
  add(character) {
    this.members.add(character);
  }
  
  addAll(...characters) {
    characters.forEach(character => this.members.add(character));
  }
  
  toArray() {
    return [...this.members];
  }
  
  *[Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}
