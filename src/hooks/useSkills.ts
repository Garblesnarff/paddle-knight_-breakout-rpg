import { useState, useCallback } from 'react';
import { Skill } from '../types/game.types';
import { PlayerStats } from '../types/game.types';

export const useSkills = (playerStats: PlayerStats) => {
  const [skills, setSkills] = useState<Map<string, Skill>>(new Map());
  const [cooldowns, setCooldowns] = useState<Map<string, number>>(new Map());

  const canActivateSkill = (skill: Skill, lastUsed?: number) => {
    if (!lastUsed) return true;
    return Date.now() - lastUsed > skill.cooldown;
  };

  const activateSkill = useCallback(
    (skillId: string) => {
      const skill = skills.get(skillId);
      if (!skill || !canActivateSkill(skill, cooldowns.get(skillId))) {
        return false;
      }

      // Activate skill logic
      setCooldowns((prev) => new Map(prev).set(skillId, Date.now()));
      return true;
    },
    [skills, cooldowns]
  );

  return { skills, setSkills, activateSkill, cooldowns };
};
