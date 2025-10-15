"use client";

import { useState } from 'react';
import { ProposalDataTable } from '@/components/proposals/ProposalDataTable';
import { ProposalQuickViewModal } from '@/components/proposals/detail/ProposalQuickViewModal';
import { Header } from '@/components/layout/Header';
import { appData } from '@/data/mockData';

export default function ProposalsPage() {
  const [selectedProposalId, setSelectedProposalId] = useState<string | null>(null);

  const handleRowClick = (proposalId: string) => {
    setSelectedProposalId(proposalId);
  };

  const handleCloseModal = () => {
    setSelectedProposalId(null);
  }

  return (
    <div>
      <Header title="Proposal Management" subtitle="A powerful, interactive data grid for managing all proposals." />
      <div className="mt-6">
        <ProposalDataTable onRowClick={handleRowClick} data={appData.proposals as any} />
      </div>

      <ProposalQuickViewModal
        proposalId={selectedProposalId}
        isOpen={!!selectedProposalId}
        onClose={handleCloseModal}
      />
    </div>
  );
}
