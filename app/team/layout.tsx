import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/team",
  },
};

export default function TeamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
