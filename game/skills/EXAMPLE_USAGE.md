# SkillBuilder Usage Examples

This file demonstrates the code reduction achieved by using the SkillBuilder pattern.

## Before (Original Code)

```typescript
import { SkillNode, SkillType } from '../../../types';

export const WORLD_1_SKILLS: Record<string, SkillNode> = {
    'powerBoost': {
        id: 'powerBoost',
        name: 'Power Boost',
        description: (level) => `Increases Power by ${level * 2}. Next: +2 Power.`,
        maxLevel: 5,
        cost: (level) => level + 1,
        dependencies: [],
        type: SkillType.Passive,
        position: { row: 0, col: 0 },
    },
    'vitalityBoost': {
        id: 'vitalityBoost',
        name: 'Vitality Boost',
        description: (level) => `Increases max HP by ${level * 20}. Next: +20 HP.`,
        maxLevel: 5,
        cost: (level) => level + 1,
        dependencies: [],
        type: SkillType.Passive,
        position: { row: 0, col: 2 },
    },
    'ballDamageBoost': {
        id: 'ballDamageBoost',
        name: 'Ball Damage Boost',
        description: (level) => `Increases ball damage by ${level * 10}%. Next: +10% damage.`,
        maxLevel: 5,
        cost: (level) => level + 1,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 1, col: 0 },
    },
    'aegisParry': {
        id: 'aegisParry',
        name: 'Aegis Parry',
        description: () => 'Active: Brief parry window. If ball hits paddle during parry, it gains +100% damage, +25% speed, and pierces 1 brick.',
        maxLevel: 1,
        cost: () => 3,
        dependencies: ['defenseBoost'],
        type: SkillType.Active,
        position: { row: 2, col: 2 },
    },
    'multiBallUnlock': {
        id: 'multiBallUnlock',
        name: 'Unlock Multi-Ball',
        description: () => 'Unlocks the Multi-Ball active skill. Lets you fire two extra balls.',
        maxLevel: 1,
        cost: () => 2,
        dependencies: ['breakthrough'],
        type: SkillType.Active,
        position: { row: 3, col: 0 },
    },
};
```

**Lines of code: 53**

---

## After (Using SkillBuilder)

```typescript
import { SkillNode } from '../../../src/types';
import { SkillBuilder } from '../skills/SkillBuilder';

export const WORLD_1_SKILLS: Record<string, SkillNode> = {
    'powerBoost': SkillBuilder
        .passive('powerBoost', 'Power Boost', (level) => `Increases Power by ${level * 2}. Next: +2 Power.`)
        .at(0, 0)
        .build(),

    'vitalityBoost': SkillBuilder
        .passive('vitalityBoost', 'Vitality Boost', (level) => `Increases max HP by ${level * 20}. Next: +20 HP.`)
        .at(0, 2)
        .build(),

    'ballDamageBoost': SkillBuilder
        .passive('ballDamageBoost', 'Ball Damage Boost', (level) => `Increases ball damage by ${level * 10}%. Next: +10% damage.`)
        .requires('powerBoost')
        .at(1, 0)
        .build(),

    'aegisParry': SkillBuilder
        .active('aegisParry', 'Aegis Parry', () => 'Active: Brief parry window. If ball hits paddle during parry, it gains +100% damage, +25% speed, and pierces 1 brick.')
        .requires('defenseBoost')
        .at(2, 2)
        .build(),

    'multiBallUnlock': SkillBuilder
        .active('multiBallUnlock', 'Unlock Multi-Ball', () => 'Unlocks the Multi-Ball active skill. Lets you fire two extra balls.')
        .withFixedCost(2)
        .requires('breakthrough')
        .at(3, 0)
        .build(),
};
```

**Lines of code: 33**

**Reduction: 38% fewer lines**

---

## Alternative: Using createSkillRecord

For even more concision:

```typescript
import { SkillBuilder, createSkillRecord } from '../skills/SkillBuilder';

export const WORLD_1_SKILLS = createSkillRecord([
    SkillBuilder.passive('powerBoost', 'Power Boost', (level) => `Increases Power by ${level * 2}. Next: +2 Power.`).at(0, 0).build(),
    SkillBuilder.passive('vitalityBoost', 'Vitality Boost', (level) => `Increases max HP by ${level * 20}. Next: +20 HP.`).at(0, 2).build(),
    SkillBuilder.passive('ballDamageBoost', 'Ball Damage Boost', (level) => `Increases ball damage by ${level * 10}%. Next: +10% damage.`).requires('powerBoost').at(1, 0).build(),
    SkillBuilder.active('aegisParry', 'Aegis Parry', () => 'Active: Brief parry window...').requires('defenseBoost').at(2, 2).build(),
    SkillBuilder.active('multiBallUnlock', 'Unlock Multi-Ball', () => 'Unlocks the Multi-Ball active skill...').withFixedCost(2).requires('breakthrough').at(3, 0).build(),
]);
```

**Lines of code: 8**

**Reduction: 85% fewer lines**

---

## Advanced Examples

### Custom Cost Function
```typescript
SkillBuilder
    .passive('advancedSkill', 'Advanced Skill', (level) => `Powerful effect ${level}`)
    .withCost((level) => level * 2 + 3)  // Custom scaling
    .at(5, 5)
    .build()
```

### Multiple Dependencies
```typescript
SkillBuilder
    .ultimate('masterSkill', 'Master Skill', () => 'Ultimate ability')
    .requires('skill1', 'skill2', 'skill3')  // Multiple prerequisites
    .at(6, 3)
    .build()
```

### Triggered Skill
```typescript
SkillBuilder
    .triggered('manaShield', 'Mana Shield', () => 'Block 50% damage with mana')
    .requires('arcaneIntellect')
    .at(1, 3)
    .build()
```

### Custom Max Level
```typescript
SkillBuilder
    .passive('rareSkill', 'Rare Skill', (level) => `Effect ${level}`)
    .withMaxLevel(3)  // Override default of 5
    .withCost((level) => level + 2)
    .at(2, 4)
    .build()
```

---

## Benefits

1. **Reduced Boilerplate**: No need to repeat `id`, `dependencies: []`, `maxLevel`, `cost` for standard skills
2. **Sensible Defaults**: Passive skills automatically get maxLevel=5, cost=(level)=>level+1
3. **Type Safety**: Full TypeScript support with autocomplete
4. **Fluent API**: Chain methods for clean, readable code
5. **Maintainability**: Changes to skill structure only need to happen in one place
6. **Less Error-Prone**: Can't forget required fields; defaults handle common cases
