import { PageLayout } from "@/components/layouts";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout>{children}</PageLayout>;
}
