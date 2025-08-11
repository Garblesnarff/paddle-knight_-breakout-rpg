# Systems

Each system implements `IGameSystem` and is executed in priority order. Common systems (current stubs in place):

- PhysicsSystem: updates positions and velocities
- CollisionSystem: detects and resolves collisions
- CombatSystem: applies damage and effects
- SkillSystem: handles active and passive skills
- BuffSystem: manages temporary modifiers
- ProgressionSystem: XP, levels, rewards
 - SaveSystem: persistence integration and autosave hooks
