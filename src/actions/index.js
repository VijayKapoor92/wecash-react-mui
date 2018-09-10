import {
    FETCH_CONTAS_STARTED,
    FETCH_CONTAS_SUCCESS,
    FETCH_CONTAS_FAILED,
    FETCH_CATEGORIAS_SUCCESS,
    FETCH_CATEGORIAS_STARTED,
    FETCH_CATEGORIAS_FAILED,
    FETCH_MOVIMENTOS_SUCCESS,
    FETCH_MOVIMENTOS_STARTED,
    FETCH_MOVIMENTOS_FAILED,
    FETCH_USUARIOS_FAILED,
    FETCH_USUARIOS_SUCCESS,
    FETCH_USUARIOS_STARTED,
    CREATE_CONTA_STARTED,
    UPDATE_CONTA_STARTED,
    CREATE_CONTA_SUCCESS,
    UPDATE_CONTA_SUCCESS,
    UPDATE_CONTA_FAILED,
    CREATE_CONTA_FAILED
} from "../constants";

import * as api from '../api';

export const

    fetchContasStarted = () => ({
        type: FETCH_CONTAS_STARTED
    }),

    createContaStarted = () => ({
        type: CREATE_CONTA_STARTED
    }),

    editContaStarted = () => ({
        type: UPDATE_CONTA_STARTED,
    }),

    fetchCategoriasStarted = () => ({
        type: FETCH_CATEGORIAS_STARTED
    }),

    fetchMovimentosStarted = () => ({
        type: FETCH_MOVIMENTOS_STARTED
    }),

    fetchUsuariosStarted = () => ({
        type: FETCH_USUARIOS_STARTED
    }),

    fetchContasSuccess = contas => ({
        type : FETCH_CONTAS_SUCCESS,
        contas
    }),

    createContaSuccess = ({id_conta, ds_conta}) => ({
        type: CREATE_CONTA_SUCCESS,
        id_conta,
        ds_conta
    }),

    editContaSucess = ({id_conta, ds_conta}) => ({
        type: UPDATE_CONTA_SUCCESS,
        id_conta,
        ds_conta
    }),

    fetchCategoriasSuccess = categorias => ({
        type: FETCH_CATEGORIAS_SUCCESS,
        categorias
    }),

    fetchMovimentosSuccess = movimentos => ({
        type: FETCH_MOVIMENTOS_SUCCESS,
        movimentos
    }),

    fetchUsuariosSuccess = usuarios => ({
        type: FETCH_USUARIOS_SUCCESS,
        usuarios
    }),

    fetchContasFailed = error => ({
        type: FETCH_CONTAS_FAILED,
        error
    }),

    createContaFailed = error => ({
        type:CREATE_CONTA_FAILED,
        error
    }),

    editContaFailed = error => ({
        type: UPDATE_CONTA_FAILED,
        error
    }),

    fetchCategoriasFailed = error => ({
        type: FETCH_CATEGORIAS_FAILED,
        error
    }),

    fetchMovimentosFailed = error => ({
        type: FETCH_MOVIMENTOS_FAILED,
        error
    }),

    fetchUsuariosFailed = error => ({
        type: FETCH_USUARIOS_FAILED,
        error
    }),

    fetchContas = () => dispatch => {
        dispatch(fetchContasStarted());
        api.getContas()
            .then( res => dispatch(fetchContasSuccess(res.data)))
            .catch( err => dispatch(fetchContasFailed( err.message)))
    },

    createConta = conta => disptach => {
        disptach(createContaStarted());
        api.postConta(conta)
            .then(res => disptach(createContaSuccess(res.data.payload)))
            .catch(err => disptach(createContaFailed(err)))
    },

    editConta = conta => dispatch => {
        dispatch(editContaStarted());
        api.putConta(conta)
            .then(res => dispatch(editContaSucess(res.data.payload)))
            .catch(err => dispatch(editContaFailed(err)))
    },

    fetchCategorias = () => dispatch => {
        dispatch(fetchCategoriasStarted());
        api.getCategorias()
            .then( res => dispatch(fetchCategoriasSuccess(res.data)))
            .catch( err => dispatch(fetchCategoriasFailed(err.message)))
    },

    fetchMovimentos = () => dispatch => {
        dispatch(fetchMovimentosStarted());
        api.getMovimentos()
            .then( res => dispatch(fetchMovimentosSuccess(res.data)))
            .catch( err => dispatch(fetchMovimentosFailed(err.message)))
    },

    fetchUsuarios = () => dispatch => {
        dispatch(fetchUsuariosStarted());
        api.getUsuarios()
            .then(res => dispatch(fetchUsuariosSuccess(res.data)))
            .catch(err => dispatch(fetchUsuariosFailed(err.message)))
    }
;
