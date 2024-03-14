import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Cadastro = ({ onSubmit }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [whatsapp, setWhatsApp] = useState('');
  const [cpf, setCPF] = useState('');
  const [nomePai, setNomePai] = useState('');
  const [nomeMae, setNomeMae] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoCadastro = {
      nome,
      idade,
      cidade,
      telefone,
      whatsapp,
      cpf,
      nomePai,
      nomeMae,
    };
    onSubmit(novoCadastro);
    // Limpar os campos após o envio
    setNome('');
    setIdade('');
    setCidade('');
    setTelefone('');
    setWhatsApp('');
    setCPF('');
    setNomePai('');
    setNomeMae('');
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Cadastro De Paciente
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Nome Completo"
              variant="outlined"
              fullWidth
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Idade"
              variant="outlined"
              fullWidth
              type="number"
              value={idade}
              onChange={(event) => setIdade(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Cidade"
              variant="outlined"
              fullWidth
              value={cidade}
              onChange={(event) => setCidade(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="ex: 031 9 xxxx-xxxx"
              variant="outlined"
              fullWidth
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="whatsapp-label">WhatsApp</InputLabel>
              <Select
                labelId="whatsapp-label"
                value={whatsapp}
                onChange={(event) => setWhatsApp(event.target.value)}
                label="WhatsApp"
              >
                <MenuItem value="Sim">Sim</MenuItem>
                <MenuItem value="Não">Não</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="CPF"
              variant="outlined"
              fullWidth
              value={cpf}
              onChange={(event) => setCPF(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Nome do Pai"
              variant="outlined"
              fullWidth
              value={nomePai}
              onChange={(event) => setNomePai(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Nome da Mãe"
              variant="outlined"
              fullWidth
              value={nomeMae}
              onChange={(event) => setNomeMae(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Cadastro;
