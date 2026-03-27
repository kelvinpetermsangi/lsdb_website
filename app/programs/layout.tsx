import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/programs",
  },
};

export default function ProgramsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
