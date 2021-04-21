/* 
  toda página da aplicação é exibida dentro do app, ou seja, sempre que existem componentes que aparecem em todas as páginas da aplicação podemos colocar eles dentro do app.
*/
import '../styles/global.scss';

import { Header } from  '../components/Header';
import { Player } from '../components/Player';

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  )
}

export default MyApp
