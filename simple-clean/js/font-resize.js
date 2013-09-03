/**
 * User: azu
 * Date: 2013/05/10
 * License: MIT License
 */
$(function (){
    console.log(jQuery("header > h1").fitText);
    jQuery("header > h1").fitText(1.2, { minFontSize: '20px', maxFontSize: '40px' })
});