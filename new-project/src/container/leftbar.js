import { AdbOutlined, AddBox, Book, ContactMail, Home, Phone, Report, TableChart } from '@mui/icons-material';
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';



const Leftbar = () => {

    const theme = useTheme()
    const useStyles = makeStyles(() => ({
        leftbar: {
            color: 'green',
           
        },
        leftContainer: {
            position: 'sticky',
            top: 67,
            border: '0.5px solid lightgrey',
            textAlign: 'center',
        },
        icon: {
            marginRight: 4,
        },
        text:{
            display:'inline-block',
            width:'100px',
            textAlign:'left',
            [theme.breakpoints.down('sm')]:{
                display:'none'
            },
        }
    }))
    const classes = useStyles()
    return (
        <>
            <Container className={classes.leftContainer}>
                <h4 className={classes.leftbar}> <Home className={classes.icon} />   <Link to='/quizapp' className={classes.text}>Redux</Link></h4>
                <h4 className={classes.leftbar}> <AdbOutlined className={classes.icon} />   <span className={classes.text}>Leftbar</span></h4>
                <h4 className={classes.leftbar}> <ContactMail className={classes.icon} />   <span className={classes.text}>Leftbar</span></h4>
                <h4 className={classes.leftbar}> <AddBox className={classes.icon} />   <span className={classes.text}>Leftbar</span></h4>
                <h4 className={classes.leftbar}> <Report className={classes.icon} />   <span className={classes.text}>Leftbar</span></h4>
                <h4 className={classes.leftbar}> <TableChart className={classes.icon} />   <Link to='/crud' className={classes.text}>Crud</Link></h4>
                <h4 className={classes.leftbar}> <Phone className={classes.icon} />   <span className={classes.text}>Leftbar</span></h4>
                <h4 className={classes.leftbar}> <Book className={classes.icon} />   <span className={classes.text}>Leftbar</span></h4>
                <h4 className={classes.leftbar}> <Home className={classes.icon} />   <span className={classes.text}>Leftbar</span></h4>
                <h4 className={classes.leftbar}> <Home className={classes.icon} />   <span className={classes.text}>Leftbar</span></h4>
                <h4 className={classes.leftbar}> <Home className={classes.icon} />   <span className={classes.text}>Leftbar</span></h4>
                <h4 className={classes.leftbar}> <Home className={classes.icon} />   <span className={classes.text}>Leftbar</span></h4>
            </Container>

        </>
    )
}

export default Leftbar