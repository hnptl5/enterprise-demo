import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ThumbsUpDownRoundedIcon from '@material-ui/icons/ThumbsUpDownRounded';
import GavelRoundedIcon from '@material-ui/icons/GavelRounded';
import ComputerRoundedIcon from '@material-ui/icons/ComputerRounded';
import SwipeableViews from 'react-swipeable-views';
import styled from 'styled-components';
import OnBoarding from '../Onboarding';
import Home from '../Home';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500
  },

  text: {
    fontWeight: 500,
    fontSize: 20
  }
})

const Wrapper = styled.div`
.MuiTab-textColorPrimary.Mui-selected {
  color: green;
}
.PrivateTabIndicator-colorPrimary-67{
  background-color: green !important;
  outline:none;
}
 .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.MuiTab-labelIcon.MuiTab-fullWidth{
   outline: none;
   border: none;
 }
 .PrivateTabIndicator-root-90.PrivateTabIndicator-colorPrimary-91.MuiTabs-indicator{
   border-color: green;
 }
 .PrivateTabIndicator-colorPrimary-91{
  background-color: green;
 }
`;

export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Wrapper>
      <Paper>
        <Tabs onChange={handleChange}
          value={value}
          className={classes.text}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon label tabs example">
          <Tab icon={<HomeRoundedIcon />} label="Home" value={0} />
          <Tab icon={<ThumbsUpDownRoundedIcon />} label="Onboarding" value={1} />
          <Tab icon={<GavelRoundedIcon />} label="Rules" value={2} />
          <Tab icon={<ComputerRoundedIcon />} label="Colleague Dashboard" value={3} className={classes.tabStyle}/>
        </Tabs>
        <SwipeableViews index={value} onChangeIndex={handleChange}>
          <div><Home /></div>
          <div><OnBoarding /></div>
          <div>Rules Component</div>
          <div>Dashboard Colleague Component</div>
          </SwipeableViews>
      </Paper>
      </Wrapper>
  )
}