
function scrollGalleryRight() {
    const gallery = document.querySelector('.gallery');
    gallery.scrollBy({ left: 100, behavior: 'smooth' });
  }
  

  function toggleScrollButton() {
    const gallery = document.querySelector('.gallery');
    const scrollButton = document.querySelector('.scroll-button');
    
    if (gallery.scrollLeft > 0) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  }


  document.querySelector('.scroll-button').addEventListener('click', scrollGalleryRight);
  
  document.querySelector('.gallery').addEventListener('scroll', toggleScrollButton);

function scrollGalleryRight() {
    const gallery = document.querySelector('.gallery');
    gallery.scrollBy({ left: 100, behavior: 'smooth' });
  }
  
  function toggleScrollButton() {
    const gallery = document.querySelector('.gallery');
    const scrollButton = document.querySelector('.scroll-button');
  
    if (gallery.scrollLeft > 0) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  }
  
  