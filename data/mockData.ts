// data/mockData.ts
export const appData = {
    proposals: [
        { id: 'P2023-001', title: 'Quantum Entanglement Communication', score: 92, status: 'Approved', research_area: 'Quantum Physics', novelty_score: 95, technical_feasibility: 90, budget: 500000, pi_name: 'Dr. Evelyn Reed', institution: 'MIT', submission_date: '2023-01-15', duration: 24, overall_score: 92, financial_viability: 85, team_capability: 98, risk_level: 'Low' },
        { id: 'P2023-002', title: 'AI-driven Drug Discovery', score: 88, status: 'Approved', research_area: 'Biotechnology', novelty_score: 90, technical_feasibility: 85, budget: 750000, pi_name: 'Dr. Kenji Tanaka', institution: 'Stanford', submission_date: '2023-02-20', duration: 36, overall_score: 88, financial_viability: 80, team_capability: 92, risk_level: 'Low' },
        { id: 'P2023-003', title: 'Graphene-based Water Filtration', score: 85, status: 'Pending', research_area: 'Materials Science', novelty_score: 80, technical_feasibility: 88, budget: 300000, pi_name: 'Dr. Priya Sharma', institution: 'IIT Bombay', submission_date: '2023-03-10', duration: 18, overall_score: 85, financial_viability: 90, team_capability: 82, risk_level: 'Medium' },
        { id: 'P2023-004', title: 'Fusion Energy Containment System', score: 78, status: 'Rejected', research_area: 'Physics', novelty_score: 85, technical_feasibility: 70, budget: 1200000, pi_name: 'Dr. Marcus Cole', institution: 'Caltech', submission_date: '2023-04-05', duration: 48, overall_score: 78, financial_viability: 75, team_capability: 80, risk_level: 'High' },
        { id: 'P2023-005', title: 'Decentralized Identity Protocol', score: 95, status: 'Approved', research_area: 'Computer Science', novelty_score: 98, technical_feasibility: 92, budget: 400000, pi_name: 'Alex Chen', institution: 'UC Berkeley', submission_date: '2023-05-21', duration: 12, overall_score: 95, financial_viability: 95, team_capability: 94, risk_level: 'Low' },
    ],
    monthly_trends: [
        { month: 'Jan', submissions: 30, approvals: 20 },
        { month: 'Feb', submissions: 45, approvals: 25 },
        { month: 'Mar', submissions: 60, approvals: 40 },
        { month: 'Apr', submissions: 50, approvals: 35 },
        { month: 'May', submissions: 70, approvals: 55 },
        { month: 'Jun', submissions: 85, approvals: 60 },
    ],
    score_distribution: [
        { range: '0-20', count: 5 },
        { range: '21-40', count: 15 },
        { range: '41-60', count: 40 },
        { range: '61-80', count: 120 },
        { range: '81-100', count: 65 },
    ]
};
