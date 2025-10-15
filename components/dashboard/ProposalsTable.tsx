// components/dashboard/ProposalsTable.tsx
import { appData } from "@/data/mockData";

export function ProposalsTable() {
  return (
    <div className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-4">Recent Proposals</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border-primary">
              <th className="p-3">ID</th>
              <th className="p-3">Title</th>
              <th className="p-3">Score</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {appData.proposals.slice(0, 5).map((proposal) => (
              <tr key={proposal.id} className="border-b border-border-primary/50 hover:bg-white/5">
                <td className="p-3">{proposal.id}</td>
                <td className="p-3">{proposal.title}</td>
                <td className="p-3">{proposal.score}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      proposal.status === "Approved"
                        ? "bg-green-500/20 text-green-400"
                        : proposal.status === "Pending"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {proposal.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
