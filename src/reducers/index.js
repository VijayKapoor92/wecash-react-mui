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
    FETCH_USUARIOS_SUCCESS,
    FETCH_USUARIOS_STARTED,
    FETCH_USUARIOS_FAILED,
    CREATE_CONTA_STARTED,
    UPDATE_CONTA_STARTED, CREATE_CONTA_FAILED, UPDATE_CONTA_FAILED, CREATE_CONTA_SUCCESS, UPDATE_CONTA_SUCCESS
} from "../constants";

const initialState = {
    contas:[],
    categorias:[],
    movimentos:[],
    usuarios:[],
    isLoading:false,
    error:null
};

const root = (state=initialState, action) => {
    const {
        contas,
        categorias,
        movimentos,
        usuarios,
        error,
        id_conta,
        ds_conta
    } = action;
    switch (action.type) {
        case FETCH_CONTAS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                contas:contas.map(({id_conta, ds_conta}) => ({id_conta, ds_conta}))
            };
        case CREATE_CONTA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                contas:[
                    ...state.contas,
                    {
                        id_conta,
                        ds_conta
                    }
                ]
            };
        case UPDATE_CONTA_SUCCESS:
            console.log(id_conta);
            return {
                ...state,
                isLoading: false,
                error: null,
                contas: state.contas.map(conta => {
                    if(conta.id_conta === id_conta)
                        return {
                            id_conta,
                            ds_conta
                        };
                    return conta;
                })
            };
        case FETCH_CATEGORIAS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                categorias: categorias.map(({id_categoria, ds_categoria, tp_categoria}) => ({id_categoria, ds_categoria, tp_categoria}))
            };
        case FETCH_MOVIMENTOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                movimentos: movimentos.map(({id_movimento, id_conta, ds_conta, id_categoria, ds_categoria, tp_categoria, ds_movimento, dt_previsao, dt_confirmacao, vl_previsto, vl_confirmado}) =>
                    ({
                        id_movimento,
                        id_conta,
                        ds_conta,
                        id_categoria,
                        ds_categoria,
                        tp_categoria,
                        ds_movimento,
                        dt_previsao,
                        dt_confirmacao,
                        vl_previsto,
                        vl_confirmado
                    }))
            };
        case FETCH_USUARIOS_SUCCESS:
            return {
                ...state,
                isLoading:false,
                error: null,
                usuarios: usuarios.map(({id_usuario, nm_usuario, nm_email, dt_cadastro}) => ({id_usuario, nm_usuario, nm_email, dt_cadastro}))
            };
        case CREATE_CONTA_STARTED:
        case UPDATE_CONTA_STARTED:
        case FETCH_USUARIOS_STARTED:
        case FETCH_MOVIMENTOS_STARTED:
        case FETCH_CATEGORIAS_STARTED:
        case FETCH_CONTAS_STARTED:
            return {
                ...state,
                isLoading:true
            };
        case CREATE_CONTA_FAILED:
        case UPDATE_CONTA_FAILED:
        case FETCH_USUARIOS_FAILED:
        case FETCH_CATEGORIAS_FAILED:
        case FETCH_MOVIMENTOS_FAILED:
        case FETCH_CONTAS_FAILED:
            return {
                ...state,
                isLoading:false,
                error
            };
        default:
            return state;
    }
};

export default root;