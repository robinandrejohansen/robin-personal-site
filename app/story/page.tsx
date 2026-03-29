"use client";

import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Story from "@/components/Story";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

export default function StoryPage() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Story />
      </main>
      <Footer />
    </>
  );
}
