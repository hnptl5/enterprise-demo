import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

const checkBoxStyles = theme => ({
    root: {
      '&:hover':{
        backgroundColor: 'transparent'
      },
        color: green[400],
      '&$checked': {
        color: green[600],
        backgroundColor: 'transparent'
      },
      margin: '25px',
      transform:' scale(4)',
      
    },
    checked: {}
    
   })

const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup>
    <CustomCheckbox
    style= {{width: 36, height: 36}}
    icon={<CircleUnchecked style={{ fontSize: 20}}/>}
    checkedIcon={<CircleCheckedFilled style={{ fontSize: 20}}/>}
    
  />
    </FormGroup>
  );
}