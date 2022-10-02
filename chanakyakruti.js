function chanakyaunicode()

{

var array_one = new Array("¤","U","¢ð","´ð","ð¸","Ò","¥æò","¸","•¸" , "¹¸" , "»¸" , "Á¸" , "Ç¸" , "É¸" , "È¸" , "Ø¸" , "Ú¸" , "Ù¸" , "A","B","C","D","E","F","G","H","I","J","K","L","M", "N","O","P","Q","R","T","V","W","X","Y","`","a","b","d","e","f","g","h","i","j","k","l","m","n","p","q","r","s","t","u","žæ","ž","#","%","@","„","¦","¨","¯","µ","º","Cþ","q","Ê","u","g","Ÿæ","Åþ","Çþ","Éþ","^","h","Ð","ý","þ","¥ô","¥æð","¥õ","¥æñ","¥æ","¥","§Z","§ü","§","©","ª","«","¬","­","°ð","°","€", "·", "",  "¹", "‚", "»", "ƒæ", "ƒ", "¾","“","‘","¿","À","”","…","’","Á","Ûæ","Û","†æ","†","Å","Æ","Ç","É","‡æ","‡","ˆ","Ì","‰","Í","Î","¼","Š","Ï","óæ","ó","‹æ","Ù","‹","Œ","Â","","È","Ž","Õ","","Ö","","×","Ä","Ø","Ú","Ë","Ü","¶","Ý","Ã","ß","àæ","³æ","o","³","à","c","á","S","â","ã","±","ÿæ","ÿ","˜æ","˜","™æ","™","üð´","æò","æñ","æ","è","é","ê","ä","å","ë","ì","í","Ô","ñ","ô","õ","¢","´","¡","Ñ","¸","ò","ù","÷","ð","0","1","2","3","4","5","6","7","8","9","®","v","w","x","y","z","{","|","}","~","्ो","्ौ","्ाे", "्ाा","ाे","ाे","ाै","्ा","ंु","ओे","ोे","ाे","ईंं" )   



var array_two = new Array("", "","ð¢", "ð´", "¸ð","'", "ऑ", "फ़्","क़" , "ख़" , "ग़" , "ज़" , "ड़" , "ढ़" , "फ़" , "य़" , "ऱ" , "ऩ" ,"्र","क्च","ष्ट","ष्ठ","श्व","स्न","त्र","॥","ढ्ढ","छ्व","्य","रु","रू","हृ","ह्र","क्क","क्त","क्र","ञ्ज","ङ्क","ङ्ख","ङ्ग","ङ्घ","क्व","ड्ड","ड्ढ","स्र","द्ग","द्घ","द्द","द्ध","द्ब","द्भ","द्म","द्य","द्व","ठ्ठ","श्च","ह्न","ह्म्","ह्य","ह्ल","ह्व","त्त","त्त्","प्त","त्न","ञ्च",

"ल्ल","ष्ट्व","ङ्क्ष","ख्न","द्ब्र","ख्र",

"ष्ट्र","ह्न","ज़्","ह्व","द्द",  

"श्र","ट्र","ड्र","ढ्र",

"ट्ट","द्ध","।","्र","्र",

"ओ","ओ","औ","औ","आ","अ","ईं","ई","इ","उ","ऊ","ऋ","ॠ","ऌ","ऐ","ए",

"क्", "क","ख्","ख","ग्","ग","घ","घ्","ङ",

"च्च्","च्","च","छ","ज्ज्","ज्","ज्","ज","झ","झ्","ञ","ञ्",

"ट","ठ","ड","ढ","ण","ण्",

"त्","त","थ्","थ","द","द","ध्","ध","न्न","न्न्","न","न","न्",

"प्","प","फ्","फ","ब्","ब","भ्","भ","म्","म",

"य्","य","र","ल्","ल","ल","ळ","व्","व",

"श","श","श","श्","श्","ष्","ष","स्","स","ह","ह्",

"क्ष","क्ष्","त्र","त्र्","ज्ञ","ज्ञ्","ðZ",

"ॉ","ौ","ा","ी","ु","ू","ु","ू","ृ","ॄ","ॢ","े","ै","ो","ौ",

"ं","ं","ँ",":","़", "ॅ","ऽ","्","े",

"०","१","२","३","४","५","६","७","८","९",

"0","1","2","3","4","5","6","7","8","9",

"े", "ै", "े","ा","ो","ो","ौ","","ुं","ओ","ो","ो","ईं")   



var array_one_length = array_one.length ;





      var modified_substring = document.getElementById("chanakya_text").value  ;





    var text_size = document.getElementById("chanakya_text").value.length ;



    var processed_text = '' ;  



    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;

 

    var max_text_size = 4000;



    while ( chale_chalo == 1 ) 

    {

     sthiti1 = sthiti2 ;



     if ( sthiti2 < ( text_size - max_text_size ) )  

     { 

      sthiti2 +=  max_text_size ;

      while (document.getElementById("chanakya_text").value.charAt ( sthiti2 ) != ' ') {sthiti2--;}

     } 

     else  { sthiti2 = text_size  ;  chale_chalo = 0 }



     var modified_substring = document.getElementById("chanakya_text").value.substring ( sthiti1, sthiti2 )  ;



    rep_symbols( ) ;



    processed_text += modified_substring ;





      document.getElementById("unicodetext").value = processed_text  ;



   }


	unicodekruti();
	

 //--------------------------------------------------



 function rep_symbols( )

    {



     if ( modified_substring != "" )  

        {





modified_substring = modified_substring.replace ( /क़/ , "क़" )  ; 

modified_substring = modified_substring.replace ( /ख़‌/g , "ख़" )  ;

modified_substring = modified_substring.replace ( /ग़/g , "ग़" )  ;

modified_substring = modified_substring.replace ( /ज़/g , "ज़" )  ;

modified_substring = modified_substring.replace ( /ड़/g , "ड़" )  ;

modified_substring = modified_substring.replace ( /ढ़/g , "ढ़" )  ;

modified_substring = modified_substring.replace ( /ऩ/g , "ऩ" )  ;

modified_substring = modified_substring.replace ( /फ़/g , "फ़" )  ;

modified_substring = modified_substring.replace ( /य़/g , "य़" )  ;

modified_substring = modified_substring.replace ( /ऱ/g , "ऱ" )  ;





         for(input_symbol_idx = 0;   input_symbol_idx < array_one_length;    input_symbol_idx++ )

            {

             idx = 0  ; 

             while (idx != -1 ) 

                {

                 modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_two[input_symbol_idx] )

                 idx = modified_substring.indexOf( array_one[input_symbol_idx] )



                } 

            } 



   modified_substring = modified_substring.replace( /Z/g , "üं" ) ; 





var position_of_f = modified_substring.indexOf( "ç" )  ;



while ( position_of_f != -1 )  

{

var charecter_right_to_f = modified_substring.charAt( position_of_f + 1 )  ;



modified_substring = modified_substring.replace( "ç" + charecter_right_to_f  ,  charecter_right_to_f + "ि" )  ;



position_of_f = position_of_f + 1  ;



while ( ( modified_substring.charAt( position_of_f + 1 ) == "्" ) & ( position_of_f < modified_substring.length - 1 ) )

{

var string_to_be_replaced = modified_substring.charAt( position_of_f + 1 ) + modified_substring.charAt( position_of_f + 2 )  ;



modified_substring = modified_substring.replace( "ि" + string_to_be_replaced , string_to_be_replaced + "ि" )  ;



position_of_f = position_of_f + 2  ;



}



position_of_f = modified_substring.search( /ç/ , position_of_f + 1 ) ; 

} 



modified_substring = modified_substring.replace( /([कखगघचछजझटठडड़ढढ़णतथदधनपफबभमयरलळवशषसहक्षज्ञ])([ािीुूृेैोौंँ]*)ü/g , "ü$1$2" ) ;



modified_substring = modified_substring.replace( /([कखगघचछजझटठडड़ढढ़णतथदधनपफबभमयरलळवशषसहक्षज्ञ])([्])ü/g , "ü$1$2" ) ;



modified_substring = modified_substring.replace( /ü/g , "र्" ) ;



        }



    } 

}



var array_from = new Array( 

"‘",   "’",   "“",   "”",   "(",    ")",   "{",    "}",   "=", "।",  "?",  "-",  "µ", "॰", ",", ".", "् ", "०",  "१",  "२",  "३",     "४",   "५",  "६",   "७",   "८",   "९", "x", "फ़्",  "क़",  "ख़",  "ग़", "ज़्", "ज़",  "ड़",  "ढ़",   "फ़",  "य़",  "ऱ",  "ऩ", "त्त्",   "त्त",     "क्त",  "दृ",  "कृ", "ह्न",  "ह्य",  "हृ",  "ह्म",  "ह्र",  "ह्",   "द्द",  "क्ष्", "क्ष", "त्र्", "त्र","ज्ञ","छ्य",  "ट्य",  "ठ्य",  "ड्य",  "ढ्य", "द्य","द्व", "श्र",  "ट्र",    "ड्र",    "ढ्र",    "छ्र",   "क्र",  "फ्र",  "द्र",   "प्र",   "ग्र", "रु",  "रू","्र", "ओ",  "औ",  "आ",   "अ",   "ई",   "इ",  "उ",   "ऊ",  "ऐ",  "ए", "ऋ", "क्",  "क",  "क्क",  "ख्",   "ख",    "ग्",   "ग",  "घ्",  "घ","ङ", "चै",   "च्",   "च",   "छ",  "ज्", "ज",   "झ्",  "झ",   "ञ", "ट्ट",   "ट्ठ",   "ट",   "ठ",   "ड्ड",   "ड्ढ",  "ड",   "ढ",  "ण्", "ण",  "त्",  "त",  "थ्", "थ",  "द्ध",  "द", "ध्", "ध",  "न्",  "न",  "प्",  "प",  "फ्", "फ",  "ब्",  "ब", "भ्",  "भ",  "म्",  "म", "य्",  "य",  "र",  "ल्", "ल",  "ळ",  "व्",  "व", "श्", "श",  "ष्", "ष",  "स्",   "स",   "ह", "ऑ",   "ॉ",  "ो",   "ौ",   "ा",   "ी",   "ु",   "ू",   "ृ",   "े",   "ै","ं",   "ँ",   "ः",   "ॅ",    "ऽ",  "् ", "्" )

var array_to = new Array( 

"^", "*",  "Þ", "ß", "¼", "½", "¿", "À", "¾", "A", "\\", "&", "&", "Œ", "]","-","~ ", "å",  "ƒ",  "„",   "…",   "†",   "‡",   "ˆ",   "‰",   "Š",   "‹","Û","¶",   "d",    "[k",  "x",  "T",  "t",   "M+", "<+", "Q",  ";",    "j",   "u", "Ù",   "Ùk",   "ä",    "–",   "—", "à",   "á",    "â",   "ã",   "ºz",  "º",   "í", "{", "{k",  "«", "=","K", "Nî",   "Vî",    "Bî",   "Mî",   "<î", "|","}","J",   "Vª",   "Mª",  "<ªª",  "Nª",   "Ø",  "Ý",   "æ", "ç", "xz", "#", ":","z", "vks",  "vkS",  "vk",    "v",   "bZ",  "b",  "m",  "Å",  ",s",  ",",   "_", "D",  "d",    "ô",     "[",     "[k",    "X",   "x",  "?",    "?k",   "³", "pkS",  "P",    "p",  "N",   "T",    "t",   "÷",  ">",   "¥", "ê",      "ë",      "V",  "B",   "ì",       "ï",     "M",  "<",  ".", ".k", "R",  "r",   "F", "Fk",  ")",    "n", "/",  "/k",  "U", "u",  "I",  "i",   "¶", "Q",   "C",  "c",  "H",  "Hk", "E",   "e", "¸",   ";",    "j",  "Y",   "y",  "G",  "O",  "o","'", "'k",  "\"", "\"k", "L",   "l",   "g",  "v‚",    "‚",    "ks",   "kS",   "k",     "h",    "q",   "w",   "`",    "s",    "S", "a",    "¡",    "%",     "W",   "·",   "~ ", "~")   // "~j"



function unicodekruti()

{

var ts = document.getElementById("unicodetext").value.length ;

var afl = array_from.length ;

var mss = document.getElementById("unicodetext").value  ;

var st1 = 0,st2 = 0,looper = 1 ;

var pt = '' ;  

var max_ts = 10000;

    while ( looper == 1 ) 

    {

     st1 = st2 ;

     if ( st2 < ( ts - max_ts ) )  

     { 

      st2 +=  max_ts ;

      while (document.getElementById("unicodetext").value.charAt ( st2 ) != ' ') {st2--;}

     } 

     else  { st2 = ts  ;  looper = 0 }

     var mss = document.getElementById("unicodetext").value.substring ( st1, st2 )  ;

    repsymb( ) ;

    pt += mss ;

    document.getElementById("krutitext").value = pt  ;

   }





function repsymb( )

   {





    if (mss != "" )  

       {



mss = mss.replace ( /क़/ , "क़" )  ; 

mss = mss.replace ( /ख़‌/g , "ख़" )  ;

mss = mss.replace ( /ग़/g , "ग़" )  ;

mss = mss.replace ( /ज़/g , "ज़" )  ;

mss = mss.replace ( /ड़/g , "ड़" )  ;

mss = mss.replace ( /ढ़/g , "ढ़" )  ;

mss = mss.replace ( /ऩ/g , "ऩ" )  ;

mss = mss.replace ( /फ़/g , "फ़" )  ;

mss = mss.replace ( /य़/g , "य़" )  ;

mss = mss.replace ( /ऱ/g , "ऱ" )  ;





        

        var pof = mss.indexOf( "ि" )  ;

         while ( pof != -1 )  

           {

            var clf = mss.charAt( pof - 1 )  ;

            mss = mss.replace( clf + "ि" ,  "f" + clf )  ;



            pof = pof - 1  ;



            while (( mss.charAt( pof - 1 ) == "्" )  &  ( pof != 0  ) )

               {

                var repl_str = mss.charAt( pof - 2 ) + "्"  ;

                  mss = mss.replace( repl_str + "f", "f" + repl_str ) ;



                pof = pof - 2  ;

               }

            pof = mss.search( /ि/ , pof + 1 ) ; 



           } 



       mat = "ािीुूृेैोौं:ँॅ" 



mss += '  '    ;  



       var pohr = mss.indexOf( "र्" ) ;

        while ( pohr > 0  )  

           {

            var ppoz = pohr + 2   ;  



            var cook = mss.charAt( ppoz + 1 )



            while ( mat.indexOf( cook ) != -1 )  

               {

                ppoz = ppoz + 1 ;

                cook = mss.charAt( ppoz + 1 ) ;

               } 



            repl_str = mss.substr ( pohr + 2 , ( ppoz - pohr - 1 ))  ;

            mss = mss.replace( "र्" + repl_str  ,  repl_str + "Z" ) ;

            pohr = mss.indexOf( "र्" ) ;

           } 





mss = mss.substr ( 0 , mss.length - 2 )  ;





        for( idx_sym = 0; idx_sym < afl; idx_sym++ )

           {

            idx = 0  ;  



            while (idx != -1 ) 

               {

                mss = mss.replace( array_from[ idx_sym ] , array_to[idx_sym] )

                idx = mss.indexOf( array_from[idx_sym] )

               } 

           } 



        } 



    }



  } 

  function copyclipboard() {

   var copyText = document.querySelector("#krutitext");

   copyText.select();

   copyText.setSelectionRange(0, 99999);

   document.execCommand("copy");

   alert("Text Copied To Clipboard.");

}

function cleartext() {

	document.getElementById("unicodetext").value = '';
	document.getElementById("chanakya_text").value = '';

	document.getElementById("krutitext").value = '';

}