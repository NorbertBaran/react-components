import {Button, Container, TextField, Typography} from "@mui/material";
import Route from "./Route";
import {FC, useState} from "react";
import {IHeader} from "../account/Header";
import {Header, Paper} from "../../index";

interface IActions {
    signin: (email: string, password: string) => any
    google: () => any
    signup: () => any
    restore: () => any
}

interface ISignInError{
    value: boolean
    message?: string
}

interface ISignInErrors{
    authentication?: ISignInError
}

interface ISignIn {
    title: IHeader
    actions: IActions
    errors?: ISignInErrors
}

const SignIn: FC<ISignIn> = ({title, actions, errors}) => {
    const [emailForm, setEmailForm] = useState('')
    const [passwordForm, setPasswordForm] = useState('')
    return (
        <Container maxWidth='sm'>
            <Header label='React' accent='Components' variant='h4' align='center' sx={{marginBottom: 4}}/>
            <Paper>
                <Header label='Sign' accent='In' variant='h5' align='center' sx={{marginBottom: 3}}/>
                <TextField error={errors?.authentication?.value} variant="outlined" label='Email' value={emailForm} onChange={(e) => setEmailForm(e.target.value)}/>
                <TextField error={errors?.authentication?.value} variant="outlined" label='Password' type='password' value={passwordForm} onChange={(e) => setPasswordForm(e.target.value)}/>
                <Button variant='contained' size='large' onClick={() => actions.signin(emailForm, passwordForm)}>Sign In</Button>
                <Typography paddingTop={3} align='center'>
                    <>Don't you have account? </>
                    <Route onClick={() => actions.signup()}>Sign up</Route>
                    <Route onClick={() => actions.restore()} fontWeight={400} display='block'>Forgot password?</Route>
                </Typography>
            </Paper>
        </Container>
    )
}

export default SignIn
