import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#92eea3', color: '#151414' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            UniSus
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleMenuItemClick}>
            <Typography variant="h6" sx={{ p: 2 }}>
              Home
            </Typography>
          </Link>
          <Link to="/cadastro" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleMenuItemClick}>
            <Typography variant="h6" sx={{ p: 2 }}>
              Cadastro Paciente
            </Typography>
          </Link>
          <Link to="/CadastroMedico" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleMenuItemClick}>
            <Typography variant="h6" sx={{ p: 2 }}>
              Cadastro Médicos
            </Typography>
          </Link>
          <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleMenuItemClick}>
            <Typography variant="h6" sx={{ p: 2 }}>
              Usuários Cadastrados
            </Typography>
          </Link>
          <Link to="/medicosCadastrados" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleMenuItemClick}>
            <Typography variant="h6" sx={{ p: 2 }}>
              Médicos Cadastrados
            </Typography>
          </Link>
        </Box>
      </Drawer>
    </Box>
  );
}
