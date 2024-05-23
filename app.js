const pokemon = require('./data.js')
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  //Exercise 1
  //console.dir(pokemon, { maxArrayLength: null })
const fiftyNinth = Object.values(pokemon)[58]; 
console.log(fiftyNinth); 

//Exercise 2
//console.log(game); 

//Exercise 3
game.difficulty = ['hard']; 


//Exercise 4 
game.party.push('bulbasaur');


//Exercise 5
game.party.push('Mew','Charizard','Jigglypuff');


//Exercise 6 
game.party = game.party.sort((a,b) => b.hp - a.hp); 
//this is not working-I'm gonna freak out

//Exercise 7 
game.gyms.forEach(function(obj) {
  if (obj.difficulty < 3) {
      obj.completed = true
  }
}); 

//Exercise 8
game.party.splice(0,1,'Ivysaur'); 

//Exercise 9
game.party.forEach((item) => {
  console.log(item)
}) 

//Exercise 10 
const starters = pokemon.filter(element => {
    return element.starter === true
}) 

//Exercise 11 
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj); 
} 
game.catchPokemon('Weedle'); 
 
//Exercise 12
game.catchPokemon = (pokemonObj) => {
    game.party.push(pokemonObj); { 
    game.items[1].quantity -= 1
  }
}
game.catchPokemon('Metapod'); 
game.catchPokemon('Ekans'); 
//console.log(game.party);
//console.log(game.items);

//Exercise 13
game.gyms.forEach(function(obj) {
  if (obj.difficulty < 6) {
      obj.completed = true
  }
}); 

//Exercise 14
game.gymStatus = () => {  
  const gymTally = [
    {completed: 0, incomplete: 0}
  ];
  game.gyms.forEach(function(obj) {
    if(obj.completed = true) {
        gymTally.completed += 1
} else {
  gymTally.incomplete += 1; 
}
  })
game.gymStatus();  
console.log(gymTally); 
}
//idk :(



//Exercise 15
game.partyCount = () => {
  let total = 0; 
  for (let i = 0; i <game.party.length; i++) {
    total++; 
    return total  
  }
}

//Exercise 16
game.gyms.forEach(function(obj) {
  if (obj.difficulty < 8) {
      obj.completed = true
  }
}); 

//Exercise 17
console.log(game); 