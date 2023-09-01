import React from 'react'
import styles from  './Navbar.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { RiShoppingCartFill, RiShoppingCart2Line } from 'react-icons/ri';
import classNames from 'classnames'
import Busca from 'components/Busca';

const iconeProps =  {
  color: 'white',
  size: 24
}

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <div className={styles.links}>
        <div>
          <a
            href="/"
            className={classNames(styles.link, {
              [styles.selected]: window.location.pathname === "/",
            })}
          >
            Página inicial
          </a>
        </div>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <a href="/carrinho">
          {window.location.pathname === "/carrinho" 
            ? <RiShoppingCartFill {...iconeProps} />
            : <RiShoppingCart2Line {...iconeProps} />
          }
        </a>
      </div>
    </nav>
  );
}

export default Navbar