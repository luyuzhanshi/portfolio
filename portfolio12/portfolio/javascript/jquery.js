  $(document).ready(function(){
     $("#banner").click(function(){
        $(this).animate({height: '10%'}, "slow")
        $('#profilePicture').animate({width: '0%'}, "slow")
        $('#enterWords').animate({width: '100%'}, "slow").html('Bryan Adams  Portfolio')
    });
     $("#skipTraceAppOverlay").mouseenter(function(){
        $('#skipTraceCode').animate({width: '20%'}, "fast").html('Click to download the Note Taker code')
        $('#skipTrace2').animate({width: '80%'}, "fast").html('This application was built with Vanilla Javascript, HTML, CSS.  Click to see application.')
        $('#skipTrace2information').animate({width: '0%'}, "fast").html('')
    });
    $("#skipTraceAppOverlay").mouseleave(function(){
       $('#skipTrace2').animate({width: '0%'}, "fast").html('')
       $('#skipTraceCode').animate({width: '0%'}, "fast").html('')
       $("#skipTrace2information").animate({width: '100%'}, "fast").html('Note Taker')
   });
   $("#spreadSheetEditorOverlay").mouseenter(function(){
      $('#spreadSheetEditorCode').animate({width: '20%', height: '100%'}, "fast").html('Click to download the Spreadsheet Editor code')
      $('#spreadSheetEditor').animate({width: '80%'}, "fast").html('This application was built with React, Vanilla Javascript, HTML, CSS.  Click to see application.')
      $('#spreadSheetEditorinformation').animate({width: '0%'}, "fast").html('')
    });
    $("#spreadSheetEditorOverlay").mouseleave(function(){
       $('#spreadSheetEditor').animate({width: '0%'}, "fast").html('')
       $('#spreadSheetEditorCode').animate({width: '0%'}, "fast").html('')
       $("#spreadSheetEditorinformation").animate({width: '100%'}, "fast").html('Spreadsheet Editor')
   });
   $("#budgetorOverlay").mouseenter(function(){
      $('#budgetorCode').animate({width: '20%'}, "fast").html('Click to download the Budgetor code')
      $('#budgetor').animate({width: '80%'}, "fast").html('This application was built with React, ReactBootstrap, Vanilla Javascript, HTML, CSS.  Click to see application.')
      $('#budgetorinformation').animate({width: '0%'}, "fast").html('')
    });
    $("#budgetorOverlay").mouseleave(function(){
       $('#budgetor').animate({width: '0%'}, "fast").html('')
       $('#budgetorCode').animate({width: '0%'}, "fast").html('')
       $("#budgetorinformation").animate({width: '100%'}, "fast").html('Budgetor')
   });
   $("#budgetorPrototypeOverlay").mouseenter(function(){
      $('#budgetorPrototypeCode').animate({width: '20%'}, "fast").html('Click to download the Budgetor Prototype code')
      $('#budgetorPrototype').animate({width: '80%'}, "fast").html('This application was built with Built with Vanilla Javascript, HTML, CSS.  Click to see application.')
      $('#budgetorPrototypeinformation').animate({width: '0%'}, "fast").html('')
    });
    $("#budgetorPrototypeOverlay").mouseleave(function(){
       $('#budgetorPrototype').animate({width: '0%'}, "fast").html('')
       $('#budgetorPrototypeCode').animate({width: '0%'}, "fast").html('')
       $("#budgetorPrototypeinformation").animate({width: '100%'}, "fast").html('Budgetor Prototype')
   });
   $("#calculatorOverlay").mouseenter(function(){
      $('#calculatorCode').animate({width: '20%'}, "fast").html('Click to download the Calculator code')
      $('#calculator').animate({width: '80%'}, "fast").html('This application was built with Vanilla Javascript, HTML, CSS, includes tests to express a knowledge of Test Driven Development.  Click to see application.')
      $('#calculatorinformation').animate({width: '0%'}, "fast").html('')
    });
    $("#calculatorOverlay").mouseleave(function(){
       $('#calculator').animate({width: '0%'}, "fast").html('')
       $('#calculatorCode').animate({width: '0%'}, "fast").html('')
       $("#calculatorinformation").animate({width: '100%'}, "fast").html('Calculator')
   });
   $("#emailNotesOverlay").mouseenter(function(){
      $('#emailNotesCode').animate({width: '20%'}, "fast").html('Click to download the Note Emailer code')
      $('#emailNotes').animate({width: '80%'}, "fast").html('This application was built with Vanilla Javascript, HTML, CSS.  Click to see application.')
      $('#emailNotesinformation').animate({width: '0%'}, "fast").html('')
    });
    $("#emailNotesOverlay").mouseleave(function(){
       $('#emailNotes').animate({width: '0%'}, "fast").html('')
       $('#emailNotesCode').animate({width: '0%'}, "fast").html('')
       $("#emailNotesinformation").animate({width: '100%'}, "fast").html('Note Emailer')
   });
   $("#sitePrototypeOverlay").mouseenter(function(){
      $('#sitePrototypeCode').animate({width: '20%'}, "fast").html('Click to download the Site Prototype code')
      $('#sitePrototype').animate({width: '80%'}, "fast").html('This application was built with Backbone, React, Vanilla Javascript, HTML, CSS.  Click to see application.')
      $('#sitePrototypeinformation').animate({width: '0%'}, "fast").html('')
    });
    $("#sitePrototypeOverlay").mouseleave(function(){
       $('#sitePrototype').animate({width: '0%'}, "fast").html('')
       $('#sitePrototypeCode').animate({width: '0%'}, "fast").html('')
       $("#sitePrototypeinformation").animate({width: '100%'}, "fast").html('Site Prototype')
   });
   $("#resumeOverlay").mouseenter(function(){
      $('#proResume').animate({height: '100%'}, "fast").html('Click to see resume')
    });
    $("#resumeOverlay").mouseleave(function(){
       $('#proResume').animate({height: '0%'}, "fast").html('Resume')
   });
  });
