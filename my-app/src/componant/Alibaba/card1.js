
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Image from './images/bake.jpeg'


let Card1 = () => {


    let arr = [
        {
            title: 'title1',
            img: [Image, Image, Image],
            price: [50, 30, 60],
            name: ['name1', 'name2', 'name3']

        },
        {
            title: 'title2',
            img: [Image, Image, Image],
            price: [50, 30, 60],
            name: ['name1', 'name2', 'name3']

        },
        {
            title: 'title3',
            img: [Image, Image, Image],
            price: [50, 30, 60],
            name: ['name1', 'name2', 'name3']

        }
    ]

    return (


        <>
            {
                arr.map((item,index) => {
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

                                <Grid md={3} className='mx-3'>
                                    <div><img src={item.img[0]} width="120px" height="100px" alt='images'></img> </div>
                                    <div>{item.price[0]}</div>
                                    <div>{item.name[0]}</div>
                                </Grid>

                            </Grid>

                        </Paper>
                    )
                })
            }



        </>

    )

}

export default Card1