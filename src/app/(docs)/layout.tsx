import { PageLayout } from "@/components/layouts";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageLayout>
      <div className="max-w-s2xl mx-auto flex">
        {/* Sidebar placeholder - will be added in future phase */}
        <aside className="hidden w-64 shrink-0 border-r border-primary-100 lg:block">
          {/* top-[--spacing-header] accounts for fixed header (68px) */}
          <nav className="sticky top-[var(--spacing-header)] p-6">
            <p className="text-sm font-medium text-primary-500">Documentation</p>
          </nav>
        </aside>
        {/* Main content - pt-[--spacing-header] clears fixed header */}
        <div className="min-w-0 flex-1 px-5 pb-12 pt-[calc(var(--spacing-header)+1rem)] md:px-8">
          {children}
        </div>
      </div>
    </PageLayout>
  );
}
