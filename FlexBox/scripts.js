function toggleDropdown(event){
    let navbarToggle = document.getElementById("navbar-toggle");
    event.preventDefault();    
    if(navbarToggle.className === 'topnav'){
        navbarToggle.className += ' responsive';       
    } else{
        navbarToggle.className='topnav';
    }
   
}