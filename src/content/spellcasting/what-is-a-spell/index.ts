import cantrips from "./cantrips.md"
import castingASpellAtAHigherLevel from "./casting-a-spell-at-a-higher-level.md"
import castingInArmor from "./casting-in-armor.md"
import knownAndPreparedSpells from "./known-and-prepared-spells.md"
import rituals from "./rituals.md"
import spellLevel from "./spell-level.md"
import spellSlots from "./spell-slots.md"

const breadcrumbs = ["Spellcasting", "What is a Spell"]

export default [
  { title: "Cantrips", content: cantrips, breadcrumbs },
  { title: "Casting a Spell at a Higher Level", content: castingASpellAtAHigherLevel, breadcrumbs },
  { title: "Casting in Armour", content: castingInArmor, breadcrumbs },
  { title: "Known and Prepared Spells", content: knownAndPreparedSpells, breadcrumbs },
  { title: "Rituals", content: rituals, breadcrumbs },
  { title: "Spell Level", content: spellLevel, breadcrumbs },
  { title: "Spell Slot", content: spellSlots, breadcrumbs },
]
