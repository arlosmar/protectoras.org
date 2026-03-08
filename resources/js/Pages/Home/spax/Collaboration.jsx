//import { useTranslation } from "react-i18next";
import Grid from '@mui/material/Grid2';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PetsIcon from '@mui/icons-material/Pets';
import ChairIcon from '@mui/icons-material/Chair';
import CasinoIcon from '@mui/icons-material/Casino';
import HomeIcon from '@mui/icons-material/Home';

export default function Collaboration({t,shelter}){

    //const { i18n } = useTranslation('global');

    // guides are only in spanish
    //const lang = i18n.language;
    const lang = 'es';

    return (    	
        <>
        {/*
        <h1 className='title-home'>
            {t('introduction.collaboration.title')}
        </h1>
        */}
        <Grid container spacing={0} className='home-div-box'>
            <Grid size={{ xs: 12, md: 2 }} className='home-div-icon'>
                <MobileScreenShareIcon className="home-icon"/>
            </Grid>
            <Grid size={{ xs: 12, md: 10 }}>
                <h1 className='subtitle-collaboration'>
                    {t('introduction.collaboration.bizum')}
                </h1>
                <div 
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line1')}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line2')}}
                >                
                </div>
                <div 
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={
                        {__html: 
                            t('introduction.collaboration.line3')+'<br>'+
                            t('introduction.collaboration.line4')
                        }
                    }
                >                
                </div>
                <div 
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line5')}}
                >                
                </div>
                <div 
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line6')}}
                >                
                </div>  
            </Grid>           
        </Grid>
        <Grid container spacing={0} className='home-div-box'>
            <Grid size={{ xs: 12, md: 2 }} className='home-div-icon'>
                <AccountBalanceIcon className="home-icon"/>
            </Grid>
            <Grid size={{ xs: 12, md: 10 }}>             
                <h1 className='subtitle-collaboration'>
                    {t('introduction.collaboration.bank')}
                </h1>
                <div 
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line7')}}
                >                
                </div>
                <div 
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line8')}}
                >                
                </div>
                <div 
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line9')}}
                >                
                </div>
                <div 
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line10')}}
                >                
                </div>
                <div 
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line11')}}
                >                
                </div>
            </Grid>
        </Grid>
        <Grid container spacing={0} className='home-div-box'>
            <Grid size={{ xs: 12, md: 2 }} className='home-div-icon'>
                <ChairIcon className="home-icon"/>
            </Grid>
            <Grid size={{ xs: 12, md: 10 }}>
                <h1 className='subtitle-collaboration'>
                    {t('introduction.collaboration.materials')}
                </h1>
                <div 
                    className='paragraph-top-separation'   
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line12')}}
                >                
                </div>
                <div
                    className='home-collaboration-list'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line13')}}
                >                
                </div>
            </Grid>
        </Grid>
        <Grid container spacing={0} className='home-div-box'>
            <Grid size={{ xs: 12, md: 2 }} className='home-div-icon'>
                <HandshakeIcon className="home-icon"/>
            </Grid>
            <Grid size={{ xs: 12, md: 10 }}>
                <h1 className='subtitle-collaboration'>
                    {t('introduction.collaboration.partner')}
                </h1>
                <div 
                    className='paragraph-top-separation'   
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line14',{price_partner:shelter?.prices?.price_partner})}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line15',{price_retired:shelter?.prices?.price_retired})}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line16',{price_child:shelter?.prices?.price_child})}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line17')}}
                >                
                </div>
                <div>
                    <a href={shelter?.forms?.partner} target='_blank'>
                        {t('introduction.collaboration.form-line1')}
                    </a>
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.form-line2')}}
                >                
                </div>
                <div>
                    <a href={shelter?.forms?.sepa} target='_blank'>
                        {t('introduction.collaboration.form-line3')}
                    </a>
                </div>  
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.form-line4')}}
                >                
                </div>              
                <div>
                    <a href={'mailto:'+shelter?.email?.collaboration?.address} target='_blank'>
                        {shelter?.email?.collaboration?.address}
                    </a>
                </div>
            </Grid>
        </Grid>
        <Grid container spacing={0} className='home-div-box'>
            <Grid size={{ xs: 12, md: 2 }} className='home-div-icon'>
                <PetsIcon className="home-icon"/>
            </Grid>
            <Grid size={{ xs: 12, md: 10 }}>
                <h1 className='subtitle-collaboration'>
                    {t('introduction.collaboration.sponsorship')}
                </h1>
                <div 
                    className='paragraph-top-separation'   
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line18',{price_sponsorship:shelter?.prices?.price_sponsorship})}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line19')}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.form-sponsor-line1')}}
                >                
                </div>
                <div>
                    <a href={shelter?.forms?.sponsor} target='_blank'>
                        {t('introduction.collaboration.form-sponsor-line2')}
                    </a>
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.form-sponsor-line3')}}
                >                
                </div>
                <div>
                    <a href={shelter?.forms?.sepa} target='_blank'>
                        {t('introduction.collaboration.form-sponsor-line4')}
                    </a>
                </div>  
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.form-sponsor-line5')}}
                >                
                </div>              
                <div>
                    <a href={'mailto:'+shelter?.email?.collaboration?.address} target='_blank'>
                        {shelter?.email?.collaboration?.address}
                    </a>
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line20')}}
                >                
                </div>
                <div
                    id='home-collaboration-sponsorship-list'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line21',
                        {shelter:t('introduction.collaboration.shelter'),
                        apu:t('introduction.collaboration.apu')})
                    }}
                >                
                </div>
            </Grid>
        </Grid>
        <Grid container spacing={0} className='home-div-box'>
            <Grid size={{ xs: 12, md: 2 }} className='home-div-icon'>
                <VolunteerActivismIcon className="home-icon"/>
            </Grid>
            <Grid size={{ xs: 12, md: 10 }}>
                <h1 className='subtitle-collaboration'>
                    {t('introduction.collaboration.volunteering')}
                </h1>
                <div 
                    className='paragraph-top-separation'   
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line22')}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line23')}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line24')}}
                >                
                </div>
                <div>
                    <a href={'mailto:'+shelter?.email?.volunteering?.address} target='_blank'>
                        {shelter?.email?.volunteering?.address}
                    </a>
                </div>
            </Grid>
        </Grid>
        <Grid container spacing={0} className='home-div-box'>
            <Grid size={{ xs: 12, md: 2 }} className='home-div-icon'>
                <HomeIcon className="home-icon"/>
            </Grid>
            <Grid size={{ xs: 12, md: 10 }}>
                <h1 className='subtitle-collaboration'>
                    {t('introduction.collaboration.hosting')}
                </h1>
                <div 
                    className='paragraph-top-separation'   
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line29')}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line30')}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line31')}}
                >                
                </div>                
                <div>
                    <a href={'https://wa.me/'+shelter?.social?.whatsapp} target='_blank'>
                        {shelter?.social?.whatsapp_noprefix}
                    </a>
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line32')}}
                >                
                </div>     
                <div>
                    <a href={shelter?.forms?.hosting} target='_blank'>
                        {t('trans.Form')}
                    </a>
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line33')}}
                >                
                </div>     
                <div>
                    <a href={shelter?.guides?.hosting[lang]} target='_blank'>
                        {t('trans.Link')}
                    </a>
                </div>
            </Grid>
        </Grid>
        <Grid container spacing={0} className='home-div-box'>
            <Grid size={{ xs: 12, md: 2 }} className='home-div-icon'>
                <CasinoIcon className="home-icon"/>
            </Grid>
            <Grid size={{ xs: 12, md: 10 }}>
                <h1 className='subtitle-collaboration'>
                    {t('introduction.collaboration.lottery')}
                </h1>
                <div 
                    className='paragraph-top-separation'   
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line25')}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line26')}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line27')}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.collaboration.line28')}}
                >                
                </div>
                <div>
                    <a href={'mailto:'+shelter?.email?.collaboration?.address} target='_blank'>
                        {shelter?.email?.collaboration?.address}
                    </a>
                </div>
            </Grid>
        </Grid>
        </>
    )
}