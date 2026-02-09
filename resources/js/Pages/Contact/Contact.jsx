import Header from '@/Pages/Header/Header';
import { useState, useEffect, useRef } from 'react';
import Input from '@/Components/Input';
import { useForm } from '@inertiajs/react';
import Toast from '@/Components/Toast';

import { useTranslation } from "react-i18next";

import Grid from '@mui/material/Grid2';

import { installPWA, listenerPWA, removeListenerPWA } from "@/Utils/PWA";
import Collapse from '@mui/material/Collapse';

import PWAPrompt from 'react-ios-pwa-prompt';
import { checkIsApple, checkIsAndroid, isApp } from '@/Utils/Device';
import { getDomain } from '@/Utils/URL';

export default function Contact({user,status,config,shelter}) {

    const { t } = useTranslation('global');
    const domain = getDomain();

    const [ isApplication , setIsApplication ] = useState(isApp());

    const [ isApple, setIsApple ] = useState(checkIsApple());
    const [ isAndroid, setIsAndroid ] = useState(checkIsAndroid());

    const [ showInstallApp, setShowInstallApp ] = useState(isApple || isAndroid ? true : false);    
    const [ installPrompt, setInstallPrompt ] = useState(null);
    const [ openInstallApple, setOpenInstallApple ] = useState(false);
    
    const { data, setData, post, errors, processing, reset, recentlySuccessful } = useForm({
        name: '',
        email: '',        
        message: ''
    });

    const myRef = useRef(null);    

    const listener = (event) => {        
        event.preventDefault();
        setShowInstallApp(true);
        setInstallPrompt(event);
    }

    const handleInstall = () => {

        // app on the store
        if(isAndroid){
            window.location.href = 'https://play.google.com/store/apps/details?id=com.app.spax';
        }
        else{
            if(isApple){
                setOpenInstallApple(true);
            }
            else{
                installPWA('contact',installPrompt,listener,setInstallPrompt);
            }
        }
    }

    const handleClose = () => {                
        setOpenInstallApple(false);        
    }

    useEffect(() => {            
        listenerPWA(listener);
    },[]); 

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.send'));
    };

    const handleInput = (e) => {
        setData(e.target.name,e.target.value);
    }

    const [ openToast, setOpenToast ] = useState(recentlySuccessful || errors.error ? true : false);

    useEffect(() => {

        if(
            recentlySuccessful || 
            (errors?.error && errors.error.length > 0)
        ){
            setOpenToast(true);
        }

        if(recentlySuccessful){
            setData({...data, 'name' : '', 'email' : '', 'message' : ''});
        }

        // scroll to form
        if(Object.keys(errors).length > 0){
            //myRef.current.scrollIntoView();
            const element = document.getElementById('name');            
            if(element){    
                element.scrollIntoView({behavior: 'smooth'});
            }
        }

    }, [recentlySuccessful,errors]);

    const [ appInstalled, setAppInstalled ] = useState(false);
    
    //https://web.dev/articles/get-installed-related-apps?hl=es-419
    const checkAppInstalled = async () => {
        
        const relatedApps = await navigator.getInstalledRelatedApps();    

        if(relatedApps && relatedApps.length > 0){
            setAppInstalled(true);   

            /*
            relatedApps.forEach((app) => {            
                alert(app.id+app.platform+app.url);            
            });
            */          
        }
    }

    useEffect(() => {
        if(!isApplication){
            checkAppInstalled();
        }
    },[]);

    return (
        <>
        {
            isApple &&
            <PWAPrompt 
                isShown={openInstallApple}
                delay={1}
                onClose={handleClose}
                copyTitle={t('pwa.apple.title')}
                copySubtitle={t('pwa.apple.subtitle')}
                copyDescription={t('pwa.apple.description')}
                copyShareStep={t('pwa.apple.share')}
                copyAddToHomeScreenStep={t('pwa.apple.add')}                
                appIconPath={shelter?.logo ? shelter.logo : '/storage/protectoras.png'}
            />  
        }

        <Toast 
            open={openToast}
            setOpen={setOpenToast}
            message={recentlySuccessful ? t('trans.Sent-Male') : null}
            error={errors?.error}
        />
        <Header user={user} t={t} from='contact' config={config} shelter={shelter}/>
        <main>
            {/*
            <h1 className="title">
                {t('contact.title')}
            </h1>
            */}
            <Grid container spacing={0} className='pt-4'>
                <Grid size={{ xs: 12 }} className="flex justify-center pb-8">
                     <a href='/' className="back-button">
                        {t('trans.Back')}
                    </a>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }} className='mb-8 text-center'>
                    {
                        !isApplication && !appInstalled &&
                        <Collapse 
                            in={showInstallApp}
                            timeout={1000}
                        >                        
                            <>
                            <h1 className='subtitle-home'>
                                {t('pwa.text')}
                            </h1>
                            <button 
                                className='install-app-button'
                                onClick={handleInstall}
                            >
                                {t('pwa.button')}
                            </button>
                            </>
                        </Collapse>
                    }
                    {
                        config?.contact?.title1 &&
                        <>
                        <h1 className={`subtitle-home ${!appInstalled && showInstallApp ? 'paragraph-top-separation' : ''}`}>
                            {t('contact.'+domain+'.title1')}
                        </h1>
                        <a href={`mailto:${config?.email?.info?.address || config?.email?.contact?.address}`} target='_blank'>
                            {config?.email?.info?.address || config?.email?.contact?.address}
                        </a>
                        </>
                    }
                    {
                        config?.social?.phone &&
                        <>
                        <h1 className='subtitle-home paragraph-top-separation'>
                            {t('contact.'+domain+'.phone')}
                        </h1>
                        <a href={'tel:'+config?.social?.phone} target='_blank'>
                            {config?.social?.phone}
                        </a>
                        </>
                    }
                    {
                        config?.social?.whatsapp &&
                        <>
                        <h1 className='subtitle-home paragraph-top-separation'>
                            {t('contact.'+domain+'.whatsapp')}
                        </h1>
                        <a href={'https://wa.me/'+config?.social?.whatsapp} target='_blank'>
                            {config?.social?.whatsapp}
                        </a>
                        </>
                    }
                    {
                        config?.contact?.title2 &&
                        <>
                        <h1 className='subtitle-home paragraph-top-separation'>
                            {t('contact.'+domain+'.title2')}
                        </h1>
                        <a href={'mailto:'+config?.email?.colaboration?.address} target='_blank'>
                            {config?.email?.colaboration?.address}
                        </a>
                        </>
                    }
                    {
                        config?.contact?.title3 &&
                        <>
                        <h1 className='subtitle-home paragraph-top-separation'>
                            {t('contact.'+domain+'.title3')}
                        </h1>
                        <div>
                            {t('contact.info.shift-adoptions')}
                        </div>
                        <a href={'mailto:'+config?.email?.adoptions?.address} target='_blank'>
                            {config?.email?.adoptions?.address}
                        </a>
                        </>
                    }
                    {
                        config?.contact?.title4 &&
                        <>
                        <h1 className='subtitle-home paragraph-top-separation'>
                            {t('contact.'+domain+'.title4')}
                        </h1>
                        <a href={'mailto:'+config?.email?.volunteering?.address} target='_blank'>
                            {config?.email?.volunteering?.address}
                        </a>
                        </>
                    }
                    {
                        config?.contact?.shift_phone_title &&
                        <>
                        <h1 className='subtitle-home paragraph-top-separation'>
                            {t('contact.'+domain+'.shift-phone-title')}
                        </h1>
                        <div>
                            {t('contact.'+domain+'.shift-phone-line1')}<br/>
                            {t('contact.'+domain+'.shift-phone-line2')}
                        </div>
                        <div className='paragraph-top-separation'>
                            {t('contact.'+domain+'.shift-phone-footer1')}<br/>
                            {t('contact.'+domain+'.shift-phone-footer2')}
                        </div>
                        </>
                    }
                    {
                        config?.contact?.shift_live_title &&
                        <>
                        <h1 className='subtitle-home paragraph-top-separation'>
                            {t('contact.'+domain+'.shift-live-title')}
                        </h1>
                            <div>
                            {t('contact.'+domain+'.shift-live-line1')}
                        </div>
                        </>
                    }
                    {
                        config?.contact?.title5 &&                        
                        <div className='paragraph-top-separation'>
                            {t('contact.info.title5')}
                        </div>                        
                    }
                </Grid>
                <Grid size={{ xs: 12, md: 7 }} className=''>
                    <form onSubmit={submit}>
                        <div>
                            <Input
                                ref={myRef}
                                id="name"
                                name="name"
                                type="text"
                                value={data.name}                        
                                autoComplete="name"                                
                                onChange={handleInput}                        
                                placeholder={t('contact.form.name')}                        
                                error={errors.name}
                            />
                        </div>

                        <div className="paragraph-top-separation">
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={data.email}                        
                                autoComplete="email"                        
                                onChange={handleInput}                        
                                placeholder={t('contact.form.email')}                        
                                error={errors.email}
                                required
                            />
                        </div>

                        <div className="paragraph-top-separation">
                            <Input
                                id="message"
                                name="message"
                                type="message"
                                value={data.message}                        
                                autoComplete="new-password"                        
                                onChange={handleInput}                        
                                placeholder={t('contact.form.message')}                        
                                error={errors.message}
                                multiline
                                rows={6}
                                required
                            />                   
                        </div>

                        <div className="text-center paragraph-top-separation">
                            <button className={`login-button mx-1 ${processing && 'opacity-25'}`} disabled={processing}>
                                {t('contact.form.send')}
                            </button>
                        </div>

                    </form>
                </Grid>
            </Grid>
        </main>
        </>
    );
}
