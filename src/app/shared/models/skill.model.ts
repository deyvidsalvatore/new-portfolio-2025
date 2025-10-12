export type Skill = {
  name: string;
  icon: string;
  percentage: number;
};

export type SkillSection = {
  id: string;
  title: string;
  subtitle: string;
  skills: Array<Skill>;
};
