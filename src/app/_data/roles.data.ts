import { signal } from "@angular/core";

export const ROLES_EN = signal<string[]>([
    "Data Analyst",
    "Data Engineer",
    "Cloud Data Associate",
    "SQL DBA",
    "Power BI Dev"
]);

export const ROLES_PT = signal<string[]>([
  'Analista de Dados',
  'Engenheiro de Dados',
  'Associado em Dados na Nuvem',
  'Administrador de Banco de Dados SQL',
  'Desenvolvedor Power BI',
]);
