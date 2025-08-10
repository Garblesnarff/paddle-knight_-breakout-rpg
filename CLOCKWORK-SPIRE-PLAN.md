# The Clockwork Spire Development Plan

This document outlines the features and development plan for the Clockwork Spire world.

## Theme

After defeating the Archmage, you discover they were merely guardians of an ancient mechanical tower that controls time itself. The **Chrono-Engineer** has weaponized time and machinery against you. This world blends steampunk aesthetics with temporal mechanics, where magic meets technology.

## New Stat: Ingenuity

- Increases critical hit chance (synergizes with Luck)
- Improves XP and gold gain from mechanical enemies (+5% per point)
- Reduces skill cooldowns by 2% per point
- Enhances mechanical/temporal skill effects

## New Enemy Brick Types

### Core Mechanical Enemies:
- **Gear Bricks** (Bronze/Copper gradient): Rotate position with adjacent bricks every 3 hits to the formation
- **Steam Bricks** (Grey/Silver with pipe details): Create lingering damage zones when destroyed (3-second duration)
- **Clockwork Bricks** (Brass with visible gears): Temporarily speed up your ball by 25% on hit (effect stacks!)
- **Tesla Bricks** (Electric Blue with crackling effect): On destruction, shoot lightning in 4 cardinal directions
- **Piston Bricks** (Iron/Steel): Knock your ball back with 150% force when hit
- **Assembly Bricks** (Copper with wrench symbol): Rebuild a random destroyed brick every 10 seconds

## Skill Tree Branch - The Inventor's Path

### Tier 1:
- **Ingenious Mind** (Passive): +3 Ingenuity per level, +10% XP gain
- **Precision Timing** (Passive): Perfect paddle hits (center 20%) deal double damage

### Tier 2:
- **Overclock** (Active - 30s cooldown): All balls move 50% faster but deal 150% damage for 5 seconds
- **Emergency Repair** (Triggered): When HP drops below 30%, instantly heal 25% of max HP (once per stage)

### Tier 3:
- **Temporal Echo** (Passive): 20% chance for balls to create a "ghost ball" on brick hit that mimics the next 3 bounces
- **Steam Burst** (Active - 45s cooldown): Paddle releases a steam blast, launching 3 projectiles upward

### Tier 4:
- **Perpetual Motion** (Passive): Balls that hit 10+ bricks without touching paddle gain permanent +25% damage
- **Chrono Break** (Ultimate - 90s cooldown): Freeze time for 3 seconds - paddle and balls still move, bricks don't

## Boss: The Chrono-Engineer

**Appearance:** A massive clockwork mechanism with exposed gears, steam vents, and a central clock face that shows the current time. Bronze and brass coloring with silver accents.

### Phase 1 - "Calibration" (100-70% HP):
- **Pendulum Swing**: Boss swings left-right in a predictable but accelerating pattern
- **Gear Toss**: Throws spinning gears that bounce off walls 3 times before disappearing
- **Steam Jets**: Vertical steam columns that push balls sideways (telegraph with steam particles)

### Phase 2 - "Acceleration" (70-40% HP):
- **Speed Zones**: Creates alternating vertical zones that double or halve ball speed
- **Piston Punch**: Extends pistons from the sides that can hit your paddle for damage
- **Tesla Field**: Electrified zones that damage balls passing through (balls survive but you take 5 damage)

### Phase 3 - "Overtime" (Below 40% HP):
- **Time Distortion**: Every 5 seconds, ALL balls and projectiles reverse direction for 1 second
- **Mechanical Reinforcements**: Spawns indestructible Gear Bricks that rotate around the boss as shields
- **Final Countdown**: At 10% HP, a timer starts - boss heals 2% HP per second, forcing aggressive play

## Environmental Modifiers

### Stage-Specific Mechanics:
- **Conveyor Stages**: Paddle moves slowly left/right automatically (must compensate with mouse)
- **Pressure Valve Stages**: Destroying bricks too fast causes "overheating" (temporary 50% paddle slowdown)
- **Synchronized Stages**: All mechanical bricks activate abilities simultaneously every 5 seconds
- **Rotating Sections**: Parts of the playfield slowly rotate, changing ball trajectories

## Integration with Existing Systems

### Mechanical Synergies:
- Steam Bricks utilize the existing explosion system but with persistent damage zones
- Tesla Bricks use the Lightning chain system but fire in straight lines (4 directions)
- Clockwork speed changes use the Ice Brick slow mechanism (but increase speed instead)
- Assembly Bricks use the existing brick spawning system from boss fights

### Cross-World Skill Combos:
- **Overclock + Elemental Infusion** = Blazing fast elemental balls
- **Temporal Echo + Master of Elements** = Ghost balls leave elemental trails
- **Steam Burst + Spell Power** = Magical steam projectiles with increased damage
- **Chrono Break + Time Warp** = Ultimate temporal control combination

## Stage Reward Ideas

- Unlock 4th active skill slot (permanent upgrade)
- Permanent +10 Ingenuity stat bonus
- New cosmetic: Clockwork paddle with rotating gears animation and steam particle effects
- New cosmetic: Mechanical ball skin with trailing cog particles
- **Meta Progression Unlock**: "Time Trial Mode" for all previous stages with leaderboards

## Gold and XP Bonuses

- Mechanical enemies drop 25% more gold than magical enemies (encourages farming)
- Completing stages under "par time" grants 50% bonus gold
- Chain-destroying Gear Brick formations grants XP multipliers (x1.5 for 3+ chain)
- Perfect clear (no damage taken) grants +100 bonus gold

## Implementation Notes

### Priority Features:
1. Implement base mechanical enemy types and their unique behaviors
2. Create the Chrono-Engineer boss with phase transitions
3. Add Ingenuity stat and integrate with existing systems
4. Implement Inventor's Path skill tree
5. Add environmental modifiers for variety
6. Polish with particle effects and steampunk visual theme

### Visual Theme Guidelines:
- **Color Palette**: Bronze, brass, copper, iron, silver with steam effects
- **Particle Effects**: Steam puffs, gear rotations, electric sparks, clock hand movements
- **Audio Cues**: Mechanical clicks, steam hisses, clockwork ticking, tesla coil buzzing
- **UI Elements**: Gear-shaped borders, pressure gauges, clock displays showing ability timers

### Balancing Considerations:
- Ingenuity stat should feel impactful but not overshadow Wisdom/Power builds
- Mechanical enemies should encourage different strategies than magical enemies
- Boss fight should test both reflexes and resource management
- Time pressure mechanics should create tension without being frustrating

## Stage Names and Progression

Suggested stage sequence (flexible based on world order):
1. **The Winding Entrance** - Tutorial for mechanical enemies
2. **Gear Gallery** - Introduction to rotating Gear Bricks
3. **Steam Factory** - Heavy use of Steam Bricks and environmental hazards
4. **Tesla Laboratory** - Electric-themed with Tesla Brick chains
5. **Assembly Line** - Assembly Bricks create regenerating challenges
6. **The Pressure Chamber** - Environmental pressure mechanics
7. **Clockwork Maze** - Rotating playfield sections
8. **The Synchronizer** - All mechanics activate in sync
9. **Time Workshop** - Speed zones and time distortion preview
10. **Engineer's Forge** - Final boss battle with the Chrono-Engineer

## Future Expansion Ideas

- **Endless Mode**: Clockwork Gauntlet - waves of mechanical enemies with increasing speed
- **Daily Challenge**: Time-locked stages that change every 24 real-world hours
- **New Game+**: Replay with all mechanical enemies having +1 Assembly Brick behavior
- **Secret Boss**: The Paradox Machine - unlocked by completing all stages under par time
