import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getLanguage, setLanguage } from "@/Utils/Cookies";

import enGlobal from '../../lang/frontend/global/en.json';
import esGlobal from '../../lang/frontend/global/es.json';
import caGlobal from '../../lang/frontend/global/ca.json';

const getDomainTranslations = (lang) => {
    try {
        const modules = import.meta.glob('../../lang/frontend/*/*.json', { eager: true });
        const domain = window.domain_id || 'protectoras';
        const path = `../../lang/frontend/${domain}/${lang}.json`;
        return modules[path] && modules[path].default ? modules[path].default : {};
    } catch(e) {
        return {};
    }
};

const defaultLanguage = 'es';
//var language = localStorage.getItem('language');
var language = getLanguage();

if(!language || language.length === 0){
    language = defaultLanguage;
    setLanguage(language);
    //localStorage.setItem('language',language);
    //cookies.set("language",language,{path: '/'}); NOT NECESSARY TO DO ALL THE TIME.
}

// combine global with domain specific
const resources = {
    en: {
        global: { ...enGlobal, ...getDomainTranslations('en') }
    },
    es: {
        global: { ...esGlobal, ...getDomainTranslations('es') }
    },
    ca: {
        global: { ...caGlobal, ...getDomainTranslations('ca') }
    }
};

// if language detector it does not use defaultLanguage above
i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        lng: language, // remove this line to start with english
        fallbackLng: defaultLanguage,
        interpolation: {
            escapeValue: false,
        },
        resources: resources
    });

export default i18n;
