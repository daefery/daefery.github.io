(function ($) {
  "use strict";

  $(window).on("load", function () {
    // Hide Preloader
    $("#preloader").fadeOut(500);

    // Isotope Grid Initialization
    const grid = $(".isotope-grid");
    if (grid.length > 0) {
      const iso = grid.isotope({
        itemSelector: ".isotope-item",
        layoutMode: "fitRows",
        percentPosition: true
      });

      // Filtering logic — also toggles featured row visibility
      $(".filter-btn").on("click", function () {
        const filterValue = $(this).attr("data-filter");
        iso.isotope({ filter: filterValue });

        $(".filter-btn").removeClass("active");
        $(this).addClass("active");

        // Show/hide featured row cards based on filter
        const featuredRow = $("#proj-featured-row");
        if (featuredRow.length > 0) {
          if (filterValue === "*") {
            featuredRow.slideDown(300);
          } else {
            // Check if any featured card matches the active filter
            const hasMatch = featuredRow.find(".proj-featured-card[data-cat='" + filterValue.replace(".", "") + "']").length > 0;
            if (hasMatch) {
              featuredRow.slideDown(300);
              featuredRow.find(".proj-featured-card").each(function () {
                const cat = $(this).attr("data-cat");
                if (filterValue === "." + cat) {
                  $(this).show();
                } else {
                  $(this).hide();
                }
              });
            } else {
              featuredRow.slideUp(300);
            }
          }
          // Reset individual card visibility on "all"
          if (filterValue === "*") {
            featuredRow.find(".proj-featured-card").show();
          }
        }
      });
    }
  });

  // Scroll-to-top button
  const scrollBtn = $("#scrollTopBtn");
  if (scrollBtn.length) {
    $(window).on("scroll.scrolltop", function () {
      if ($(this).scrollTop() > 300) {
        scrollBtn.addClass("visible");
      } else {
        scrollBtn.removeClass("visible");
      }
    });
    scrollBtn.on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 500, "swing");
    });
  }

  $(document).ready(function () {
    // WOW.js Initialization
    if (typeof WOW !== 'undefined') {
      new WOW({
        animateClass: "animate__animated",
        offset: 100,
        mobile: true,
        live: true,
      }).init();
    }

    // Dark theme always on
    $("body").addClass("dark-theme");

    // Mobile Navigation Toggle
    $(".menu-toggle").on("click", function () {
      $(".mobile-menu-inner").toggleClass("active");
    });

    // Contact Form Handler
    const contactForm = $("#contact-form");
    if (contactForm.length > 0) {
      contactForm.on("submit", function (e) {
        e.preventDefault();
        const submitBtn = $(this).find('button[type="submit"]');
        const originalText = submitBtn.html();
        
        // Simulating submission state
        submitBtn.html('Transmitting... <i class="fa-solid fa-spinner fa-spin ms-2"></i>').prop('disabled', true);
        
        setTimeout(function() {
          submitBtn.html('Data Received <i class="fa-solid fa-check ms-2"></i>').addClass('btn-success').removeClass('btn-primary');
          
          setTimeout(function() {
            submitBtn.html(originalText).prop('disabled', false).removeClass('btn-success').addClass('btn-primary');
            contactForm[0].reset();
          }, 3000);
        }, 2000);
      });
    }

    // Blog Dynamic Content Loading
    const loadMoreBtn = $("#load-more-trigger");
    const blogPool = $(".blog-load-more-pool");
    const blogFeed = $("#blog-feed");

    if (loadMoreBtn.length > 0 && blogPool.length > 0) {
      loadMoreBtn.on("click", function (e) {
        e.preventDefault();
        
        const btn = $(this);
        const btnText = btn.find("span");
        
        // Update button state
        btn.addClass("loading").prop("disabled", true);
        btnText.text("Loading...");
        
        // Mock processing delay
        setTimeout(function() {
          const items = blogPool.children().detach();
          
          if (items.length > 0) {
            items.each(function(index) {
              const item = $(this);
              item.removeClass("d-none");
              
              // Animated reveal sequence
              setTimeout(function() {
                item.addClass("animate__animated animate__fadeInUp");
                blogFeed.append(item);
              }, index * 150);
            });
            
            // Remove trigger after exhaust
            btn.fadeOut(400, function() {
              $(this).remove();
            });
            
          } else {
            btnText.text("All Articles Loaded");
            btn.removeClass("loading");
          }
        }, 1500);
      });
    }
  });

})(jQuery);
