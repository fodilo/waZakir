var myAyat="",
  keyWord="\u0625\u0628\u0631\u0627\u0647\u064A\u0645",
  mySurrah="2",
  lang="ar",
searchUrl="http://api.alquran.cloud/search/";
/*http://api.alquran.cloud/search/{{keyword}}/{{surah}}/{{edition or language}}*/

console.log(searchUrl+keyWord+"/"+mySurrah+"/"+lang);
$.getJSON(searchUrl+keyWord+"/"+mySurrah+"/"+lang, function(json, textStatus) {
  if (json.code===200) console.log("success");
  else {
    console.log(json.code);
  }

});
/*Passage coranique */
function Passage (type,sourat,ayat){
Passage.prototype.type=type;// wa3id,Sabr,chokr

Passage.prototype.sourat=sourat;// number of soura
Passage.prototype.ayat =ayat; // array of ayat
}

function getPassage (sourat,ayat,reciteur)
{
  var str;

  var myurl = "http://api.alquran.cloud/surah/"+sourat+"/"+reciteur;
$.ajax({
  async:true,
  url: myurl,
  dataType: 'json',

})
.done(function(json) {
  for (var i = ayat[0]; i <= ayat[1]; i++) {
    var t=json.data;
    if( t.ayahs[i]!==undefined){
    var aya=t.ayahs[i].text;
    var aud=t.ayahs[i].audio;
    var num =t.ayahs[i].number;
    str=aud;
    console.log("audio"+aud);

    $(".ayat").append("<span class='item'>"+aya+" ["+i+"] "+"</span>");
    /*-----------AUDIO--------------------*/
     $("#audio").append("<audio controls src='"+aud+"'>"+"</audio>");
    console.log("<audio controls src='"+aud+"'>"+"</audio>");

        }
    else {
      $(".ayat").append("ayat"+i+" does not exist");
    }}})
.always(function(){
  console.log("str = "+ str);

})
    ;


}
console.log("test : "+getPassage(4,[3,20],"ar.alafasy"));
function afficherReciteur(){

}

// $.getJSON(searchUrl+surrah+"/"+keyWord+"/"+lang, function(json, textStatus) {
//   if (json.code==="200") console.log("success");
//   else {
//     console.log("error");
//   }
//
// });
