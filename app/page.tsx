"use client";

import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Credentials from "@/components/Credentials";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Credentials />
        <Divider label="// work log" />
        <Projects />
        <Divider label="// about" />
        <About />
      </main>
      <Footer />
    </>
  );
}
