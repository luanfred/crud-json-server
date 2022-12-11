import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../styles/pages/Cars.module.css'

export function SetCars() {
  const { id } = useParams()
  const [formData, setFormData] = useState<any>({
    placa: '',
    marca: '',
    veiculo: '',
    km: '',
  })

  const handleGetData = async () => {
    const resCars = await axios.get(`http://localhost:3000/carros/${id}`)

    setFormData(resCars.data)
  }

  const handleSubmit = async () => {
    const response = await axios.put(`http://localhost:3000/carros/${id}`, formData)

    if (response) {
      alert("Veículo editado com sucesso!")
    } else {
      alert("Não foi realizado a edição!")
    }
  }

  useEffect(() => {
    handleGetData()
  }, [])


  return (
    <div className={styles.container}>
      <h2>Atualizar dados do veículo</h2>
      <form className={styles.container_input} onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Placa"
          variant="outlined"
          value={formData.placa}
          onChange={(e) => setFormData({ ...formData, placa: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Marca"
          variant="outlined"
          value={formData.marca}
          onChange={(e) => setFormData({ ...formData, marca: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Veículo"
          variant="outlined"
          value={formData.veiculo}
          onChange={(e) => setFormData({ ...formData, veiculo: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Km para troca de óleo"
          variant="outlined"
          value={formData.km}
          onChange={(e) => setFormData({ ...formData, km: e.target.value })}
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

