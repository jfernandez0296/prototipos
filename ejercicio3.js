function palindrome(str) {
    var re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length; // var len = "A man, a plan, a canal. Panama".length = 30
 
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) { // Siempre y cuando los caracteres de cada parte coincidad, el bucle FOR debera seguir.
       return false;}
   }
return true;
}
console.log(palindrome("not  a palidrome"));