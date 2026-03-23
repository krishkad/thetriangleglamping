import React, { ReactNode } from "react";

const StayLayout = ({ children }: { children: ReactNode }) => {
  return <main className="w-full">{children}</main>;
};

export default StayLayout;
