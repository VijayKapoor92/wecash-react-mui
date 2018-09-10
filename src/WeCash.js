import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { fetchCategorias, fetchContas, fetchMovimentos, fetchUsuarios} from "./actions";
import ContasContainer from "./containers/ContasContainer";
import CategoriasContainer from './containers/CategoriasContainer';
import MovimentosContainer from './containers/MovimentosContainer';
import UsuariosContainer from './containers/UsuariosContainer';
import LoginView from './views/LoginView';

class WeCash extends Component {

    // componentWillMount(){
    //     this.props.onFetchContas();
    //     this.props.onFetchCategorias();
    //     this.props.onFetchMovimentos();
    //     this.props.onFetchUsuarios();
    // }

    handleFetchMovimentos = () =>
        this.props.onFetchMovimentos();

    render() {
        const { contas, categorias, movimentos, usuarios } = this.props;
        return (
            <Fragment>
                <Route exact path="/" render={() => <LoginView /> }/>
                {/*<Route path="/contas" render={() => <ContasContainer contas={contas}/>}/>*/}
                {/*<Route path="/categorias" render={() => <CategoriasContainer categorias={categorias}/>}/>*/}
                <Route path="/movimentos" render={() => <MovimentosContainer onFetchContas={this.handleFetchMovimentos} movimentos={movimentos}/>}/>
                {/*<Route path="/usuarios" render={() => <UsuariosContainer usuarios={usuarios} />} />*/}
            </Fragment>
        );
    }
}

const mapStateToProps = ({contas, categorias, movimentos, usuarios}, ownProps) => ({
    contas, categorias, movimentos, usuarios, ...ownProps
});

const mapDispacthToProps = dispatch => ({
    onFetchContas: () => dispatch(fetchContas()),
    onFetchCategorias: () => dispatch(fetchCategorias()),
    onFetchMovimentos: () => dispatch(fetchMovimentos()),
    onFetchUsuarios: () => dispatch(fetchUsuarios())
});

export default withRouter(connect(mapStateToProps, mapDispacthToProps)(WeCash));
