
const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};


function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}

// whoIsStronger(hero.getStrength);
const getStrength=hero.getStrength.bind(hero);
whoIsStronger(getStrength);

// 1.When the getStrength is passed to 'whoIsString' as a callback, its 'this' is lost, so it's like invoking getStrength on the window.
// this.health is undefined, so the getStrength will return window.power which is also undefined.
// next we compare if undefined is less then 82, which is undefined, so we return "you are stronger"

// 2.In order to get "I am stronger", getStrength must have hero object as its 'this' context.
//So to solve this we can write const getStrength=hero.getStrength.bind(hero);
//whoIsStronger(getStrength);