// window.onload = function () {
//   var parentList = document.getElementById("nav");
//   var listItems = parentList.querySelectorAll(".nav-item");

//   for (var i = 0; i < listItems.length; i++) {
//     var listItem = listItems[i];
//     var sublist = listItem.querySelector("ul");

//     if (sublist) {
//       listItem.classList.add("menu-item-has-children");
//     }
//   }
// };
// // Initialize dropdown functionality
// const navItems = document.querySelectorAll(".nav-item");

// // Function to toggle dropdown and redirect on second click
// function handleDropdown(event) {
//   // Check if the click is on a child link (submenu <a> tag, not the parent .nav-link)
//   const targetLink = event.target.closest('a');
//   if (targetLink && !targetLink.classList.contains('nav-link')) {
//     // It's a submenu link—do nothing, let it navigate naturally
//     return;
//   }

//   // Otherwise, it's the parent—prevent default and handle toggle/redirect
//   event.preventDefault();

//   if (window.innerWidth <= 1024) {
//     // Mobile: Toggle on first click, redirect on second
//     if (!this.classList.contains("clicked")) {
//       // Remove 'clicked' from all items
//       navItems.forEach(item => item.classList.remove("clicked", "hover"));
//       // Add to current
//       this.classList.add("clicked", "hover");
//     } else {
//       // Second click: Redirect to parent URL
//       const href = this.querySelector(".nav-link").getAttribute("href");
//       if (href) {
//         window.location.href = href;
//       }
//     }
//   } else {
//     // Desktop: Redirect immediately to parent URL
//     const href = this.querySelector(".nav-link").getAttribute("href");
//     if (href) {
//       window.location.href = href;
//     }
//   }
// }

// // Attach click event listener to each nav item
// navItems.forEach(navItem => {
//   navItem.addEventListener("click", handleDropdown);
// });

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



document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".teamslider", {
    perPage: 3,
    focus: 0,
    omitEnd: true,
    swipeThreshold: 50, // Higher value reduces interference
    flickPower: 300, // Adjust flick sensitivity
    type: "slide",
    pagination: false, // Disable pagination
    autoplay: false, // Enable autoplay
    interval: 3000, // Set interval time in milliseconds (e.g., 3000 = 3 seconds)
    speed: 1000,
    gap: '16px', // Set transition speed in milliseconds (e.g., 1000 = 1 second)
    breakpoints: {
      1350: {
        perPage: 3, // Number of slides for tablet view (768px width and above)
      },
      991: {
        perPage: 2, // Number of slides for mobile view (576px width and above)
        pagination: false,
        autoplay: true,
      },
      639: {
        perPage: 1, // Number of slides for mobile view (576px width and above)
        pagination: false,
        autoplay: true,
      }
    }
  });
    
  
   
  splide.mount();

});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".newsslider", {
    perPage: 1,
    focus: 0,
    omitEnd: true,
    swipeThreshold: 50, // Higher value reduces interference
    flickPower: 300, // Adjust flick sensitivity
    type: "loop",
    pagination: false, // Disable pagination
    autoplay: false, // Enable autoplay
    interval: 3000, // Set interval time in milliseconds (e.g., 3000 = 3 seconds)
    speed: 1000,
    gap: '16px', // Set transition speed in milliseconds (e.g., 1000 = 1 second)
    breakpoints: {
      1350: {
        perPage: 1, // Number of slides for tablet view (768px width and above)
      },
      991: {
        perPage: 1, // Number of slides for mobile view (576px width and above)
        pagination: false,
        autoplay: true,
      },
      639: {
        perPage: 1, // Number of slides for mobile view (576px width and above)
        pagination: false,
        autoplay: true,
      }
    }
  });
    
  
   
  splide.mount();

});

document.addEventListener("DOMContentLoaded", () => {
  const searchLink = document.querySelector(".search-link");
  const searchForm = document.querySelector(".search-form");
  const searchInputWrapper = document.querySelector(".search-input-wrapper");

  // Toggle search form on clicking the search link
  searchLink.addEventListener("click", (e) => {
    e.preventDefault();
    searchForm.classList.toggle("open");
  });

  // Close search form when clicking outside of it
  document.addEventListener("click", (e) => {
    if (!searchForm.contains(e.target) && !searchLink.contains(e.target)) {
      searchForm.classList.remove("open");
    }
  });
});

// Select all file input elements and their respective buttons
const fileButtons = document.querySelectorAll('.fileButton');
const fileInputs = document.querySelectorAll('.custom-file-input');

// Loop through each button and file input
fileButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
    // Trigger the corresponding file input
    fileInputs[index].click();
  });
});

fileInputs.forEach((input, index) => {
  input.addEventListener('change', function(event) {
    const fileName = event.target.files.length > 0 ? event.target.files[0].name : "No File Chosen";
    // Update the corresponding filename span based on the index
    const filenameSpan = fileButtons[index].nextElementSibling; // Select the correct filename span next to the button
    filenameSpan.textContent = fileName;
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.querySelector('.add-field'); // The add button
  const addableField = document.querySelector('.addablefield'); // The container holding the fields

  // Add new field on click of the '+' button
  addButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior

      // Create the new field container
      const newField = document.createElement('div');
      newField.classList.add('field');

      // Add the input element to the new field
      const input = document.createElement('input');
      input.type = 'text';
      input.classList.add('form-control');
      newField.appendChild(input);

      // Create the delete button for the new field
      const deleteButton = document.createElement('a');
      deleteButton.href = '#';
      deleteButton.classList.add('delete-field');
      deleteButton.textContent = '-';
      
      // Add delete functionality
      deleteButton.addEventListener('click', function(e) {
          e.preventDefault();
          newField.remove(); // Remove the field when delete is clicked
      });

      // Add the delete button to the new field
      newField.appendChild(deleteButton);

      // Append the new field to the container
      addableField.insertBefore(newField, addButton); // Insert before the add button
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.querySelector('.add-section'); // The add button
  const addablesectionOuter = document.querySelector('.addablesection-outer'); // The container holding the addable sections

  // Function to create a new section
  function createNewSection() {
      // Clone the first addablesection (this is the original template section)
      const newSection = document.querySelector('.addablesection').cloneNode(true);

      // Reset the input fields and IDs
      const fields = newSection.querySelectorAll('input, select');
      fields.forEach(field => {
          field.value = ''; // Reset input values
          const newId = field.id + '-' + new Date().getTime(); // Generate a unique ID
          field.id = newId;
      });

      // Show the delete button for the new section
      const deleteButton = newSection.querySelector('.delete-section');
      deleteButton.style.display = 'inline'; // Make delete button visible

      // Add the delete button functionality
      deleteButton.addEventListener('click', function (e) {
          e.preventDefault();
          newSection.remove(); // Remove the entire section when delete is clicked
      });

      // Append the new section after the existing sections
      addablesectionOuter.insertBefore(newSection, addButton.parentElement.nextElementSibling); // Insert after the current section, not before the add button
  }

  // Add new section when the add button is clicked
  addButton.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default link behavior
      createNewSection(); // Call the function to create a new section
  });
});


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".qty").forEach(function (qtyDiv) {
      const minusBtn = qtyDiv.querySelector("a:first-child");
      const plusBtn = qtyDiv.querySelector("a:last-child");
      const inputField = qtyDiv.querySelector("input");

      // Set default value if empty
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

      // Prevent entering negative values manually
      inputField.addEventListener("input", function () {
          if (this.value < 1 || isNaN(this.value)) {
              this.value = 1;
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".zoom").forEach((zoomContainer) => {
      const img = zoomContainer.querySelector("img");
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
});


if (window.innerWidth > 767) { 
  let resizeTimeout;

  window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout); // Clear the previous timeout to prevent rapid reloads
    resizeTimeout = setTimeout(function () {
      location.reload(); // Reload the page after resizing is done
    }, 500); // Adjust the delay (in milliseconds) as needed
  });
}



document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.content-container');
  const readMoreLink = document.querySelector('.read-more-link');

  // Apply collapsed class on load for mobile
  if (window.innerWidth <= 768) {
    container.classList.add('collapsed');
  }

  readMoreLink.addEventListener('click', function(e) {
    e.preventDefault();
    container.classList.toggle('collapsed');
    readMoreLink.textContent = container.classList.contains('collapsed') ? 'Read More' : 'Show Less';
  });
});


$(document).ready(function () {
  "use strict";

  const main_window = $(window);
  let counterShowsUp = false;

  function fireCounter() {
    if ($(".js-stats-counter").length) {
      if ($.fn.countTo && !counterShowsUp) {
        let pos = $(".js-stats-counter").offset().top;
        if (main_window.scrollTop() + main_window.innerHeight() - 50 >= pos) {
          $(".counter").countTo();
          counterShowsUp = true;
        }
      }
    }
  }

  // Run once on document ready
  fireCounter();

  // Run again on scroll in case the element comes into view
  main_window.on("scroll", function () {
    fireCounter();
  });
});


document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        direction: 'ttb',  // Vertical direction (top to bottom)
        height: '314px',   // Optional: Set a fixed height for the slider container
        perPage: 1,        // Optional: Show 1 slide at a time (adjust as needed)
        pagination: false, // Optional: Hide pagination dots for a cleaner vertical look
        arrows: true      // Optional: Hide arrows if not needed
    }).mount();
});


// Get the header element
const header = document.querySelector('.header');

// Function to handle scroll
function handleScroll() {
  if (window.scrollY > 50) { // Hide after scrolling 50px (adjust as needed)
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Optional: Run on load to check initial state
handleScroll();




  document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.getElementById('carouselExampleIndicators');
    
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 5000,   // Auto-slide every 5 seconds
      pause: false,     // Never pause on hover (set to 'hover' if you want hover pause)
      wrap: true        // Loop back to first slide after last
    });

    // This ensures auto-slide always continues after manual navigation (indicators, arrows, etc.)
    carouselElement.addEventListener('slid.bs.carousel', function () {
      carousel.cycle();
    });
  });

   // Initialize Splide slider with focus center options
      document.addEventListener("DOMContentLoaded", function () {
        const splide = new Splide("#focus-center-slider", {
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
            1024: {
              perPage: 3,
              gap: "10px",
            },
            768: {
              perPage: 2,
              gap: "10px",
            },
            480: {
              perPage: 1,
              gap: "10px",
            },
          },
        });

        // Mount the slider
        splide.mount();

        // Update the slide counter
        function updateSlideCounter() {
          const index = splide.index + 1;
          const total = document.querySelectorAll(".splide__slide").length;
          document.getElementById("slide-counter").textContent =
            `Slide ${index} of ${total}`;

          // Highlight active slide number
          document.querySelectorAll(".slide-number").forEach((num, i) => {
            if (i === splide.index) {
              num.style.background =
                "linear-gradient(to right, #4facfe, #00f2fe)";
              num.style.boxShadow = "0 0 10px rgba(79, 172, 254, 0.5)";
            } else {
              num.style.background = "rgba(0, 0, 0, 0.7)";
              num.style.boxShadow = "none";
            }
          });
        }

        // Initial counter update
        updateSlideCounter();

        // Update counter when slide changes
        splide.on("move", function () {
          updateSlideCounter();
        });

        // Add custom class for focus center styling
        const sliderElement = document.getElementById("focus-center-slider");
        sliderElement.classList.add("splide--focus-center");

        // Custom navigation buttons
        document
          .getElementById("prev-btn")
          .addEventListener("click", function () {
            splide.go("<");
          });

        document
          .getElementById("next-btn")
          .addEventListener("click", function () {
            splide.go(">");
          });

        // Center active slide button
        document
          .getElementById("go-to-center")
          .addEventListener("click", function () {
            // Calculate center position based on visible slides
            const totalSlides =
              document.querySelectorAll(".splide__slide").length;
            const centerIndex = Math.floor(totalSlides / 2);
            splide.go(centerIndex);
          });

        // Auto-center slides on window resize
        window.addEventListener("resize", function () {
          splide.refresh();
        });

        // Check for image loading errors
        function checkImages() {
          const images = document.querySelectorAll(".slide-image");
          images.forEach((img) => {
            if (img.complete && img.naturalHeight === 0) {
              // Image failed to load, trigger onerror manually
              img.dispatchEvent(new Event("error"));
            }
          });
        }

        // Check images after page loads
        setTimeout(checkImages, 1000);
      });



document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('#tab-nav a');
    const contentContainer = document.getElementById('tab-content-container');
    const loadingIndicator = document.getElementById('loading');
    const outerTabs = document.querySelector('.outer-tabs');
    const tabNav = document.querySelector('#tab-nav');
    
    let isMobile = window.innerWidth <= 991;
    let activeTabId = null;
    
    // Store original tab order
    let originalTabOrder = [];
    
    // Store original tab order on load
    function storeOriginalOrder() {
        originalTabOrder = [];
        document.querySelectorAll('#tab-nav > li').forEach(li => {
            const link = li.querySelector('a');
            if (link) {
                originalTabOrder.push({
                    tabId: link.getAttribute('data-tab'),
                    html: li.outerHTML
                });
            }
        });
    }
    
    // Function to update active classes on links
    function setActiveTab(activeLink) {
        // Remove active class from all links
        document.querySelectorAll('#tab-nav a').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to clicked link
        activeLink.classList.add('active');
        activeTabId = activeLink.getAttribute('data-tab');
        
        // Also update parent li active state
        document.querySelectorAll('#tab-nav li').forEach(li => {
            li.classList.remove('active');
        });
        activeLink.closest('li').classList.add('active');
    }
    
    // Function to insert content after specific li (mobile only)
    function insertContentAfter(li, content) {
        const contentWrapper = document.createElement('li');
        contentWrapper.className = 'mobile-content-wrapper';
        contentWrapper.setAttribute('data-tab-content-wrapper', activeTabId);
        
        const contentClone = content.cloneNode(true);
        contentClone.style.display = 'block';
        contentClone.classList.add('active');
        contentWrapper.appendChild(contentClone);
        
        // Insert after the li
        li.parentNode.insertBefore(contentWrapper, li.nextSibling);
    }
    
    // Function to reorganize for mobile accordion (keep in place)
    function reorganizeForMobile() {
        const activeLink = document.querySelector('#tab-nav a.active');
        if (!activeLink) {
            return;
        }
        
        const activeTabId = activeLink.getAttribute('data-tab');
        const activeLi = activeLink.closest('li');
        
        // Remove any existing content wrappers
        document.querySelectorAll('#tab-nav .mobile-content-wrapper').forEach(wrapper => {
            wrapper.remove();
        });
        
        // Get the content for active tab
        const activeContent = document.querySelector(`.data-group[data-tab-content="${activeTabId}"]`);
        
        if (!activeContent) {
            return;
        }
        
        // Insert content after the active tab
        insertContentAfter(activeLi, activeContent);
        
        // Hide the original content container on mobile
        contentContainer.style.display = 'none';
        
        // Re-attach click handlers
        attachClickHandlers();
    }
    
    // Function to restore desktop layout
    function restoreDesktopLayout() {
        // Remove all mobile content wrappers
        const mobileWrappers = document.querySelectorAll('#tab-nav .mobile-content-wrapper');
        mobileWrappers.forEach(wrapper => wrapper.remove());
        
        // Restore original order from stored data
        if (originalTabOrder.length > 0) {
            tabNav.innerHTML = '';
            originalTabOrder.forEach(item => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = item.html;
                const li = tempDiv.firstChild;
                tabNav.appendChild(li);
            });
        }
        
        // Show the original content container
        contentContainer.style.display = 'block';
        
        // Make sure active tab content is visible
        if (activeTabId) {
            // Hide all content first
            document.querySelectorAll('.data-group').forEach(div => {
                div.style.display = 'none';
            });
            
            // Show active content
            const activeContent = document.querySelector(`.data-group[data-tab-content="${activeTabId}"]`);
            if (activeContent) {
                activeContent.style.display = 'block';
                activeContent.classList.add('active');
            }
        }
        
        // Re-attach click handlers
        attachClickHandlers();
    }
    
    // Function to attach click handlers
    function attachClickHandlers() {
        document.querySelectorAll('#tab-nav a').forEach(link => {
            link.removeEventListener('click', tabClickHandler);
            link.addEventListener('click', tabClickHandler);
        });
    }
    
    // Function to load tab content via Ajax
    function loadTabContent(tabId, isMobileLoad = false, callback = null) {
        // Show loading indicator
        loadingIndicator.style.display = 'block';
        
        // Create form data for POST request
        const formData = new FormData();
        formData.append('action', 'load_tab_content');
        formData.append('tab_id', tabId);
        
        // Send Ajax request
        fetch('get-tab-data.php', {
            method: 'POST',
            body: formData,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Create temporary container to parse HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            
            // Find the data-group in the response
            const newContent = tempDiv.querySelector('.data-group');
            
            if (newContent) {
                // Add data-tab-content attribute to the new content
                newContent.setAttribute('data-tab-content', tabId);
                
                // Remove old content if exists
                const oldContent = document.querySelector(`.data-group[data-tab-content="${tabId}"]`);
                if (oldContent) {
                    oldContent.remove();
                }
                
                // Add new content to container
                contentContainer.appendChild(newContent);
                
                // For desktop, show the content immediately
                if (!isMobileLoad) {
                    // Hide all content first
                    document.querySelectorAll('.data-group').forEach(div => {
                        div.style.display = 'none';
                    });
                    
                    // Show the loaded content
                    newContent.style.display = 'block';
                    newContent.classList.add('active');
                }
            }
            
            // Hide loading indicator
            loadingIndicator.style.display = 'none';
            
            // Execute callback if provided
            if (callback) {
                callback();
            }
        })
        .catch(error => {
            console.error('Error loading tab content:', error);
            loadingIndicator.style.display = 'none';
        });
    }
    
    // Click handler for tabs
    function tabClickHandler(e) {
        e.preventDefault();
        
        const clickedLink = e.currentTarget;
        const clickedLi = clickedLink.closest('li');
        const tabId = clickedLink.getAttribute('data-tab');
        
        // Check if this is the active tab
        const isActive = clickedLink.classList.contains('active');
        
        if (isMobile) {
            if (isActive) {
                // If clicking on active tab, collapse it
                const contentWrapper = clickedLi.nextElementSibling;
                if (contentWrapper && contentWrapper.classList.contains('mobile-content-wrapper')) {
                    contentWrapper.remove();
                    clickedLink.classList.remove('active');
                    clickedLi.classList.remove('active');
                    activeTabId = null;
                }
            } else {
                // Remove active class from all tabs first
                document.querySelectorAll('#tab-nav a').forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelectorAll('#tab-nav li').forEach(li => {
                    li.classList.remove('active');
                });
                
                // Remove any existing content wrappers
                document.querySelectorAll('#tab-nav .mobile-content-wrapper').forEach(wrapper => {
                    wrapper.remove();
                });
                
                // Set new active tab
                clickedLink.classList.add('active');
                clickedLi.classList.add('active');
                activeTabId = tabId;
                
                // Check if content exists
                const existingContent = document.querySelector(`.data-group[data-tab-content="${tabId}"]`);
                
                if (!existingContent) {
                    // Load content via AJAX
                    loadTabContent(tabId, true, function() {
                        // Get the updated content and insert it
                        const newContent = document.querySelector(`.data-group[data-tab-content="${tabId}"]`);
                        if (newContent) {
                            insertContentAfter(clickedLi, newContent);
                        }
                    });
                } else {
                    // Insert content after the clicked tab
                    insertContentAfter(clickedLi, existingContent);
                }
            }
        } else {
            // Desktop behavior
            if (!isActive) {
                // Remove active class from all tabs
                document.querySelectorAll('#tab-nav a').forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelectorAll('#tab-nav li').forEach(li => {
                    li.classList.remove('active');
                });
                
                // Set new active tab
                clickedLink.classList.add('active');
                clickedLi.classList.add('active');
                activeTabId = tabId;
                
                // Check if content exists
                const existingContent = document.querySelector(`.data-group[data-tab-content="${tabId}"]`);
                
                if (!existingContent) {
                    // Load content via AJAX
                    loadTabContent(tabId, false);
                } else {
                    // Hide all content
                    document.querySelectorAll('.data-group').forEach(div => {
                        div.style.display = 'none';
                    });
                    
                    // Show selected content
                    existingContent.style.display = 'block';
                    existingContent.classList.add('active');
                }
            }
        }
    }
    
    // Function to handle responsive layout
    function handleResponsive() {
        const wasMobile = isMobile;
        isMobile = window.innerWidth <= 991;
        
        if (isMobile && !wasMobile) {
            // Switching to mobile
            console.log('Switching to mobile');
            outerTabs.classList.add('mobile-view');
            
            // Remove any existing content wrappers
            document.querySelectorAll('#tab-nav .mobile-content-wrapper').forEach(wrapper => {
                wrapper.remove();
            });
            
            // Hide content container on mobile
            contentContainer.style.display = 'none';
            
            // Make sure we have an active tab
            if (!activeTabId) {
                const firstLink = document.querySelector('#tab-nav a');
                if (firstLink) {
                    firstLink.classList.add('active');
                    firstLink.closest('li').classList.add('active');
                    activeTabId = firstLink.getAttribute('data-tab');
                }
            }
            
            // Show content for active tab in mobile accordion
            if (activeTabId) {
                const activeContent = document.querySelector(`.data-group[data-tab-content="${activeTabId}"]`);
                const activeLi = document.querySelector('#tab-nav a.active').closest('li');
                if (activeContent && activeLi) {
                    insertContentAfter(activeLi, activeContent);
                }
            }
            
            // Re-attach click handlers
            attachClickHandlers();
        } else if (!isMobile && wasMobile) {
            // Switching to desktop
            console.log('Switching to desktop');
            outerTabs.classList.remove('mobile-view');
            
            // Make sure content container is visible
            contentContainer.style.display = 'block';
            
            // Restore desktop layout
            restoreDesktopLayout();
        }
    }
    
    // Function to set first tab active
    function setFirstTabActive() {
        if (tabLinks.length > 0) {
            const firstTab = tabLinks[0];
            firstTab.classList.add('active');
            firstTab.closest('li').classList.add('active');
            activeTabId = firstTab.getAttribute('data-tab');
            console.log('First tab set active:', activeTabId);
        }
    }
    
    // Function to load initial content
    function loadInitialContent() {
        // Store original tab order
        storeOriginalOrder();
        
        // Set first tab as active
        setFirstTabActive();
        
        // Load content for first tab
        if (activeTabId) {
            loadTabContent(activeTabId, isMobile, function() {
                // After content is loaded, handle mobile display if needed
                if (isMobile) {
                    const activeContent = document.querySelector(`.data-group[data-tab-content="${activeTabId}"]`);
                    const activeLi = document.querySelector('#tab-nav a.active').closest('li');
                    if (activeContent && activeLi) {
                        // Remove any existing content wrappers first
                        document.querySelectorAll('#tab-nav .mobile-content-wrapper').forEach(wrapper => {
                            wrapper.remove();
                        });
                        insertContentAfter(activeLi, activeContent);
                        contentContainer.style.display = 'none';
                    }
                } else {
                    contentContainer.style.display = 'block';
                }
            });
        }
    }
    
    // Initial setup
    attachClickHandlers();
    loadInitialContent();
    handleResponsive(); // Call this after content is loaded
    
    // Add resize listener with debounce
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            handleResponsive();
        }, 250);
    });
});