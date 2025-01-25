function solve() {
  // FIGHTER
  function fighter(name) {
    function fight() {
      this.stamina--;
      console.log(`${this.name} slashes at the foe!`);
    }
    return {
      name,
      health: 100,
      stamina: 100,
      fight,
    };
  }
  // MAGE
  function mage(name) {
    function cast(spell) {
      this.mana--;
      console.log(`${this.name} cast ${spell}`);
    }
    return {
      name,
      health: 100,
      mana: 100,
      cast,
    };
  }

  return { mage, fighter };
}
let create = solve();
const scorcher = create.mage('Scorcher');
scorcher.cast('fireball');
scorcher.cast('thunder');
scorcher.cast('light');

const scorcher2 = create.fighter('Scorcher 2');
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
