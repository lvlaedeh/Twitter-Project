import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>({
    root:{
        width: '25%',
        padding: '1.5rem 2rem',
    },
    proftext: {
        marginLeft: '0.5rem',
        width: 'max-content',
        direction: 'ltr',
    },
    profName: {
        flex: 1,
    },
    profId: {
        flex: 1,
        color: theme.palette.text.hint,
        fontSize: '0.9rem'
    },
    tweeterRoot: {
        background: '#f5f8fa',
        borderRadius: '2.5rem',
        marginTop: '3rem',
        padding: '11px 24px'
    },
    tweeterTitle: {
        fontWeight : '600 !important',
        fontSize: '1.1rem !important',
        marginBottom: '11px'
    },
    tweetText: {
        marginRight: '0.5rem',
        width: 'max-content',
        direction: 'rtl',
    },
    tweeterParent: {
        flexWrap: 'nowrap',
        padding: '10px 0',
    }
}))