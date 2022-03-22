class Ultils {

    static dateFormat(){
        const date = new Date();
        const locale = 'pt-bt';

        return date.toLocaleDateString(locale) + ' ' + date.toLocaleTimeString(locale);
    }

}