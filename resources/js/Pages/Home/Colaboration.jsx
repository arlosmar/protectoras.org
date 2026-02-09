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

export default function Colaboration({t,shelter}){

    //const { i18n } = useTranslation('global');

    // guides are only in spanish
    //const lang = i18n.language;
    const lang = 'es';

    return (    	
        <>
        {/*
        <h1 className='title-home'>
            {t('introduction.'+shelter?.id+'.colaboration.title')}
        </h1>
        */}
        <Grid container spacing={0} className='home-div-box'>
            <Grid size={{ xs: 12, md: 2 }} className='home-div-icon'>
                <MobileScreenShareIcon className="home-icon"/>
            </Grid>
            <Grid size={{ xs: 12, md: 10 }}>
                <h1 className='subtitle-colaboration'>
                    {t('introduction.'+shelter?.id+'.colaboration.bizum')}
                </h1>
                <div 
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line1')}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line2')}}
                >                
                </div>
                <div 
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={
                        {__html: 
                            t('introduction.'+shelter?.id+'.colaboration.line3')+'<br>'+
                            t('introduction.'+shelter?.id+'.colaboration.line4')
                        }
                    }
                >                
                </div>
                <div 
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line5')}}
                >                
                </div>
                <div 
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line6')}}
                >                
                </div>  
            </Grid>           
        </Grid>
        <Grid container spacing={0} className='home-div-box'>
            <Grid size={{ xs: 12, md: 2 }} className='home-div-icon'>
                <AccountBalanceIcon className="home-icon"/>
            </Grid>
            <Grid size={{ xs: 12, md: 10 }}>             
                <h1 className='subtitle-colaboration'>
                    {t('introduction.'+shelter?.id+'.colaboration.bank')}
                </h1>
                <div 
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line7')}}
                >                
                </div>
                <div 
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line8')}}
                >                
                </div>
                <div 
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line9')}}
                >                
                </div>
                <div 
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line10')}}
                >                
                </div>
                <div 
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line11')}}
                >                
                </div>
            </Grid>
        </Grid>
        <Grid container spacing={0} className='home-div-box'>
            <Grid size={{ xs: 12, md: 2 }} className='home-div-icon'>
                <ChairIcon className="home-icon"/>
            </Grid>
            <Grid size={{ xs: 12, md: 10 }}>
                <h1 className='subtitle-colaboration'>
                    {t('introduction.'+shelter?.id+'.colaboration.materials')}
                </h1>
                <div 
                    className='paragraph-top-separation'   
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line12')}}
                >                
                </div>
                <div
                    className='home-colaboration-list'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line13')}}
                >                
                </div>
            </Grid>
        </Grid>
        <Grid container spacing={0} className='home-div-box'>
            <Grid size={{ xs: 12, md: 2 }} className='home-div-icon'>
                <HandshakeIcon className="home-icon"/>
            </Grid>
            <Grid size={{ xs: 12, md: 10 }}>
                <h1 className='subtitle-colaboration'>
                    {t('introduction.'+shelter?.id+'.colaboration.partner')}
                </h1>
                <div 
                    className='paragraph-top-separation'   
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line14',{price_partner:shelter?.prices?.price_partner})}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line15',{price_retired:shelter?.prices?.price_retired})}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line16',{price_child:shelter?.prices?.price_child})}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line17')}}
                >                
                </div>
                <div>
                    <a href={shelter?.forms?.partner} target='_blank'>
                        {t('introduction.'+shelter?.id+'.colaboration.form-line1')}
                    </a>
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.form-line2')}}
                >                
                </div>
                <div>
                    <a href={shelter?.files?.bucket+shelter?.forms?.sepa} target='_blank'>
                        {t('introduction.'+shelter?.id+'.colaboration.form-line3')}
                    </a>
                </div>  
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.form-line4')}}
                >                
                </div>              
                <div>
                    <a href={'mailto:'+shelter?.email?.colaboration?.address} target='_blank'>
                        {shelter?.email?.colaboration?.address}
                    </a>
                </div>
            </Grid>
        </Grid>
        <Grid container spacing={0} className='home-div-box'>
            <Grid size={{ xs: 12, md: 2 }} className='home-div-icon'>
                <PetsIcon className="home-icon"/>
            </Grid>
            <Grid size={{ xs: 12, md: 10 }}>
                <h1 className='subtitle-colaboration'>
                    {t('introduction.'+shelter?.id+'.colaboration.sponsorship')}
                </h1>
                <div 
                    className='paragraph-top-separation'   
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line18',{price_sponsorship:shelter?.prices?.price_sponsorship})}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line19')}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.form-sponsor-line1')}}
                >                
                </div>
                <div>
                    <a href={shelter?.forms?.sponsor} target='_blank'>
                        {t('introduction.'+shelter?.id+'.colaboration.form-sponsor-line2')}
                    </a>
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.form-sponsor-line3')}}
                >                
                </div>
                <div>
                    <a href={shelter?.files?.bucket+shelter?.forms?.sepa} target='_blank'>
                        {t('introduction.'+shelter?.id+'.colaboration.form-sponsor-line4')}
                    </a>
                </div>  
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.form-sponsor-line5')}}
                >                
                </div>              
                <div>
                    <a href={'mailto:'+shelter?.email?.colaboration?.address} target='_blank'>
                        {shelter?.email?.colaboration?.address}
                    </a>
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line20')}}
                >                
                </div>
                <div
                    id='home-colaboration-sponsorship-list'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line21',
                        {shelter:t('introduction.'+shelter?.id+'.colaboration.shelter'),
                        apu:t('introduction.'+shelter?.id+'.colaboration.apu')})
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
                <h1 className='subtitle-colaboration'>
                    {t('introduction.'+shelter?.id+'.colaboration.volunteering')}
                </h1>
                <div 
                    className='paragraph-top-separation'   
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line22')}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line23')}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line24')}}
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
                <h1 className='subtitle-colaboration'>
                    {t('introduction.'+shelter?.id+'.colaboration.hosting')}
                </h1>
                <div 
                    className='paragraph-top-separation'   
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line29')}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line30')}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line31')}}
                >                
                </div>                
                <div>
                    <a href={'https://wa.me/'+shelter?.social?.whatsapp} target='_blank'>
                        {shelter?.social?.whatsapp_noprefix}
                    </a>
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line32')}}
                >                
                </div>     
                <div>
                    <a href={shelter?.forms?.hosting} target='_blank'>
                        {t('trans.Form')}
                    </a>
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line33')}}
                >                
                </div>     
                <div>
                    <a href={shelter?.files?.bucket+shelter?.guides?.hosting[lang]} target='_blank'>
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
                <h1 className='subtitle-colaboration'>
                    {t('introduction.'+shelter?.id+'.colaboration.lottery')}
                </h1>
                <div 
                    className='paragraph-top-separation'   
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line25')}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line26')}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line27')}}
                >                
                </div>
                <div
                    className='paragraph-top-separation'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.colaboration.line28')}}
                >                
                </div>
                <div>
                    <a href={'mailto:'+shelter?.email?.colaboration?.address} target='_blank'>
                        {shelter?.email?.colaboration?.address}
                    </a>
                </div>
            </Grid>
        </Grid>
        </>
    )
}