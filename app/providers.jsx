"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

const Provider = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
};

export default Provider;
