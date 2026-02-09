export const getDomain = () => {
    
    let domain = window.location.hostname;

    if(domain.includes('localhost')){
        domain = 'local';
    }

    const mainDomain = import.meta.env.VITE_APP_DOMAIN;
    domain = domain.replace('.'+mainDomain,'');
    console.log(domain);
    
    return domain;
}