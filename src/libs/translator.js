let t = (text, lang) => {
  lang = lang || window.language || navigator.language || navigator.userLanguage;

  //Default language EN
  if(lang == 'en'){
    return text;
  }

  //Checker for Capitalization
  if(text[0] === text[0].toUpperCase()){
    return (trans[lang][text.toLowerCase()])?trans[lang][text.toLowerCase()].capitalizeFirstLetter():text;
  }else{
    return trans[lang][text] || text;
  }
};


let trans = {
  es: require('translations/es'),
  fr: require('translations/fr')
};

export default t;



String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
