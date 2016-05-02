//вырезает пустое пространство в начале и в конце строки
function trim(string) { 
	return string.replace (/\s+/g, " ").replace(/(^\s*)|(\s*)$/g, '');
	 }
 var init=0;
 var startDate;
 var clocktimer;

 function clearFields() {
  init = 0;
  clearTimeout(clocktimer);
  document.clockform.clock.value='00:00:00.00';
  //document.clockform.label.value='';
 }



//ВЫЧИЩАЕМ ВСЕ
 function clearALL() {
  clearFields();
  document.getElementById('marker').innerHTML = '';
 }

 function startTIME() { 
  var thisDate = new Date();
  var Time = thisDate.getTime() - startDate.getTime();
  var Millisecond = Time%1000;
   Time-=Millisecond;
    Millisecond=Math.floor(Millisecond/10);
  Time = Math.floor (Time/1000);
  var Second = Time%60;
   Time-=Second;
  Time = Math.floor (Time/60);
  var Minutes = Time%60;
   Time-=Minutes;
  Time = Math.floor (Time/60);
  var hour = Time%60;
  if (hour<10) 
  	hour = '0'+hour;
  if (Minutes<10)
   Minutes='0'+Minutes;
  if (Second<10)
   Second='0'+Second;
  if (Millisecond<10)
   Millisecond='0'+Millisecond;
  if (init==1)
   document.clockform.clock.value = hour + ':' + Minutes + ':' + Second + '.' + Millisecond;
  clocktimer = setTimeout("startTIME()",10);
 }

 function findTIME() {
  if (init==0) {
   startDate = new Date();
   startTIME();

   init=1;
  	
  } 
  else {
   //var str = trim(document.clockform.label.value);

   document.getElementById('marker').innerHTML = /*(str==''?'':str+': ') +*/ 
    document.clockform.clock.value + '<br>' + document.getElementById('marker').innerHTML;
   clearFields();
  }

 	function f1(){
  	var str = trim(document.clockform.label.value);
   document.getElementById('marker').innerHTML = (str==''?'':str+': ') + 
    document.clockform.clock.value + '<br>' + document.getElementById('marker').innerHTML;
 }
}
  //var intervalID = window.setInterval(f1, 15000);
