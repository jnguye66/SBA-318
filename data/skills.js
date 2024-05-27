// The "skills" data that includes information about
// each Astral Express member's skills

const skills = [
    {
        id: 1,
        userId: 1,
        basic: {
            name: 'Swing Dance Etiquette',
            type: 'Single Target',
            maxLvl: 7,
            energyGain: 20,
            desc: "Deals Imaginary DMG equal to 100% of the Trailblazer's ATK to a single enemy."
        },
        skill: {
            name: 'Halftime to Make It Rain',
            type: 'Bounce',
            maxLvl: 12,
            energyGain: 6,
            desc: "Deals Imaginary DMG equal to 50% of the Trailblazer's ATK to a single target enemy and additionally deals DMG for 4 times, with each time dealing Imaginary DMG equal to 50% of the Trailblazer's ATK to a random enemy."
        },
        ultimate: {
            name: 'All-Out Footlight Parade',
            type: 'Support',
            maxLvl: 12,
            energyGain: 5,
            energyCost: 140,
            desc: "Grants all allies the Backup Dancer effect, lasting for 3 turn(s). This duration reduces by 1 at the start of Trailblazer's every turn. Allies with the Backup Dancer effect have their Break Effect increased by 30%. And when they attack enemy targets that are in the Weakness Broken state, the Toughness Reduction of the attack will be converted into 1 instance of Super Break DMG."
        },
        passive: {
            name: 'Full-on Aerial Dance',
            target: 'Impair',
            maxLvl: 12,
            energyGain: 0,
            desc: "The Trailblazer immediately regenerates 10.0 Energy when an enemy target's Weakness is Broken."
        }
    },
    {
        id: 1,
        userId: 2,
        basic: {
            name: 'Frigid Cold Arrow',
            type: 'Single Target',
            maxLvl: 7,
            energyGain: 20,
            desc: "Deals Ice DMG equal to 100% of March 7th's ATK to a single enemy."
        },
        skill: {
            name: 'The Power of Cuteness',
            type: 'Defense',
            maxLvl: 12,
            energyGain: 30,
            desc: "Provides a single ally with a Shield that can absorb DMG equal to 57% of March 7th's DEF plus 760 for 3 turn(s). If the ally's current HP percentage is 30% or higher, greatly increases the chance of enemies attacking that ally."
        },
        ultimate: {
            name: 'Glacial Cascade',
            type: 'AoE',
            maxLvl: 12,
            energyGain: 5,
            energyCost: 120,
            desc: "Deals Ice DMG equal to 130% of March 7th's ATK to all enemies. Hit enemies have a 50% base chance to be Frozen for 1 turn(s). While Frozen, enemies cannot take action and will receive Additional Ice DMG equal to 48% of March 7th's ATK at the beginning of each turn."
        },
        passive: {
            name: 'Girl Power',
            target: 'Single Target',
            maxLvl: 12,
            energyGain: 10,
            desc: "After a Shielded ally is attacked by an enemy, March 7th immediately Counters, dealing Ice DMG equal to 81% of her ATK. This effect can be triggered 2 time(s) each turn."
        }
    },
    {
        id: 1,
        userId: 3,
        basic: {
            name: 'Cloudlancer Art: North Wind',
            type: 'Single Target',
            maxLvl: 7,
            energyGain: 20,
            desc: "Deals Wind DMG equal to 100% of Dan Heng's ATK to a single enemy."
        },
        skill: {
            name: 'Cloudlancer Art: Torrent',
            type: 'Single Target',
            maxLvl: 12,
            energyGain: 30,
            desc: "Deals Wind DMG equal to 210% of Dan Heng's ATK to a single enemy. On a Critical Hit, there is a 100% base chance to reduce the target's SPD by 12% for 2 turn(s)."
        },
        ultimate: {
            name: 'Ethereal Dream',
            type: 'Single Target',
            maxLvl: 12,
            energyGain: 5,
            energyCost: 100,
            desc: "Deals Wind DMG equal to 450% of Dan Heng's ATK to a single enemy. If the enemy is slowed, the Ultimate's DMG multiplier increases by 120%."
        },
        passive: {
            name: 'Superiority of Reach',
            target: 'Enhance',
            maxLvl: 12,
            energyGain: 0,
            desc: "When Dan Heng is the target of an ally's ability, his next attack's Wind RES PEN increases by 27%. This effect can be triggered again after 2 turn(s)."
        }
    },
    {
        id: 1,
        userId: 4,
        basic: {
            name: 'Sawblade Tuning',
            type: 'Single Target',
            maxLvl: 6,
            energyGain: 20,
            desc: "Deals Fire DMG equal to 100% of Himeko's ATK to a single enemy."
        },
        skill: {
            name: 'Molten Detonation',
            type: 'Blast',
            maxLvl: 12,
            energyGain: 30,
            desc: "Deals Fire DMG equal to 225% of Himeko's ATK to a single enemy and Fire DMG equal to 100% of Himeko's ATK to enemies adjacent to it."
        },
        ultimate: {
            name: 'Heavenly Flare',
            type: 'AoE',
            maxLvl: 12,
            energyGain: 5,
            energyCost: 120,
            desc: "Deals Fire DMG equal to 300% of Himeko's ATK to all enemies. Himeko regenerates 5 extra Energy for each enemy defeated."
        },
        passive: {
            name: 'Victory Rush',
            target: 'AoE',
            maxLvl: 12,
            energyGain: 10,
            desc: "When an enemy is inflicted with Weakness Break, Himeko gains 1 point of Charge (max 3 points). If Himeko is fully Charged when an ally performs an attack, Himeko immediately performs 1 follow-up attack and deals Fire Dmg equal to 150% of her ATK to all enemies, consuming all Charge points. At the start of the battle, Himeko gains 1 point of Charge."
        }
    },
    {
        id: 1,
        userId: 5,
        basic: {
            name: 'Gravity Suppression',
            type: 'Single Target',
            maxLvl: 6,
            energyGain: 20,
            desc: "Deals Imaginary DMG equal to 100% of Welt's ATK to a single enemy."
        },
        skill: {
            name: 'Edge of the Void',
            type: 'Bounce',
            maxLvl: 12,
            energyGain: 6,
            desc: "Deals Imaginary DMG equal to 72% of Welt's ATK to a single enemy and further deals DMG 2 extra times, with each time dealing Imaginary DMG equal to 72% of Welt's ATK to a random enemy. On hit, there is a 75% base chance to reduce the enemy's SPD by 10% for 2 turn(s)."
        },
        ultimate: {
            name: 'Synthetic Black Hole',
            type: 'AoE',
            maxLvl: 12,
            energyGain: 5,
            energyCost: 120,
            desc: "Deals Imaginary DMG equal to 150% of Welt's ATK to all enemies, with a 100% base chance for enemies hit by this ability to be Imprisoned for 1 turn. Imprisoned enemies have their actions delayed by 40% and SPD reduced by 10%."
        },
        passive: {
            name: 'Time Distortion',
            target: 'AoE',
            maxLvl: 12,
            energyGain: 0,
            desc: "When hitting an enemy that is already Slowed, Welt deals Additional Imaginary DMG equal to 60% of his ATK to the enemy."
        }
    }
]

module.express = skills;