var bound = "";
var b = 0;
function closeW(){
	close();
}
//////////////////////////////////////////////////////////////////////
$(document).ready(function(){
   $("#phone").focus(function(){
        $(this).animate({height: '120px', width: '80%', left: '150px', top: '30%'}, "slow").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
	}).focusout(function(){
        $(this).animate({height: '30px', width: '200px', top:"5%", left: '52%'}, "slow").css({'font-size':15, 'opacity':0.5, 'background-color': 'grey'});
    });
	 $("#aNumber").focus(function(){
        $(this).animate({height: '120px', width: '80%', left: '150px', top: '30%'}, "slow").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
	}).focusout(function(){
        $(this).animate({height: '30px', width: '200px', top:"5%", left: '26%'}, "slow").css({'font-size':15, 'opacity':0.5, 'background-color': 'grey'});
    });
	 $("#listItem").focus(function(){
        $("#listItem").animate({height: '120px', width: '50%', left: '0%', top: '30%'}, "slow").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
		$("#response").animate({height: '120px', width: '50%', left: '50%', top: '30%'}, "slow").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
	}).focusout(function(){
        $("#listItem").animate({height: '25px', width: '20%', top:"10%", left: '25%'}, "slow").css({'font-size':25, 'opacity':0.5, 'background-color': 'grey'});
		$("#response").animate({height: '25px', width: '20%', top:"10%", left: '47%'}, "slow").css({'font-size':25, 'opacity':0.5, 'background-color': 'grey'});
    });
	 $("#response").focus(function(){
        $("#listItem").animate({height: '120px', width: '50%', left: '0%', top: '30%'}, "slow").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
		$("#response").animate({height: '120px', width: '50%', left: '50%', top: '30%'}, "slow").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
	}).focusout(function(){
        $("#listItem").animate({height: '25px', width: '20%', top:"10%", left: '25%'}, "slow").css({'font-size':25, 'opacity':0.5, 'background-color': 'grey'});
		$("#response").animate({height: '25px', width: '20%', top:"10%", left: '47%'}, "slow").css({'font-size':25, 'opacity':0.5, 'background-color': 'grey'});
    });
	 $("#note").focus(function(){
        $(this).animate({height: '120px', width: '100%', left: '0', top: '30%'}, "slow").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
	}).focusout(function(){
        $(this).animate({height: '25px', width: '50%', top:"15%", left: '21%'}, "slow").css({'font-size':25, 'opacity':0.5, 'background-color': 'grey'});
    });
	$("#inBound").click(function(){
        $("#inBound").css({'background-color':"red", 'opacity':1})
		$("#outBound").css({'background-color':"yellow", 'opacity':0.5})
	});
	$("#outBound").click(function(){
        $("#outBound").css({'background-color':"red", 'opacity':1})
		$("#inBound").css({'background-color':"yellow", 'opacity':0.5})
	});
});

function getOut(){
	document.getElementById('intentions').click();
}
//////////////////////////////////////////////////////////////////////
document.getElementById('disasterTable').onclick = checkDataDisaster();

function checkDataDisaster(){
if(recordsObj.pr == "[]"){
		alert("There is no info for this session.");

	}
	setTable();
}

function forbOptions(a){
var selectedValue = a
		document.getElementById("response").value = selectedValue.value;
		setTimeout(function(){
		document.getElementById("response").focus();
		document.getElementById("rein").checked = false;
		document.getElementById("ext").checked = false;
		document.getElementById("mod").checked = false;
		document.getElementById("stayDel").checked = false}, 20);
}
function moveToAccount(event){
var noteEvent = event.keyCode;
if(noteEvent == 67){
	document.getElementById("aNumber").focus();
	document.getElementById("aNumber").select();
	document.getElementById("note").value = ""
}
}
/////////////////////////////////////////////////////////
/*var recordsObj = {"pr":[]};
function storeRecord(){
var aname = document.getElementById("0");
var acc = document.getElementById("1");
var datecll = document.getElementById("2");
var pnumber = document.getElementById("3");
var mforb = document.getElementById("4");
var intention = document.getElementById("5");
var comment = document.getElementById("6");
//the records object


        	var recordObj = {"UID":"","Hurricane":"","AH Name":"", "Account #":"", "Date Called":"","Phone Number":"","Month Forb. Started":"","Intention":""};
			recordObj["AH Name"] = aname.innerHTML.slice(9);
			recordObj["Account #"] = document.getElementById("aNumber").value;
            recordObj["Date Called"] = datecll.innerHTML.slice(12);
			recordObj["Phone Number"] = pnumber.innerHTML.slice(13);
            recordObj["Month Forb. Started"] = mforb.innerHTML.slice(20);
			recordObj["Intention"] = intention.innerHTML.slice(11);
			recordObj["Comment"] = comment.innerHTML.slice(9);
			recordsObj.pr.push(recordObj);*/

			//////////////////////////////////////////////////////////////////////////////
function setTable() {

	var resource = document.getElementById("resource");
    var table = document.getElementById("myTable");
	var list = document.getElementById("list");
	for(ii=0;ii<recordsObj.pr.length;ii++){

	var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(0);
	var cell3 = row.insertCell(0);
    var cell4 = row.insertCell(0);
	var cell5 = row.insertCell(0);
	var cell6 = row.insertCell(0);

	cell6.innerHTML = recordsObj.pr[ii]["Account #"]
	cell5.innerHTML = recordsObj.pr[ii]["AH Name"]
	cell4.innerHTML = recordsObj.pr[ii]["Phone Number"]
	cell3.innerHTML = recordsObj.pr[ii]["Date Called"]
	cell2.innerHTML = recordsObj.pr[ii]["Intention"]
	cell1.innerHTML = recordsObj.pr[ii]["Comment"]
	/*for(nodes=0;nodes<list.childNodes.length;nodes++){
	list.removeChild(list.childNodes[nodes])
	}*/
document.getElementById("note").value = bound + ":" +  recordsObj.pr[ii]["Phone Number"] + ": " + recordsObj.pr[ii]["Comment"] + " / " + userId;
while (list.firstChild) {
    list.removeChild(list.firstChild);
}

	recordsObj = {"pr":[]};
	listMarker = 0
}
	b++;
}

document.getElementById('disasterTableDownload').onclick = function checkDataDisaster(){

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

	if(b>0){
	b=0;
		setSpreadSheetName(bound)
		exp(spreadSheetName+(month+1)+date+'.csv');
	}
}

function exp(filename){
var mainInfo = [];
var allRow = document.querySelectorAll("tr");
	for(q=0;q<allRow.length;q++){
		var singleRow = [];
		var lengthOfColumns = allRow[q].querySelectorAll("td");
		for (h=0;h<lengthOfColumns.length; h++){
			singleRow.push(lengthOfColumns[h].innerText)
		}
		mainInfo.push(singleRow.join(","));
	}
		downloadCSV(mainInfo.join("\n"), filename);

	}

function downloadCSV(csv, filename){
var csvFileSpace;
var downloadLink;
csvFileSpace = new Blob([csv], {type:"text/csv"});
downloadLink = document.createElement("a");
downloadLink.download = filename;
downloadLink.href = window.URL.createObjectURL(csvFileSpace);
downloadLink.style.display = "none";
document.body.appendChild(downloadLink);
downloadLink.click();
}
function clearData() {
    var txt;
    var r = confirm("Would you like to clear the storage?  This will PERMANENTLY delete all of the results for this session!");
    if (r == true) {
		recordsObj.pr = [];
		alert("Session info deleted");
    }
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function waiter(){
setTimeout(phoneEvaluator(), 1000);
}
function waiterDialer(){
setTimeout(phoneEvaluatorDialer(), 1000);
}
function waiterAreaCode(){
setTimeout(compareAreaCodes2(), 1000);
}
function phoneEvaluatorDialer(){
		var decider = false;
		var stringArray2 = []
		var stringArray3 = []
		var phoneFieldString = document.getElementById("phone")
		if(phoneFieldString.value.length > 0){
			for(pfsv = 0; pfsv<phoneFieldString.value.length;pfsv++){
				stringArray2.push(phoneFieldString.value[pfsv])
			}
			for(pfsv2=0;pfsv2<stringArray2.length;pfsv2++){
				if((stringArray2[pfsv2] == "(") || (stringArray2[pfsv2] == ")") || (stringArray2[pfsv2] == " ") || (stringArray2[pfsv2] == "-")){
					stringChecker2(stringArray2)
					decider = true;
					break;
				}

			}
			if(decider == false){
			numberFormatter2(stringArray2)
			}
		}
	}

function stringChecker2(stringArray2){
var stringValue3 = ""
var stringArray3 = []
for(z=0;z<stringArray2.length;z++){
/*check for the un-needed characters*/
	if((stringArray2[z] == "(") || (stringArray2[z] == ")") || (stringArray2[z] == " ") || (stringArray2[z] == "-")){
	/*delete the un-needed characters*/
		delete stringArray2[z];
	}
	/*place the newly formatted array (that doesnt have the un-needed characters) into the variable "stringValue2"*/
	/*stringValue2 += stringArray[z]*/
}
for(y=0;y<stringArray2.length;y++){
		if(typeof stringArray2[y] == "undefined"){
			continue
		}
		stringArray3.push(stringArray2[y])
		stringValue3 += stringArray2[y]
	}
	numberFormatter2(stringArray3)
}


function numberFormatter2(stringToFormat){
	var string = document.getElementById("phone");
	var	totalString3 = ""
			stringToFormat.splice(0, 0, "(")
			stringToFormat.splice(4, 0, ")")
			stringToFormat.splice(8, 0, "-")
			for(y=0;y<stringToFormat.length;y++){
				totalString3 += stringToFormat[y]
			}
		string.value = totalString3
		return totalString3
	}
