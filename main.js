
const enterBtn = document.querySelector('.enterBtn')
enterBtn.addEventListener('click', function (event) {
  let name = prompt('Enter your name!');
  if (name != null) {
    document.querySelector('.player-name').innerHTML = name;
  }
});
enterBtn.addEventListener('click',function play(event){
        let audio = document.getElementById("audio");
        audio.play();
});
// function play(){
//       let audio = document.getElementById("audio");
//       audio.play();
//     }


const heros = [{
    name: 'Knight',
    health: 150,
    attackPower: 10
  },
  {
    name: 'Archer',
    health: 125,
    attackPower: 12
  },
  {
    name: 'Wizard',
    health: 100,
    attackPower: 15
  }
];

document.querySelectorAll('.hero').forEach(hero => {
  hero.addEventListener('click', event => {
    // console.log('here', hero);
    const selectionValue = hero.dataset.type;
    // console.log(selectionValue);
    const selectedHero = heros.filter(hero => hero.name.toLowerCase() === selectionValue.toLowerCase())[0];
    console.log(selectedHero);
    game.hero = new Hero(selectedHero);
    game.battle();
  });
});

// hero1.addEventListener('click', event => {
//   game.hero = new Hero(heros[0]);
//   game.battle();
// });


class Player {
  constructor({
    name,
    health
  } = {}) {
    this.name = name;
    this.health = health;
  }
}

class Hero extends Player {
  constructor({
    name,
    health,
    attackPower
  } = {}) {
    super({name, health});
    this.attackPower = attackPower;
  }
  attack(player) {
    player.health -= this.attackPower;
  }
}

class Villan extends Player {
  constructor({
    name,
    health
  } = {}) {
    super({name, health});
  }
}

class Henchman extends Villan {
  constructor({
    name,
    health
  } = {}) {
    super({name, health});
  }
  attack(player) {
    player.health -= Math.floor(Math.random() * 11);
  }
}
class Boss extends Villan {
  constructor({
    name,
    health
  } = {}) {
    super({name, health});
  }
  attack(player) {
    player.health -= Math.floor(Math.random() * 21);
  }
}





class Game {
  constructor() {

  }

  setHero() {
    let num = 3

    // if (num == 1 /*knight is selected*/ ) {
    //   this.hero = new Hero(heros[0]);
    // } else if (num == 2 /*archer is selected*/ ) {
    //   this.hero = new Hero(heros[1]);
    // } else if (num == 3 /*wizard is selected*/ ) {
    //   this.hero = new Hero(heros[2]);
    // }
    // const hero1 = document.querySelector('.hero1');
    // hero1.addEventListener('click', event => {
    //   this.hero = new Hero(heros[0]);
    //   // console.log(this);
    //   this.battle();
    // });
      // console.log(this.hero);
  }

  setVillan() {
    villans
    this.villan = new(villans[0]);
  }

  battle() {
    console.log(this.hero);
  }
}

const hero1 = document.querySelector('.hero1');



const game = new Game();




// game.setHero();
