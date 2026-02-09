import Grid from '@mui/material/Grid2';

export default function Partners({t,partners}){

    return (    	
        <>
        {/*
        <h1 className='title-home'>
            {t('introduction.partners.title')}
        </h1>
        */}
        {
            partners?.names && partners.names.length > 0 ?
            <> 
            {/*
            <h1 className='title-subsection'>
                {t('introduction.partners.companies.title')}
            </h1>
            */}
            {
                partners.names.map((item,index) => {

                    if(index % 2 === 0){

                        return (
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 12, sm: 6 }} className='partners-div-even'>
                                    {
                                        partners.names[index] && partners.names[index].length > 0 &&
                                        <h1 className='partners-title'>{partners.names[index]}</h1>
                                    }
                                    {
                                        (partners.links[index] && partners.links[index].length > 0) ?
                                            <a href={partners.links[index]} target="_blank">
                                                <img
                                                    className='partners-image'
                                                    alt={partners.logos[index]}
                                                    src={'/images/partners/'+partners.logos[index]}
                                                />
                                            </a>
                                        :
                                            <img
                                                className='partners-image'
                                                alt={partners.logos[index]}
                                                src={'/images/partners/'+partners.logos[index]}
                                            />
                                    }
                                </Grid>
                                {
                                    partners.logos[index+1] &&                                    
                                    <Grid size={{ xs: 12, sm: 6 }} className='partners-div-odd'>
                                        {
                                            partners.names[index+1] && partners.names[index+1].length > 0 &&
                                            <h1 className='partners-title'>{partners.names[index+1]}</h1>
                                        }
                                        {
                                            (partners.links[index+1] && partners.links[index+1].length > 0) ?
                                                <a href={partners.links[index+1]} target="_blank">
                                                    <img
                                                        className='partners-image'
                                                        alt={partners.logos[index+1]}
                                                        src={'/images/partners/'+partners.logos[index+1]}
                                                    />
                                                </a>
                                            :
                                                <img
                                                    className='partners-image'
                                                    alt={partners.logos[index+1]}
                                                    src={'/images/partners/'+partners.logos[index+1]}
                                                />
                                        }
                                    </Grid>                                    
                                }
                            </Grid>
                        )
                    }
                })
            }
            </>
            :
                <div className='social-div-box'>
                    <div 
                        className='text-center'
                        dangerouslySetInnerHTML={{__html: t('landing.partners.paragraph1')}}
                    >                
                    </div>
                    <div 
                        className='mt-8 text-center'
                        dangerouslySetInnerHTML={{__html: t('landing.partners.paragraph2')}}
                    >                
                    </div>
                </div>
        }       
        </>
    )
}