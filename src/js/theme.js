

  function stickyElement(e) {
  
    var header = document.querySelector('.header_area');
    var headerHeight =50;
    var scrollValue = window.scrollY;
    
    if (scrollValue > headerHeight){
        header.classList.add('navbar_fixed');
      
    } else if (scrollValue < headerHeight){
        header.classList.remove('navbar_fixed');
      
    }
  
  }
  
  window.addEventListener('scroll', stickyElement);