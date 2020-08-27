import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        width: 250
    },
    form: {
        '& > *': {
            margin: theme.spacing(1),
        },
        backgroundColor:"rgb(230,230,230)",
        display: "flex",
        flexDirection: "column",
    },
    formContainer: {
        justifyContent: "center"
    }
}))