export const getLanguage = () => window.localStorage.i18nextLng || 'vn';
export const tt = function(str) {
    if(typeof str !== 'string') return str;
    var contents = str.split('|||');
    var language = getLanguage();
    if(contents.length === 1)
        return contents[0];
    else if(language === 'vn') {
        return contents[0];
    } else {
        return contents[1];
    }
};