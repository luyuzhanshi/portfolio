
var resourceInput = document.getElementById("resource");
var phoneInput = document.getElementById("phone");
var phoneAndResource = {"par":[]};
function checkP(event){
var x = event.keyCode;
if(x == 13){
if(resourceInput.value == "CACS"){
var jsonCons = {"resource":"", "phone":""};
	jsonCons.resource = resourceInput.value;
	jsonCons.phone = phoneInput.value;
	phoneAndResource.par.push(jsonCons)
}

if(resourceInput.value == "ACE"){
var jsonCons = {"resource":"", "phone":""};
	jsonCons.resource = resourceInput.value;
	jsonCons.phone = phoneInput.value;
	phoneAndResource.par.push(jsonCons)
}
if(resourceInput.value == "MORTGAGE SERVE"){
var jsonCons = {"resource":"", "phone":""};
	jsonCons.resource = resourceInput.value;
	jsonCons.phone = phoneInput.value;
	phoneAndResource.par.push(jsonCons)
}

if(resourceInput.value == "AS"){
var jsonCons = {"resource":"", "phone":""};
	jsonCons.resource = resourceInput.value;
	jsonCons.phone = phoneInput.value;
	phoneAndResource.par.push(jsonCons)
}
if(resourceInput.value == "PAS"){
var jsonCons = {"resource":"", "phone":""};
	jsonCons.resource = resourceInput.value;
	jsonCons.phone = phoneInput.value;
	phoneAndResource.par.push(jsonCons)
}
}
}

function dupCheck(event){
var x = event.keyCode;
if(x==13){
for (i=0;i<phoneAndResource.par.length;i++){
	if (phoneInput.value == phoneAndResource.par[i].phone){
			phoneInput.value = "("+phoneAndResource.par[i].phone+")";
			alert("Phone number already found in a "+ phoneAndResource.par[i].resource + " search")
		}
	}
}
}


function dncCheck(event){
var x = event.keyCode;
if(x==13){
if(resourceInput.value != "DNC"){
for (i=0;i<dNc.length;i++){
	if (phoneInput.value == dNc[i]){
			phoneInput.value = "*"+dNc[i]+"*";
			alert("DNC #: "+dNc[i])
		}
	}
}
}
}
function call(){
	var parser = JSON.parse(phoneAndResource);
	for(i=0;i<parser.par.length;i++){
			phoneInput.value = parser.par[i].phone;
			resourceInput.value = parser.par[i].resource;
		}
	}
/*var cacsA = cacs[];
var aceA = ace[];
var mortA = mort[];
var acSeA = acSe[];
var pastAcSeA = [];
var all = [cacsA, aceA, mortA, acSeA, pastAcSeA];*/



/*if(resourceInput.value != ""){
if (resourceInput.value == CACS){
	cacs.push(resourceInput.value)
	all.push(cacsA)
}
if (resourceInput.value == ACE){
	ace.push(resourceInput.value)
	all.push(aceA)
}
if (resourceInput.value == MORTGAGE SERVE){
	mort.push(resourceInput.value)
	all.push(mortA)
}
if (resourceInput.value == AS){
	acSe.push(resourceInput.value)
	all.push(acSeA)
}
if (resourceInput.value == PAS){
	pastAcSe.push(resourceInput.value)
	all.push(pastAcSeA)
}
na.push(resourceInput.value)
}
}
//cacsA, aceA, mortA, acSeA, pastAcSeA
/*function allCheck(){
	for(i=0;i<all.length;i++){
		if (all[i] == cacsA){
			for(b=0;b<cacs.length;b++){
				if(phoneInput.value == cacs[i]){
					phoneInput.value = "("+cacs[i]+")"
					alert("Number already found in CACS search")
				}
			}
		}
		if (all[i] == aceA){
			for(b=0;b<ace.length;b++){
				if(phoneInput.value == ace[i]){
					phoneInput.value = "("+ace[i]+")"
					alert("Number already found in CACS search")
				}
			}
		}
		if (all[i] == mortA){
			for(b=0;b<mort.length;b++){
				if(phoneInput.value == mort[i]){
					phoneInput.value = "("+mort[i]+")"
					alert("Number already found in CACS search")
				}
			}
		}
		if (all[i] == acSeA){
			for(b=0;b<acSe.length;b++){
				if(phoneInput.value == acSe[i]){
					phoneInput.value = "("+acSe[i]+")"
					alert("Number already found in CACS search")
				}
			}
		}
		if (all[i] == pastAcSeA){
			for(b=0;b<pastAcSe.length;b++){
				if(phoneInput.value == pastAcSe[i]){
					phoneInput.value = "("+pastAcSe[i]+")"
					alert("Number already found in CACS search")
				}
			}
		}
	}
}
var cacs = [];
var ace = [];
var mort = [];
var acSe = [];
var pastAcSe = [];
var all = [];
function callAll(){
	if(resourceInput.value == "CALL"){
		for(i=0;i<all.length;i++){
			if (all[i] == cacs
		}
	}
}*/


$(document).ready(function(){


	$("#acctRef").dblclick(function(){
        $(this).animate({width: '70%'}, "fast").css({'font-size':40, 'background-color': '', 'opacity':1})
	});
	$("#acctRef").click(function(){
		$("#acctRef").animate({width: '400px'}, "fast").css({'font-size':15, 'background-color': '', 'opacity':0.5});
    });

     $("#input3").focus(function(){
        $(this).animate({width: '70%'}, "fast").css({'font-size':40, 'background-color': '', 'opacity':1})
		$("#acctRef").animate({width: '30%'}, "fast").css({'font-size':40, 'background-color': '', 'opacity':1});
		$("#informationalDiv").animate({'opacity':0.2});
	}).focusout(function(){
        $(this).animate({width: '400'}, "fast").css({'font-size':15, 'background-color': '', 'opacity':0.5});
		$("#acctRef").animate({width: '400px'}, "fast").css({'font-size':15, 'background-color': '', 'opacity':0.5});
		$("#informationalDiv").animate({'opacity':1});
    }).hover(function(){
        $(this).animate({width: '70%'}, "fast").css({'font-size':40, 'background-color': '', 'opacity':1})
		$("#acctRef").animate({width: '30%'}, "fast").css({'font-size':40, 'background-color': '', 'opacity':1});
		$("#informationalDiv").animate({'opacity':0.2});
    }, function(){
        $(this).animate({width: '400'}, "fast").css({'font-size':15, 'background-color': '', 'opacity':0.5});
		$("#acctRef").animate({width: '400px'}, "fast").css({'font-size':15, 'background-color': '', 'opacity':0.5});
		$("#informationalDiv").animate({'opacity':1});
	});

	$("#a8").focus(function(){
        $(this).animate({width: '70%'}, "fast").css({'font-size':40, 'background-color': '', 'opacity':1})
		$("#acctRef").animate({width: '30%'}, "fast").css({'font-size':40, 'background-color': '', 'opacity':1});
		$("#informationalDiv").animate({'opacity':0.2});
	}).focusout(function(){
        $(this).animate({width: '400'}, "fast").css({'font-size':15, 'background-color': '', 'opacity':0.5});
		$("#acctRef").animate({width: '400px'}, "fast").css({'font-size':15, 'background-color': '', 'opacity':0.5});
		$("#informationalDiv").animate({'opacity':1});
    }).hover(function(){
        $(this).animate({width: '70%'}, "fast").css({'font-size':40, 'background-color': '', 'opacity':1})
		$("#acctRef").animate({width: '30%'}, "fast").css({'font-size':40, 'background-color': '', 'opacity':1});
		$("#informationalDiv").animate({'opacity':0.2});
    }, function(){
        $(this).animate({width: '400'}, "fast").css({'font-size':15, 'background-color': '', 'opacity':0.5});
		$("#acctRef").animate({width: '400px'}, "fast").css({'font-size':15, 'background-color': '', 'opacity':0.5});
		$("#informationalDiv").animate({'opacity':1});
	});

	$("#uidInput").focus(function(){
        $(this).animate({height: '120px', width: '80%', left: '10%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }).focusout(function(){
        $(this).animate({width: '50%', height: '25px', left: '25%'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({height: '120px', width: '80%', left: '10%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }, function(){
		$(this).animate({width: '50%', height: '25px', left: '25%'}, "fast").css({'font-size':15, 'background-color': ''})
	});

	$("#aNumber").focus(function(){
         $(this).animate({height: '120px', width: '80%', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }).focusout(function(){
        $(this).animate({width: '33%', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
       $(this).animate({height: '120px', width: '80%', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }, function(){
		$(this).animate({width: '33%', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''})
	});
	$("#resource").focus(function(){
        $(this).animate({height: '120px', width: '80%', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }).focusout(function(){
        $(this).animate({width: '33%', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({height: '120px', width: '80%', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }, function(){
		$(this).animate({width: '33%', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''})
	});
	   $("#phone").focus(function(){
       $(this).animate({height: '120px', width: '80%', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }).focusout(function(){
        $(this).animate({width: '33%', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({height: '120px', width: '80%', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }, function(){
		$(this).animate({width: '33%', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''})
	});


	$("#basicResult").focus(function(){
       $(this).animate({height: '120px', width: '80%', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }).focusout(function(){
        $(this).animate({width: '33%', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({height: '120px', width: '80%', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }, function(){
		$(this).animate({width: '33%', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''})
	});

    $("#result").focus(function(){
       $(this).animate({height: '120px', width: '80%', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }).focusout(function(){
        $(this).animate({width: '33%', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({height: '120px', width: '80%', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }, function(){
		$(this).animate({width: '33%', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''})
	});

	$("#ckState").focus(function(){
        $(this).animate({height: '120px', width: '80%', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }).focusout(function(){
        $(this).animate({width: '33%', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({height: '120px', width: '80%', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }, function(){
		$(this).animate({width: '33%', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''})

	});
	$("#nkState").focus(function(){
        $(this).animate({height: '120px', width: '80%', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }).focusout(function(){
        $(this).animate({width: '33%', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({height: '120px', width: '80%', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }, function(){
		$(this).animate({width: '33%', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''})
	});



	$("#email1").focus(function(){
        $(this).animate({width: '200'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '300'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '200'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '300'}, "fast").css({'font-size':15, 'background-color': ''})
	});
	$("#email2").focus(function(){
        $(this).animate({width: '200'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '300'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '200'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '300'}, "fast").css({'font-size':15, 'background-color': ''})
	});
	$("#email3").focus(function(){
        $(this).animate({width: '500'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '300'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '500'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '300'}, "fast").css({'font-size':15, 'background-color': ''})
	});
	$("#email4").focus(function(){
        $(this).animate({width: '200'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '300'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '200'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '300'}, "fast").css({'font-size':15, 'background-color': ''})
	});
	$("#email5").focus(function(){
        $(this).animate({width: '200'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '300'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '200'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '300'}, "fast").css({'font-size':15, 'background-color': ''})
	});











	$("#jW").focus(function(){
        $(this).animate({height: '120px', width: '80%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }).focusout(function(){
        $(this).animate({width: '200px', height: '25px', width: '20%'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({height: '120px', width: '80%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }, function(){
		$(this).animate({width: '200px', height: '25px', width: '20%'}, "fast").css({'font-size':15, 'background-color': ''})
	});







     $("#a1").focus(function(){
       $(this).animate({height: '120px', width: '80%', left: '150px', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }).focusout(function(){
        $(this).animate({width: '200px', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({height: '120px', width: '80%', left: '150px', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }, function(){
		$(this).animate({width: '200px', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''})
	});


     $("#a2").focus(function(){
        $(this).animate({height: '120px', width: '80%', left: '150px', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }).focusout(function(){
        $(this).animate({width: '200px', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({height: '120px', width: '80%', left: '150px', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }, function(){
		$(this).animate({width: '200px', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''})
	});


     $("#a3").focus(function(){
       $(this).animate({height: '120px', width: '80%', left: '150px', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }).focusout(function(){
        $(this).animate({width: '200px', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({height: '120px', width: '80%', left: '150px', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }, function(){
		$(this).animate({width: '200px', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''})
	});

     $("#a4").focus(function(){
       $(this).animate({height: '120px', width: '80%', left: '150px', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }).focusout(function(){
        $(this).animate({width: '200px', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({height: '120px', width: '80%', left: '150px', top: '30%'}, "fast").css({'font-size':80, 'opacity':0.9, 'background-color': '#ccccff'})
    }, function(){
		$(this).animate({width: '200px', height: '25px'}, "fast").css({'font-size':15, 'background-color': ''})
	});

     $("#a5").focus(function(){
        $(this).animate({height: '100'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({height: '13', width: '100%'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({height: '100'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({height: '13', width: '100%'}, "fast").css({'font-size':15, 'background-color': ''})
	});

     $("#a6").focus(function(){
        $(this).animate({height: '100'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({height: '13', width: '100%'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({height: '100'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({height: '13', width: '100%'}, "fast").css({'font-size':15, 'background-color': ''})
	});

     $("#a7").focus(function(){
        $(this).animate({height: '100'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({height: '13', width: '100%'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({height: '100'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({height: '13', width: '100%'}, "fast").css({'font-size':15, 'background-color': ''})
	});



	/////////////////////////////////////////////////////////
		$("#testButton").click(function(){
        $("#abutton").animate({height: '70px', width: '70px', left: '33%', top: '45%'}, "5000").css({'font-size':9, 'background-color': '', 'opacity':1})
		$("#obutton").animate({height: '70px', width: '70px', left: '45%', top: '45%'}, "5000").css({'font-size':9, 'background-color': '', 'opacity':1})
		$("#ibutton").animate({height: '70px', width: '70px', left: '57%', top: '45%'}, "5000").css({'font-size':9, 'background-color': '', 'opacity':1})
		});
		$("#abutton").click(function(){
        $("#abutton").animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000", crvCallType(this))
		$("#obutton").animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000")
		$("#ibutton").animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000")
		});
		$("#ibutton").click(function(){
        $("#abutton").animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000")
		$("#obutton").animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000")
		$("#ibutton").animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000", crvCallType(this))
		});
		$("#obutton").click(function(){
        $("#abutton").animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000")
		$("#obutton").animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000", crvCallType(this))
		$("#ibutton").animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000")
		});
		///////////////////////////////////////////////////////////////////
		$("#testButton2").click(function(){
		$("#yname").animate({height: '70px', width: '70px', left: '30%', top: '45%'}, "5000").css({'font-size':9, 'background-color': '', 'opacity':1})
		$("#bname").animate({height: '70px', width: '70px', left: '42%', top: '45%'}, "5000").css({'font-size':9, 'background-color': '', 'opacity':1})
		$("#cname").animate({height: '70px', width: '70px', left: '55%', top: '45%'}, "5000").css({'font-size':9, 'background-color': '', 'opacity':1})
		$("#qa").animate({height: '70px', width: '70px', left: '67%', top: '45%'}, "5000").css({'font-size':9, 'background-color': '', 'opacity':1})
		});
		$("#yname").click(function(){
        $(this).animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000", crvRequired(this))
		});
		$("#bname").click(function(){
		$(this).animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000", crvRequired(this))
		});
		$("#cname").click(function(){
		$(this).animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000", crvRequired(this))
		});
		$("#qa").click(function(){
		$(this).animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000", crvRequired(this))
		});
		////////////////////////////////////////////////////////////////////////////
		$("#testButton3").dblclick(function(){
		$("#addr").animate({height: '70px', width: '70px', left: '30%', top: '45%'}, "5000").css({'font-size':9, 'background-color': '', 'opacity':1})
		$("#hph").animate({height: '70px', width: '70px', left: '42%', top: '45%'}, "5000").css({'font-size':9, 'background-color': '', 'opacity':1})
		$("#ssn").animate({height: '70px', width: '70px', left: '55%', top: '45%'}, "5000").css({'font-size':9, 'background-color': '', 'opacity':1})
		$("#ssn4").animate({height: '70px', width: '70px', left: '67%', top: '45%'}, "5000").css({'font-size':9, 'background-color': '', 'opacity':1})
		});
		$("#addr").click(function(){
        $(this).animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000", crvVerify(this))
		});
		$("#hph").click(function(){
		$(this).animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000", crvVerify(this))
		});
		$("#ssn").click(function(){
		$(this).animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000", crvVerify(this))
		});
		$("#ssn4").click(function(){
		$(this).animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000", crvVerify(this))
		});
		$("#testButton4").dblclick(function(){
		$("#addR").animate({height: '70px', width: '70px', left: '20%', top: '45%'}, "5000").css({'font-size':9, 'opacity':1})
		$("#hpH").animate({height: '70px', width: '70px', left: '32%', top: '45%'}, "5000").css({'font-size':9,'opacity':1})
		$("#poe").animate({height: '70px', width: '70px', left: '44%', top: '45%'}, "5000").css({'font-size':9,'opacity':1})
		$("#poen").animate({height: '70px', width: '70px', left: '56%', top: '45%'}, "5000").css({'font-size':9, 'opacity':1})
		$("#altN").animate({height: '70px', width: '70px', left: '68%', top: '45%'}, "5000").css({'font-size':9, 'opacity':1})
		});
		$("#addR").click(function(){
        $(this).animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000", finalCrv(this))
		});
		$("#hpH").click(function(){
		$(this).animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000", finalCrv(this))
		});
		$("#poe").click(function(){
		$(this).animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000", finalCrv(this))
		});
		$("#poen").click(function(){
		$(this).animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000", finalCrv(this))
		});
		$("#altN").click(function(){
		$(this).animate({height: '0px', width: '0px', left: '0%', top: '0%'}, "5000").css({'font-size':0.5, 'background-color': '', 'opacity':0.5}, "5000", finalCrv(this))
		});



		///////////////////////////////////////////////////////////////////////////////
/*.focusout(function(){
        $(this).animate({height: '400', width: '400'}, "fast").css({'font-size':15, 'background-color': '', 'opacity':0.5});
		 $("#abutton").animate({height: '400', width: '400'}, "fast").css({'font-size':15, 'background-color': '', 'opacity':0.5});
		 $("#obutton").animate({height: '400', width: '400'}, "fast").css({'font-size':15, 'background-color': '', 'opacity':0.5});
    })*/

////////////////////////////////////////////////////////////////

	var jqueryCounter = false




	$("#as").focus(function(){
        $(this).animate({width: '80'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '50'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '80'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '50'}, "fast").css({'font-size':15, 'background-color': ''})
	});

    $("#pas").focus(function(){
        $(this).animate({width: '80'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '50'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '80'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '50'}, "fast").css({'font-size':15, 'background-color': ''})
	});

	 $("#dnc").focus(function(){
        $(this).animate({width: '80'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '50'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '80'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '50'}, "fast").css({'font-size':15, 'background-color': ''})
	});

	 $("#numbers").focus(function(){
        $(this).animate({width: '80'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '50'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '80'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '50'}, "fast").css({'font-size':15, 'background-color': ''})
	});

	 $("#date").focus(function(){
        $(this).animate({width: '200', height:'30'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '100', height:'15'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '200', height:'30'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '100', height:'15'}, "fast").css({'font-size':15, 'background-color': ''})
	});

	$("#reset2").focus(function(){
        $(this).animate({width: '210', height:'40'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '150', height:'30'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '210', height:'40'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '150', height:'30'}, "fast").css({'font-size':15, 'background-color': ''})
	});

	$("#todWorkButton").focus(function(){
        $(this).animate({width: '210', height:'40'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '150', height:'30'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '210', height:'40'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '150', height:'30'}, "fast").css({'font-size':15, 'background-color': ''})
	});

	$("#reset1").focus(function(){
        $(this).animate({width: '210', height:'40'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '150', height:'30'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '210', height:'40'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '150', height:'30'}, "fast").css({'font-size':15, 'background-color': ''})
	});
	$("#csv-file").focus(function(){
        $(this).animate({width: '210', height:'40'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '150', height:'30'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '210', height:'40'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '150', height:'30'}, "fast").css({'font-size':15, 'background-color': ''})
	});

	$("#contactBtn").focus(function(){
        $(this).animate({width: '210', height:'40'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '150', height:'30'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '210', height:'40'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '150', height:'30'}, "fast").css({'font-size':15, 'background-color': ''})
	});

	$("#mlar").focus(function(){
        $(this).animate({width: '400', height:'70'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '300', height:'45'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '400', height:'70'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '300', height:'45'}, "fast").css({'font-size':15, 'background-color': ''})
	});

	$("#as1").focus(function(){
        $(this).animate({width: '400', height:'70'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '300', height:'45'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '400', height:'70'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '300', height:'45'}, "fast").css({'font-size':15, 'background-color': ''})
	});

	$("#smd").focus(function(){
        $(this).animate({width: '400', height:'70'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '300', height:'45'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '400', height:'70'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '300', height:'45'}, "fast").css({'font-size':15, 'background-color': ''})
	});

	$("#cstt").focus(function(){
        $(this).animate({width: '400', height:'70'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '300', height:'45'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '400', height:'70'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '300', height:'45'}, "fast").css({'font-size':15, 'background-color': ''})
	});

	$("#hn").focus(function(){
        $(this).animate({width: '400', height:'70'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '300', height:'45'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '400', height:'70'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '300', height:'45'}, "fast").css({'font-size':15, 'background-color': ''})
	});

	$("#delTitle").focus(function(){
        $(this).animate({width: '210', height:'40'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '150', height:'30'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '210', height:'40'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({width: '150', height:'30'}, "fast").css({'font-size':15, 'background-color': ''})
	});

	$("#searchK").click(function(){
        $("#choosingKStates").animate({left: '42%', top: '415', width: '350', height:'40'}).css({'background-color': '','opacity':1});
		$("#ko1").animate({width: '80px', height: '80px'}).css({'background-color': 'black', 'opacity': 1});
		$("#ko2").animate({width: '80px', height: '80px'}).css({'background-color': 'black', 'opacity': 1});
		$("#ko3").animate({width: '80px', height: '80px'}).css({'background-color': 'black', 'opacity': 1});
		$("#ko4").animate({width: '80px', height: '80px'}).css({'background-color': 'black', 'opacity': 1});
    }).dblclick(function(){
        $("#choosingKStates").animate({width: '0', height:'0'}, "fast").css({'opacity':0});
		$("#ko1").animate({width: '0px', height: '0px'}).css({'background-color': 'black', 'opacity': 0});
		$("#ko2").animate({width: '0px', height: '0px'}).css({'background-color': 'black', 'opacity': 0});
		$("#ko3").animate({width: '0px', height: '0px'}).css({'background-color': 'black', 'opacity': 0});
		$("#ko4").animate({width: '0px', height: '0px'}).css({'background-color': 'black', 'opacity': 0});
    });
	$("#ko1").click(function(){
		$("#choosingKStates").animate({width: '0', height:'0'}, "slow").css({'opacity':0});
	});
	$("#ko2").click(function(){
		$("#choosingKStates").animate({width: '0', height:'0'}, "slow").css({'opacity':0});
	});
	$("#ko3").click(function(){
		$("#choosingKStates").animate({width: '0', height:'0'}, "slow").css({'opacity':0});
	});
	$("#ko4").click(function(){
		$("#choosingKStates").animate({width: '0', height:'0'}, "slow").css({'opacity':0});
	});
	$("#sideNote").focus(function(){
        $(this).animate({height: '100'}, "fast").css({'font-size':25, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({height: '13', width: '100%'}, "fast").css({'font-size':15, 'background-color': ''});
    }).hover(function(){
        $(this).animate({height: '100'}, "fast").css({'font-size':25, 'background-color': ''});
    }, function(){
		$(this).animate({height: '13', width: '100%'}, "fast").css({'font-size':15, 'background-color': ''})
	});

	$("#addAreaCode").focus(function(){
        $(this).animate({width: '210', height:'60'}, "fast").css({'font-size':20, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '150', height:'30'}, "fast").css({'font-size':10, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '210', height:'60'}, "fast").css({'font-size':20, 'background-color': ''});
    }, function(){
		$(this).animate({width: '150', height:'30'}, "fast").css({'font-size':10, 'background-color': ''})
	});

	$("#reportingTable").focus(function(){
        $(this).animate({width: '210', height:'60'}, "fast").css({'font-size':20, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '150', height:'30'}, "fast").css({'font-size':10, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '210', height:'60'}, "fast").css({'font-size':20, 'background-color': ''});
    }, function(){
		$(this).animate({width: '150', height:'30'}, "fast").css({'font-size':10, 'background-color': ''})
	});
	$("#response").focus(function(){
        $(this).animate({width: '210', height:'60'}, "fast").css({'font-size':20, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '150', height:'30'}, "fast").css({'font-size':10, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '210', height:'60'}, "fast").css({'font-size':20, 'background-color': ''});
    }, function(){
		$(this).animate({width: '150', height:'30'}, "fast").css({'font-size':10, 'background-color': ''})
	});
	$("#listItem").focus(function(){
        $(this).animate({width: '210', height:'60'}, "fast").css({'font-size':20, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '150', height:'30'}, "fast").css({'font-size':10, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '210', height:'60'}, "fast").css({'font-size':20, 'background-color': ''});
    }, function(){
		$(this).animate({width: '150', height:'30'}, "fast").css({'font-size':10, 'background-color': ''})
	});
	$("#disaster").focus(function(){
        $(this).animate({width: '210', height:'60'}, "fast").css({'font-size':20, 'background-color': ''});
    }).focusout(function(){
        $(this).animate({width: '150', height:'30'}, "fast").css({'font-size':10, 'background-color': ''});
    }).hover(function(){
        $(this).animate({width: '210', height:'60'}, "fast").css({'font-size':20, 'background-color': ''});
    }, function(){
		$(this).animate({width: '150', height:'30'}, "fast").css({'font-size':10, 'background-color': ''})
	});





});

/*document.getElementById("areacode")///id="currentDate"///id="time"*/


	var dupCounter = 0

	function csvDupCheck(){
		for(i=0;i<data.data.length;i++){
			if((data.data[i]["account"] == "DUP ACCOUNT") || (data.data[i]["OV Phone"] == "DUP PHONE")){
				continue;
			}
			if(i==data.data.length){
				break;
			}
			var aCheck = data.data[i]["account"]
			var pCheck = data.data[i]["OV Phone"]
			for(c=1;c<data.data.length;c++){
			if(c==i){
				continue;
			}
			if((data.data[c]["account"] == "DUP ACCOUNT") || (data.data[c]["OV Phone"] == "DUP PHONE")){
				continue;
			}
			if( (typeof aCheck === 'undefined') || (typeof pCheck === 'undefined')){
				break;
			}
				if((aCheck == data.data[c]["account"]) && (pCheck == data.data[c]["OV Phone"])){
					dupCounter++
					data.data[c]["account"] = "DUP ACCOUNT"
					data.data[c]["OV Phone"] = "DUP PHONE"

				}
			}
		}
		console.log(dupCounter + " DUPLICATES FOUND IN SPREADSHEET")
		alert(dupCounter + " DUPLICATES and " + ((data.data.length-1)-dupCounter)+ " UNIQUE ACCOUNTS FOUND IN SPREADSHEET")
		dupCounter=0;
	}




		function csvDupCheck2(){
		for(i=0;i<data.data.length;i++){
			if(data.data[i]["Acct Num"] == "DUP ACCOUNT"){
				continue;
			}
			if(i==data.data.length){
				break;
			}
			var aCheck = data.data[i]["Acct Num"]
			for(c=1;c<data.data.length;c++){
			if(c==i){
				continue;
			}
			if(data.data[c]["Acct Num"] == "DUP ACCOUNT"){
				continue;
			}
			if(typeof aCheck === 'undefined'){
				break;
			}
				if(aCheck == data.data[c]["Acct Num"]){
					dupCounter++
					data.data[c]["Acct Num"] = "DUP ACCOUNT"
					data.data[c]["CACS State"] = "DUP"

				}
			}
		}
		console.log(dupCounter + " DUPLICATES FOUND IN SPREADSHEET")
		alert(dupCounter + " DUPLICATES and " + ((data.data.length-1)-dupCounter)+ " UNIQUE ACCOUNTS FOUND IN SPREADSHEET")
		dupCounter=0;
	}




function dncStore(event){
	var x = event.keyCode;
	var dncObject = {"dncPhone":"", "time":""}

	if(x==13){
		if(input2Resource.value == "DNC"){
			dncObject.dncPhone = input2Phone.value
			dncObject.time = time.innerText
			separateAccounts2.separateDNC.push(dncObject)
			dncVarStore = true;
		}
	}
}





function dncLogicCheck(event){
var separateAcc = {"phone":"","resource":"","accountNumber":"","kState":"","bResult":"","result":"","time":"","newNum":"","newNumPercentTotal":""}
	var x = event.keyCode;
		if(x == 13){
			for(i=0;i<separateAccounts2.separateDNC.length;i++){
				if(input2Phone.value == separateAccounts2.separateDNC[i].dncPhone && input2Resource.value != "DNC"){
					separateAcc.phone = "*"+input2Phone.value+"*";
					separateAcc.accountNumber = input2AccNum.value
					separateAcc.kState = input2State.value
					separateAcc.bResult = "DNC";
					separateAcc.result = "DNC";
					separateAcc.resource = input2Resource.value;
					separateAcc.newNum = "NO";
					alert("DNC FOUND AT: " + separateAccounts2.separateDNC[i].time)
					dncVar = true
				}
			}
		}
	}
	function dncLogicCheckCore(event){
var separateAcc = {"phone":"","resource":"","accountNumber":"","kState":"","bResult":"","result":"","time":"","newNum":"","newNumPercentTotal":""}
	var x = event.keyCode;
		if(x == 13){
			for(i=0;i<separateAccounts2.separateDNC.length;i++){
				if(input2Phone.value == separateAccounts2.separateDNC[i].dncPhone && input2Resource.value != "DNC"){
					separateAcc.phone = "*"+input2Phone.value+"*";
					separateAcc.accountNumber = input2AccNum.value
					separateAcc.kState = input2State.value
					separateAcc.bResult = "DNC";
					separateAcc.result = "DNC";
					separateAcc.resource = input2Resource.value;
					separateAcc.newNum = "NO";
					alert("DNC FOUND AT: " + separateAccounts2.separateDNC[i].time)
					dncVar = true
				}
			}
		}
	}
/*var separateAccounts2 = {separateDNC:[]};*/

function dupLogic(event){

var x = event.keyCode;

if(x==13){
	for(i=0;i<separateAccounts.separate.length;i++){
				if(input2Phone.value == separateAccounts.separate[i].phone && input2Resource != "DNC"){
					alert("DUPLICATE FOUND IN "+ separateAccounts.separate[i].resource + " AT: " + separateAccounts.separate[i].time)
					dupVar = true;
					break;
				}
			}
	for(i=0;i<separateAccounts3.separateGeneral.length;i++){
				if(input2Phone.value == separateAccounts3.separateGeneral[i].phone && input2Resource != "DNC"){
					alert("DUPLICATE FOUND IN "+ separateAccounts3.separateGeneral[i].resource + " AT: " + separateAccounts3.separateGeneral[i].time)
					dupVar = true;
					break;
				}
			}
		}
	}



function newNumLogic(event){

var separateAcc = {"phone":"","resource":"","accountNumber":"","kState":"","bResult":"","result":"","time":"","newNum":"","newNumPercentTotal":""}
var accurintCounter = 0
var x = event.keyCode;
var generalCounter = 0

if(x == 13){
if(input2Resource.value == "ACCURINT~SEARCH" && dupVar == false && dncVar == false){

		for(i=0;i<separateAccounts3.separateGeneral.length;i++){
			if(input2Phone.value != separateAccounts3.separateGeneral[i].phone){
					accurintCounter++

					for(countoff2 = 0;countoff2<separateAccounts.separate.length;countoff2++){
						if(input2Phone.value != separateAccounts.separate[countoff2].phone){
							generalCounter++

						for(countoff=0;countoff<separateAccounts2.separateDNC.length;countoff++){
							if(input2Phone.value == separateAccounts2.separateDNC[countoff].dncPhone){
									accurintCounter = 0
									break;
								}
							}

								if (generalCounter >= separateAccounts.separate.length && accurintCounter == separateAccounts3.separateGeneral.length){
									separateAcc.accountNumber = input2AccNum.value
									separateAcc.kState = input2State.value
									separateAcc.phone = input2Phone.value;
									separateAcc.bResult = "";
									separateAcc.result = "";
									separateAcc.resource = "$"+input2Resource.value+"$";
									separateAcc.newNum = "YES";
									separateAcc.time = time.innerText
									totalNumFoundCounter++
									newNumFoundCounter++
									alert("NEW NUMBER")
									accurintCounter = 0
									separateAcc.newNumPercentTotal = newNumFoundCounter + " | " + totalNumFoundCounter
									separateAccounts.separate.push(separateAcc);
									newNumVar = true
								}
							}
						}
					}
				}
			}
		}
	}

function placeGeneralInformation(){
	var ref1 = document.getElementById("ref1");
	var ref2 = document.getElementById("ref2");
	var ref3 = document.getElementById("ref3");
	var ref4 = document.getElementById("ref4");
	var ref5 = document.getElementById("ref5");
	var ref6 = document.getElementById("ref6");
	var ref7 = document.getElementById("ref7");
	var ref8 = document.getElementById("ref8");
	var ref9 = document.getElementById("ref9");
	var ref10 = document.getElementById("ref10");
	var info1 = document.getElementById("currentDate");
	var info2 = document.getElementById("aNumber");
	var info3 = document.getElementById("resource");
	var info4 = document.getElementById("phone");
	var info5 = totalNumFoundCounter;
	var info6 = newNumFoundCounter;
	var info7 = document.getElementById("result");
	var info8 = document.getElementById("basicResult");
	var info9 = document.getElementById("ckState");
	var info10 = document.getElementById("nkState");

	ref1.innerText = "DATE: " + info1.innerText;
	ref2.innerText = "ACCOUNT: " + info2.value;
	ref3.innerText = "RESOURCE: " + info3.value;
	ref4.innerText = "PHONE: " + info4.value;
	ref5.innerText = "TOTAL NUMBERS FOUND: " + info5;
	ref6.innerText = "NEW NUMBERS FOUND: " + info6;
	ref7.innerText = "NOTE: " + info7.value;
	ref8.innerText = "REPORT NOTE: " + info8.value;
	ref9.innerText = "CURRENT K STATE: " + info9.value;
	ref10.innerText = "NEW K STATE: " + info10.value;
}
</script>
</html>

<html>
<head>
<style>
table{
	width: 100%
}
table, td {
    border: 1px solid black;
	width: 100%
}
td {
	width: 30%
}
#myTable {
	position: relative;
    width: 100%
	margin-left: auto;
	margin-right: auto;
}
td {text-align: center;font-size: 150%;}

#multiBtn{position: relative;
    width: 12.5%;
	margin-left: auto;
	margin-right: auto;
	left: 25%;

	}
#clr{position: relative;
    width: 12.5%;
	margin-left: auto;
	margin-right: auto;
	left: 30%;
	animation: changeColor2 7s infinite linear;
	}
#close{position: relative;
    width: 12.5%;
	margin-left: auto;
	margin-right: auto;
	left: 35%;
	animation: changeColor 7s infinite linear;
	}

#pT {
  animation: changeColor2 7s infinite linear;
}
#ok {
  animation: changeColor2 7s infinite linear;
}
#nk {
  animation: changeColor2 7s infinite linear;
}
#rT {
  animation: changeColor2 7s infinite linear;
}
#tT {
  animation: changeColor 10s infinite linear;
}
#uidT {
  animation: changeColor2 7s infinite linear;
}
#reT {
  animation: changeColor2 7s infinite linear;
}
#daT {
  animation: changeColor2 7s infinite linear;
}
position: fixed;
height: 100%;
width: 100%;
}

#first{
	background-color: #444499
	font-color: white
}
#listItem{
	background-color : #f9e5e5;
font-size: 25px;
position: relative;
	top: 200%;
	  left: 25%;

	}

#list{
	background-color : #ccccff
}
li{
	font-size: 25px
}
#inputs{
	top: 5%;
	  left: 50%;
	  height: 2px;
}
#wrap {
  margin-top: 300px;
  perspective: 1000px;
  perspective-origin: 50% 50%;

}
.cube {
  margin: auto;
  position: relative;
  height: 200px;
  width: 200px;
  transform-style: preserve-3d;
}

.cube > div {
  position: absolute;
  box-sizing: border-box;
  padding: 10px;
  height: 100%;
  width: 100%;
  opacity: 0.9;
  background-color: #000;
  border: solid 1px #eeeeee;
  color: #ffffff;
}
#f {
  transform: translateZ(100px);
  text-align: center;
}

#back {
  transform: translateZ(-100px) rotateY(180deg);
  text-align: center;
}

#right {
  transform: rotateY(-270deg) translateX(100px);
  transform-origin: top right;
  text-align: center;
}

#left {
  transform: rotateY(270deg) translateX(-100px);
  transform-origin: center left;
  text-align: center;
}

#top {
  transform: rotateX(-270deg) translateY(-100px);
  transform-origin: top center;
  text-align: center;
}

#bottom {
  transform: rotateX(270deg) translateY(100px);
  transform-origin: bottom center;
  text-align: center;
}
@keyframes rotate {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }

  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
.cube {
  animation: rotate 15s infinite linear;
}
#f {
  animation: changeColor 10s infinite linear;
}
#back {
  animation: changeColor 10s infinite linear;
}
#right {
  animation: changeColor 10s infinite linear;
}
#left {
  animation: changeColor 10s infinite linear;
}
#top {
  animation: changeColor 10s infinite linear;
}
#bottom {
  animation: changeColor 10s infinite linear;
}
#background {
  animation: changeColor2 10s infinite linear;
}
input {
  animation: changeColor2 7s	 infinite linear;
}
div {

}
ul {
  animation: changeColor2 7s infinite linear;
}
li {
  animation: changeColor2 7s infinite linear;
}
button {
  animation: changeColor2 7sr infinite linear;
}
body {
  animation: changeColor 7sr infinite linear;
}
#wrap:hover #f {
  transform: translateZ(200px);
}

#wrap:hover #back {
  transform: translateZ(-200px) rotateY(180deg);
}

#wrap:hover #right {
  transform: rotateY(-270deg) translateZ(100px) translateX(100px);
}

#wrap:hover #left {
  transform: rotateY(270deg) translateZ(100px) translateX(-100px);
}

#wrap:hover #top {
  transform: rotateX(-270deg) translateZ(100px) translateY(-100px);
}

#wrap:hover #bottom {
  transform: rotateX(270deg) translateZ(100px) translateY(100px);
}
.cube > div {
  transition: transform 0.2s ease-in;
}
div.image {
   content:url(http://placehold.it/350x150);
}​
img {
    display: block;
    margin: 0 auto;
	border: 10px solid teal;
}
#image{
	height: 100%;
}
table {
  animation: changeColor 7sr infinite linear;
}
#myTable {
  animation: changeColor 7sr infinite linear;
}
td {
  animation: changeColor 7sr infinite linear;
}
#poc {
  animation: changeColor 10s infinite linear;
}
#ksc {
  animation: changeColor 10s infinite linear;
}
#nks {
  animation: changeColor 10s infinite linear;
}
#cks {
  animation: changeColor 10s infinite linear;
}
#anT {
  animation: changeColor 10s infinite linear;
}
#newNum {

}
#nnPT {
  animation: changeColor 10s infinite linear;
}
#downloadTable{
	width: 100%;
	right: 0px;
	font-size: 25px
}
#checkResults{
	width: 50%;
	left: 1000px;
	font-size: 25px
}
#tableBack{
	position: relative;
	height: 25px;
	right: 0%;
	top: 700px;
	width: 100%;
	text-align: center;
	font-size: 200%;
}
</style>
<div id="tableBack">
</head>
<body>


<button id="downloadTable" onclick="checkDataBNL2();">DOWNLOAD TABLE TO EXCEL</button>
<table id="myTable">
  <tr>
	<td id="tT">ACCOUNT#</td>
    <td id="pT">PHONE #</td>
	<td id="rT">RESULT</td>
	<td id="ok">OLD K STATE</td>
	<td id="nk">NEW K STATE</td>
  </tr>
</table>
<br>



<script>
var b = 0;
function closeW(){
	close();
}
function checkDataCore(){
if(recordsObj.pr == "[]"){
		alert("There is no info for this session!  Peace out yo!");
		close();
	}else{
	setTable();
	}
}

function setTable() {

	var resource = document.getElementById("resource");
    var table = document.getElementById("myTable");
	for(i=0;i<recordsObj.pr.length;i++){

	if(b>0){
	document.getElementById("multiBtn").onclick = exp('coreSearch.csv');
	}
	var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(1);
    var cell4 = row.insertCell(0);
	var cell5 = row.insertCell(0);
	var cell6 = row.insertCell(0);
	var cell7 = row.insertCell(0);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11);
	var cell13 = row.insertCell(12);
    cell1.innerHTML = recordsObj.pr[i].basicResult;
    cell2.innerHTML = recordsObj.pr[i].uid;
	cell3.innerHTML = recordsObj.pr[i].resource;
	cell4.innerHTML = recordsObj.pr[i].phone;
	cell5.innerHTML = recordsObj.pr[i].date;
	cell6.innerHTML = recordsObj.pr[i].accountNumber;
	cell7.innerHTML = recordsObj.pr[i].time;
	cell8.innerHTML = recordsObj.pr[i].ckState;
	cell9.innerHTML = recordsObj.pr[i].nkState;
	cell10.innerHTML = recordsObj.pr[i].ksChange;
	cell11.innerHTML = recordsObj.pr[i].percentageOfChange;
	cell12.innerHTML = recordsObj.pr[i].newNum;
	cell13.innerHTML = recordsObj.pr[i].newNumPercentTotal;
	document.getElementById("multiBtn").innerHTML = "DOWNLOAD RESULTS";
}
	b++;
}


function exp(filename){
var mainInfo = [];
var allRow = document.querySelectorAll("tr");
	for(i=0;i<allRow.length;i++){
		var singleRow = [];
		var lengthOfColumns = allRow[i].querySelectorAll("td");
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
clearData();
}
function clearData() {
    var txt;
    var r = confirm("Would you like to clear the storage?  This will PERMANENTLY delete all of the results for this session!");
    if (r == true) {
	var resetRecords = recordsObj.pr = [];
	var strRecords = JSON.stringify(recordsObj);
       localStorage.setItem("records", strRecords);
		alert("Session info deleted.  Peace out Yo!");
		close();
    }
}

</script>

</body>

</html>
<script>
var startingTimeMins = 0;
var endingTimeMins = 0;
var startingTimeSecs = 0;
var endingTimeMins = 0;
var allMin = []
var startChecker = 0
var startTime = 0
var endTime = 0
var startingTime = ""
var endingTime = ""

function starterTime(event){
	var x = event.keyCode;
		if(x == 67){
			 var st = Date.now()
			 var startTime = st
			 document.getElementById("startingMili").innerHTML = st
			 startingTime = document.getElementById("startingMili").innerHTML
		}
	}
function enderTime(event){
		var xCheck = event.keyCode;
			if(xCheck == 67){
			 var et = Date.now()
			 var endTime = et
			 document.getElementById("endingMili").innerHTML = et
			 endingTime = document.getElementById("endingMili").innerHTML
			 duration()
		}
	}
function getSum(total, num) {
    return total + num;
}
function duration(){
	var duration = Math.round((parseInt(endingTime) - parseInt(startingTime)) / 1000)
	document.getElementById("compTime3").innerHTML = secondsSorter(duration)
	allMin.push(duration);
	var	totalMins = allMin.reduce(getSum);
	var averageMins = Math.round(totalMins/allMin.length);
	var avgAcrossRemaining = Math.round(averageMins*(data.data.length-phoneNumberCounter))
		document.getElementById("compTime").innerHTML = "ETC: " + specifierDeterminer(avgAcrossRemaining)
}

function specifierDeterminer(avgAcrossRemaining){
	var specifier = ""
		if(avgAcrossRemaining >= 144000){
			/*specifier = "weeks"*/specifier = "seconds"
			return lateralTimeConverter(avgAcrossRemaining, specifier)
		}
		if(avgAcrossRemaining >= 28800 && avgAcrossRemaining < 144000){
			/*specifier = "days"*/specifier = "seconds"
			return lateralTimeConverter(avgAcrossRemaining, specifier)
		}
		if(avgAcrossRemaining >= 3600 && avgAcrossRemaining < 28800){
			/*specifier = "hours"*/specifier = "seconds"
			return lateralTimeConverter(avgAcrossRemaining, specifier)
		}
		if(avgAcrossRemaining >= 60 && avgAcrossRemaining < 3600){
			/*specifier = "minutes"*/specifier = "seconds"
			return lateralTimeConverter(avgAcrossRemaining, specifier)
		}
		if(avgAcrossRemaining >= 0 && avgAcrossRemaining < 60 ){
			specifier = "seconds"
			return lateralTimeConverter(avgAcrossRemaining, specifier)
		}
	}

function lateralTimeConverter(incomingNumber, specifier){

	var seconds = 0
	var minutes = 0
	var hours = 0
	var days = 0
	var weeks = 0
	var number = parseInt(incomingNumber)

/*		if(specifier == "weeks"){
			days = parseFloat(incomingNumber * 5)
			hours = parseFloat(days * 8)
			minutes = parseFloat(hours * 60)
			seconds = parseFloat(minutes * 60)
			return reConverter(seconds)
		}
		if(specifier == "days"){
			hours = parseFloat(incomingNumber * 8)
			minutes = parseFloat(hours * 60)
			seconds = parseFloat(minutes * 60)
			return reConverter(seconds)
		}
		if(specifier == "hours"){
			minutes = parseFloat(incomingNumber * 60)
			seconds = parseFloat(minutes * 60)
			return reConverter(seconds)
		}
		if(specifier == "minutes"){
			seconds = parseFloat(incomingNumber * 60)
			return reConverter(seconds)
		}*/
		if(specifier == "seconds"){
			return reConverter(number)
		}
	}

function reConverter(seconds){
			minutes = (parseFloat(parseFloat(seconds) / 60)).toFixed(2)
			hours = (parseFloat(parseFloat(minutes) / 60)).toFixed(2)
			days = (parseFloat(parseFloat(hours) / 8)).toFixed(2)
			weeks = (parseFloat(parseFloat(days) / 5)).toFixed(2)

			var minutesString = minutes.toString()
			var hoursString = hours.toString()
			var daysString = days.toString()
			var weeksString = weeks.toString()

			var minutesLength = minutesString.length
			var hoursLength = hoursString.length
			var daysLength = daysString.length
			var weeksLength = weeksString.length


			////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			floatHolderDays = (parseFloat(weeksString.slice(weeksLength - 3)) * 5).toFixed(2)
			floatHolderHours = (parseFloat(daysString.slice(daysLength - 3)) * 8).toFixed(2)
			floatHolderMinutes = (parseFloat(hoursString.slice(hoursLength - 3)) * 60).toFixed(2)
			floatHolderSeconds = (parseFloat(minutesString.slice(minutesLength - 3)) * 60).toFixed(2)
			////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			var floatHolderDaysString = floatHolderDays.toString()
			var floatHolderHoursString = floatHolderHours.toString()
			var floatHolderMinutesString = floatHolderMinutes.toString()
			var floatHolderSecondsString = floatHolderSeconds.toString()

			var floatHolderDaysLength = floatHolderDaysString.length
			var floatHolderHoursLength = floatHolderHoursString.length
			var floatHolderMinutesLength = floatHolderMinutesString.length
			var floatHolderSecondsLength = floatHolderSecondsString.length
			////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			weeks = parseInt(weeksString.slice(0, weeksLength - 3))
			days = parseInt(floatHolderDaysString.slice(0, floatHolderDaysLength - 3))
			hours = parseInt(floatHolderHoursString.slice(0, floatHolderHoursLength - 3))
			minutes = parseInt(floatHolderMinutesString.slice(0, floatHolderMinutesLength - 3))
			seconds = Math.round(parseInt(floatHolderSecondsString.slice(0, floatHolderSecondsLength - 3)))
			currentTime(seconds, minutes, hours, days, weeks)
			return "|"+ weeks + "|wk|"+ days + "|dy|" + hours + "|hr|" + minutes + "|min|" + seconds + "|sec|"
		}


	var normalTimeArray = [8,9,10,12,1,2,3,4,5]
	var militaryTimeArray = [8,9,10,11,12,13,14,15,16,17]
	var normal_Military_Obj = {allTimes:[{"normal":8,"military":8},{"normal":9,"military":9},{"normal":10,"military":10},{"normal":1,"military":13},{"normal":2,"military":14},{"normal":3,"military":15},{"normal":4,"military":16},{"normal":5,"military":17}]}


function currentTime(eSec, eMin, eHour, eDay, eWeek){
	var today1 = new Date();
	var currTime = document.getElementById("time").innerHTML;
	var currentSecond = parseInt(currTime.slice(currTime.length-2))
	var currentMinute = parseInt(currTime.slice(currTime.length-5,currTime.length-3))
	var currentHour = normalToMilitary(parseInt(currTime.slice(0,currTime.length-6)))
	var currentDay = today1.getDay();
	var currentWeek = 0;
		addTimes(eSec, eMin, eHour, eDay, eWeek, currentSecond, currentMinute, currentHour, currentDay, currentWeek)
}

function addTimes(eSec, eMin, eHour, eDay, eWeek, cSec, cMin, cHour, cDay, cWeek){
	var addedSec = 0
	var addedMin = 0
	var addedHour = 0
	var addedDay = 0
	var addedWeek = 0
		if(eSec>0){
			addedSec = eSec+cSec
		}
		if(eMin>0){
			addedMin = eMin+cMin
		}
		if(eHour>0){
			addedHour = eHour+cHour
		}
		if(eDay>0){
			addedDay = eDay+cDay
		}
		if(eWeek>0){
			addedWeek = eWeek+cWeek
		}
		if(addedDay == 0){
			addedDay = cDay
		}
		if(addedHour == 0){
			addedHour = cHour
		}
		if(addedMin == 0){
			addedMin = cMin
		}
			timeSorter(addedSec, addedMin, addedHour, addedDay, addedWeek)
	}
function timeSorter(addedSec, addedMin, addedHour, addedDay, addedWeek){
	if(addedSec > 60 || addedMin >  60 || addedHour > 17 || addedDay > 5){
		if(addedSec >= 60){
			addedMin++
			addedSec = addedSec - 60
		}
		if(addedMin >=  60){
			addedHour++
			addedMin = addedMin - 60
		}
		if(addedHour >= 17){
			addedDay++
			addedHour = addedHour - 17
		}
		if(addedDay >= 6){
			addedWeek++
			addedDay = addedDay - 5
		}
		if(addedHour == 0){
			addedHour = 8
		}
		timeSorter(addedSec, addedMin, addedHour, addedDay, addedWeek)
	}
		completionStatementCreator(addedWeek, daySelector(addedDay), militaryToNormal(addedHour), addedMin, addedSec)
	}

function secondsSorter(incomingSeconds){
	var sortedSeconds = parseInt(Math.round(incomingSeconds))
	var sortedMinutes = 0
	var sortedHours = 0
	var sortedDays = 0
	var sortedWeeks = 0
		if(sortedSeconds > 60){
			sortedMinutesFloatHolder = (sortedSeconds/60).toFixed(2)
			sortedMinutesString = sortedMinutesFloatHolder.toString()
			sortedMinutes = sortedMinutesString.slice(0,sortedMinutesString.length - 3)
			sortedSeconds = sortedMinutesString.slice(sortedMinutesString.length-3) * 60
		}
	return "Duration: " + sortedMinutes + " mins " + sortedSeconds + " secs "
}

function completionStatementCreator(finalWeek, finalDay, finalHour, finalMinute, finalSecond){

	var inWeeks = " in " + finalWeek + " week" + pluralChecker(finalWeek)
	var onDays= " on " + finalDay
	var atHours = " at " + finalHour
	var inMinutes = ":" + minuteStringer(finalMinute) + " " + amPmDeterminer(normalToMilitary(finalHour))
	var inSeconds = " and " + finalSecond + pluralChecker(finalSecond) + "."
	var todaysDay = new Date().getDay()
		if(finalWeek <= 0){
			inWeeks = ""
		}
		if(finalDay <= 0){
			onDays = ""
		}
		if(finalHour <= 0){
			atHours = ""
		}
		if(finalMinute <= 0){
			inMinutes = ""
		}
		if(finalSecond <= 0){
			inSeconds = ""
		}
		if(dayPosition(finalDay) == todaysDay && finalWeek == 0){
			onDays = "Today"
		}
		if(finalDay == daySelector(todaysDay+1) && finalWeek == 0){
			onDays = "Tomorrow"
		}
		var completionStatement = "Spreadsheet should be completed " + inWeeks.toString() + onDays.toString() + atHours.toString() + inMinutes.toString()
			document.getElementById("compTime2").innerHTML = completionStatement
		}


function minuteStringer(incomingTime){
	var stringTime = incomingTime.toString();
		if(stringTime.length == 1){
			stringTime = "0"+stringTime
		}
	return stringTime
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function normalToMilitary(normalTime){
	for(timeCounterM=0;timeCounterM<normal_Military_Obj.allTimes.length;timeCounterM++){
		if(normalTime == normal_Military_Obj.allTimes[timeCounterM].normal){
			return normal_Military_Obj.allTimes[timeCounterM].military
		}
	}
}

function militaryToNormal(militaryTime){
	for(timeCounterN=0;timeCounterN<normal_Military_Obj.allTimes.length;timeCounterN++){
		if(militaryTime == normal_Military_Obj.allTimes[timeCounterN].military){
			return normal_Military_Obj.allTimes[timeCounterN].normal
		}
	}
}

function daySelector(addedDay){
var week1 = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY"]
	return week1[addedDay]
}

function dayPosition(addedDay){
	var week1 = [0,"MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","MONDAY"]
		for(checkDay=0;checkDay<week1.length;checkDay++){
			if(addedDay == week1[checkDay]){
				var dayPosition = checkDay
					return dayPosition
				}
			}
		}

function pluralChecker(numberToCheck){
	var pluralOrNot = ""
		if(numberToCheck > 1){
			pluralOrNot = "s"
			return pluralOrNot;
		}
		if(numberToCheck <= 1){
			pluralOrNot = ""
			return pluralOrNot;
		}
	}

function amPmDeterminer(hourToDetermine){
	var amPm = ""
		if(hourToDetermine >= 8 && hourToDetermine < 12){
			amPm = "a.m."
		}
		if(hourToDetermine >= 12 && hourToDetermine <= 17){
			amPm = "p.m."
		}
	return amPm
}

///////////////////////////////plural is returning undefined//////////////////////////////estimated minute math is calculating more minutes than necessary after 5 pm.///////////////////////////



var startingTimeMins = 0;
var endingTimeMins = 0;
var startingTimeSecs = 0;
var endingTimeMins = 0;
var allMin = []
var startChecker = 0
var startTime = 0
var endTime = 0
var startingTime = ""
var endingTime = ""

function starterTime2(event){
	var x = event.keyCode;
		if(x == 67){
			 var st = Date.now()
			 var startTime = st
			 document.getElementById("startingMili").innerHTML = st
			 startingTime = document.getElementById("startingMili").innerHTML
		}
	}
function enderTime2(event){
		var xCheck = event.keyCode;
			if(xCheck == 67){
			 var et = Date.now()
			 var endTime = et
			 document.getElementById("endingMili").innerHTML = et
			 endingTime = document.getElementById("endingMili").innerHTML
			 duration2()
		}
	}
function getSum(total, num) {
    return total + num;
}
function duration2(){
	var duration = Math.round((parseInt(endingTime) - parseInt(startingTime)) / 1000)
	document.getElementById("compTime3").innerHTML = secondsSorter2(duration)
	allMin.push(duration);
	var	totalMins = allMin.reduce(getSum);
	var averageMins = Math.round(totalMins/allMin.length);
}


function secondsSorter2(incomingSeconds){
	var sortedSeconds = parseInt(Math.round(incomingSeconds))
	var sortedMinutes = 0
	var sortedHours = 0
	var sortedDays = 0
	var sortedWeeks = 0
		if(sortedSeconds > 60){
			sortedMinutesFloatHolder = (sortedSeconds/60).toFixed(2)
			sortedMinutesString = sortedMinutesFloatHolder.toString()
			sortedMinutes = sortedMinutesString.slice(0,sortedMinutesString.length - 3)
			sortedSeconds = sortedMinutesString.slice(sortedMinutesString.length-3) * 60
		}
	return "Duration: " + sortedMinutes + " mins " + sortedSeconds + " secs "
}



///////////////////////////////plural is returning undefined//////////////////////////////estimated minute math is calculating more minutes than necessary after 5 pm.///////////////////////////



var b = 0;
function closeW(){
	close();
}

function checkDataBNL2(){
if(recordsObj.pr == "[]"){
		alert("There is no info for this session.");

	}
	setTable2();
}
var accountToCheckAgainst = []
var numberCounter = 1
var onCurrentAccount = false
function setTable2(){
	var incomingAccount = recordsObj.pr[0].accountNumber
	var lastAccount = accountToCheckAgainst[accountToCheckAgainst.length-1]
	var accountToPlace = ""

				if(incomingAccount != lastAccount || accountToCheckAgainst.length == 0){
					accountToPlace = incomingAccount
					numberCounter = 1
				}

				if(incomingAccount == lastAccount){
					accountToPlace = "PH#"+numberCounter
				}

			numberCounter++

			var resource = document.getElementById("resource");
			var table = document.getElementById("myTable");
				for(i=0;i<recordsObj.pr.length;i++){
					var row = table.insertRow(1);
					if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
						var cell1 = row.insertCell(0);
						var cell2 = row.insertCell(0);
					}
					var cell3 = row.insertCell(0);
					var cell4 = row.insertCell(0);
					var cell5 = row.insertCell(0);

						cell4.innerHTML = recordsObj.pr[0].phone;
						cell3.innerHTML = recordsObj.pr[0].basicResult;

						if(accountToPlace != ""){
							cell5.innerHTML = accountToPlace
						}
						if(accountToPlace == ""){
							cell5.innerHTML = incomingAccount
						}
						accountToCheckAgainst.push(incomingAccount)
					if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){

						cell2.innerHTML = document.getElementById("ckState").value

						cell1.innerHTML = document.getElementById("nkState").value
						}
						b++
						recordsObj.pr = []
					}
				}


function checkData(){

	var resource = document.getElementById("resource");
    var table = document.getElementById("myTable");
	for(i=0;i<recordsObj.pr.length;i++){


	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(0);
	var cell3 = row.insertCell(0);
	cell3.innerHTML = recordsObj.pr[i].accountNumber
	cell2.innerHTML = recordsObj.pr[i].phone
	cell1.innerHTML = recordsObj.pr[i].basicResult;
	b++
	}
}

var spreadSheetName;
function downloadTableBNL2(){
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
  var hourChecker = time[h]
  var amPm = ""
	if(h < 12){
		amPm = "am"
	}
	if(h >= 12){
		amPm = "pm"
	}
	currentTime = time[h] + "-" + m + amPm;
	if(b>0){
	b=0;
	setSpreadSheetName2(month, date)
	}
}

function setSpreadSheetName2(month, date) {
    var getName = prompt("What would you like to call this spreadsheet?");
    if (getName != null) {
       spreadSheetName = getName;
		exp(spreadSheetName+(month+1)+date+"/"+currentTime+'.csv');
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
clearData();
}
function clearData() {
    var txt;
    var r = confirm("Would you like to clear the storage?  This will PERMANENTLY delete all of the results for this session!");
    if (r == true) {
		recordsObj.pr = [];
		alert("Session info deleted");
    }

}


var _mlar = 0;
var _as = 0;
var _smd = 0;
var _cstt = 0;
var _hn = 0;
var z = 0;
var c = 0;
var singNum = 1;
var na = [];
var oldResource = "";
var aa1 = [];
var chk = 0;
var pushed = "";
var array = [];
var o = 0
var bb = [];
var cc = [];
var dd = [];
var ee = [];
var ff = [];
var gg = [];
var hh = [];
var rate = 0;
var dNc = [];
var task = ["ACE","CACS","MORTGAGE~SERVE","MANUAL~DIAL","ACCURINT~SEARCH"];
var verticalTask = ["DNC", "INBOUND", "BAD~#~LIST", "CALL","SEARCH"];
var taskCount = 0;
var tasksC = 0;
var tasksV = 1;
	var r1 = "";
	var r2 = "";
	var r3 = "";
	var r4 = "";
	var r5 = "";
	var r6 = "";
	var r7 = "";
	var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function changeColor(event) {
	var phono = document.getElementById("phone");
	var body =document.body.getElementsByTagName("INPUT")
	var text =document.body.getElementsByTagName("TEXTAREA")
	var butto =document.body.getElementsByTagName("BUTTON")
	var pEl =document.body.getElementsByTagName("P")
    var x = event.clientX;
    var y = event.clientY;
     document.body.style.backgroundColor = "rgb("+ x +","+y+",77)"
	 for(i=0;i<body.length;i++){
	 document.getElementsByTagName("INPUT")[i].style.backgroundColor = "rgb("+ x+","+y+",0)"
}
	for(i=0;i<text.length;i++){
	 document.getElementsByTagName("TEXTAREA")[i].style.backgroundColor = "rgb("+ y+","+x+",0)"
}
for(i=0;i<butto.length;i++){
	 document.getElementsByTagName("BUTTON")[i].style.backgroundColor = "rgb("+ y+","+x+",0)"
}
for(i=0;i<pEl.length;i++){
	 document.getElementsByTagName("P")[i].style.backgroundColor = "rgb("+y+","+x+",0)"
}
	 }
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
  m = checkTime(m);
  s = checkTime(s);

  document.getElementById('time').innerHTML = time[h] + ":" + m + ":" + s;
  document.getElementById('currentDate').innerHTML = week[day] +" / "+monArray[month+1] +" / "+date +" / "+year;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
/*startTime();*/
document.getElementById("datePlace").innerHTML = month + "/" + day + "/" + year;
	let now = new Date();
document.getElementById("currentDate").innerHTML = now;

window.onload = function() {
    document.getElementById("uidInput").focus();
};
function erasePhone(event){
var phone = document.getElementById("phone");
var x = event.keyCode;
if(x == 13){
	phone.value = "";

	}
	phone.focus();
}

function reportData(){
	window.open("file:///C:/Users/T14603a/Desktop/NoteApp/dataTableRecords.html");
}

function accurintReportData(){
	window.open("file:///C:/Users/T14603a/Desktop/NoteApp/accurintDataTable.html");
}

function coreReportData(){
	window.open("file:///C:/Users/T14603a/Desktop/NoteApp/dataTableRecordsCore.html");
}

function bnlReportData(){
	window.open("file:///C:/Users/T14603a/Desktop/NoteApp/dataTableRecordsBNL.html");
}

function showAccount(incoming){
	document.getElementById("currentAccount").innerHTML = incoming.value
}




function erasePhoneP(event){
var phonep = document.getElementById("phone");
var x = event.keyCode;
if(x == 13){
	phonep.value = "";
	phonep.focus();
	}

}

function accToPhone(incom){
	var aNumeric = document.getElementById("aNum");
	var phonept = document.getElementById("phone");
	var routingEvent = incom.keyCode;
		if(routingEvent == 86){
			phonept.value = "";
			phonept.focus();
		}
	}

function goBack(event){
var x = event.keyCode;
if(x == 13 && document.getElementById("phone").value == "BACK"){
	document.getElementById("aNumber").focus();
	phoneNumberCounter++
	document.getElementById("phone").value = data.data[phoneNumberCounter]["OV Phone"];
	document.getElementById("aNumber").value = data.data[phoneNumberCounter]["account"];
	}
}
function resetFocus(event){
var x = event.keyCode;
if(x == 13){
	document.getElementById("reset1").focus();
	}
}
function addAreaCode(){

    window.open("C:\Users\T14603A\Desktop\addNewAreaCodes.html");

}
function chooseFile(event){
	var x = event.keyCode;
		if(x==13){
			if(document.getElementById("phone").value == "(CHO)OSE- FILE"){
			document.getElementById("csv-file").click();
			document.getElementById("aNumber").focus();
			}
		}
}
function checkTable(){

		window.open("file:///C:/Users/T14603a/Desktop/NoteApp/dataTable.html");

}
function irma(){

    window.open("file:///C:/Users/T14603a/Desktop/disaster/disaster3.html");

}
function areaC(event){
	var x = event.keyCode;
		if(x == 67){
			compareAreaCodes(event)
		}
}
function checkOriginalData(){
	window.open("file:///C:/Users/T14603a/Desktop/NoteApp/exexe.html")
}
function applyKState(event){
var x = event.keyCode;
if(x==13){
	document.getElementById("curKs").innerHTML = document.getElementById("ckState").value
	document.getElementById("nKs").innerHTML = document.getElementById("nkState").value
	}
}
function tranBack(event){
var x = event.keyCode;
	if(x==67){
	document.getElementById("result").focus();
	document.getElementById("input3").value = "";
		}
	}
	function tranBackAN(event){
var x = event.keyCode;
	if(x==67){
	document.getElementById("aNumber").focus();
	document.getElementById("input3").value = "";
		}
	}
	function tranBackAN2(event){
var x = event.keyCode;
	if(x==13){
	document.getElementById("aNumber").focus();
		}
	}
	function nkStateTranback(event){
		var x = event.keyCode;
			if(x==13){
				checkForStates2()
				document.getElementById("result").focus();
			}
	}
		var goodNumber = 0;
		var goodNumberType = ""
		var goodNumberTime = ""
	function inactiveAccounts(event){

	var x = event.keyCode;
	if(x==13){
	var result = document.getElementById("basicResult").value;
	var transfered = ""
		var requesterCode = result.slice(0,2)
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
	if(result.length > 4){
		if(result.slice(4) != "di" || result.slice(4) != "DI" || result.slice(4) != "hu" || result.slice(4) != "HU"  && result.slice(3,4) == "t"){
			var transfered = requester + " was transferred to agent: E"+ result.slice(5) + " to discuss the mortgage payment."
		}
		if(result.slice(4) == "hu" || result.slice(4) == "HU"){
			transfered = " Party hung up."
		}
		if(result.slice(4) == "gn" || result.slice(4) == "GN"){
			transfered = "There was a long hold time for the mortgage department, so " + requester + " was given a number to call us back."
		}
		if(result.slice(4) == "btc" || result.slice(4) == "BTC"){
			transfered = requester + " says its not a good time to talk and would like for us to call back later."
		}
		if(result.slice(4) == "btw" || result.slice(4) == "BTW"){
			transfered = requester + " says its not a good time to talk and will call us back later."
		}
		if(result.slice(4) == "p" || result.slice(4) == "P"){
			transfered = requester + " says they have already paid and wont speak to the mortgage team."
		}
		if(result.slice(4) == "di" || result.slice(4) == "DI"){
			transfered = " Party was disconnected."
		}
	}
		if(document.getElementById("basicResult").value == "IN" || document.getElementById("basicResult").value == "in"){
			document.getElementById("ckState").value = "INA"
			document.getElementById("nkState").value = "INA"
			document.getElementById("basicResult").value = "INA"
			document.getElementById("result").value = "INACTIVE"
			document.getElementById("result").focus();
			requester = "Account is inactive."
		}
		if(result.slice(0,2) == "IN" || result.slice(0,2) == "in"){
			document.getElementById("result").focus();
			requester = "Account is inactive."
		}
		if(document.getElementById("basicResult").value == "RF" || document.getElementById("basicResult").value == "rf"){
			document.getElementById("ckState").value = ""
			document.getElementById("nkState").value = ""
			document.getElementById("basicResult").value = "REF TO VRFY"
			document.getElementById("result").value = "PARTY REFUSED TO CONFIRM THE CONTACT INFORMATION ON THE ACCOUNT"
			document.getElementById("ckState").focus();
		}
	if(result.slice(0,2) == "RF" || result.slice(0,2) == "rf"){
			document.getElementById("result").focus();
			requester = " Party refused to confirm the contact information."
		}
	if(document.getElementById("basicResult").value == "BK" || document.getElementById("basicResult").value == "bk"){
			document.getElementById("ckState").value = "BK"
			document.getElementById("nkState").value = "BK"
			document.getElementById("result").value = "BANKRUPTCY"
			document.getElementById("result").focus();
		}
	if(result.slice(0,2) == "BK" || result.slice(0,2) == "bk"){
			document.getElementById("result").focus();
			requester = " This account is a Bankruptcy account."
		}
	if(document.getElementById("basicResult").value == "BS" || document.getElementById("basicResult").value == "bs"){
			document.getElementById("ckState").value = "BK"
			document.getElementById("nkState").value = "BK"
			document.getElementById("basicResult").value = "BK 7"
			document.getElementById("result").value = "CHAPTER 7 BANKRUPTCY"
			document.getElementById("result").focus();
		}
	if(result.slice(0,2) == "BS" || result.slice(0,2) == "bs"){
			document.getElementById("result").focus();
			requester = " This account is recorded as a Chapter 7 Bankruptcy."
		}
	if(document.getElementById("basicResult").value == "N" || document.getElementById("basicResult").value == "n"){
			document.getElementById("ckState").value = "NO#"
			document.getElementById("nkState").value = "NO#"
			document.getElementById("basicResult").value = "NO#"
			document.getElementById("result").value = "NO#"
			document.getElementById("result").focus();
		}
	if(result.slice(0,2) == "N" || result.slice(0,2) == "n"){
			document.getElementById("result").focus();
			requester = " Could not find any numbers for this account."
		}
	if(document.getElementById("basicResult").value == "BT" || document.getElementById("basicResult").value == "bt"){
			document.getElementById("ckState").value = "BK"
			document.getElementById("nkState").value = "BK"
			document.getElementById("basicResult").value = "BK 13"
			document.getElementById("result").value = "CHAPTER 13 BANKRUPTCY"
			document.getElementById("result").focus();
		}
	if(result.slice(0,2) == "BT" || result.slice(0,2) == "bt"){
			document.getElementById("result").focus();
			requester = " This account is recorded as a Chapter 13 Bankruptcy."
		}
	if(document.getElementById("basicResult").value == "CD" || document.getElementById("basicResult").value == "cd"){
			document.getElementById("ckState").value = "CND"
			document.getElementById("nkState").value = "CND"
			document.getElementById("basicResult").value = "CND"
			document.getElementById("result").value = "CEASE AND DECIST"
			document.getElementById("result").focus();
		}
	if(result.slice(0,2) == "CD" || result.slice(0,2) == "cd"){
			document.getElementById("result").focus();
			requester = " This number is recorded as a Cease and Decist number in CACS."
		}
	if(document.getElementById("basicResult").value == "DP" || document.getElementById("basicResult").value == "dp"){
			document.getElementById("ckState").value = "DUP"
			document.getElementById("nkState").value = "DUP"
			document.getElementById("basicResult").value = "DUP"
			document.getElementById("result").value = "DUPLICATE"
			document.getElementById("result").focus();
		}
	if(result.slice(0,2) == "DP" || result.slice(0,2) == "dp"){
			document.getElementById("result").focus();
			requester = "Duplicate."
		}
	if(document.getElementById("basicResult").value == "DC" || document.getElementById("basicResult").value == "dc"){
			document.getElementById("ckState").value = "DNC"
			document.getElementById("nkState").value = "DNC"
			document.getElementById("basicResult").value = "DNC"
			document.getElementById("result").value = "DO NOT CALL"
			document.getElementById("result").focus();
		}
	if(result.slice(0,2) == "DC" || result.slice(0,2) == "dc"){
			document.getElementById("result").focus();
			requester = " This number is recorded as a Do Not Call Number in CACS."
		}
	if(document.getElementById("basicResult").value == "DI" || document.getElementById("basicResult").value == "di"){
			document.getElementById("result").value = "DISCONNECTED"
			document.getElementById("basicResult").value = "DISCO"
			document.getElementById("ckState").focus();
		}
	if(result.slice(0,2) == "DI" || result.slice(0,2) == "di"){
			document.getElementById("result").focus();
			requester = " This number is disconnected."
		}
	if(document.getElementById("basicResult").value == "VN" || document.getElementById("basicResult").value == "vn"){
			document.getElementById("result").value = "VOICEMAIL NO MESSAGE LEFT"
			document.getElementById("basicResult").value = "VM NML"
			document.getElementById("ckState").focus();
		}
	if(result.slice(0,2) == "VN" || result.slice(0,2) == "vn"){
			document.getElementById("result").focus();
			requester = " Voicemail, no message left."
		}
	if(document.getElementById("basicResult").value == "VL" || document.getElementById("basicResult").value == "vl"){
			document.getElementById("result").value = "VOICEMAIL LEFT MESSAGE TO CALL BACK"
			document.getElementById("basicResult").value = "VM LMTCB"
			document.getElementById("ckState").focus();
		}
	if(result.slice(0,2) == "VL" || result.slice(0,2) == "vl"){
			document.getElementById("result").focus();
			requester = " Voicemail, left message to call back."
		}
	if(document.getElementById("basicResult").value == "NV" || document.getElementById("basicResult").value == "nv"){
			document.getElementById("result").value = "NO VOICEMAIL"
			document.getElementById("basicResult").value = "NO VM"
			document.getElementById("ckState").focus();
		}
	if(result.slice(0,2) == "NV" || result.slice(0,2) == "nv"){
			document.getElementById("result").focus();
			requester = " No voicemail."
		}
	if(document.getElementById("basicResult").value == "LT" || document.getElementById("basicResult").value == "lt"){
			document.getElementById("result").value = "LEFT MSG WITH THIRD PARTY TO HAVE AH CALL US BACK"
			document.getElementById("basicResult").value = "LM W/ TP"
			document.getElementById("ckState").focus();
		}
	if(result.slice(0,2) == "LT" || result.slice(0,2) == "lt"){
			document.getElementById("result").focus();
			requester = " Left a message with a third party to have the account holder call us back."
		}
	if(document.getElementById("basicResult").value == "RN" || document.getElementById("basicResult").value == "rn"){
			document.getElementById("result").value = "RING NO ANSWER"
			document.getElementById("basicResult").value = "RNA"
			document.getElementById("ckState").focus();
		}
	if(result.slice(0,2) == "RN" || result.slice(0,2) == "rn"){
			document.getElementById("result").focus();
			requester = " Phone rang but no one answered."
		}
	if(document.getElementById("basicResult").value == "FB" || document.getElementById("basicResult").value == "fb"){
			document.getElementById("result").value = "FAST BUSY"
			document.getElementById("basicResult").value = "FST BZ"
			document.getElementById("ckState").focus();
		}
	if(result.slice(0,2) == "FB" || result.slice(0,2) == "fb"){
			document.getElementById("result").focus();
			requester = " Fast busy tone."
		}
	if(document.getElementById("basicResult").value == "AF" || document.getElementById("basicResult").value == "af"){
			document.getElementById("result").value = goodNumberType + ": " + goodNumber + ", ALREADY FOUND AT: " + goodNumberTime
			document.getElementById("basicResult").value = goodNumberType + ": "+ goodNumber
			document.getElementById("ckState").focus();
		}
	if(result.slice(0,2) == "AF" || result.slice(0,2) == "af"){
			document.getElementById("result").focus();
			requester = goodNumberType + ": " + goodNumber + ", already found at: " + goodNumberTime
		}
	if(document.getElementById("basicResult").value == "SB" || document.getElementById("basicResult").value == "sb"){
			document.getElementById("result").value = "SLOW BUSY"
			document.getElementById("basicResult").value = "SLW BZ"
			document.getElementById("ckState").focus();
		}
	if(result.slice(0,2) == "SB" || result.slice(0,2) == "sb"){
			document.getElementById("result").focus();
			requester = " Slow busy tone."
		}
	if(document.getElementById("basicResult").value == "TP" || document.getElementById("basicResult").value == "tp"){
			document.getElementById("result").value = "THIRD PARTY SAYS THIS IS A WRONG #"
			document.getElementById("basicResult").value = "3P WRNG#"
			document.getElementById("ckState").focus();
		}
	if(result.slice(0,2) == "TP" || result.slice(0,2) == "tp"){
			document.getElementById("result").focus();
			requester = " Third party says this is a wrong number."
		}
		if(document.getElementById("basicResult").value == "TZ" || document.getElementById("basicResult").value == "tz"){
			document.getElementById("result").value = "CACS SHOWS TIME ZONE CONFLICT AT:  " + document.getElementById("time").innerText.slice(0, document.getElementById("time").innerText.length - 3) + " A.M., EST.";
			document.getElementById("basicResult").value = "TZ"
			document.getElementById("ckState").focus();
		}
	if(result.slice(0,2) == "TZ" || result.slice(0,2) == "tz"){
			document.getElementById("result").focus();
			requester = " Cacs shows a time zone conflict at: " + document.getElementById("time").innerText.slice(0, document.getElementById("time").innerText.length - 3) + " A.M., EST.";
		}
	if(document.getElementById("basicResult").value == "HU" || document.getElementById("basicResult").value == "hu"){
			document.getElementById("result").value = "PARTY ANSWERED AND HUNG UP"
			document.getElementById("basicResult").value = "PRTY HU"
			document.getElementById("ckState").focus();
		}
	if(result.slice(0,2) == "HU" || result.slice(0,2) == "hu"){
			document.getElementById("result").focus();
			requester = " Party hung up."
		}
	if(document.getElementById("basicResult").value == "PW" || document.getElementById("basicResult").value == "pw"){
			document.getElementById("result").value = "POSSIBLY A GOOD WORK NUMBER"
			document.getElementById("basicResult").value = "POS GD WRK#"
			document.getElementById("ckState").focus();
		}
	if(result.slice(0,2) == "PW" || result.slice(0,2) == "pw"){
			document.getElementById("result").focus();
			requester = " Possibly a good work number."
		}
	if(document.getElementById("basicResult").value == "VF" || document.getElementById("basicResult").value == "vf"){
			document.getElementById("result").value = "VOICEMAIL FULL"
			document.getElementById("basicResult").value = "vm full"
			document.getElementById("ckState").focus();
		}
	if(result.slice(0,2) == "VF" || result.slice(0,2) == "vf"){
			document.getElementById("result").focus();
			requester = " Voice-mail Full."
		}
	if(document.getElementById("basicResult").value == "PH" || document.getElementById("basicResult").value == "ph"){
			document.getElementById("result").value = "POSSIBLY A GOOD HOME NUMBER"
			document.getElementById("basicResult").value = "POS GD HP#"
			document.getElementById("ckState").focus();
		}
	if(result.slice(0,2) == "PH" || result.slice(0,2) == "ph"){
			document.getElementById("result").focus();
			requester = "Possibly a good home Number."
		}
	if(document.getElementById("basicResult").value == "PC" || document.getElementById("basicResult").value == "pc"){
			document.getElementById("result").value = "POSSIBLY A GOOD CELL NUMBER"
			document.getElementById("basicResult").value = "POS GD CP#"
			document.getElementById("ckState").focus();
		}
	if(result.slice(0,2) == "PC" || result.slice(0,2) == "pc"){
			document.getElementById("result").focus();
			requester = "Possibly a good cell Number."
		}
	if(result.slice(2,4) == "GW" || result.slice(2,4) == "gw"){
			document.getElementById("result").value = requester + " verified that this is a good Work phone number. " + transfered;
			document.getElementById("basicResult").value = "GD WRK#"
			document.getElementById("ckState").focus();
			goodNumber = document.getElementById("phone").value
			goodNumberType = document.getElementById("basicResult").value
			goodNumberTime = document.getElementById("time").innerText
		}

	if(result.slice(2,4) == "GH" || result.slice(2,4) == "gh"){
			document.getElementById("result").value = requester + " verified that this is a good Home phone number. " + transfered;
			document.getElementById("basicResult").value = "GD HP#"
			document.getElementById("ckState").focus();
			goodNumber = document.getElementById("phone").value
			goodNumberType = document.getElementById("basicResult").value
			goodNumberTime = document.getElementById("time").innerText
		}
	if(result.slice(2,4) == "GC" || result.slice(2,4) == "gc"){
			document.getElementById("result").value = requester + " verified that this is a good Cell phone number. " + transfered;
			document.getElementById("basicResult").value = "GD CP#"
			document.getElementById("ckState").focus();
			goodNumber = document.getElementById("phone").value
			goodNumberType = document.getElementById("basicResult").value
			goodNumberTime = document.getElementById("time").innerText
		}
		if(result.slice(2,4) == "NN" || result.slice(2,4) == "nn"){

			document.getElementById("result").value = requester + " A new address was not obtained from the call." ;
			document.getElementById("basicResult").value = "NO NEW ADDRESS"
			document.getElementById("ckState").focus();
			goodNumber = document.getElementById("phone").value
			goodNumberType = document.getElementById("basicResult").value
			goodNumberTime = document.getElementById("time").innerText
		}
		if(result.slice(2,4) == "NA" || result.slice(2,4) == "na"){
			var newAddress = result.slice(5);
			document.getElementById("result").value = requester + " A new address: (" + newAddress + ") was obtained from the call." ;
			document.getElementById("basicResult").value = "NEW ADDRESS"
			document.getElementById("ckState").focus();
			goodNumber = document.getElementById("phone").value
			goodNumberType = document.getElementById("basicResult").value
			goodNumberTime = document.getElementById("time").innerText
		}
	if(document.getElementById("basicResult").value == "F" || document.getElementById("basicResult").value == "f"){
			document.getElementById("result").value = "FAX MACHINE"
			document.getElementById("basicResult").value = "FX"
			document.getElementById("ckState").focus();
		}
	}
}
	function downloadReport(event){
		var x = event.keyCode;
		if(x==13){
		var resultsT = document.getElementById("multiBtn")
		var downloadT = document.getElementById("downloadTable")
		var phoneT = document.getElementById("phone")
		if(phoneT.value == "(RES)ULT-S"){
			document.getElementById("phone").focus();
			resultsT.click();
		}
		if(phoneT.value == "(DOW)NLO-AD"){
			document.getElementById("phone").focus();
			resultsT.click();
			downloadT.click()
		}
	}
}
var kStateChosen = ""
function  placeThisState(state){
	document.getElementById("kStateIndicator").innerHTML = state.innerHTML
	document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
	document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
	document.getElementById("aNumber").focus();
}

function kStateIndicatorPlacer(){
	kStateChooser()
}

function report(caller){
var aNumm = document.getElementById("aNumber")
	var downloadT = document.getElementById("downloadTable")

		if(caller.value == "DOWNLOAD" || caller.value == "download"){
			downloadTableBNL2()
			aNumm.value = "";
		}
		if(caller.value == "EMAIL" || caller.value == "email"){
			document.getElementById('email1').focus();
		}
	}
function report2(caller){

	var aNumm = document.getElementById("aNumber")
	var downloadT = document.getElementById("downloadTable")

		if(caller.value == "DOWNLOAD" || caller.value == "download"){
			downloadTableBNL2()
			aNumm.value = "";
		}
		if(caller.value == "EMAIL" || caller.value == "email"){
			document.getElementById('email1').focus();
		}
	}


	var autoChanging = (function(){
		if(data.data[phoneNumberCounter]["account"] != "DUP ACCOUNT"){
			var updater = data.data[phoneNumberCounter]["account"]
		}
		if(data.data[phoneNumberCounter]["account"] == "DUP ACCOUNT"){
			var updater = "----------"
		}
		return updater
	})


	function ckStateTransback2(event){
	var x = event.keyCode;
		if(x==13){
				eraseState()
				document.getElementById("ckState").select();
				document.getElementById("ckState").focus();
				document.getElementById("ckState").select();
			}
	}
	function basicResultTransback(event){
	var x = event.keyCode;
		if(x==67){
				document.getElementById("basicResult").focus();
			}
	}
	function removeFocus(){
				document.getElementById("basicResult").focus();
				document.getElementById("phone").focus();
	}
	function titlePlaceBNL(event){
	var x = event.keyCode;
		if(x==67){
				document.getElementById("resource").value = "BAD~#~LIST";
			}
	}
	function eraseState(){
		document.getElementById("resource").value = "";
	}
	function basicResultTransback2(event){
	var x = event.keyCode;
		if(x==13){
				document.getElementById("basicResult").focus();
			}
	}
	function ckStateTranback(event){
		var x = event.keyCode;
			if(x==13){
				checkForStates()
				document.getElementById("nkState").value = document.getElementById("ckState").value;
				document.getElementById("nkState").focus();
			}
	}
	function tranBack4(event){
		var x = event.keyCode;
			if(x==67){
				document.getElementById("phone").focus();
				document.getElementById("resource").value = document.getElementById("resourceDisplay").innerHTML
			}
		}
	function justWorkedChange(event){
	var x = event.keyCode;
	if(x == 67){
		document.getElementById("jW").value = document.getElementById("aNumber").value;
		}
	}
	var numnums = ""
	function storeNumber(number){
		var pasted = number.keyCode;
			if(pasted == 86){
				numnums = number.value
			}
		}
	function selectResource(event){
		var letter = event.keyCode
		if(letter == 65){
			document.getElementById("resource").value == "ACE"
			document.getElementById("resourceDisplay").value == "ACE"
			document.getElementById("phone").value == numnums
		}
		if(letter == 83){
			document.getElementById("resource").value == "ACCURINT~SEARCH"
			document.getElementById("resourceDisplay").value == "ACCURINT~SEARCH"
			document.getElementById("phone").value == numnums
		}
		if(letter == 77){
			document.getElementById("resource").value == "MORTGAGE~SERVE"
			document.getElementById("resourceDisplay").value == "MORTGAGE~SERVE"
			document.getElementById("phone").value == numnums
		}
		if(letter == 67){
			document.getElementById("resource").value == "CACS"
			document.getElementById("resourceDisplay").value == "CACS"
			document.getElementById("phone").value == numnums
		}
		if(letter == 68){
			document.getElementById("resource").value == "DNC"
			document.getElementById("resourceDisplay").value == "DNC"
			document.getElementById("phone").value == numnums
		}
	}
function searcher(event){
	var x = event.keyCode;
	if(x == 13){
			if((document.getElementById("phone").value == "SEARCH") || (document.getElementById("phone").value == "search")){
				document.getElementById("jW").focus();
				document.getElementById("phone").value = "";
			}
		}
	}
	function searcherPaste(event,incomingId){
	var x = event.keyCode;
	if(x == 86){
			document.getElementById("phone").value = "";
			search2(incomingId.id);
		}
	}

function changeFile(event){
	var x = event.keyCode;
	if(x == 13){
	if(document.getElementById("phone").value == "CHANGE FILE" || document.getElementById("phone").value == "change file"){
				document.getElementById("csv-file").click();
				document.getElementById("aNumber").focus();
			}
		}
	}


function tranBackFileSelector(event){
var x = event.keyCode;
	if(x==13){
	document.getElementById("csv-file").click();
	tranBackAnumber(event)
		}
	}

function tranBackAnumber(event){
var x = event.keyCode;
	if(x==13){
	document.getElementById("aNumber").focus();
		}
	}
	function tranBack2(event){
var x = event.keyCode;
	if(x==13){
	document.getElementById("aNumber").focus();
		}
	}
	function tranBack3(){

	document.getElementById("aNumber").focus();

	}
	function tranBack7(){

	document.getElementById("aNumber").focus();

	}
function resourceFocus(event){
	var x = event.keyCode;
	if(x==13){
		document.getElementById("input3").focus();
	}
}
function moveTask(event){
	var x = document.getElementById("result").value;
	var y = event.keyCode;

	if (y == 39){
	tasksC++
	if(tasksC == 5){
		tasksC = 0;
	}
	document.getElementById("resource").value = task[tasksC];
	document.getElementById("resourceDisplay").innerText = "SKIP RESOURCE: "+task[tasksC];
	placeGeneralInformation()
}
	if (y == 37){
	tasksC--
	if(tasksC == -1){
		tasksC = 4;
	}
	document.getElementById("resource").value = task[tasksC];
	document.getElementById("resourceDisplay").innerText = "SKIP RESOURCE: "+task[tasksC];
	placeGeneralInformation()
}

	if (y == 40){
	tasksV--
	if(tasksV == -1){
		tasksV = 4;
	}
	document.getElementById("resource").value = verticalTask[tasksV];
	document.getElementById("resourceDisplay").innerText = "SKIP RESOURCE: "+verticalTask[tasksV];
	placeGeneralInformation()
}

if (y == 38){
	tasksV++
	if(tasksV == 4){
		tasksV = 0;
	}
	document.getElementById("resource").value = verticalTask[tasksV];
	document.getElementById("resourceDisplay").innerText = "SKIP RESOURCE: "+verticalTask[tasksV];
	placeGeneralInformation()
}
}


function resourceDisp(event){
	document.getElementById("resourceDisplay").innerText = "SKIP RESOURCE: "+document.getElementById("resource").value
}
/*function dnc(event){
	x = event.keyCode;
	y = document.getElementById("phone").value;
	z = document.getElementById("resource").value
	if(x == 13){
		if(z == "DNC"){
		dNc.push(y);
		}
	}
}
/*function getfocus(event) {
	x = event.keyCode;
if(x == 13){
	if(document.getElementById("resource").innerHTML == "ACCURINT SEARCH"){
    document.getElementById("ACCURINT SEARCH").focus();
}
}
}*/
function eraseNote(event){
	x = event.keyCode;
	if (x == 13){
	document.getElementById("result").value = "";
	}
}
function erasePhone(event){
	x = event.keyCode;
	if (x == 13 && document.getElementById("jobName").innerHTML
	!= "SKIP MANUAL DIAL"){
	document.getElementById("phone").value = "";
	}
}
function erase(){
	document.getElementById("phone").value = "";
	document.getElementById("result").value = "";
}
/*function duplicateCheck(event){
	var x = event.keyCode;
	var phoneCheck = document.getElementById("phone").value;
	var phoneBad = document.getElementById("phone").innerHTML;
if(x == 13){
	if(document.getElementById("resource").value == "# LIST"){
	if(phoneCheck == na[0]){
		alert("DUPLICATE #: "+na[0])
		document.getElementById("phone").value = "("+phoneCheck+")";
}
	if(phoneCheck == na[1]){
		alert("DUPLICATE #: "+na[1])
		document.getElementById("phone").value = "("+phoneCheck+")";
}
	if(phoneCheck == na[2]){
		alert("DUPLICATE #: "+na[2])
		document.getElementById("phone").value = "("+phoneCheck+")";
}
	if(phoneCheck == na[3]){
		alert("DUPLICATE #: "+na[3])
		document.getElementById("phone").value = "("+phoneCheck+")";
}
	if(phoneCheck == na[4]){
		alert("DUPLICATE #: "+na[4])
		document.getElementById("phone").value = "("+phoneCheck+")";
}
	if(phoneCheck == na[5]){
		alert("DUPLICATE #: "+na[5])
		document.getElementById("phone").value = "("+phoneCheck+")";
}
	if(phoneCheck == na[6]){
		alert("DUPLICATE #: "+na[6])
		document.getElementById("phone").value = "("+phoneCheck+")";
}
	if(phoneCheck == na[7]){
		alert("DUPLICATE #: "+na[7])
		document.getElementById("phone").value = "("+phoneCheck+")";
}
	if(phoneCheck == na[8]){
		alert("DUPLICATE #: "+na[8])
		document.getElementById("phone").value = "("+phoneCheck+")";
}
	if(phoneCheck == na[9]){
		alert("DUPLICATE #: "+na[9])
		document.getElementById("phone").value = "("+phoneCheck+")";
}
}
}
}*/
/*function dncCheck(event){
var x = event.keyCode;
var phoneCheck = document.getElementById("phone").value;
var phoneBad = document.getElementById("phone").innerHTML;
if(x == 13){
	if(document.getElementById("resource").value != "DNC"){
	for (i = 0; i < dNc.length; i++) {
	if (phoneCheck == dNc[i]){
		alert("WARNING DNC #: "+ phoneCheck)
		document.getElementById("phone").value = "*" + phoneCheck + "*"
 }
}
}
}
}*/

function hn(){
	var date = document.getElementById("datePlace").innerHTML;
	document.getElementById("jobName").innerHTML = date;
}
/*function resourceInsert(){
var cr = document.getElementById("resource").value;
var package = oldResource;
if(oldResource != cr){
array.unshift(package)
}

}*/
function searches(bc){
	if (bc.innerHTML == "PAS"){
	document.getElementById("resource").value = "PREV. ACCURINT SEARCH";
}
	if (bc.innerHTML == "AS"){
	document.getElementById("resource").value = "ACCURINT SEARCH";
}
	if (bc.innerHTML == "DNC"){
	document.getElementById("resource").value = "DNC";
}
	if (bc.innerHTML == "# LIST"){
	document.getElementById("resource").value = "# LIST";
}
}



function cycle1(){
	document.getElementById("phone").value = na[0];
	document.getElementById("result").innerHTML = "";
	c++
	document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+"1"+"/"+o+")";
	singNum++
}
/*function cycle(event){
var x = event.keyCode;
      if(document.getElementById("resource").value == "ACCURINT SEARCH"){
	if(x == 13){
	document.getElementById("phone").value = na[c];
	c++
	singNum++
	}
	if(c > na.length){
	alert("END OF LIST")
	c = 0;
	}
	}
}*/
function changeResource(event){
	var date = document.getElementById("datePlace").innerHTML;
	var x = event.keyCode;
	var res = document.getElementById("resource").value;
	var uid = document.getElementById("uid").innerHTML;
	var jobName = document.getElementById("jobName").innerHTML;
	var phone = document.getElementById("phone").value;
	var result = document.getElementById("result").value;
	var details = "" + phone + ": "+ result + "/";
if (x == 13){
	      if(chk == 0 || r1 == res){
		   aa1.push(details);
			document.getElementById("a1").value = jobName + "  " + res + ": " + aa1 + "/" + uid;
			document.getElementById("first").innerHTML = res;

			if(res != r1){
			chk++
			r1 = res
			oldResource = res
			}
			if(res == "ACCURINT SEARCH"){
				document.getElementById("jobName").innerHTML = "SKIP MANUAL DIAL:";
				hh.push(aa1);
				document.getElementById("a8").value = date + ": ACCURINT SEARCH: " + hh + "/ " + uid;
				document.getElementById("eighth").innerHTML = "HOT NOTE";
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
				aa1 = [];
			}
			if(res == "PREV. ACCURINT SEARCH"){
				document.getElementById("jobName").innerHTML = "SKIP MANUAL DIAL:";
				hh.push(aa1);
				document.getElementById("a8").value = date + ": PREV. ACCURINT SEARCH: " + hh + "/ " + uid;
				document.getElementById("eighth").innerHTML = "HOT NOTE";
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
				aa1 = [];
			}
			if(res == "# LIST"){
				na.push(phone)
				o++
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
			}


		}else if(chk == 1 || res == r2){
		   bb.push(details);
			document.getElementById("a2").value = jobName + "  " + res + ": " + bb + "/" + uid;
			document.getElementById("second").innerHTML = res;
		if(res != r2){
			chk++
			r2 = res
			oldResource = res
			}
			if(res == "ACCURINT SEARCH"){
				document.getElementById("jobName").innerHTML = "SKIP MANUAL DIAL:";
				hh.push(bb);
				document.getElementById("a8").value = date + ": ACCURINT SEARCH: " + hh + "/ " + uid;
				document.getElementById("eighth").innerHTML = "HOT NOTE";
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
				bb = [];
			}
			if(res == "PREV. ACCURINT SEARCH"){
				document.getElementById("jobName").innerHTML = "SKIP MANUAL DIAL:";
				hh.push(bb);
				document.getElementById("a8").value = date + ": PREV. ACCURINT SEARCH: " + hh + "/ " + uid;
				document.getElementById("eighth").innerHTML = "HOT NOTE";
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
				bb = [];
			}
			if(res == "# LIST"){
				na.push(phone)
				o++
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
			}

	}else if(chk == 2 || res == r3){
		   cc.push(details);
			document.getElementById("a3").value = jobName + "  " + res + ": " + cc + "/" + uid;
			document.getElementById("third").innerHTML = res;
		if(res != r3){
			chk++
			r3 = res
			oldResource = res
			}
			if(res == "ACCURINT SEARCH"){
				document.getElementById("jobName").innerHTML = "SKIP MANUAL DIAL:";
				hh.push(cc);
				document.getElementById("a8").value = date + ": ACCURINT SEARCH: " + hh + "/ " + uid;
				document.getElementById("eighth").innerHTML = "HOT NOTE";
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";

				cc = [];
			}
			if(res == "PREV. ACCURINT SEARCH"){
				document.getElementById("jobName").innerHTML = "SKIP MANUAL DIAL:";
				hh.push(cc);
				document.getElementById("a8").value = date + ": ACCURINT SEARCH: " + hh + "/ " + uid;
				document.getElementById("eighth").innerHTML = "HOT NOTE";
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
				cc = [];
			}
			if(res == "# LIST"){
				na.push(phone)
				o++
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
			}

	}else if(chk == 3 || res == r4){
		   dd.push(details);
			document.getElementById("a4").value = jobName + "  " + res + ": " + dd + "/" + uid;
			document.getElementById("fourth").innerHTML = res;
		if(res != r4){
			chk++
			r4 = res
			oldResource = res
			}
			if(res == "ACCURINT SEARCH"){
				document.getElementById("jobName").innerHTML = "SKIP MANUAL DIAL:";
				hh.push(dd);
				document.getElementById("a8").value = date + ": ACCURINT SEARCH: " + hh + "/ " + uid;
				document.getElementById("eighth").innerHTML = "HOT NOTE";
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
				dd = [];
			}
			if(res == "PREV. ACCURINT SEARCH"){
				document.getElementById("jobName").innerHTML = "SKIP MANUAL DIAL:";
				hh.push(dd);
				document.getElementById("a8").value = date + ": PREV. ACCURINT SEARCH: " + hh + "/ " + uid;
				document.getElementById("eighth").innerHTML = "HOT NOTE";
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
				dd = [];
			}
			if(res == "# LIST"){
				na.push(phone)
				o++
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
			}

	}else if(chk == 4 || res == r5){
		   ee.push(details);
			document.getElementById("a5").value = jobName + "  " + res + ": " + ee + "/" + uid;
			document.getElementById("fifth").innerHTML = res;
		if(res != r5){
			chk++
			r5 = res
			oldResource = res
			}
			if(res == "ACCURINT SEARCH"){
				document.getElementById("jobName").innerHTML = "SKIP MANUAL DIAL:";
				hh.push(ee);
				document.getElementById("a8").value = date + ": ACCURINT SEARCH: " + hh + "/ " + uid;
				document.getElementById("eighth").innerHTML = "HOT NOTE";
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
				ee = [];
			}
			if(res == "PREV. ACCURINT SEARCH"){
				document.getElementById("jobName").innerHTML = "SKIP MANUAL DIAL:";
				hh.push(ee);
				document.getElementById("a8").value = date + ":PREV. ACCURINT SEARCH: " + hh + "/ " + uid;
				document.getElementById("eighth").innerHTML = "HOT NOTE";
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
				ee = [];
			}
			if(res == "# LIST"){
				na.push(phone)
				o++
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
			}

	}else if(chk == 5 || res == r6){
		   ff.push(details);
			document.getElementById("a6").value = jobName + "  " + res + ": " + ff + "/" + uid;
			document.getElementById("sixth").innerHTML = res;
		if(res != r6){
			chk++
			r6 = res
			oldResource = res
			}
			if(res == "ACCURINT SEARCH"){
				document.getElementById("jobName").innerHTML = "SKIP MANUAL DIAL:";
				hh.push(ff);
				document.getElementById("a8").value = date + ": ACCURINT SEARCH: " + hh + "/ " + uid;
				document.getElementById("eighth").innerHTML = "HOT NOTE";
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
				ff = [];
			}
			if(res == "PREV. ACCURINT SEARCH"){
				document.getElementById("jobName").innerHTML = "SKIP MANUAL DIAL:";
				hh.push(ff);
				document.getElementById("a8").value = date + ": PREV. ACCURINT SEARCH: " + hh + "/ " + uid;
				document.getElementById("eighth").innerHTML = "HOT NOTE";
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
				ff = [];
			}
			if(res == "# LIST"){
				na.push(phone)
				o++
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
			}

	}else if(chk == 6 || res == r7){
		   gg.push(details);
			document.getElementById("a7").value = jobName + "  " + res + ": " + gg + "/" + uid;
			document.getElementById("seventh").innerHTML = res;
		if(res != r7){
			chk++
			r7 = res
			oldResource = res
			}
			if(res == "ACCURINT SEARCH"){
				document.getElementById("jobName").innerHTML = "SKIP MANUAL DIAL:";
				hh.push(gg);
				document.getElementById("a8").value = date + ": ACCURINT SEARCH: " + hh + "/ " + uid;
				document.getElementById("eighth").innerHTML = "HOT NOTE";
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
				gg = [];
			}
			if(res == "PREV. ACCURINT SEARCH"){
				document.getElementById("jobName").innerHTML = "SKIP MANUAL DIAL:";
				hh.push(gg);
				document.getElementById("a8").value = date + ": ACCURINT SEARCH: " + hh + "/ " + uid;
				document.getElementById("eighth").innerHTML = "HOT NOTE";
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
				gg = [];
			}
			if(res == "# LIST"){
				na.push(phone)
				o++
				document.getElementById("tot").innerHTML = "TOTAL #S FOUND("+singNum+"/"+o+")";
			}

		}
	}
}
function uidCheck(){
	var a = document.getElementById("uid").innerHTML;
	var b = document.getElementById("phone");
	var c = document.getElementById("result");
	if (a.length == 0){
	alert("must enter value in UID field")
	b.value = ""
	c.value = ""
}
}
function uidLength(b){
	var a = document.getElementById("uid").innerHTML;
	if(a.length < 7){
	alert("must enter a valid UID")
	b.value = ""
	c.value = ""
}
}

function contactF(){
	rate++
	document.getElementById("contacted").innerHTML = "TOTAL CONTACTED" + "(" + rate + ")";
}
function destrDrop(){
	var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
}

function key(event) {
    var x = event.keyCode;
    if (x == 13) {
       check();
    }
}
function key1(event) {
    var x = event.keyCode;
    if (x == 13) {
       uid();
    }
}
function key2(event) {
    var x = event.keyCode;
    if (x == 13) {
       date();
    }
}
/*function key3(event) {
	var aNumberR = document.getElementById("aNumber");
	var reso = document.getElementById("resource");
    var x = event.keyCode;
	if(x==13){
		       document.getElementById("reset2").focus()
}
}*/


function date(){
var x = document.getElementById("date").value;
document.getElementById("datePlace").innerHTML = x;
}
function uid(event){
var y = event.keyCode;
if(y==13){
var x = document.getElementById("uidInput").value;
document.getElementById("uid").innerHTML = x;
document.getElementById("uidInput").value = "";
}
}
function del(){
a = document.getElementById("jobName").innerHTML = "";
}
function mlap(){
document.getElementById("jobName").innerHTML = "MORTGAGE LOAN ACTIVITY REPORT: MANUAL DIAL"
}
function as(){
document.getElementById("jobName").innerHTML = "ACCURINT SEARCH:"
}
function smd(){
document.getElementById("jobName").innerHTML = "SKIP MANUAL DIAL:"
}
function cstt(){
document.getElementById("jobName").innerHTML = "SKIP TRACE:"
}
function check(event){
var x = document.getElementById("phone").value;
var y = x.length;
var z = event.keyCode;
if (z == 13){
if (y > 0){
    	myFunction();
    }else if(y == 0){
    	alert("nothing entered")
    }
}
}

function myFunction() {
var x = document.getElementById("phone").value;
var y = x.length;
var z = 0;
var a = document.getElementById("result").value;
var r = document.getElementById("resource").value;
	var node = document.createElement("LI");
    var textnode = document.createTextNode("/" + r + ": " + x + ": " + a + "/");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

}
function reset(){
	singNum = 1;
	c = 0;
	dNc = [];

	var dateP = document.getElementById("datePlace").innerHTML;
	var dateD = document.getElementById("dateDiv").innerHTML;
	var jobName = document.getElementById("jobName").innerHTML;
	document.getElementById("myList").innerHTML = "";
	document.getElementById("aNumber").value = "";
	document.getElementById("ckState").value = "";
	document.getElementById("nkState").value = "";
	document.getElementById("nKs").innerHTML = "";
	document.getElementById("curKs").innerHTML = "";
	document.getElementById("input").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("result").value = "";
	document.getElementById("uidInput").value = "";

	document.getElementById("a1").value = "";
	document.getElementById("a2").value = "";
	document.getElementById("a3").value = "";
	document.getElementById("a4").value = "";
	document.getElementById("a5").value = "";
	document.getElementById("a6").value = "";
	document.getElementById("a7").value = "";
	document.getElementById("a8").value = "";
	document.getElementById("first").innerHTML = "";
	document.getElementById("second").innerHTML = "";
	document.getElementById("third").innerHTML = "";
	document.getElementById("fourth").innerHTML = "";
	document.getElementById("fifth").innerHTML = "";
	document.getElementById("sixth").innerHTML = "";
	document.getElementById("seventh").innerHTML = "";
	document.getElementById("eighth").innerHTML = "";
	document.getElementById("tot").innerHTML = "TOTAL #S FOUND(0)";
	aa1 = [];
	bb = [];
	cc = [];
	dd = [];
	ee = [];
	ff = [];
	gg = [];
	hh = [];
	na = [];
	c = 0;
	r1 = "";
	r2 = "";
	r3 = "";
	r4 = "";
	r5 = "";
	r6 = "";
	r7 = "";
	chk = 0;
	o = 0;
	array = [];
	if (jobName == "MORTGAGE LOAN ACTIVITY REPORT:"){
	_mlar++
	document.getElementById("mlar").innerHTML = "MORTGAGE LOAN ACTIVITY REPORT" + "("+ _mlar+")";

}else if (jobName == "ACCURINT SEARCH:"){
	_as++
	document.getElementById("as").innerHTML = "as" + "("+ _as+")";
	document.getElementById("as1").innerHTML = "ACCURINT SEARCH" + "("+ _as+")";

}else if (jobName == "SKIP MANUAL DIAL:"){
	_smd++
	document.getElementById("smd").innerHTML = "SKIP MANUAL DIAL" + "("+ _smd+")";

}else if (jobName == "SKIP TRACE:"){
	_cstt++
	document.getElementById("cstt").innerHTML = "SKIP TRACE" + "("+ _cstt+")";
}else if (jobName == dateD || document.getElementById("eight").innerHTML == "HOT NOTE"){
	_hn++
	document.getElementById("hn").innerHTML = "HOT NOTES" + "("+ _hn+")";
}
	z++;
	    print(z)

}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction2() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function placeName(x){
	var y = x.innerHTML;
    var z = document.getElementById("result");
    z.value = y;
}
var array = [];
function addArray(event){
	/*resourceInsert();*/
	var x = event.keyCode;
	var z = event.value;
	var jobTitle = document.getElementById("jobName").innerHTML;

	var uid = document.getElementById("uid").innerHTML;
	var date = document.getElementById("datePlace").innerHTML;
	var phone = document.getElementById("phone").value;
	var result = document.getElementById("result").value;
	var resource = document.getElementById("resource").value + ": ";
	var note = pushed + phone + ": " + result;

		if ((x == 13) && (jobTitle != "HOT NOTES")){
	array.unshift(note);
	document.getElementById("input").value = jobTitle + " " + "/" + (resource + array) + "/" + " " + uid;
}
}
function delArray(){
	var x = event.keyCode;
	if (x == 17){
	array.pop();
}
}
function print(z){
	document.getElementById("accountsWorked").innerHTML = "TOTAL RESETS(" + z + ")";
}


function generalPlacementLogic(event, dncVar, dupVar, newNumVar, dncVarStore){
var separateAcc = {"phone":"","resource":"","accountNumber":"","kState":"","bResult":"","result":"","time":"","newNum":"","newNumPercentTotal":""}
	var x = event.keyCode;
		if(x == 13){
			if((dncVar == false) && (dupVar == false) && (newNumVar == false) && (dncVarStore == false)){
						if(input2Resource.value == "ACCURINT~SEARCH"){
						separateAcc.accountNumber = input2AccNum.value
						separateAcc.kState = input2State.value
						separateAcc.phone = input2Phone.value
						separateAcc.resource = input2Resource.value
						separateAcc.time = time.innerText
						separateAcc.newNum = "NO"
						totalNumFoundCounter++
						separateAcc.newNumPercentTotal = newNumFoundCounter + " | " + totalNumFoundCounter
							separateAccounts.separate.push(separateAcc)
						}
						if(input2Resource.value != "ACCURINT~SEARCH"){
						separateAcc.phone = input2Phone.value
						separateAcc.resource = input2Resource.value
						separateAcc.newNum = "NO"
						separateAcc.time = time.innerText
						separateAccounts3.separateGeneral.push(separateAcc)
						totalNumFoundCounter++
						}
					}
				}
			}



var phoneNumberCounter = 0
function useTodaysWork1(){
	phoner = document.getElementById("phone")
	aNumberer = document.getElementById("aNumber")
	kStater = document.getElementById("ckState")
	resulter = document.getElementById("result")
	/*phoner.value = data.data[phoneNumberCounter].phoneNumber;*/
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
	aNumberer.value = data.data[phoneNumberCounter]["Acct Num"];
	}
	document.getElementById("nkState").value = "";
	document.getElementById("basicResult").value = "";
	document.getElementById("input3").value = ""
	document.getElementById("result").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("resource").value = ""
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
	if(typeof data.data[phoneNumberCounter]["CACS State"] !== "undefined"){
		kStater.value = data.data[phoneNumberCounter]["CACS State"];
	}
	}
		checkForStates()
	document.getElementById("phone").setAttribute("onkeydown", "report(this);endChecker(event);callEmailer(event);changeFile(event);searcher(event);input3Note(event);next(event);applyKState(event);changeColor(event);compareAreaCodes(event); moveTask(event); changeResource(event); uidCheck(); uidLength(this);goBack(event);")
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
	document.getElementById("tot").innerHTML = "ACCOUNT: " + phoneNumberCounter + "   OF  " + data.data.length;
	}
	worked = 0
	goodNumber = 0
	goodNumberType = ""
	goodNumberTime = ""
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
	}
function useTodaysWork(event){
	if(document.getElementById("jobName").innerHTML
	!= "SKIP MANUAL DIAL"){
	phoner = document.getElementById("phone")
	aNumberer = document.getElementById("aNumber")
	resulter = document.getElementById("result")



	var x = event.keyCode;
	if (x == 13){
			/*phoner.value = data.data[phoneNumberCounter].phoneNumber;*/
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
			aNumberer.value = data.data[phoneNumberCounter]["Acct Num"];
			}
			document.getElementById("nkState").value = "";
			document.getElementById("basicResult").value = "";
			document.getElementById("resource").value = "";
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
			kStater.value = data.data[phoneNumberCounter]["CACS State"];
			}
			checkForStates()
		phoneNumberCounter++
		compareAreaCodes(event);
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
		if(phoneNumberCounter == data.data.length){
		phoneNumberCounter = 0
		checkTable()
		}
	}
	}
	}
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
}





function useTodaysWork12(){
	enderTime();
	phoner = document.getElementById("phone")
	aNumberer = document.getElementById("aNumber")
	kStater = document.getElementById("ckState")
	resulter = document.getElementById("result")
	/*phoner.value = data.data[phoneNumberCounter].phoneNumber;*/
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
	aNumberer.value = data.data[phoneNumberCounter]["LOAN NBR"];
	}
	document.getElementById("nkState").value = "";
	document.getElementById("basicResult").value = "";
	document.getElementById("input3").value = ""
	document.getElementById("result").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("resource").value = ""
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
	if(typeof data.data[phoneNumberCounter]["CACS State"] !== "undefined"){
		kStater.value = data.data[phoneNumberCounter]["CACS State"];
	}
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
	}
		checkForStates()
	document.getElementById("phone").setAttribute("onkeydown", "report(this);endChecker(event);callEmailer(event);changeFile(event);searcher(event);input3Note(event);next(event);applyKState(event);changeColor(event);compareAreaCodes(event); moveTask(event); changeResource(event); uidCheck(); uidLength(this);goBack(event);")
	document.getElementById("tot").innerHTML = "ACCOUNT: " + autoChanging() + ": " + phoneNumberCounter + "   OF  " + data.data.length;
	worked = 0
	starterTime();
	goodNumber = 0
	goodNumberType = ""
	goodNumberTime = ""
	}
function useTodaysWork2(event){
	if(document.getElementById("jobName").innerHTML
	!= "SKIP MANUAL DIAL"){
	phoner = document.getElementById("phone")
	aNumberer = document.getElementById("aNumber")
	resulter = document.getElementById("result")



	var x = event.keyCode;
	if (x == 13){
			/*phoner.value = data.data[phoneNumberCounter].phoneNumber;*/
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
			aNumberer.value = data.data[phoneNumberCounter]["LOAN NBR"];
			}
			document.getElementById("nkState").value = "";
			document.getElementById("basicResult").value = "";
			document.getElementById("resource").value = "";
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
			kStater.value = data.data[phoneNumberCounter]["CACS State"];
			}
			checkForStates()
		phoneNumberCounter++
		compareAreaCodes(event);
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
		if(phoneNumberCounter == data.data.length){
		phoneNumberCounter = 0
		checkTable()
		}
		}
	}
	}
}






var phone = document.getElementById("phone");
var basicResult = document.getElementById("basicResult");
var uidd = document.getElementById("uid");
var cdat = document.getElementById("currentDate");
var resource = document.getElementById("resource");
var accountNumber = document.getElementById("aNumber");
var time = document.getElementById("time");
var cckState = document.getElementById("curKs");
var nnkState = document.getElementById("nKs");
var ksChange = document.getElementById("changeyn");
var percentageOfChange = document.getElementById("poc");
var newNum = document.getElementById("newNum");
var nnPerTot = document.getElementById("newNumPercent");
var jsonOb = {"pr":[]};
function phRe(event){
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
	var x = event.keyCode;
    	if(x == 13){
        	var jsonIns = {"time":"","phone":"", "basicResult":"", "date":"","uid":"","resource":"","accountNumber":"","ckState":"","nkState":"","ksChange":"","percentageOfChange":"","newNum":"","newNumPercentTotal":""};
            jsonIns.time = time.innerHTML;
			jsonIns.accountNumber = accountNumber.value;
			jsonIns.phone = phone.value;
            jsonIns.basicResult = basicResult.value;
			jsonIns.date = month + "/" + day;
            jsonIns.uid = uidd.innerHTML;
			jsonIns.resource = resource.value;
			jsonIns.ckState = cckState.innerHTML;
			jsonIns.nkState = nnkState.innerHTML;
			jsonIns.ksChange = ksChange.innerHTML;
			jsonIns.percentageOfChange = percentageOfChange.innerHTML;
			jsonIns.newNum = newNum.innerHTML
			jsonIns.newNumPercentTotal = newNumFoundCounter + " | " + totalNumFoundCounter
			jsonOb.pr.push(jsonIns);
        }
}

function phRePhone(event){
var x = event.keyCode;
    	if(x == 13){
	var jsonIns2 = {"phone":"","resource":"","accountNumber":"","ckState":""};
	jsonIns2.accountNumber = accountNumber.value;
	jsonIns2.phone = phone.value;
	jsonIns2.resource = resource.value;
	jsonIns2.ckState = cckState.innerHTML;
	jsonOb.prPh.push(jsonIns2);
	}
}


  function chngAcc3(event){
	var aNum = document.getElementById("aNumber");
	var kS = document.getElementById("ckState");
	var bR = document.getElementById("basicResult");
	var r = document.getElementById("result");
	var re = document.getElementById("resource");
	var phph = document.getElementById("phone");
	var kS2 = document.getElementById("nkState");
	var y = event.keyCode;


if (y == 37){
	phoneNumberCounter--
	aNum.value = ""
	kS.value = ""
	if(phoneNumberCounter == -1){
		phoneNumberCounter = (data.data.length-1);
	}
	aNum.value = data.data[phoneNumberCounter]["account"];
	phph.value = data.data[phoneNumberCounter]["OV Phone"];
	compareAreaCodes(event);
	document.getElementById("tot").innerHTML = "ACCOUNT: " + autoChanging() + ": " + (phoneNumberCounter+1) + "   OF  " + data.data.length;
	showAccount(aNum);
	goodNumber = 0
	goodNumberType = ""
	goodNumberTime = ""
}




	if (y == 39){
	phoneNumberCounter++
	aNum.value = ""
	kS.value = ""
	bR.value = ""
	r.value = ""
	re.value = ""
	phph.value = ""
	kS2.value = ""
	if(phoneNumberCounter == data.data.length){
		phoneNumberCounter = 0;
	}
aNum.value = data.data[phoneNumberCounter]["account"];
phph.value = data.data[phoneNumberCounter]["OV Phone"];
compareAreaCodes(event);
	document.getElementById("tot").innerHTML = "ACCOUNT: " + autoChanging() + ": " + (phoneNumberCounter+1) + "   OF  " + data.data.length;
	showAccount(aNum);
	goodNumber = 0
	goodNumberType = ""
	goodNumberTime = ""
}

placeGeneralInformation()

}

var allGlobalAccounts = {aGa:[]};
var separateAccounts = {separate:[]};
var separateAccounts2 = {separateDNC:[{"phone":"-","resource":"-","accountNumber":"-","kState":"-","bResult":"-","result":"-","time":"-","newNum":"-","newNumPercentTotal":"-"}]};
var separateAccounts3 = {separateGeneral:[{"phone":"-","resource":"-","accountNumber":"-","kState":"-","bResult":"-","result":"-","time":"-","newNum":"-","newNumPercentTotal":"-"}]};
var storedResource = "";
var fullNote = document.getElementById("input3")
var input2PhoneArr = [];
var time = document.getElementById("time")
var newNumFoundCounter = 0
var totalNumFoundCounter = 0
var numbersFound = 0
var onNumber = 0
	var input2Resource = document.getElementById("resource");
	var input2Phone = document.getElementById("phone");
	var input2State = document.getElementById("ckState");
	var input2AccNum = document.getElementById("aNumber");
	var input2NoteSpace = document.getElementById("input3");
	var bResult = document.getElementById("basicResult");
	var resulting = document.getElementById("result");
	var newN = document.getElementById("newNum");
	var nnp = document.getElementById("newNumPercent");

		var dncVar = false
		var dupVar = false
		var newNumVar = false
		var dncVarStore = false




function input3Note(event){
	var accurintCounter = 0

	var x = event.keyCode;
		if(x==13){
		toFormat()
		dncStore(event)
		dncLogicCheck(event)
		dupLogic(event)
		newNumLogic(event)

		generalPlacementLogic(event, dncVar, dupVar, newNumVar, dncVarStore)
		nnp.innerText = ((newNumFoundCounter/totalNumFoundCounter) * 100).toFixed(2) + "%" + "  |NEW:  " + newNumFoundCounter+"  |TOT.:  "+totalNumFoundCounter;
		 dncVar = false
		 dupVar = false
		 newNumVar = false
		 dncVarStore = false
		 phRe(event)
		 changingAccounts(event);

		input2PhoneArr.push(input2Phone.value)
		input2NoteSpace.value = input2Resource.value + ": " + input2PhoneArr + "/"
		numbersFound++
		input2Phone.value = "";

		}
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
	}
function changingAccounts(event){
	var x = event.keyCode;
	if(x==13){
	rsrc = document.getElementById("resource");
	if(storedResource != rsrc.value){
		fullNote.innerHTML = "";
		input2PhoneArr = [];
		allGlobalAccounts.aGa.unshift(fullNote.value);
		storedResource = rsrc.value;
		}
	}
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
}
var savedNumbers = "";
function next(event){
var x = event.keyCode;
var separateAccEnsure = {"phone":"","resource":"","accountNumber":"","kState":"","bResult":"","result":"","time":"","newNum":"","newNumPercentTotal":""}
var hotNotin = document.getElementById("a8");
	if(x==191){
	document.getElementById("resource").value = "ACCURINT~SEARCH"
	document.getElementById("phone").value = "NO NEW NUMBERS"
	separateAccEnsure.resource = document.getElementById("resource").value
	separateAccEnsure.phone = document.getElementById("phone").value
	separateAccEnsure.accountNumber = document.getElementById("aNumber").value
	separateAccounts.separate.push(separateAccEnsure)
	hotNotin.focus();
	allGlobalAccounts.aGa.unshift(fullNote.value);
	for(i=0;i<allGlobalAccounts.aGa.length;i++){
	 savedNumbers += allGlobalAccounts.aGa[i];
	}
	hotNotin.value = document.getElementById("datePlace").innerHTML + ": " + savedNumbers + "/" + document.getElementById("uid").innerHTML + " ";
	}
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
}

function endChecker(event){
var ht = event.keyCode;
if(ht == 13){
	if(document.getElementById("phone").value == "NO NEW NUMBERS"){
		input2NoteSpace.value = "HIT C KEY"
			input2NoteSpace.focus();
		}
	}
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
}



















function alphaCheck(boo){
var alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
for (alphaChecker=0;alphaChecker<alpha.length;alphaChecker++){
		if(document.getElementById("phone").value == alpha[alphaChecker]){
			return true;
		}
	}
}



var worked = 0;
function readyToCall(event){
	var input2State2 = document.getElementById("nkState");
var x = event.keyCode;
	if(x==67){
	if(typeof separateAccounts.separate[1] === 'undefined'){
			phoneNumberCounter++
			useTodaysWork1()
			document.getElementById("aNumber").focus();
			}
	if(separateAccounts.separate.length > 1){
		document.getElementById("a8").value = "";
		input2State2.value = ""
		document.getElementById("phone").focus();
		document.getElementById("jobName").innerHTML = "SKIP MANUAL DIAL"
		aNum = document.getElementById("aNumber")
		pphh = document.getElementById("phone")
		resour = document.getElementById("resource")
		cckkss = document.getElementById("ckState")
		nnp = document.getElementById("newNumPercent");
		nnn = document.getElementById("newNum")
			pphh.value = separateAccounts.separate[worked+1].phone
			resour.value = separateAccounts.separate[worked+1].resource
			aNum.value = separateAccounts.separate[worked+1].accountNumber
			cckkss.value = separateAccounts.separate[worked+1].kState
			bResult.value = separateAccounts.separate[worked+1].bResult
			result.value = separateAccounts.separate[worked+1].result
			nnn.innerHTML = separateAccounts.separate[worked+1].newNum
			nnp.innerText = separateAccounts.separate[worked+1].newNumPercentTotal
			checkInformation(event)
			compareAreaCodes(event)
			worked++
			onNumber++
			document.getElementById("phone").focus();
			document.getElementById("phone").setAttribute("onkeydown", "basicResultTransback2(event);applyKState(event);changeColor(event);compareAreaCodes(event); moveTask(event); changeResource(event); uidCheck(); uidLength(this);")
			}
			if(worked == separateAccounts.separate.length){

			document.getElementById("jobName").innerHTML = "SKIP MANUAL DIAL~"
			allGlobalAccounts.aGa = [];
			storedResource = "";
			fullNote.innerHTML = "";
			input2PhoneArr = [];
			separateAccounts.separate = ["a"];
			savedNumbers = "";
			phoneNumberCounter++
		}
	}
	compareAreaCodes(event)
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
}
var worked = 0;
/*function changeJob(event){

	var x = event.keyCode;
	if(x==13 && document.getElementById("jobName").innerHTML == "SKIP MANUAL DIAL"){
		aNum = document.getElementById("aNumber")
		pphh = document.getElementById("phone")
		resour = document.getElementById("resource")
		cckkss = document.getElementById("ckState")

		worked++
	}
}
*/
function placeNoteInput3(event){

	var jobtitle = document.getElementById("jobName");
	var uId = document.getElementById("uid");
	var phOne = document.getElementById("phone");
	var resUlt = document.getElementById("result");
	var resOurce = document.getElementById("resource");

	var x = event.keyCode;
	var input3 = document.getElementById("input3");
	if (x==13){
		input3.value = jobtitle.innerHTML + ": " + phOne.value + ": " + resUlt.value + "/ " + document.getElementById("uid").innerHTML;
	}
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
}

var bResult = document.getElementById("basicResult");

function setUpNext(event){

		aNum = document.getElementById("aNumber")
		pphh = document.getElementById("phone")
		resour = document.getElementById("resource")
		cckkss = document.getElementById("ckState")
		nn = document.getElementById("newNum")
	var x = event.keyCode;
	if(x==67){
		if(worked == 1){worked = 2}
		if(document.getElementById("jobName").innerHTML == "SKIP MANUAL DIAL~"){
			document.getElementById("jobName").innerHTML = "SKIP TRACE"
			document.getElementById("aNumber").focus();
			enderTime(event);
			storeRecord(event);
			useTodaysWork1();
			document.getElementById("result").value = ""
			onNumber = 0
			worked = 0;
			numbersFound = 0;
			nnp.innerText = ((newNumFoundCounter/totalNumFoundCounter) * 100).toFixed(2) + "%" + "  |NEW:  " + newNumFoundCounter+"  |TOT.:  "+totalNumFoundCounter
}
		if(worked < separateAccounts.separate.length){
			storeRecord(event);
			pphh.value = separateAccounts.separate[worked].phone
			resour.value = separateAccounts.separate[worked].resource
			aNum.value = separateAccounts.separate[worked].accountNumber
				if(typeof separateAccounts.separate[worked].kState !== "undefined"){
		cckkss.value = separateAccounts.separate[worked].kState
	}

			bResult.value = separateAccounts.separate[worked].bResult
			result.value = separateAccounts.separate[worked].result
			nn.innerHTML = separateAccounts.separate[worked].newNum
			nnp.innerText = separateAccounts.separate[worked].newNumPercentTotal
			worked++
			onNumber++
			pphh.focus()
			checkInformation(event)
			compareAreaCodes(event)
			nnp.innerText = ((newNumFoundCounter/totalNumFoundCounter) * 100).toFixed(2) + "%" + "  |NEW:  " + newNumFoundCounter+"  |TOT.:  "+totalNumFoundCounter+" |ON "+onNumber+" OF "+numbersFound+" #S FOUND IN THIS SESSION|";
			}
		if(worked == separateAccounts.separate.length){

			document.getElementById("jobName").innerHTML = "SKIP MANUAL DIAL~"
			allGlobalAccounts.aGa = [];
			storedResource = "";
			fullNote.innerHTML = "";
			input2PhoneArr = [];
			separateAccounts.separate = ["a"];
			//separateAccounts2.separateDNC = [{"phone":"-","resource":"-","accountNumber":"-","kState":"-","bResult":"-","result":"-","time":"-","newNum":"-","newNumPercentTotal":"-"}]
			//separateAccounts3.separateGeneral = [{"phone":"-","resource":"-","accountNumber":"-","kState":"-","bResult":"-","result":"-","time":"-","newNum":"-","newNumPercentTotal":"-"}]
			savedNumbers = ""
			phoneNumberCounter++
			useTodaysWork1()
			aNum.focus();
			enderTime(event);
		}
}
compareAreaCodes(event)
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
}















function email(){
var emailTo = document.getElementById("email1");
var emailSubject = document.getElementById("email2");
var emailBody = document.getElementById("email3");
var emailCC = document.getElementById("email4");
var emailBCC = document.getElementById("email5");
var to = emailTo.value
var subject = emailSubject.value
var body = emailBody.value
var cc = emailCC.value
var bcc = emailBCC.value
if (bcc.length > 0){
document.getElementById("emailer").setAttribute("href", "mailto:"+to+"?subject=" +subject+"&body="+body+"&cc="+cc+"&bcc="+bcc)
document.getElementById("emailer").click()
}
if(bcc.length == 0){
document.getElementById("emailer").setAttribute("href", "mailto:"+to+"?subject=" +subject+"&body="+body+"&cc="+cc)
document.getElementById("emailer").click()
}
			document.getElementById("email1").value = ""
			document.getElementById("email2").value = ""
			document.getElementById("email3").value = ""
			document.getElementById("email4").value = ""
			document.getElementById("email5").value = ""
			document.getElementById("phone").focus();
}


function callEmailer(event){
	var x = event.keyCode;
	if((x==13) && ((document.getElementById("phone").value == "(EMA)IL")||(document.getElementById("phone").value == "EMAIL"))){
			document.getElementById("email1").focus();

	}
}
function email1Btn(){

		email()

}
function email1(event){
var x = event.keyCode;
	if(x==13){
		document.getElementById("email2").focus();
	}
}
function email2(event){
var x = event.keyCode;
	if(x==13){
		document.getElementById("email3").focus();
	}
}
function email3(event){
var x = event.keyCode;
	if(x==13){
		document.getElementById("email4").focus();
	}
}
function email4(event){
var x = event.keyCode;
	if(x==13){
		document.getElementById("email5").focus();
	}
}
	function email5(event){
var x = event.keyCode;
	if(x==13){
		email();
	}
	}


var phone = document.getElementById("phone");
var basicResult = document.getElementById("basicResult");
var uidd = document.getElementById("uid");
var cdat = document.getElementById("currentDate");
var resource = document.getElementById("resource");
var accountNumber = document.getElementById("aNumber");
var time = document.getElementById("time");
var cckState = document.getElementById("curKs");
var nnkState = document.getElementById("nKs");
var ksChange = document.getElementById("changeyn");
var percentageOfChange = document.getElementById("poc");
var newNumer = document.getElementById("newNum");
var nnPerT  = document.getElementById("newNumPercent");
//the records object
var recordsObj = {"pr":[]};

//function that stores the records in the records Object

function storeRecord(event){
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
	var x = event.keyCode;
    	if(x == 67){
		if(accountNumber.value != "DUP ACCOUNT" && resource.value != "DNC" && phone.value != "" && basicResult.value != "DUP" && resource.value != "$ACCURINT~SEARCH$"){
        	var recordObj = {"time":"","phone":"", "basicResult":"", "date":"","uid":"","resource":"","accountNumber":"","ckState":"","nkState":"","ksChange":"","percentageOfChange":"","newNum":"","newNumPercentTotal":""};

			recordObj.time = time.innerHTML;
			recordObj.accountNumber = accountNumber.value;
			recordObj.phone = phone.value;
            recordObj.basicResult = basicResult.value;
			recordObj.date = month + "/" + day;
            recordObj.uid = uidd.innerHTML;
			recordObj.resource = resource.value;
			recordObj.ckState = cckState.innerHTML;
			recordObj.nkState = nnkState.innerHTML;
			recordObj.ksChange = ksChange.innerHTML;
			recordObj.percentageOfChange = percentageOfChange.innerHTML;
			recordObj.newNum = newNumer.innerHTML;
			recordObj.newNumPercentTotal = newNumFoundCounter + " | " + totalNumFoundCounter;
			recordsObj.pr.push(recordObj);
			checkDataBNL2()
        }
	}
}

var informationToCheck = {"info":[]}
var informationToCheckDuplicates = {"info":[]}
var resourceToCheck = document.getElementById("resource")
var numberToCheck = document.getElementById("phone")
var timeOfInsert = document.getElementById("time");



/*function saveInformation(event){
var x = event.keyCode;
	if(x==13){
		if(resourceToCheck.value == "DNC"){
		var information = {"resource":"","phone":"","time":""}
		information.resource = resourceToCheck.value
		information.phone = "*"+numberToCheck.value+"*"
		information.time = timeOfInsert.value
		informationToCheck.info.push(information)
		}
	}
}*/


/*function saveInformationDuplicates(event){
var x = event.keyCode;
	if(x==13){
		if(resourceToCheck.value != "DNC"){
		var information = {"resource":"","phone":"","time":""}
		information.resource = resourceToCheck.value
		information.phone = "("+numberToCheck.value
		information.time = timeOfInsert.value
		informationToCheckDuplicates.info.push(information)
		}
	}
}*/


function checkInformation(event){
	var x = event.keyCode;
		if(x==67||x==13){
			for(i=0;i<informationToCheck.info.length;i++){
				if(numberToCheck.value == informationToCheck.info[i].phone){
					alert(informationToCheck.info[i].phone + " is a " + informationToCheck.info[i].resource + " number!")
					/*document.getElementById("basicResult").value = "DNC"
					document.getElementById("result").value = "DNC"*/
				}
			}
		}
}


function checkInformationDuplicates(event){
	var x = event.keyCode;
		if(x==13){
			for(i=0;i<informationToCheckDuplicates.info.length;i++){
				if(numberToCheck.value == informationToCheckDuplicates.info[i].phone){
					alert(informationToCheckDuplicates.info[i].phone + " was already found in a " + informationToCheckDuplicates.info[i].resource + " search!")
					/*separateAcc.phone = "("+informationToCheckDuplicates.info[i].phone+")"
					separateAcc.resource = "("+informationToCheckDuplicates.info[i].resource+")"*/
				}
			}
		}
}


function progressChecker(a){
alert(a)
}

var n;
var p;
var p1;
function ValidatePhone(){
p=p1.value
if(p.length==3){
	//d10=p.indexOf('(')
	pp=p;
	d4=p.indexOf('(')
	d5=p.indexOf(')')
	if(d4==-1){
		pp="("+pp;
	}
	if(d5==-1){
		pp=pp+")";
	}
	//pp="("+pp+")";
	document.frmPhone.txtphone.value="";
	document.frmPhone.txtphone.value=pp;
}
if(p.length>3){
	d1=p.indexOf('(')
	d2=p.indexOf(')')
	if (d2==-1){
		l30=p.length;
		p30=p.substring(0,4);
		//alert(p30);
		p30=p30+")"
		p31=p.substring(4,l30);
		pp=p30+p31;
		//alert(p31);
		document.frmPhone.txtphone.value="";
		document.frmPhone.txtphone.value=pp;
	}
	}
if(p.length>5){
	p11=p.substring(d1+1,d2);
	if(p11.length>3){
	p12=p11;
	l12=p12.length;
	l15=p.length
	//l12=l12-3
	p13=p11.substring(0,3);
	p14=p11.substring(3,l12);
	p15=p.substring(d2+1,l15);
	document.frmPhone.txtphone.value="";
	pp="("+p13+")"+p14+p15;
	document.frmPhone.txtphone.value=pp;
	//obj1.value="";
	//obj1.value=pp;
	}
	l16=p.length;
	p16=p.substring(d2+1,l16);
	l17=p16.length;
	if(l17>3&&p16.indexOf('-')==-1){
		p17=p.substring(d2+1,d2+4);
		p18=p.substring(d2+4,l16);
		p19=p.substring(0,d2+1);
		//alert(p19);
	pp=p19+p17+"-"+p18;
	document.frmPhone.txtphone.value="";
	document.frmPhone.txtphone.value=pp;
	//obj1.value="";
	//obj1.value=pp;
	}
}
//}

}
function getIt(m){
n=m.name;
//p1=document.forms[0].elements[n]
p1=m
ValidatePhone()
}
function testphone(obj1){
p=obj1.value
//alert(p)
p=p.replace("(","")
p=p.replace(")","")
p=p.replace("-","")
p=p.replace("-","")
//alert(isNaN(p))
if (isNaN(p)==true){
alert("Check phone");
return false;
}
}




function deceased(event){
	var x = event.keyCode;
		if(x == 67){
			if (document.getElementById("ckState").value == "D17"){
				document.getElementById("phone").value = "DECEASED"
				document.getElementById("result").value = "DECEASED"
				document.getElementById("basicResult").value = "DECEASED"
				document.getElementById("nkState").value = "D17"
				document.getElementById("resource").value = "NO ESTATE"
			}
			if (document.getElementById("ckState").value == "D01"){
				document.getElementById("phone").value = "DECEASED"
				document.getElementById("result").value = "DECEASED"
				document.getElementById("basicResult").value = "DECEASED"
				document.getElementById("nkState").value = "D01"
				document.getElementById("resource").value = "DECEASED ENTRY"
			}
			if (document.getElementById("ckState").value == "D70"){
				document.getElementById("phone").value = "DECEASED"
				document.getElementById("result").value = "DECEASED"
				document.getElementById("basicResult").value = "DECEASED"
				document.getElementById("nkState").value = "D70"
				document.getElementById("resource").value = "DECEASED PLACEMENT"
			}
			if (document.getElementById("ckState").value == "D71"){
				document.getElementById("phone").value = "DECEASED"
				document.getElementById("result").value = "DECEASED"
				document.getElementById("basicResult").value = "DECEASED"
				document.getElementById("nkState").value = "D71"
				document.getElementById("resource").value = "DECEASED RECALL"
			}
		}
}

 var data;

  function handleFileSelect(evt) {
    var file = evt.target.files[0];

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: function(results) {
        data = results;
      }
    });
  }

  $(document).ready(function(){
    $("#csv-file").change(handleFileSelect)
	$("#csv-file").change(detectFileOrNo)
  });

  function detectFileOrNo(){
  var csvValue = document.getElementById("csv-file");
  		if(csvValue.value == ""){
			dialerFunc();
		}
  }

  coco = 0
  function showData(){
	data;
	coco++

	document.getElementById("phone").value = data.data[coco]["Acct Num"];

	/*var foo = myForm["foo[]"]; // correct syntax

	for (var i = 0; i < 10; i++) {
  someFunction(myForm["myControlNumber" + i]);
}*/
  }
 function showData2(){
	data;
	coco++
	h =
	document.getElementById("aNumber").value = data.data[coco]["account"];
	document.getElementById("phone").value = data.data[coco]["OV Phone"];

	/*var foo = myForm["foo[]"]; // correct syntax

	for (var i = 0; i < 10; i++) {
  someFunction(myForm["myControlNumber" + i]);
}*/
  }

  var data;

  function handleFileSelect(evt) {

    var file = evt.target.files[0];

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: function(results) {

        data = results;

		if(checkJob == 0){
		useFirstAccount()
		}
      }
    });
  }

 var checkJob = 0
 function useFirstAccount(){

for(firstKey in data.data[0]){
 if(firstKey == "Acct Num"){
 typeOfJob()
 }
 if(firstKey == "LOAN NBR"){
 typeOfJob2()
 }
 if(firstKey == "Date"){
 badNumbersList()
 document.getElementById("resource").value = "BAD~#~LIST"
document.getElementById("jobName").innerHTML = "MORTGAGE LOAN ACTIVITY REPORT"
}
};
}


  $(document).ready(function(){
    $("#csv-file").change(handleFileSelect);



  });


function waiter(){
setTimeout(phoneEvaluator(), 1000);
}
function waiterDialer(){
setTimeout(phoneEvaluatorDialer(), 1000);
}
function waiterAreaCode(){
setTimeout(compareAreaCodes2(), 1000);
}
function phoneEvaluator(){
var decider = true
		var stringArray2 = []
		var stringArray3 = []
		var phoneFieldString = document.getElementById("phone")
		for(evaluator=0;evaluator<data.data.length;evaluator++){
		var stringValu2 = data.data[evaluator]["OV Phone"]
		if(typeof stringValu2 == "undefined"){continue}
		var stringValue2 = stringValu2.toString();
		var totalString2 = ""
			for(i=0;i<stringValue2.length;i++){
				stringArray2.push(stringValue2[i])
			}
			for(zy=0;zy<stringArray2.length;zy++){
				if((stringArray2[zy] == "(") || (stringArray2[zy] == ")") || (stringArray2[zy] == " ") || (stringArray2[zy] == "-")){
					stringChecker2(stringArray2)
					decider = false;
					break;
				}
			}
			if(decider == true){
				data.data[evaluator]["OV Phone"] = numberFormatter2(stringArray2)
			}
		var stringArray2 = []
		var stringArray3 = []
		}
		if(phoneFieldString.value.length > 0){
			for(pfsv = 0; pfsv<phoneFieldString.value.length;pfsv++){
				stringArray2.push(phoneFieldString.value[pfsv])
			}
			for(pfsv2=0;pfsv2<stringArray2.length;pfsv2++){
				if((stringArray2[pfsv2] == "(") || (stringArray2[pfsv2] == ")") || (stringArray2[pfsv2] == " ") || (stringArray2[pfsv2] == "-")){
					stringChecker2(stringArray2)
					decider = false;
					break;
				}
			}
			if(decider == true){
			numberFormatter2(stringArray2)
			}
		}
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
					decider = false;
					break;
				}
			}
			if(decider == true){
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

var changed = 0;
var notChanged = 0;
function changeOrNo(event){
var stotalLocal = data.data
var pol = event.keyCode;
if(pol==13){
	if(document.getElementById("nkState").value != document.getElementById("ckState").value){
		document.getElementById("changeyn").innerHTML = "YES";
		changed++
		document.getElementById("poc").innerHTML = ((changed/stotalLocal.length) * 100).toFixed(2) + "%";
	}
	if(document.getElementById("nkState").value == document.getElementById("ckState").value){
		document.getElementById("changeyn").innerHTML = "NO";
		notChanged++
		document.getElementById("poc").innerHTML = ((notChanged/stotalLocal.length) * 100).toFixed(2) + "%";

	}
	}
}
function changeOrNo2(event){
var pol = event.keyCode;
if(pol==13){
	if(document.getElementById("nkState").value != document.getElementById("ckState").value){
		document.getElementById("changeyn").innerHTML = "YES";
		changed++
	}
	if(document.getElementById("nkState").value == document.getElementById("ckState").value){
		document.getElementById("changeyn").innerHTML = "NO";
		notChanged++

	}
	}
}

var worked = 0;
	function readyToCallCore(event){
		var x = event.keyCode;
			if(x==67){
				if(separateAccounts.separate.length > 0){
					document.getElementById("a8").value = "";
					document.getElementById("phone").focus();
					document.getElementById("jobName").innerHTML = "SKIP MANUAL DIAL"
				}
			}
		}
var worked = 0;

function placeNoteInput3(event){

	var jobtitle = document.getElementById("jobName");
	var uId = document.getElementById("uid");
	var phOne = document.getElementById("phone");
	var resUlt = document.getElementById("result");
	var resOurce = document.getElementById("resource");

	var x = event.keyCode;
	var input3 = document.getElementById("input3");
	if (x==13){
		input3.value = jobtitle.innerHTML + ": " + phOne.value + ": " + resUlt.value + "/ " + document.getElementById("uid").innerHTML;
	}
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
}

var bResult = document.getElementById("basicResult");

function setUpNextCore(event){
		aNum = document.getElementById("aNumber")
		pphh = document.getElementById("phone")
		resour = document.getElementById("resource")
		cckkss = document.getElementById("ckState")
		nn = document.getElementById("newNum")
	var x = event.keyCode;
	if(x==67){
	if(worked == separateAccounts.separate.length){
			nnp.innerText = ((newNumFoundCounter/totalNumFoundCounter) * 100).toFixed(2) + "%" + "  |NEW:  " + newNumFoundCounter+"  |TOT.:  "+totalNumFoundCounter
			storeRecord(event);
			document.getElementById("jobName").innerHTML = "SKIP TRACE"
			allGlobalAccounts.aGa = [];
			storedResource = "";
			fullNote.innerHTML = "";
			input2PhoneArr = [];
			separateAccounts.separate = [];
			separateAccounts3.separateGeneral = [0];
			separateAccounts2.separateDNC = []
			savedNumbers = ""
			phoneNumberCounter++
			aNum.focus();
			enderTime(event);
			onNumber = 0
			worked = 0;
			numbersFound = 0;
			document.getElementById("result").value = ""
			document.getElementById("basicResult").value = ""
			document.getElementById("ckState").value = ""
			document.getElementById("nkState").value = ""
			useTodaysWork1Core()
			document.getElementById("aNumber").focus();
			enderTime(event);
			document.getElementById("jobName").innerHTML = "SKIP~TRACE"
		}
		if(worked < separateAccounts.separate.length){
		document.getElementById("phone").setAttribute("onkeydown", "basicResultTransback2(event);searcher(event);changeFile(event);applyKState(event);changeColor(event);compareAreaCodes(event); moveTask(event); changeResource(event); uidCheck(); uidLength(this);goBack(event);callEmailer(event);downloadReport(event);")
			document.getElementById("jobName").innerHTML = "SKIP~MANUAL~DIAL"
			storeRecord(event);
			document.getElementById("result").value = ""
			document.getElementById("basicResult").value = ""
			document.getElementById("ckState").value = ""
			document.getElementById("nkState").value = ""
			pphh.value = separateAccounts.separate[worked].phone
			resour.value = separateAccounts.separate[worked].resource
			aNum.value = separateAccounts.separate[worked].accountNumber
				if(separateAccounts.separate[worked].kState != "undefined"){
		cckkss.value = separateAccounts.separate[worked].kState
	}
			bResult.value = separateAccounts.separate[worked].bResult
			result.value = separateAccounts.separate[worked].result
			nn.innerHTML = separateAccounts.separate[worked].newNum
			nnp.innerText = separateAccounts.separate[worked].newNumPercentTotal
			worked++
			onNumber++
			pphh.focus()
			checkInformation(event)
			compareAreaCodes(event)
			nnp.innerText = ((newNumFoundCounter/totalNumFoundCounter) * 100).toFixed(2) + "%" + "  |NEW:  " + newNumFoundCounter+"  |TOT.:  "+totalNumFoundCounter+" |ON "+onNumber+" OF "+numbersFound+" #S FOUND IN THIS SESSION|";
			}
}
compareAreaCodes(event)
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
}













function input2NoteCore(event){
	var accurintCounter = 0

	var x = event.keyCode;
		if(x==13){
		toFormat()
		dncStore(event)
		dncLogicCheckCore(event)
		dupLogicCore(event)
		newNumLogicCore(event)

		generalPlacementLogicCore(event, dncVar, dupVar, dncVarStore, newNumVar)
		nnp.innerText = ((newNumFoundCounter/totalNumFoundCounter) * 100).toFixed(2) + "%" + "  |NEW:  " + newNumFoundCounter+"  |TOT.:  "+totalNumFoundCounter;
		 dncVar = false
		 dupVar = false
		 dncVarStore = false
		 newNumVar = false
		 phRe(event)
		 changingAccounts(event);

		input2PhoneArr.push(input2Phone.value)
		input2NoteSpace.value = input2Resource.value + ": " + input2PhoneArr + "/"
		numbersFound++
		input2Phone.value = "";

		}
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
	}

function changingAccounts(event){
	var x = event.keyCode;
	if(x==13){
	rsrc = document.getElementById("resource");
	if(storedResource != rsrc.value){
		fullNote.innerHTML = "";
		input2PhoneArr = [];
		allGlobalAccounts.aGa.unshift(fullNote.value);
		storedResource = rsrc.value;
		}
	}
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
}
var savedNumbers = "";
function nextCore(event){
var x = event.keyCode;

var hotNotin = document.getElementById("a8");

	if(x==191){
	hotNotin.focus();
	allGlobalAccounts.aGa.unshift(fullNote.value);
	for(i=0;i<allGlobalAccounts.aGa.length;i++){
	 savedNumbers += allGlobalAccounts.aGa[i];
	}
	hotNotin.value = document.getElementById("datePlace").innerHTML + ": " + savedNumbers + "/" + document.getElementById("uid").innerHTML + " ";
	}
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
}















var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
function toFormat(){
var phoneBox = document.getElementById("phone");
var phoneBoxValue = phoneBox.value;
var testerArray = []
if(phoneBoxValue.length > 0){
var decision = true;
for(i=0;i<phoneBoxValue.length;i++){
				testerArray.push(phoneBoxValue[i])
			}
	for(tAc=0;tAc<testerArray.length;tAc++){
	for(letterChecker=0;letterChecker<letters.length;letterChecker++){
		if (testerArray[tAc] == letters[letterChecker]){
			decision = false;
			break;
		}
	}
		if (decision == true){
			unformattedString();
		}
	}
	}
}
function unformattedString(){
var decider = true
		var stringArray = []
		var stringArray2 = []

		var string = document.getElementById("phone");
		var stringValue = string.value;
		var totalString = ""
			for(i=0;i<stringValue.length;i++){
				stringArray.push(stringValue[i])
			}
			for(zy=0;zy<stringArray.length;zy++){
				if((stringArray[zy] == "(") || (stringArray[zy] == ")") || (stringArray[zy] == " ") || (stringArray[zy] == "-")){
					stringChecker(stringArray)
					decider = false;
					break;
				}
			}
			if(decider == true){
				numberFormatter(stringArray)
			}
		}


function stringChecker(stringArray){
var stringValue2 = ""
var stringArray2 = []
for(z=0;z<stringArray.length;z++){
/*check for the un-needed characters*/
	if((stringArray[z] == "(") || (stringArray[z] == ")") || (stringArray[z] == " ") || (stringArray[z] == "-")){
	/*delete the un-needed characters*/
		delete stringArray[z];
	}
	/*place the newly formatted array (that doesnt have the un-needed characters) into the variable "stringValue2"*/
	/*stringValue2 += stringArray[z]*/
}
for(y=0;y<stringArray.length;y++){
		if(typeof stringArray[y] == "undefined"){
			continue
		}
		stringArray2.push(stringArray[y])
		stringValue2 += stringArray[y]
	}
	numberFormatter(stringArray2)
}


function numberFormatter(stringToFormat){
	var string = document.getElementById("phone");
	var	totalString2 = ""
			stringToFormat.splice(0, 0, "(")
			stringToFormat.splice(4, 0, ")")
			stringToFormat.splice(8, 0, "-")
			for(y=0;y<stringToFormat.length;y++){
				totalString2 += stringToFormat[y]
			}
		string.value = totalString2
	}
























var allStates = {states:[{"state":"Y70","description":"DECLINED"},{"state":"Y02","description":"CALL"},{"state":"Y71","description":"COMPLETED"},{"state":"Y99","description":"ACCOUNT TRANSFER REVIEW"},{"state":"X95","description":"CONVERSION TRANSFER STATE"},{"state":"T02","description":"CALL"},{"state":"T20","description":"MANAGER REVIEW"},{"state":"T21","description":"SPOC HOLD"},{"state":"T31","description":"GR LOSS MITIGATION REFERRALS"},{"state":"T32","description":"CINCY LOSS MITIGATION REFERRALS"},{"state":"T33","description":"GEN PAC LOSS MITIGATION REFERRALS"},{"state":"T35","description":"PROSPECTOR WORKLIST"},{"state":"T47","description":"MEDIATOR ASSIGNED #2"},{"state":"T48","description":"MEDIATOR ASSIGNED #3"},{"state":"T50","description":"MEDIATOR ASSIGNED #5"},{"state":"T61","description":"HHF PROGRAM"},{"state":"T62","description":"REPAYMENT"},{"state":"T63","description":"FORBEARANCE REVIEW"},{"state":"T64","description":"MODIFICATION REVIEW"},{"state":"T69","description":"COMPLETED LOSS MITIGATION REFERRALS"},{"state":"T70","description":"DECLINED"},{"state":"T71","description":"COMPLETED"},{"state":"T73","description":"MODIFICATION APPROVED"},{"state":"S31","description":"PENDING SALE JUDGMENT"},{"state":"S33","description":"PENDING SALE"},{"state":"S34","description":"SOLD"},{"state":"S44","description":"SETTLED IN FULL"},{"state":"S46","description":"UN COLLECTABLE"},{"state":"S47","description":"PROBABLE LIEN"},{"state":"S74","description":"DO NOT CALL"},{"state":"S75","description":"SPECIAL HANDLING"},{"state":"S76","description":"CLOSED BANKRUPTCY"},{"state":"S77","description":"ACTIVE LOSS MIT"},{"state":"S78","description":"ACTIVE FORECLOSURE"},{"state":"A60","description":"ASSIGNED TO AGENCY"},{"state":"A61","description":"AGENCY 2ND PLACEMENT"},{"state":"A62","description":"AGENCY 3RD PLACEMENT"},{"state":"A89","description":"OCA REVIEW"},{"state":"B03","description":"NBS PLACEMENT CHAPTER 7"},{"state":"B04","description":"NBS PLACEMENT 11/13"},{"state":"B20","description":" MANAGER REVIEW"},{"state":"B50","description":"CHAPTER 7"},{"state":"B51","description":"CHAPTER 7 REAFFIRMATION"},{"state":"B52","description":"CHAPTER 13"},{"state":"B53","description":"DISCHARGE/NO REAFFIRMATION"},{"state":"B54","description":"CHAPTER 11/UNSECURED CHAPTER 13"},{"state":"B56","description":"NON BK 2ND PARTY-OPEN"},{"state":"B57","description":"NON BK 2ND PARTY-CHARGE OFF"},{"state":"C07","description":"VERBAL ATTY REP, NO ATTY INFO PROV"},{"state":"C09","description":"CLIENT VERBAL C & D"},{"state":"C10","description":"CLIENT WRITTEN C& D"},{"state":"C11","description":" THIRD PARTY C & D NOTICE"},{"state":"C14","description":"ATTY REP NOT CONFIRMED BY ATTY"},{"state":"C16","description":"BNKRTCY ATTY CONFIRMED PENDING CASE"},{"state":"C26","description":"ATTY CONFIRMED, NO - BK REP"},{"state":"C41","description":"CHARGED OFF CONSUMER C& D"},{"state":"C42","description":"CHARGED OFF THIRD PARTY REP"},{"state":"C43","description":"CHARGED OFF ATTY REP"},{"state":"D01","description":"DECEASED ENTRY"},{"state":"D17","description":"NO ESTATE"},{"state":"D70","description":"DECEASED PLACEMENT"},{"state":"D71","description":"DECEASED RECALL"},{"state":"F01","description":"ENTRY"},{"state":"F02","description":"CALL"},{"state":"F04","description":"BROKEN PROMISE"},{"state":"F08","description":"REFERRAL"},{"state":"F16","description":"TAP"},{"state":"F20","description":"MANAGER REVIEW"},{"state":"G01","description":"INTERNAL LEGAL"},{"state":"G02","description":"EXTERNAL LEGAL"},{"state":"G03","description":"LEGAL PLACEMENT - MORTGAGE"},{"state":"G70","description":"REO PROPERTIES"},{"state":"G72","description":"LEGAL AUDIT REVIEW - MORTGAGE (2ND)"},{"state":"G90","description":"DEFENSIVE LITIGATION"},{"state":"H01","description":"ENTRY"},{"state":"I01","description":"INACTIVWE"},{"state":"I01","description":"INACTIVE"},{"state":"J01","description":"ENTRY - REAL ESTATE LEGAL"},{"state":"J16","description":"MTG NON-EQUITABLE TO FORECLOSE"},{"state":"J17","description":"MTG DEFICIENCY BALANCE"},{"state":"J19","description":"PAYING - NON-EQUITABLE TO FORECLOSE"},{"state":"J20","description":"FORECLOSURE CANCELLED"},{"state":"J31","description":"EXPEDITE LEGAL - REVIEW NEEDED"},{"state":"J32","description":"SPECIAL HANDLING - NO LEGAL"},{"state":"J50","description":"CHARGE OFF REVIEW (2ND)"},{"state":"J52","description":"WAITING FOR LIQUIDATION - DEFICIENCY"},{"state":"J53","description":"LIQUIDATION COMPLETE"},{"state":"K01","description":"BATCH PHONE SEARCH"},{"state":"K02","description":"MANUAL (FREE) PHONE SEARCH"},{"state":"K03","description":"MANUAL (VENDOR) PHONE SEARCH"},{"state":"K04","description":" POSSIBLE LOCATE"},{"state":"L02","description":"CALL"},{"state":"L08","description":"REFERRAL"},{"state":"L20","description":"MANAGER REVIEW"},{"state":"M01","description":"ENTRY"},{"state":"M02","description":"CALL"},{"state":"M08","description":"REFERRAL"},{"state":"M20","description":"MANAGER REVIEW"},{"state":"N02","description":"CALL"},{"state":"098","description":"TCPA CELL CONSENT"},{"state":"Q02","description":"DISPUTE 877-676-3343"},{"state":"Q40","description":"SPECIALIST WORK877-676-3343"},{"state":"Q50","description":"SCRA 877-676-3343"}]}
	function checkForStates(){
		for(ia=0;ia<allStates.states.length;ia++){
			if (document.getElementById("ckState").value == allStates.states[ia].state){
				document.getElementById("kStateDescription").innerHTML = allStates.states[ia].description
			}
		}
	}
	function checkForStates2(){
		for(ia=0;ia<allStates.states.length;ia++){
			if (document.getElementById("nkState").value == allStates.states[ia].state){
				document.getElementById("kStateDescription2").innerHTML = allStates.states[ia].description
			}
		}
	}

function generalPlacementLogicCore(event, dncVar, dupVar, dncVarStore, newNumVar){
var separateAcc = {"phone":"","resource":"","accountNumber":"","kState":"","bResult":"","result":"","time":"","newNum":"","newNumPercentTotal":""}
	var x = event.keyCode;
		if(x == 13){
			if((dncVar == false) && (dupVar == false) && (newNumVar == false) && (newNumVar == false) && (dncVarStore == false)){
						if(input2Resource.value == "ACCURINT~SEARCH"){
						separateAcc.accountNumber = input2AccNum.value
						separateAcc.kState = input2State.value
						separateAcc.phone = input2Phone.value
						separateAcc.resource = input2Resource.value
						separateAcc.time = time.innerText
						separateAcc.newNum = "NO"
						totalNumFoundCounter++
						separateAcc.newNumPercentTotal = newNumFoundCounter + " | " + totalNumFoundCounter
						separateAccounts.separate.push(separateAcc)
						}
						if((input2Resource.value != "ACCURINT~SEARCH") && (separateAcc.resource != "$"+input2Resource.value+"$")){
						separateAcc.phone = input2Phone.value
						separateAcc.resource = input2Resource.value
						separateAcc.accountNumber = input2AccNum.value
						separateAcc.kState = input2State.value
						separateAcc.bResult = bResult.value
						separateAcc.newNum = newN.value
						separateAcc.newNum = "NO"
						separateAcc.newNumPercentTotal = nnp.value
						separateAcc.time = time.innerText
						separateAccounts.separate.push(separateAcc)
						totalNumFoundCounter++
						}
					}
				}
			}



function dupLogicCore(event){

var x = event.keyCode;

if(x==13){
	for(i=0;i<separateAccounts.separate.length;i++){
				if(input2Phone.value == separateAccounts.separate[i].phone && input2Resource != "DNC"){
					alert("DUPLICATE FOUND IN "+ separateAccounts.separate[i].resource + " AT: " + separateAccounts.separate[i].time)
					dupVar = true;
					break;
				}
			}
		}
	}


function newNumLogicCore(event){

var separateAcc = {"phone":"","resource":"","accountNumber":"","kState":"","bResult":"","result":"","time":"","newNum":"","newNumPercentTotal":""}
var accurintCounter = 0
var x = event.keyCode;
var generalCounter = 0

if(x == 13){
if((input2Resource.value == "ACCURINT~SEARCH") && (dupVar == false) && (dncVar == false)){

					for(countoff2 = 0;countoff2<separateAccounts.separate.length;countoff2++){
						if((input2Phone.value != separateAccounts.separate[countoff2].phone) && (("$"+input2Phone.value+"$") != separateAccounts.separate[countoff2].phone)){
							generalCounter++
									separateAcc.accountNumber = input2AccNum.value
									separateAcc.kState = input2State.value
									separateAcc.phone = input2Phone.value;
									separateAcc.bResult = "";
									separateAcc.result = "";
									separateAcc.resource = "$"+input2Resource.value+"$";
									separateAcc.newNum = "YES";
									separateAcc.time = time.innerText
									totalNumFoundCounter++
									newNumFoundCounter++
									alert("NEW NUMBER")
									accurintCounter = 0
									separateAcc.newNumPercentTotal = newNumFoundCounter + " | " + totalNumFoundCounter
									separateAccounts.separate.push(separateAcc);
									countoff2 = separateAccounts.separate.length
									newNumVar = true
							}
						}
					}
				}
			}


var phoneNumberCounter = 0



function useTodaysWorkBNL(event){
var x = event.keyCode;
	if(x == 67){
		phoner = document.getElementById("phone")
		aNumberer = document.getElementById("aNumber")
		kStater = document.getElementById("ckState")
		resulter = document.getElementById("result")
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
		phoner.value = data.data[phoneNumberCounter]["OV Phone"];
		aNumberer.value = data.data[phoneNumberCounter]["account"];
		}
		document.getElementById("nkState").value = "";
		document.getElementById("basicResult").value = "";
		document.getElementById("resource").value = ""
		document.getElementById("result").value = ""
		kStater.value = "";
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
		document.getElementById("tot").innerHTML = "ACCOUNT: " + autoChanging() + ": " + phoneNumberCounter + "   OF  " + data.data.length;
		}
		compareAreaCodes(event);
		worked = 0
		phoneNumberCounter++
		document.getElementById("phone").focus();
	}
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
}
function useTodaysWork(event){
	if(document.getElementById("jobName").innerHTML
	!= "SKIP MANUAL DIAL"){
	phoner = document.getElementById("phone")
	aNumberer = document.getElementById("aNumber")
	resulter = document.getElementById("result")



	var x = event.keyCode;
	if (x == 13){
			/*phoner.value = data.data[phoneNumberCounter].phoneNumber;*/
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
			aNumberer.value = data.data[phoneNumberCounter]["account"];
			}
			document.getElementById("nkState").value = "";
			document.getElementById("basicResult").value = "";
			document.getElementById("resource").value = "";
			kStater.value = "";
		phoneNumberCounter++
		compareAreaCodes(event);
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
		if(phoneNumberCounter == data.data.length){
		phoneNumberCounter = 0
		checkTable()
		}
		}
	}
	}
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
}





	var crvObj = {crvInfo:[]}
function crvCallType(type){
	var callTypeObj = {"Call Type":""}
	var callType =  type.innerHTML;
	callTypeObj["Call Type"] = callType;
	crvObj.crvInfo.push(callTypeObj)
	showObject()
}
function crvRequired(required){
	var crvRequired = required.id
	if(crvRequired == "cname"){
	var crvCnameObj = {"Used callers full name":""}
		crvCnameObj["Used callers full name"] = "Used callers full name";
		crvObj.crvInfo.push(crvCnameObj)
	}
	if(crvRequired == "qa"){
	var crvQabj = {"Quality Assurance Statement":""}
		crvQabj["Quality Assurance Statement"] = "Quality Assurance Statement";
		crvObj.crvInfo.push(crvQabj)
	}
	if(crvRequired == "bname"){
	var crvBnameObj = {"Gave banks name":""}
		crvBnameObj["Gave banks name"] = "Gave banks name";
		crvObj.crvInfo.push(crvBnameObj)
	}
	if(crvRequired == "yname"){
	var crvYnameObj = {"Gave my name":""}
		crvYnameObj["Gave my name"] = "Gave my name";
		crvObj.crvInfo.push(crvYnameObj)
	}
	showObject()
}
	var verifyCounter = 0;
/*{"Verified address/zip":""},{"Verified home phone":""},{"Verified ssn":""},{"Verified last for of ssn":""}*/
function crvVerify(verified){
	var verifiedInformation = verified.id;


	if(verifiedInformation == "addr"){
	var address = {"Verified address/zip":""}
		address["Verified address/zip"] = "Verified address/zip";
		crvObj.crvInfo.push(address)
		verifyCounter++
	}
	if(verifiedInformation == "hph"){
	var homePhone = {"Verified home phone":""}
		homePhone["Verified home phone"] = "Verified home phone";
		crvObj.crvInfo.push(homePhone)
		verifyCounter++
	}
	if(verifiedInformation == "ssn"){
	var soci = {"Verified ssn":""}
		soci["Verified ssn"] = "Verified ssn";
		crvObj.crvInfo.push(soci)
		verifyCounter++
	}
	if(verifiedInformation == "ssn4"){
	var soci4 = {"Verified last for of ssn":""}
		soci4["Verified last for of ssn"] = "Verified last 4 of ssn";
		crvObj.crvInfo.push(soci4)
		verifyCounter++
	}

	if(verifyCounter == 2){
		verifyCounter = 0;
		document.getElementById("ckState").focus();
	}
}
/*{"POE":""},{"POE#":""},{"ALT#":""}*/
var crvCcounter = 0;
var finalCounter = 0;
function crvCheck(){
var addR = document.getElementById("addR")
var hpH = document.getElementById("hpH")
	for(cRv=0;cRv<crvObj.crvInfo.length;cRv++){
		if (crvObj.crvInfo[cRv]["Verified address/zip"] == "Verified address/zip"){
			addR.style.color = "red"
			crvCcounter++
			finalCounter++
		}
		if (crvObj.crvInfo[cRv]["Verified home phone"] == "Verified home phone"){
			hpH.style.color = "red"
			crvCcounter++
			finalCounter++
		}
	}
}
/*{"POE":""},{"POE#":""},{"ALT#":""}*/
function finalCrv(finalVerify){

	var addR = document.getElementById("addR")
	var hpH = document.getElementById("hpH")
	var poe = document.getElementById("poe")
	var poen = document.getElementById("poen")
	var clicker = document.getElementById("ckState")
	var altN = document.getElementById("altN")

	var finalV = finalVerify.id;

		if(finalV == "addR"){
			var address = {"Verified address/zip":""}
					address = addR.innerHTML;
						crvObj.crvInfo.push(address)
							finalCounter++
						}

		if(finalV == "hpH"){
			var homePhone = {"Verified home phone":""}
					homePhone = hpH.innerHTML;
						crvObj.crvInfo.push(homePhone)
							finalCounter++
						}

		if(finalV == "poe"){
			var employment = {"POE":""}
					employment = poe.innerHTML;
						crvObj.crvInfo.push(employment)
							finalCounter++
						}

		if(finalV == "poen"){
			var employmentPhone = {"POE#":""}
					employmentPhone = poen.innerHTML;
						crvObj.crvInfo.push(employmentPhone)
							finalCounter++
						}

		if(finalV == "altN"){
			var alternateNumber = {"ALT#":""}
					alternateNumber = altN.innerHTML;
						crvObj.crvInfo.push(alternateNumber)
							finalCounter++
						}

		if(finalCounter == 3){
			finalCounter = 0
				clicker.focus();
		}

		/*if(finalV == "addR"){
			addR.click();
			}*/
}
/*var poe = document.getElementById("poe")
var poen = document.getElementById("poen")
var altN = document.getElementById("altN")*/
function showObject(){
		document.getElementById("a8").value = JSON.stringify(crvObj.crvInfo);
		document.getElementById("a8").focus();
}


/*{"Call Type":""},{"Gave my name":""},{"Gave banks name":""},{"Quality Assurance Statement":""},{"Used callers full name":""},{"Verified address/zip":""},{"Verified home phone":""},{"Verified ssn":""},{"Verified last for of ssn":""},{"POE":""},{"POE#":""},{"ALT#":""}*/

function dialerFunc(){
document.getElementById("phone").setAttribute("onkeyup", "bNoteTran(event)")
document.getElementById("phone").setAttribute("oninput","waiterDialer()")
document.getElementById("phone").setAttribute("onkeydown","searcher(event);changeFile(event);applyKState(event);changeColor(event);compareAreaCodes(event); moveTask(event); changeResource(event); uidCheck(); uidLength(this);goBack(event);callEmailer(event);downloadReport(event);")
document.getElementById("input3").setAttribute("onkeyup", "storeRecord(event);tranBackAN(event);")
document.getElementById("jW").setAttribute("onkeydown", "tranBackAN2(event);")
document.getElementById("searchButton").setAttribute("onclick", "search2()")
document.getElementById("aNumber").setAttribute("onkeyup", "phoneTran(event)")
document.getElementById("aNumber").setAttribute("onfocus", "this.focus();this.select();")
document.getElementById("resource").value = "DIALER"
	var fileJob = document.getElementById("fileJob");
	var aNum = document.getElementById("aNumber");
	var bnPhone = document.getElementById("phone");
	fileJob.innerHTML = "CURRENT: DIALER"
	document.getElementById("phone").value = ""
	document.getElementById("aNumber").value = ""
	document.getElementById("ckState").value = ""
	document.getElementById("nkState").value = ""
	document.getElementById("input3").value = ""
	document.getElementById("jobName").innerHTML = "DIALER"
	phoneNumberCounter = 0;
	checkJob = 0;
	placeGeneralInformation()
	aTran()
}
function phoneTran(event){
var x = event.keyCode;
if(x==86){
document.getElementById("phone").focus()
}
}
function bNoteTran(event){
var x = event.keyCode;
if(x==86){
waiterDialer();
document.getElementById("basicResult").focus()
}
}
function aTran(){
document.getElementById("aNumber").focus()
}
function typeOfJob() {
    if (confirm("Is this an Accurint only search?") == true) {
        accurintOnlyMode();
		alert("Accurint Only Mode!")

	var aNum = document.getElementById("aNumber");
	var kS = document.getElementById("ckState");
	csvDupCheck2()
	aNum.value = data.data[coco]["Acct Num"];
	kS.value = data.data[coco]["CACS State"];

		if(typeof data.data[coco]["CACS State"] !== "undefined"){
		kS.value = data.data[coco]["CACS State"]
	}
	compareAreaCodes(event);
	document.getElementById("tot").innerHTML = "ACCOUNT: " + autoChanging() + ": " + (phoneNumberCounter+1) + "   OF  " + data.data.length;
    } else {
        coreSearchMode();
		alert("Core and Accurint Search Mode!")

	var aNum = document.getElementById("aNumber");
	var kS = document.getElementById("ckState");
	csvDupCheck2()
	aNum.value = data.data[coco]["Acct Num"];
	if(typeof data.data[coco]["CACS State"] !== "undefined"){
		kS.value = data.data[coco]["CACS State"]
	}
	compareAreaCodes(event);
	document.getElementById("tot").innerHTML = "ACCOUNT: " + autoChanging() + ": " + (phoneNumberCounter+1) + "   OF  " + data.data.length;
    }
}
function typeOfJob2() {
    if (confirm("Is this an Accurint only search?") == true) {
        accurintOnlyMode2();
		alert("Accurint Only Mode!")

	var aNum = document.getElementById("aNumber");
	var kS = document.getElementById("ckState");
	csvDupCheck2()
	aNum.value = data.data[coco]["LOAN NBR"];
	kS.value = data.data[coco]["CACS State"];

		if(typeof data.data[coco]["CACS State"] !== "undefined"){
		kS.value = data.data[coco]["CACS State"]
	}
	compareAreaCodes(event);
	document.getElementById("tot").innerHTML = "ACCOUNT: " + autoChanging() + ": " + (phoneNumberCounter+1) + "   OF  " + data.data.length;
    } else {
        coreSearchMode2();
		alert("Core and Accurint Search Mode!")
	var aNum = document.getElementById("aNumber");
	var kS = document.getElementById("ckState");
	csvDupCheck2()
	aNum.value = data.data[coco]["LOAN NBR"];
	if(typeof data.data[coco]["CACS State"] !== "undefined"){
		kS.value = data.data[coco]["CACS State"]
	}
	compareAreaCodes(event);
	document.getElementById("tot").innerHTML = "ACCOUNT: " + autoChanging() + ": " + (phoneNumberCounter+1) + "   OF  " + data.data.length;
    }
}
function badNumbersList(){
document.getElementById("phone").setAttribute("onkeyup", "")
document.getElementById("phone").setAttribute("onkeydown", "storeNumber(this);selectResource(this);report2(this);basicResultTransback2(event);searcher(event);changeFile(event);applyKState(event);changeColor(event);compareAreaCodes(event); moveTask(event); uidCheck(); uidLength(this);goBack(event);callEmailer(event);downloadReport(event);")
document.getElementById("input3").setAttribute("onkeyup", "report2(this);storeRecord(event);useTodaysWorkBNL(event);titlePlaceBNL(event);tranBackAN(event);enderTime(event);enderTime2(event);")
document.getElementById("jW").setAttribute("onkeydown", "report2(this);tranBackAN2(event);")
document.getElementById("jW").setAttribute("onkeyup", "searcherPaste(event,this);")
document.getElementById("searchButton").setAttribute("onclick", "search2()")
document.getElementById("aNumber").setAttribute("onkeydown", "report2(this);chngAcc3(event);")
document.getElementById("downloadTable").setAttribute("onclick", "downloadTableBNL2();")
document.getElementById("aNumber").setAttribute("onkeyup", "showAccount(this);report2(this);searcherPaste(event,this);starterTime(event);tranBack4(event);starterTime2(event);")
document.getElementById("aNumber").focus();
alert("Bad Numbers List Mode!")
	var aNum = document.getElementById("aNumber");
	var bnPhone = document.getElementById("phone");
	var fileJob = document.getElementById("fileJob");
	phoneEvaluator()
	csvDupCheck()
	bnPhone.value = data.data[phoneNumberCounter]["OV Phone"];
	aNum.value = data.data[phoneNumberCounter]["account"];
	compareAreaCodes(event);
	fileJob.innerHTML = "CURRENT: BAD NUMBERS LIST"
	document.getElementById("tot").innerHTML = "ACCOUNT: " + autoChanging() + ": " + (phoneNumberCounter+1) + "   OF  " + data.data.length;
	checkJob = 0;
	placeGeneralInformation()
}
function accurintOnlyMode(){
var fileJob = document.getElementById("fileJob");
document.getElementById("phone").setAttribute("onkeyup", "")
document.getElementById("phone").setAttribute("onkeydown", "storeNumber(this);selectResource(this);report(this);endChecker(event);callEmailer(event);changeFile(event);searcher(event);input3Note(event);next(event);applyKState(event);changeColor(event);compareAreaCodes(event); moveTask(event); uidCheck(); uidLength(this);goBack(event);")
document.getElementById("input3").setAttribute("onkeyup", "justWorkedChange(event);setUpNext(event);enderTime(event);enderTime2(event);")
document.getElementById("searchButton").setAttribute("onclick", "search()")
document.getElementById("jW").setAttribute("onkeydown", "tranBackAN2(event);")
document.getElementById("downloadTable").setAttribute("onclick", "checkDataBNL2();")
document.getElementById("aNumber").setAttribute("onkeyup", "showAccount(this);searcherPaste(event,this);starterTime(event);starterTime2(event);tranBack4(event);deceased(event);")
document.getElementById("aNumber").setAttribute("onkeydown", "showAccount(this);report(this);chngAcc(event)")
document.getElementById("a8").setAttribute("onkeyup", "readyToCall(event);setUpNextCore(event);compareAreaCodes(event);")
document.getElementById("aNumber").focus();
fileJob.innerHTML = "CURRENT: ACCURINT ONLY SEARCH"
checkJob = 0;
placeGeneralInformation()
}

function accurintOnlyMode2(){
document.getElementById("phone").setAttribute("onkeyup", "")
document.getElementById("phone").setAttribute("onkeydown", "storeNumber(this);selectResource(this);report(this);endChecker(event);callEmailer(event);changeFile(event);searcher(event);input3Note(event);next(event);applyKState(event);changeColor(event);compareAreaCodes(event); moveTask(event); uidCheck(); uidLength(this);goBack(event);")
document.getElementById("input3").setAttribute("onkeyup", "justWorkedChange(event);setUpNext(event);enderTime(event);enderTime2(event);")
document.getElementById("searchButton").setAttribute("onclick", "search()")
document.getElementById("downloadTable").setAttribute("onclick", "checkDataBNL2();")
document.getElementById("jW").setAttribute("onkeydown", "tranBackAN2(event);")
document.getElementById("aNumber").setAttribute("onkeyup", "showAccount(this);searcherPaste(event,this);starterTime(event);starterTime2(event);tranBack4(event);deceased(event);")
document.getElementById("aNumber").setAttribute("onkeydown", "showAccount(this);report(caller);chngAcc(event)")
document.getElementById("a8").setAttribute("onkeyup", "readyToCall(event);setUpNextCore(event);compareAreaCodes(event);")
document.getElementById("aNumber").focus();
fileJob.innerHTML = "CURRENT: ACCURINT ONLY SEARCH"
checkJob = 0;
placeGeneralInformation()
}


function coreSearchMode(){
	var fileJob = document.getElementById("fileJob");
document.getElementById("phone").setAttribute("onkeyup", "")
document.getElementById("phone").setAttribute("onchange", "endChecker(event)")
document.getElementById("phone").setAttribute("onkeydown", "storeNumber(this);selectResource(this);report(this);endChecker(event);callEmailer(event);changeFile(event);searcher(event);input2NoteCore(event);nextCore(event);applyKState(event);changeColor(event);compareAreaCodes(event); moveTask(event); uidCheck(); uidLength(this);goBack(event);")
document.getElementById("input3").setAttribute("onkeyup", "justWorkedChange(event);setUpNextCore(event);enderTime(event);enderTime2(event);")
document.getElementById("searchButton").setAttribute("onclick", "search()")
document.getElementById("downloadTable").setAttribute("onclick", "checkDataBNL2();")
document.getElementById("jW").setAttribute("onkeydown", "tranBackAN2(event);")
document.getElementById("aNumber").setAttribute("onkeydown", "showAccount(this);report(this);chngAcc(event);")
document.getElementById("aNumber").setAttribute("onkeyup", "showAccount(this);searcherPaste(event,this);starterTime(event);starterTime2(event);tranBack4(event);deceased(event);")
document.getElementById("a8").setAttribute("onkeyup", "readyToCallCore(event);setUpNextCore(event);compareAreaCodes(event);")
document.getElementById("aNumber").focus();
fileJob.innerHTML = "CURRENT: ACCURINT AND CORE SEARCH"
checkJob = 0;
placeGeneralInformation()
}
function noSheetRouter(incomer){
	incomerId = incomer.id;
	var jobIndicator = document.getElementById("jobIndicator")
		if(incomerId == "searchK"){
			jobIndicator.innerHTML = "KO STATE SKIP SEARCH"
			noSheetCore()
		}
		if(incomerId == "dialButton"){
			jobIndicator.innerHTML = "CALLING"
			noSheetDial()
		}
		if(incomerId == "accurintSearches"){
			jobIndicator.innerHTML = "NEW NUMBER SEARCH"
			noSheetAccurint()
		}
	}
function noSheetCore(){
	var fileJob = document.getElementById("fileJob");
	document.getElementById("phone").setAttribute("onkeyup", "")
	document.getElementById("phone").setAttribute("onchange", "endChecker(event)")
	document.getElementById("phone").setAttribute("onkeydown", "storeNumber(this);selectResource(this);report(this);endChecker(event);callEmailer(event);changeFile(event);input2NoteCore(event);nextCore(event);applyKState(event);changeColor(event);compareAreaCodes(event); moveTask(event); uidCheck(); uidLength(this);goBack(event);")
	document.getElementById("input3").setAttribute("onkeyup", "justWorkedChange(event);setUpNextCore(event);enderTime2(event);")
	document.getElementById("downloadTable").setAttribute("onclick", "checkDataBNL2();")
	document.getElementById("jW").setAttribute("onkeydown", "tranBackAN2(event);")
	document.getElementById("aNumber").setAttribute("onkeydown", "showAccount(this);report(this);")
	document.getElementById("aNumber").setAttribute("onkeyup", "showAccount(this);starterTime2(event);tranBack4(event);deceased(event);accToPhone(event);")
	document.getElementById("a8").setAttribute("onkeyup", "readyToCallCore(event);setUpNextCore(event);compareAreaCodes(event);")
	document.getElementById("aNumber").focus();
	fileJob.innerHTML = "CURRENT: KO STATE SKIP SEARCH"
	checkJob = 0;
}
function noSheetAccurint(){
	var fileJob = document.getElementById("fileJob");
	document.getElementById("phone").setAttribute("onkeyup", "")
	document.getElementById("phone").setAttribute("onkeydown", "storeNumber(this);selectResource(this);report(this);endChecker(event);callEmailer(event);changeFile(event);input3Note(event);next(event);applyKState(event);changeColor(event);compareAreaCodes(event); moveTask(event); uidCheck(); uidLength(this);goBack(event);")
	document.getElementById("input3").setAttribute("onkeyup", "justWorkedChange(event);setUpNext(event);enderTime2(event);")
	document.getElementById("downloadTable").setAttribute("onclick", "checkDataBNL2();")
	document.getElementById("jW").setAttribute("onkeydown", "tranBackAN2(event);")
	document.getElementById("aNumber").setAttribute("onkeyup", "showAccount(this);starterTime2(event);deceased(event);accToPhone(event);")
	document.getElementById("aNumber").setAttribute("onkeydown", "showAccount(this);report(caller);chngAcc(event)")
	document.getElementById("a8").setAttribute("onkeyup", "readyToCall(event);setUpNextCore(event);compareAreaCodes(event);")
	document.getElementById("aNumber").focus();
	fileJob.innerHTML = "CURRENT: NEW NUMBER SEARCH"
	checkJob = 0;
}
function noSheetDial(){
	var fileJob = document.getElementById("fileJob");
	document.getElementById("phone").setAttribute("onkeyup", "")
	document.getElementById("phone").setAttribute("onkeydown", "storeNumber(this);selectResource(this);report2(this);basicResultTransback2(event);changeFile(event);applyKState(event);changeColor(event);compareAreaCodes(event); moveTask(event); uidCheck(); uidLength(this);goBack(event);callEmailer(event);downloadReport(event);")
	document.getElementById("input3").setAttribute("onkeyup", "report2(this);storeRecord(event);useTodaysWorkBNL(event);titlePlaceBNL(event);tranBackAN(event);enderTime2(event);")
	document.getElementById("aNumber").setAttribute("onkeydown", "report2(this);chngAcc3(event);")
	document.getElementById("downloadTable").setAttribute("onclick", "downloadTableBNL2();")
	document.getElementById("aNumber").setAttribute("onkeyup", "showAccount(this);report2(this);starterTime2(event);accToPhone(event);")
	document.getElementById("aNumber").focus();
		var aNum = document.getElementById("aNumber");
		var bnPhone = document.getElementById("phone");
			compareAreaCodes(event);
			fileJob.innerHTML = "CURRENT: DIALING"
			checkJob = 0;
		}

/*function coreSearchMode(){
document.getElementById("aNumber").focus();
fileJob.innerHTML = "CURRENT: ACCURINT AND CORE SEARCH"
checkJob = 0;
placeGeneralInformation()
}*/

function coreSearchMode2(){
	var fileJob = document.getElementById("fileJob");
document.getElementById("phone").setAttribute("onkeyup", "")
document.getElementById("phone").setAttribute("onchange", "endChecker(event)")
document.getElementById("phone").setAttribute("onkeydown", "storeNumber(this);selectResource(this);report(this);endChecker(event);callEmailer(event);changeFile(event);searcher(event);input2NoteCore(event);nextCore(event);applyKState(event);changeColor(event);compareAreaCodes(event); moveTask(event); uidCheck(); uidLength(this);goBack(event);")
document.getElementById("input3").setAttribute("onkeyup", "justWorkedChange(event);setUpNextCore(event);")
document.getElementById("searchButton").setAttribute("onclick", "search()")
document.getElementById("downloadTable").setAttribute("onclick", "checkDataBNL2();")
document.getElementById("jW").setAttribute("onkeydown", "tranBackAN2(event);")
document.getElementById("aNumber").setAttribute("onkeydown", "showAccount(this);report(this);chngAcc(event);")
document.getElementById("aNumber").setAttribute("onkeyup", "showAccount(this);searcherPaste(event,this);starterTime(event);tranBack4(event);deceased(event);")
document.getElementById("a8").setAttribute("onkeyup", "readyToCallCore(event);setUpNextCore(event);compareAreaCodes(event);")
document.getElementById("aNumber").focus();
fileJob.innerHTML = "CURRENT: ACCURINT AND CORE SEARCH"
checkJob = 0;
placeGeneralInformation2()
}

var phoneNumberCounter = 0
var jobIndicator2 = document.getElementById("jobIndicator")
function useTodaysWork1Core(){
	phoner = document.getElementById("phone")
	aNumberer = document.getElementById("aNumber")
	kStater = document.getElementById("ckState")
	resulter = document.getElementById("result")
	/*phoner.value = data.data[phoneNumberCounter].phoneNumber;*/
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
		aNumberer.value = data.data[phoneNumberCounter]["Acct Num"];
	}
	document.getElementById("nkState").value = "";
	document.getElementById("basicResult").value = "";
	document.getElementById("resource").value = ""
	document.getElementById("input3").value = ""
	phoner.value = "";

	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
	if(typeof data.data[phoneNumberCounter]["CACS State"] !== "undefined"){
		kStater.value = data.data[phoneNumberCounter]["CACS State"];
	}
	}
	document.getElementById("phone").setAttribute("onkeydown", "callEmailer(event);changeFile(event);searcher(event);input2NoteCore(event);next(event);applyKState(event);changeColor(event);compareAreaCodes(event); moveTask(event); changeResource(event); uidCheck(); uidLength(this);goBack(event);")
	worked = 0
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
	document.getElementById("tot").innerHTML = "ACCOUNT: " + phoneNumberCounter + "   OF  " + data.data.length;
	}
	goodNumber = 0
	goodNumberType = ""
	goodNumberTime = ""
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
	}
function useTodaysWorkCore(event){
	if(document.getElementById("jobName").innerHTML
	!= "SKIP MANUAL DIAL"){
	phoner = document.getElementById("phone")
	aNumberer = document.getElementById("aNumber")
	resulter = document.getElementById("result")



	var x = event.keyCode;
	if (x == 13){
			/*phoner.value = data.data[phoneNumberCounter].phoneNumber;*/
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
				aNumberer.value = data.data[phoneNumberCounter]["Acct Num"];
			}
			document.getElementById("nkState").value = "";
			document.getElementById("basicResult").value = "";
			document.getElementById("resource").value = "";
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
			kStater.value = data.data[phoneNumberCounter]["CACS State"];
			}
			checkForStates()
		phoneNumberCounter++
		compareAreaCodes(event);
		if(phoneNumberCounter == data.data.length){
		phoneNumberCounter = 0
		checkTable()
		}
	}
	}
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
}
function useTodaysWork1Core2(){
	enderTime()
	phoner = document.getElementById("phone")
	aNumberer = document.getElementById("aNumber")
	kStater = document.getElementById("ckState")
	resulter = document.getElementById("result")
	/*phoner.value = data.data[phoneNumberCounter].phoneNumber;*/
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
		aNumberer.value = data.data[phoneNumberCounter]["LOAN NBR"];
	}
	document.getElementById("nkState").value = "";
	document.getElementById("basicResult").value = "";
	document.getElementById("resource").value = ""
	document.getElementById("input3").value = ""
	phoner.value = "";

	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
	if(typeof data.data[phoneNumberCounter]["CACS State"] !== "undefined"){
		kStater.value = data.data[phoneNumberCounter]["CACS State"];
	}
	}
	document.getElementById("phone").setAttribute("onkeydown", "storeNumber(this);selectResource(this);report(this);endChecker(event);callEmailer(event);changeFile(event);searcher(event);input2NoteCore(event);nextCore(event);applyKState(event);changeColor(event);compareAreaCodes(event); moveTask(event); uidCheck(); uidLength(this);goBack(event);")
	worked = 0
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
	document.getElementById("tot").innerHTML = "ACCOUNT: " + autoChanging() + ": " + phoneNumberCounter + "   OF  " + data.data.length;
	}
	starterTime();
	goodNumber = 0
	goodNumberType = ""
	goodNumberTime = ""
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
	}
function useTodaysWorkCore2(event){
	if(document.getElementById("jobName").innerHTML
	!= "SKIP MANUAL DIAL"){
	phoner = document.getElementById("phone")
	aNumberer = document.getElementById("aNumber")
	resulter = document.getElementById("result")



	var x = event.keyCode;
	if (x == 13){
			/*phoner.value = data.data[phoneNumberCounter].phoneNumber;*/
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
			aNumberer.value = data.data[phoneNumberCounter]["LOAN NBR"];
			}
			document.getElementById("nkState").value = "";
			document.getElementById("basicResult").value = "";
			document.getElementById("resource").value = "";
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
			kStater.value = data.data[phoneNumberCounter]["CACS State"];
			}
			checkForStates()
		phoneNumberCounter++
		compareAreaCodes(event);
	if(jobIndicator2.innerHTML == "NO JOB SELECTED"){
		if(phoneNumberCounter == data.data.length){
		phoneNumberCounter = 0
		checkTable()
		}
		}
	}
	}
	if(document.getElementById("kStateIndicator").innerHTML != "NO K STATE SELECTED"){
			document.getElementById("ckState").value = document.getElementById("kStateIndicator").innerHTML
			document.getElementById("nkState").value = document.getElementById("kStateIndicator").innerHTML
		}
}
function search(){
	var searchedAccount = document.getElementById("jW");
	var accountNum = document.getElementById("aNumber");
	var phNumber = document.getElementById("phone");
	for(i=0;i<data.data.length;i++){
		if(searchedAccount.value == data.data[i]["Acct Num"]){
			accountNum.value = data.data[i]["Acct Num"];
			var index = data.data[i]["Acct Num"];
			phoneNumberCounter = i;
			document.getElementById("tot").innerHTML = "ACCOUNT: " + (phoneNumberCounter+1) + "   OF  " + data.data.length
			if(typeof data.data[i]["CACS State"] !== "undefined"){
			document.getElementById("ckState").value = data.data[i]["CACS State"];
			}
			phNumber.focus()
		}
		}
	}
function search2(incomingId){
	if(incomingId=="aNumber"){
		var searchedAccount = document.getElementById("aNumber");
	}
	if(incomingId=="jW"){
		var searchedAccount = document.getElementById("jW");
	}
	var accountNum = document.getElementById("aNumber");
	var phNumber = document.getElementById("phone");
	for(i=0;i<data.data.length;i++){
		if((searchedAccount.value == data.data[i]["account"]) || (searchedAccount.value == data.data[i]["OV Phone"]) || (phNumber.value == data.data[i]["OV Phone"])){
			accountNum.value = data.data[i]["account"];
			phNumber.value = data.data[i]["OV Phone"];
			phoneNumberCounter = i;
			document.getElementById("tot").innerHTML = "ACCOUNT: " + (phoneNumberCounter) + "   OF  " + data.data.length
			phNumber.focus()
			}
		}
	for(i=0;i<data.data.length;i++){
		if(searchedAccount.value == data.data[i]["Acct Num"]){
			accountNum.value = data.data[i]["Acct Num"];
			phoneNumberCounter = i;
			document.getElementById("tot").innerHTML = "ACCOUNT: " + (phoneNumberCounter) + "   OF  " + data.data.length
			phNumber.focus()
			}
		}
	}



var acDisplay = document.getElementById("areacode");

//call this function to check the value in the phone input box
function compareAreaCodes(event){
var storedAreaCodes = sessionStorage.getItem("areaCodesTimeZones");
var areaCodesParsed = JSON.parse(storedAreaCodes);

var acp = areaCodesParsed;
var x = event.keyCode;
var phone = document.getElementById("phone");
var result = document.getElementById("result");
var basicresult = document.getElementById("basicResult");
var a = phone.value;
var b = a.slice(1, 4);
var g = phone.innerHTML;


var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();


	if(phone.value.length > 0){
		if(typeof acp !== null){
		for (var i = 0; i < acp.length; i++) {
			if(b == acp[i].areacode){
				acDisplay.innerHTML = "PH : " + a + " / TZ: " + acp[i].timezone;
				if(acp[i].timezone == "CST" && h < 9){
					alert("DO NOT CALL: OUT OF TIME ZONE");
					if(h > 7){
					acDisplay.innerHTML = "YOU HAVE: (" + (60 - m) + ") MINS TO CALL " + acp[i].timezone;
					g = phone + " DNC TZ " + acp[i].timezone;
					result.value = acp[i].timezone + " TZ CONFLICT";
					basicresult.value = acp[i].timezone + " TZ";
				}
					if(h < 7){
					acDisplay.innerHTML = "YOU HAVE: " +(17 - h) + " HR " + (60 - m) + " MINS TO CALL " + acp[i].timezone;
					g = phone + " DNC TZ " + acp[i].timezone;
					result.value = acp[i].timezone + " TZ CONFLICT";
					basicresult.value = acp[i].timezone + " TZ";
					}
					result.value = acp[i].timezone + " TZ CONFLICT";
					basicresult.value = acp[i].timezone + " TZ";
				}
				if(acp[i].timezone == "MST" && h < 10){
					alert("DO NOT CALL: OUT OF TIME ZONE");
					if(h > 8){
					acDisplay.innerHTML = "YOU HAVE: (" + (60 - m) + ") MINS TO CALL " + acp[i].timezone;
					g = phone + " DNC TZ " + acp[i].timezone;
					result.value = acp[i].timezone + " TZ CONFLICT";
					basicresult.value = acp[i].timezone + " TZ";
				}
					if(h < 8){
					acDisplay.innerHTML = "YOU HAVE: " +(17 - h) + " HR " + (60 - m) + " MINS TO CALL " + acp[i].timezone;
					g = phone + " DNC TZ " + acp[i].timezone;
					result.value = acp[i].timezone + " TZ CONFLICT";
					basicresult.value = acp[i].timezone + " TZ";

					}
					result.value = acp[i].timezone + " TZ CONFLICT";
					basicresult.value = acp[i].timezone + " TZ";
				}
				if(acp[i].timezone == "PST" && h < 11){
					alert("DO NOT CALL: OUT OF TIME ZONE");
					if(h > 9){
					acDisplay.innerHTML = "YOU HAVE: (" + (60 - m) + ") MINS TO CALL " + acp[i].timezone;
					g = phone + " DNC TZ " + acp[i].timezone;
					result.value = acp[i].timezone + " TZ CONFLICT";
					basicresult.value = acp[i].timezone + " TZ";
				}
					if(h < 9){
					acDisplay.innerHTML = "YOU HAVE: " +(17 - h) + " HR " + (60 - m) + " MINS TO CALL " + acp[i].timezone;
					g = phone + " DNC TZ " + acp[i].timezone;
					result.value = acp[i].timezone + " TZ CONFLICT";
					basicresult.value = acp[i].timezone + " TZ";
					}
					result.value = acp[i].timezone + " TZ CONFLICT";
					basicresult.value = acp[i].timezone + " TZ";
				}

			}
			}
		}
	}
	document.getElementById("phone").click();
}
/*
	if(x == 13){
for (i = 0; i < acp.length; i++) {
	if(b == acp[i].areacode){
		acDisplay.innerHTML = phone.value;
	}
	}
}
*/





var acDisplay = document.getElementById("areacode");

//call this function to check the value in the phone input box
function compareAreaCodes2(){
var storedAreaCodes = sessionStorage.getItem("areaCodesTimeZones");
var areaCodesParsed = JSON.parse(storedAreaCodes);

var acp = areaCodesParsed;
var phone = document.getElementById("phone");
var result = document.getElementById("result");
var basicresult = document.getElementById("basicResult");
var a = phone.value;
var b = a.slice(1, 4);
var g = phone.innerHTML;


var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();



	if(phone.value.length > 0){
		if(typeof acp !== null){
		for (var i = 0; i < acp.length; i++) {
			if(b == acp[i].areacode){
				acDisplay.innerHTML = "PH : " + a + " / TZ: " + acp[i].timezone;
				if(acp[i].timezone == "CST" && h < 9){
					alert("DO NOT CALL: OUT OF TIME ZONE");
					if(h > 7){
					acDisplay.innerHTML = "YOU HAVE: (" + (60 - m) + ") MINS TO CALL " + acp[i].timezone;
					g = phone + " DNC TZ " + acp[i].timezone;
					result.value = acp[i].timezone + " TZ CONFLICT";
					basicresult.value = acp[i].timezone + " TZ";
				}
					if(h < 7){
					acDisplay.innerHTML = "YOU HAVE: " +(17 - h) + " HR " + (60 - m) + " MINS TO CALL " + acp[i].timezone;
					g = phone + " DNC TZ " + acp[i].timezone;
					result.value = acp[i].timezone + " TZ CONFLICT";
					basicresult.value = acp[i].timezone + " TZ";
					}
					result.value = acp[i].timezone + " TZ CONFLICT";
					basicresult.value = acp[i].timezone + " TZ";
				}
				if(acp[i].timezone == "MST" && h < 10){
					alert("DO NOT CALL: OUT OF TIME ZONE");
					if(h > 8){
					acDisplay.innerHTML = "YOU HAVE: (" + (60 - m) + ") MINS TO CALL " + acp[i].timezone;
					g = phone + " DNC TZ " + acp[i].timezone;
					result.value = acp[i].timezone + " TZ CONFLICT";
					basicresult.value = acp[i].timezone + " TZ";
				}
					if(h < 8){
					acDisplay.innerHTML = "YOU HAVE: " +(17 - h) + " HR " + (60 - m) + " MINS TO CALL " + acp[i].timezone;
					g = phone + " DNC TZ " + acp[i].timezone;
					result.value = acp[i].timezone + " TZ CONFLICT";
					basicresult.value = acp[i].timezone + " TZ";

					}
					result.value = acp[i].timezone + " TZ CONFLICT";
					basicresult.value = acp[i].timezone + " TZ";
				}
				if(acp[i].timezone == "PST" && h < 11){
					alert("DO NOT CALL: OUT OF TIME ZONE");
					if(h > 9){
					acDisplay.innerHTML = "YOU HAVE: (" + (60 - m) + ") MINS TO CALL " + acp[i].timezone;
					g = phone + " DNC TZ " + acp[i].timezone;
					result.value = acp[i].timezone + " TZ CONFLICT";
					basicresult.value = acp[i].timezone + " TZ";
				}
					if(h < 9){
					acDisplay.innerHTML = "YOU HAVE: " +(17 - h) + " HR " + (60 - m) + " MINS TO CALL " + acp[i].timezone;
					g = phone + " DNC TZ " + acp[i].timezone;
					result.value = acp[i].timezone + " TZ CONFLICT";
					basicresult.value = acp[i].timezone + " TZ";
					}
					result.value = acp[i].timezone + " TZ CONFLICT";
					basicresult.value = acp[i].timezone + " TZ";
				}

			}

		}
	}
	}
		document.getElementById("phone").click();

}
  function chngAcc(event){
	var aNum = document.getElementById("aNumber");
	var kS = document.getElementById("ckState");
	var bR = document.getElementById("basicResult");
	var r = document.getElementById("result");
	var re = document.getElementById("resource");
	var phph = document.getElementById("phone");
	var kS2 = document.getElementById("nkState");
	var y = event.keyCode;


if (y == 37){
	phoneNumberCounter--
	aNum.value = ""
	kS.value = ""
	if(phoneNumberCounter == -1){
		phoneNumberCounter = (data.data.length-1);
	}
	aNum.value = data.data[phoneNumberCounter]["Acct Num"];
	if(typeof data.data[phoneNumberCounter]["CACS State"] !== "undefined"){
		kS.value = data.data[phoneNumberCounter]["CACS State"];
	}
	checkForStates()
	compareAreaCodes(event);
	document.getElementById("tot").innerHTML = "ACCOUNT: " + autoChanging() + ": " + (phoneNumberCounter+1) + "   OF  " + data.data.length;
	showAccount(aNum);
	goodNumber = 0
	goodNumberType = ""
	goodNumberTime = ""
}




	if (y == 39){
	phoneNumberCounter++
	aNum.value = ""
	kS.value = ""
	bR.value = ""
	r.value = ""
	re.value = ""
	phph.value = ""
	kS2.value = ""
	if(phoneNumberCounter == data.data.length){
		phoneNumberCounter = 0;
	}
aNum.value = data.data[phoneNumberCounter]["Acct Num"];
	if(typeof data.data[phoneNumberCounter]["CACS State"] !== "undefined"){
		kS.value = data.data[phoneNumberCounter]["CACS State"];
	}
	checkForStates()
	compareAreaCodes(event);
	document.getElementById("tot").innerHTML = "ACCOUNT: " + autoChanging() + ": " + (phoneNumberCounter+1) + "   OF  " + data.data.length;
	showAccount(aNum);
	goodNumber = 0
	goodNumberType = ""
	goodNumberTime = ""
}

placeGeneralInformation()

}
/////////////////////////////////////////////////////////////////////////////////////////
function areaCodesTimeZonesPlacerFunction(){
var areaCodesTimeZonesPlacer = [{"areacode":"201","timezone":"EST"},
{"areacode":"202","timezone":"EST"},
{"areacode":"203","timezone":"EST"},
{"areacode":"205","timezone":"CST"},
{"areacode":"206","timezone":"PST"},
{"areacode":"207","timezone":"EST"},
{"areacode":"208","timezone":"MST"},
{"areacode":"209","timezone":"PST"},
{"areacode":"210","timezone":"CST"},
{"areacode":"212","timezone":"EST"},
{"areacode":"213","timezone":"PST"},
{"areacode":"214","timezone":"CST"},
{"areacode":"215","timezone":"EST"},
{"areacode":"216","timezone":"EST"},
{"areacode":"217","timezone":"CST"},
{"areacode":"218","timezone":"CST"},
{"areacode":"219","timezone":"CST"},
{"areacode":"220","timezone":"EST"},
{"areacode":"224","timezone":"CST"},
{"areacode":"225","timezone":"CST"},
{"areacode":"228","timezone":"CST"},
{"areacode":"229","timezone":"EST"},
{"areacode":"231","timezone":"EST"},
{"areacode":"234","timezone":"EST"},
{"areacode":"239","timezone":"EST"},
{"areacode":"240","timezone":"EST"},
{"areacode":"248","timezone":"EST"},
{"areacode":"251","timezone":"CST"},
{"areacode":"252","timezone":"EST"},
{"areacode":"253","timezone":"PST"},
{"areacode":"254","timezone":"CST"},
{"areacode":"256","timezone":"CST"},
{"areacode":"260","timezone":"EST"},
{"areacode":"262","timezone":"CST"},
{"areacode":"267","timezone":"EST"},
{"areacode":"269","timezone":"EST"},
{"areacode":"270","timezone":"CST"},
{"areacode":"272","timezone":"EST"},
{"areacode":"276","timezone":"EST"},
{"areacode":"281","timezone":"CST"},
{"areacode":"301","timezone":"EST"},
{"areacode":"302","timezone":"EST"},
{"areacode":"303","timezone":"MST"},
{"areacode":"304","timezone":"EST"},
{"areacode":"305","timezone":"EST"},
{"areacode":"307","timezone":"MST"},
{"areacode":"308","timezone":"CST"},
{"areacode":"309","timezone":"CST"},
{"areacode":"310","timezone":"PST"},
{"areacode":"312","timezone":"CST"},
{"areacode":"313","timezone":"EST"},
{"areacode":"314","timezone":"CST"},
{"areacode":"315","timezone":"EST"},
{"areacode":"316","timezone":"CST"},
{"areacode":"317","timezone":"EST"},
{"areacode":"318","timezone":"CST"},
{"areacode":"319","timezone":"CST"},
{"areacode":"320","timezone":"CST"},
{"areacode":"321","timezone":"EST"},
{"areacode":"323","timezone":"PST"},
{"areacode":"325","timezone":"CST"},
{"areacode":"330","timezone":"EST"},
{"areacode":"331","timezone":"CST"},
{"areacode":"332","timezone":"EST"},
{"areacode":"334","timezone":"CST"},
{"areacode":"336","timezone":"EST"},
{"areacode":"337","timezone":"CST"},
{"areacode":"339","timezone":"EST"},
{"areacode":"346","timezone":"CST"},
{"areacode":"347","timezone":"EST"},
{"areacode":"351","timezone":"EST"},
{"areacode":"352","timezone":"EST"},
{"areacode":"360","timezone":"PST"},
{"areacode":"361","timezone":"CST"},
{"areacode":"364","timezone":"CST"},
{"areacode":"380","timezone":"EST"},
{"areacode":"385","timezone":"MST"},
{"areacode":"386","timezone":"EST"},
{"areacode":"401","timezone":"EST"},
{"areacode":"402","timezone":"CST"},
{"areacode":"404","timezone":"EST"},
{"areacode":"405","timezone":"CST"},
{"areacode":"406","timezone":"MST"},
{"areacode":"407","timezone":"EST"},
{"areacode":"408","timezone":"PST"},
{"areacode":"409","timezone":"CST"},
{"areacode":"410","timezone":"EST"},
{"areacode":"412","timezone":"EST"},
{"areacode":"413","timezone":"EST"},
{"areacode":"414","timezone":"CST"},
{"areacode":"415","timezone":"PST"},
{"areacode":"417","timezone":"CST"},
{"areacode":"419","timezone":"EST"},
{"areacode":"423","timezone":"EST"},
{"areacode":"424","timezone":"PST"},
{"areacode":"425","timezone":"PST"},
{"areacode":"430","timezone":"CST"},
{"areacode":"432","timezone":"CST"},
{"areacode":"434","timezone":"EST"},
{"areacode":"435","timezone":"MST"},
{"areacode":"440","timezone":"EST"},
{"areacode":"442","timezone":"PST"},
{"areacode":"443","timezone":"EST"},
{"areacode":"456","timezone":"area code not available"},
{"areacode":"458","timezone":"PST"},
{"areacode":"463","timezone":"EST"},
{"areacode":"469","timezone":"CST"},
{"areacode":"470","timezone":"EST"},
{"areacode":"475","timezone":"EST"},
{"areacode":"478","timezone":"EST"},
{"areacode":"479","timezone":"CST"},
{"areacode":"480","timezone":"MST"},
{"areacode":"484","timezone":"EST"},
{"areacode":"500","timezone":"area code not available"},
{"areacode":"501","timezone":"CST"},
{"areacode":"502","timezone":"EST"},
{"areacode":"503","timezone":"PST"},
{"areacode":"504","timezone":"CST"},
{"areacode":"505","timezone":"MST"},
{"areacode":"507","timezone":"CST"},
{"areacode":"508","timezone":"EST"},
{"areacode":"509","timezone":"PST"},
{"areacode":"510","timezone":"PST"},
{"areacode":"512","timezone":"CST"},
{"areacode":"513","timezone":"EST"},
{"areacode":"515","timezone":"CST"},
{"areacode":"516","timezone":"EST"},
{"areacode":"517","timezone":"EST"},
{"areacode":"518","timezone":"EST"},
{"areacode":"520","timezone":"MST"},
{"areacode":"522","timezone":"area code not available"},
{"areacode":"530","timezone":"PST"},
{"areacode":"531","timezone":"CST"},
{"areacode":"533","timezone":"area code not available"},
{"areacode":"534","timezone":"CST"},
{"areacode":"539","timezone":"CST"},
{"areacode":"540","timezone":"EST"},
{"areacode":"541","timezone":"PST"},
{"areacode":"544","timezone":"area code not available"},
{"areacode":"551","timezone":"EST"},
{"areacode":"559","timezone":"PST"},
{"areacode":"561","timezone":"EST"},
{"areacode":"562","timezone":"PST"},
{"areacode":"563","timezone":"CST"},
{"areacode":"566","timezone":"area code not available"},
{"areacode":"567","timezone":"EST"},
{"areacode":"570","timezone":"EST"},
{"areacode":"571","timezone":"EST"},
{"areacode":"573","timezone":"CST"},
{"areacode":"574","timezone":"EST"},
{"areacode":"575","timezone":"MST"},
{"areacode":"580","timezone":"CST"},
{"areacode":"585","timezone":"EST"},
{"areacode":"586","timezone":"EST"},
{"areacode":"588","timezone":"area code not available"},
{"areacode":"601","timezone":"CST"},
{"areacode":"602","timezone":"MST"},
{"areacode":"603","timezone":"EST"},
{"areacode":"605","timezone":"CST"},
{"areacode":"606","timezone":"EST"},
{"areacode":"607","timezone":"EST"},
{"areacode":"608","timezone":"CST"},
{"areacode":"609","timezone":"EST"},
{"areacode":"610","timezone":"EST"},
{"areacode":"611","timezone":"area code not available"},
{"areacode":"612","timezone":"CST"},
{"areacode":"614","timezone":"EST"},
{"areacode":"615","timezone":"CST"},
{"areacode":"616","timezone":"EST"},
{"areacode":"617","timezone":"EST"},
{"areacode":"618","timezone":"CST"},
{"areacode":"619","timezone":"PST"},
{"areacode":"620","timezone":"CST"},
{"areacode":"623","timezone":"MST"},
{"areacode":"626","timezone":"PST"},
{"areacode":"628","timezone":"PST"},
{"areacode":"629","timezone":"CST"},
{"areacode":"630","timezone":"CST"},
{"areacode":"631","timezone":"EST"},
{"areacode":"636","timezone":"CST"},
{"areacode":"641","timezone":"CST"},
{"areacode":"646","timezone":"EST"},
{"areacode":"650","timezone":"PST"},
{"areacode":"651","timezone":"CST"},
{"areacode":"657","timezone":"PST"},
{"areacode":"660","timezone":"CST"},
{"areacode":"661","timezone":"PST"},
{"areacode":"662","timezone":"CST"},
{"areacode":"667","timezone":"EST"},
{"areacode":"669","timezone":"PST"},
{"areacode":"678","timezone":"EST"},
{"areacode":"680","timezone":"EST"},
{"areacode":"681","timezone":"EST"},
{"areacode":"682","timezone":"CST"},
{"areacode":"700","timezone":"area code not available"},
{"areacode":"701","timezone":"CST"},
{"areacode":"702","timezone":"PST"},
{"areacode":"703","timezone":"EST"},
{"areacode":"704","timezone":"EST"},
{"areacode":"706","timezone":"EST"},
{"areacode":"707","timezone":"PST"},
{"areacode":"708","timezone":"CST"},
{"areacode":"710","timezone":"area code not available"},
{"areacode":"712","timezone":"CST"},
{"areacode":"713","timezone":"CST"},
{"areacode":"714","timezone":"PST"},
{"areacode":"715","timezone":"CST"},
{"areacode":"716","timezone":"EST"},
{"areacode":"717","timezone":"EST"},
{"areacode":"718","timezone":"EST"},
{"areacode":"719","timezone":"MST"},
{"areacode":"720","timezone":"MST"},
{"areacode":"724","timezone":"EST"},
{"areacode":"725","timezone":"PST"},
{"areacode":"727","timezone":"EST"},
{"areacode":"731","timezone":"CST"},
{"areacode":"732","timezone":"EST"},
{"areacode":"734","timezone":"EST"},
{"areacode":"737","timezone":"CST"},
{"areacode":"740","timezone":"EST"},
{"areacode":"743","timezone":"EST"},
{"areacode":"747","timezone":"PST"},
{"areacode":"754","timezone":"EST"},
{"areacode":"757","timezone":"EST"},
{"areacode":"760","timezone":"PST"},
{"areacode":"762","timezone":"EST"},
{"areacode":"763","timezone":"CST"},
{"areacode":"765","timezone":"EST"},
{"areacode":"769","timezone":"CST"},
{"areacode":"770","timezone":"EST"},
{"areacode":"772","timezone":"EST"},
{"areacode":"773","timezone":"CST"},
{"areacode":"774","timezone":"EST"},
{"areacode":"775","timezone":"PST"},
{"areacode":"779","timezone":"CST"},
{"areacode":"781","timezone":"EST"},
{"areacode":"785","timezone":"CST"},
{"areacode":"786","timezone":"EST"},
{"areacode":"800","timezone":"area code not available"},
{"areacode":"801","timezone":"MST"},
{"areacode":"802","timezone":"EST"},
{"areacode":"803","timezone":"EST"},
{"areacode":"804","timezone":"EST"},
{"areacode":"805","timezone":"PST"},
{"areacode":"806","timezone":"CST"},
{"areacode":"808","timezone":"HAST"},
{"areacode":"809","timezone":"AST"},
{"areacode":"810","timezone":"EST"},
{"areacode":"812","timezone":"EST"},
{"areacode":"813","timezone":"EST"},
{"areacode":"814","timezone":"EST"},
{"areacode":"815","timezone":"CST"},
{"areacode":"816","timezone":"CST"},
{"areacode":"817","timezone":"CST"},
{"areacode":"818","timezone":"PST"},
{"areacode":"828","timezone":"EST"},
{"areacode":"830","timezone":"CST"},
{"areacode":"831","timezone":"PST"},
{"areacode":"832","timezone":"CST"},
{"areacode":"833","timezone":"area code not available"},
{"areacode":"843","timezone":"EST"},
{"areacode":"844","timezone":"area code not available"},
{"areacode":"845","timezone":"EST"},
{"areacode":"847","timezone":"CST"},
{"areacode":"848","timezone":"EST"},
{"areacode":"850","timezone":"CST"},
{"areacode":"854","timezone":"EST"},
{"areacode":"855","timezone":"area code not available"},
{"areacode":"856","timezone":"EST"},
{"areacode":"857","timezone":"EST"},
{"areacode":"858","timezone":"PST"},
{"areacode":"859","timezone":"EST"},
{"areacode":"860","timezone":"EST"},
{"areacode":"862","timezone":"EST"},
{"areacode":"863","timezone":"EST"},
{"areacode":"864","timezone":"EST"},
{"areacode":"865","timezone":"EST"},
{"areacode":"866","timezone":"area code not available"},
{"areacode":"870","timezone":"CST"},
{"areacode":"872","timezone":"CST"},
{"areacode":"877","timezone":"area code not available"},
{"areacode":"878","timezone":"EST"},
{"areacode":"880","timezone":"area code not available"},
{"areacode":"881","timezone":"area code not available"},
{"areacode":"888","timezone":"area code not available"},
{"areacode":"900","timezone":"area code not available"},
{"areacode":"901","timezone":"CST"},
{"areacode":"903","timezone":"CST"},
{"areacode":"904","timezone":"EST"},
{"areacode":"906","timezone":"EST"},
{"areacode":"907","timezone":"AKST"},
{"areacode":"908","timezone":"EST"},
{"areacode":"909","timezone":"PST"},
{"areacode":"910","timezone":"EST"},
{"areacode":"912","timezone":"EST"},
{"areacode":"913","timezone":"CST"},
{"areacode":"914","timezone":"EST"},
{"areacode":"915","timezone":"MST"},
{"areacode":"916","timezone":"PST"},
{"areacode":"917","timezone":"EST"},
{"areacode":"918","timezone":"CST"},
{"areacode":"919","timezone":"EST"},
{"areacode":"920","timezone":"CST"},
{"areacode":"925","timezone":"PST"},
{"areacode":"928","timezone":"MST"},
{"areacode":"929","timezone":"EST"},
{"areacode":"930","timezone":"EST"},
{"areacode":"931","timezone":"CST"},
{"areacode":"934","timezone":"EST"},
{"areacode":"936","timezone":"CST"},
{"areacode":"937","timezone":"EST"},
{"areacode":"938","timezone":"CST"},
{"areacode":"940","timezone":"CST"},
{"areacode":"941","timezone":"EST"},
{"areacode":"947","timezone":"EST"},
{"areacode":"949","timezone":"PST"},
{"areacode":"951","timezone":"PST"},
{"areacode":"952","timezone":"CST"},
{"areacode":"954","timezone":"EST"},
{"areacode":"956","timezone":"CST"},
{"areacode":"959","timezone":"EST"},
{"areacode":"970","timezone":"MST"},
{"areacode":"971","timezone":"PST"},
{"areacode":"972","timezone":"CST"},
{"areacode":"973","timezone":"EST"},
{"areacode":"978","timezone":"EST"},
{"areacode":"979","timezone":"CST"},
{"areacode":"980","timezone":"EST"},
{"areacode":"984","timezone":"EST"},
{"areacode":"985","timezone":"CST"},
{"areacode":"989","timezone":"EST"}]
sessionStorage.setItem("areaCodesTimeZones", JSON.stringify(areaCodesTimeZonesPlacer));
}
window.onload = function() {
    areaCodesTimeZonesPlacerFunction()
};
