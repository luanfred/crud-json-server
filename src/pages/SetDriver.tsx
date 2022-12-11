import TextField from '@mui/material/TextField';
import styles from '../styles/pages/Driver.module.css'
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export function SetDriver() {
  const { id } = useParams()
  const [formData, setFormData] = useState({
    codigo: '',
    nome: '',
    telefone: '',
    cnh: '',
  })

  const handleGetData = async () => {
    const resCars = await axios.get(`http://localhost:3000/motoristas/${id}`)

    setFormData(resCars.data)
  }

  const handleSubmit = async () => {
    const response = await axios.put(`http://localhost:3000/motoristas/${id}`, formData)

    if (response) {
      alert("Motorista editado com sucesso!")
    } else {
      alert("Não foi realizado a edição!")
    }
  }

  useEffect(() => {
    handleGetData()
  }, [])


  return (
    <div className={styles.container}>
      <h2>Atualizar dados do motorista</h2>
      <form className={styles.container_input} onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Codigo"
          required
          variant="outlined"
          value={formData.codigo}
          onChange={(e) => setFormData({ ...formData, codigo: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Nome"
          required
          variant="outlined"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Telefone"
          required
          variant="outlined"
          value={formData.telefone}
          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="CNH"
          required
          variant="outlined"
          value={formData.cnh}
          onChange={(e) => setFormData({ ...formData, cnh: e.target.value })}
        />
      </form>
      <div className={styles.containerButton}>
        <Link to='/'>
          <Button variant="contained" color='success'>Voltar</Button>
        </Link>
        <Button variant="contained" onClick={handleSubmit}>Adicionar</Button>
      </div>
    </div>
  )
}
