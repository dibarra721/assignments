const readlineSync = require('readline-sync');

var userName = readlineSync.question('Hi! What is your Name? ');
// console.log('Hi ' + userName + '!');

readlineSync.question('Hello ' + userName + ', Weclone to Hamster Frenzy. Press Enter to begin.');

const enemies = ['Gerbil', 'Cat', 'Bird'];
const treasure = ['Hamsterball', 'Snack', 'Backpack'];
var prize = [];
let playerHealth = 60;
const options = ['Exit', 'Print', 'Walk'];
let pickUp = treasure[Math.floor(Math.random() * treasure.length)];


function game(){
    const attackPower = Math.floor(Math.random() * (3-2+4) + 4);
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    let enemyHealth = 30;
    const enemyPower = Math.floor(Math.random()* (6-4+2)+3);

    const index = readlineSync.keyInSelect(options, 'What would you like to do?');
    console.log(userName + ' What would you like do do next? ')

    if(options[index] == 'Exit'){
        console.log ('Goodbye');
        // return playerHealth = 0;
    } 
    else if (options[index] == 'Print'){
        console.log(userName  + ': \n' + playerHealth  + '\ntreasure:' + pickUp);
    }
    else if(options[index] === 'Walk'){
        let key = Math.random();
        if (key <= .3) {
            console.log('Walking... No danger here');
        }
        else if (key >= .3){
            console.log (enemy + ' has arrived.');
            while (enemyHealth > 0 && playerHealth > 0) {
                const player = readlineSync.question(`Will you run (press "r") or will you stand and fight? (press "f") `);
                    switch(player){
                        case 'r':
                            const run = Math.random();
                            if (run < .5){
                                console.log(enemy + '' + 'is faster and hits you for' + '' + enemyPower + '' + 'damage.');
                            }
                            else {
                                console.log(' You have managed to run away! Congrats');
                                break;
                            }
                        case 'f':
                            enemyHealth -= attackPower;
                            console.log('You attacked ' + ' ' + enemy  + ' for ' + attackPower + ' ' + ' damage');
                            playerHealth -= enemyPower;
                            console.log('You got attacked with ' + '' + enemyPower + '' + ' damage');
                            if (enemyHealth <= 0){
                                console.log(' You have killed the ' + ' ' + enemy + ' and have found' + pickUp);
                                let loot = Math.random();
                                if (loot <= .3){
                                    prize.push(pickUp);
                                }
                                }
                            else if (playerHealth <= 0){
                                console.log(enemy + ' Has killed ' + userName + ' Game Over ');
                            }
                            }

                    }
            }
        }
    }
 while(playerHealth > 0) {
    playerHealing = function(){
        playerAlive = true;
        playerHealth = 30
    }
    playerHealing();
    game();
} 