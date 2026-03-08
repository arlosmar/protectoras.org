import { useState, useMemo, useEffect, lazy, Suspense } from 'react';
import { useTranslation } from "react-i18next";
import Toast from '@/Components/Toast'; 

import { styleTabs } from '@/Utils/Styles';

//import i18n from 'i18next';
//const lang =  i18n.language // lang === 'es' etc.

import Header from '@/Pages/Header/Header';
import { setLanguage } from "@/Utils/Cookies";

import EuroIcon from '@mui/icons-material/Euro';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ShareIcon from '@mui/icons-material/Share';
import InfoIcon from '@mui/icons-material/Info';
import PartnersIcon from '@mui/icons-material/Handshake';
import LegalIcon from '@mui/icons-material/Copyright';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { setDarkMode } from "@/Utils/Cookies";

import { useSwipeable } from 'react-swipeable';
import Sticky from '@/Components/Sticky';

const Collaboration = lazy(() => import(`./Collaboration.jsx`));
const Social = lazy(() => import(`./Social.jsx`));
const Partners = lazy(() => import(`./Partners.jsx`));
const Info = lazy(() => import(`./Info.jsx`));
const Legal = lazy(() => import(`./Legal.jsx`));

export default function Home({user,language,section,message,darkmode,deviceId,shelter}){

    /*
    const shelterId = shelter?.id && (shelter.id === 'local' || shelter?.id === 'demo') ? 'spax' : shelter?.id;
    const Collaboration = useMemo(() => lazy(() => import(`./Home/${shelterId}/Collaboration.jsx`)), [shelterId]);
    const Social = useMemo(() => lazy(() => import(`./Home/${shelterId}/Social.jsx`)), [shelterId]);
    const Partners = useMemo(() => lazy(() => import(`./Home/${shelterId}/Partners.jsx`)), [shelterId]);
    const Info = useMemo(() => lazy(() => import(`./Home/${shelterId}/Info.jsx`)), [pages/]);
    const Legal = useMemo(() => lazy(() => import(`./Home/${shelterId}/Legal.jsx`)), [shelterId]);
    */

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

    const [ tab, setTab ] = useState(
        section ? 
            section === 'legal' || section === 'terms' || section === 'policy' || section === 'cookies' ? 
                'legal' 
            : 
                section
        : 
            'info'
    );

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

    const [ tabsArray , setTabsArray ] = useState(['info','collaboration','social','partners','legal']);
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
    	<Header user={user} t={t} from='home' shelter={shelter}/>
    	<main {...handlers}>            
    		{
                !isApplicationOrWebApp &&
                <h1 className="text-center mt-4 text-lg font-bold">
                    {t('introduction.title')}
                </h1>
            }            
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
                    <Tab icon={<InfoIcon sx={sxIcon}/>} value="info" sx={sx}/>
                    <Tab icon={<EuroIcon sx={sxIcon}/>} value="collaboration" sx={sx}/>
                    <Tab icon={<ShareIcon sx={sxIcon}/>} value="social" sx={sx}/>
					<Tab icon={<PartnersIcon sx={sxIcon}/>} value="partners" sx={sx}/>
                    <Tab icon={<LegalIcon sx={sxIcon}/>} value="legal" sx={sx}/>
                </Tabs>
                
                <div className='content-container'>
                {
                    tab === 'collaboration' ?
                        <Suspense>
                        <Collaboration 
                            t={t} 
                            shelter={shelter}
                        />
                        </Suspense>
                    :						
                        tab === 'social' ?
                            <Suspense>
                            <Social t={t} shelter={shelter}/>
                            </Suspense>
                        :
                            tab === 'partners' ?
                                <Suspense>
                                <Partners t={t} shelter={shelter}/>
                                </Suspense>
                            :
                                tab === 'legal' ?
                                    <Suspense>
                                    <Legal t={t} section={section} shelter={shelter}/>
                                    </Suspense>
                                :                                                        
                                    <Suspense>
                                    <Info t={t} shelter={shelter}/>
                                    </Suspense>                                
                }
                </div>
            </div>
    	</main>
    	</>
    )
}