import { Metadata } from "next";
import TeamPageClient from "./TeamPageClient";

export const metadata: Metadata = {
  title: "Our Team - LSDB",
  description:
    "Explore the LSDB team structure, service approach, and future opportunities.",
};

export default function TeamPage() {
  return <TeamPageClient />;
}
