import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import Tooltip from '@mui/material/Tooltip';

export default function Info({t,domains}){

    const [ filterText, setFilterText ] = useState('');
    const [ filterLocations, setFilterLocations ] = useState([]);
    const [ filteredDomains, setFilteredDomains ] = useState(domains);
    
    // Extract unique locations from domains
    const allLocations = domains ? [...new Set(Object.values(domains).flatMap(d => d.location || []))] : [];

    useEffect(() => {
        if(!domains) return;

        let result = Object.values(domains);

        if(filterText){
            const lowerText = filterText.toLowerCase();
            result = result.filter(domain => 
                domain.name.toLowerCase().includes(lowerText) || 
                (domain.description && domain.description.toLowerCase().includes(lowerText)) ||
                (domain.location && domain.location.some(loc => loc.toLowerCase().includes(lowerText))) ||
                (domain.domains && domain.domains.some(d => d.toLowerCase().includes(lowerText)))
            );
        }

        if(filterLocations.length > 0){
            result = result.filter(domain => 
                domain.location && domain.location.some(loc => filterLocations.includes(loc))
            );
        }

        // Re-key object by id or use array if that's how it's consumed. Use existing structure (object with string keys? No, previously mapped Object.keys(domains). Now returning filtered list as array).
        // Wait, original map used Object.keys(domains). Let's adapt map to iterate over filteredDomains array.
        setFilteredDomains(result);

    }, [filterText, filterLocations, domains]);

    const handleClearFilters = () => {
        setFilterText('');
        setFilterLocations([]);
    }

    return (    	
        <>
        <div className='home-div-box'>
            <div className='flex justify-center h-60'>                
                <img                    
                    alt="protectoras"
                    src='/storage/protectoras.png'
                    id='logo'
                />                                            
            </div>
            <div 
                className='mt-2 text-center'
                dangerouslySetInnerHTML={{__html: t('landing.shelters.paragraph1')}}
            >                
            </div>
            <div 
                className='mt-2 text-center'
                dangerouslySetInnerHTML={{__html: t('landing.shelters.paragraph2')}}
            >                
            </div>
            
            {/* Filters Section */}
            {domains && Object.keys(domains).length > 0 &&
                <div className='mt-8 mb-4 flex flex-col md:flex-row gap-4'>
                    <div className='w-full md:w-1/2'>
                        <TextField
                            fullWidth
                            label={t('landing.shelters.search') || "Buscar"}
                            variant="outlined"
                            value={filterText}
                            onChange={(e) => setFilterText(e.target.value)}
                            className='app-input-white-orange'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            size="small"
                        />
                    </div>
                    <div className='w-full md:w-1/2 flex gap-2 h-10'>
                        <Autocomplete
                            multiple
                            fullWidth
                            options={allLocations}
                            value={filterLocations}
                            onChange={(event, newValue) => {
                                setFilterLocations(newValue);
                            }}
                            className='app-input-white-orange'
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    label={t('landing.shelters.location') || "Localización"}
                                    size="small"
                                />
                            )}
                            size="small"
                        />
                        {(filterText || filterLocations.length > 0) && (
                            <Tooltip title={t('landing.shelters.reset')}>
                                <Button 
                                    variant="outlined" 
                                    color="error" 
                                    onClick={handleClearFilters}
                                    sx={{
                                        minWidth: 'auto', 
                                        padding: 1, 
                                        height: '40px', // Match MUI small text field height
                                        borderColor: '#d32f2f', // Red color
                                        color: '#d32f2f',
                                        backgroundColor: 'white',
                                        '&:hover': {
                                            borderColor: '#d32f2f',
                                            backgroundColor: 'white',
                                            opacity: 0.9
                                        }
                                    }}
                                >
                                    <ClearIcon />
                                </Button>
                            </Tooltip>
                        )}
                    </div>
                </div>
            }

            {
                domains && filteredDomains.length > 0 ?
                <div className='mt-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            filteredDomains.map((domain) => {
                                const primaryDomain = (domain.domains && domain.domains.length > 0) ? domain.domains[0] : null;
                                const url = primaryDomain 
                                    ? (primaryDomain.includes('.') ? `https://${primaryDomain}` : `https://${primaryDomain}.protectoras.org`)
                                    : null;

                                return (
                                    <div 
                                        key={domain.id || domain.name} 
                                        className={`p-2 rounded-lg bg-white border app-border-color ${url ? 'hover:shadow-lg transition-shadow' : ''}`}
                                        //onClick={() => url && window.open(url, '_blank')}
                                    >
                                        <h3 className='text-lg font-bold text-center'>{domain.name}</h3>                                
                                        <div className='text-center text-sm'>{domain.location ? domain.location.join(', ') : ''}</div>
                                        <div className='flex justify-center mt-2'>
                                            <img 
                                                className='h-20'
                                                src={`${domain?.files?.bucket}/logos/${domain?.files?.logo}`} 
                                                alt={domain.name}
                                            />
                                        </div>                                
                                        {
                                            domain.domains && domain.domains.length > 0 &&
                                            <div className='text-center mt-4'>
                                                {   
                                                    domain.domains.map((d) => (
                                                        <a 
                                                            href={d.includes('.') ? `https://${d}` : `https://${d}.protectoras.org`}
                                                            target='_blank'
                                                            className='mt-2' 
                                                            key={d}>
                                                            {d.includes('.') ? d : `${d}.protectoras.org`}
                                                        </a>
                                                    ))
                                                }
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                :
                domains && Object.keys(domains).length > 0 && (
                    <div className='mt-8 text-center text-gray-500'>
                        {t('general.no_results') || "No se encontraron resultados"}
                    </div>
                )
            }
            {/*
            <div className='flex justify-between mt-8'>
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
            */}
            
        </div>        
        </>
    )
}