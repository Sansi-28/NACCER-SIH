export const appData = {
    proposals: [
        // IIT Bombay
        { id: 'P2024-001', title: 'Advanced Gasification for High-Ash Indian Coal', score: 92, status: 'Approved', research_area: 'Clean Coal Technology', novelty_score: 95, technical_feasibility: 90, budget: 4500000, pi_name: 'Dr. Rajesh Kumar', institution: 'IIT Bombay', submission_date: '2024-01-15', duration: 36, overall_score: 92, financial_viability: 88, team_capability: 96, risk_level: 'Low' },
        { id: 'P2024-002', title: 'IoT-based Real-time Strata Monitoring System', score: 88, status: 'Under Review', research_area: 'Mine Safety', novelty_score: 85, technical_feasibility: 92, budget: 3200000, pi_name: 'Dr. Sunita Sharma', institution: 'IIT Bombay', submission_date: '2024-02-20', duration: 24, overall_score: 88, financial_viability: 85, team_capability: 90, risk_level: 'Medium' },
        
        // IIT Delhi
        { id: 'P2024-003', title: 'Carbon Capture using Metal-Organic Frameworks', score: 95, status: 'Approved', research_area: 'Carbon Capture & Utilization', novelty_score: 98, technical_feasibility: 93, budget: 5000000, pi_name: 'Dr. Amit Singh', institution: 'IIT Delhi', submission_date: '2024-01-25', duration: 48, overall_score: 95, financial_viability: 92, team_capability: 97, risk_level: 'Low' },
        { id: 'P2024-004', title: 'AI-driven Predictive Maintenance for HEMM', score: 85, status: 'Pending', research_area: 'AI in Mining', novelty_score: 82, technical_feasibility: 88, budget: 2800000, pi_name: 'Dr. Meera Desai', institution: 'IIT Delhi', submission_date: '2024-03-10', duration: 30, overall_score: 85, financial_viability: 87, team_capability: 84, risk_level: 'Medium' },
        
        // IISc Bangalore
        { id: 'P2024-005', title: 'Supercritical CO2 Extraction for Rare Earth Elements from Coal Ash', score: 97, status: 'Approved', research_area: 'Sustainable Mining', novelty_score: 96, technical_feasibility: 95, budget: 6500000, pi_name: 'Dr. Vikram Rao', institution: 'IISc Bangalore', submission_date: '2024-02-05', duration: 48, overall_score: 97, financial_viability: 94, team_capability: 98, risk_level: 'Low' },
        
        // IIT Kharagpur
        { id: 'P2024-006', title: 'Optimization of Longwall Mining Operations via Simulation', score: 89, status: 'Approved', research_area: 'Mine Safety', novelty_score: 85, technical_feasibility: 91, budget: 4100000, pi_name: 'Dr. Anjali Verma', institution: 'IIT Kharagpur', submission_date: '2024-03-15', duration: 36, overall_score: 89, financial_viability: 88, team_capability: 90, risk_level: 'Low' },
        
        // ISM Dhanbad
        { id: 'P2024-007', title: 'Effective De-watering techniques for Deep Opencast Mines', score: 86, status: 'Under Review', research_area: 'Sustainable Mining', novelty_score: 80, technical_feasibility: 90, budget: 3500000, pi_name: 'Dr. Sanjay Gupta', institution: 'ISM Dhanbad', submission_date: '2024-04-01', duration: 24, overall_score: 86, financial_viability: 85, team_capability: 89, risk_level: 'Medium' },
        { id: 'P2024-008', title: 'Coal-to-Methanol Conversion using Novel Catalysts', score: 91, status: 'Approved', research_area: 'Clean Coal Technology', novelty_score: 93, technical_feasibility: 89, budget: 4800000, pi_name: 'Dr. Priya Mehta', institution: 'ISM Dhanbad', submission_date: '2024-04-10', duration: 36, overall_score: 91, financial_viability: 90, team_capability: 92, risk_level: 'Low' },
        
        // NIT Trichy
        { id: 'P2024-009', title: 'Dry Beneficiation Process for Low-Grade Coals', score: 84, status: 'Pending', research_area: 'Coal Beneficiation', novelty_score: 81, technical_feasibility: 85, budget: 2900000, pi_name: 'Dr. Karthik S.', institution: 'NIT Trichy', submission_date: '2024-04-22', duration: 30, overall_score: 84, financial_viability: 88, team_capability: 82, risk_level: 'Medium' },
        
        // IIT Madras
        { id: 'P2024-010', title: 'Underground Coal Gasification (UCG) Simulation Model', score: 78, status: 'Rejected', research_area: 'Underground Coal Gasification', novelty_score: 85, technical_feasibility: 70, budget: 3800000, pi_name: 'Dr. Lakshmi Iyer', institution: 'IIT Madras', submission_date: '2024-05-05', duration: 48, overall_score: 78, financial_viability: 75, team_capability: 80, risk_level: 'High' },
        
        // More data points
        { id: 'P2024-011', title: 'Drone-based Mine Surveying and Volumetric Analysis', score: 90, status: 'Approved', research_area: 'AI in Mining', novelty_score: 88, technical_feasibility: 92, budget: 2500000, pi_name: 'Dr. Arjun Reddy', institution: 'IIT Hyderabad', submission_date: '2024-05-12', duration: 18, overall_score: 90, financial_viability: 91, team_capability: 89, risk_level: 'Low' },
        { id: 'P2024-012', title: 'Recovery of Gallium from Coal Fly Ash', score: 87, status: 'Under Review', research_area: 'Sustainable Mining', novelty_score: 90, technical_feasibility: 85, budget: 4000000, pi_name: 'Dr. Preeti Nair', institution: 'IISc Bangalore', submission_date: '2024-05-20', duration: 36, overall_score: 87, financial_viability: 86, team_capability: 88, risk_level: 'Medium' },
        { id: 'P2024-013', title: 'Coal Slurry Pipeline Transportation Dynamics', score: 82, status: 'Pending', research_area: 'Coal Beneficiation', novelty_score: 78, technical_feasibility: 85, budget: 2200000, pi_name: 'Dr. Omar Abdullah', institution: 'NIT Warangal', submission_date: '2024-06-01', duration: 24, overall_score: 82, financial_viability: 84, team_capability: 80, risk_level: 'Medium' },
        { id: 'P2024-014', title: 'Flammable Gas Detection using Wireless Sensor Networks', score: 93, status: 'Approved', research_area: 'Mine Safety', novelty_score: 91, technical_feasibility: 94, budget: 3100000, pi_name: 'Dr. Sandeep Jha', institution: 'ISM Dhanbad', submission_date: '2024-06-05', duration: 24, overall_score: 93, financial_viability: 90, team_capability: 95, risk_level: 'Low' },
        { id: 'P2024-015', title: 'Bio-remediation of Acid Mine Drainage', score: 76, status: 'Rejected', research_area: 'Sustainable Mining', novelty_score: 72, technical_feasibility: 75, budget: 1800000, pi_name: 'Dr. Rohan Patel', institution: 'IIT Gandhinagar', submission_date: '2024-06-10', duration: 36, overall_score: 76, financial_viability: 80, team_capability: 73, risk_level: 'High' },

    ],
    monthly_trends: [
        { month: 'Jan', submissions: 30, approvals: 20 },
        { month: 'Feb', submissions: 45, approvals: 25 },
        { month: 'Mar', submissions: 60, approvals: 40 },
        { month: 'Apr', submissions: 50, approvals: 35 },
        { month: 'May', submissions: 70, approvals: 55 },
        { month: 'Jun', submissions: 85, approvals: 60 },
        { month: 'Jul', submissions: 75, approvals: 50 },
        { month: 'Aug', submissions: 65, approvals: 45 },
        { month: 'Sep', submissions: 90, approvals: 70 },
        { month: 'Oct', submissions: 110, approvals: 80 },
        { month: 'Nov', submissions: 95, approvals: 65 },
        { month: 'Dec', submissions: 80, approvals: 55 },
    ],
    score_distribution: [
        { range: '0-20', count: 5 },
        { range: '21-40', count: 15 },
        { range: '41-60', count: 40 },
        { range: '61-80', count: 120 },
        { range: '81-100', count: 65 },
    ],
    compliance_violations: {
        by_category: [
            { name: 'Financial', violations: 45 },
            { name: 'Technical', violations: 25 },
            { name: 'Novelty', violations: 18 },
            { name: 'Administrative', violations: 32 },
        ],
        top_rules: [
            { name: 'FIN-03 (Budget Cap)', violations: 28 },
            { name: 'ADMIN-01 (PI Eligibility)', violations: 21 },
            { name: 'NOV-01 (Similarity Threshold)', violations: 18 },
            { name: 'TECH-05 (Duration Limit)', violations: 15 },
        ]
    }
};