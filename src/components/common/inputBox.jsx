import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
}));


const InputModified = styled(TextField)`
    margin-top:10px;
    height: 70px;
    background:rgb(232,232,232);
    outline: none;
    border: none;
    font-size: 2rem;
    color: black;
    border-bottom: 2px solid grey;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    input {
        font-size: 2rem;
    }
    label {
        font-size: 2rem;
        color: green;
    }
    .MuiFormLabel-root.Mui-focused {
        color: green;
    }
`;

const InputBox = ({ value, placeholder, onChange, type, required }) => {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <InputModified id="standard-basic" label={placeholder} type={type} required={required} onChange={(e) => onChange(e.target.value)} value={value} />
        </form>
    )
}

export default InputBox;
