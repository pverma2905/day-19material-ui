"use client"

import { Button, FormControl } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import React from 'react';
const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Page() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>

            <div>
                <h2>Button</h2>
                <Button size="small" variant="text" color="secondary" onClick={() => { console.log("test1") }}>Text</Button>
                <Button size="medium" startIcon={<DeleteIcon />} variant="contained" color="error" onClick={() => { console.log("test2") }}>Text</Button>
                <Button size="large" color="success" variant="outlined">Text</Button>
                <Button disabled>Disabled</Button>
                <Button href="#text-buttons">Link</Button>


                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" color="primary">
                    <DeleteIcon />
                </IconButton>

            </div>


            <h2>Text Field</h2>
            <div>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    // defaultValue="Hello World"
                    variant="outlined"
                />
                <TextField
                    error
                    id="filled-error"
                    label="Error"
                    // defaultValue="Hello World"
                    variant="outlined"
                />

                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                // defaultValue="Default Value"
                />

                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="EUR"
                    helperText="Please select your currency"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    label="With normal TextField"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                    }}
                />
            </div>

            <h2>Select Box</h2>
            <div>


                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <h2>Checkbox</h2>
            <div>
                <Checkbox {...label} defaultChecked />
                <Checkbox {...label} />
                <Checkbox {...label} disabled />
                <Checkbox {...label} disabled checked />

                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    <FormControlLabel required control={<Checkbox />} label="Required" />
                    <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                </FormGroup>

            </div>

        </>
    )
}

