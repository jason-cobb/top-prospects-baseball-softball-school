

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
         hamburger.doToggle(e);
     });
    }());

    "use strict";

function validateForm () {
    var status = true;
    var x;
    var i;
    //test for name requirement
    x = document.forms.myForm.name.value;

    if (x===null || x==="") {
        status=false;
         document.getElementById('fullName').className = "error";
  
    }
    x = document.forms.myForm.phone.value;
    x = x.replace(/-/g,'');
    document.forms.myForm.phone.value = x;
    if (x.length < 10|| x.length > 15) {
        status=false;
         document.getElementById('phoneNumber').className = "error";
    }
      
    if(status === false) {
        document.getElementById('formProblems').className = "error";
    }

    //skill eval type needs selection
    var foundChecked = false;
    x = document.getElementsByName('skillEval');

    for(i=0; i < x.length; i++ ) {
if(x [i].checked) {
    foundChecked = true;
    break;
    } // end if

}//end for loop

if (foundChecked === false) {
    status=false;
     document.getElementById('evalType').className = "error";
}
    

    return status;
}