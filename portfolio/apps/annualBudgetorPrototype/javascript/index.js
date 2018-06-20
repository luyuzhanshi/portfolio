window.onload =	document.getElementById("hourlyPayRateInput").focus();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////UNIVERSAL	GLOBALS////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var	dailyPayGrossDisplay = document.getElementById("dailyPayGrossDisplay");
var	weeklyPayGrossDisplay = document.getElementById("weeklyPayGrossDisplay");
var	biWeeklyPayGrossDisplay = document.getElementById("biWeeklyPayGrossDisplay");
var	dailyPayNetDisplay = document.getElementById("dailyPayNetDisplay");
var	weeklyPayNetDisplay = document.getElementById("weeklyPayNetDisplay");
var	biWeeklyPayNetDisplay = document.getElementById("biWeeklyPayNetDisplay");
var	dailyTaxCostDisplay = document.getElementById("dailyTaxCostDisplay");
var	weeklyTaxCostDisplay = document.getElementById("weeklyTaxCostDisplay");
var	biWeeklyTaxCostDisplay = document.getElementById("biWeeklyTaxCostDisplay");
var daysAweekInput = document.getElementById("daysAweekInput");
var	hourlyPayRateInput = document.getElementById("hourlyPayRateInput");
var	numberOfHoursInput = document.getElementById("numberOfHoursInput");
var	taxPercentInput	= document.getElementById("taxPercentInput");
var	firstPayDateInput =	document.getElementById("firstPayDateInput");
var	payDateDisplay = document.getElementById("payDateDisplay");
var	billName = document.getElementById("billName");
var	billAmount = document.getElementById("billAmount");
var	inputDate = document.getElementById("dateToBeSorted");
var	listDisplay = document.getElementById("dateDisplay");
var	weeklyPayDateArray = [];
var	completeBillObjArray = {billInformation:[]};
var completeIncomeObjArray = {incomeInformation:[]};
var	billDueMonthDay = ""
var	billDueDateId =	""
var	billDueDateDifference = ""
var	billTotalStore = [];
var billTotalStorage = [];
var	billTotal = 0;
var hasTheListRunAgain = false;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////UNIVERSAL	GLOBALS////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////taskRouter/ROUTER	FUNCTION////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function taskRouter(event,tag){
  var	x =	event.keyCode;
  if(tag.id == "hourlyPayRateInput"){
      if(hourlyPayRateInput.value.length == 6){
        numberOfHoursInput.focus();
      }
    }
  if(tag.id == "numberOfHoursInput"){
    if(numberOfHoursInput.value.length == 1 && numberOfHoursInput.value != 0){
      daysAweekInput.focus();
    }
  }
  if(tag.id == "daysAweekInput"){
    if(daysAweekInput.value.length == 1){
      taxPercentInput.focus();
    }
  }
  if(tag.id == "taxPercentInput"){
    if(taxPercentInput.value.length == 3){
      firstPayDateInput.focus();
    }
  }
    if(x ==	13 || tag.id ==	"dateToBeSorted" || tag.id == "firstPayDateInput"){
      if(tag.id == "billName"){
        billAmount.focus();
      }
    if(tag.id == "billAmount"){
      inputDate.focus();
      }
    if(tag.id == "dateToBeSorted"){
      checkDateMatch()
      makeCompleteBillObject();
    if(completeBillObjArray.billInformation.length>1){
      sortYear();
    }
      hasTheListRunAgain = false;
      makeList();
      billName.value="";
      billAmount.value="";
      inputDate.value="";
      billName.focus();
    }
    if(tag.id == "firstPayDateInput"){
      getWeekDay(tag)
      incomeInformationStore()
      incomeDisplayer()
      makePayDayList()
      hourlyPayRateInput.value = "";
      numberOfHoursInput.value = "";
      daysAweekInput.value = "";
      taxPercentInput.value = "";
      firstPayDateInput.value = "";
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////taskRouter/ROUTER	FUNCTION////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////DATE	ORGANIZER///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////PUSH	DATE	OBJECT/////////////////////////////////
function makeCompleteBillObject(){
  var	completeBillObj	= {"billName":"","billAmount":"","billDueYear":"","billDueMonth":"","billDueDay":"","billDueMonthDay":"","billDueDateId":"","billRemainder":"","billDueDateDifference":"","percentage":"",
                "update":function(){
                  var billTotal = 0;
                    for(totalCounter=0;totalCounter<completeBillObjArray.billInformation.length;totalCounter++){
                        billTotal += parseInt(completeBillObjArray.billInformation[totalCounter].billAmount.slice(1));
                      }
                  var percentInt = parseInt(this.billAmount.slice(1))/billTotal
                  var percentHundred = (percentInt * 100).toFixed(2)
                  var percentHundredString = percentHundred.toString() + "%"
                    this.percentage = percentHundredString
                  }
                };
  var	year =	parseInt(inputDate.value.slice(0,4))
  var	month = parseInt(inputDate.value.slice(5,7))
  var	day	= parseInt(inputDate.value.slice(8,10))
    completeBillObj.billDueDateDifference = billDueDateDifference
    completeBillObj.billDueMonthDay	= billDueMonthDay
    completeBillObj.billDueDateId = billDueDateId
    completeBillObj.billName = billName.value
    completeBillObj.billAmount = billAmount.value
    completeBillObj.billDueYear	= year
    completeBillObj.billDueMonth = month
    completeBillObj.billDueDay = day;
    billTotalStorage.push(completeBillObj.billAmount);
      completeBillObjArray.billInformation.push(completeBillObj);
      inputDate.value	= ""
    }
/*
function MakeCompleteBillObject(){
  this.billName:"",
  this.billAmount:"",
  this.billDueYear:"",
  this.billDueMonth:"",
  this.billDueDay:"",
  this.billDueMonthDay:"",
  this.billDueDateId:"",
  this.billRemainder:"",
  this.billDueDateDifference:"",
  this.percentage:calculate(billAmount.value)
  }*/
/////////////////////////PUSH	DATE	OBJECT////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////DATE	ORGANIZER///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function update(){
  for(totalCounter=0;totalCounter<completeBillObjArray.billInformation.length;totalCounter++){
    completeBillObjArray.billInformation[totalCounter].update()
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////DATE	ORGANIZER///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////SORT	YEAR/MONTH/DAY/////////////////////////////
function sortYear(){
  for(i=0;i<completeBillObjArray.billInformation.length;i++){
    if(typeof completeBillObjArray.billInformation[i+1]	==	"undefined"){break}
    if(completeBillObjArray.billInformation[i].billDueYear>completeBillObjArray.billInformation[i+1].billDueYear){
      var	objToSwitch	= completeBillObjArray.billInformation[i+1];
        completeBillObjArray.billInformation[i+1] = completeBillObjArray.billInformation[i];
        completeBillObjArray.billInformation[i]	= objToSwitch;
        i=0
      }
    }
    if(completeBillObjArray.billInformation[0].billDueYear	>	completeBillObjArray.billInformation[1].billDueYear){
      sortYear()
    }
    sortMonth()
  }
function sortMonth(){
  for(a=0;a<completeBillObjArray.billInformation.length;a++){
    if(typeof completeBillObjArray.billInformation[a+1] == "undefined"){break}
    if(completeBillObjArray.billInformation[a].billDueYear == completeBillObjArray.billInformation[a+1].billDueYear){
      if(completeBillObjArray.billInformation[a].billDueMonth>completeBillObjArray.billInformation[a+1].billDueMonth){
        var	objToSwitch	= completeBillObjArray.billInformation[a+1];
          completeBillObjArray.billInformation[a+1] = completeBillObjArray.billInformation[a];
          completeBillObjArray.billInformation[a] = objToSwitch;
          a=0
        }
      }
    }
    if((completeBillObjArray.billInformation[0].billDueYear==completeBillObjArray.billInformation[1].billDueYear)&&(completeBillObjArray.billInformation[0].billDueMonth	>	completeBillObjArray.billInformation[1].billDueMonth)){
      sortMonth()
    }
  sortDay()
}
function sortDay(){
  for(d=0;d<completeBillObjArray.billInformation.length;d++){
    if(typeof completeBillObjArray.billInformation[d+1]	== "undefined"){break}
    if(completeBillObjArray.billInformation[d].billDueYear == completeBillObjArray.billInformation[d+1].billDueYear){
      if(completeBillObjArray.billInformation[d].billDueMonth	== completeBillObjArray.billInformation[d+1].billDueMonth){
        if(completeBillObjArray.billInformation[d].billDueDay>completeBillObjArray.billInformation[d+1].billDueDay){
          var	objToSwitch = completeBillObjArray.billInformation[d+1];
            completeBillObjArray.billInformation[d+1] = completeBillObjArray.billInformation[d];
            completeBillObjArray.billInformation[d]	= objToSwitch;
            d=0
          }
        }
      }
    }

    if((completeBillObjArray.billInformation[0].billDueYear == completeBillObjArray.billInformation[1].billDueYear)&&(completeBillObjArray.billInformation[0].billDueMonth	==	completeBillObjArray.billInformation[1].billDueMonth)&&(completeBillObjArray.billInformation[0].billDueDay	> completeBillObjArray.billInformation[1].billDueDay)){
      sortDay()
    }
  }

/////////////////////////SORT	YEAR/MONTH/DAY/////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////DATE	ORGANIZER///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////INCOME CALCULATOR///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
var completeIncomeObjArray = {incomeInformation:[]}
var	hourlyPayRateInput = document.getElementById("hourlyPayRateInput");
var	numberOfHoursInput = document.getElementById("numberOfHoursInput");
var	taxPercentInput	= document.getElementById("taxPercentInput");
*/
function incomeInformationStore(){
  var payObj = {"rate":"","hour":"","days":"","tax":"","dailyPayGross":"","weeklyPayGross":"","biWeeklyPayGross":"","dailyPayNet":"","weeklyPayNet":"","biWeeklyPayNet":"","dailyTaxCost":"","weeklyTaxCost":"","biWeeklyTaxCost":""}
    var hourlyPayValue = "";
    var calculableHourlyPay = "";
    var calcNumberOfHoursInput = "";
    var taxString = "";
    var calcPercent = "";
    var days = "";
    var dailyPayGross = "";
    var weeklyPayGross = "";
    var biWeeklyPayGross = "";
    var dailyTaxCost = "";
    var weeklyTaxCost = "";
    var biWeekTaxCost = "";
    completeIncomeObjArray.incomeInformation = [];
      hourlyPayValue = hourlyPayRateInput.value;
      calculableHourlyPay = parseFloat(hourlyPayValue.slice(1, 5));
      calcNumberOfHoursInput = parseInt(numberOfHoursInput.value);
      taxString = taxPercentInput.value;
      calcPercent = taxFunction(taxString);
      days = parseInt(daysAweekInput.value);
        payObj.rate = calculableHourlyPay;
        payObj.hour = calcNumberOfHoursInput;
        payObj.days = days;
        payObj.tax = calcPercent;
          dailyPayGross = payObj.rate * payObj.hour;
          weeklyPayGross = dailyPayGross * days;
          biWeeklyPayGross = weeklyPayGross * 2;
          dailyPayNet = netReturnCalculator(calcPercent, dailyPayGross);
          weeklyPayNet = netReturnCalculator(calcPercent, weeklyPayGross);
          biWeeklyPayNet = netReturnCalculator(calcPercent, biWeeklyPayGross);
          dailyTaxCost = taxCostCalculator(dailyPayGross, dailyPayNet);
          weeklyTaxCost = taxCostCalculator(weeklyPayGross, weeklyPayNet);
          biWeeklyTaxCost = taxCostCalculator(biWeeklyPayGross, biWeeklyPayNet);
            payObj.dailyPayGross = dailyPayGross.toFixed(2);
            payObj.weeklyPayGross = weeklyPayGross.toFixed(2);
            payObj.biWeeklyPayGross = biWeeklyPayGross.toFixed(2);
            payObj.dailyPayNet = dailyPayNet.toFixed(2);
            payObj.weeklyPayNet = weeklyPayNet.toFixed(2);
            payObj.biWeeklyPayNet = biWeeklyPayNet.toFixed(2);
            payObj.dailyTaxCost = dailyTaxCost.toFixed(2);
            payObj.weeklyTaxCost = weeklyTaxCost.toFixed(2);
            payObj.biWeeklyTaxCost = biWeeklyTaxCost.toFixed(2);
              completeIncomeObjArray.incomeInformation.push(payObj);
            }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////INCOME CALCULATOR///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////DECIMAL TAX FUNCTION///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function taxFunction(truePercent){
  var rawTax = parseFloat(truePercent.slice(0, 1));
  var rawPointTax = "." + rawTax
  var finalTax = parseFloat(rawPointTax);
    return finalTax;
  }
function netReturnCalculator(calcPercent, calculablePay){
    var taxableAmount = calcPercent * calculablePay;
    var netPay = calculablePay - taxableAmount;
      return netPay;
    }
function taxCostCalculator(gross, net){
  var taxCost = gross - net;
  return taxCost;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////DECIMAL TAX FUNCTION/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////INCOME DISPLAYER PLACER//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function incomeDisplayer(){
    dailyPayGrossDisplay.innerHTML = "";
    dailyPayNetDisplay.innerHTML = "";
    dailyTaxCostDisplay.innerHTML = "";

    weeklyPayGrossDisplay.innerHTML = "";
    weeklyPayNetDisplay.innerHTML = "";
    weeklyTaxCostDisplay.innerHTML = "";

    biWeeklyPayGrossDisplay.innerHTML = "";
    biWeeklyPayNetDisplay.innerHTML = "";
    biWeeklyTaxCostDisplay.innerHTML = "";
      var dayPayGross = completeIncomeObjArray.incomeInformation[0].dailyPayGross.toString();
        dailyPayGrossDisplay.innerHTML = "DAILY GROSS INCOME:  $" + dayPayGross;
      var dayPayNet = completeIncomeObjArray.incomeInformation[0].dailyPayNet.toString();
        dailyPayNetDisplay.innerHTML = "DAILY NET INCOME:  $" + dayPayNet;
      var dayTaxCost = completeIncomeObjArray.incomeInformation[0].dailyTaxCost.toString();
        dailyTaxCostDisplay.innerHTML = "DAILY TAX COST:  $" + dayTaxCost;

      var weekPayGross = completeIncomeObjArray.incomeInformation[0].weeklyPayGross.toString();
        weeklyPayGrossDisplay.innerHTML = "WEEKLY GROSS INCOME:  $" + weekPayGross;
      var weekPayNet = completeIncomeObjArray.incomeInformation[0].weeklyPayNet.toString();
        weeklyPayNetDisplay.innerHTML = "WEEKLY NET INCOME:  $" + weekPayNet;
      var weekTaxCost = completeIncomeObjArray.incomeInformation[0].weeklyTaxCost.toString();
        weeklyTaxCostDisplay.innerHTML = "WEEKLY TAX COST:  $" + weekTaxCost;

      var biWeekPayGross = completeIncomeObjArray.incomeInformation[0].biWeeklyPayGross.toString();
        biWeeklyPayGrossDisplay.innerHTML = "BI-WEEKLY GROSS INCOME:  $" + biWeekPayGross;
      var biWeekPayNet = completeIncomeObjArray.incomeInformation[0].biWeeklyPayNet.toString();
        biWeeklyPayNetDisplay.innerHTML = "BI-WEEKLY NET INCOME:  $" + biWeekPayNet;
      var biWeekTaxCost = completeIncomeObjArray.incomeInformation[0].biWeeklyTaxCost.toString();
        biWeeklyTaxCostDisplay.innerHTML = "BI-WEEKLY TAX COST:  $" + biWeekTaxCost;
      }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////INCOME DISPLAYER PLACER//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////LIST	MAKER/////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function makeList(){
  while(listDisplay.hasChildNodes()){listDisplay.removeChild(listDisplay.firstChild)}
    update()
      for(listMark=0;listMark<completeBillObjArray.billInformation.length;listMark++){
        var billAmountToBePaid = document.createElement("INPUT");
        var	column = document.createElement("LI");
        var	billDisplay	= document.createTextNode("|BILL: " +	completeBillObjArray.billInformation[listMark].billName	+ " |AMOUNT: " + completeBillObjArray.billInformation[listMark].billAmount + "|YEAR:	" + completeBillObjArray.billInformation[listMark].billDueYear + "|MONTH: " + completeBillObjArray.billInformation[listMark].billDueMonth + " |DAY:	" + completeBillObjArray.billInformation[listMark].billDueDay	+ " |");
        var total = document.createTextNode("|TOTAL: $" + billTotal + "|");
          column.appendChild(billDisplay);
          listDisplay.appendChild(column);
            correctInputBoxes(completeBillObjArray.billInformation[listMark].billDueDay, completeBillObjArray.billInformation[listMark].billName, completeBillObjArray.billInformation[listMark].billAmount);
          }
        listDisplay.appendChild(total);
      }
function makePayDayList(){
  while(payDateDisplay.hasChildNodes()){payDateDisplay.removeChild(payDateDisplay.firstChild);}
    for(listMark2=0;listMark2<weeklyPayDateArray.length;listMark2++){
      var	column2 = document.createElement("LI");
      var	payDayDisplay = document.createTextNode(weeklyPayDateArray[listMark2]);
      var payInput = document.createElement("INPUT");
      var payGrossTotal = completeIncomeObjArray.incomeInformation[0].weeklyPayGross * weeklyPayDateArray.length;
      var payNetTotal = completeIncomeObjArray.incomeInformation[0].weeklyPayNet * weeklyPayDateArray.length;
      var payTaxCostTotal = completeIncomeObjArray.incomeInformation[0].weeklyTaxCost * weeklyPayDateArray.length;
      var totalText = document.createTextNode("|Total Weekly Gross Pay: $" + payGrossTotal + "|" + "|Total Weekly Net Pay: $" + payNetTotal + "|" + "|Total Weekly Tax Cost: $" + payTaxCostTotal + "|");
        payInput.setAttribute("id", "income"+listMark2);
        payInput.setAttribute("style", "background-color:green;");
        payInput.setAttribute("value", completeIncomeObjArray.incomeInformation[0].weeklyPayNet.toString());
        column2.appendChild(payDayDisplay);
        payDateDisplay.appendChild(column2);
        payDateDisplay.appendChild(payInput);
      }
      payDateDisplay.appendChild(totalText);

    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////LIST	MAKER/////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////place bills with paydates////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var determineDelete = 0;
/////////////////////watch out for the innerHTML of the input boxes///because they //
//are numbers they may interfere with how the program evaluates the where the input boxes are placed//
var divAmount = 0
var monthSaver = ""
var billOccurence = 0
function correctInputBoxes(billDay, billNam, billAmt){
  for(payLength5=0;payLength5<payDateDisplay.children.length-1;payLength5++){
    var billNameValue = billNam;
    var payDay = payDateDisplay.children[payLength5];
    var payDayInp = payDay.nextSibling;
    var payDayInnerHtml = payDay.innerHTML.slice(8,10)
    var monthToGet = payDay.innerHTML.slice(5,7)
      if(payDayInnerHtml <= billDay && payDayInnerHtml >= 1){
        insertAfterInput(payDayInp, billAmt, billNameValue, billOccurences(monthToGet,billDay,billAmt))
          payLength5 = payLength5 + 2;
        }
      }
      surplusPlaceDetermine()
        determineDelete++
          if(determineDelete > 0){
            listCycler()
            determineDelete=0
          }
        }



function surplusPlaceDetermine(){
  for(payLength0=0;payLength0<payDateDisplay.children.length;payLength0++){
    var checkingId = payDateDisplay.children[payLength0].id.slice(0,6)
    var idToCheck = "income"
    if(checkingId == idToCheck){
      var starterChild = payDateDisplay.children[payLength0]
        incomeToSubtractFrom = parseFloat(starterChild.value)
          if(typeof starterChild.nextSibling.id === "undefined"){break}
            totalSubtractionAmount(starterChild)
            surplusPlacer(starterChild,remainingIncome,payLength0)
            incomeToSubtractFrom = 0
            remainingIncome = 0
            amountToSubtractArray = []
            totalAmountToSubtract = 0
            checkingId = ""
            payLength0++
          }
        }
      }

function surplusPlacer(starterChild,remainingIncome,payLength0){
  var surplusInput = document.createElement("INPUT");
    surplusInput.setAttribute("id", "surplus" + payLength0);
    surplusInput.setAttribute("style", "background-color:yellow;");
    surplusInput.setAttribute("value", remainingIncome);
      starterChild.surplusPlacement(surplusInput, starterChild)
    }

Object.prototype.surplusPlacement = function (surplusInput, payDayInputBox){
                      this.parentNode.insertBefore(surplusInput, this);
                    }

var incomeToSubtractFrom = 0
var remainingIncome = 0
var amountToSubtractArray = []
var totalAmountToSubtract = 0
function totalSubtractionAmount(starterChild2){
if(starterChild2.nextSibling.nodeName !== "INPUT"){childCounter2 = 0}
  if(typeof starterChild2.nextSibling.id !== "undefined"){
      var childId = starterChild2.nextSibling.id.slice(0,starterChild2.nextSibling.id.length-1)
    }
      if(starterChild2.nodeName == "INPUT" && starterChild2.nextSibling.nodeName == "INPUT" && childId == "proRated"){
        amountToSubtractArray.push(parseFloat(starterChild2.nextSibling.value))
          for(subtraction=0;subtraction<amountToSubtractArray.length;subtraction++){
            totalAmountToSubtract+=amountToSubtractArray[subtraction];
            remainingIncome = incomeToSubtractFrom - totalAmountToSubtract;
          }
        }
      if(starterChild2.nextSibling.nodeName == "INPUT"){
          totalSubtractionAmount(starterChild2.nextSibling)
        }
      }
/*
var determineDelete2 = 0;
function surplusIncomeDisplay(proRate){
  for(listMark3=0;listMark3<weeklyPayDateArray.length;listMark3++){
    var payDayInputBox = document.getElementById("income"+listMark3)
    var remain = parseInt(payDayInputBox.value) - parseInt(proRate)
    var remainder = remain
      if(payDayInputBox.id == "income"+listMark3){
        var surplusInput = document.createElement("INPUT");
          surplusInput.setAttribute("id", "surplus" + listMark3);
          surplusInput.setAttribute("style", "background-color:yellow;");
          surplusInput.setAttribute("value", remainder);
        }
          payDayInputBox.insertAfterPayInput(surplusInput, payDayInputBox)
            }
          }*/

function billOccurences(inboundMonth,bilday,bilAmt){
  billOccurence = 0
    var monthStore = inboundMonth
    var billDay = bilday
    var billAmount = bilAmt
      for(payLength1=0;payLength1<payDateDisplay.children.length-1;payLength1++){
        var payDay = payDateDisplay.children[payLength1];
        var payDayInp = payDay.nextSibling;
        var payDayInnerHtml = payDay.innerHTML.slice(8,10)
        var monthToCheck = payDay.innerHTML.slice(5,7)
          if(payDayInnerHtml <= billDay && payDayInnerHtml >= 1 && monthStore == monthToCheck){
            billOccurence++
          }
        }

          var billCut = billAmount.slice(1)
          var billCutRaw = parseInt(billCut)
          var billPercentage = billCutRaw/billOccurence
          var billPercentageCut = billPercentage.toFixed(2)
        return 	billPercentageCut
      }
/*function numberOfPayments(billDay, billAmt, billNam){
  for(payLength=0;payLength<payDateDisplay.children.length-1;payLength++){
    var billNameValue = billNam;
    var payDay = payDateDisplay.children[payLength];
    var payDayInp = payDay.nextSibling;
    var payDayInnerHtml = payDay.innerHTML.slice(8,10)
      if(payDayInnerHtml <= billDay && payDayInnerHtml >= 1){
        var currentMonth = payDay.innerHTML.slice(5,7)
          if(currentMonth != monthSaver){
            divAmount = 1
          }
          if(currentMonth == monthSaver){
            divAmount++
          }
            monthSaver = payDay.innerHTML.slice(5,7)
          }
        }
        return divAmount;
      }*/
function divAmt(incomingMonth){
  divAmount = 0
    var monthStore = incomingMonth
      for(payLength2=0;payLength2<payDateDisplay.children.length-1;payLength2++){
        var monthToGet = payDateDisplay.children[payLength2];
          var curMon = monthToGet.innerHTML.slice(5,7)
            if(curMon == monthStore){
              divAmount++
            }
          }
        return divAmount
      }
var prorate = 0
function insertAfterInput(payDayInp, billAmt, billNameValue, divAmount){
  var payDayInptBx = payDayInp;
  var billAmtToPlace = billAmt;
  var billInputBox = document.createElement("INPUT");
    billInputBox.setAttribute("value", /*billAmtToPlace + " | " + billNameValue*/divAmount);
    billInputBox.setAttribute("style", "background-color:red;");
    billInputBox.setAttribute("id", "proRated" + prorate)
      Object.prototype.insertAfter = function (billInputBox){
        var firstSibling = this;
          this.parentNode.insertBefore(billInputBox, this.nextSibling);
          prorate++
        }
      payDayInptBx.insertAfter(billInputBox);
    }
var siblingId = 0;
//this function is called after correctInputBoxes(), which places already places input boxes after the payday boxes.  this function
// also cycles through each one of the payday input boxes from top to bottom.  as it cycles through it calls the siblingStore() for each list item
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function listCycler(){
  for(payLength=0;payLength<payDateDisplay.children.length-1;payLength++){
    siblingStore(payDateDisplay.children[payLength])
  }
}
var childCounter = 0
//this function takes ANY incoming element and checks whether if its nextSibling is an input item.  if the nextSibling is not an input box, it will reset the childcounter.  the child counter is used
//to uniquely mark the id of the incoming elements next child.
//this function also checks to see if the the incoming elements nextChild is an input element
//this is to make sure that any element that is not an input box is not put into this function.
//this function uniquely marks each incoming elements next child with a unique id(with the childcounter),
//it then places the incoming elements nextChild into the siblingArray.
//it then increases the childCounter, so that it can continue to uniquely mark the next incoming elements
//nextSibling.  lastly this function recalls itself, however this time it sends the incoming elements nextChild
// into the function so that it can evaluate its own nextChild element.
//NEXT STEPS//you need to create the for loop that will run through this array/check each array object against the others/
//delete matches/make sure that the element to match is not matching against itself./reset the childCounter at this point/erase
//the elements in the siblingArray /allow the listCycler() to continue cycling through the rest of the payDateDisplay children
//all of these steps NEED TO BE INCLUDED IN THE FUNCTION BELOW/////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var siblingArray = [];
function siblingStore(starterChild1){
if(starterChild1.nextSibling.nodeName !== "INPUT"){childCounter = 0}
  if(starterChild1.nodeName == "INPUT" && starterChild1.previousSibling.nodeName != "INPUT"){
    siblingArray.push(starterChild1)
    childCounter++
  }
  if(starterChild1.nodeName == "INPUT" && starterChild1.nextSibling.nodeName == "INPUT"){
    starterChild1.nextSibling.id = "sibling" + childCounter
    siblingArray.push(starterChild1.nextSibling)
    childCounter++
    siblingStore(starterChild1.nextSibling)
  }
siblingChecker(siblingArray)
}
function siblingChecker(sibArray){
  for(firstSiblingCounter=0;firstSiblingCounter<sibArray.length;firstSiblingCounter++){
    var firstSibling = sibArray[firstSiblingCounter];
      for(secondSiblingCounter=0;secondSiblingCounter<sibArray.length;secondSiblingCounter++){
        var secondSibling = sibArray[secondSiblingCounter];
          if(firstSibling.id == secondSibling.id){continue};
          if(firstSibling.value == secondSibling.value){
            document.getElementById(secondSibling.id).remove();
              var indexOfRemovable = sibArray.indexOf(secondSibling);
                if(indexOfRemovable != -1){
                  sibArray.splice(indexOfRemovable, 1);
                }
              }
            }
          }
        sibArray = [];
        siblingArray = [];
      }
/*function siblingChanger(theSiblingBefore){
      if(theSiblingBefore.nextSibling.nodeName == "INPUT"){
        theSiblingBefore.nextSibling.id = "sibling"+siblingId;
          siblingArray.push(theSiblingBefore.nextSibling)
            siblingId++
              siblingChanger(theSiblingBefore.nextSibling)
            }
          }

function siblingDeleter(){
  for(siblingCounter=0;siblingCounter<siblingArray.length;siblingCounter++){
    siblingStore = siblingArray[siblingArray.length];
      for(siblingCounter2=1;siblingCounter2<siblingArray.length;siblingCounter2++)
        if(siblingStore.value == siblingArray[siblingCounter2].value){
          document.getElementById(siblingArray[siblingCounter2].id).outerHTML = document.getElementById(siblingArray[siblingCounter2].id).outerHTML.replace(/input/g,"div");
        }
      }
    }*/
        /*
var completeIncomeObjArray = {incomeInformation:[]}
var	hourlyPayRateInput = document.getElementById("hourlyPayRateInput");
var	numberOfHoursInput = document.getElementById("numberOfHoursInput");
var	taxPercentInput	= document.getElementById("taxPercentInput");
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////place bills with paydates////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////place bills with paydates////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function calculateAmountToPay(){

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////place bills with paydates////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////MONEY	FORMATTER/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function moneyStorage(caller){
  var rawStorage = [];
    if(caller.id == "hourlyPayRateInput"){
      for(i=0;i<hourlyPayRateInput.value.length;i++){
        rawStorage.push(hourlyPayRateInput.value[i]);
      }
    }
    if(caller.id == "billAmount"){
      for(i=0;i<billAmount.value.length;i++){
        rawStorage.push(billAmount.value[i]);
      }
    }
    if(caller.id == "taxPercentInput"){
      for(i=0;i<taxPercentInput.value.length;i++){
        rawStorage.push(taxPercentInput.value[i]);
      }
    }
    characterEraser(rawStorage, caller)
  }

function characterEraser(rawStorage, caller){
  var formattedStorage = [];
    for(characterCounter=0;characterCounter<rawStorage.length;characterCounter++){
      if(rawStorage[characterCounter] == "$" || rawStorage[characterCounter] == "," || rawStorage[characterCounter] == "." || rawStorage[characterCounter] == "%"){
        delete rawStorage[characterCounter]
      }
    }
    for(formatCounter=0;formatCounter<rawStorage.length;formatCounter++){
      if(typeof rawStorage[formatCounter] != "undefined"){
        formattedStorage.push(rawStorage[formatCounter]);
      }
    }
  storageFormatter(formattedStorage, caller);
}
function storageFormatter(formattedStorage, caller){
  var finalMoneyFormat = ""
  if(caller.id != "taxPercentInput"){
    if(formattedStorage.length > 3){
      leftSide = formattedStorage.length - 2;
      rightSide = leftSide + 2;
        if(formattedStorage.length >= 7){
          formattedStorage.splice(0, 0, "$")
          formattedStorage.splice(2, 0, ",")
          formattedStorage.splice(6, 0, ",")
          formattedStorage.splice(rightSide+1, 0, ".")
        }
        if(formattedStorage.length == 6){
          formattedStorage.splice(0, 0, "$")
          formattedStorage.splice(2, 0, ",")
          formattedStorage.splice(rightSide, 0, ".")
        }
        if(formattedStorage.length < 6){
          formattedStorage.splice(0, 0, "$")
          formattedStorage.splice(leftSide+1, 0, ".")
        }
      }
    if(formattedStorage.length == 3){
      formattedStorage.splice(0, 0, "$")
      formattedStorage.splice(2, 0, ".")
    }
    if(formattedStorage.length < 3){
      formattedStorage.splice(0, 0, "$")
      formattedStorage.splice(1, 0, ".")
    }
    for(finalCounter=0;finalCounter<formattedStorage.length;finalCounter++){
      finalMoneyFormat += formattedStorage[finalCounter];
    }
  }
    if(caller.id == "taxPercentInput"){
      if(formattedStorage.length == 2){
        formattedStorage.splice(2, 0, "%")
          for(finalCounter=0;finalCounter<formattedStorage.length;finalCounter++){
            finalMoneyFormat += formattedStorage[finalCounter];
          }
        taxPercentInput.value = finalMoneyFormat;
      }
    }
    if(caller.id == "hourlyPayRateInput"){
      hourlyPayRateInput.value = finalMoneyFormat;
    }
    if(caller.id == "billAmount"){
      billAmount.value = finalMoneyFormat;
    }
  }


    /*
function incomeFinalFormatter(newMoneyArray){
  var	formattedMoney = ""
    if(newMoneyArray.length >= 9){
      newMoneyArray.splice(0, 0, "$")
      newMoneyArray.splice(2, 0, ",")
    }
    for(y=0;y<newMoneyArray.length;y++){
      formattedMoney += newMoneyArray[y]
    }
  return formattedMoney;
}

function moneyFormatter(caller){
  var	callerId = caller.id;
  var	storeAmount = []
  var	billAmountValue	= billAmount.value;
  var	hourlPayRateValue =	hourlyPayRateInput.value;
  var	taxPercentInputValue = taxPercentInput.value;
    if(callerId	== "billAmount"){
      for(i=0;i<billAmountValue.length;i++){
        storeAmount.push(billAmountValue[i])
      }
    }
    if(callerId	== "hourlyPayRateInput"){
      for(i=0;i<hourlPayRateValue.length;i++){
        storeAmount.push(hourlPayRateValue[i])
      }
    }
    if(callerId	== "taxPercentInput"){
      for(i=0;i<taxPercentInputValue.length;i++){
        storeAmount.push(taxPercentInputValue[i])
      }
    }
  characterChecker(storeAmount, callerId)
}
function characterChecker(storeAmount, callerId){
  var	newMoneyArray = [];
    for(checkMoney=0;checkMoney<storeAmount.length;checkMoney++){
      if(storeAmount[checkMoney] == "$" || storeAmount[checkMoney] ==	"."	|| storeAmount[checkMoney] == "%" || storeAmount[checkMoney] == ","){
        delete storeAmount[checkMoney];
      }
    }
    for(newMoneyCheck=0;newMoneyCheck<storeAmount.length;newMoneyCheck++){
      if(typeof storeAmount[newMoneyCheck] !=	"undefined"){
        newMoneyArray.push(storeAmount[newMoneyCheck])
      }
    }
    if(callerId	== "billAmount"){
      moneyFormatter2(newMoneyArray)
    }
    if(callerId	== "hourlyPayRateInput"){
      moneyFormatter3(newMoneyArray)
    }
    if(callerId	== "taxPercentInput"){
      moneyFormatter4(newMoneyArray)
    }
  }

function moneyFormatter2(newMoneyArray){
  var	formattedMoney = ""
    if(newMoneyArray.length >= 6){
      newMoneyArray.splice(0, 0, "$")
      newMoneyArray.splice(2, 0, ",")
      newMoneyArray.splice(6,	0, ".")
    }
    if(newMoneyArray.length	== 5){
      newMoneyArray.splice(0,	0, "$")
      newMoneyArray.splice(4,	0, ".")
    }
    if(newMoneyArray.length	== 4){
      newMoneyArray.splice(0,	0, "$")
      newMoneyArray.splice(3,	0, ".")
    }
    if(newMoneyArray.length	== 3){
      newMoneyArray.splice(0,	0, "$")
      newMoneyArray.splice(2,	0, ".")
    }
    if(newMoneyArray.length	== 2){
      newMoneyArray.splice(0,	0, "$")
      newMoneyArray.splice(1,	0, ".")
    }
    if(newMoneyArray.length	== 1){
      newMoneyArray.splice(0,	0, "$")
      newMoneyArray.splice(1,	0, ".")
      newMoneyArray.splice(2,	0, "0")
    }
    for(y=0;y<newMoneyArray.length;y++){
      formattedMoney += newMoneyArray[y]
    }
  billAmount.value = formattedMoney;
}
function moneyFormatter3(newMoneyArray){
  var	formattedMoney = ""
    newMoneyArray.splice(0,	0, "$");
    newMoneyArray.splice(3,	0, ".");
      for(y=0;y<newMoneyArray.length;y++){
        formattedMoney += newMoneyArray[y]
      }
    hourlyPayRateInput.value = formattedMoney;
  }

function moneyFormatter4(newMoneyArray){
  var	formattedMoney = "";
  var	lastIndex = newMoneyArray.length;
    newMoneyArray.splice(3,	0, "%");
      for(y=0;y<newMoneyArray.length;y++){
        formattedMoney += newMoneyArray[y]
      }
    taxPercentInput.value = formattedMoney;
  }
  */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////MONEY	FORMATTER//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////CALCULATE	BILLS//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function calculate(amount){
  var amountInt = parseFloat(amount.slice(1))
    billTotalStore = []
    billTotal = 0
      for(totalCount=0;totalCount<billTotalStorage.length;totalCount++){
        billTotalStore.push(parseFloat(billTotalStorage[totalCount].slice(1)));
      }
      for(totalCount2=0; totalCount2 < billTotalStore.length;	totalCount2++){
        billTotal += billTotalStore[totalCount2];
      }
      var percentInt = amountInt/billTotal
      var percentHundred = (percentInt * 100).toFixed(2)
      var percentHundredString = percentHundred.toString() + "%"
    return percentHundredString;
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////CALCULATE	BILLS//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////TO	STORE	THE	DATE	AND	DATE	ID////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function checkDateMatch(){
  var	dateToCheck = inputDate.value.slice(5)
  var	returnedId = idFinder(dateToCheck)
    console.log(returnedId)
    billDueMonthDay = dateToCheck;
    billDueDateId = returnedId;
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////TO	STORE	THE	DATE	AND	DATE	ID////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////FINDING	THE	DIFFERENCE	BETWEEN	DATES/////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function differenceBetweenDays(){
  for(differenceCounter=0;differenceCounter<completeBillObjArray.billInformation.length;differenceCounter++){
    var	remainderOfCurrentYear = 365 - parseInt(completeBillObjArray.billInformation[differenceCounter].billDueDateId);
      if(typeof completeBillObjArray.billInformation[differenceCounter + 1] == "undefined"){
        billDueDateDifference =	parseInt(completeBillObjArray.billInformation[differenceCounter].billDueDateId)
        completeBillObjArray.billInformation[differenceCounter].billDueDateDifference = billDueDateDifference;
          break;
        }
      if(completeBillObjArray.billInformation[differenceCounter].year	== completeBillObjArray.billInformation[differenceCounter + 1].year){
        billDueDateDifference =	parseInt(completeBillObjArray.billInformation[differenceCounter	+ 1].billDueDateId) - parseInt(completeBillObjArray.billInformation[differenceCounter].billDueDateId);
        completeBillObjArray.billInformation[differenceCounter].billDueDateDifference =	billDueDateDifference;
      }
      if(completeBillObjArray.billInformation[differenceCounter].year	< completeBillObjArray.billInformation[differenceCounter + 1].year){
        var	nextYearWithRemainder =	parseInt(completeBillObjArray.billInformation[differenceCounter	+ 1].billDueDateId)	+ remainderOfCurrentYear;
          completeBillObjArray.billInformation[differenceCounter].billDueDateDifference =	nextYearWithRemainder;
      }
    }
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////FINDING	THE	DIFFERENCE	BETWEEN	DATES/////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////PLACING	PAYMENTS/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
var	hourlyPayRateInput	=	document.getElementById("hourlyPayRateInput");
var	numberOfHoursInput	=	document.getElementById("numberOfHoursInput");
var	taxPercentInput	=	document.getElementById("taxPercentInput");
var	firstPayDateInput	=	document.getElementById("firstPayDateInput");
var	billName	=	document.getElementById("billName");
var	billAmount	=	document.getElementById("billAmount");
var	inputDate	=	document.getElementById("dateToBeSorted");
var	listDisplay	=	document.getElementById("dateDisplay");
var	completeBillObjArray	=	{billInformation:[]};
var	billDueMonthDay	=	""
var	billDueDateId	=	""
var	billDueDateDifference	=	""
var	billTotalStore	=	[];
var	billTotal	=	0;
*/
function getWeekDay(incomingDate){
  var	incomingDateValue =	incomingDate.value;
  var	incomingDateValueYear =	incomingDateValue.slice(0,5)
  var	checkDate =	incomingDateValue.slice(5);
  var	id = idFinder(checkDate);
  var	dateFound =	dateFinder(id);
    weeklyPayDateArray = [];
    console.log(incomingDateValueYear +	dateFound);
      while(id<365){
        var	nextWeekDateId = id	+ 7;
        var	nextWeekDate = dateFinder(nextWeekDateId)
          if(typeof nextWeekDate == "undefined"){break}
            weeklyPayDateArray.push(incomingDateValueYear +	nextWeekDate);
            id = nextWeekDateId;
            console.log(incomingDateValueYear +	nextWeekDate)
          }
        }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////PLACING	PAYMENTS/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////DATE	AND	ID//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const dateWithIds = [
"01-01-01",
"01-02-02",
"01-03-03",
"01-04-04",
"01-05-05",
"01-06-06",
"01-07-07",
"01-08-08",
"01-09-09",
"01-10-10",
"01-11-11",
"01-12-12",
"01-13-13",
"01-14-14",
"01-15-15",
"01-16-16",
"01-17-17",
"01-18-18",
"01-19-19",
"01-20-20",
"01-21-21",
"01-22-22",
"01-23-23",
"01-24-24",
"01-25-25",
"01-26-26",
"01-27-27",
"01-28-28",
"01-29-29",
"01-30-30",
"01-31-31",
"02-01-32",
"02-02-33",
"02-03-34",
"02-04-35",
"02-05-36",
"02-06-37",
"02-07-38",
"02-08-39",
"02-09-40",
"02-10-41",
"02-11-42",
"02-12-43",
"02-13-44",
"02-14-45",
"02-15-46",
"02-16-47",
"02-17-48",
"02-18-49",
"02-19-50",
"02-20-51",
"02-21-52",
"02-22-53",
"02-23-54",
"02-24-55",
"02-25-56",
"02-26-57",
"02-27-58",
"02-28-59",
"03-01-60",
"03-02-61",
"03-03-62",
"03-04-63",
"03-05-64",
"03-06-65",
"03-07-66",
"03-08-67",
"03-09-68",
"03-10-69",
"03-11-70",
"03-12-71",
"03-13-72",
"03-14-73",
"03-15-74",
"03-16-75",
"03-17-76",
"03-18-77",
"03-19-78",
"03-20-79",
"03-21-80",
"03-22-81",
"03-23-82",
"03-24-83",
"03-25-84",
"03-26-85",
"03-27-86",
"03-28-87",
"03-29-88",
"03-30-89",
"03-31-90",
"04-01-91",
"04-02-92",
"04-03-93",
"04-04-94",
"04-05-95",
"04-06-96",
"04-07-97",
"04-08-98",
"04-09-99",
"04-10-100",
"04-11-101",
"04-12-102",
"04-13-103",
"04-14-104",
"04-15-105",
"04-16-106",
"04-17-107",
"04-18-108",
"04-19-109",
"04-20-110",
"04-21-111",
"04-22-112",
"04-23-113",
"04-24-114",
"04-25-115",
"04-26-116",
"04-27-117",
"04-28-118",
"04-29-119",
"04-30-120",
"05-01-121",
"05-02-122",
"05-03-123",
"05-04-124",
"05-05-125",
"05-06-126",
"05-07-127",
"05-08-128",
"05-09-129",
"05-10-130",
"05-11-131",
"05-12-132",
"05-13-133",
"05-14-134",
"05-15-135",
"05-16-136",
"05-17-137",
"05-18-138",
"05-19-139",
"05-20-140",
"05-21-141",
"05-22-142",
"05-23-143",
"05-24-144",
"05-25-145",
"05-26-146",
"05-27-147",
"05-28-148",
"05-29-149",
"05-30-150",
"05-31-151",
"06-01-152",
"06-02-153",
"06-03-154",
"06-04-155",
"06-05-156",
"06-06-157",
"06-07-158",
"06-08-159",
"06-09-160",
"06-10-161",
"06-11-162",
"06-12-163",
"06-13-164",
"06-14-165",
"06-15-166",
"06-16-167",
"06-17-168",
"06-18-169",
"06-19-170",
"06-20-171",
"06-21-172",
"06-22-173",
"06-23-174",
"06-24-175",
"06-25-176",
"06-26-177",
"06-27-178",
"06-28-179",
"06-29-180",
"06-30-181",
"07-01-182",
"07-02-183",
"07-03-184",
"07-04-185",
"07-05-186",
"07-06-187",
"07-07-188",
"07-08-189",
"07-09-190",
"07-10-191",
"07-11-192",
"07-12-193",
"07-13-194",
"07-14-195",
"07-15-196",
"07-16-197",
"07-17-198",
"07-18-199",
"07-19-200",
"07-20-201",
"07-21-202",
"07-22-203",
"07-23-204",
"07-24-205",
"07-25-206",
"07-26-207",
"07-27-208",
"07-28-209",
"07-29-210",
"07-30-211",
"07-31-212",
"08-01-213",
"08-02-214",
"08-03-215",
"08-04-216",
"08-05-217",
"08-06-218",
"08-07-219",
"08-08-220",
"08-09-221",
"08-10-222",
"08-11-223",
"08-12-224",
"08-13-225",
"08-14-226",
"08-15-227",
"08-16-228",
"08-17-229",
"08-18-230",
"08-19-231",
"08-20-232",
"08-21-233",
"08-22-234",
"08-23-235",
"08-24-236",
"08-25-237",
"08-26-238",
"08-27-239",
"08-28-240",
"08-29-241",
"08-30-242",
"08-31-243",
"09-01-244",
"09-02-245",
"09-03-246",
"09-04-247",
"09-05-248",
"09-06-249",
"09-07-250",
"09-08-251",
"09-09-252",
"09-10-253",
"09-11-254",
"09-12-255",
"09-13-256",
"09-14-257",
"09-15-258",
"09-16-259",
"09-17-260",
"09-18-261",
"09-19-262",
"09-20-263",
"09-21-264",
"09-22-265",
"09-23-266",
"09-24-267",
"09-25-268",
"09-26-269",
"09-27-270",
"09-28-271",
"09-29-272",
"09-30-273",
"10-01-274",
"10-02-275",
"10-03-276",
"10-04-277",
"10-05-278",
"10-06-279",
"10-07-280",
"10-08-281",
"10-09-282",
"10-10-283",
"10-11-284",
"10-12-285",
"10-13-286",
"10-14-287",
"10-15-288",
"10-16-289",
"10-17-290",
"10-18-291",
"10-19-292",
"10-20-293",
"10-21-294",
"10-22-295",
"10-23-296",
"10-24-297",
"10-25-298",
"10-26-299",
"10-27-300",
"10-28-301",
"10-29-302",
"10-30-303",
"10-31-304",
"11-01-305",
"11-02-306",
"11-03-307",
"11-04-308",
"11-05-309",
"11-06-310",
"11-07-311",
"11-08-312",
"11-09-313",
"11-10-314",
"11-11-315",
"11-12-316",
"11-13-317",
"11-14-318",
"11-15-319",
"11-16-320",
"11-17-321",
"11-18-322",
"11-19-323",
"11-20-324",
"11-21-325",
"11-22-326",
"11-23-327",
"11-24-328",
"11-25-329",
"11-26-330",
"11-27-331",
"11-28-332",
"11-29-333",
"11-30-334",
"12-01-335",
"12-02-336",
"12-03-337",
"12-04-338",
"12-05-339",
"12-06-340",
"12-07-341",
"12-08-342",
"12-09-343",
"12-10-344",
"12-11-345",
"12-12-346",
"12-13-347",
"12-14-348",
"12-15-349",
"12-16-350",
"12-17-351",
"12-18-352",
"12-19-353",
"12-20-354",
"12-21-355",
"12-22-356",
"12-23-357",
"12-24-358",
"12-25-359",
"12-26-360",
"12-27-361",
"12-28-362",
"12-29-363",
"12-30-364",
"12-31-365"
]
let	idFinder = function (dateToCheck){
  for(var	dateCounter	= 0; dateCounter < dateWithIds.length; dateCounter++){
    let	checkedDate	= dateWithIds[dateCounter].slice(0,5)
    let	checkedId =	dateWithIds[dateCounter].slice(6)
      if(dateToCheck == checkedDate){
        return parseInt(checkedId);
      }
    }
  }

let	dateFinder = function (idToCheck){
  for(var	dateCounter	= 0; dateCounter < dateWithIds.length; dateCounter++){
    let	checkedDate = dateWithIds[dateCounter].slice(0,5)
    let	checkedId =	dateWithIds[dateCounter].slice(6)
      if(idToCheck ==	checkedId){
        return checkedDate;
      }
    }
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////DATE	AND	ID//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
