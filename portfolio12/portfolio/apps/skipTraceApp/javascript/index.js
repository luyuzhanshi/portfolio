var spreadSheetName = ""
var dateComponent = ""
function movetoresponse(event){
var yyy = event.keyCode;
if(yyy == 13 || yyy == 9){
	document.getElementById("response").focus()
	document.getElementById("phone").value = "phone number n/a"
}
if(yyy == 9){
	document.getElementById("listItem").focus()
}
}
function forwardSlashMove(event){
var x = event.keyCode;
if(x==32){
document.getElementById("response").focus()
}
}
//////////////////////////////////////////////////////////////////////////
function search(){
	var accountNum = document.getElementById("aNumber");
	for(i=0;i<data.data.length;i++){
		if(accountNum.value == data.data[i]["Acct Num"]){
			accountNum.value = data.data[i]["Acct Num"];
			var index = data.data[i]["Acct Num"];
			accountCounter = i;
			document.getElementById("aNumberCounter").innerHTML = accountCounter + " / " + data.data.length
			document.getElementById("response").focus()
		}
		}
	}
	function search(event){
	var xx = event.keyCode;
	if(xx==86){
	var accountNum = document.getElementById("aNumber");
	for(i=0;i<data.data.length;i++){
		if(accountNum.value == data.data[i]["Acct Num"]){
			accountNum.value = data.data[i]["Acct Num"];
			var index = data.data[i]["Acct Num"];
			accountCounter = i;
			document.getElementById("aNumberCounter").innerHTML = accountCounter + " / " + data.data.length
			document.getElementById("response").focus()
		}
		}
	}
}
startTime();
var accountCounter = 0

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var day = today.getDay();
  var date = today.getDate();
  var year = today.getFullYear();
  var month = today.getMonth();
  var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
  var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
  // add a zero in front of numbers<10

  document.getElementById('time').innerHTML = time[h] + ":" + m + ":" + s;


  document.getElementById('currentDate').innerHTML = week[day] +" / "+monArray[month+1] +" / "+date +" / "+year;
  t = setTimeout(function() {
    startTime()
  }, 500);
	let now = new Date();
document.getElementById("currentDate").innerHTML = now;
}
//////////////////////////////////////////////////////////////////////
window.onload = function(){

	document.getElementById("response").focus();
	document.getElementById("response").select();
};
var userId = ""
var i = 0;
var jO = {"lR":[]}
var listMarker = 0;
/*function email(event){
var x = event.keyCode;
	if(x == 65){


	alert("email");
	}
}*/
function ace(){

    window.open("https://flo.ace.info53.com:5080/ace/processECIFAdvancedSearchAction.do");

}
function lyricall(){

    window.open("https://s1flokydcdial13:8443/UDAgentPL/opt/http/webstation/index.jsp");

}
function reseta(){
location.reload();
}
function looper(){
var allListItems = document.querySelectorAll("li");
	for(i=0;i<allListItems.length;i++){
	selectText(allListItems[i].id);
}
}
function selectText(containerid) {
        if (document.selection) {
            var range = document.body.createTextRange();
            range.moveToElementText(document.getElementById(containerid));
            range.select();
        } else if (window.getSelection) {
            var range = document.createRange();
            range.selectNode(document.getElementById(containerid));
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
			/*setTimeout(function(){ document.getElementById("emailer").click(); }, 1000); */
			document.getElementById("list").click();
			/*reseta();*/
        }
    }
   /*function emailAcct(event){
   var r = document.getElementById("response")
   var x = event.keyCode;
   if(x == 13){
   if (document.getElementById("listItem").value == "Account #"){
   document.getElementById("emailer").setAttribute("href", "mailto:Karen.Adams2@53.com; Jennifer.Leiva2@53.com; Adam.Bathalter@53.com; Gene.Tudor@53.com?Subject=IRMA%20DISASTER%20%20%20" + document.getElementById("1").innerHTML)
   }
   }
   }*/
   function responseTranback(event){
   var x = event.keyCode;
   if(x==67 || document.getElementById("aNumber").value.length == 9){
	document.getElementById("phone").focus()
	document.getElementById("phone").select()
   }
  }
   function toAcc(event){
   var x = event.keyCode;
   if(x==67){
	document.getElementById("aNumber").value = ""
	document.getElementById("aNumber").focus()
	document.getElementById("aNumber").select()
	document.getElementById("note").value = ""
   }
  }
  function toresponse(event){
   var x = event.keyCode;
   if(x==86){
	document.getElementById("response").focus()
   }
  }
  function autoTranBack(){
		if(document.getElementById("phone").value.length == 13){
		document.getElementById("response").focus()
   }
  }
  function inboundOrOutBound(caller){
	if(caller.id == "outBound"){bound = "OUTBOUND"}
	if(caller.id == "inBound"){bound = "INBOUND"}
  }
   function toPhoneTranBack(event){
		var x = event.keyCode;
		if(x == 86){
		document.getElementById("phone").focus()
   }
  }

 function copy () {
			document.execCommand ('copy', false, null);
        }

function checkAcro(){
	var agent = ""
	var responseAcro = document.getElementById("response").value;
	var requesterCode = responseAcro.slice(0,2)
	var request = responseAcro.slice(2,4);
	var extras = responseAcro.slice(4);
	var explainer = ""
	var actions = 0;
	var departmentCode = "";
	var listItems2 = ["AH Name","Account #", "Date Called", "Phone Number", "Intention", "comment"];
	var listB = document.getElementById("listItem");
	var aNum = document.getElementById("aNumber").value;
		if(requesterCode == "AH" || requesterCode == "ah"){
			requester = "Account Holder"
		}
		if(requesterCode == "SA" || requesterCode == "sa"){
			requester = "Secondary Account Holder"
		}
		if(requesterCode == "TP" || requesterCode == "tp"){
			requester = "Third Party"
		}
		if(requesterCode == "UT" || requesterCode == "ut"){
			requester = "Un-Authorized Third Party"
		}
		if(requesterCode == "AT" || requesterCode == "at"){
			requester = "Authorized Third Party"
		}
			if(responseAcro.length>4){
				if(extras.slice(0,1) == "c" || extras.slice(0,1) == "C"){
					explainer = requester + " explained that ";
				}
				if(extras.slice(0,1) == "i" || extras.slice(0,1) == "I"){
					explainer = "It was explained that ";
				}
				var agentStatus = isNaN(extras.slice(extras.length-6))
				if(agentStatus != true){
					var explanation = explainer+extras.slice(1,extras.length-7);
				}
				if(agentStatus != false){
					var explanation = explainer+extras.slice(1,extras.length-2);
				}
				var actionCodePosition = extras.length-1;
				var actionTakenPosition = extras.length-2;
				if(extras.slice(actionCodePosition,actionCodePosition+1) == "s" || extras.slice(actionCodePosition,actionCodePosition+1) == "S"){
					departmentCode = " the SPOC department";
				}
				if(extras.slice(actionCodePosition,actionCodePosition+1) == "c" || extras.slice(actionCodePosition,actionCodePosition+1) == "C"){
					departmentCode = " Customer Service";
				}
				if(extras.slice(actionCodePosition,actionCodePosition+1) == "3"){
					departmentCode = " the 3rd Party Authorization fax number";
				}
				if(extras.slice(actionCodePosition,actionCodePosition+1) == "2"){
					departmentCode = " the 2nd Mortgage Department";
				}
				if(extras.slice(actionCodePosition,actionCodePosition+1) == "h" || extras.slice(actionCodePosition,actionCodePosition+1) == "H"){
					departmentCode = " the Help Desk";
				}
				if(extras.slice(actionCodePosition,actionCodePosition+1) == "e" || extras.slice(actionCodePosition,actionCodePosition+1) == "E"){
					departmentCode = " the Escrow Department";
				}
				if(extras.slice(actionCodePosition,actionCodePosition+1) == "b" || extras.slice(actionCodePosition,actionCodePosition+1) == "B"){
					departmentCode = " the Auto Bill Pay Department";
				}

					if(agentStatus != true){
						onlyAgent = extras.slice(extras.length-7)
						agent = " " + requester + " was transferred to agent: " + onlyAgent + "."
					}
					if(extras.slice(actionTakenPosition,actionTakenPosition+2) == "m" || extras.slice(actionTakenPosition,actionTakenPosition+2) == "M"){
						agent = " " + "Informed " + requester + " that we will have to take a message."
					}
					if(extras.slice(actionTakenPosition,actionTakenPosition+1) == "G" || extras.slice(actionTakenPosition,actionTakenPosition+1) == "g"){
						agent = " " + requester + " was given the number to" + departmentCode + " ."
					}
					if(extras.slice(actionTakenPosition,actionTakenPosition+1) == "T" || extras.slice(actionTakenPosition,actionTakenPosition+1) == "t"){
						agent = " " + requester + " was transferred to" + departmentCode + " ."
					}
					if(extras.slice(actionTakenPosition,actionTakenPosition+1) == "b" || extras.slice(actionTakenPosition,actionTakenPosition+1) == "B"){
						agent = " " + requester + " was given the number to" + departmentCode + " and was then transferred there."
					}
				}
	////////////////////////////////////////////////////////
	if(responseAcro == "TZ" || responseAcro == "tz"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "timezone"
			}

			makeList();
		}
		checkAcron = true
	}
	//////////////////////////////////////////////////
	if(responseAcro == "NI" || responseAcro == "ni"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "not interested in enrolling in the forbearance"
			}

			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(responseAcro == "CE" || responseAcro == "ce"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "wants cap and extend"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(responseAcro == "DIV" || responseAcro == "div"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "wants to divide the amount across payments"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(responseAcro == "IN" || responseAcro == "in"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "INACTIVE account"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(responseAcro == "TP" || responseAcro == "tp"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "3p wrng#"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(responseAcro == "CB" || responseAcro == "cb"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "call back"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(responseAcro == "NA" || responseAcro == "na"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "n/a"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(responseAcro == "NN" || responseAcro == "nn"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "no#s"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(responseAcro == "DI" || responseAcro == "di"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "disco"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(responseAcro == "BTC" || responseAcro == "btc"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "bad time, call back later"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(responseAcro == "BTW" || responseAcro == "btw"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "bad time, will call us back later"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(responseAcro == "HU" || responseAcro == "hu"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "party hung up."
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(responseAcro == "VN" || responseAcro == "vn"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "vm nml"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(responseAcro == "VL" || responseAcro == "vl"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "vm lmtcb"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(responseAcro == "VF" || responseAcro == "vf"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "vm full"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(responseAcro == "NV" || responseAcro == "nv"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "no voice mail"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(responseAcro == "D" || responseAcro == "d"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "deceased"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "MP" || request == "mp"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "MAKE PAYMENT"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " wanted to make a payment. " + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "wf" || request == "WF"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "WAIVE LATE FEES"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " wanted to waive late fees on the account." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "dc" || request == "DC"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "QUESTION ABOUT A CHECK"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " is having trouble depositing a check into their account." + explanation  + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "do" || request == "DO"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "CONFUSED ABOUT DOCUMENT"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " wanted to know the meaning of a document they received." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(request == "ss" || request == "SS"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "SHORT-SELL QUESTION"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " had questions about short-sell." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(request == "et" || request == "ET"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "EXTERNAL TRANSFER"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " requested to be transferred to another department." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "il" || request == "IL"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "INSTALLMENT LOAN QUESTION"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " had questions about an installment loan." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
			//////////////////////////////////////////////////
	if(request == "po" || request == "PO"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "PAY-OFF QUESTIONS"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " had questions about pay-off." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "b/" || request == "B/"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "TURN OFF AUTO BILL PAY"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " wanted to turn OFF auto bill pay." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "bo" || request == "BO"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "TURN ON AUTO BILL PAY"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " wanted to turn ON auto bill pay." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(request == "VP" || request == "vp"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "VERIFY PAYMENT"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " wanted to verify that we received a payment." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(request == "pa" || request == "PA"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "PAYMENT ARRANGEMENT"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " wanted to set up a payment arrangement." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "hq" || request == "HQ"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "HARDSHIP QUESTIONS"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " had questions about hardship." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(request == "BR" || request == "br"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "BREACH QUESTIONS"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " had questions about a breach." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "df" || request == "DF"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "DEFERMENT"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " wanted deferment." + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "in" || request == "IN"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "INSURANCE QUESTIONS"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " had questions about insurance." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "rp" || request == "RP"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "QUESTION ABOUT RETURNED PAYMENT"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " had questions about a returned payment." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "sc" || request == "SC"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "MONTHLY STATEMENT REQUEST"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " wanted a copy of their monthly statement." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "st" || request == "ST"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "MONTHLY STATEMENT REQUEST"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " had a question about their monthly statement." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "cn" || request == "CN"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "COLLECTION NOTICES QUESTIONS"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " had questions about collections notices they were receiving." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "wc" || request == "WC"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "CEASE AND DESIST REQUEST"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " wanted cease and desist." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "fq" || request == "FQ"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "FLAG QUESTION"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " had questions about a flag on their account." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(request == "as" || request == "AS"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "ACCOUNT STATUS QUESTIONS"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " had questions about the status of their account." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
			//////////////////////////////////////////////////
	if(request == "lp" || request == "LP"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "LOWER PAYMENTS"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " would like to lower their monthly payments." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "mq" || request == "MQ"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "MISAPPLIED PAYMENTS"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " had questions about a misapplied payment." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "NF" || request == "nf"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "NEEDED FAX#"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " needed fax number." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(request == "cq" || request == "CQ"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "CREDIT SCORE QUESTIONS"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " had questions pertaining to their credit score." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "es" || request == "ES"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "ESCROW QUESTIONS"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " had questions pertaining to their escrow." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(request == "we" || request == "WE"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "EXTENSION QUESTION"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " wanted an extension." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(request == "it" || request == "IT"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "INTEREST QUESTION"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " had questions about interest on the account." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(request == "cp" || request == "CP"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "CANCEL PAYMENT"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " wanted to cancel a payment." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "ao" || request == "AO"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "ACCEPT OFFER"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " wanted to accept an offer." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(request == "gq" || request == "GQ"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "GENERAL QUESTION"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " had general questions about the account." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
			//////////////////////////////////////////////////
	if(request == "SP" || request == "sp"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "PAYMENT"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " wanted to schedule a payment." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
				//////////////////////////////////////////////////
	if(request == "QC" || request == "qc"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = requester;
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = "QUESTION ABOUT A CHECK"
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = requester + " had questions about a check." + explanation + agent;
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(responseAcro == "DN" || responseAcro == "dn"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "dnc"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(responseAcro == "CD" || responseAcro == "cd"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "c&d"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
			//////////////////////////////////////////////////
	if(responseAcro == "BK" || responseAcro == "bk"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "BK"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
				//////////////////////////////////////////////////
	if(responseAcro == "B3" || responseAcro == "b3"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "CH.13 BK"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
					//////////////////////////////////////////////////
	if(responseAcro == "B7" || responseAcro == "b7"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "CH.7 BK"
			}
			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(responseAcro == "LT" || responseAcro == "lt"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]


			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "left message with 3p for AH to call us back"
			}

			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
	//////////////////////////////////////////////////
	if(responseAcro == "RN" || responseAcro == "rn"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]


			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "rna"
			}

			makeList();
		}
		checkAcron = true
	}
	///////////////////////////////////////////////////
		//////////////////////////////////////////////////
	if(responseAcro == "NF" || responseAcro == "nf"){
		for(i=0;i<listItems2.length;i++){
			listB.value = listItems2[i]

			if(listB.value == "Phone Number"){
				document.getElementById("response").value = document.getElementById("phone").value
			}
			if(listB.value == "Account #"){
				document.getElementById("response").value = document.getElementById("aNumber").value
			}
			if(listB.value == "AH Name"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Date Called"){
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listB.value == "Month Forb. Started"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "Intention"){
				document.getElementById("response").value = ""
			}
			if(listB.value == "comment"){
				document.getElementById("response").value = "account is not in forbearance"
			}
			makeList();
		}
		checkAcron = true
	}

	//////////////////////////////////////////////////
	if((listB.value == "Intention" && responseAcro == "P")||(listB.value == "Intention" && responseAcro == "p")){
				document.getElementById("response").value = "PAYMENT PLAN"
	}
	if((listB.value == "Intention" && responseAcro == "PA")||(listB.value == "Intention" && responseAcro == "pa")){
				document.getElementById("response").value = "PAYMENT"
	}
	if((listB.value == "Intention" && responseAcro == "R")||(listB.value == "Intention" && responseAcro == "r")){
				document.getElementById("response").value = "REINSTATE"
	}
	if((listB.value == "Intention" && responseAcro == "E")||(listB.value == "Intention" && responseAcro == "e")){
				document.getElementById("response").value = "EXTEND FORBEARANCE"
	}
	if((listB.value == "Intention" && responseAcro == "M")||(listB.value == "Intention" && responseAcro == "m")){
				document.getElementById("response").value = "MODIFICATION"
	}
	if((listB.value == "Intention" && responseAcro == "S")||(listB.value == "Intention" && responseAcro == "s")){
				document.getElementById("response").value = "STAY DELINQUENT"
	}
	if((listB.value == "Intention" && responseAcro == "U")||(listB.value == "Intention" && responseAcro == "u")){
				document.getElementById("response").value = "UNDECIDED"
	}
	///////////////////////////////////////////////////
	if(listB.value == "Intention" && responseAcro.length > 1){
			var intentionComponent = responseAcro.slice(0,1);
			monthComponent = responseAcro.slice(1,3);
			dateComponent = responseAcro.slice(3,5);
				if((intentionComponent == "R")||(intentionComponent == "r")){
					document.getElementById("response").value = "reinstate"
				}
				if((intentionComponent == "P")||(intentionComponent == "p")){
							document.getElementById("response").value = "repayment plan"
				}
				if((intentionComponent == "PA")||(intentionComponent == "pa")){
							document.getElementById("response").value = "payment"
				}
				if((intentionComponent == "E")||(intentionComponent == "e")){
							document.getElementById("response").value = "extend forbearance"
				}
				if((intentionComponent == "M")||(intentionComponent == "m")){
							document.getElementById("response").value = "modification"
				}
				if((intentionComponent == "S")||(intentionComponent == "s")){
							document.getElementById("response").value = "stay delinquent"
				}
				if((intentionComponent == "U")||(intentionComponent == "u")){
							document.getElementById("response").value = "undecided"
				}
			}
		}
var checkAcron = false
function setSpreadSheetName(bound) {
    var getName = prompt("What would you like to call your spreadsheet?");
    if (getName != null) {
       spreadSheetName = getName;
    }
}
function aaa(event){
setTimeout(placingStuff(event), 1000);
}

	var requester = ""
function placingStuff(event){
var responseAcro = document.getElementById("response").value;
	var requesterCode = responseAcro.slice(0,2)
	var request = responseAcro.slice(2);
	var listItems = ["AH Name", "Account #", "Date Called", "Phone Number", "Intention", "Comment"];
		var listItem = document.getElementById("listItem").value
		var accountNum = document.getElementById("aNumber");
		var respo = document.getElementById("response")
		var phono = document.getElementById("phone")
		var noter = document.getElementById("note")
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				var day = today.getDay();
				var date = today.getDate();
				var year = today.getFullYear();
				var month = today.getMonth();
				var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
				var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
				var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]

    var x = event.keyCode;
        if(x == 13){
		checkAcro();

		if(checkAcron === false){


			if(requesterCode == "AH" || requesterCode == "ah" && listItem == "AH Name"){
			document.getElementById("response").value = "Account Holder"
			requester = "Account Holder"
		}
		if(requesterCode == "SA" || requesterCode == "sa" && listItem == "AH Name"){
			document.getElementById("response").value = "Secondary Account Holder"
			requester = "Secondary Account Holder"
		}
		if(requesterCode == "TP" || requesterCode == "tp" && listItem == "AH Name"){
			document.getElementById("response").value = "Third Party"
			requester = "Third Party"
		}
		if(requesterCode == "UT" || requesterCode == "ut" && listItem == "AH Name"){
			document.getElementById("response").value = "Un-Authorized Third Party"
			requester = "Un-Authorized Third Party"
		}
		if(requesterCode == "AT" || requesterCode == "at" && listItem == "AH Name"){
			document.getElementById("response").value = "Authorized Third Party"
			requester = "Authorized Third Party"
		}

		 makeList();
			if(typeof listItems[i] !== "undefined"){
			document.getElementById("listItem").value = listItems[i];
			}
			if(listItem == "UID"){
			userId = respo.value
				document.getElementById("csv-file").click()
				document.getElementById("aNumber").focus()
				document.getElementById("aNumber").click()
			   }
			}
			if(listItem != "AH Name"){
			document.getElementById("response").value = "";
			}
			if(listItem == "AH Name"){
			document.getElementById("response").value = accountNum.value;
			}


			if(listItem == "Date Called"){
			respo.value = phono.value;
			}

			if(listItem == "Account #"){
					document.getElementById("response").value = (month+1) + " / "+date +" / "+year
			}
			if(listItem == "Intention" && document.getElementById("4").innerText == "Intention: REPAYMENT PLAN"){
				respo.value = requester + " would like to set up a repayment plan."
				i++
				aaa(event);
			}
			if(listItem == "Intention" && document.getElementById("4").innerText == "Intention: PAYMENT"){
				respo.value = requester + " wanted to make a payment."
				i++
				aaa(event);
			}
			if(listItem == "Intention" && document.getElementById("4").innerText == "Intention: MODIFICATION"){
				respo.value = requester + " accepted the Modification."
				i++
				aaa(event);
			}
			if(listItem == "Intention" && document.getElementById("4").innerText == "Intention: REINSTATE"){
				respo.value = requester + " would like to Reinstate."
				i++
				aaa(event);
			}
			if(listItem == "Intention" && document.getElementById("4").innerText == "Intention: EXTEND FORBEARANCE"){
				respo.value = requester + " wants an Extension."
				i++
				aaa(event);
			}
			if(listItem == "Intention" && document.getElementById("4").innerText == "Intention: STAY DELINQUENT"){
				respo.value = requester + " stay Delinquent."
				i++
				aaa(event);
			}
			if(listItem == "Intention" && document.getElementById("4").innerText == "Intention: UNDECIDED"){
				respo.value = requester + " is currently Undecided."
				i++
				aaa(event);
			}
				/////////////////////////////////////////////////////////////////////////////////////////////////////////////
				if(listItem == "Intention" && document.getElementById("4").innerText == "Intention: repayment plan"){
					respo.value = requester + " stated on " + monthComponent + "/" + dateComponent + " that they would like to set up a repayment plan."
					i++
					aaa(event);
				}
				if(listItem == "Intention" && document.getElementById("4").innerText == "Intention: payment"){
					respo.value = requester + " made a payment towards their disaster forbearance amount on " + monthComponent + "/" + dateComponent + ". "
					i++
					aaa(event);
				}
				if(listItem == "Intention" && document.getElementById("4").innerText == "Intention: modification"){
					respo.value = requester + " stated on " + monthComponent + "/" + dateComponent + " that they would like a Cap and Extend modification at the end of the forbearance period."
					i++
					aaa(event);
				}
				if(listItem == "Intention" && document.getElementById("4").innerText == "Intention: reinstate"){
					respo.value = requester + " stated on " + monthComponent + "/" + dateComponent + " that they would like to Reinstate at the end of the forbearance period."
					i++
					aaa(event);
				}
				if(listItem == "Intention" && document.getElementById("4").innerText == "Intention: extend forbearance"){
					respo.value = requester + " stated on " + monthComponent + "/" + dateComponent + " that they would like to Extend the forbearance at the end of the current forbearance period."
					i++
					aaa(event);
				}
				if(listItem == "Intention" && document.getElementById("4").innerText == "Intention: stay delinquent"){
					respo.value = requester + " stated on " + monthComponent + "/" + dateComponent + " that they want to remain Delinquent at the end of the forbearance period."
					i++
					aaa(event);
				}
				if(listItem == "Intention" && document.getElementById("4").innerText == "Intention: undecided"){
					respo.value = requester + " stated on " + monthComponent + "/" + dateComponent + " that they are currently UNDECIDED about what they would like to do at the end of the forbearance period."
					i++
					aaa(event);
				}

    	                i++
                        if(i >= 7 && checkAcron != true){
						i=0
						document.getElementById("list").focus();
						document.getElementById("list").click();
						abc()
						/*placement()*/
                        document.getElementById("response").value = "";

							storeRecord()
							checkDataDisaster()
								document.getElementById("listItem").value = listItems[i];
								i++
								document.getElementById("response").value = "";
														accountCounter++

								document.getElementById("aNumber").focus()

								listMarker = 0;
								document.getElementById("note").focus();
								document.getElementById("note").select();
			phono.value = ""
	}

	}
	if(checkAcron === true){
		document.getElementById("list").focus();
						document.getElementById("list").click();
						storeRecord()
						checkDataDisaster()
						abc()
						/*placement()*/
                        document.getElementById("response").value = "";


							checkDataDisaster()
							document.getElementById("response").focus()
							i=0
								document.getElementById("listItem").value = listItems[i];
								i++
								document.getElementById("response").value = "";
								document.getElementById("intro").focus();
								document.getElementById("response").focus();

														accountCounter++

								document.getElementById("aNumber").focus()

								listMarker = 0
								checkAcron = false
								document.getElementById("note").focus();
								document.getElementById("note").select();
			phono.value = ""
	}
}
if(listItem == "Account #"){
var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var day = today.getDay();
  var date = today.getDate();
  var year = today.getFullYear();
  var month = today.getMonth();
  var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
  var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
				document.getElementById("response").value = monArray[month+1] +" / "+date +" / "+year
			}


function makeList() {

var a = document.getElementById("listItem").value;
var r = document.getElementById("response");
	var node = document.createElement("LI");
    var textnode = document.createTextNode(a + ": " + r.value);
if(document.getElementById("listItem").value !== "UID"){
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node).setAttribute("id", JSON.stringify(listMarker), "onmouseup", "copy()");
listMarker++;
r.value = ""
}
}
function abc() {
var response = document.getElementById("response").value;
var listItem = document.getElementById("listItem").value;
	var liRe = {"listItem": "", "response": ""}
   	liRe.listItem = listItem;
    liRe.response = response;
    jO.lR.push(liRe);
}


/*function placement(){
var text = "";
for(var i=0;i<jO.lR.length;i++){
	text += jO.lR[i].listItem + " " + jO.lR[i].response;
}
document.getElementById("txt").innerHTML = text;
}*/
///////////////////////////////////////////////////////////////////////////////////


//function that stores the records in the records Object
var recordsObj = {"pr":[]};
function storeRecord(){
var list = document.getElementById("list");

var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var day = today.getDay();
  var date = today.getDate();
  var year = today.getFullYear();
  var month = today.getMonth();
  var monArray = [0,"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  var week = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
  var time = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]


if(list.children.length == 5){
var acc = document.getElementById("0");
var name = document.getElementById("1");
var datecll = document.getElementById("3");
var pnumber = document.getElementById("2");
var intention = document.getElementById("4");
var comment = document.getElementById("5");
}
if(list.children.length == 6){
var acc = document.getElementById("1");
var name = document.getElementById("0");
var datecll = document.getElementById("2");
if(typeof monthComponent === "undefined"){
	monthComponent = month+1;
}
if(typeof monthComponent !== "undefined"){
	var datecll2 = monthComponent +" / "+dateComponent +" / "+year
}
var pnumber = document.getElementById("3");
var intention = document.getElementById("4");
var comment = document.getElementById("5");
}//the records object


        	var recordObj = {"UID":"","Hurricane":"","AH Name":"", "Account #":"", "Date Called":"","Phone Number":"","Month Forb. Started":"","Intention":""};
			recordObj["Account #"] = document.getElementById("aNumber").value;
			var intentionDetermine = intention.innerHTML.slice(11);
			recordObj["AH Name"] = name.innerHTML.slice(9);
			if(intentionDetermine != "modification" || intentionDetermine != "undecided" || intentionDetermine != "reinstate" || intentionDetermine != "extend forbearance" || intentionDetermine != "stay delinquent"){
				recordObj["Date Called"] = datecll.innerHTML.slice(12);
			}
			if(intentionDetermine == "modification" || intentionDetermine == "undecided" || intentionDetermine == "reinstate" || intentionDetermine == "extend forbearance" || intentionDetermine == "stay delinquent"){
				recordObj["Date Called"] = datecll2;
			}
			recordObj["Phone Number"] = pnumber.innerHTML.slice(13);
			recordObj["Intention"] = intention.innerHTML.slice(11);
			recordObj["Comment"] = comment.innerHTML.slice(9);
			recordsObj.pr.push(recordObj);
}
////////////////////////////////////////////////////////////////////////////

  function chngAcc(event){
	var aNum = document.getElementById("aNumber");
	var y = event.keyCode;

if (y == 37){
	accountCounter--
	if(accountCounter == -1){
		accountCounter = (data.data.length-1);
	}
	aNum.value = data.data[accountCounter]["Acct Num"];
	document.getElementById("aNumberCounter").innerHTML = accountCounter + " / " + data.data.length
}




	if (y == 39){
	accountCounter++
	if(accountCounter == data.data.length){
		accountCounter = 0;
	}
aNum.value = data.data[accountCounter]["Acct Num"];
	document.getElementById("aNumberCounter").innerHTML = accountCounter + " / " + data.data.length
}
}
