import { pink, grey } from '@material-ui/core/colors';
export const loginSheet = theme => ({
    body: {
        background: `linear-gradient(49deg, ${pink[500]}, ${grey[900]})`,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    root: {
        position: 'relative',
        width: 450,
        height: 380
    },

// background-size: 400% 400%;
//
// -webkit-animation: AnimationName 30s ease infinite;
// -moz-animation: AnimationName 30s ease infinite;
// animation: AnimationName 30s ease infinite;
//
// @-webkit-keyframes AnimationName {
//     0%{background-position:0% 92%}
//     50%{background-position:100% 9%}
//     100%{background-position:0% 92%}
// }
// @-moz-keyframes AnimationName {
//     0%{background-position:0% 92%}
//     50%{background-position:100% 9%}
//     100%{background-position:0% 92%}
// }
// @keyframes AnimationName {
//     0%{background-position:0% 92%}
//     50%{background-position:100% 9%}
//     100%{background-position:0% 92%}
// }
    headerContainer: {
        backgroundColor: pink[500],
        // background: `linear-gradient(49deg, ${pink[500]}, ${grey[900]})`,
        width: 350,
        position: 'absolute',
        top: '-15px',
        left: 'calc(50% - 175px)',
        paddingTop: 20,
        paddingBottom: 20,
        zIndex: 10
    },
    title: {
        color: 'white'
    },
    fieldsContainer: {
        marginTop: 100,
        paddingLeft: 50,
        paddingRight: 50,
        marginBottom: 50
    },
    textFieldIcon: {
        color: grey[400],
        '&:hover': {
            color: grey[700]
        }
    }
});