import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { FiberNew } from '@mui/icons-material';
import MyCard from '../component/card'
import TextField from '@mui/material/TextField';
import ApiKey from '../config/config';
import { useEffect, useState } from 'react';
import SavedNews from '../component/saveNews';
import Msg from '../component/message';



const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);






export default function Dashboard() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [sources, setSources] = useState([]);
    const [news, setNews] = useState([]);
    const [newsSource, setNewsSource] = useState('bbc-news')
    const [searchNews, setSearchNews] = useState('');
    const [searchToggel, setSearchToggel] = useState(false)
    const [saveToggel, setSaveToggel] = useState(false)

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };



    const fetchApi = async () => {


        
        await fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=${ApiKey}`)
            .then(res => res.json())
            .then(res => {
                setSources(res.sources)
            })


        if (searchToggel) {
            await fetch(`https://newsapi.org/v2/everything?q=${searchNews}&apiKey=${ApiKey}`)
                .then(res => res.json())
                .then(res => {
                    setNews(res.articles)
                })

        }
        else {
            await fetch(`https://newsapi.org/v2/top-headlines?sources=${newsSource}&apiKey=${ApiKey}`)
                .then(res => res.json())
                .then(res => {
                    setNews(res.articles)
                })
            setSearchToggel(false)

        }
        setSearchToggel(false)


    }

    useEffect(() => {
        fetchApi()
    }, [newsSource, searchNews])



    const showNews = (source) => {
        setNewsSource(source.toLowerCase())
        setSearchNews('')
    }

    const newsOnSearch = (val) => {
        setSearchNews(val)
        setSearchToggel(true)
    }





    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="button" noWrap component="div" sx={{cursor:'pointer'}} onClick={()=>{setSaveToggel(false)}}>
                        News App
                    </Typography>
                    <Typography variant="button" noWrap component="div" className='mx-4' sx={{cursor:'pointer'}}  onClick={()=>{setSaveToggel(true)}}>
                        Saved News
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {sources.map((text, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={text.name} onClick={() => showNews(text.id)} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
              
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />


                <TextField id="standard-basic" value={searchNews} fullWidth label="Search" variant="standard" className='m-3' onChange={(e) => newsOnSearch(e.target.value)} />
               
                {saveToggel ? <SavedNews /> : <MyCard news={news} />}

            </Box>
        </Box>
    );
}
