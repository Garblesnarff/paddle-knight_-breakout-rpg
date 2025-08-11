export interface StageDefinition {
  id: number;
  world: number;
  name: string;
  layoutKey: string;
  starCriteria: {
    minHpPercent: number;
    time: number;
  };
}


