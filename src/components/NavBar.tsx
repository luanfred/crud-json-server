import Button from '@mui/material/Button';
import styles from '../styles/components/NavBar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className={styles.container}>
      <img src="luanfred_logo.svg" alt="/" />
      <div className={styles.buttons}>
        <Link to='/'>
          <Button variant="contained" size='large'>Página Inicial</Button>
        </Link>
        <Link to='/veiculos'>
          <Button variant="contained" size='large'>Veículos</Button>
        </Link>
        <Link to='/motorista'>
          <Button variant="contained" size='large'>Motoristas</Button>
        </Link>
      </div>
    </header>
  )
}
