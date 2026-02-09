import { useState } from 'react';

import { styleSubTabs } from '@/Utils/Styles';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import InfoIcon from '@mui/icons-material/Info';
import AnimalsIcon from '@mui/icons-material/Pets';

import Info from '@/Pages/Animals/Sanctuary/Info';
import CarouselAnimals from '@/Pages/Animals/CarouselAnimals';

export default function Sanctuary({user,t,subsection,setSubsection,animals,
    baseUrl,imagesPaths,page,setPage,options,itemsPerPage}){

    const [ tab, setTab ] = useState(subsection ? subsection : "info");

    const handleTabChange = (event, newValue) => {
        
        setTab(newValue);

        // to inform the parent view and call by ajax to get animals
        setSubsection(newValue);

        // reset page in case it came by url
        setPage(1);

        // change url on the browser
        var url = route("animals")+'/sanctuary/'+newValue;
        window.history.pushState({path:url},'',url);
    };

   const { sxSubTabs, sx, sxIcon } = styleSubTabs();

    return (        
        <>
        {/*
        <h1 className='title-home'>
            {t('animals.sanctuary.title')}
        </h1>
        */}
        <div className='subtabs-container'>
            <Tabs
                value={tab}
                sx={sxSubTabs} 
                onChange={handleTabChange}                                     
                variant="scrollable"
            >
                <Tab icon={<InfoIcon sx={sxIcon}/>} value="info" sx={sx} iconPosition="top" label={t('animals.sanctuary.info.icon')}/>
                <Tab icon={<AnimalsIcon sx={sxIcon}/>} value="animals" sx={sx} iconPosition="top" label={t('animals.sanctuary.animals.icon')}/>                
            </Tabs>
            <div className='subcontent-container'>
            {
                tab === 'info' ?
                    <Info t={t}/>
                :                       
                    tab === 'animals' ?
                        <CarouselAnimals 
                            user={user}
                            origin='sanctuary'
                            title={t('animals.sanctuary.animals.title')}
                            t={t} 
                            animals={animals}
                            imagePath={imagesPaths?.animals_external}
                            imagesPaths={imagesPaths}
                            page={page}
                            options={options}
                            baseUrl={baseUrl}
                            itemsPerPage={itemsPerPage}
                        />
                    :                       
                        ''
            }
            </div>
        </div>
        </>
    )
}