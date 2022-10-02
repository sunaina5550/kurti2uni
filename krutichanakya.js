var kruti_array = new Array("ñ","Q+Z","sas","aa",")Z","ZZ","‘","’","“","”","å",  "ƒ",  "„",   "…",   "†",   "‡",   "ˆ",   "‰",   "Š",   "‹", "¶+",   "d+", "[+k","[+", "x+",  "T+",  "t+", "M+", "<+", "Q+", ";+", "j+", "u+","Ùk", "Ù", "ä", "–", "—","é","™","=kk","f=k",  "à",   "á",    "â",   "ã",   "ºz",  "º",   "í", "{k", "{", "=",  "«", "Nî",   "Vî",    "Bî",   "Mî",   "<î", "|", "K", "}","J",   "Vª",   "Mª",  "<ªª",  "Nª",   "Ø",  "Ý", "nzZ",  "æ", "ç", "Á", "xz", "#", ":", "v‚","vks",  "vkS",  "vk",    "v",  "b±", "Ã",  "bZ",  "b",  "m",  "Å",  ",s",  ",",   "_","ô",  "d", "Dk", "D", "[k", "[", "x","Xk", "X", "Ä", "?k", "?",   "³", "pkS",  "p", "Pk", "P",  "N",  "t", "Tk", "T",  ">", "÷", "¥","ê",  "ë",   "V",  "B",   "ì",   "ï", "M+", "<+", "M",  "<", ".k", ".", "r",  "Rk", "R",   "Fk", "F",  ")", "n", "/k", "èk",  "/", "Ë", "è", "u", "Uk", "U",   "i",  "Ik", "I",   "Q",    "¶",  "c", "Ck",  "C",  "Hk",  "H", "e", "Ek",  "E", ";",  "¸",   "j",    "y", "Yk",  "Y",  "G",  "o", "Ok", "O", "'k", "'",   "\"k",  "\"",  "l", "Lk",  "L",   "g",  "È", "z", "Ì", "Í", "Î",  "Ï",  "Ñ",  "Ò",  "Ó",  "Ô",   "Ö",  "Ø",  "Ù","Ük", "Ü","‚",    "ks",   "kS",   "k",  "h",    "q",   "w",   "`",    "s",    "S", "a",    "¡",    "%",     "W",  "•", "·", "∙", "·", "~j",  "~", "\\","+"," ः","^", "*",  "Þ", "ß", "(", "¼", "½", "¿", "À", "¾", "A", "-", "&", "&", "Œ", "]","~ ","@");



var unicode_array = new Array("॰","QZ+","sa","a","र्द्ध","Z","\"","\"","'","'", "०",  "१",  "२",  "३",     "४",   "५",  "६",   "७",   "८",   "९",  "फ़्",  "क़",  "ख़", "ख़्",  "ग़", "ज़्", "ज़",  "ड़",  "ढ़",   "फ़",  "य़",  "ऱ",  "ऩ",  "त्त", "त्त्", "क्त",  "दृ",  "कृ","न्न","न्न्","=k","f=", "ह्न",  "ह्य",  "हृ",  "ह्म",  "ह्र",  "ह्",   "द्द",  "क्ष", "क्ष्", "त्र", "त्र्",  "छ्य",  "ट्य",  "ठ्य",  "ड्य",  "ढ्य", "द्य", "ज्ञ", "द्व", "श्र",  "ट्र",    "ड्र",    "ढ्र",    "छ्र",   "क्र",  "फ्र", "र्द्र",  "द्र",   "प्र", "प्र",  "ग्र", "रु",  "रू", "ऑ",   "ओ",  "औ",  "आ",   "अ", "ईं", "ई",  "ई",   "इ",  "उ",   "ऊ",  "ऐ",  "ए", "ऋ", "क्क", "क", "क", "क्", "ख", "ख्", "ग", "ग", "ग्", "घ", "घ", "घ्", "ङ", "चै",  "च", "च", "च्", "छ", "ज", "ज", "ज्",  "झ",  "झ्", "ञ", "ट्ट",   "ट्ठ",   "ट",   "ठ",   "ड्ड",   "ड्ढ",  "ड़", "ढ़", "ड",   "ढ", "ण", "ण्", "त", "त", "त्", "थ", "थ्",  "द्ध",  "द", "ध", "ध", "ध्", "ध्", "ध्", "न", "न", "न्",    "प", "प", "प्",  "फ", "फ्",  "ब", "ब", "ब्",  "भ", "भ्",  "म",  "म", "म्", "य", "य्",  "र", "ल", "ल", "ल्",  "ळ",  "व", "व", "व्", "श", "श्",  "ष", "ष्", "स", "स", "स्", "ह", "ीं", "्र", "द्द", "ट्ट","ट्ठ","ड्ड","कृ","भ","्य","ड्ढ","झ्","क्र","त्त्","श","श्","ॉ",  "ो",   "ौ",   "ा",   "ी",   "ु",   "ू",   "ृ",   "े",   "ै", "ं",   "ँ",   "ः",   "ॅ",  "ऽ", "ऽ", "ऽ", "ऽ", "्र",  "्", "?", "़",":", "‘",   "’",   "“",   "”",  ";",  "(",    ")",   "{",    "}",   "=", "।", ".", "-",  "µ", "॰", ",","् ","/");

function krutiunicode()

{



var text_size = document.getElementById("krutitext").value.length ;

var kruti_array_length = kruti_array.length ;

var kruti_text = document.getElementById("krutitext").value  ;



    var processed_text = '' ;  



    var n = 0 ;  var o = 0 ;  var r = 1 ;

 

    var max_text_size = 7000;



    while ( r == 1 ) 

    {

     n = o ;



     if ( o < ( text_size - max_text_size ) )  

     { 

      o +=  max_text_size ;

      while (document.getElementById("krutitext").value.charAt ( o ) != ' ') {o--;}

     } 

     else  { o = text_size  ;  r = 0 }



     var kruti_text = document.getElementById("krutitext").value.substring ( n, o )  ;



    replsym( ) ;



    processed_text += kruti_text ;





    document.getElementById("unicodetext").value = processed_text  ;

   }
   unichanakya();






function replsym( )



{





if ( kruti_text != "" )  

for ( input_symbol_idx = 0;   input_symbol_idx < kruti_array_length;    input_symbol_idx++ )



{



idx = 0  ;  



while (idx != -1 ) 

{



kruti_text = kruti_text.replace( kruti_array[ input_symbol_idx ] , unicode_array[input_symbol_idx] )

idx = kruti_text.indexOf( kruti_array[input_symbol_idx] )



} 

} 

kruti_text = kruti_text.replace( /±/g , "Zं" ) ;





kruti_text = kruti_text.replace( /Æ/g , "र्f" ) ;  



var pi = kruti_text.indexOf( "f" )



while ( pi != -1 ) 

{

var cni = kruti_text.charAt( pi + 1 )

var ctbr = "f" + cni

kruti_text = kruti_text.replace( ctbr , cni + "ि" ) 

pi = kruti_text.search( /f/ , pi + 1 ) 



} 



kruti_text = kruti_text.replace( /Ç/g , "fa" ) ; 

kruti_text = kruti_text.replace( /É/g , "र्fa" ) ;



var pi = kruti_text.indexOf( "fa" )



while ( pi != -1 ) 

{

var cntip2 = kruti_text.charAt( pi + 2 )

var ctbr = "fa" + cntip2

kruti_text = kruti_text.replace( ctbr , cntip2 + "िं" ) 

pi = kruti_text.search( /fa/ , pi + 2 ) 



} 



kruti_text = kruti_text.replace( /Ê/g , "ीZ" ) ; 





var powe = kruti_text.indexOf( "ि्" ) 



while ( powe != -1 )  



{

var cntwe = kruti_text.charAt( powe + 2 )

var ctbr = "ि्" + cntwe 

kruti_text = kruti_text.replace( ctbr , "्" + cntwe + "ि" ) 

powe = kruti_text.search( /ि्/ , powe + 2 ) 



} 

matraslist = "अ आ इ ई उ ऊ ए ऐ ओ औ ा ि ी ु ू ृ े ै ो ौ ं : ँ ॅ" 

var rpos = kruti_text.indexOf( "Z" )



while ( rpos > 0 )  

{

pphr = rpos - 1 ;

var chtr = kruti_text.charAt( pphr )





while ( matraslist.match( chtr ) != null )  



{

pphr = pphr - 1 ;

chtr = kruti_text.charAt( pphr ) ;



} 





ctbr = kruti_text.substr ( pphr , ( rpos - pphr ) ) ;

rstr = "र्" + ctbr ; 

ctbr = ctbr + "Z" ;

kruti_text = kruti_text.replace( ctbr , rstr ) ;

rpos = kruti_text.indexOf( "Z" ) ;



} 



}


} 

function copyclipboard() {

   var copyText = document.querySelector("#chanakya_text");

   copyText.select();

   copyText.setSelectionRange(0, 99999);

   document.execCommand("copy");

   alert("Text Copied To Clipboard.");

}

function cleartext() {

	document.getElementById("krutitext").value = '';

	document.getElementById("unicodetext").value = '';
	
	document.getElementById("chanakya_text").value = '';

}

function unichanakya()

{

var array_one = new Array("ज़्","फ़्","क़","ख़","ग़","ज़","ड़","ढ़","फ़","य़","ऱ","ऩ", "‘","’","“","”","–","ं","ऑ","त्र्","श्र्",

"क्र","ग्र","घ्र",

"छ्र","ट्र","ड्र","ढ्र",

"त्र","द्र","ध्र",

"प्र","फ्र","ब्र","भ्र","म्र",

"व्र","श्र","स्र","ह्र",

"ष्ट्र", "रु","रू","क्ष्","क्ष","ज्ञ","् ","्,","्;","क़","ख़","ग़","ज़्","ज़","ड़","ढ़","फ़्","फ़","य़","ऱ","ऩ",     

"क्च","ष्ट","ष्ठ","श्व","॥","ढ्ढ","छ्व", 

"हृ","क्क","क्त","ञ्ज","ङ्क","ङ्ख","ङ्ग","ङ्घ","ट्ट","ट्ठ",



"क्व","ड्ड","ड्ढ","द्ग","द्घ","द्द","द्ध","द्ब","द्भ","द्म","द्य","द्व","ठ्ठ","श्च","ह्न","ह्म","ह्म्","ह्य","ह्ल","ह्व",

 

"त्त","त्त्","प्त","ञ्च",  

"ल्ल","ष्ट्व","ङ्क्ष",  



"ह्न","ह्व","द्द",  

"।","्र",

"शृ","शॄ","कॢ","ह्ण",



"ओ","औ","आ","अ","ईं","ई","इ","उ","ऊ","ऋ","ॠ","ऌ","ऐ","ए",



"के","कै","फे","फै",  



"क्","क", "ख्","ख","ग्","ग","घ्","घ","ङ",

"च्च्","च्","च","छ","ज्ज्","ज्","ज","झ्","झ","ञ्","ञ",



"ट","ठ","ड","ढ","ण्","ण",

"त्","त","थ्","थ","द","ध्","ध","न्न्","न्न","न्","न",



"प्","प","फ्","फ","ब्","ब","भ्","भ","म्","म",

"य्","य","र","ल्","ल","ळ","व्","व",

"श्","श","ष्","ष","स्","स","ह्","ह",

"्य","x",



"ॉ","ा","ी","ु","ू","ृ","ॄ","ॢ","े","ै","ो","ौ",

"ं","ं","ँ","ः","़", "ॅ","ऽ","्",



"०","१","२","३","४","५","६","७","८","९",

"0","1","2","3","4","5","6","7","8","9")



var array_two = new Array(

"ज़्","फ़्","क़","ख़","ग़","ज़","ड़","ढ़","फ़","य़","ऱ","ऩ",      

"Ò","Ó","\"","\"","-","´","¥æò",



"˜","Ÿ",

"R¤","»ý","ƒæý",

"Àþ","Åþ","Çþ","Éþ",

"˜æ","Îý","Ïý",

"Âý","È¤ý","Õý","Öý","×ý",

"ßý","Ÿæ","d","O",

"cÅþ","L¤","M¤",



"ÿ","ÿæ","™æ","÷ ","÷,","÷;",

"·¸¤", "¹¸", "»¸", "Ê", "Á¸","Ç¸", "É¸", "¸U","È¸¤","Ø¸","Ú¸","Ù¸", 



"B¤","C","D","E","H","I","J", 

"N","P¤","Q¤","T","V","W","X","Y","^","_",



"`¤","a","b","e","f","g","h","i","j","k","l","m","n","p","q","ræ","r","s","t","u",



"žæ","ž","#","@", //"%",

"„","¦","¨",      // "¯","µ","º",



"q","u","g",    

"Ð","ý",

"oë","oì","•í","ö",



"¥ô","¥õ","¥æ","¥","§Z","§ü","§","©","ª¤","«¤","¬¤","­","°ð","°",



"·Ô¤","·ñ¤","ÈÔ¤","Èñ¤",   // "·´¤","È´¤",



"€U","·¤","","¹","‚","»","ƒ","ƒæ","¾", 

"“","‘","¿","À","”","’","Á","Û","Ûæ","†","†æ",



"ÅU","Æ","Ç","É","‡","‡æ",

"ˆ","Ì","‰","Í","Î","Š","Ï","ó","óæ","‹","Ù",



"Œ","Â","U","È¤","Ž","Õ","","Ö","","×",

"Ä","Ø","ÚU","Ë","Ü","Ý","Ã","ß",

"à","àæ","c","á","S","â","±","ã",

"K","&",

 

"æò","æ","è","é","ê","ë","ì","í","ð","ñ","ô","õ",

"¢","´","¡","Ñ","¸","ò","ù","÷",



"0","1","2","3","4","5","6","7","8","9",

"®","v","w","x","y","z","{","|","}","~")



var array_one_length = array_one.length ;



// if the input is plain text



// if the input is plain text

if (array_one.length != 0 )  
   {

    var modified_substring = document.getElementById("unicodetext").value  ;

    var text_size = document.getElementById("unicodetext").value.length ;

    var processed_text = '' ;  

    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 

    var max_text_size = 6000;
  

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - max_text_size ) )  
     { 
      sthiti2 +=  max_text_size ;
      while (document.getElementById("unicodetext").value.charAt ( sthiti2 ) != ' ') {sthiti2--;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

     var modified_substring = document.getElementById("unicodetext").value.substring ( sthiti1, sthiti2 )  ;

    Replace_Symbols2( ) ;

    processed_text += modified_substring ;


    document.getElementById("chanakya_text").value = processed_text  ;
   }
}

else    
   {

    var remaining_text = document.getElementById("legacy_text").value ;
    var processed_text = "" ;  

    var position_of_current_opening_bracket = 0 ;
    var position_of_next_closing_bracket = 1 ;

    var idx = remaining_text.indexOf( "<p " )  
    idx = remaining_text.indexOf( "Sanskrit 99" , idx )
    var idx2 = 0 
    var idx3 = 0  
    var idx4 = 0  
    
    while ( idx != -1 )   
       {  
        idx2 = remaining_text.indexOf( ">" , idx )  
        idx3 = remaining_text.indexOf( "/span" , idx2 )
        idx4 = remaining_text.indexOf( "span" , idx2 )

        while ( idx4 < idx3 )     
           {
            idx4 = remaining_text.indexOf( "span" , idx3+4 ) ;
            idx3 = remaining_text.indexOf( "/span" , idx3+4 ) ;
           }

        var modified_substring = remaining_text.substring( idx2 , idx3 ) ;
        modified_substring = modified_substring.replace( />/g , ">>" ) ; 
        processed_text = processed_text + remaining_text.substring( 0 , idx2 ) + modified_substring + "/span" ;   

        remaining_text = remaining_text.substring( idx3 + 5 ) ;  
        idx = remaining_text.indexOf( "Sanskrit 99" ) ;
       } 

    processed_text = processed_text + remaining_text ;



    remaining_text = processed_text ;
    processed_text = "" ;  

    var position_of_start_of_paragraph = 0 ;
    var position_of_end_of_paragraph = 1 ;

    position_of_start_of_paragraph = remaining_text.indexOf("<p ")   ;

    while ( position_of_start_of_paragraph != -1 )  
       {
        position_of_start_of_paragraph = remaining_text.indexOf("<p ")   ;
        position_of_end_of_paragraph = remaining_text.indexOf("/p>")   ;

        modified_substring = remaining_text.substring( position_of_start_of_paragraph + 3 ,  position_of_end_of_paragraph ) ;

        if (modified_substring.indexOf( "MsoBodyText" ) != -1 )
           { 
            modified_substring = modified_substring.replace( />/g , ">>" )  ;    

            idx = modified_substring.indexOf("font-family")  ;  

            idx2 = 0 ;  
            idx3 = 0 ;  
            idx4 = 0 ;  

            while ( idx != -1 )     
               {
                idx2 = modified_substring.indexOf( ">>" , idx ) ;
                idx3 = modified_substring.indexOf( "/span" , idx2 ) ;
                idx4 = modified_substring.indexOf( "span" , idx2 ) ;

                while ( idx4 < idx3 )
                   {
                    idx4 = modified_substring.indexOf( "span" , idx3+4 )  ;
                    idx3 = modified_substring.indexOf( "/span" , idx3+4 )  ;
                   }

                modified_substring = modified_substring.substring( 0, idx2 ) + (modified_substring.substring( idx2 , idx3 )).replace( />>/g , ">" ) + modified_substring.substring( idx3 ) ; 
                idx = modified_substring.indexOf( "font-family" , idx3 ) ;

               } 
           } 

        processed_text = processed_text + remaining_text.substring( 0 , position_of_start_of_paragraph + 3 ) +  modified_substring + "/p>" ;   
        remaining_text = remaining_text.substring( position_of_end_of_paragraph + 3 ) ; 
        position_of_start_of_paragraph = remaining_text.indexOf("<p ")   ;
       } 

    processed_text = processed_text + remaining_text ;

  

    remaining_text = processed_text ;     processed_text = "" ; 

    idx2 = remaining_text.indexOf( ">>" )  ;

    while ( idx2 != -1 )    
       {  
        position_of_current_opening_bracket = remaining_text.indexOf( ">>" , idx2 )  
        position_of_next_closing_bracket = remaining_text.indexOf( "<" , position_of_current_opening_bracket )

        modified_substring = remaining_text.substring( position_of_current_opening_bracket + 2 , position_of_next_closing_bracket ) ;

        processed_text = processed_text + remaining_text.substring( 0 , position_of_current_opening_bracket + 1 ) ;   
        remaining_text = remaining_text.substring( position_of_next_closing_bracket + 1 ) ; 


        Replace_Symbols2() ;   

        processed_text = processed_text + modified_substring + "<"  ;

        idx2 = remaining_text.indexOf( ">>" ) ;
       } 

    processed_text = processed_text + remaining_text ; 


    processed_text = processed_text.replace( /Mangal/g , "Chanakya" ) ;   


    document.getElementById("unicodetext").value = processed_text  

   } 


function Replace_Symbols2( )

   {

    if (modified_substring != "" )  

       {





modified_substring = modified_substring.replace ( /क़/g , "क़" )  ; 

modified_substring = modified_substring.replace ( /ख़‌/g , "ख़" )  ;

modified_substring = modified_substring.replace ( /ग़/g , "ग़" )  ;

modified_substring = modified_substring.replace ( /ज़्/g , "ज़्" )  ;

modified_substring = modified_substring.replace ( /ज़/g , "ज़" )  ;

modified_substring = modified_substring.replace ( /ड़/g , "ड़" )  ;

modified_substring = modified_substring.replace ( /ढ़/g , "ढ़" )  ;

modified_substring = modified_substring.replace ( /ऩ/g , "ऩ" )  ;

modified_substring = modified_substring.replace ( /फ़/g , "फ़" )  ;

modified_substring = modified_substring.replace ( /य़/g , "य़" )  ;

modified_substring = modified_substring.replace ( /ऱ/g , "ऱ" )  ;





        var position_of_f = modified_substring.indexOf( "ि" )  ;

         while ( position_of_f != -1 )  

           {

            var character_left_to_f = modified_substring.charAt( position_of_f - 1 )  ;

            modified_substring = modified_substring.replace( character_left_to_f + "ि" ,  "ç" + character_left_to_f )  ;



            position_of_f = position_of_f - 1  ;



            while (( modified_substring.charAt( position_of_f - 1 ) == "्" )  &  ( position_of_f != 0  ) )

               {

                var string_to_be_replaced = modified_substring.charAt( position_of_f - 2 ) + "्"  ;

                  modified_substring = modified_substring.replace( string_to_be_replaced + "ç", "ç" + string_to_be_replaced ) ;



                position_of_f = position_of_f - 2  ;

               }

            position_of_f = modified_substring.search( /ि/ , position_of_f + 1 ) ; 



           } 



       set_of_matras = "ािीुूृेैोौं:ँॅ" 



modified_substring += '  '    ;  



       var position_of_half_R = modified_substring.indexOf( "र्" ) ;

        while ( position_of_half_R > 0  )  

           {

            var probable_position_of_Z = position_of_half_R + 2   ;  



            var character_right_to_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z + 1 )





            while ( set_of_matras.indexOf( character_right_to_probable_position_of_Z ) != -1 )  

               {

                probable_position_of_Z = probable_position_of_Z + 1 ;

                character_right_to_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z + 1 ) ;

               } 



            string_to_be_replaced = modified_substring.substr ( position_of_half_R + 2 , ( probable_position_of_Z - position_of_half_R - 1 ))  ;

            modified_substring = modified_substring.replace( "र्" + string_to_be_replaced  ,  string_to_be_replaced + "ü" ) ;

            position_of_half_R = modified_substring.indexOf( "र्" ) ;

           } 





modified_substring = modified_substring.substr ( 0 , modified_substring.length - 2 )  ;





        for( input_symbol_idx = 0; input_symbol_idx < array_one_length; input_symbol_idx++ )

           {

            idx = 0  ;  



            while (idx != -1 ) 

               {

                modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_two[input_symbol_idx] )

                idx = modified_substring.indexOf( array_one[input_symbol_idx] )

               } 

           } 



        } 



    }



  } 