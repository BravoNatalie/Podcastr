import Switch from  'react-switch';
import {IoSunnyOutline, IoMoon} from 'react-icons/io5';
import { IconContext } from "react-icons";
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import { useTheme } from '../../contexts/ThemeContext';

import styles from './styles.module.scss';

export function Header(){
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir sempre</p>

      <span>{currentDate}</span>
      
      <Switch 
        onChange={toggleTheme}
        checked={isDark}
        checkedIcon={false}
        uncheckedIcon={false}
        checkedHandleIcon={
          <div  style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
          }}>
            <IconContext.Provider value={{size: "1.5rem"}}>
              <div>
                <IoMoon />
              </div>
            </IconContext.Provider>
          </div>
        }
        uncheckedHandleIcon={
          <div  style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
          }}>
            <IconContext.Provider value={{size: "1.5rem"}}>
              <div>
                <IoSunnyOutline />
              </div>
            </IconContext.Provider>
          </div>
        }
        offColor="#e8e5f0"
        onColor="#312f3b"
        handleDiameter={22}
        height={10}
        width={32}
      />
    </header>
  );
}