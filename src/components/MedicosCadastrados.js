import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, Checkbox, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
    
    const MedicosCadastrados = () => {
        const [medicos, setMedicos] = useState([
            { id: 1, nome: 'Dr. João Silva', especialidade: 'Cardiologia', crm: '12345', estadoCRM: 'SP', contato: '(11) 91234-5678', cpf: '123.456.789-00', descricao: 'Médico cardiologista com experiência em tratamento de doenças cardíacas.', foto: 'imagem1.jpg', selected: false },
            { id: 2, nome: 'Dra. Maria Oliveira', especialidade: 'Pediatria', crm: '23456', estadoCRM: 'RJ', contato: '(21) 98765-4321', cpf: '234.567.890-00', descricao: 'Médica pediatra dedicada ao cuidado de crianças e adolescentes.', foto: 'imagem2.jpg', selected: false },
            { id: 3, nome: 'Dr. José Santos', especialidade: 'Ortopedia', crm: '34567', estadoCRM: 'MG', contato: '(31) 99876-5432', cpf: '345.678.901-00', descricao: 'Ortopedista com ampla experiência em cirurgias de joelho e quadril.', foto: 'imagem3.jpg', selected: false },
            { id: 4, nome: 'Dra. Ana Lima', especialidade: 'Ginecologia', crm: '45678', estadoCRM: 'BA', contato: '(71) 93333-4444', cpf: '456.789.012-00', descricao: 'Ginecologista com foco em saúde da mulher e obstetrícia.', foto: 'imagem4.jpg', selected: false },
            { id: 5, nome: 'Dr. Pedro Costa', especialidade: 'Dermatologia', crm: '56789', estadoCRM: 'CE', contato: '(85) 95555-6666', cpf: '567.890.123-00', descricao: 'Dermatologista especializado em tratamento de doenças da pele e estética.', foto: 'imagem5.jpg', selected: false },
            { id: 6, nome: 'Dra. Juliana Oliveira', especialidade: 'Neurologia', crm: '67890', estadoCRM: 'PR', contato: '(41) 94444-5555', cpf: '678.901.234-00', descricao: 'Neurologista com foco em doenças do sistema nervoso.', foto: 'imagem6.jpg', selected: false },
            { id: 7, nome: 'Dr. Marcelo Fernandes', especialidade: 'Oftalmologia', crm: '78901', estadoCRM: 'RS', contato: '(51) 92222-3333', cpf: '789.012.345-00', descricao: 'Oftalmologista especializado em saúde ocular.', foto: 'imagem7.jpg', selected: false },
            { id: 8, nome: 'Dra. Luciana Rocha', especialidade: 'Endocrinologia', crm: '89012', estadoCRM: 'SC', contato: '(48) 91111-2222', cpf: '890.123.456-00', descricao: 'Endocrinologista com experiência em distúrbios hormonais.', foto: 'imagem8.jpg', selected: false },
            { id: 9, nome: 'Dr. Ricardo Almeida', especialidade: 'Urologia', crm: '90123', estadoCRM: 'ES', contato: '(27) 98888-9999', cpf: '901.234.567-00', descricao: 'Urologista com foco em saúde do sistema urinário masculino.', foto: 'imagem9.jpg', selected: false },
            { id: 10, nome: 'Dra. Carla Santos', especialidade: 'Psiquiatria', crm: '01234', estadoCRM: 'GO', contato: '(62) 97777-8888', cpf: '012.345.678-00', descricao: 'Psiquiatra especializada em saúde mental e transtornos psiquiátricos.', foto: 'imagem10.jpg', selected: false },
            { id: 11, nome: 'Dr. André Mendonça', especialidade: 'Cirurgia Geral', crm: '12346', estadoCRM: 'SP', contato: '(11) 98888-7777', cpf: '111.222.333-44', descricao: 'Cirurgião geral com ampla experiência em procedimentos cirúrgicos.', foto: 'imagem11.jpg', selected: false },
            { id: 12, nome: 'Dra. Fernanda Costa', especialidade: 'Dermatologia', crm: '23457', estadoCRM: 'RJ', contato: '(21) 95555-6666', cpf: '222.333.444-55', descricao: 'Dermatologista especializada em tratamentos estéticos.', foto: 'imagem12.jpg', selected: false },
            { id: 13, nome: 'Dr. Luiz Oliveira', especialidade: 'Pediatria', crm: '34568', estadoCRM: 'MG', contato: '(31) 94444-3333', cpf: '333.444.555-66', descricao: 'Pediatra com foco no cuidado de recém-nascidos.', foto: 'imagem13.jpg', selected: false },
            { id: 14, nome: 'Dra. Amanda Fernandes', especialidade: 'Ginecologia', crm: '45679', estadoCRM: 'BA', contato: '(71) 93333-2222', cpf: '444.555.666-77', descricao: 'Ginecologista especializada em saúde feminina.', foto: 'imagem14.jpg', selected: false },
            { id: 15, nome: 'Dr. Rodrigo Santos', especialidade: 'Ortopedia', crm: '56780', estadoCRM: 'CE', contato: '(85) 97777-8888', cpf: '555.666.777-88', descricao: 'Ortopedista com experiência em cirurgias de joelho.', foto: 'imagem15.jpg', selected: false },
            { id: 16, nome: 'Dra. Camila Lima', especialidade: 'Cardiologia', crm: '67891', estadoCRM: 'PR', contato: '(41) 95555-4444', cpf: '666.777.888-99', descricao: 'Cardiologista especializada em tratamento de doenças do coração.', foto: 'imagem16.jpg', selected: false },
            { id: 17, nome: 'Dr. Bruno Oliveira', especialidade: 'Neurologia', crm: '78902', estadoCRM: 'RS', contato: '(51) 94444-1111', cpf: '777.888.999-00', descricao: 'Neurologista com foco em doenças neurológicas.', foto: 'imagem17.jpg', selected: false },
            { id: 18, nome: 'Dra. Gabriela Silva', especialidade: 'Endocrinologia', crm: '89013', estadoCRM: 'SC', contato: '(48) 92222-0000', cpf: '888.999.000-11', descricao: 'Endocrinologista especializada em distúrbios hormonais.', foto: 'imagem18.jpg', selected: false },
            { id: 19, nome: 'Dr. Victor Mendes', especialidade: 'Urologia', crm: '90124', estadoCRM: 'ES', contato: '(27) 94444-9999', cpf: '999.000.111-22', descricao: 'Urologista com foco em saúde masculina.', foto: 'imagem19.jpg', selected: false },
            { id: 20, nome: 'Dra. Paula Costa', especialidade: 'Psiquiatria', crm: '01235', estadoCRM: 'GO', contato: '(62) 98888-1111', cpf: '000.111.222-33', descricao: 'Psiquiatra especializada em transtornos mentais.', foto: 'imagem20.jpg', selected: false },
            { id: 21, nome: 'Dr. Roberto Alves', especialidade: 'Cirurgia Geral', crm: '12347', estadoCRM: 'SP', contato: '(11) 92222-5555', cpf: '111.222.333-44', descricao: 'Cirurgião geral com vasta experiência em procedimentos cirúrgicos.', foto: 'imagem21.jpg', selected: false },
            { id: 22, nome: 'Dra. Patricia Pereira', especialidade: 'Dermatologia', crm: '23458', estadoCRM: 'RJ', contato: '(21) 97777-2222', cpf: '222.333.444-55', descricao: 'Dermatologista especializada em tratamentos de pele.', foto: 'imagem22.jpg', selected: false },
            { id: 23, nome: 'Dr. Carlos Oliveira', especialidade: 'Pediatria', crm: '34569', estadoCRM: 'MG', contato: '(31) 98888-7777', cpf: '333.444.555-66', descricao: 'Pediatra dedicado ao cuidado de crianças.', foto: 'imagem23.jpg', selected: false },
            { id: 24, nome: 'Dra. Marina Fernandes', especialidade: 'Ginecologia', crm: '45680', estadoCRM: 'BA', contato: '(71) 92222-1111', cpf: '444.555.666-77', descricao: 'Ginecologista com foco em saúde reprodutiva.', foto: 'imagem24.jpg', selected: false },
            { id: 25, nome: 'Dr. Eduardo Santos', especialidade: 'Ortopedia', crm: '56781', estadoCRM: 'CE', contato: '(85) 98888-5555', cpf: '555.666.777-88', descricao: 'Ortopedista especializado em tratamento de lesões ósseas.', foto: 'imagem25.jpg', selected: false },
            { id: 26, nome: 'Dra. Laura Lima', especialidade: 'Cardiologia', crm: '67892', estadoCRM: 'PR', contato: '(41) 97777-4444', cpf: '666.777.888-99', descricao: 'Cardiologista com experiência em tratamento de doenças cardíacas.', foto: 'imagem26.jpg', selected: false },
            { id: 27, nome: 'Dr. Guilherme Oliveira', especialidade: 'Neurologia', crm: '78903', estadoCRM: 'RS', contato: '(51) 92222-8888', cpf: '777.888.999-00', descricao: 'Neurologista especializado em diagnóstico e tratamento de doenças neurológicas.', foto: 'imagem27.jpg', selected: false },
            { id: 28, nome: 'Dra. Fernanda Silva', especialidade: 'Endocrinologia', crm: '89014', estadoCRM: 'SC', contato: '(48) 94444-1111', cpf: '888.999.000-11', descricao: 'Endocrinologista com enfoque em distúrbios hormonais.', foto: 'imagem28.jpg', selected: false },
            { id: 29, nome: 'Dr. Gustavo Mendes', especialidade: 'Urologia', crm: '90125', estadoCRM: 'ES', contato: '(27) 97777-9999', cpf: '999.000.111-22', descricao: 'Urologista com experiência em tratamento de doenças urológicas.', foto: 'imagem29.jpg', selected: false },
            { id: 30, nome: 'Dra. Carolina Costa', especialidade: 'Psiquiatria', crm: '01236', estadoCRM: 'GO', contato: '(62) 92222-1111', cpf: '000.111.222-33', descricao: 'Psiquiatra dedicada ao tratamento de transtornos mentais.', foto: 'imagem30.jpg', selected: false },
        // Seus dados de médicos
      ]);
    
      const [selectedCount, setSelectedCount] = useState(0);
    
      const [sortBy, setSortBy] = useState('');
      const [sortOrder, setSortOrder] = useState('asc');
    
      const handleSort = (column) => {
        const isAsc = sortBy === column && sortOrder === 'asc';
        setSortBy(column);
        setSortOrder(isAsc ? 'desc' : 'asc');
      };
    
      const handleCheckboxChange = (id) => {
        setMedicos((prevMedicos) =>
          prevMedicos.map((medico) => {
            if (medico.id === id) {
              medico.selected = !medico.selected;
            }
            return medico;
          })
        );
        setSelectedCount((prevCount) => prevCount + (medicos.find((medico) => medico.id === id).selected ? -1 : 1));
      };
    
      const handleDeleteSelected = () => {
        setMedicos((prevMedicos) => prevMedicos.filter((medico) => !medico.selected));
        setSelectedCount(0);
      };
    
      const sortedMedicos = [...medicos].sort((a, b) => {
        if (sortBy === 'id') {
          return sortOrder === 'asc' ? a.id - b.id : b.id - a.id;
        } else if (sortBy === 'nome') {
          return sortOrder === 'asc' ? a.nome.localeCompare(b.nome) : b.nome.localeCompare(a.nome);
        } else if (sortBy === 'especialidade') {
          return sortOrder === 'asc' ? a.especialidade.localeCompare(b.especialidade) : b.especialidade.localeCompare(a.especialidade);
        } else if (sortBy === 'crm') {
          return sortOrder === 'asc' ? a.crm.localeCompare(b.crm) : b.crm.localeCompare(a.crm);
        } else if (sortBy === 'estadoCRM') {
          return sortOrder === 'asc' ? a.estadoCRM.localeCompare(b.estadoCRM) : b.estadoCRM.localeCompare(a.estadoCRM);
        } else {
          return 0;
        }
      });
    
      return (
        <div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox
                      checked={selectedCount === medicos.length}
                      indeterminate={selectedCount > 0 && selectedCount < medicos.length}
                      onChange={() => {
                        if (selectedCount === medicos.length) {
                          setMedicos((prevMedicos) => prevMedicos.map((medico) => ({ ...medico, selected: false })));
                          setSelectedCount(0);
                        } else {
                          setMedicos((prevMedicos) => prevMedicos.map((medico) => ({ ...medico, selected: true })));
                          setSelectedCount(medicos.length);
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Especialidade</TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={sortBy === 'crm'}
                      direction={sortOrder}
                      onClick={() => handleSort('crm')}
                    >
                      CRM
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={sortBy === 'estadoCRM'}
                      direction={sortOrder}
                      onClick={() => handleSort('estadoCRM')}
                    >
                      Estado do CRM
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>Contato</TableCell>
                  <TableCell>CPF</TableCell>
                  <TableCell>Descrição</TableCell>
                  <TableCell>Foto</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedMedicos.map((medico, index) => (
                  <TableRow key={medico.id}>
                    <TableCell>
                      <Checkbox
                        checked={medico.selected}
                        onChange={() => handleCheckboxChange(medico.id)}
                      />
                    </TableCell>
                    <TableCell>{medico.id}</TableCell>
                    <TableCell>{medico.nome}</TableCell>
                    <TableCell>{medico.especialidade}</TableCell>
                    <TableCell>{medico.crm}</TableCell>
                    <TableCell>{medico.estadoCRM}</TableCell>
                    <TableCell>{medico.contato}</TableCell>
                    <TableCell>{medico.cpf}</TableCell>
                    <TableCell>{medico.descricao}</TableCell>
                    <TableCell>{medico.foto}</TableCell>
                    {index === 0 ? (
                      <TableCell>
                        <Tooltip title={`Excluir ${selectedCount} medicos selecionados`}>
                          <IconButton onClick={handleDeleteSelected}>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    ) : (
                      <TableCell />
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      );
    };
    
 export default MedicosCadastrados;
    
    
  