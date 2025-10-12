import { signal } from '@angular/core';
import { HeroSection } from '../shared/models/hero.model';

export const HERO_EN = signal<HeroSection>({
  greeting: "Hi, I'm Diego Pablo",
  intro:
    'A Junior Data Analyst who transforms complex data into meaningful insights that drive better business decisions.',
  skills:
    'Skilled in Python, SQL, Power BI, Databricks, and Azure, I specialize in building data-driven solutions that improve efficiency, quality, and performance.',
});

export const HERO_PT = signal<HeroSection>({
  greeting: 'Oi, eu sou Diego Pablo',
  intro:
    'Sou um Analista de Dados Júnior que transforma dados complexos em insights significativos para impulsionar melhores decisões de negócios.',
  skills:
    'Habilidoso em Python, SQL, Power BI, Databricks e Azure, eu me especializo em construir soluções orientadas a dados que melhoram eficiência, qualidade e desempenho.',
});
