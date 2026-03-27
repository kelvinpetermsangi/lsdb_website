import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/resources",
  },
};

export default function ResourcesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
