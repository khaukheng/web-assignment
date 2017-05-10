$(document).ready(function(){
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // Get the modal
  var modal = document.getElementById('myModal');
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
      
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  //The first two statement slide in
    $(".fastanim").each(function(){
          $(this).addClass("slide1");  
    });

  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide1");
        }
    });
  });



})
    //(document.getElementsByClassName("page")).click(locateMe());

    function locateMe(){
      var loc = location.pathname.substring(location.pathname.lastIndexOf("/")+1);
      switch(loc){
        case "index.html":
          checkCookie(1);
          break;
        case "page2.html":
          checkCookie(2);
          break;
        case "page3.html":
          checkCookie(3);
          break;
        case "page4.html":
          checkCookie(4);
          break;
        case "page5.html":
          checkCookie(5);
          break;
        case "page6.html":
          checkCookie(6);
          break;
        case "page7.html":
          checkCookie(7);
          break;
        case "default":
          alert("No Such page exist");
          break;
      }
    }

    function setCookie(cname,cvalue,exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*60*60*1000));//exdays= number of hours for cookie to be expires
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) { 
      var name = cname + "="; 
      var decodedCookie =decodeURIComponent(document.cookie); 
      var ca = decodedCookie.split(';');
      for(var i = 0; i < ca.length; i++) { 
        var c = ca[i]; 
        while (c.charAt(0) ==' ') { 
          c = c.substring(1); 
        } 
        if (c.indexOf(name) == 0) { 
          return c.substring(name.length, c.length); 
        } 
      } 
      return ""; 
    }

    function checkCookie(level) {
        var prior = getCookie("currentlevel");
        if(prior != ""){
          if(level>prior){
            setCookie("currentlevel",level,0.5);
          }
        }else{
          setCookie("currentlevel",level,0.5);
        }
        
    };

    function checkcurrentlevel(){
        var level=parseInt(getCookie("currentlevel"));
        alert(level);
        for (var i = level + 1; i >= 0; i--) {
            if(i>=8){continue;}
            var ID = "p"+i;
            document.getElementById(ID).classList.remove("unable");
        }
        for (var j = level + 1; j <=7 ; j++) {
            var ID2 = "pa"+j;
            var ID3 = "pb"+j;
            alert(ID2);
            alert(ID3);
            document.getElementById(ID2).removeAttribute('href');
            document.getElementById(ID3).removeAttribute('href');
        }
    }

    //document.getElementById("p2").removeAttribute('href');
/*
$(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide1");
        }
    });
  });
  */