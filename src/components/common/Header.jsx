import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.PNG';
import avatar from '../../assets/1.jpg';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from "@material-ui/core/Badge";
import DropDownSelect from './DropDown';

const StyledBadge = withStyles(theme => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  border-bottom: 1px solid black;
  margin-top: 15px;

  p {
    font-size: 20px;
    text-align: center;
    line-height: 10px;
    letter-spacing: 5px;
    font-weight: 500;
  }

  .MuiFormLabel-root.Mui-focused {
    color: #00945F;
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid #00945F;
  }
  span {
    vertical-align: middle;
    color: green;
  }

  .logged-in-user {
    margin-top: 22px;
    font-weight: 500;
    font-size: 20px;
    color: black;
    margin-left: -3px;
  }
`;

const languageOption = ['EN', 'US', 'JPN', 'ARB'];
const MainHeader = () => {
  const classes = useStyles();
  const path = window.location.pathname;
  return (
    <Wrapper>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <p>ENTERPRISE</p>
        <p>COMMUNICATIONS</p>
        <p>PLATFORM</p>
      </div>
      {(path === '/signup' || path === '/tabs' || path === '/main' || path === '/') && 
      <div>
        <div className={classes.root}>

          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src={avatar} className={classes.large} />
          </StyledBadge>
          <span className="logged-in-user">Hani</span>
        </div>
      </div>}
      {
        path === '/home' && <DropDownSelect options={languageOption} />
      }
    </Wrapper>
  );
};
export default MainHeader;
