# World 2 Development Plan: The Arcane Citadel

This document tracks the features and progress for the second stage of Paddle Knight.

## Original Plan

**Theme:**
You've defeated the Brick Lord and now ascend to the magical floating citadel where the Archmage of Bricks resides. This stage introduces magical/elemental mechanics.

**New Stat: Wisdom**
- Increases mana regeneration (for new active abilities)
- Enhances magical damage/effects
- Improves skill effect duration
- Unlocks spell-power mechanics

**New Enemy Brick Types:**
- **Apprentice Bricks** (Blue with sparkles): Teleport to a new position when hit but not destroyed
- **Elemental Bricks:**
  - Fire (Red/Orange): Explodes on death, damaging nearby bricks
  - Ice (Light Blue): Slows ball speed by 20% on hit
  - Lightning (Yellow): Chains damage to 1 random brick
- **Mirror Bricks** (Silver): Reflects projectiles back at you
- **Rune Bricks** (Purple with symbols): Buff nearby bricks with shields

**World 2 Skill Tree Branch - The Arcane Path:**
- **Tier 1:**
  - Arcane Intellect (Passive): +3 Wisdom per level, increases mana pool by 20
  - Spell Power (Passive): Magic effects deal 15% more damage per level
- **Tier 2:**
  - Elemental Infusion (Active): Next 5 ball hits apply random element (fire DoT, ice slow, lightning chain)
  - Mana Shield (Triggered): When hit, consume 10 mana to block 50% damage
- **Tier 3:**
  - Runic Empowerment (Passive): Every 5th brick destroyed grants a random 3s buff (Haste, Power, Shield)
  - Arcane Orb (Active): Launch a slow magical orb that pierces everything and deals wisdom-based damage
- **Tier 4:**
  - Master of Elements (Passive): Breakthrough balls leave elemental trails that damage bricks they pass
  - Time Warp (Active - Ultimate): Rewind the ball position by 2 seconds, keeping all damage dealt

**Boss: The Archmage of Bricks**
- **Appearance:** A large, wizard-hat-shaped brick formation that glows with magical energy
- **Phase 1 Abilities (100-60% HP):**
  - Teleportation: Teleports to random positions every 5 seconds
  - Arcane Missiles: Fires 2 homing projectiles that curve toward your paddle
  - Summon Apprentices: Spawns 3 Apprentice Bricks as shields
- **Phase 2 Abilities (60-30% HP):**
  - Elemental Storm: Rotates between fire rain (damage zones), ice spikes (slowing fields), and lightning strikes (instant damage lines)
  - Mirror Image: Creates 2 fake copies of itself - only the real one takes damage
  - Mana Burn: Your active skills cost 2x cooldown for 10 seconds
- **Phase 3 - Desperation (Below 30% HP):**
  - Arcane Overload: Constantly pulses magical damage in expanding rings
  - Chaos Magic: All your balls randomly change direction every 2 seconds
  - Final Gambit: At 10% HP, stops moving and channels a massive beam down the center - you must finish it off from the sides!

**Stage Reward Ideas:**
- Unlock a new skill slot (can equip 3 active skills instead of 2)
- Permanent +10 Wisdom
- New cosmetic: Magical particle effects on paddle/balls

---

## Current Progress (As of Last Update)

### Core Mechanics
- ✅ **Wisdom Stat:** Implemented and integrated into the player stats.
- ✅ **Mana System:** Mana pool and regeneration are functional. Regeneration scales with Wisdom.
- ✅ **Skill Tree:** The infrastructure for the Arcane Path is in place.
- ✅ **Wisdom Effects:**
  - ✅ Implement scaling for magical damage based on Wisdom.
  - ✅ Implement scaling for skill effect duration based on Wisdom.
  - ✅ Implement any other spell-power mechanics. (Wisdom now increases Fire explosion radius and number of Lightning chains).

### New Enemy Bricks
- ✅ **Apprentice Bricks:** Logic for teleporting on non-lethal hits is implemented.
- ✅ **Fire Bricks:** Explode on death, dealing area-of-effect damage to nearby bricks.
- ✅ **Ice Bricks:** Slow the ball on impact.
- ✅ **Lightning Bricks:** Chain damage to another random brick upon destruction.
- ✅ **Mirror Bricks:** Implement logic to reflect player projectiles.
- ✅ **Rune Bricks:** Implement logic to apply shield buffs to adjacent bricks.

### World 2 Skills
- ✅ **Arcane Intellect (Passive):** Implemented. Correctly increases Wisdom and Max Mana.
- ✅ **Mana Shield (Triggered):** Implemented. Consumes mana to block 50% of incoming damage when the skill is learned.
- ✅ **Tier 1 - Spell Power (Passive):** Add skill node and implement logic for increased magic damage.
- ✅ **Tier 2 - Elemental Infusion (Active):** Add skill node and implement active ability logic.
- ✅ **Tier 3 - Runic Empowerment (Passive):** Add skill node and implement logic for granting random buffs.
- ✅ **Tier 3 - Arcane Orb (Active):** Add skill node and implement new projectile type and active ability.
- ✅ **Tier 4 - Master of Elements (Passive):** Add skill node and implement logic for elemental trails.
- ✅ **Tier 4 - Time Warp (Active - Ultimate):** Add skill node and implement rewind mechanic.

### Boss: The Archmage of Bricks
- ✅ **Phase 1 Abilities:**
  - ✅ Implement `Arcane Missiles` attack.
  - ✅ Implement `Summon Apprentices` ability.
- ✅ **Phase 2 Abilities:**
  - ✅ Implement HP-based phase transition.
  - ✅ Implement `Elemental Storm` attack patterns.
  - ✅ Implement `Mirror Image` ability.
  - ✅ Implement `Mana Burn` debuff.

---

## Remaining Tasks

### Boss: The Archmage of Bricks
- [x] **Phase 3 Abilities:**
  - [x] Implement HP-based phase transition.
  - [x] Implement `Arcane Overload` pulsing damage.
  - [x] Implement `Chaos Magic` ball direction changes.
  - [x] Implement `Final Gambit` channelled beam attack.

### World Rewards
- [x] Implement logic to unlock a 3rd active skill slot.
- [x] Implement system for permanent stat rewards.
- [x] Implement cosmetic system for paddle/ball effects.