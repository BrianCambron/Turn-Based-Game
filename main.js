
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
        let topnav = document.querySelector('.top-nav');
        topnav.style.display = 'none';
        let enemydiv = document.querySelector('.enemies');
        enemydiv.style.display = 'flex';
        let herodiv = document.querySelector('.heroes');
        herodiv.style.display = 'block';
        attBtn = document.querySelector(".attack");
        attBtn.style.display = "inline-block";
});


const herosArr = [{
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

const  henchmenArr = [{
      name: 'Ghoul',
      health: 10,
    },
    {
      name: 'Orc',
      health: 20,
    },
    {
      name: 'Dark Elf',
      health: 30,
    },
    {
      name: 'Troll',
      health: 50,
    }
  ];

document.querySelectorAll('.hero').forEach(heroInfo => {
  heroInfo.addEventListener('click', event => {
    // console.log('here', hero);
    const selectionValue = heroInfo.dataset.type;
    // console.log(selectionValue);
    const selectedHero = herosArr.filter(heroInfo => heroInfo.name.toLowerCase() === selectionValue.toLowerCase())[0];
    console.log(selectedHero);
    hero = new Hero(selectedHero);
    battle();
  });
});




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
    console.log(player);
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
    console.log(player);
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
    console.log(player);
  }
}



function battle() {
  const henchman = new Henchman(henchmenArr[Math.floor(Math.random() * 4)]);
  let enemyname = henchman.name;
  document.querySelector('.enemy-name').innerHTML = enemyname;
  if (henchman.name === 'Ghoul') {
    document.querySelector('.enemy').src="https://1.bp.blogspot.com/-wgWRq7FZo1w/WI4o4B8QqiI/AAAAAAAAAhE/CIhuRT41-G82XZSou4XJrLXnx5pmS-h7gCLcB/s1600/Ghoul-5e.png"
  }
  else if (henchman.name === 'Orc') {
    document.querySelector('.enemy').src="./images/org.png"
  } else if (henchman.name === 'Dark Elf') {
    document.querySelector('.enemy').src="./images/dark-elf.png"
  } else if (henchman.name === 'Troll') {
    document.querySelector('.enemy').src="./images/troll.png"
  }
  const attackButton = document.querySelector('.attack');
  attackButton.addEventListener('click', event => {
  hero.attack(henchman);
  henchman.attack(hero);
  if(hero.health <= 0) {
   console.log('You have been defeated!')
      attackButton.style.display = "none";
  } else if(henchman.health <= 0) {
    console.log('Enemy has been defeated!')
    attackButton.style.display = "none";
    let enemydiv = document.querySelector('.enemies');
    enemydiv.style.display = 'none';
    let winAudio = document.querySelector('.winAudio');
    audio.pause();
    winAudio.play();
  }

});
}


// class Game {
//   constructor() {
//
//   }
//
//   setHero() {
//     var num = 3
//     let heros = [{
//         name: 'Knight',
//         health: 150,
//         attackPower: 10
//       },
//       {
//         name: 'Archer',
//         health: 125,
//         attackPower: 12
//       },
//       {
//         name: 'Wizard',
//         health: 100,
//         attackPower: 15
//       }
//     ];
//     if (num == 1 /*knight is selected*/ ) {
//       this.hero = new Hero(heros[0]);
//     } else if (num == 2 /*archer is selected*/ ) {
//       this.hero = new Hero(heros[1]);
//     } else if (num == 3 /*wizard is selected*/ ) {
//       this.hero = new Hero(heros[2]);
//     }
//
//   }
//
//   setVillan() {
//     villans
//     this.villan = new(villans[0]);
//   }
//
//   battle() {
//     console.log(this.hero);
//   }
// }
//
// const hero1 = document.querySelector('.hero1');
//
//
//
// const game = new Game();

  document.querySelectorAll('.hero').forEach(hero => {
  hero.addEventListener('click', event => {
      let menu = document.querySelector('.menu');
      let topnav = document.querySelector('.top-nav')
      menu.style.display = "none";
      topnav.style.display ='block';
  });
});
document.querySelectorAll('.hero').forEach(heroInfo => {
  heroInfo.addEventListener('click', event => {
    const selectionValue = heroInfo.dataset.type;
    const selectedHero = herosArr.filter(heroInfo => heroInfo.name.toLowerCase() === selectionValue.toLowerCase())[0];
    console.log(selectedHero);
    hero = new Hero(selectedHero);
    if (heroInfo.dataset.type === 'knight'){
      document.querySelector('#character').src = "./images/transparentKnight.png"
    } else if (heroInfo.dataset.type === 'archer') {
    document.querySelector('#character').src = "./images/transparentArcher.png"
  } else if (heroInfo.dataset.type === 'wizard') {
    document.querySelector('#character').src = "./images/transparentWizard.png"
    }
  });
});
