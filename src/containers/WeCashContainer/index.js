import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { createConta, editConta } from "../../actions";
// import Navbar from '../../components';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountBalance from '@material-ui/icons/AccountBalance';
import CompareArrows from '@material-ui/icons/CompareArrows';
import LocalOffer from '@material-ui/icons/LocalOffer';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import Search from '@material-ui/icons/Search';

import { grey, pink } from '@material-ui/core/colors';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        position: 'relative',
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        bottom: 0,
        height: window.innerHeight,
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        overflowX: 'scroll'
    },
});

const mailFolderListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <CompareArrows />
            </ListItemIcon>
            <ListItemText primary="Movimentos" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AccountBalance />
            </ListItemIcon>
            <ListItemText primary="Contas" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LocalOffer />
            </ListItemIcon>
            <ListItemText primary="Categorias" />
        </ListItem>
    </div>
);

const otherMailFolderListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Usuários" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Sair" />
        </ListItem>
    </div>
);

export default WrappedComponent =>
    connect(({error, ownProps}) => ({error, ...ownProps}))(withStyles(styles, { withTheme: true })(class extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                is_open_modal_conta: false,
                is_open_modal_categoria: false,
                open: false,
                conta: {},
                categoria: {}
            }
        }

        componentDidMount(){
            document.querySelector("body").style.overflow = 'hidden';
            document.querySelector("body").style.margin = 0;
            document.querySelector("body").style.padding = 0;

        }

        handleDrawerOpen = () => {
            this.setState({ open: true });
        };

        handleDrawerClose = () => {
            this.setState({ open: false });
        };

        render () {
            const { conta, is_open_modal_conta, is_open_modal_categoria, categoria } = this.state;
            const { error, classes, theme } = this.props;
            return (
                <Fragment>
                    {/*<Container style={{marginTop:16}}>
                        { error!==null && (<Alert color="danger">{error}</Alert>)}
                        <WrappedComponent
                            {...this.props}
                            onOpenModalConta={conta => this.handleOpenModalConta(conta)}
                            onOpenModalCategoria={categoria => this.handleOpenModalCategoria(categoria)}
                        />
                    </Container>*/}
                    <div className={classes.root}>
                        <AppBar
                            position="absolute"
                            className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                        >
                            <Toolbar disableGutters={!this.state.open} style={{backgroundColor: grey[900]}}>
                                <IconButton
                                    color="inherit"
                                    aria-label="Open drawer"
                                    onClick={this.handleDrawerOpen}
                                    className={classNames(classes.menuButton, this.state.open && classes.hide)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="title" color="inherit" noWrap>
                                    WeCa$h
                                </Typography>
                                <IconButton color='inherit'>
                                    <AddCircleOutline />
                                </IconButton>
                                <Typography component='div'>
                                    <TextField
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position='start' style={{color: 'white'}}>
                                                    <Search />
                                                </InputAdornment>
                                            ),
                                            disableUnderline: true
                                        }}
                                        style={{opacity: 0.3, backgroundColor: '#9e9e9e', borderRadius: 5, padding: 5, outline: 'none', height: 20}}
                                        placeholder='Filtrar...'
                                    />
                                </Typography>
                                <Typography style={{flex: '1'}}/>
                                <IconButton color='inherit'>
                                    <AccountCircle />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <Drawer
                            variant="permanent"
                            classes={{
                                paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                            }}
                            open={this.state.open}
                        >
                            <div className={classes.toolbar}>
                                <IconButton onClick={this.handleDrawerClose}>
                                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                                </IconButton>
                            </div>
                            <Divider />
                            <List>{mailFolderListItems}</List>
                            <Typography component='div' style={{flex: '1'}}/>
                            <Divider />
                            <List>{otherMailFolderListItems}</List>
                        </Drawer>
                        <main className={classes.content}>
                            <div className={classes.toolbar} />
                            <WrappedComponent
                                {...this.props}
                            />
                        </main>
                    </div>
                </Fragment>
            )
        }

        handleToggleModalConta = () =>
            this.setState({is_open_modal_conta: !this.state.is_open_modal_conta});

        handleToggleModalCategoria = () =>
            this.setState({is_open_modal_categoria: !this.state.is_open_modal_categoria});

        handleOpenModalConta = (conta={}) =>
            this.setState({is_open_modal_conta:true, conta});

        handleOpenModalCategoria = (categoria={}) =>
            this.setState({is_open_modal_categoria: true, categoria});

        handleChangeConta = e => {
            e.persist();
            const ds_conta = e.target.value;
            const { conta } = this.state;
            this.setState((prevState, props) => ({
                conta: {
                    ...conta,
                    ds_conta
                }
            }))
        };

        handleSaveConta = () => {
            const { conta } = this.state;
            if(!conta.id_conta || conta.id_conta === 0)
                this.props.dispatch(createConta(conta));
            else
                this.props.dispatch(editConta(conta));

            this.setState({conta:{}});
            this.handleToggleModalConta();
        };

    }));
