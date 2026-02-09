import { useState, useMemo, useEffect, lazy, Suspense } from 'react';
import { useTranslation } from "react-i18next";
import Toast from '@/Components/Toast'; 

import { styleTabs } from '@/Utils/Styles';

//import i18n from 'i18next';
//const lang =  i18n.language // lang === 'es' etc.

import Header from '@/Pages/Header/Header';
import { setLanguage } from "@/Utils/Cookies";

//import CommentsIcon from '@mui/icons-material/Comment';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ShareIcon from '@mui/icons-material/Share';
import InfoIcon from '@mui/icons-material/Info';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SheltersIcon from '@mui/icons-material/Pets';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { setDarkMode } from "@/Utils/Cookies";

const Shelters = lazy(() => import("@/Pages/Landing/Shelters"));
const Info = lazy(() => import("@/Pages/Landing/Info"));
//const Comments = lazy(() => import("@/Pages/Landing/Comments"));
const Social = lazy(() => import("@/Pages/Landing/Social"));
const Partners = lazy(() => import("@/Pages/Landing/Partners"));


import { useSwipeable } from 'react-swipeable';
import Sticky from '@/Components/Sticky';

export default function Landing({language,message,darkmode,deviceId,section,domains}){

	const { t, i18n } = useTranslation('global');

	useMemo(() => {

        if(language){
			i18n.changeLanguage(language);
			setLanguage(language);
		}

        // check if darkmode from the app
        if(darkmode){
            setDarkMode(darkmode,false);
        }

        if(deviceId){
            setDeviceId(deviceId);
        }

    }, []);


	const [ tab, setTab ] = useState(section ? section : "shelters");

    const { stickyRef, sticky, offset, height, isApplicationOrWebApp } = Sticky();

    const handleTabChange = (event, newValue) => {
        
        setTab(newValue);
        
        if(sticky){            
            window.scrollTo({top: offset});
        }

        // change url on the browser
        var url = route("home")+'/'+newValue;
        window.history.pushState({path:url},'',url);
    };

    const { sxTabs, sx, sxIcon } = styleTabs();

    const [ tabsArray , setTabsArray ] = useState(['shelters','info','social','partners']);
    const [ tabsLength , setTabsLength ] = useState(4);
    const [ posTab , setPosTab ] = useState(0);

    const handleSwipe = (e,move) => {

        var newPos = posTab+move;

        if(newPos >= 0 && newPos < tabsLength){
            setPosTab(newPos);
            handleTabChange(e,tabsArray[newPos]);
        }
    }

    // https://commerce.nearform.com/open-source/react-swipeable/
    const handlers = useSwipeable({
        onSwipedRight: (e) => handleSwipe(e,-1),
        onSwipedLeft: (e) => handleSwipe(e,1),        
        //onTouchEndOrOnMouseUp: (e) => handleSwipe("User Touched!", e),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    const [ toastMsg, setToastMsg ] = useState('');
    const [ toastErrorMsg, setToastErrorMsg ] = useState('');
    const [ openToast, setOpenToast ] = useState(false);

    useEffect(() => {        
        setToastMsg(t(message));
        setOpenToast(true);
    },[message]);
    
    return (
    	<>
        <Toast 
            open={openToast}
            setOpen={setOpenToast}
            message={toastMsg}
            error={toastErrorMsg}
        />
    	<Header t={t} from='landing'/>
    	<main {...handlers}>            
    		{/*
                !isApplicationOrWebApp &&
                <h1 className="text-center mt-4 text-lg font-bold">
                    {t('introduction.'+shelter?.id+'.title')}
                </h1>
            */}            
            {/*
			<div className='text-center'>
				<img
					className='mx-auto'
					alt=""
					src='/storage/protectoras.png'
					id='logo-home'
				/>
			</div>
            */}
			<div className='tabs-container' style={{marginTop: sticky ? height+'px': '0px'}}>
                <Tabs 	
                    id="tabs"
                    ref={stickyRef} 
                    sx={sxTabs}
                    className={`${sticky ? 'sticky-item' : ''}`}
                    value={tab} 
                    onChange={handleTabChange}
					variant="scrollable"                    
                >
                    <Tab icon={<SheltersIcon sx={sxIcon}/>} value="shelters" sx={sx}/>
                    <Tab icon={<InfoIcon sx={sxIcon}/>} value="info" sx={sx}/>                    
                    <Tab icon={<ShareIcon sx={sxIcon}/>} value="social" sx={sx}/>
					<Tab icon={<HandshakeIcon sx={sxIcon}/>} value="partners" sx={sx}/>
                    {/*<Tab icon={<CommentsIcon sx={sxIcon}/>} value="comments" sx={sx}/>*/}
                </Tabs>
                
                <div className='content-container'>
                {
                    tab === 'info' ?
                        <Suspense>
                        <Info t={t}/>
                        </Suspense>
                    :
                        tab === 'social' ?
                            <Suspense>
                            <Social 
                                t={t}                                
                            />
                            </Suspense>
                        :						    						
                            tab === 'partners' ?
                                <Suspense>
                                <Partners t={t}/>
                                </Suspense>
                            :    							    								
                                <Suspense>
                                <Shelters t={t} domains={domains}/>
                                </Suspense>
                }
                </div>
            </div>
    	</main>
    	</>
    )
}