// types/index.ts

export interface Proposal {
    id: string;
    title: string;
    pi_name: string;
    institution: string;
    status: "Approved" | "Under Review" | "Rejected" | "Pending Review" | "Pending";
    overall_score: number;
    research_area: string;
    submission_date: string;
    // Add other properties from mockData as needed
    score: number;
    novelty_score: number;
    technical_feasibility: number;
    budget: number;
    duration: number;
    financial_viability: number;
    team_capability: number;
    risk_level: string;
  }
  
  export interface EvaluationQueueItem {
    id: string;
    title: string;
    pi_name: string;
    priority: "High" | "Medium" | "Low";
    ai_score: number;
    assigned_date: string;
    progress: number;
}
