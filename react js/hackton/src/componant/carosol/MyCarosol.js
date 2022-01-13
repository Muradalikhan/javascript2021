import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
// import RandomIcon from '@mui/icons-material/Random'


function MyCarosol(props) {
    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel
            // next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) }
            // prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }

            fullHeightHover={false}     // We want the nav buttons wrapper to only be as big as the button element is
            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    backgroundColor: 'cornflowerblue',
                    borderRadius: 0
                }
            }}
            navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
                style: {
                    bottom: '0',
                    top: 'unset'
                }
            }}

         

        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default MyCarosol