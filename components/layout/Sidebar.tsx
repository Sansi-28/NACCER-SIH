"use client";
// components/layout/Sidebar.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  ClipboardCheck,
  LineChart,
  ShieldCheck,
  Download,
  Settings,
  Atom,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/proposals", icon: FileText, label: "Proposals" },
  { href: "/evaluation", icon: ClipboardCheck, label: "Evaluation" },
  { href: "/analytics", icon: LineChart, label: "Analytics" },
  { href: "/compliance", icon: ShieldCheck, label: "Compliance" },
  { href: "/reports", icon: Download, label: "Reports" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex flex-col w-64 p-4 glass-card m-4">
      <div className="flex items-center gap-3 mb-8 px-2">
        <Atom className="w-8 h-8 text-primary" />
        <span className="text-xl font-bold">NaCCER</span>
      </div>
      <ul className="flex flex-col gap-2">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                pathname === item.href
                  ? "bg-primary/20 text-primary font-semibold"
                  : "hover:bg-white/5 text-text-secondary"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Link
          href="/settings"
          className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
            pathname === "/settings"
              ? "bg-primary/20 text-primary font-semibold"
              : "hover:bg-white/5 text-text-secondary"
          }`}
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </Link>
      </div>
    </nav>
  );
}
