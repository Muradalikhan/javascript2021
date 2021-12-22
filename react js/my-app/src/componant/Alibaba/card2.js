import 'bootstrap-4-react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Image1 from './images/head1.jpg'
import Image2 from './images/head2.jpeg'
import Image3 from './images/head3.jpeg'
import Image4 from './images/watch1.jpg'
import Image5 from './images/watch2.jpg'
import Image6 from './images/watch3.jpg'
import { styled } from '@mui/material/styles';



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


let Card2 = () => {


    let arr = [
        {
            title: 'title1',
            discription: 'some discrition here some discrition here some discrition here some discrition here',
            img: [Image1, Image2, Image3],
         

        },
        {
            title: 'title2',
            discription: 'some discrition here some discrition here some discrition here some discrition here',
            img: [Image4, Image5, Image6],
            

        }


    ]

    return (


        <>
            {
                arr.map((item, index) => {
                    console.log(item)

                    return (
                        <Paper className='card_1' key={index}
                            sx={{
                                borderRadius: '10px',
                                height: '320px',
                                padding: '10px',
                                width: '700px',
                                margin: '5px 9px;'
                            }}
                        >
                            <Grid container md={12}>

                                <Grid item md={8}>
                                    <h4>{item.title}</h4>
                                    <p>{item.discription}</p>
                                </Grid>
                                <Grid item md={4}> <img src={Image6} width="120px" height="100px" alt='images' ></img></Grid>

                            </Grid>

                            <Grid container md={12} className='mt-3 mx-auto'>

                               
                                <Grid item md={5} className=' p-2 ml-2' sx={{height:'150px',backgroundColor:'#dee2e6'}}>
                                    {item.img.map((e, i) => {
                                        return (
                                            <span  className='mx-1 ' md={2}>
                                                <img src={e} width="80px" height="100px" alt='images' ></img>
                                            </span>
                                        )
                                    })}
                                   
                                </Grid>
                                <Grid item md={5} className=' p-2 ml-2' sx={{height:'150px', backgroundColor:'#dee2e6'}}>
                                    {item.img.map((e, i) => {
                                        return (
                                            <span  className='mx-1 ' md={2}>
                                                <img src={e} width="80px" height="100px" alt='images' ></img>
                                            </span>
                                        )
                                    })}
                                   
                                </Grid>
                               



                            </Grid>

                        </Paper>
                    )
                })
            }



        </>

    )

}

export default Card2