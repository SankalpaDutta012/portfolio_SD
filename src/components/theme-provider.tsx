
"use client"

import type { Dispatch, SetStateAction } from "react";
import React, { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme); // Initialize with default theme

  useEffect(() => {
    // This effect runs only on the client, after initial hydration
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [storageKey]); // Run once on mount, and if storageKey changes (unlikely for this prop)

  useEffect(() => {
    // This effect applies the theme to the document and saves it to localStorage
    // It runs on the client side
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    let currentTheme = theme;
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"
      root.classList.add(systemTheme)
      currentTheme = systemTheme; // For localStorage, store the resolved system theme
    } else {
      root.classList.add(theme)
    }
    
    // Only save to localStorage if the theme is not 'system' or if it's the resolved system theme
    // Or, always save the user's preference (light, dark, or system itself)
    localStorage.setItem(storageKey, theme); // Save the user's selected preference (light, dark, or system)

  }, [theme, storageKey]);


  const value = {
    theme,
    setTheme,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
