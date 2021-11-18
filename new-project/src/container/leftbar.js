import { Home } from '@mui/icons-material';
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { textAlign } from '@mui/system';



const Leftbar = () => {

    const theme = useTheme()
    const useStyles = makeStyles(() => ({
        leftbar: {
            color: 'green',
        },
        leftContainer: {
            position: 'sticky',
            top: 70,
            border: '0.5px solid lightgrey',
            textAlign: 'center',
        },
        icon: {
            marginLeft: 4,
        },
    }))
    const classes = useStyles()
    return (
        <>
            <Container className={classes.leftContainer}>
                <h4 className={classes.leftbar}> <Home className={classes.icon} />  Leftbar</h4>
                <h4 className={classes.leftbar}> <Home className={classes.icon} />  Leftbar</h4>
                <h4 className={classes.leftbar}> <Home className={classes.icon} />  Leftbar</h4>
                <h4 className={classes.leftbar}> <Home className={classes.icon} />  Leftbar</h4>
                <h4 className={classes.leftbar}> <Home className={classes.icon} />  Leftbar</h4>
                <h4 className={classes.leftbar}> <Home className={classes.icon} />  Leftbar</h4>
                <h4 className={classes.leftbar}> <Home className={classes.icon} />  Leftbar</h4>
                <h4 className={classes.leftbar}> <Home className={classes.icon} />  Leftbar</h4>
                <h4 className={classes.leftbar}> <Home className={classes.icon} />  Leftbar</h4>
                <h4 className={classes.leftbar}> <Home className={classes.icon} />  Leftbar</h4>
                <h4 className={classes.leftbar}> <Home className={classes.icon} />  Leftbar</h4>
                <h4 className={classes.leftbar}> <Home className={classes.icon} />  Leftbar</h4>
            </Container>

        </>
    )
}

export default Leftbar