"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "@/context/UserContext";
import { Toaster } from "sonner";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  const client = new QueryClient();

  return <QueryClientProvider client={client}>
    <UserProvider>
      <Toaster richColors theme="dark" position="top-right" />
      {children}
    </UserProvider>
  </QueryClientProvider>;
};

export default Providers;
