const Card = require('../../Card.js');

class SensorChiefGarcia extends Card {
    setupCardAbilities(ability) {
        this.play({
            fight: true,
            reap: true,
            effect: "increase key cost by 2 during {1}'s next turn",
            effectArgs: (context) => context.player.opponent,
            gameAction: ability.actions.nextRoundEffect({
                targetController: 'opponent',
                effect: ability.effects.modifyKeyCost(2)
            })
        });
    }
}

SensorChiefGarcia.id = 'sensor-chief-garcia';

module.exports = SensorChiefGarcia;
