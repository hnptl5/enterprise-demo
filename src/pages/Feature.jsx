import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import {List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';
import {InboxIcon, DraftsIcon, Send, AppsSharp, FormatListNumbered, PermIdentity} from '@material-ui/icons';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import {Box, Button, Menu, MenuItem} from '@material-ui/core';
import { Card, ListGroup, Row, Col, Form, ProgressBar, Image} from 'react-bootstrap';

const columns = [
  { id: 'name', label: 'Feature', minWidth: 100 },
  { id: 'code', label: 'Template', minWidth: 170 },
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
  createData('Sample', 'Sample', "Incomplete"),
  createData('Sample', 'Sample', "Incomplete")
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

export default function Feature() {
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
            <PermIdentity />
          </ListItemIcon>
          <ListItemText > <b>App</b>: Zoosk </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BusinessCenterIcon />
          </ListItemIcon>
          {/* <ListItemText > <b>Use Case</b>: Use Case</ListItemText> */}
          <ListItemText > <b>Feature</b>: Sample</ListItemText>
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
            <AppsSharp fontSize="small" />
          </ListItemIcon>
          <ListItemText> <a href= "/main" style={{color:"#000000"}}> Main Menu </a> </ListItemText>
        </StyledMenuItem>

      <StyledMenuItem>
          <ListItemIcon>
            <FormatListNumbered fontSize="small" />
          </ListItemIcon>
          <ListItemText> <a href= "/case" style={{color:"#000000"}}> USE Cases </a> </ListItemText>
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <Send fontSize="small" />
          </ListItemIcon>
          <ListItemText> <a href= "/newfeature" style={{color:"#000000"}}> Create Feature </a> </ListItemText>
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
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    </>
  );
}