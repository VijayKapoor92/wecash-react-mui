import React, {Component, Fragment} from 'react';
import { green, red, grey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import {
    AppBar,
    Tabs,
    Tab,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemIcon
} from '@material-ui/core';
import MoneyIcon from 'react-icons/lib/io/cash';
import CardIcon from 'react-icons/lib/io/card';

const TabContainer = ({ children, dir }) => {
    return (
        <Typography component="div" dir={dir}>
            {children}
        </Typography>
    );
};
const Bookmark = ({tipo, isConfirmed}) => {
    return (
        <div style={{position: 'absolute', left: 0, top: 5, bottom: 5, zIndex: 1, width: 6, backgroundColor: bgColor(tipo, isConfirmed)}} />
    );
};

const styles = theme => ({
    root: {
        backgroundColor: 'inherit',
    },
});
const meses = [
    {id_mes: 1, nm_mes: 'Janeiro'},
    {id_mes: 2, nm_mes: 'Fevereiro'},
    {id_mes: 3, nm_mes: 'Março'},
    {id_mes: 4, nm_mes: 'Abril'},
    {id_mes: 5, nm_mes: 'Maio'},
    {id_mes: 6, nm_mes: 'Junho'},
    {id_mes: 7, nm_mes: 'Julho'},
    {id_mes: 8, nm_mes: 'Agosto'},
    {id_mes: 9, nm_mes: 'Setembro'},
    {id_mes: 10, nm_mes: 'Outubro'},
    {id_mes: 11, nm_mes: 'Novembro'},
    {id_mes: 12, nm_mes: 'Dezembro'}
];
const movimentos = [
    {id_movimento: 1, nr_mes: 1, tp_pagamento: 1,tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/01/2018', dt_confirmacao: '11/01/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 2, nr_mes: 2, tp_pagamento: 2, tp_movimento: 2, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/02/2018', dt_confirmacao: '11/02/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 3, nr_mes: 3, tp_pagamento: 1, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/03/2018', dt_confirmacao: '11/03/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 4, nr_mes: 4, tp_pagamento: 2, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/04/2018', dt_confirmacao: '11/04/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 5, nr_mes: 5, tp_pagamento: 1, tp_movimento: 2, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/05/2018', dt_confirmacao: '11/05/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 6, nr_mes: 6, tp_pagamento: 2, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/06/2018', dt_confirmacao: '11/06/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 7, nr_mes: 7, tp_pagamento: 1, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/07/2018', dt_confirmacao: '10/07/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 8, nr_mes: 8, tp_pagamento: 2, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/08/2018', dt_confirmacao: '', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 80, nr_mes: 8, tp_pagamento: 2, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/07/2018', dt_confirmacao: '10/08/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 81, nr_mes: 8, tp_pagamento: 2, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/01/2018', dt_confirmacao: '11/08/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 82, nr_mes: 8, tp_pagamento: 2, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/08/2018', dt_confirmacao: '11/08/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 821, nr_mes: 8, tp_pagamento: 2, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/08/2018', dt_confirmacao: '10/08/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 822, nr_mes: 8, tp_pagamento: 2, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/08/2018', dt_confirmacao: '10/08/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 823, nr_mes: 8, tp_pagamento: 2, tp_movimento: 2, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/08/2018', dt_confirmacao: '10/08/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 824, nr_mes: 8, tp_pagamento: 2, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/08/2018', dt_confirmacao: '11/08/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 825, nr_mes: 8, tp_pagamento: 2, tp_movimento: 2, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/08/2018', dt_confirmacao: '11/08/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 826, nr_mes: 8, tp_pagamento: 2, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/08/2018', dt_confirmacao: '11/08/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 827, nr_mes: 8, tp_pagamento: 2, tp_movimento: 2, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/08/2018', dt_confirmacao: '11/08/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 828, nr_mes: 8, tp_pagamento: 2, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/08/2018', dt_confirmacao: '11/08/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 829, nr_mes: 8, tp_pagamento: 2, tp_movimento: 2, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/08/2018', dt_confirmacao: '11/08/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 83, nr_mes: 8, tp_pagamento: 2, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/08/2018', dt_confirmacao: '11/08/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 84, nr_mes: 8, tp_pagamento: 2, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/08/2018', dt_confirmacao: '11/08/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 85, nr_mes: 8, tp_pagamento: 2, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/08/2018', dt_confirmacao: '11/08/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 86, nr_mes: 8, tp_pagamento: 2, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/08/2018', dt_confirmacao: '11/08/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 9, nr_mes: 9, tp_pagamento: 1, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/09/2018', dt_confirmacao: '11/09/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 10, nr_mes: 10, tp_pagamento: 2, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/10/2018', dt_confirmacao: '11/10/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 11, nr_mes: 11, tp_pagamento: 1, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/11/2018', dt_confirmacao: '11/11/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'},
    {id_movimento: 12, nr_mes: 12, tp_pagamento: 2, tp_movimento: 1, nm_movimento: 'Conta teste', vl_movimento: '150,98', dt_previsao: '10/12/2018', dt_confirmacao: '11/12/2018', id_categoria: 1, nm_categoria: 'Categoria', id_conta: 1, nm_conta: 'Itau', id_banco: 1, nm_banco: 'Itau'}
];
const color = {
    success: green[100],
    danger: red[100],
    default: grey[300]
};

const bgColor = (tp_movimento, isConfirmed) => {
    if (tp_movimento === 1 && isConfirmed) {
        return color.success;
    } else if  (tp_movimento !== 1 && isConfirmed) {
        return color.danger;
    } else {
        return color.default;
    }
};

const movimento_icon = (tp_pagamento, size = 25) =>
    tp_pagamento === 1 ? <MoneyIcon style={{fontSize: size}} /> : <CardIcon style={{fontSize: size}} />
;

class MovimentosView extends Component{

    constructor(props){
        super(props);
        this.state = {
            mes: 0
        };
    }

    componentDidMount(){
        const date = new Date();
        const mes = date.getMonth() + 1;
        this.setState({ mes });
    }

    handleChange = (event, value) => {
        this.setState({ mes: value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;
        console.log(
            movimentos.filter(m => m.nr_mes === this.state.mes).map(m => ({...m}))
        );
        return (
            <Fragment>
                <AppBar position="static" color="default" style={{zIndex: 101, backgroundColor: `transparent`}}>
                    <Tabs value={this.state.mes} onChange={this.handleChange} scrollable scrollButtons="auto" style={{zIndex: 101, backgroundColor: `transparent`}}>
                        {meses.map(mes => (
                            <Tab key={`mes-${mes.id_mes}`} value={mes.id_mes} label={mes.nm_mes} style={{zIndex: 101, backgroundColor: `transparent`}}/>
                        ))}
                    </Tabs>
                </AppBar>
                <Typography component="div" style={{width: '100%', height: 56, display: 'inline-flex', flexFlow: 'row nowrap', justifyContent: 'space-around', alignItems: 'center'}}>
                    <Typography style={{fontSize: 10, fontStyle: 'italic', paddingLeft: 50, flex: '1 1 auto'}}>Descrição</Typography>
                    <Typography style={{fontSize: 10, fontStyle: 'italic', textAlign: 'center', flex: '1 1 auto'}}>Valor</Typography>
                    <Typography style={{fontSize: 10, fontStyle: 'italic', textAlign: 'center', flex: '1 1 auto'}}>Banco</Typography>
                    <Typography style={{fontSize: 10, fontStyle: 'italic', textAlign: 'center', flex: '1 1 auto'}}>Categoria</Typography>
                    <Typography style={{fontSize: 10, fontStyle: 'italic', textAlign: 'center', flex: '1 1 auto'}}>Previsão</Typography>
                    <Typography style={{fontSize: 10, fontStyle: 'italic', textAlign: 'center', flex: '1 1 auto'}}>Confirmado</Typography>
                </Typography>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                    style={{maxHeight: window.innerHeight - 140, overflowY: 'auto', marginBottom: 300}}
                >
                    {meses.map(({id_mes}) => (
                        <TabContainer key={id_mes} dir={theme.direction}>
                            <List>
                            {movimentos.filter(m => m.nr_mes === this.state.mes).map(m => (
                                <Fragment>
                                    <ListItem>
                                        <ListItemIcon>{movimento_icon(m.tp_movimento)}</ListItemIcon>
                                        <Bookmark tipo={m.tp_movimento} isConfirmed={m.dt_confirmacao !== ''}/>
                                        <Typography component="div" key={m.id_movimento} style={{position: 'relative', width: '100%', padding: 10, display: 'inline-flex', flexFlow: 'row nowrap', justifyContent: 'space-around', alignItems: 'center'}}>
                                            <Typography style={{flex: '1 1 auto', width: '20%'}}>{m.nm_movimento}</Typography>
                                            <Typography style={{flex: '1 1 auto', width: '10%'}}>{m.vl_movimento}</Typography>
                                            <Typography style={{flex: '1 1 auto', width: '10%'}}>{m.nm_banco}</Typography>
                                            <Typography style={{flex: '1 1 auto', width: '10%'}}>{m.nm_categoria}</Typography>
                                            <Typography style={{flex: '1 1 auto', width: '10%'}}>{m.dt_previsao}</Typography>
                                            {m.dt_confirmacao !== '' ? (
                                                <Typography style={{flexGrow: 1, width: '10%'}}>{m.dt_confirmacao}</Typography>
                                            ) : (
                                                <Typography style={{flexGrow: 1, color: 'transparent', width: '10%'}}>00/00/0000</Typography>
                                            )}
                                                {/*<Typography style={{width: '20%', borderLeft: `10px solid ${bgColor(m.tp_movimento, m.dt_confirmacao !== '')}`}}>*/}
                                        </Typography>
                                    </ListItem>
                                    <Divider style={{backgroundColor: grey[200]}}/>
                                </Fragment>
                            ))}
                                </List>
                        </TabContainer>
                    ))}
                </SwipeableViews>
            </Fragment>
        );
    }

}

export default withStyles(styles, { withTheme: true })(MovimentosView);