import TextField from '@mui/material/TextField';
import styles from '../styles/pages/Cars.module.css'
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function Cars() {

  const [formData, setFormData] = useState<any>({
    placa: '',
    marca: '',
    veiculo: '',
    km: '',
  })


  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const response = await axios.post('http://localhost:3000/carros', formData)

    if (response) {
      alert("Veículo cadastrado com sucesso!")
    } else {
      alert("Não foi realizado o cadastro!")
    }

    setFormData({
      placa: '',
      marca: '',
      veiculo: '',
      km: '',
    })
  }

  console.log(formData)

  return (
    <div className={styles.container}>
      <h2>Cadastro de veículo</h2>
      <form className={styles.container_input} onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Placa"
          required
          variant="outlined"
          value={formData.placa}
          onChange={(e) => setFormData({ ...formData, placa: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Marca"
          required
          variant="outlined"
          value={formData.marca}
          onChange={(e) => setFormData({ ...formData, marca: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Veículo"
          required
          variant="outlined"
          value={formData.veiculo}
          onChange={(e) => setFormData({ ...formData, veiculo: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Km para troca de óleo"
          required
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
