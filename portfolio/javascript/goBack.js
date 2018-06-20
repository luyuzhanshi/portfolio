var goBack = (id) => {
  var cutBy =
  id.length+16
  if (id !== 'calculatorKata'){
	  var homePage = window.location.href.slice(0,-cutBy) + 'index.html'
	}
// "file:///C:/Users/Luyuzhanshi/Desktop/portfolio/apps/calculator%20kata/calculator%20kata/index.html"
  if (id == 'calculatorKata'){
	  var homePage = window.location.href.slice(0,-65) + 'index.html'
	}
  location.replace(homePage)
}
