class Fighter {
    constructor({name, damage, agility}) {
        this.name = name;
        this.damage = damage;
        this.hp = 100;
        this.agility = agility;
        this.win = 0;
        this.loss = 0;
    }
    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    getHealth() {
        return this.hp;
    }
    getAgility() {
        return this.agility;
    }
    attack(enemy) {
        let maxSuccess = 100;
        let attackSuccess = maxSuccess - enemy.getAgility();
        let probability = Math.floor(Math.random() * maxSuccess);
        if (probability < attackSuccess) {
            enemy.dealDamage(this.getDamage());
            console.log(`${this.name} make ${this.damage} damage to ${enemy.name}`);
        } else {
            console.log(`${this.name} attack missed`);
        }
    }
    logCombatHistory() {
        console.log(`Name: ${this.name}, Wins: ${this.win}, Losses: ${this.loss}`);
    }
    heal(healPoint) {
        this.hp = this.hp + healPoint;
    }
    dealDamage(damagePoint) {
        if (this.hp < damagePoint) {
            this.hp = 0;
        } else {
            this.hp = this.hp - damagePoint;
        }
    }
    addWin() {
        this.win++;
    }
    addLoss() {
        this.loss++;
    }
}
const fighter1 = new Fighter({name: 'Tanos', damage: 20, agility: 40});
const fighter2 = new Fighter({name: 'Iron-man', damage: 40, agility: 20});
function battle(fighter1, fighter2) {
    if (fighter1.hp === 0) {
        console.log(`${fighter1.name} is dead and can't fight!`);
    } else if (fighter2.hp === 0) {
        console.log(`${fighter2.name} is dead and can't fight!`);
    } else {
        while (fighter1.hp > 0 && fighter2.hp > 0) {
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);
        }
    }
    if (fighter1.hp > fighter2.hp) {
        fighter1.addWin();
        fighter2.addLoss();
    } else {
        fighter2.addWin();
        fighter1.addLoss();
    }
}


