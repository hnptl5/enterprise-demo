import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function DropDownSelect({ options }) {
  const classes = useStyles();
  const [lang, setLang] = React.useState('');

  const handleChange = event => {
    setLang(event.target.value);
  };

  return (
    <div>
      <FormControl required className={classes.formControl}>
        <InputLabel id="demo-simple-select-required-label">Lang</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={lang}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          {
            options.map((e) => {
              return <MenuItem value={e}>{e}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </div>
  );
}

