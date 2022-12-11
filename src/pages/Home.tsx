import styles from '../styles/pages/Home.module.css'
import { TableCars } from '../components/TableCars';
import { TableDriver } from '../components/TableDriver';

export function Home() {
  return (
    <div className={styles.container}>
      <h2>Página Inicial</h2>
      <main>
        <TableCars />
        <TableDriver />
      </main>
    </div>
  )
}
