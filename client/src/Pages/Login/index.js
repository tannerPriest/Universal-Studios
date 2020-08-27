import React, { useState } from "react"
import { FormControl, TextField, Button, Typography, Grid } from "@material-ui/core"
import { useStyles } from "../Styles";

const defaultForm = {
    email: "",
    password: "",
};

const Login = (props) => {
    const classes = useStyles();
    const [form, setForm] = useState(defaultForm);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('', form);
        //Make API call

        //Clear State
        setForm(defaultForm)
        return;
    };
    const handleChange = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        return;
    };
    return (
        <div>
            <Typography variant="h3" gutterBottom>
                Welcome back
            </Typography>
            <Grid container className={classes.formContainer}>
                <Grid item xs={11} sm={6} md={4} lg={3}>
                    <form onSubmit={handleFormSubmit} className={classes.form} >
                        <FormControl>
                            <TextField autoComplete="username" className={classes.input} label="Email" type="email" onChange={handleChange} name="email" />
                        </FormControl>
                        <FormControl>
                            <TextField autoComplete="current-password" className={classes.input} label="Password" type="password" onChange={handleChange} name="password" />
                        </FormControl>
                        <Button type="submit">Login</Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;
