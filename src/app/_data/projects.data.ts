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
      'This project aims to carry out a complete analysis of sales data from the Brazilian e-commerce site Olist, in order to extract relevant insights into commercial performance, customer behavior, delivery logistics and satisfaction.',
    viewLink:
      'https://github.com/DiegoPablo2021/Case_Trainee_Triggo_2025/blob/main/notebooks/dashboard.ipynb',
    sourceCode: 'https://github.com/DiegoPablo2021/Case_Trainee_Triggo_2025',
    imageUrl: 'assets/projects/02-etl.jpg',
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
      'Este projeto tem como objetivo realizar uma análise completa dos dados de vendas do e-commerce brasileiro Olist, a fim de extrair insights relevantes sobre o desempenho comercial, comportamento do cliente, logística de entrega e satisfação.',
    viewLink:
      'https://github.com/DiegoPablo2021/Case_Trainee_Triggo_2025/blob/main/notebooks/dashboard.ipynb',
    sourceCode: 'https://github.com/DiegoPablo2021/Case_Trainee_Triggo_2025',
    imageUrl: 'assets/projects/02-etl.jpg',
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
