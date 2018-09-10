import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
import {
    Paper,
    Typography,
    TextField,
    InputAdornment,
    Button,
    Grid
} from '@material-ui/core';
import {
    Person,
    RemoveRedEye,
    VpnKey,
    AccountCircle
} from '@material-ui/icons';
// import * as api from '../../api';
import { TOKEN } from "../../constants";
import { withStyles } from '@material-ui/core/styles';
import { loginSheet } from '../../styles/login';

class LoginView extends Component {

    constructor(props){
        super(props);
        this.state = {
            nm_email: '',
            nm_senha: '',
            logado: false
        };
        this.passInput = '';
    }
    onChangeText = e =>
        this.setState({
            [e.target.name]: e.target.value
        });

    login = () => {
        const { nm_email, nm_senha } = this.state;
        // console.log({
        //     nm_email,
        //     nm_senha
        // });
        // api.login({nm_email, nm_senha})
        //     .then(res => console.log(res));
        localStorage.setItem('usuario', JSON.stringify({nm_email, nm_senha, token: TOKEN}));
        this.setState({ logado: true });
    };

    handleShowPassword = () => {
        if (this.passInput.type === 'password')
            this.passInput.type = 'text';
        else
            this.passInput.type = 'password';
    };

    render() {
        const { classes } = this.props;
        if (this.state.logado)
            return <Redirect to='/movimentos' />;
        return (
            <div className={classes.body}>
                <Paper className={classes.root} elevation={10}>
                    <Paper className={classes.headerContainer}>
                        <Typography className={classes.title} variant='title' align='center'>Login</Typography>
                    </Paper>
                    <Typography className={classes.fieldsContainer} component='div'>
                        <TextField
                            name='nm_email'
                            InputLabelProps={{
                                shrink: true
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <Person className={classes.textFieldIcon} />
                                    </InputAdornment>
                                )
                            }}
                            label='Email'
                            onChange={this.onChangeText}
                            fullWidth
                        />
                        <TextField
                            name='nm_senha'
                            type='password'
                            InputLabelProps={{
                                shrink: true
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <VpnKey className={classes.textFieldIcon} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position='end' onClick={() => this.handleShowPassword()}>
                                        <RemoveRedEye className={classes.textFieldIcon} />
                                    </InputAdornment>
                                )
                            }}
                            label='Senha'
                            inputRef={ref => this.passInput = ref}
                            onChange={this.onChangeText}
                            fullWidth
                        />
                    </Typography>
                    <Typography component='div' style={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center'}}>
                        <Button onClick={() => this.login()} style={{width: 'auto'}}>Login</Button>
                        <Button>Não possui conta? Cadastre-se</Button>
                    </Typography>
                </Paper>
            </div>
        )
    }
}

export default withStyles(loginSheet)(LoginView);