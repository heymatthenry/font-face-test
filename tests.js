  $(window).load(function(){
    var testRunner = {
      testWidth: function($el){ // Make sure the element does NOT have the same width as the unstyled one
        var control = $('#control');
        var elWidth = $el.width();
        $("<p>Width: " + elWidth + "px</p>").insertAfter($el);
        return control.width() < elWidth;
      },
      testFont: function($el){ // Test if the element says it has applied the font
        var fontFamily = "";
        if (window.getComputedStyle){ // w3c version
          fontFamily = window.getComputedStyle($el[0],"").getPropertyValue("font-family");
        } else {
          //TODO: flesh out the tests for IE & WinMo
          fontFamily = $el[0].currentStyle[fontFamily];
        }
        $("<p>font-family: " + fontFamily + "</p>").insertAfter($el);
        return fontFamily.match("ChunkFive") != null;
      },
      init: function($el){
        var $na = $("#control, #Cufon, #sIFR");
        $na.parents(".testCase").addClass('NA')
        var result = this.testWidth($el) && this.testFont($el) ? "pass" : "fail";        
        $el.parents(".testCase").addClass(result);
      }
    }
    
    $('span:not(#control, #Cufon, #sIFR)').each(function(){
      testRunner.init($(this));
    })
  })
