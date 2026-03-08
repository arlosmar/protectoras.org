import { useState } from 'react';

import { styleSubTabs } from '@/Utils/Styles';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import TermsIcon from '@mui/icons-material/LibraryBooks';
import PolicyIcon from '@mui/icons-material/Lock';
import CookiesIcon from '@mui/icons-material/Cookie';

export default function Legal({t,section,shelter}){

    const [ tab, setTab ] = useState(
        (section === 'terms' || section === 'policy' || section === 'cookies') 
            ? section 
            : 'terms'
    );

    const { sxSubTabs, sx, sxIcon } = styleSubTabs();

    const handleTabChange = (event, newValue) => {
        
        setTab(newValue);        

        // change url on the browser
        var url = route("home")+'/'+newValue;
        window.history.pushState({path:url},'',url);
    };

    const [ tabsArray , setTabsArray ] = useState(['terms','policy','cookies']);
    const [ tabsLength , setTabsLength ] = useState(3);

    return (
    	<div className='home-div-box'>
            <Tabs                         
                sx={sxSubTabs}                
                value={tab} 
                onChange={handleTabChange}
                variant="scrollable"
            >
                <Tab icon={<TermsIcon sx={sxIcon}/>} label={t('terms.icon')} iconPosition="top" value="terms" sx={sx}/>
                <Tab icon={<PolicyIcon sx={sxIcon}/>} label={t('policy.icon')} iconPosition="top" value="policy" sx={sx}/>                    
                <Tab icon={<CookiesIcon sx={sxIcon}/>} label={t('cookies.icon')} iconPosition="top" value="cookies" sx={sx}/>                    
            </Tabs>
            <div className='subcontent-container pt-4'>            
                <h1 className='title-info mt-4'>
                    {t(tab+'.title')}
                </h1>               
                <div 
                    className='mt-8 md:mx-4 mx-1'
                    dangerouslySetInnerHTML={{__html: t(tab+'.content')}}
                >                
                </div>               
            </div>            
        </div>
    )
}