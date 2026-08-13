
// Wrap everything in DOMContentLoaded to ensure DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  
  "use strict";
  
  // ========== NAVIGATION DROPDOWN ==========
const parentList = document.getElementById("nav");
if (parentList) {
  const listItems = parentList.querySelectorAll(".nav-item");
  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
    var sublist = listItem.querySelector("ul");
    if (sublist) {
      listItem.classList.add("menu-item-has-children");
    }
  }
}

// Initialize dropdown functionality with null check
const navItems = document.querySelectorAll(".nav-item");
if (navItems.length) {
  function handleDropdown(event) {
    event.stopPropagation();
    event.preventDefault();

    if (window.innerWidth <= 1024) {
      if (!this.classList.contains("clicked")) {
        const siblings = this.parentElement.querySelectorAll(":scope > .nav-item");
        siblings.forEach(item => item.classList.remove("clicked", "hover"));
        this.classList.add("clicked", "hover");
      } else {
        const anchor = this.querySelector("a");
        if (anchor) window.location.href = anchor.getAttribute("href");
      }
    } else {
      const anchor = this.querySelector("a");
      if (anchor) window.location.href = anchor.getAttribute("href");
    }
  }

  navItems.forEach(navItem => {
    navItem.addEventListener("click", handleDropdown);
  });
}





  // This is where all the magic happens
  // This is a modified version of the pen from Ege Görgülü - https://codepen.io/bamf/pen/jEpxOX - and you should check it out too.
  function drags(dragElement, resizeElement, container) {
    // This creates a variable that detects if the user is using touch input insted of the mouse.
    let touched = false;
    window.addEventListener("touchstart", function () {
      touched = true;
    });
    window.addEventListener("touchend", function () {
      touched = false;
    });
    // clicp the image and move the slider on interaction with the mouse or the touch input
    dragElement
      .on("mousedown touchstart", function (e) {
        //add classes to the emelents - good for css animations if you need it to
        dragElement.addClass("draggable");
        resizeElement.addClass("resizable");
        //create vars
        let startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
        let dragWidth = dragElement.outerWidth();
        let posX = dragElement.offset().left + dragWidth - startX;
        let containerOffset = container.offset().left;
        let containerWidth = container.outerWidth();
        let minLeft = containerOffset + 10;
        let maxLeft = containerOffset + containerWidth - dragWidth - 10;
        //add event listner on the divider emelent
        dragElement
          .parents()
          .on("mousemove touchmove", function (e) {
            // if the user is not using touch input let do preventDefault to prevent the user from slecting the images as he moves the silder arround.
            if (touched === false) {
              e.preventDefault();
            }
            let moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
            let leftValue = moveX + posX - dragWidth;
            // stop the divider from going over the limits of the container
            if (leftValue < minLeft) {
              leftValue = minLeft;
            } else if (leftValue > maxLeft) {
              leftValue = maxLeft;
            }
            let widthValue =
              ((leftValue + dragWidth / 2 - containerOffset) * 100) /
                containerWidth +
              "%";
            $(".draggable")
              .css("left", widthValue)
              .on("mouseup touchend touchcancel", function () {
                $(this).removeClass("draggable");
                resizeElement.removeClass("resizable");
              });
            $(".resizable").css("width", widthValue);
          })
          .on("mouseup touchend touchcancel", function () {
            dragElement.removeClass("draggable");
            resizeElement.removeClass("resizable");
          });
      })
      .on("mouseup touchend touchcancel", function (e) {
        // stop clicping the image and move the slider
        dragElement.removeClass("draggable");
        resizeElement.removeClass("resizable");
      });
  }

  // ========== TEAM SLIDER ==========
  const teamSlider = document.querySelector(".teamslider");
  if (teamSlider) {
    var splideTeam = new Splide(".teamslider", {
      perPage: 3,
      focus: 0,
      omitEnd: true,
      swipeThreshold: 50,
      flickPower: 300,
      type: "slide",
      pagination: false,
      autoplay: false,
      interval: 3000,
      speed: 1000,
      gap: '16px',
      breakpoints: {
        1350: { perPage: 3 },
        991: { perPage: 2, pagination: false, autoplay: true },
        639: { perPage: 1, pagination: false, autoplay: true }
      }
    });
    splideTeam.mount();
  }

  // ========== NEWS SLIDER ==========
  const newsSlider = document.querySelector(".newsslider");
  if (newsSlider) {
    var splideNews = new Splide(".newsslider", {
      perPage: 1,
      focus: 0,
      omitEnd: true,
      swipeThreshold: 50,
      flickPower: 300,
      type: "loop",
      pagination: false,
      autoplay: false,
      interval: 3000,
      speed: 1000,
      gap: '16px',
      breakpoints: {
        1350: { perPage: 1 },
        991: { perPage: 1, pagination: false, autoplay: true },
        639: { perPage: 1, pagination: false, autoplay: true }
      }
    });
    splideNews.mount();
  }

  // ========== SEARCH FUNCTIONALITY ==========
  const searchLink = document.querySelector(".search-link");
  const searchForm = document.querySelector(".search-form");
  const searchInputWrapper = document.querySelector(".search-input-wrapper");
  
  if (searchLink && searchForm) {
    searchLink.addEventListener("click", (e) => {
      e.preventDefault();
      searchForm.classList.toggle("open");
    });
    
    document.addEventListener("click", (e) => {
      if (!searchForm.contains(e.target) && !searchLink.contains(e.target)) {
        searchForm.classList.remove("open");
      }
    });
  }

  // ========== FILE INPUT HANDLERS ==========
  const fileButtons = document.querySelectorAll('.fileButton');
  const fileInputs = document.querySelectorAll('.custom-file-input');
  
  if (fileButtons.length && fileInputs.length) {
    fileButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        if (fileInputs[index]) {
          fileInputs[index].click();
        }
      });
    });
    
    fileInputs.forEach((input, index) => {
      input.addEventListener('change', function(event) {
        const fileName = event.target.files.length > 0 ? event.target.files[0].name : "No File Chosen";
        const filenameSpan = fileButtons[index] ? fileButtons[index].nextElementSibling : null;
        if (filenameSpan) {
          filenameSpan.textContent = fileName;
        }
      });
    });
  }

  // ========== ADDABLE FIELD ==========
  const addButton = document.querySelector('.add-field');
  const addableField = document.querySelector('.addablefield');
  
  if (addButton && addableField) {
    addButton.addEventListener('click', function(event) {
      event.preventDefault();
      const newField = document.createElement('div');
      newField.classList.add('field');
      const input = document.createElement('input');
      input.type = 'text';
      input.classList.add('form-control');
      newField.appendChild(input);
      const deleteButton = document.createElement('a');
      deleteButton.href = '#';
      deleteButton.classList.add('delete-field');
      deleteButton.textContent = '-';
      deleteButton.addEventListener('click', function(e) {
        e.preventDefault();
        newField.remove();
      });
      newField.appendChild(deleteButton);
      addableField.insertBefore(newField, addButton);
    });
  }

  // ========== ADDABLE SECTION ==========
  const addSectionButton = document.querySelector('.add-section');
  const addablesectionOuter = document.querySelector('.addablesection-outer');
  const templateSection = document.querySelector('.addablesection');
  
  if (addSectionButton && addablesectionOuter && templateSection) {
    function createNewSection() {
      const newSection = templateSection.cloneNode(true);
      const fields = newSection.querySelectorAll('input, select');
      fields.forEach(field => {
        field.value = '';
        const newId = field.id + '-' + new Date().getTime();
        field.id = newId;
      });
      const deleteButton = newSection.querySelector('.delete-section');
      if (deleteButton) {
        deleteButton.style.display = 'inline';
        deleteButton.addEventListener('click', function(e) {
          e.preventDefault();
          newSection.remove();
        });
      }
      addablesectionOuter.insertBefore(newSection, addSectionButton.parentElement?.nextElementSibling);
    }
    
    addSectionButton.addEventListener('click', function(e) {
      e.preventDefault();
      createNewSection();
    });
  }

  // ========== QUANTITY SELECTOR ==========
  const qtyDivs = document.querySelectorAll(".qty");
  if (qtyDivs.length) {
    qtyDivs.forEach(function (qtyDiv) {
      const minusBtn = qtyDiv.querySelector("a:first-child");
      const plusBtn = qtyDiv.querySelector("a:last-child");
      const inputField = qtyDiv.querySelector("input");
      
      if (minusBtn && plusBtn && inputField) {
        inputField.value = inputField.value || 1;
        
        minusBtn.addEventListener("click", function (e) {
          e.preventDefault();
          let currentValue = parseInt(inputField.value) || 1;
          if (currentValue > 1) {
            inputField.value = currentValue - 1;
          }
        });
        
        plusBtn.addEventListener("click", function (e) {
          e.preventDefault();
          let currentValue = parseInt(inputField.value) || 0;
          inputField.value = currentValue + 1;
        });
        
        inputField.addEventListener("input", function () {
          if (this.value < 1 || isNaN(this.value)) {
            this.value = 1;
          }
        });
      }
    });
  }

  // ========== ZOOM FUNCTIONALITY ==========
  const zoomContainers = document.querySelectorAll(".zoom");
  if (zoomContainers.length) {
    zoomContainers.forEach((zoomContainer) => {
      const img = zoomContainer.querySelector("img");
      if (!img) return;
      
      const magnifier = document.createElement("div");
      magnifier.classList.add("magnifier");
      zoomContainer.appendChild(magnifier);
      
      zoomContainer.addEventListener("mousemove", function (e) {
        magnifier.style.display = "block";
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        magnifier.style.left = `${x - magnifier.offsetWidth / 2}px`;
        magnifier.style.top = `${y - magnifier.offsetHeight / 2}px`;
        magnifier.style.backgroundImage = `url('${img.src}')`;
        magnifier.style.backgroundPosition = `${percentX}% ${percentY}%`;
      });
      
      zoomContainer.addEventListener("mouseleave", function () {
        magnifier.style.display = "none";
      });
    });
  }

  // ========== READ MORE FUNCTIONALITY ==========
  const container = document.querySelector('.content-container');
  const readMoreLink = document.querySelector('.read-more-link');
  
  if (container && readMoreLink) {
    if (window.innerWidth <= 768) {
      container.classList.add('collapsed');
    }
    
    readMoreLink.addEventListener('click', function(e) {
      e.preventDefault();
      container.classList.toggle('collapsed');
      readMoreLink.textContent = container.classList.contains('collapsed') ? 'Read More' : 'Show Less';
    });
  }

  // ========== SPLIDE VERTICAL SLIDER ==========
  const splideVertical = document.querySelector('#splide');
  if (splideVertical) {
    new Splide('#splide', {
      direction: 'ttb',
      height: '314px',
      perPage: 1,
      pagination: false,
      arrows: true
    }).mount();
  }

  // ========== HEADER SCROLL ==========
  const header = document.querySelector('.header');
  if (header) {
    function handleScroll() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }

  // ========== BOOTSTRAP CAROUSEL ==========
  const carouselElement = document.getElementById('carouselExampleIndicators');
  if (carouselElement && typeof bootstrap !== 'undefined') {
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 5000,
      pause: false,
      wrap: true
    });
    carouselElement.addEventListener('slid.bs.carousel', function () {
      carousel.cycle();
    });
  }

  // ========== FOCUS CENTER SLIDER ==========
  const focusSlider = document.querySelector("#focus-center-slider");
  if (focusSlider) {
    const splideFocus = new Splide("#focus-center-slider", {
      type: "loop",
      perPage: 3,
      perMove: 1,
      focus: "center",
      gap: "14px",
      autoplay: false,
      pauseOnHover: true,
      pauseOnFocus: true,
      speed: 600,
      drag: true,
      pagination: false,
      breakpoints: {
        1024: { perPage: 3, gap: "10px" },
        768: { perPage: 2, gap: "10px" },
        480: { perPage: 1, gap: "10px" },
      },
    });
    
    splideFocus.mount();
    
    function updateSlideCounter() {
      const index = splideFocus.index + 1;
      const total = document.querySelectorAll("#focus-center-slider .splide__slide").length;
      const counterElement = document.getElementById("slide-counter");
      if (counterElement) {
        counterElement.textContent = `Slide ${index} of ${total}`;
      }
      
      document.querySelectorAll("#focus-center-slider .slide-number").forEach((num, i) => {
        if (i === splideFocus.index) {
          num.style.background = "linear-gradient(to right, #4facfe, #00f2fe)";
          num.style.boxShadow = "0 0 10px rgba(79, 172, 254, 0.5)";
        } else {
          num.style.background = "rgba(0, 0, 0, 0.7)";
          num.style.boxShadow = "none";
        }
      });
    }
    
    updateSlideCounter();
    splideFocus.on("move", updateSlideCounter);
    
    const sliderElement = document.getElementById("focus-center-slider");
    if (sliderElement) {
      sliderElement.classList.add("splide--focus-center");
    }
    
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const goToCenter = document.getElementById("go-to-center");
    
    if (prevBtn) {
      prevBtn.addEventListener("click", () => splideFocus.go("<"));
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => splideFocus.go(">"));
    }
    if (goToCenter) {
      goToCenter.addEventListener("click", () => {
        const totalSlides = document.querySelectorAll("#focus-center-slider .splide__slide").length;
        const centerIndex = Math.floor(totalSlides / 2);
        splideFocus.go(centerIndex);
      });
    }
    
    window.addEventListener("resize", () => splideFocus.refresh());
    
    setTimeout(function checkImages() {
      const images = document.querySelectorAll("#focus-center-slider .slide-image");
      images.forEach((img) => {
        if (img.complete && img.naturalHeight === 0) {
          img.dispatchEvent(new Event("error"));
        }
      });
    }, 1000);
  }

  // ========== ABOUT PAGE TRAFFIC SIGNALS CAROUSEL ==========
  const aboutCarousel = document.querySelector("#about-carousel");
  if (aboutCarousel && typeof Splide !== "undefined") {
    const splideAbout = new Splide("#about-carousel", {
      type: "loop",
      perPage: 2,
      perMove: 1,
      padding: { left: "0px", right: "80px" },
      gap: "24px",
      autoplay: true,
      interval: 4000,
      pauseOnHover: true,
      pauseOnFocus: true,
      speed: 700,
      drag: true,
      pagination: false,
      arrows: true,
      breakpoints: {
        1399: {
          perPage: 2,
          padding: { left: "0px", right: "60px" },
          gap: "20px"
        },
        991: {
          perPage: 2,
          padding: 0,
          gap: "16px"
        },
        767: {
          perPage: 1,
          padding: 0,
          gap: "12px"
        }
      }
    });
    splideAbout.mount();
  }
});

// ========== DRAG FUNCTION (Requires jQuery) ==========
// This function was originally defined but not called
// If you need it, call it with appropriate elements

// ========== RESIZE HANDLER ==========
if (window.innerWidth > 767) {
  let resizeTimeout;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      location.reload();
    }, 500);
  });
}

// ========== COUNTER FUNCTIONALITY (jQuery) ==========
$(document).ready(function () {
  "use strict";
  
  const main_window = $(window);
  let counterShowsUp = false;
  
  function fireCounter() {
    if ($(".js-stats-counter").length && !counterShowsUp) {
      let pos = $(".js-stats-counter").offset().top;
      if (main_window.scrollTop() + main_window.innerHeight() - 50 >= pos) {
        $(".counter").countTo();
        counterShowsUp = true;
      }
    }
  }
  
  fireCounter();
  main_window.on("scroll", fireCounter);
});



(function () {
  function hasFontAwesome() {
    return document.querySelector(
      '.fa, .fas, .far, .fal, .fab, [class*="fa-"]'
    );
  }

  function loadFontAwesome() {
    if (document.getElementById('fa-cdn')) return;

    const link = document.createElement('link');
    link.id = 'fa-cdn';
    link.rel = 'stylesheet';
    link.href =
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';

    document.head.appendChild(link);
  }

  if (hasFontAwesome()) {
    loadFontAwesome();
  }
})();


(function () {
  function hasFancybox() {
    return document.querySelector(
      '[data-fancybox], .fancybox'
    );
  }

  function loadFancybox() {
    if (document.getElementById('fancybox-cdn')) return;

    // Fancybox CSS
    const css = document.createElement('link');
    css.id = 'fancybox-cdn-css';
    css.rel = 'stylesheet';
    css.href = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css';
    document.head.appendChild(css);

    // Fancybox JS
    const js = document.createElement('script');
    js.id = 'fancybox-cdn-js';
    js.src = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js';
    js.onload = function () {
      if (window.Fancybox) {
        Fancybox.bind("[data-fancybox]", {});
      }
    };

    document.body.appendChild(js);
  }

  if (hasFancybox()) {
    loadFancybox();
  }
})();