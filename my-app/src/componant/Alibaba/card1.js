import 'bootstrap-4-react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Image1 from './images/head1.jpg'
import Image2 from './images/head2.jpeg'
import Image3 from './images/head3.jpeg'
import Image4 from './images/watch1.jpg'
import Image5 from './images/watch2.jpg'
import Image6 from './images/watch3.jpg'


let Card1 = () => {


    let arr = [
        {
            title: 'title1',
            img: [Image1, Image2, Image3],
            price: [50, 30, 60],
            name: ['name1', 'name2', 'name3']

        },
        {
            title: 'title2',
            img: [Image4, Image5, Image6],
            price: [50, 30, 60],
            name: ['name1', 'name2', 'name3']

        },
        {
            title: 'title3',
            img: [Image1, Image2, Image3],
            price: [50, 30, 60],
            name: ['name1', 'name2', 'name3']

        },
        {
            title: 'title3',
            img: [Image4, Image5, Image6],
            price: [50, 30, 60],
            name: ['name1', 'name2', 'name3']

        },
        {
            title: 'title3',
            img: [Image1, Image2, Image3],
            price: [50, 30, 60],
            name: ['name1', 'name2', 'name3']

        },
        {
            title: 'title3',
            img: [Image4, Image5, Image6],
            price: [50, 30, 60],
            name: ['name1', 'name2', 'name3']

        },
        {
            title: 'title1',
            img: [Image1, Image2, Image3],
            price: [50, 30, 60],
            name: ['name1', 'name2', 'name3']

        },
        {
            title: 'title2',
            img: [Image4, Image5, Image6],
            price: [50, 30, 60],
            name: ['name1', 'name2', 'name3']

        },
        {
            title: 'title3',
            img: [Image1, Image2, Image3],
            price: [50, 30, 60],
            name: ['name1', 'name2', 'name3']

        },
        {
            title: 'title3',
            img: [Image4, Image5, Image6],
            price: [50, 30, 60],
            name: ['name1', 'name2', 'name3']

        },
        {
            title: 'title3',
            img: [Image1, Image2, Image3],
            price: [50, 30, 60],
            name: ['name1', 'name2', 'name3']

        },
        {
            title: 'title3',
            img: [Image4, Image5, Image6],
            price: [50, 30, 60],
            name: ['name1', 'name2', 'name3']

        },

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
                                height: '200px',
                                padding: '10px',
                                width: '439.2px',
                                margin: '5px 9px;'
                            }}
                        >

                            <h4>{item.title}</h4>

                            <Grid container md={12}>

                                {/* <span className='d-inline'>  */}
                                {item.img.map((e, i) => {
                                    return (
                                        <Grid className='mx-3' md={3}>
                                            <img src={e} width="120px" height="100px" alt='images' ></img>
                                        </Grid>
                                    )
                                })}
                                {item.price.map((e, i) => {
                                    return (
                                        <Grid className='mx-3' md={3}>
                                           <h6>{e}</h6>
                                        </Grid>
                                    )
                                })}
                                {item.name.map((e, i) => {
                                    return (
                                        <Grid className='mx-3' md={3}>
                                           <h5>{e}</h5>
                                        </Grid>
                                    )
                                })}
                               
                            </Grid>

                        </Paper>
                    )
                })
            }



        </>

    )

}

export default Card1