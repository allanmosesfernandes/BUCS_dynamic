<script>
    window.studentLinkText = "Students Click Here to Login";
    window.guestLinkText = "Staff & Guests Enter your email to Login or Register";
    // window.introductionText = "If you're a current student at Teesside University please log in below using the same details you would use to log in to Teesside University's Blackboard system and your account will be activated for future use. If you're not a student please follow the instructions to create an account and always log in using those details. Whoever you are...if you have any difficulties logging in or creating an account please e-mail: <a href=\"mailto:marketing@tees-su.org.uk\">marketing@tees-su.org.uk</a> and we'll respond as quickly as we can.";
    // window.logoUrl = "https://nusdigital.s3.amazonaws.com/image/images/431660/original/Signin_page_officers_2022.png";
    // window.loginHomeLink = "http://www.tees-su.org.uk/officers";
    function hideEmail() {
        document.querySelector('#loginDiv form').style.display = 'none'; 
    }
    function showEmail() {
        document.querySelector('#loginDiv form').style.display = 'block'; 
        document.querySelector('#loginDiv #showEmailLink').style.display = 'none'; 
    }
    function createToggleLink(target) {
        var elm = document.createElement('a'); 
        elm.id = "showEmailLink"; 
        elm.href = "javascript:void(0);";  
        elm.innerText = window.guestLinkText; 
        elm.addEventListener('click',showEmail); 
        elm.addEventListener('keydown',showEmail); 
        var target = document.querySelectorAll('#loginDiv br')[1]; 
        if(target) { target.parentNode.insertBefore( elm, target); }
    }
    // function replaceLogo() {
    //     var homeLink = document.querySelector('#logoDiv a');
    //     homeLink.href = window.loginHomeLink;
    //     var logo = document.querySelector('#logoDiv img');
    //     logo.src = window.logoUrl;
    // }
    function replaceLabel() {
        document.getElementById('email_label').innerText = guestLinkText; 
    }
    // function addExplanationtext() {
    //     var elm = document.createElement('div'); 
    //     elm.id = "explainText"; 
    //     elm.innerHTML = window.introductionText; 
    //     var target = document.querySelectorAll('#loginDiv')[0]; 
    //     if(target) { target.parentNode.insertBefore( elm, target); }
    // }
    document.addEventListener("DOMContentLoaded", function() { 
        if(document.getElementById('loginDiv')) { 
            if(document.getElementsByClassName('btn-sso').length > 0) {
                createToggleLink();  
                hideEmail();   
            } 
            // replaceLabel();
            // addExplanationtext();
        }
    });
</script>
