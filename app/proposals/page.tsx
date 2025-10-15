"use client";

import { Header } from '@/components/layout/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProposalDataTable } from "@/components/proposals/ProposalDataTable";
import { useRouter } from "next/navigation";

const queryClient = new QueryClient();

function ProposalsPage() {
  const router = useRouter();

  const handleRowClick = (proposalId: string) => {
    router.push(`/proposals/${proposalId}`);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Header title="Proposal Management" subtitle="A powerful, interactive data grid for managing all proposals." />
      <div className="mt-6">
        <ProposalDataTable onRowClick={handleRowClick} />
      </div>
    </QueryClientProvider>
  );
}

export default ProposalsPage;
