function convert_to_Unicode_and_Chanakya()

{
convert_Kritidev10_to_Unicode() ;
convert_Unicode_to_Chanakya() ;


function convert_Kritidev10_to_Unicode()
{

var array_one = new Array(//"kZsa", 
// "(",")", 
"ñ","Q+Z","sas","aa",")Z","ZZ","‘","’","“","”",

"å","ƒ","„","…","†","‡","ˆ","‰","Š","‹", 

"¶+","d+","[+k","[+","x+","T+","t+","M+","<+","Q+",";+","j+","u+",
"Ùk","Ù","ä","–","—","é","™","=kk","f=k",  

"à","á","â","ã","ºz","º","í","{k","{","=","«",   
"Nî","Vî","Bî","Mî","<î","|","K","}",
"J","Vª","Mª","<ªª","Nª","Ø","Ý","nzZ","æ","ç","Á","xz","#",":",

"v‚","vks","vkS","vk","v","b±","Ã","bZ","b","m","Å",",s",",","_",

"ô","d","Dk","D","£","[k","[","x","Xk","X","Ä","?k","?","³", 
"p","Pk","P","N","t","Tk","T",">","÷","¥",

"ê","ë","V","B","ì","ï","M+","<+","M","<",".k",".",    
"r","Rk","R","Fk","F",")","n","/k","èk","/","Ë","è","u","Uk","U",   

"i","Ik","I","Q","¶","c","Ck","C","Hk","H","e","Ek","E",
";","¸","j","y","Yk","Y","G","o","Ok","O",
"'k","'","\"k","\"","l","Lk","L","g", 

"È","z", 
"Ì","Í","Î","Ï","Ñ","Ò","Ó","Ô","Ö","Ø","Ù","Ük","Ü",

"‚","¨","ks","©","kS","k","h","q","w","`","s","¢","S",
"a","¡","%","W","•","·","∙","·","~j","~","\\","+"," ः",
"^","*","Þ","ß","(","¼","½","¿","À","¾","A","-","&","&","Œ","]","~ ","@",
"ाे","ाॅ","ंै","े्र","अौ","अो","आॅ")


var array_two = new Array(//"ksaZ",
//"¼","½", 
"॰","QZ+","sa","a","र्द्ध","Z","\"","\"","'","'",

"०","१","२","३","४","५","६","७","८","९",   

"फ़्","क़","ख़","ख़्","ग़","ज़्","ज़","ड़","ढ़","फ़","य़","ऱ","ऩ",    // one-byte nukta varNas
"त्त","त्त्","क्त","दृ","कृ","न्न","न्न्","=k","f=",

"ह्न","ह्य","हृ","ह्म","ह्र","ह्","द्द","क्ष","क्ष्","त्र","त्र्", 
"छ्य","ट्य","ठ्य","ड्य","ढ्य","द्य","ज्ञ","द्व",
"श्र","ट्र","ड्र","ढ्र","छ्र","क्र","फ्र","र्द्र","द्र","प्र","प्र","ग्र","रु","रू",

"ऑ","ओ","औ","आ","अ","ईं","ई","ई","इ","उ","ऊ","ऐ","ए","ऋ",

"क्क","क","क","क्","ख","ख","ख्","ग","ग","ग्","घ","घ","घ्","ङ",
"च","च","च्","छ","ज","ज","ज्","झ","झ्","ञ",

"ट्ट","ट्ठ","ट","ठ","ड्ड","ड्ढ","ड़","ढ़","ड","ढ","ण","ण्",   
"त","त","त्","थ","थ्","द्ध","द","ध","ध","ध्","ध्","ध्","न","न","न्",    

"प","प","प्","फ","फ्","ब","ब","ब्","भ","भ्","म","म","म्",  
"य","य्","र","ल","ल","ल्","ळ","व","व","व्",   
"श","श्","ष","ष्","स","स","स्","ह", 

"ीं","्र",    
"द्द","ट्ट","ट्ठ","ड्ड","कृ","भ","्य","ड्ढ","झ्","क्र","त्त्","श","श्",

"ॉ","ो","ो","ौ","ौ","ा","ी","ु","ू","ृ","े","े","ै",
"ं","ँ","ः","ॅ","ऽ","ऽ","ऽ","ऽ","्र","्","?","़",":",
"‘","’","“","”",";","(",")","{","}","=","।",".","-","µ","॰",",","् ","/",
"ो","ॉ","ैं","्रे","औ","ओ","ऑ")



var array_one_length = array_one.length ;

var modified_substring = document.getElementById("legacy_text").value  ;

//****************************************************************************************
//  Break the long text into small bunches of max. max_text_size  characters each.
//****************************************************************************************
    var text_size = document.getElementById("legacy_text").value.length ;

    var processed_Unicode_text = '' ;  //blank
   
     var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
    var max_text_size = 6000;

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - max_text_size ) )  
     { 
      sthiti2 +=  max_text_size ;
      while (document.getElementById("legacy_text").value.charAt ( sthiti2 ) != ' ') {sthiti2--;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

     var modified_substring = document.getElementById("legacy_text").value.substring ( sthiti1, sthiti2 )  ;

     Replace_Symbols1( ) ;

     processed_Unicode_text += modified_substring ;

     document.getElementById("Unicode_text").value = processed_Unicode_text  ;
    }


// --------------------------------------------------

function Replace_Symbols1( )
{

//substitute array_two elements in place of corresponding array_one elements

if ( modified_substring != "" )  // if stringto be converted is non-blank then no need of any processing.
{
for ( input_symbol_idx = 0;   input_symbol_idx < array_one_length;    input_symbol_idx++ )

{

idx = 0  ;  // index of the symbol being searched for replacement

while (idx != -1 ) //whie-00
{

modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_two[input_symbol_idx] )
idx = modified_substring.indexOf( array_one[input_symbol_idx] )

} // end of while-00 loop
} // end of for loop

//**********************************************************************************
// Code for Replacing five Special glyphs
//**********************************************************************************

//**********************************************************************************
// Code for Glyph1 : ± (reph+anusvAr)
//**********************************************************************************
   modified_substring = modified_substring.replace( /±/g , "Zं" ) ; // at some places  ì  is  used eg  in "कर्कंधु,पूर्णांक".
//
//**********************************************************************************
// Glyp2: Æ
// code for replacing "f" with "ि" and correcting its position too. (moving it one position forward)
//**********************************************************************************

modified_substring = modified_substring.replace( /Æ/g , "र्f" ) ;  // at some places  Æ  is  used eg  in "धार्मिक".

var position_of_i = modified_substring.indexOf( "f" )

while ( position_of_i != -1 )  //while-02
{
var character_next_to_i = modified_substring.charAt( position_of_i + 1 )
var character_to_be_replaced = "f" + character_next_to_i
modified_substring = modified_substring.replace( character_to_be_replaced , character_next_to_i + "ि" ) 
position_of_i = modified_substring.search( /f/ , position_of_i + 1 ) // search for i ahead of the current position.

} // end of while-02 loop

//**********************************************************************************
// Glyph3 & Glyph4: Ç  É
// code for replacing "fa" with "िं"  and correcting its position too.(moving it two positions forward)
//**********************************************************************************

modified_substring = modified_substring.replace( /Ç/g , "fa" ) ; // at some places  Ç  is  used eg  in "किंकर".
modified_substring = modified_substring.replace( /É/g , "र्fa" ) ; // at some places  É  is  used eg  in "शर्मिंदा"

var position_of_i = modified_substring.indexOf( "fa" )

while ( position_of_i != -1 )  //while-02
{
var character_next_to_ip2 = modified_substring.charAt( position_of_i + 2 )
var character_to_be_replaced = "fa" + character_next_to_ip2
modified_substring = modified_substring.replace( character_to_be_replaced , character_next_to_ip2 + "िं" ) 
position_of_i = modified_substring.search( /fa/ , position_of_i + 2 ) // search for i ahead of the current position.

} // end of while-02 loop

//**********************************************************************************
// Glyph5: Ê
// code for replacing "h" with "ी"  and correcting its position too.(moving it one positions forward)
//**********************************************************************************

modified_substring = modified_substring.replace( /Ê/g , "ीZ" ) ; // at some places  Ê  is  used eg  in "किंकर".


/*
var position_of_i = modified_substring.indexOf( "h" )

while ( position_of_i != -1 )  //while-02
{
var character_next_to_i = modified_substring.charAt( position_of_i + 1 )
var character_to_be_replaced = "h" + character_next_to_i
modified_substring = modified_substring.replace( character_to_be_replaced , character_next_to_i + "ी" ) 
position_of_i = modified_substring.search( /h/ , position_of_i + 1 ) // search for i ahead of the current position.

} // end of while-02 loop
*/


//**********************************************************************************
// End of Code for Replacing four Special glyphs
//**********************************************************************************

// following loop to eliminate 'chhotee ee kee maatraa' on half-letters as a result of above transformation.

var position_of_wrong_ee = modified_substring.indexOf( "ि्" ) 

while ( position_of_wrong_ee != -1 )  //while-03

{
var consonent_next_to_wrong_ee = modified_substring.charAt( position_of_wrong_ee + 2 )
var character_to_be_replaced = "ि्" + consonent_next_to_wrong_ee 
modified_substring = modified_substring.replace( character_to_be_replaced , "्" + consonent_next_to_wrong_ee + "ि" ) 
position_of_wrong_ee = modified_substring.search( /ि्/ , position_of_wrong_ee + 2 ) // search for 'wrong ee' ahead of the current position. 

} // end of while-03 loop

//**************************************
// 
//**************************************
//   alert(modified_substring);
//**************************************


// Eliminating reph "Z" and putting 'half - r' at proper position for this.
set_of_matras = "अ आ इ ई उ ऊ ए ऐ ओ औ ा ि ी ु ू ृ े ै ो ौ ं : ँ ॅ" 

var position_of_R = modified_substring.indexOf( "Z" )

// alert(" 1. modified_substring = "+modified_substring );
// alert(" 2. position_of_R = "+position_of_R )

while ( position_of_R > 0 )  // while-04
{
probable_position_of_half_r = position_of_R - 1 ;

 //alert(" 3. probable_position_of_half_r = "+probable_position_of_half_r );

var character_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r )

 //alert(" 4. character_at_probable_position_of_half_r = "+character_at_probable_position_of_half_r );

//************************************************************
// trying to find non-maatra position left to current O (ie, half -r).
//************************************************************

while ( set_of_matras.match( character_at_probable_position_of_half_r ) != null )  // while-05
// some vowel maatraa or anusvaar found, move to previous character
   {   probable_position_of_half_r = probable_position_of_half_r - 1 ;
       character_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r ) ;
   
     //alert(" 5. probable_position_of_half_r = "+probable_position_of_half_r );
     //alert(" 6. character_at_probable_position_of_half_r = "+character_at_probable_position_of_half_r );
   } // end of while-05

//************************************************************
// check if the previous character to the present character is a halant
//************************************************************
   var previous_to_position_of_half_r = probable_position_of_half_r - 1 ;
 //alert(" 7. previous_to_position_of_half_r = "+previous_to_position_of_half_r );

   if (previous_to_position_of_half_r > 0)  // if-03
   {  var character_previous_to_position_of_half_r = modified_substring.charAt( previous_to_position_of_half_r )
    //alert(" 8. character_previous_to_position_of_half_r = "+character_previous_to_position_of_half_r );

      while ("्".match( character_previous_to_position_of_half_r ) != null ) // while-06
//    halant found, move to previous character
      {  probable_position_of_half_r = previous_to_position_of_half_r - 1 ;
         character_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r ) ;

       //alert(" 9. probable_position_of_half_r = "+probable_position_of_half_r );
       //alert("10. character_at_probable_position_of_half_r = "+character_at_probable_position_of_half_r );
       
         previous_to_position_of_half_r = probable_position_of_half_r - 1 ;
         character_previous_to_position_of_half_r = modified_substring.charAt( previous_to_position_of_half_r )

       //alert("11. previous_to_position_of_half_r = "+previous_to_position_of_half_r );
       //alert("12. character_previous_to_position_of_half_r = "+character_previous_to_position_of_half_r );
      } // end of while-06
   } // end of if-03

//************************************************************

character_to_be_replaced = modified_substring.substr ( probable_position_of_half_r , ( position_of_R - probable_position_of_half_r ) ) ;
new_replacement_string = "र्" + character_to_be_replaced ; 
character_to_be_replaced = character_to_be_replaced + "Z" ;
modified_substring = modified_substring.replace( character_to_be_replaced , new_replacement_string ) ;
position_of_R = modified_substring.indexOf( "Z" ) ;

 //alert("13. character_to_be_replaced = "+character_to_be_replaced );
 //alert("14. modified_substring = "+modified_substring );

} // end of while-04

} // end of IF  statement  meant to  supress processing of  blank  string.

//**************************************
//   alert(modified_substring);
//**************************************


} // end of the function  Replace_Symbols1

 
} // end of convert_Kritidev10_to_Unicode()


function convert_Unicode_to_Chanakya()
{

var array_one = new Array(

"\‘", "\’", "\“", "\”", " \'", "\' ", "\'", "ं", "ऑ",
"क्ष्","क्ष","त्र","ज्ञ","् ",
                        
"क़","ख़","ग़","ज़्","ज़","ड़","ढ़","फ़्","फ़","य़","ऱ","ऩ",      // one-byte nukta varNas
// "क़","ख़","ग़","ज़","ड़","ढ़","फ़","य़","ऱ","ऩ",    // two-byte nukta varNas

"क्च", "ष्ठ","श्व","स्न","त्र","॥","ढ्ढ","छ्व","रु","रू",
"हृ","ह्र","क्क","क्त","क्र","ञ्ज","ङ्क","ङ्ख","ङ्ग","ङ्घ","ट्ट","ट्ठ",

"क्व","ड्ड","ड्ढ","स्र","द्ग","द्घ","द्द","द्ध","द्ब","द्भ","द्म","द्य","द्व","ठ्ठ","श्च","ह्न","ह्म्","ह्य","ह्ल","ह्व",
 
"त्त","त्त्","प्त","त्न","ञ्च",
"ल्ल","ष्ट्व","ङ्क्ष","ख्न","द्ब्र","ख्र",

"ष्ट्र", "ष्ट", "ह्न", "ह्व", "द्द",  
"श्र्", "श्र", "ट्र", "ड्र", "ढ्र",
"।", "्र",
"शृ", "शॄ", "कॢ", "ह्ण",

"ओ","औ","आ","अ","ईं","ई","इ","उ","ऊ","ऋ","ॠ","ऌ","ऐ","ए",

"के","कै","फे","फै",  //"कं","फं",

"क्","क", "ख्","ख","ग्","ग","घ्","घ","ङ",
"च्च्","च्","च","छ","ज्ज्","ज्","ज","झ्","झ","ञ्","ञ",

"ट","ठ","ड","ढ","ण्","ण",
"त्","त","थ्","थ","द","ध्","ध","न्न्","न्न","न्","न",

"प्","प","फ्","फ","ब्","ब","भ्","भ","म्","म",
"य्","य","र","ल्","ल","ळ","व्","व",
"श्","श","ष्","ष","स्","स","ह्","ह",
"्य","x",

"ॉ","ा","ी","ु","ू","ृ","ॄ","ॢ","े","ै","ो","ौ",
"ं","ं","ँ","ः", '\:', "़", "ॅ","ऽ","्",

"०","१","२","३","४","५","६","७","८","९",
"0","1","2","3","4","5","6","7","8","9")

var array_two = new Array(

"Ò", "Ó", "\"", "\"", " Ò", "Ó ", "Ó", "´", "¥æò",  
"ÿ","ÿæ","˜æ","™æ","÷ ",
"·¸¤", "¹¸", "»¸", "Ê", "Á¸", "Ç¸", "É¸", "¸","È¸","Ø¸","Ú¸","Ù¸", 
// "·¸¤", "¹¸", "»¸", "Á¸","Ç¸", "É¸", "¸U","È¸¤","Ø¸","Ú¸","Ù¸", 

"B¤", "D","E","F","G","H","I","J","L¤","M¤",
"N","O","P¤","Q¤","R¤","T","V","W","X","Y","^","_",

"`¤","a","b","d","e","f","g","h","i","j","k","l","m","n","p","q","r","s","t","u",

"žæ","ž","#","%","@",
"„","¦","¨","¯","µ","º",

"Cþ", "C", "q", "u", "g",    
"Ÿ","Ÿæ","Åþ","Çþ","Éþ", 
"Ð","ý",
"oë","oì","•í","ö",

"¥ô","¥õ","¥æ","¥","§Z","§ü","§","©","ª¤","«","¬","­","°ð","°",

"·Ô¤","·ñ¤","ÈÔ¤","Èñ¤",   // "·´¤","È´¤",

"€U", "·¤", "", "¹", "\‚", "\»", "ƒ", "ƒæ", "¾", 
"“", "‘", "¿", "À", "”", "’", "Á", "Û", "Ûæ", "†", "†æ",

"ÅU","Æ","Ç","É","‡","‡æ",
"ˆ","Ì","‰","Í","Î","Š","Ï","ó","óæ","‹","Ù",

"Œ","Â","","È","Ž","Õ","","Ö","","×",
"Ä","Ø","ÚU","Ë","Ü","Ý","Ã","ß",
"à","àæ","c","á","S","â","±","ã",
"K","&",
 
"æò", "æ", "è", "é", "ê", "ë", "ì","í","ð","ñ","ô","õ",
"¢", "´", "¡", "Ñ", "Ñ", "¸", "ò", "ù", "÷",

"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"®", "v", "w", "x", "y", "z", "\{", "|", "\}", "~")


var array_one_length = array_one.length ;

    document.getElementById("Chanakya_text").value = "You have chosen SIMPLE TEXT in Unicode to convert into Chanakya font. Conversion in progress.."  ;  

var modified_substring = document.getElementById("Unicode_text").value  ;
//****************************************************************************************
//  Break the long text into small bunches of max. max_text_size  characters each.
//****************************************************************************************
    var text_size = document.getElementById("Unicode_text").value.length ;

    var processed_text = '' ;  //blank

    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
 // var max_text_size = chunksize;  

    var max_text_size = 6000;
  
 // alert(max_text_size);

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - max_text_size ) )  
     { 
      sthiti2 +=  max_text_size ;
      while (document.getElementById("Unicode_text").value.charAt ( sthiti2 ) != ' ') {sthiti2--;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

     var modified_substring = document.getElementById("Unicode_text").value.substring ( sthiti1, sthiti2 )  ;

     Replace_Symbols( ) ;

     processed_text += modified_substring ;

     document.getElementById("Chanakya_text").value = processed_text  ;
    }

//**************************************************
//--------------------------------------------------
//**************************************************

function Replace_Symbols( )
   {
    // if string to be converted is non-blank then no need of any processing.
    if (modified_substring != "" )  
       {

// first replace the two-byte nukta_varNa with corresponding one-byte nukta varNas.

modified_substring = modified_substring.replace ( /क़/g , "क़" )  ; 
modified_substring = modified_substring.replace ( /ख़‌/g , "ख़" )  ;
modified_substring = modified_substring.replace ( /ग़/g , "ग़" )  ;
modified_substring = modified_substring.replace ( /ज़्/g , "ज़्" )  ;
modified_substring = modified_substring.replace ( /ज़/g , "ज़" )  ;
modified_substring = modified_substring.replace ( /ड़/g , "ड़" )  ;
modified_substring = modified_substring.replace ( /ढ़/g , "ढ़" )  ;
modified_substring = modified_substring.replace ( /ऩ/g , "ऩ" )  ;
modified_substring = modified_substring.replace ( /फ़/g , "फ़" )  ;
modified_substring = modified_substring.replace ( /य़/g , "य़" )  ;
modified_substring = modified_substring.replace ( /ऱ/g , "ऱ" )  ;


        // code for replacing "ि" (chhotee ee kii maatraa) with "ç"  and correcting its position too.
        
        var position_of_f = modified_substring.indexOf( "ि" )  ;
         while ( position_of_f != -1 )  //while-02
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
            position_of_f = modified_substring.search( /ि/ , position_of_f + 1 ) ; // search for ç ahead of the current position.

           } // end of while-02 loop
   //************************************************************     
   //     modified_substring = modified_substring.replace( /fर्/g , "£"  )  ;
   //************************************************************     
        // Eliminating "र्" and putting  reph (ü)  at proper position for this.

       set_of_matras = "ािीुूृेैोौं:ँॅ" 

modified_substring += '  '    ;  // add two spaces after the string to avoid UNDEFINED char in the following code.

       var position_of_half_R = modified_substring.indexOf( "र्" ) ;
        while ( position_of_half_R > 0  )  // while-04
           {
            // "र्"  is two bytes long
            var probable_position_of_Z = position_of_half_R + 2   ;  

            var character_right_to_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z + 1 )
      
// added on 07-7-09     

  if ( character_right_to_probable_position_of_Z == '्' ) 
   {
   probable_position_of_Z = probable_position_of_Z + 2 ;
   character_right_to_probable_position_of_Z = 
      modified_substring.charAt( probable_position_of_Z + 1 ) ;
   }  
  
      
 // trying to find non-maatra position right to probable_position_of_Z .

            while ( set_of_matras.indexOf( character_right_to_probable_position_of_Z ) != -1 )  
               {
                probable_position_of_Z = probable_position_of_Z + 1 ;
                character_right_to_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z + 1 ) ;
               } // end of while-05

            string_to_be_replaced = modified_substring.substr ( position_of_half_R + 2 , ( probable_position_of_Z - position_of_half_R - 1 ))  ;
            modified_substring = modified_substring.replace( "र्" + string_to_be_replaced  ,  string_to_be_replaced + "ü" ) ;
            position_of_half_R = modified_substring.indexOf( "र्" ) ;
           } // end of while-04


modified_substring = modified_substring.substr ( 0 , modified_substring.length - 2 )  ;


        //substitute array_two elements in place of corresponding array_one elements

        for( input_symbol_idx = 0; input_symbol_idx < array_one_length; input_symbol_idx++ )
           {
            idx = 0  ;  // index of the symbol being searched for replacement

            while (idx != -1 ) //whie-00
               {
                modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_two[input_symbol_idx] )
                idx = modified_substring.indexOf( array_one[input_symbol_idx] )
               } // end of while-00 loop
           } // end of for loop

        } // end of IF  statement  meant to  supress processing of  blank  string.

    } // end of the function  Replace_Symbols( )

  } // end of convert_Unicode_to_Chanakya ()

  
} // End of convert_to_Unicode_and_Chanakya()

