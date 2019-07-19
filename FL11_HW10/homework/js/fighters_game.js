function Fighter(fighterObj) {
    fighterObj.hp = 100;
    fighterObj.win = 0;
    fighterObj.loss = 0;

    this.getName = () => fighterObj.name;
    this.getDamage = () => fighterObj.damage;
    this.getHealth = () => fighterObj.hp;
    this.getAgility = () => fighterObj.agility;

    this.attack = function (enemy) {
        let maxSuccess = 100;
        let attackSuccess = maxSuccess - enemy.getAgility();
        let probability = Math.floor(Math.random() * maxSuccess);
        if (probability < attackSuccess) {
            enemy.dealDamage(this.getDamage());
            console.log(`${this.getName()} make ${this.getDamage()} damage to ${enemy.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    };
    this.logCombatHistory = () => {
        console.log(`Name: ${this.getName()}, Wins: ${this.addWin()}, Losses: ${this.addLoss()}`);
    };
    this.heal = function (healPoint) {
        fighterObj.hp = fighterObj.hp + healPoint;
        return fighterObj.hp;
    };
    this.dealDamage = function (damagePoint) {
        if (fighterObj.hp < damagePoint) {
            fighterObj.hp = 0;
        } else {
            fighterObj.hp = fighterObj.hp - damagePoint;
        }
    };
    this.addWin = () => fighterObj.win++;
    this.addLoss = () => fighterObj.loss++;
}

const fighter1 = new Fighter({name: 'Tanos', damage: 40, agility: 10});
const fighter2 = new Fighter({name: 'Iron-man', damage: 20, agility: 50});

function battle(fighter1, fighter2) {
    if (fighter1.getHealth() === 0) {
        console.log(`${fighter1.getName()} is dead and can't fight!`);
    } else if (fighter2.getHealth() === 0) {
        console.log(`${fighter2.getName()} is dead and can't fight!`);
    } else {
        while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);
        }
    }
    if (fighter1.getHealth() > fighter2.getHealth()) {
        fighter1.addWin();
        fighter2.addLoss();
    } else {
        fighter2.addWin();
        fighter1.addLoss();
    }
}