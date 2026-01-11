import { PageLayout } from "@/components/layouts";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageLayout mainClassName="bg-primary-50">
      <div className="max-w-s2xl mx-auto px-5 py-24 md:px-16">
        {children}
      </div>
    </PageLayout>
  );
}
