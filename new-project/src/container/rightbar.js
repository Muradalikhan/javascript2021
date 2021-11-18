import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';



const Right = () => {

    const theme = useTheme()
    const useStyles = makeStyles(() => ({
        right: {
            color: 'green',
        },
        rightContainer:{
            position:'sticky',
            top:70
        },
    }))
    const classes = useStyles()
    return (
        <>
            <Container className={classes.rightContainer}>
                <h4 className={classes.right}>Right</h4>
                <h4 className={classes.right}>Right</h4>
                <h4 className={classes.right}>Right</h4>
                <h4 className={classes.right}>Right</h4>
                <h4 className={classes.right}>Right</h4>
                <h4 className={classes.right}>Right</h4>
                <h4 className={classes.right}>Right</h4>
                <h4 className={classes.right}>Right</h4>
                <h4 className={classes.right}>Right</h4>
                <h4 className={classes.right}>Right</h4>
                <h4 className={classes.right}>Right</h4>
                <h4 className={classes.right}>Right</h4>
            </Container>
        </>
    )
}

export default Right