
  var baseUrl = window.location.href.slice(0,-11)
  var changePage = (id) => {
    if (id == 'skipTrace2'){
      location.replace(baseUrl + "/apps/skipTraceApp/index.html")
    }
    if (id == 'spreadSheetEditor'){
      location.replace(baseUrl + "/apps/spreadSheetEditor/index.html")
    }
    if (id == 'budgetor'){
      location.replace(baseUrl + "/apps/budgetor/index.html")
    }
    if (id == 'budgetorPrototype'){
      location.replace(baseUrl + "/apps/annualBudgetorPrototype/index.html")
    }
    if (id == 'calculator'){
      location.replace(baseUrl + "/apps/calculator kata/calculator kata/calculator_ui/index.html")
    }
    if (id == 'emailNotes'){
      location.replace(baseUrl + "/apps/noteEmailer/index.html")
    }
    if (id == 'sitePrototype'){
      location.replace(baseUrl + "/apps/sitePrototype/index.html")
    }
    if (id == 'skipTrace1'){
      location.replace(baseUrl + "/apps/skipTraceApp/index.html")
    }
    if (id == 'proResume'){
      location.replace(baseUrl + "/apps/resume/index.html")
    }
}
