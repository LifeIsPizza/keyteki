const Card = require('../../Card.js');

class Valdr extends Card {
    setupCardAbilities(ability) {
        this.persistentEffect({
            effect: ability.effects.bonusFightDamage((card) => (card.isOnFlank() ? 2 : 0))
        });
    }
}

Valdr.id = 'valdr';

module.exports = Valdr;
