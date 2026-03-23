import FloatingActions from "@/components/FloatingAction";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

const RootMainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full">
      <Navbar />
      {children}
      <Footer />
      <FloatingActions />
    </main>
  );
};

export default RootMainLayout;
