import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import AnimalsIcon from '@mui/icons-material/Pets';
import NewsIcon from '@mui/icons-material/Newspaper';
import UserIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "@/Components/Menu";

import LanguageIcon from '@mui/icons-material/Language';
import ContactIcon from '@mui/icons-material/Email';
//import ContactIcon from '@mui/icons-material/MailOutline';
import LogoutIcon from '@mui/icons-material/PowerSettingsNew';
//import UserIcon from '@mui/icons-material/Person';

//import { getDarkMode } from "@/Utils/Cookies";

import IconButton from '@mui/material/IconButton';

//https://mui.com/material-ui/material-icons/

export default function BarTop({user,t,from,changeLanguage,handleLogout,handleContact,shelter,isPC}){

    const [ openMenu, setOpenMenu ] = useState(false);

    var highlighted = '';
    var show = true;
    switch(from){

        case 'home':
            highlighted = 'home';
            break;

        case 'animals':
            highlighted = 'animals';
            break;

        case 'news':
            highlighted = 'news';
            break;

        case 'contactlanding':
            show = false;
            highlighted = 'contact'; 
            break;

        case 'contact':            
            highlighted = 'contact';            
            break;

        case 'user':
            highlighted = 'user';
            break;

        case 'menu':
            highlighted = 'menu';
            break;

        case 'landing':            
            show = false;
            break;
    }

    const [ value, setValue ] = useState(highlighted);    
    const [ showMenu, setShowMenu ] = useState(show && isPC);

    const clickIcon = (id) => {

        if (id !== 'menu') {
            setValue(id);
        }

        var link = '';
        
        switch(id){
            case 'home':
                link = 'home';
                break;
            case 'animals':
                link = 'animals';
                break;
            case 'news':
                link = 'news';
                break;
            case 'contact':            
                link = 'contact';
                break;
            case 'user':
                if(user){
                    if(user?.admin){
                        link = 'admin'
                    }
                    else{
                        link = 'intranet'
                    }
                }
                else{
                    link = 'login'
                }
                break;
            case 'menu':
                setOpenMenu(!openMenu);
                break;
        }

        if(link && link.length > 0){
            window.location.href = route(link);
        }
    }

    const sxButton = { 
        color: 'white',
        fontWeight: 'bold',
        px: 2,
        py: 1,
        textTransform: 'none',
        '&:hover': {
            backgroundColor: 'rgba(255, 140, 0, 0.2)', // light orange hover
        },
        '&.active': {
            color: '#FF8C00'
        },
        flexShrink: 0
    };

    const sxButtonIcon = {
        mr: 1
    };

    const sxIcon = {
        //fontSize: 'x-large',
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingTop: '5px',
        paddingBottom: '5px'
    }

    //const darkmode = getDarkMode();

    /*
    const login = () => {
        
        // not used because if you log in it goes to the user section
        // read current url to go back again once logged in
        /*
        var path = window.location.pathname;

        var parameter = '';

        // if already on login, check if path parameter alreadh there
        if(path && path.length > 0 && path !== '/'){

            if(path === '/login'){ 
                
                const queryParameters = new URLSearchParams(window.location.search)

                const prevPath = queryParameters.get("path");

                if(prevPath && prevPath.length > 0){
                    parameter = '?path='+encodeURI(prevPath);
                }
            }
            else{
                var encoded = encodeURI(path);
                parameter = '?path='+encoded;
            }
        }

        window.location = route('login')+parameter;
        */
    /*
        window.location = route('login');
    };
    */

    //variant={darkmode ? "white" : "black"}

    const sxAppBar = { 
        padding: '0px',
        minHeight: '40px'
    };

    const sxToolbar = {
        "@media (min-width: 0px)": { 
            padding: '0px 0px',
            minHeight : '40px'
        }
    };

    if(!isPC || !showMenu){    
        sxAppBar.marginBottom = '2px';
    }

    return (        
        <div className=''>
                
            <AppBar 
                id='bartop' 
                position="static" 
                sx={sxAppBar}
            >
            
                <Toolbar sx={sxToolbar}>                        

                    <IconButton onClick={changeLanguage} id='language' size="large" sx={sxIcon}>
                        <LanguageIcon fontSize="inherit" />                  
                    </IconButton>

                    {/*
                        user &&                                                        
                        <IconButton variant={darkmode ? 'black' : 'white'} color="primary" sx={{marginRight:'5px'}}>
                            <LogoutIcon/>                  
                        </IconButton>                            
                    */}
                    
                    <Box sx={{ flexGrow: 1 }}/>

                    {
                        (user && from === 'user')?
                            <IconButton onClick={handleLogout} id='logout' size="large" sx={sxIcon}>
                                <LogoutIcon fontSize="inherit" />                  
                            </IconButton>                                                   
                        :
                            <div className='my-1 flex items-center grow justify-center'>
                                <a href='/' className='flex items-center no-underline'>
                                    <Box
                                        component="img"
                                        sx={{height: 35, mr: 1}}
                                        alt=""
                                        src={shelter?.files?.bucket && shelter?.files?.logo ? shelter.files.bucket+'/logos/'+shelter.files.logo : '/storage/protectoras.png'}
                                        id='logo'
                                    />
                                    {
                                        shelter?.header &&
                                        <span className='font-bold text-black truncate'>{shelter.header}</span>
                                    }
                                </a>
                            </div>
                    }

                    <Box sx={{ flexGrow: 1 }}/>

                    <IconButton           
                        id={from === 'contact' || from === 'contactlanding' ? 'contact-selected' : 'contact'}
                        onClick={handleContact}                             
                        size="large"
                        sx={sxIcon}
                    >
                        <ContactIcon fontSize="inherit" />                  
                    </IconButton>

                </Toolbar>

                {
                    isPC && showMenu &&
                    <>
                    <Menu 
                        user={user}
                        t={t} 
                        from={from}
                        open={openMenu} 
                        setOpen={setOpenMenu} 
                        changeLanguage={changeLanguage}
                        handleLogout={handleLogout}
                        handleContact={handleContact}            
                        shelter={shelter}
                    />
                    <Box sx={{ 
                        width: '100%', 
                        bgcolor: 'black', 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        px: 2, 
                        py: 0.5, 
                        gap: 1,
                        overflowX: 'auto',
                        whiteSpace: 'nowrap',
                        '&::-webkit-scrollbar': { height: '3px' },
                        '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(255, 140, 0, 0.5)', borderRadius: '3px' }
                    }}>
                        <Button 
                            className={value === 'home' ? 'active' : ''} 
                            onClick={() => clickIcon('home')} 
                            sx={sxButton}
                        >
                            <HomeIcon sx={sxButtonIcon}/>
                            {t('MenuBar.Home')}
                        </Button>
                        <Button 
                            className={value === 'animals' ? 'active' : ''} 
                            onClick={() => clickIcon('animals')} 
                            sx={sxButton}
                        >
                            <AnimalsIcon sx={sxButtonIcon}/>
                            {t('MenuBar.Animals')}
                        </Button>
                        <Button 
                            className={value === 'news' ? 'active' : ''} 
                            onClick={() => clickIcon('news')} 
                            sx={sxButton}
                        >
                            <NewsIcon sx={sxButtonIcon}/>
                            {t('MenuBar.News')}
                        </Button>
                        <Button 
                            className={value === 'user' ? 'active' : ''} 
                            onClick={() => clickIcon('user')} 
                            sx={sxButton}
                        >
                            <UserIcon sx={sxButtonIcon}/>
                            {t('MenuBar.User')}
                        </Button>
                        <Button 
                            className={value === 'menu' ? 'active' : ''} 
                            onClick={() => clickIcon('menu')} 
                            sx={sxButton}
                        >
                            <MenuIcon sx={sxButtonIcon}/>
                            {t('MenuBar.Menu')}
                        </Button>
                    </Box>
                    </>
                }
            
            </AppBar>
            
        </div>
    );
}
