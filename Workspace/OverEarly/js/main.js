
 
window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName === "back") {
			try {
			    tizen.application.getCurrentApplication().exit();
			} catch (ignore) {
			}
		}
	});
    
 // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName === "back") {
			try {
			    tizen.application.getCurrentApplication().exit();
			} catch (ignore) {
				
			}
		}
	});

    var firstHorn= new Date().getTime();
    var startLength = 1;
    var startLengthInMilli = startLength*60*1000 + 1000;
    var textbox = document.querySelector('.contents');
    let startSequence = false;
    
    textbox.addEventListener("click", function(){
    	var firstHorn= new Date().getTime();
    	startSequence = true;
    	console.log("Hey there, Looks like samsung knows something...")
    	//var box = document.querySelector('#textbox');
    	//box.innerHTML = (box.innerHTML === "Basic") ? "Sample" : "Basic";
    	
    });
    
    
    
    setInterval(function() {
    		if(startSequence){
    			if(true){
    				var lastHorn = firstHorn + startLengthInMilli;
    			}
    			  var currentTime = new Date().getTime();

    	    	  var timeLeft =   lastHorn - currentTime;
    	    	  
    	    	  var minutes = Math.floor((timeLeft % (1000 * 360)) / (60000));
    	    	  var seconds = Math.floor( (timeLeft % (1000 * 60))  / 1000);

    	    	  document.getElementById("Timer").innerHTML = + minutes + "m " + seconds + "s ";

    	    	  if (timeLeft <= 0) {
    	    	    document.getElementById("Timer").innerHTML = "GO!";
    	    	  }
    		}else{
    			document.getElementById("Timer").innerHTML = "Tap on First Horn!";
    			
    		}
    	  
    	}, 100);
    
    
};

