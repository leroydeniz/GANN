import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function FileTestSpecs() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Condiciones del CSV
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText primary="Archivo en formato CSV u ONNX" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Separado por coma -> ," />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Mínimo 6 registros"  secondary="Sólo CSV Train" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Máximo 100k registros" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Tamaño máximo 20MB" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="La última columna es variable de clase"  secondary="Ambos CSV"/>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}