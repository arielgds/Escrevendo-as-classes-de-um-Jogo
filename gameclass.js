const player = {
    name: ["Fulano", "Jeferson", "Eurico", "Benjamin"],
    year: [17, 23, 15, 22],
    type: ["Guerreiro", "Mago", "Monge", "Ninja"],
    attack: ["espada", "magia", "artes marciais", "shuriken"],
    damage: [3, 5, 2, 4]
}
const monster = {
    golem: {
        name: "Golem",
        life: 8
    },
    lobisomem: {
        name: "Lobisomem",
        life: 4
    },
    medusa: {
        name: "Medusa",
        life: 6
    }
}
let index = 0

function welcome(name, type, attack,damage) {
    console.log(`Bem vindo ${name}!`);
    console.log(`Lendo dados...`);
    console.log(`Vi que sua classe é ${type}. Seu principal ataque é ${attack}, que tira ${damage}`)
}

function attackMsg(name, type, attack, monster, life){
    console.log(`${name}, o mais habilidoso entre os ${type}s, atacou usando ${attack} o terrível ${monster} que tem ${life} pontos de vida!`)
}

welcome(player.name[index], player.type[index], player.attack[index], player.damage[index] );
attackMsg(player.name[index], player.type[index], player.attack[index], monster.golem.name, monster.golem.life)
 
do {
    console.log(`você usou a ${player.attack[index]} causando ${player.damage[index]} de dano!`)
    monster.golem.life = monster.golem.life - player.damage[index]
    console.log(`O ${monster.golem.name} ficou com ${monster.golem.life}`)
} while (monster.golem.life > 0);

if (monster.golem.life <= 0 ) {
    console.log(`Você derrotou o ${monster.golem.name}!`)
}