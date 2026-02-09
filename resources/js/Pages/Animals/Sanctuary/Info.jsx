import TargetIcon from '@mui/icons-material/AdsClick';
import RelationshipIcon from '@mui/icons-material/Extension';
import FundingIcon from '@mui/icons-material/Savings';
import DiffusionIcon from '@mui/icons-material/Campaign';
import AgentsIcon from '@mui/icons-material/Handshake';
import OperationIcon from '@mui/icons-material/CalendarMonth';
import FocusIcon from '@mui/icons-material/Favorite';
import CharacteristicsIcon from '@mui/icons-material/Foundation';
import DestinatariesIcon from '@mui/icons-material/Pets';

export default function Info({ t }) {

    return ( 
        <>
        <div className='home-div-box'>
            <div className='flex justify-center items-center'>
                <div className='pe-1'>
                    <TargetIcon/>
                </div>
                <div className='mt-1'>
                    <h1 className='subtitle-home'>
                        {t('animals.sanctuary.info.title-target')}
                    </h1>
                </div>
            </div>
            <div
                className='paragraph-top-separation' 
                dangerouslySetInnerHTML={{__html: t('animals.sanctuary.info.line1')}}
            >                
            </div>
        </div>
        <div className='home-div-box'>
            <div className='flex justify-center items-center'>
                <div className='pe-1'>
                    <DestinatariesIcon/>
                </div>
                <div className='mt-1'>
                    <h1 className='subtitle-home'>
                        {t('animals.sanctuary.info.title-destinataries')}
                    </h1>
                </div>
            </div>
            <div 
                className='paragraph-top-separation animals-sanctuary-info-list'
                dangerouslySetInnerHTML={{__html: t('animals.sanctuary.info.line2')}}
            >                
            </div>
        </div>
        <div className='home-div-box'>
            <div className='flex justify-center items-center'>
                <div className='pe-1'>
                    <CharacteristicsIcon/>
                </div>
                <div className='mt-1'>
                    <h1 className='subtitle-home'>
                        {t('animals.sanctuary.info.title-characteristics')}
                    </h1>
                </div>
            </div>
            <div 
                className='paragraph-top-separation animals-sanctuary-info-list'
                dangerouslySetInnerHTML={{__html: t('animals.sanctuary.info.line3')}}
            >                
            </div>
        </div>
        <div className='home-div-box'>
            <div className='flex justify-center items-center'>
                <div className='pe-1'>
                    <FocusIcon/>
                </div>
                <div className='mt-1'>
                    <h1 className='subtitle-home'>
                        {t('animals.sanctuary.info.title-focus')}
                    </h1>
                </div>
            </div>
            <div 
                className='paragraph-top-separation animals-sanctuary-info-list'
                dangerouslySetInnerHTML={{__html: t('animals.sanctuary.info.line4')}}
            >                
            </div>
        </div>
        <div className='home-div-box'>
            <div className='flex justify-center items-center'>
                <div className='pe-1'>
                    <OperationIcon/>
                </div>
                <div className='mt-1'>
                    <h1 className='subtitle-home'>
                        {t('animals.sanctuary.info.title-operation')}
                    </h1>
                </div>
            </div>
            <div 
                className='paragraph-top-separation animals-sanctuary-info-list'
                dangerouslySetInnerHTML={{__html: t('animals.sanctuary.info.line5')}}
            >                
            </div>
        </div>
        <div className='home-div-box'>
            <div className='flex justify-center items-center'>
                <div className='pe-1'>
                    <AgentsIcon/>
                </div>
                <div className='mt-1'>
                    <h1 className='subtitle-home'>
                        {t('animals.sanctuary.info.title-agents')}
                    </h1>
                </div>
            </div>
            <div 
                className='paragraph-top-separation animals-sanctuary-info-list'
                dangerouslySetInnerHTML={{__html: t('animals.sanctuary.info.line6')}}
            >                
            </div>
        </div>
        <div className='home-div-box'>
            <div className='flex justify-center items-center'>
                <div className='pe-1'>
                    <DiffusionIcon/>
                </div>
                <div className='mt-1'>
                    <h1 className='subtitle-home'>
                        {t('animals.sanctuary.info.title-diffusion')}
                    </h1>
                </div>
            </div>
            <div 
                className='paragraph-top-separation animals-sanctuary-info-list'
                dangerouslySetInnerHTML={{__html: t('animals.sanctuary.info.line7')}}
            >                
            </div>
        </div>
        <div className='home-div-box'>
            <div className='flex justify-center items-center'>
                <div className='pe-1'>
                    <FundingIcon/>
                </div>
                <div className='mt-1'>
                    <h1 className='subtitle-home'>
                        {t('animals.sanctuary.info.title-funding')}
                    </h1>
                </div>
            </div>
            <div 
                className='paragraph-top-separation animals-sanctuary-info-list'
                dangerouslySetInnerHTML={{__html: t('animals.sanctuary.info.line8')}}
            >                
            </div>
        </div>
        <div className='home-div-box'>
            <div className='flex justify-center items-center'>
                <div className='pe-1'>
                    <RelationshipIcon/>
                </div>
                <div className='mt-1'>
                    <h1 className='subtitle-home'>
                        {t('animals.sanctuary.info.title-relationship')}
                    </h1>
                </div>
            </div>
            <div 
                className='paragraph-top-separation animals-sanctuary-info-list'
                dangerouslySetInnerHTML={{__html: t('animals.sanctuary.info.line9')}}
            >                
            </div>
        </div>
        </>
    )
}