import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';

const CadastroMedico = ({ onSubmit }) => {
  const [nome, setNome] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [crm, setCRM] = useState('');
  const [estadoCRM, setEstadoCRM] = useState('');
  const [contato, setContato] = useState('');
  const [cpf, setCPF] = useState('');
  const [descricao, setDescricao] = useState('');
  const [foto, setFoto] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoCadastro = {
      nome,
      especialidade,
      crm,
      estadoCRM,
      contato,
      cpf,
      descricao,
      foto,
    };
    onSubmit(novoCadastro);
    // Limpar os campos após o envio
    setNome('');
    setEspecialidade('');
    setCRM('');
    setEstadoCRM('');
    setContato('');
    setCPF('');
    setDescricao('');
    setFoto('');
  };

  const handleCadastroMedico = () => {
    const novoCadastro = {
      nome,
      especialidade,
      crm,
      estadoCRM,
      contato,
      cpf,
      descricao,
      foto,
    };
    onSubmit(novoCadastro);
    // Limpar os campos após o envio
    
    setNome('');
    setEspecialidade('');
    setCRM('');
    setEstadoCRM('');
    setContato('');
    setCPF('');
    setDescricao('');
    setFoto('');
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Cadastro de Médico
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Especialidade"
              variant="outlined"
              fullWidth
              value={especialidade}
              onChange={(event) => setEspecialidade(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="CRM"
              variant="outlined"
              fullWidth
              value={crm}
              onChange={(event) => setCRM(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Estado do CRM"
              variant="outlined"
              fullWidth
              value={estadoCRM}
              onChange={(event) => setEstadoCRM(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Telefone"
              variant="outlined"
              fullWidth
              value={contato}
              onChange={(event) => setContato(event.target.value)}
            />
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
          <Grid item xs={12}>
            <TextField
              label="Descrição"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Foto"
              variant="outlined"
              fullWidth
              value={foto}
              onChange={(event) => setFoto(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              type="button"
              onClick={handleCadastroMedico}
              style={{ backgroundColor: '#92eea3', color: '#151414' }}
            >
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CadastroMedico;
