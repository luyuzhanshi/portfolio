var sortDates = (arrayToSort) => {
    return sortYear(arrayToSort)
}

var getMonth = (date) =>{
  var months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
  var monthString = date.slice(0, date.length - 8)
  for (var monthCounter = 0; monthCounter < months.length; monthCounter++){
    if (monthString == months[monthCounter]){
      var months = monthCounter + 1
    }
  }
  return months
}

var getDateObject = (i, arrayToSort) => {

  var currentDate = arrayToSort[i].props.children[1].props.children.props.children.props.children
  var firstDate = arrayToSort[0].props.children[1].props.children.props.children.props.children

  if (arrayToSort[i+1]){
    var nextDate = arrayToSort[i+1].props.children[1].props.children.props.children.props.children
  } else var nextDate = null

  if (arrayToSort[1]){
    var secondDate = arrayToSort[1].props.children[1].props.children.props.children.props.children
  } else var secondDate = null

  var currentYear = parseInt(currentDate.slice(currentDate.length - 4))
  var currentMonth = getMonth(currentDate)
  var currentDay = parseInt(currentDate.slice(currentDate.length - 7, currentDate.length - 5))
  if (nextDate !== null){
    var nextYear =  parseInt(nextDate.slice(nextDate.length - 4))
    var nextMonth = getMonth(nextDate)
    var nextDay = parseInt(nextDate.slice(nextDate.length - 7, nextDate.length - 5))
  }
  if (nextDate == null){
    var nextYear = null
    var nextMonth = null
    var nextDay = null
  }
  var firstYear = parseInt(firstDate.slice(firstDate.length - 4))
  var firstMonth = getMonth(firstDate)
  var firstDay = parseInt(firstDate.slice(firstDate.length - 7, firstDate.length - 5))
  if (secondDate !== null){
    var secondYear = parseInt(secondDate.slice(secondDate.length - 4))
    var secondMonth = getMonth(secondDate)
    var secondDay = parseInt(secondDate.slice(secondDate.length - 7, secondDate.length - 5))
  }
  if (secondDate == null){
    var secondYear = null
    var secondMonth = null
    var secondDay = null
  }
  var dateObject = {
    currentDate: currentDate,
    nextDate: nextDate,
    firstDate: firstDate,
    secondDate: secondDate,

    currentYear: currentYear,
    currentMonth: currentMonth,
    currentDay: currentDay,

    nextYear: nextYear,
    nextMonth: nextMonth,
    nextDay: nextDay,

    firstYear: firstYear,
    firstMonth: firstMonth,
    firstDay: firstDay,

    secondYear: secondYear,
    secondMonth: secondMonth,
    secondDay: secondDay
  }
  return dateObject
}
function sortYear(arrayToSort){
                for(i=0;i<arrayToSort.length;i++){
      var dateObject = getDateObject(i, arrayToSort)
                        if (typeof dateObject.nextDate  ==      null){break}
      if (dateObject.nextYear){
                         if (dateObject.currentYear > dateObject.nextYear){
                                 var     objToSwitch     = arrayToSort[i+1];
                                         arrayToSort[i+1] = arrayToSort[i];
                                         arrayToSort[i]  = objToSwitch;
                                         i=0
                                 }
        }
                        }
      if (arrayToSort.length > 1){
                         if (dateObject.firstYear        >       dateObject.secondYear){
                                 sortYear(arrayToSort)
                         }
                         return sortMonth(arrayToSort)
      } else return arrayToSort
                }
        function sortMonth(arrayToSort){
                for(a=0;a<arrayToSort.length;a++){
      var dateObject = getDateObject(a, arrayToSort)
                        if (typeof dateObject.nextDate  ==      null){break}
      if (dateObject.nextYear){
                         if(dateObject.currentYear == dateObject.nextYear){
                                 if (dateObject.currentMonth > dateObject.nextMonth){
                                         var     objToSwitch     = arrayToSort[a+1];
                                                 arrayToSort[a+1] = arrayToSort[a];
                                                 arrayToSort[a] = objToSwitch;
                                                 a=0
                                         }
                                 }
                         }
      }
                        if( (dateObject.firstYear == dateObject.secondYear) && (dateObject.firstMonth   >       dateObject.secondMonth) ){
                                sortMonth(arrayToSort)
                        }
                return sortDay(arrayToSort)
        }
        function sortDay(arrayToSort){
                for(d=0;d<arrayToSort.length;d++){
      var dateObject = getDateObject(d, arrayToSort)
                        if (typeof dateObject.nextDate  ==      null){break}
      if (dateObject.nextYear){
                         if(dateObject.currentYear == dateObject.nextYear){
                                 if(dateObject.currentMonth      == dateObject.nextMonth){
                                         if(dateObject.currentDay > dateObject.nextDay){
                                                 var     objToSwitch = arrayToSort[d+1];
                                                         arrayToSort[d+1] = arrayToSort[d];
                                                         arrayToSort[d]  = objToSwitch;
                                                         d=0
                                                 }
                                         }
                                 }
                         }
      }

                        if( (dateObject.firstYear == dateObject.secondYear) && (dateObject.firstMonth   == dateObject.secondMonth) && (dateObject.firstDay > dateObject.secondDay) ){
                                sortDay(arrayToSort)
                        }
      return arrayToSort
                }
