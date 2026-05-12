import type { Metadata } from "next";
import { ForgeForm } from "@/components/form/ForgeForm";

export const metadata: Metadata = {
  title: "Forge Your Strategy",
  description:
    "Fill 7 fields in 3 minutes. Get a complete narrative war room — archetype, 48-hour plan, rivalry radar, viral threads, and more.",
};

export default function ForgePage() {
  return <ForgeForm />;
}
