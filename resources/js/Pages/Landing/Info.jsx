export default function Info({t}){

    return (    	
        <>
        <div className='home-div-box'>
            <div 
                className='text-center'
                dangerouslySetInnerHTML={{__html: t('landing.info.paragraph1')}}
            >                
            </div>
            <div 
                className='mt-8 text-center'
                dangerouslySetInnerHTML={{__html: t('landing.info.paragraph2')}}
            >                
            </div>
            <div 
                className='mt-8 text-center'
                dangerouslySetInnerHTML={{__html: t('landing.info.paragraph3')}}
            >
            </div>  
            <div 
                className='mt-8 text-center'
                dangerouslySetInnerHTML={{__html: t('landing.info.paragraph4')}}
            >
            </div>  
            {/*  
            <div 
                className='mt-8 text-center'
                dangerouslySetInnerHTML={{__html: t('landing.info.paragraph5')}}
            >
            </div>  
            */}
            <div 
                className='mt-8 text-center'
                dangerouslySetInnerHTML={{__html: t('landing.info.paragraph6')}}
            >
            </div>                 
            <div 
                className='mt-8 text-center'
                dangerouslySetInnerHTML={{__html: t('landing.info.paragraph7')}}
            >
            </div>                 
        </div>        
        </>
    )
}