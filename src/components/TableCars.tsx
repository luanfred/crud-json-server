import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../styles/components/Table.module.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Modal from './Modal';

interface DataType {
  placa: string,
  marca: string,
  veiculo: string,
  km: string
  id: number
}

export function TableCars() {
  const [cars, setCars] = useState([])
  const [atualizaGrid, setAtualizaGrid] = useState(false)

  const handleGetData = async () => {
    const resCars = await axios.get('http://localhost:3000/carros')

    setCars(resCars.data)
  }

  const handleDeleteData = async (id: Number) => {
    await axios.delete(`http://localhost:3000/carros/${id}`)

    setAtualizaGrid(!atualizaGrid)
  }

  useEffect(() => {
    handleGetData()
  }, [atualizaGrid])


  return (
    <div className={styles.container}>
      {cars.length > 0 ? (
        <>
          <h3>Carros cadastrados</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Placa</th>
                <th>Marca</th>
                <th>Veículo</th>
                <th>KM</th>
              </tr>
            </thead>
            <tbody>
              {
                cars.map((data: DataType, index) => (
                  <tr key={index}>
                    <td>{data.placa}</td>
                    <td>{data.marca}</td>
                    <td>{data.veiculo}</td>
                    <td>{data.km}</td>
                    <div className={styles.containerButton}>
                      <Link to={`/editCars/${data.id}`}>
                        <Button variant="contained" color='success' size='small'>editar</Button>
                      </Link>
                      <Button variant="contained" size='small' color='error' onClick={() => handleDeleteData(data.id)}>apagar</Button>
                    </div>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </>
      ) : (
        <div className={styles.containerElse}>
          <h3>Nenhum carro cadastrado</h3>
          <span>Clique no botão VEÍCULO para fazer o primeiro cadastro</span>
        </div>
      )}

    </div>
  )
}

