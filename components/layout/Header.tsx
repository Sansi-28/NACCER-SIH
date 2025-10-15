// components/layout/Header.tsx
export function Header({ title, subtitle }: { title: string; subtitle: string }) {
    return (
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-text-primary">{title}</h1>
        <p className="text-lg text-text-secondary">{subtitle}</p>
      </header>
    );
  }
  