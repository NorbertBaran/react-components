import {Box, Button, Container, TextField, Typography} from "@mui/material";
import Route from "./Route";
import {FC, useState} from "react";
import {IHeader} from "../account/Header";
import {Header, Paper} from "../../index";

interface IActions {
    reset: (email: string) => any
    signin: () => any
}

interface IRestoreError {
    value: boolean
    message?: string
}

interface IRestoreErrors {
    email: IRestoreError
}

interface IRestore {
    title: IHeader
    actions: IActions
    errors?: IRestoreErrors
}

const Restore: FC<IRestore> = ({title, actions, errors}) => {
    const [emailForm, setEmailForm] = useState('')
    return (
        <Container maxWidth='sm'>
            <Header label='React' accent='Components' variant='h4' align='center' sx={{marginBottom: 4}}/>
            <Paper>
                <Header label='Restore' variant='h5' align='center' sx={{marginBottom: 3}}/>
                <TextField error={errors?.email?.value} variant="outlined" label='Email' value={emailForm}
                           onChange={(e) => setEmailForm(e.target.value)}/>
                <Button variant='contained' size='large' onClick={() => actions.reset(emailForm)}>Sign In</Button>
                <Typography align='center'>
                    <>Come back and </>
                    <Route onClick={() => actions.signin()}>Sign in</Route>
                </Typography>
            </Paper>
        </Container>
    )
}

export default Restore