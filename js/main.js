

/*will pop up with an alert confirming tickets. Happens whenever you click
continue*/
function tickets() {  
    alert("Tickets are confirmed! Please check your email for a link to them. Thank you!");
}
function contact (){
    alert("Your email has been sent! A staff member will reach out to you shortly");
}


//Javascript added to switch between the light and the dark theme pages
function toggleTheme() {
    var theme = document.getElementsByTagName('link')[0];

    if (theme.getAttribute('href') == 'main.css') {
        theme.setAttribute('href', 'newtheme.css');
    } else {
        theme.setAttribute('href', 'main.css');
    }
}


/*
main = document.getElementById('about-content');
ticketss = document.getElementById('ticket-content');
*/

