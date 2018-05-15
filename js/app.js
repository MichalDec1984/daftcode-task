
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
	var hamburgerMenu = document.querySelector(".rwd_menu");
	var menu = document.querySelector(".menu");
  	console.log(menu);
  	var closeButton = document.querySelector(".closebtn");
  	var icon = document.querySelector(".icon");
	function test_match_media_with_listener(){
		var mq = window.matchMedia("(max-width:768px)");
		mq.addListener(WidthChange);
		WidthChange(mq);
		function WidthChange(mediaQuery) {
				if (mediaQuery.matches) {
					menu.classList.add("hidden");
					hamburgerMenu.classList.remove("hidden");
				} 
				else {
					menu.classList.remove("hidden");
					hamburgerMenu.classList.add("hidden");
			}
		}
	}
	test_match_media_with_listener();
	hamburgerMenu.addEventListener("click", function() {
		document.getElementById("myNav").style.width = "100%";
    	document.querySelector(".overlay-content").style.display  = "block";

	});
    closeButton.addEventListener("click", function() {
      	document.getElementById("myNav").style.width = "0";
      	document.querySelector(".overlay-content").style.display  = "none";
	});  
});


	