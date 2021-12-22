import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import ImgMediaCard from '../components/card';


const Post = () => {

    const theme = useTheme()
    const useStyles = makeStyles(() => ({
        post: {
            color: 'blue',
        },
    }))
    const classes = useStyles()
    return (
        <>

            <Container>
                <ImgMediaCard/>
                <ImgMediaCard/>
                <ImgMediaCard/>
                <ImgMediaCard/>
                <ImgMediaCard/>
                <ImgMediaCard/>

            </Container>
        </>
    )
}

export default Post