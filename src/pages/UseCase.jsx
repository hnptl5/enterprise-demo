import React from 'react';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import {Box, Button} from '@material-ui/core';
import { Card, ListGroup, Row, Col, Form, ProgressBar, Image} from 'react-bootstrap';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SendIcon from '@material-ui/icons/Send';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';



const columns = [
  { id: 'name', label: 'USE Case', minWidth: 170 },
  { id: 'code', label: 'Feature', minWidth: 100 },
  {
    id: 'population',
    label: 'Status',
    minWidth: 100,
    align: 'right',
    format: value => value.toLocaleString(),
  }
];

function createData(name, code, population, size) {
  return { name, code, population, size };
}

const rows = [
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
  createData('USE Case', 'Sample', "Incomplete"),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
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

const StyledMenuItem = withStyles(theme => ({
    
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);









export default function UseCase() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (

            <>

        <Row>
            <Col sm={5}>
            <List component="nav" aria-label="main mailbox folders" className="mb-3">
        <ListItem button>
          <ListItemIcon>
            <PermIdentityIcon />
          </ListItemIcon>
          <ListItemText > <b>App</b>: Zoosk </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BusinessCenterIcon />
          </ListItemIcon>
          <ListItemText > <b>Use Case</b>: Use Case</ListItemText>
        </ListItem>
      </List>
      </Col>

      <Col sm={7} className="mt-5 text-right">
        <Box>
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
         >
            Menu
        </Button>
        <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
         >
        <StyledMenuItem>
          <ListItemIcon>
            <AppsSharpIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText> <a href= "/main" style={{color:"#000000"}}> Main Menu </a> </ListItemText>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText> <a href= "/newcase" style={{color:"#000000"}}> Create USE Case </a> </ListItemText>
        </StyledMenuItem>
      </StyledMenu>
    </Box>
  </Col>
</Row>

    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <a href="/feature" style={{color:"#000000"}}>{column.format && typeof value === 'number' ? column.format(value) : value}</a>
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        className="mb-5"
      />
    </Paper>

 </>
  );
}
