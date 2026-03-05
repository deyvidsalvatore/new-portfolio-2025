import { signal } from "@angular/core";
import { Project } from "../shared/models/project.model";

const PROJECTS_DATA_EN: Array<Project> = [
  {
    title: 'Data Dashboard',
    description:
      'Interactive commercial dashboard developed in Power BI, featuring detailed business metrics and KPIs',
    viewLink:
      'https://github.com/DiegoPablo2021/dashboard-comercial/raw/1689a5ab3aaa710f106952eea3305dbd85e0d622/dashboard-comercia.pbix',
    sourceCode: 'https://github.com/DiegoPablo2021/dashboard-comercial',
    imageUrl: 'assets/projects/01-dashboard.jpg',
  },
  {
    title: 'Triggo Case Study',
    description:
      'A comprehensive, Object-Oriented Machine Learning pipeline and Analytics Dashboard built during a professional technical test. Features fully automated Clustering with dynamic Silhouette Score logic, centralized logging, Pytest integration, and actionable Marketing strategies for Business metrics out of the Olist e-commerce massive dataset.',
    viewLink:
      'https://github.com/DiegoPablo2021/Case_Trainee_Triggo_2025/blob/main/dashboard.ipynb',
    sourceCode: 'https://github.com/DiegoPablo2021/Case_Trainee_Triggo_2025',
    imageUrl: 'assets/projects/ml_pipeline.png',
  },
  {
    title: 'Olist Analytics & Data Engineering',
    description: 'End-to-end portfolio project focusing on Brazilian e-commerce dataset analysis. Includes automated ETL data ingestion, PostgreSQL Data Warehouse modeling, and a Power BI Business Intelligence dashboard.',
    viewLink: 'https://github.com/DiegoPablo2021/olist-analytics',
    sourceCode: 'https://github.com/DiegoPablo2021/olist-analytics',
    imageUrl: 'assets/projects/03-olist.png',
  },
];

export const PROJECTS_DATA_PT: Array<Project> = [
  {
    title: 'Dashboard de Dados',
    description:
      'Dashboard comercial interativo desenvolvido no Power BI, com métricas de negócio e KPIs detalhados.',
    viewLink:
      'https://github.com/DiegoPablo2021/dashboard-comercial/raw/1689a5ab3aaa710f106952eea3305dbd85e0d622/dashboard-comercia.pbix',
    sourceCode: 'https://github.com/DiegoPablo2021/dashboard-comercial',
    imageUrl: 'assets/projects/01-dashboard.jpg',
  },
  {
    title: 'Estudo de Caso Triggo',
    description:
      'Pipeline Sênior e Dashboard Analytics construídos durante o teste técnico Triggo 2025. Inclui Clusterização OOD com automação via Silhouette Score dinâmico, MLOps, logs centralizados, integrações Pytest e mapeamento automático para estratégias de negócios sobre o Big Data do e-commerce Olist.',
    viewLink:
      'https://github.com/DiegoPablo2021/Case_Trainee_Triggo_2025/blob/main/dashboard.ipynb',
    sourceCode: 'https://github.com/DiegoPablo2021/Case_Trainee_Triggo_2025',
    imageUrl: 'assets/projects/ml_pipeline.png',
  },
  {
    title: 'Engenharia de Dados & Analytics Olist',
    description: 'Projeto de portfólio End-to-End focado na análise de dados do e-commerce Olist. Inclui ingestão automatizada de dados (ETL), modelagem de Data Warehouse em PostgreSQL e Dashboard Executivo no Power BI.',
    viewLink: 'https://github.com/DiegoPablo2021/olist-analytics',
    sourceCode: 'https://github.com/DiegoPablo2021/olist-analytics',
    imageUrl: 'assets/projects/03-olist.png',
  },
];

export const PROJECTS_EN_SIGNAL = signal<Project[]>(PROJECTS_DATA_EN);
export const PROJECTS_PT_SIGNAL = signal<Project[]>(PROJECTS_DATA_PT);
