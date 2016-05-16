;(function($) {

	var getCursorPos = function(t){
		if (document.selection) {
            t.focus();
            var ds = document.selection;
            var range = ds.createRange();
            var stored_range = range.duplicate();
            stored_range.moveToElementText(t);
            stored_range.setEndPoint("EndToEnd", range);
            t.selectionStart = stored_range.text.length - range.text.length;
            t.selectionEnd = t.selectionStart + range.text.length;
            return t.selectionStart;
        } else {
        	return t.selectionStart;
        }
	};

    $.fn.numSoundSuper = function(obj,callback) {
        return this.each(function() {  
            //缓存以前的值  
            $.data(this,'originVal', $(this).val());  
            //console.log($.data(this,'originVal'));
  
            //event  
            $(this).on('keyup paste', function(e) {
            	
                var originVal = $.data(this,'originVal');  
                var currentVal = $(this).val();
  
                if (originVal !== currentVal) {  
                    
                    $.data(this,'originVal', $(this).val());
                    callback(originVal,currentVal);  
                    if(e.keyCode !== 8){
                    	if(currentVal.length <= originVal.length){
                    		return false;
                    	}
                    	switch(parseInt(currentVal.substr(getCursorPos($(this).get(0))-1,1))){
							case 0:
								obj[0].play();
								break;
							case 1:
								obj[1].play();
								break;
							case 2:
								obj[2].play();
								break;
							case 3:
								obj[3].play();
								break;
							case 4:
								obj[4].play();
								break;
							case 5:
								obj[5].play();
								break;
							case 6:
								obj[6].play();
								break;
							case 7:
								obj[7].play();
								break;
							case 8:
								obj[8].play();
								break;
							case 9:
								obj[9].play();
								break;
						}
	            	}
                }  
            });  
        });  
    }  
})(jQuery);  