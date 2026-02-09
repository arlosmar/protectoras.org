import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export default function Info({t,shelter}){

    return (    	
        <>
        {/*
        <h1 className='title-home'>
            {t('introduction.'+shelter?.id+'.info.title')}
        </h1>
        */}
        <div className='home-div-box'>
            <div 
                className='text-center'
                dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.info.paragraph1')}}
            >                
            </div>
            <h1 className='subtitle-home mt-8 text-center'>
                {t('introduction.'+shelter?.id+'.info.paragraph2-title')}
            </h1>
            <div 
                className='text-center'
                dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.info.paragraph2')}}
            >                
            </div>
            <div className='mt-4'>
                <a href={shelter?.files?.bucket+'/images/info/image1.jpg'} target="_blank">
                    <img
                        className='info-image mx-auto'
                        alt="info"
                        src={shelter?.files?.bucket+'/images/info/image1.jpg'}
                        id='info-image'
                    />
                </a>
            </div>
            <div 
                className='text-center'
                dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.info.paragraph2-footer')}}
            >
            </div>
            <div 
                className='mt-8 text-center'
                dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.info.paragraph3')}}
            >
            </div>
            {/*
            <div className='home-div-box mt-8'>
                <h1 className='subtitle-home text-center'>
                    {t('introduction.'+shelter?.id+'.info.poem-title')}
                </h1>
                <div 
                    className='text-center mt-4'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.info.poem')}}
                >                
                </div>
                <div 
                    className='text-right font-bold mt-4'
                    dangerouslySetInnerHTML={{__html: t('introduction.'+shelter?.id+'.info.poem-footer')}}
                >                
                </div>
            </div>
            */}
        </div>
        <div className='flex justify-between'>
            <div className='w-1/3 px-1'>
                <a className='info-button' href={route('terms')}>
                    {t('info.terms.icon')}
                </a>
            </div>
            <div className='w-1/3 px-1'>
                <a className='info-button' href={route('policy')}>
                    {t('info.policy.icon')}
                </a>
            </div>
            <div className='w-1/3 px-1'>
                <a className='info-button' href={route('cookies')}>
                    {t('info.cookies.icon')}
                </a>
            </div>
        </div>
        </>
    )
}