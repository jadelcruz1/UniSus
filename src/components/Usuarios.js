import React, { useState } from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, TablePagination, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Usuarios = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [data, setData] = useState([
    { id: 1, name: 'João', age: 30, city: 'São Paulo', phone: '(11) 91234-5678', isWhatsApp: 'Sim', father: 'José Silva', mother: 'Maria Silva', cpf: '123.456.789-00' },
    { id: 2, name: 'Maria', age: 25, city: 'Rio de Janeiro', phone: '(21) 98765-4321', isWhatsApp: 'Não', father: 'Carlos Oliveira', mother: 'Ana Oliveira', cpf: '234.567.890-00' },
    { id: 3, name: 'José', age: 35, city: 'Belo Horizonte', phone: '(31) 99876-5432', isWhatsApp: 'Sim', father: 'Antônio Pereira', mother: 'Aline Pereira', cpf: '345.678.901-00' },
    { id: 4, name: 'Ana', age: 28, city: 'Salvador', phone: '(71) 93333-4444', isWhatsApp: 'Sim', father: 'Marcos Santos', mother: 'Carla Santos', cpf: '456.789.012-00' },
    { id: 5, name: 'Pedro', age: 33, city: 'Fortaleza', phone: '(85) 95555-6666', isWhatsApp: 'Não', father: 'Fernando Lima', mother: 'Patrícia Lima', cpf: '567.890.123-00' },
    { id: 6, name: 'Mariana', age: 27, city: 'Recife', phone: '(81) 97777-8888', isWhatsApp: 'Sim', father: 'Rafael Costa', mother: 'Fernanda Costa', cpf: '678.901.234-00' },
    { id: 7, name: 'Lucas', age: 29, city: 'Curitiba', phone: '(41) 94444-3333', isWhatsApp: 'Não', father: 'Rodrigo Almeida', mother: 'Cristina Almeida', cpf: '789.012.345-00' },
    { id: 8, name: 'Carla', age: 32, city: 'Porto Alegre', phone: '(51) 93333-2222', isWhatsApp: 'Sim', father: 'Gustavo Pereira', mother: 'Juliana Pereira', cpf: '890.123.456-00' },
    { id: 9, name: 'Gabriel', age: 31, city: 'Brasília', phone: '(61) 92222-1111', isWhatsApp: 'Não', father: 'André Costa', mother: 'Isabela Costa', cpf: '901.234.567-00' },
    { id: 10, name: 'Juliana', age: 26, city: 'Goiânia', phone: '(62) 91111-9999', isWhatsApp: 'Sim', father: 'Leonardo Oliveira', mother: 'Mariana Oliveira', cpf: '012.345.678-00' },
    { id: 11, name: 'Fernando', age: 34, city: 'Manaus', phone: '(92) 93333-7777', isWhatsApp: 'Sim', father: 'Marcelo Santos', mother: 'Amanda Santos', cpf: '123.456.789-00' },
    { id: 12, name: 'Amanda', age: 29, city: 'Belém', phone: '(91) 92222-5555', isWhatsApp: 'Não', father: 'Ricardo Lima', mother: 'Laura Lima', cpf: '234.567.890-00' },
    { id: 13, name: 'Rafael', age: 27, city: 'Maceió', phone: '(82) 94444-2222', isWhatsApp: 'Sim', father: 'Lucas Almeida', mother: 'Camila Almeida', cpf: '345.678.901-00' },
    { id: 14, name: 'Camila', age: 30, city: 'Vitória', phone: '(27) 95555-8888', isWhatsApp: 'Sim', father: 'Daniel Silva', mother: 'Fátima Silva', cpf: '456.789.012-00' },
    { id: 15, name: 'Diego', age: 33, city: 'Natal', phone: '(84) 96666-7777', isWhatsApp: 'Não', father: 'José Oliveira', mother: 'Adriana Oliveira', cpf: '567.890.123-00' },
    { id: 16, name: 'Larissa', age: 28, city: 'Teresina', phone: '(86) 92222-4444', isWhatsApp: 'Sim', father: 'Antônio Costa', mother: 'Daniela Costa', cpf: '678.901.234-00' },
    { id: 17, name: 'Marcos', age: 31, city: 'João Pessoa', phone: '(83) 93333-5555', isWhatsApp: 'Não', father: 'Gustavo Santos', mother: 'Renata Santos', cpf: '789.012.345-00' },
    { id: 18, name: 'Isabela', age: 26, city: 'Aracaju', phone: '(79) 91111-2222', isWhatsApp: 'Sim', father: 'Carlos Pereira', mother: 'Márcia Pereira', cpf: '890.123.456-00' },
    { id: 19, name: 'Bruno', age: 32, city: 'Cuiabá', phone: '(65) 94444-3333', isWhatsApp: 'Sim', father: 'Rafael Oliveira', mother: 'Nathalia Oliveira', cpf: '901.234.567-00' },
    { id: 20, name: 'Vanessa', age: 29, city: 'Campo Grande', phone: '(67) 93333-4444', isWhatsApp: 'Não', father: 'Pedro Costa', mother: 'Tatiane Costa', cpf: '012.345.678-00' },
    { id: 21, name: 'Felipe', age: 35, city: 'Boa Vista', phone: '(95) 91111-5555', isWhatsApp: 'Sim', father: 'José Silva', mother: 'Mariana Silva', cpf: '123.456.789-00' },
    { id: 22, name: 'Tatiane', age: 27, city: 'Palmas', phone: '(63) 92222-6666', isWhatsApp: 'Sim', father: 'Alexandre Lima', mother: 'Carolina Lima', cpf: '234.567.890-00' },
    { id: 23, name: 'Alexandre', age: 30, city: 'Macapá', phone: '(96) 93333-7777', isWhatsApp: 'Não', father: 'Fernando Oliveira', mother: 'Patricia Oliveira', cpf: '345.678.901-00' },
    { id: 24, name: 'Patrícia', age: 28, city: 'Rio Branco', phone: '(68) 91111-8888', isWhatsApp: 'Sim', father: 'Carlos Silva', mother: 'Vanessa Silva', cpf: '456.789.012-00' },
    { id: 25, name: 'Rodrigo', age: 34, city: 'Porto Velho', phone: '(69) 94444-9999', isWhatsApp: 'Não', father: 'Gustavo Costa', mother: 'Renata Costa', cpf: '567.890.123-00' },
    { id: 26, name: 'Nathalia', age: 31, city: 'Florianópolis', phone: '(48) 95555-2222', isWhatsApp: 'Sim', father: 'José Oliveira', mother: 'Fernanda Oliveira', cpf: '678.901.234-00' },
    { id: 27, name: 'Vinícius', age: 29, city: 'São Luís', phone: '(98) 93333-3333', isWhatsApp: 'Sim', father: 'Rafael Almeida', mother: 'Gabriela Almeida', cpf: '789.012.345-00' },
    { id: 28, name: 'Laura', age: 26, city: 'Maringá', phone: '(44) 92222-4444', isWhatsApp: 'Não', father: 'Carlos Silva', mother: 'Mariana Silva', cpf: '890.123.456-00' },
    { id: 29, name: 'Carlos', age: 32, city: 'Blumenau', phone: '(47) 91111-5555', isWhatsApp: 'Sim', father: 'Ricardo Oliveira', mother: 'Carolina Oliveira', cpf: '901.234.567-00' },
    { id: 30, name: 'Beatriz', age: 33, city: 'Chapecó', phone: '(49) 94444-6666', isWhatsApp: 'Sim', father: 'Fernando Silva', mother: 'Amanda Silva', cpf: '012.345.678-00' },
    { id: 31, name: 'Gustavo', age: 28, city: 'Joinville', phone: '(47) 93333-7777', isWhatsApp: 'Não', father: 'Rodrigo Costa', mother: 'Patrícia Costa', cpf: '123.456.789-00' },
    { id: 32, name: 'Thais', age: 30, city: 'Uberlândia', phone: '(34) 91111-8888', isWhatsApp: 'Sim', father: 'André Oliveira', mother: 'Laura Oliveira', cpf: '234.567.890-00' },
    { id: 33, name: 'Renato', age: 29, city: 'Juiz de Fora', phone: '(32) 92222-9999', isWhatsApp: 'Sim', father: 'Fábio Silva', mother: 'Camila Silva', cpf: '345.678.901-00' },
    { id: 34, name: 'Mariano', age: 35, city: 'Sorocaba', phone: '(15) 93333-2222', isWhatsApp: 'Não', father: 'Rodrigo Costa', mother: 'Patrícia Costa', cpf: '456.789.012-00' },
    { id: 35, name: 'Fabiana', age: 27, city: 'Ribeirão Preto', phone: '(16) 91111-3333', isWhatsApp: 'Sim', father: 'Fernando Oliveira', mother: 'Tatiane Oliveira', cpf: '567.890.123-00' },
    { id: 36, name: 'Marcelo', age: 31, city: 'Piracicaba', phone: '(19) 94444-4444', isWhatsApp: 'Sim', father: 'André Costa', mother: 'Gabriela Costa', cpf: '678.901.234-00' },
    { id: 37, name: 'Aline', age: 26, city: 'Campinas', phone: '(19) 93333-5555', isWhatsApp: 'Não', father: 'Leonardo Lima', mother: 'Fernanda Lima', cpf: '789.012.345-00' },
    { id: 38, name: 'Paulo', age: 33, city: 'Bauru', phone: '(14) 91111-6666', isWhatsApp: 'Sim', father: 'Alexandre Pereira', mother: 'Isabela Pereira', cpf: '890.123.456-00' },
    { id: 39, name: 'Fernanda', age: 30, city: 'Presidente Prudente', phone: '(18) 94444-7777', isWhatsApp: 'Sim', father: 'Fábio Silva', mother: 'Juliana Silva', cpf: '901.234.567-00' },
    { id: 40, name: 'Roberto', age: 29, city: 'Santos', phone: '(13) 93333-8888', isWhatsApp: 'Não', father: 'Antônio Costa', mother: 'Aline Costa', cpf: '012.345.678-00' },
    { id: 41, name: 'Cristina', age: 32, city: 'São José do Rio Preto', phone: '(17) 91111-9999', isWhatsApp: 'Sim', father: 'Leonardo Oliveira', mother: 'Mariana Oliveira', cpf: '123.456.789-00' },
    { id: 42, name: 'Luiz', age: 34, city: 'São Carlos', phone: '(16) 92222-1111', isWhatsApp: 'Sim', father: 'José Silva', mother: 'Fernanda Silva', cpf: '234.567.890-00' },
    { id: 43, name: 'Patricia', age: 28, city: 'Franca', phone: '(16) 94444-2222', isWhatsApp: 'Não', father: 'Carlos Oliveira', mother: 'Ana Oliveira', cpf: '345.678.901-00' },
    { id: 44, name: 'Ricardo', age: 31, city: 'São Bernardo do Campo', phone: '(11) 93333-3333', isWhatsApp: 'Sim', father: 'Fábio Silva', mother: 'Juliana Silva', cpf: '456.789.012-00' },
    { id: 45, name: 'André', age: 30, city: 'São José dos Campos', phone: '(12) 91111-4444', isWhatsApp: 'Sim', father: 'Antônio Lima', mother: 'Márcia Lima', cpf: '567.890.123-00' },
    { id: 46, name: 'Amanda', age: 27, city: 'Santo André', phone: '(11) 92222-5555', isWhatsApp: 'Não', father: 'Gustavo Costa', mother: 'Renata Costa', cpf: '678.901.234-00' },
    { id: 47, name: 'Jorge', age: 33, city: 'Ribeirão das Neves', phone: '(31) 93333-6666', isWhatsApp: 'Sim', father: 'Carlos Oliveira', mother: 'Fernanda Oliveira', cpf: '789.012.345-00' },
    { id: 48, name: 'Fábio', age: 29, city: 'Contagem', phone: '(31) 91111-7777', isWhatsApp: 'Sim', father: 'André Silva', mother: 'Laura Silva', cpf: '890.123.456-00' },
    { id: 49, name: 'Márcia', age: 32, city: 'Uberaba', phone: '(34) 92222-8888', isWhatsApp: 'Não', father: 'Gustavo Oliveira', mother: 'Mariana Oliveira', cpf: '901.234.567-00' },
    { id: 50, name: 'Roberta', age: 35, city: 'Sete Lagoas', phone: '(31) 93333-9999', isWhatsApp: 'Sim', father: 'Carlos Silva', mother: 'Ana Silva', cpf: '012.345.678-00' }
  ]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelectedRows = data.map((row) => row.id);
      setSelectedRows(newSelectedRows);
      setSelectAll(true);
    } else {
      setSelectedRows([]);
      setSelectAll(false);
    }
  };

  const handleCheckboxClick = (event, id) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelectedRows = [];

    if (selectedIndex === -1) {
      newSelectedRows = newSelectedRows.concat(selectedRows, id);
    } else if (selectedIndex === 0) {
      newSelectedRows = newSelectedRows.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelectedRows = newSelectedRows.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedRows = newSelectedRows.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }

    setSelectedRows(newSelectedRows);
    setSelectAll(newSelectedRows.length === data.length);
  };

  const isSelected = (id) => selectedRows.indexOf(id) !== -1;

  const handleDeleteSelected = () => {
   
    const newData = data.filter((row) => !selectedRows.includes(row.id));
   
    setData(newData);    
   
    setSelectedRows([]);
  };  

  return (
    <Grid container spacing={2}  justifyContent="center" alignItems="center" height="100vh"  marginLeft={3}>
      <Grid item xs={25}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={selectAll && selectedRows.length < data.length}
                    checked={selectAll}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
                <TableCell>
                  {selectedRows.length > 0 && (
                    <React.Fragment>
                      {selectedRows.length} selecionado{selectedRows.length > 1 ? 's' : ''} {selectedRows.length > 1 ? '' : ''}
                      <Tooltip title="Excluir selecionados">
                        <IconButton onClick={handleDeleteSelected}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </React.Fragment>
                  )}
                </TableCell>                
                <TableCell>Nome</TableCell>
                <TableCell>Idade</TableCell>
                <TableCell>Cidade</TableCell>
                <TableCell>Telefone</TableCell>
                <TableCell>WhatsApp</TableCell>
                <TableCell>CPF</TableCell>
                <TableCell>Nome do pai</TableCell>
                <TableCell>Nome da mãe</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : data
              ).map((row) => {
                const isRowSelected = isSelected(row.id);
                return (
                  <TableRow key={row.id} selected={isRowSelected}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isRowSelected}
                        onClick={(event) => handleCheckboxClick(event, row.id)}
                      />
                    </TableCell>
                    <TableCell />                   
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.age}</TableCell>
                    <TableCell>{row.city}</TableCell>
                    <TableCell>{row.phone}</TableCell>                    
                    <TableCell>{row.isWhatsApp}</TableCell>
                    <TableCell>{row.cpf}</TableCell>
                    <TableCell>{row.father}</TableCell>
                    <TableCell>{row.mother}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default Usuarios;