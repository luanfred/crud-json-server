import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../styles/components/Table.module.css'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'

interface DataType {
  codigo: string;
  nome: string,
  telefone: string,
  cnh: string,
  id: number
}

export function TableDriver() {
  const [driver, serDriver] = useState([])
  const [atualizaGrid, setAtualizaGrid] = useState(false)

  const handleGetData = async () => {
    const resDriver = await axios.get('http://localhost:3000/motoristas')

    serDriver(resDriver.data)
  }

  const handleDeleteData = async (id: Number) => {
    await axios.delete(`http://localhost:3000/motoristas/${id}`)

    setAtualizaGrid(!atualizaGrid)
  }

  useEffect(() => {
    handleGetData()
  }, [atualizaGrid])

  return (
    <div className={styles.container}>
      {driver.length > 0 ? (
        <>
          <h3>Motoristas cadastrados</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Nome</th>
                <th>Telefone</th>
                <th>CNH</th>
              </tr>
            </thead>
            <tbody>
              {
                driver.map((data: DataType, index) => (
                  <tr key={index}>
                    <td>{data.codigo}</td>
                    <td>{data.nome}</td>
                    <td>{data.telefone}</td>
                    <td>{data.cnh}</td>
                    <td></td>
                    <div className={styles.containerButton}>
                      <Link to={`editDriver/${data.id}`}>
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
        <>
          <h3>Nenhum motorista cadastrado</h3>
          <span>Clique no botão MOTORISTA para fazer o primeiro cadastro</span>
        </>
      )}
    </div>
  )
}
