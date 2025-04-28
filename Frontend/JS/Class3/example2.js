
let cap = {
    name: "Steve",
    team: "cap",
    petersTeam: function(mem1, mem2){
        console.log(`Hey ${this.name} am your neighborhood spiderman and I belong to ${this.team}'s team with members ${mem1} and ${mem2}`);
    }
}
let ironMan = {
    name: "Tony", 
    team: "iron man"
}

// Hey Steve .... cap ... loki & thor
cap.petersTeam('loki', 'thor');

// Hey Tony .... iron man ... loki & thor
cap.petersTeam.call(ironMan, 'loki', 'thor');
cap.petersTeam.apply(ironMan, ['loki', 'thor']);

const bindedPetersTeam = cap.petersTeam.bind(ironMan);
bindedPetersTeam('loki', 'thor');