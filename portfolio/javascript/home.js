
  var baseUrl = window.location.href.slice(0,-11)
  var changePage = (id) => {
    if (id == 'skipTrace2'){
      location.replace(baseUrl + "/apps/skipTraceApp.html")
    }
    if (id == 'spreadSheetEditor'){
      location.replace(baseUrl + "/apps/spreadSheetEditor.html")
    }
    if (id == 'budgetor'){
      location.replace(baseUrl + "/apps/budgetor.html")
    }
    if (id == 'budgetorPrototype'){
      location.replace(baseUrl + "/apps/annualBudgetorPrototype.html")
    }
    if (id == 'calculator'){
      location.replace(baseUrl + "/apps/calculator kata/calculator kata/calculator_ui/index.html")
    }
    if (id == 'emailNotes'){
      location.replace(baseUrl + "/apps/noteEmailer.html")
    }
    if (id == 'sitePrototype'){
      location.replace(baseUrl + "/apps/sitePrototype.html")
    }
    if (id == 'skipTrace1'){
      location.replace(baseUrl + "/apps/skipTraceApp.html")
    }
}
