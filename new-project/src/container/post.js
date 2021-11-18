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


                {/* <Box sx={{ my: 2 }}>
                    {[...new Array(30)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Box> */}
            </Container>
        </>
    )
}

export default Post