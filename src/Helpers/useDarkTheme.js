import { useState } from "react";

const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
}; 


const useDarkTheme = () => {
   const [theme, setTheme] = useState(THEMES.LIGHT); 

   const themeToggler = (checked) => {
      theme === THEMES.LIGHT && checked ? setTheme(THEMES.DARK) : setTheme(THEMES.LIGHT); 
   }

   return [theme, themeToggler]; 
}

export default useDarkTheme; 