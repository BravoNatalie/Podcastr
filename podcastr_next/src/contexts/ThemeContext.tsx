import { createContext, ReactNode, useContext, useState } from 'react';

type ThemeContextData = {
  isDark: boolean;
  toggleTheme: () => void;
}
export const ThemeContext = createContext( {} as ThemeContextData );

type ThemeContextProviderProps ={
  children: ReactNode;
}
export function ThemeContextProvider({ children }: ThemeContextProviderProps){
  const [isDark, setIsDark] = useState(false);

  function toggleTheme(){
    setIsDark(!isDark);
  }

  return (
    <ThemeContext.Provider value={{isDark, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
}