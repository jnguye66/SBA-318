// The "eidolons" data that includes information about
// each Astral Express member's eidolons

const eidolons = [
    {
        id: 1,
        userId: 1,
        E1: {
            name: "Best Seat in the House",
            desc: "After using Skill for the first time, immediately recovers 1 Skill Point(s)."
        },
        E2: {
            name: "Jailbreaking Rainbowwalk",
            desc: "When the battle starts, the Trailblazer's Energy Regeneration Rate increases by 25%, lasting for 3 turn(s)."
        },
        E3: {
            name: "Sanatorium for Rest Notes",
            desc: "Skill Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15."
        },
        E4: {
            name: "Dove in Tophat",
            desc: "While the Trailblazer is on the field, increases the Break Effect of all teammates (excluding the Trailblazer), by an amount equal to 15% of the Trailblazer's Break Effect."
        },
        E5: {
            name: "Poem Favors Thythms of Old",
            desc: "Ultimate Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +2, up to a maximum of Lv. 15."
        },
        E6: {
            name: "Tomorrow, Rest in Spotlight",
            desc: "The number of additional DMG applications by the Skill increases by 2."
        }
    },
    {
        id: 2,
        userId: 2,
        E1: {
            name: "Memory of You",
            desc: "Every time March 7th's Ultimate Freezes a target, she regenerates 6 energy."
        },
        E2: {
            name: "Memory of It",
            desc: "Upon entering battle, grants a Shield equal to 24% of March 7th's DEF plus 320 to the ally with the lowest HP percentage, lasting for 3 turn(s)."
        },
        E3: {
            name: "Memory of Everything",
            desc: "Ultimate Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +2, up to a maximum of Lv. 15."
        },
        E4: {
            name: "Never Forfeit Again",
            desc: "The Talent's Counter effect can be triggered 1 more time in each turn. The DMG dealt by Counter increases by an amount that is equal to 30% of March 7th's DEF."
        },
        E5: {
            name: "Never Forget Again",
            desc: "Skill Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15."
        },
        E6: {
            name: "Just Like This, Always...",
            desc: "Allies under the protection of the Shield granted by the skill restore HP equal to 4% of their Max HP plus 106 at the beginning of each turn."
        }
    },
    {
        id: 3,
        userId: 3,
        E1: {
            name: "The Higher You Fly, the Harder You Fall",
            desc: "When the target enemy's current HP percentage is greater than or equal to 50%, Crit Rate increases by 12%."
        },
        E2: {
            name: "Quell the Venom Octet, Quench the Vice O'Flame",
            desc: "Reduces Talent cooldown by 1 turn."
        },
        E3: {
            name: "Seen and Unseen",
            desc: "Skill Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15."
        },
        E4: {
            name: "Roaring Dragon and Soaring Sun",
            desc: "When Dan Heng uses his Ultimate to defeat an enemy, he will immediately take action again."
        },
        E5: {
            name: "A Drop of Rain Feeds a Torrent",
            desc: "Ultimate Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +2, up to a maximum of Lv. 15."
        },
        E6: {
            name: "The Troubled Soul Lies in Wait",
            desc: "The Slow state triggered by Skill reduces the enemy's SPD by an extra 8%."
        }
    },
    {
        id: 4,
        userId: 4,
        E1: {
            name: "Childhood",
            desc: "After 'Victory Rush' is triggered, Himeko's SPD increases by 20% for 2 turn(s)."
        },
        E2: {
            name: "Convergence",
            desc: "Deals 15% more DMG to enemies whose HP percentage is 50% or less."
        },
        E3: {
            name: "Poised",
            desc: "Skill Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15."
        },
        E4: {
            name: "Dedication",
            desc: "When Himeko's Skill inflicts Weakness Break on an enemy, she gains 1 extra point(s) of Charge."
        },
        E5: {
            name: "Aspiration",
            desc: "Ultimate Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +2, up to a maximum of Lv. 15."
        },
        E6: {
            name: "Trailblaze!",
            desc: "Ultimate deals DMG 2 extra times, each of which deals Fire DMG equal to 40% of the original DMG to a random enemy."
        }
    },
    {
        id: 5,
        userId: 5,
        E1: {
            name: "Legacy of Honor",
            desc: "After Welt uses his Ultimate, his abilities are enhanced. The next 2 time(s) he uses his Basic ATK or Skill, deals Additional DMG to the target equal to 50% of his Basic ATK's DMG multiplier or 80% of his Skill's DMG multiplier respectively."
        },
        E2: {
            name: "Conflux of Stars",
            desc: "When his Talent is triggered, Welt regenerates 3 Energy."
        },
        E3: {
            name: "Prayer of Peace",
            desc: "Skill Lv. +2, up to a maximum of Lv. 15. Talent Lv. +2, up to a maximum of Lv. 15."
        },
        E4: {
            name: "Appellation of Justice",
            desc: "Base chance for Skill to inflict SPD Reduction increases by 35%."
        },
        E5: {
            name: "Power of Kindness",
            desc: "Ultimate Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +2, up to a maximum of Lv. 15."
        },
        E6: {
            name: "Propect of Glory",
            desc: "When using Skill, deals DMG for 1 extra time to a random enemy."
        }
    },
]

module.exports = eidolons;