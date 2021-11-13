

(function(){

    var hamburger = {
        navToggle: document.querySelector('.nav-toggle'),
        nav: document.querySelector('nav'),

        doToggle: function(e){
            e.preventDefault();
            this.navToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
        }   
     };

     hamburger.navToggle.addEventListener('click', function (e) {
         ha$mburger.doToggle(e);
     });
    }());

    "use strict";

function validateForm () {
    var status = true;
    
   

return status;
}