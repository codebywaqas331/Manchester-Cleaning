/* ============================================
   Manchester Gutter Cleaning — Main JavaScript
   Vanilla JS only — no dependencies
   ============================================ */

(function () {
  "use strict";

  /* ---------- Helper Functions ---------- */

  function $(selector, ctx) {
    return (ctx || document).querySelector(selector);
  }

  function $all(selector, ctx) {
    return Array.prototype.slice.call(
      (ctx || document).querySelectorAll(selector),
    );
  }

  function on(el, event, handler) {
    if (el) el.addEventListener(event, handler);
  }


  /* ---------- Shared Components ---------- */

  function getSiteRoot() {
    var stylesheet = document.querySelector(
      'link[href*="assets/css/style.css"]'
    );

    return stylesheet
      ? stylesheet
          .getAttribute("href")
          .replace(/assets\/css\/style\.css.*$/, "")
      : "";
  }

  function loadComponent(name, root) {
    var target = document.querySelector(
      '[data-component="' + name + '"]'
    );

    if (!target) return Promise.resolve();

    return new Promise(function (resolve, reject) {

      var script = document.createElement("script");

      script.src = new URL(
        root + "components/" + name + ".js",
        document.baseURI
      ).href;

      script.onload = resolve;

      script.onerror = function () {
        reject(
          new Error(
            "Unable to load " + name + " component script"
          )
        );
      };

      document.head.appendChild(script);
    });
  }

  function loadSharedComponents() {
    var root = getSiteRoot();

    return Promise.all([
      loadComponent("header", root),
      loadComponent("footer", root),
    ]);
  }


  /* ---------- Sticky Header ---------- */

  function initStickyHeader() {

    var header = $(".header");

    if (!header) return;

    function onScroll() {

      var scrollY =
        window.pageYOffset ||
        document.documentElement.scrollTop;

      if (scrollY > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

    }

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );
  }


  /* ---------- Mobile Menu ---------- */

  function initMobileMenu() {

    var hamburger = $(".hamburger");
    var mobileNav = $(".mobile-nav");

    if (!hamburger || !mobileNav) return;

    function toggleMenu() {

      hamburger.classList.toggle("active");
      mobileNav.classList.toggle("open");

      var expanded =
        hamburger.classList.contains("active");

      hamburger.setAttribute(
        "aria-expanded",
        expanded
      );

      document.body.style.overflow =
        expanded ? "hidden" : "";
    }

    on(hamburger, "click", toggleMenu);


    /* Close on link click */

    $all(
      ".mobile-nav-link, .mobile-nav-cta a",
      mobileNav
    ).forEach(function (link) {

      on(link, "click", function () {

        hamburger.classList.remove("active");
        mobileNav.classList.remove("open");

        hamburger.setAttribute(
          "aria-expanded",
          "false"
        );

        document.body.style.overflow = "";
      });

    });


    /* Close on outside click */

    on(document, "click", function (e) {

      if (
        mobileNav.classList.contains("open") &&
        !mobileNav.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {

        hamburger.classList.remove("active");
        mobileNav.classList.remove("open");

        hamburger.setAttribute(
          "aria-expanded",
          "false"
        );

        document.body.style.overflow = "";
      }

    });


    /* Sub-toggles */

    $all(
      ".mobile-nav-toggle",
      mobileNav
    ).forEach(function (toggle) {

      on(toggle, "click", function () {

        toggle.classList.toggle("open");

        var sub = toggle.nextElementSibling;

        if (
          sub &&
          sub.classList.contains("mobile-nav-sub")
        ) {

          sub.classList.toggle("open");
        }

      });

    });

  }


  /* ---------- Desktop Dropdowns ---------- */

  function initDropdowns() {

    var navItems =
      $all(".nav-item.has-dropdown");

    if (!navItems.length) return;

    navItems.forEach(function (item) {

      var link = $(".nav-link", item);
      var timeout;

      on(item, "mouseenter", function () {

        clearTimeout(timeout);

        navItems.forEach(function (other) {

          if (other !== item) {
            other.classList.remove("open");
          }

        });

        item.classList.add("open");

        if (link) {
          link.setAttribute(
            "aria-expanded",
            "true"
          );
        }

      });


      on(item, "mouseleave", function () {

        timeout = setTimeout(function () {

          item.classList.remove("open");

          if (link) {
            link.setAttribute(
              "aria-expanded",
              "false"
            );
          }

        }, 150);

      });


      /* Keyboard support */

      on(link, "click", function (e) {

        e.preventDefault();

        item.classList.toggle("open");

        var expanded =
          item.classList.contains("open");

        link.setAttribute(
          "aria-expanded",
          expanded
        );

      });

    });

  }


  /* ---------- FAQ Accordion ---------- */

  function initFAQAccordion() {

    var faqItems = $all(".faq-item");

    if (!faqItems.length) return;

    faqItems.forEach(function (item) {

      var question =
        $(".faq-question", item);

      var answer =
        $(".faq-answer", item);

      if (!question || !answer) return;


      on(question, "click", function () {

        var isOpen =
          item.classList.contains("open");

        var list =
          item.closest(".faq-list");


        /* Close all other questions */

        if (list) {

          $all(
            ".faq-item.open",
            list
          ).forEach(function (openItem) {

            if (openItem !== item) {

              openItem.classList.remove("open");

              var otherAnswer =
                $(".faq-answer", openItem);

              var otherQuestion =
                $(".faq-question", openItem);


              if (otherAnswer) {
                otherAnswer.style.maxHeight = "0";
              }


              if (otherQuestion) {
                otherQuestion.setAttribute(
                  "aria-expanded",
                  "false"
                );
              }

            }

          });

        }


        /* Close current question */

        if (isOpen) {

          item.classList.remove("open");

          answer.style.maxHeight = "0";

          question.setAttribute(
            "aria-expanded",
            "false"
          );

        }


        /* Open current question */

        else {

          item.classList.add("open");

          answer.style.maxHeight =
            answer.scrollHeight + "px";

          question.setAttribute(
            "aria-expanded",
            "true"
          );

        }

      });

    });

  }


  /* ---------- Smooth Scrolling ---------- */

  function initSmoothScroll() {

    $all('a[href^="#"]').forEach(function (anchor) {

      on(anchor, "click", function (e) {

        var href =
          this.getAttribute("href");

        if (
          href === "#" ||
          href === "#!"
        ) {
          return;
        }

        var target =
          document.getElementById(
            href.substring(1)
          );

        if (!target) return;

        e.preventDefault();

        var headerHeight =
          $(".header")
            ? $(".header").offsetHeight
            : 0;

        var offset =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight -
          20;

        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });

      });

    });

  }


  /* ---------- Form Validation ---------- */

  function initFormValidation() {

    var form = $("#quoteForm");

    if (!form) return;

    var fields = {

      name: form.querySelector("#fieldName"),

      phone: form.querySelector("#fieldPhone"),

      email: form.querySelector("#fieldEmail"),

      postcode:
        form.querySelector("#fieldPostcode"),

      service:
        form.querySelector("#fieldService"),

      propertyType:
        form.querySelector("#fieldPropertyType"),
    };


    var errorMessages = {

      name:
        "Please enter your full name",

      phone:
        "Please enter a valid UK phone number",

      email:
        "Please enter a valid email address",

      postcode:
        "Please enter a valid UK postcode",

      service:
        "Please select a service",

      propertyType:
        "Please select a property type",
    };


    function showError(field, msg) {

      var group =
        field.closest(".form-group");

      if (!group) return;

      group.classList.add("error");

      var errEl =
        group.querySelector(".error-msg");

      if (errEl) {
        errEl.textContent = msg || "";
      }

    }


    function clearError(field) {

      var group =
        field.closest(".form-group");

      if (group) {
        group.classList.remove("error");
      }

    }


    function validateName(value) {

      return value.trim().length >= 2;

    }


    function validatePhone(value) {

      var cleaned =
        value.replace(/[\s\-()]/g, "");

      return (
        /^(0|\+44)(\d{9,11})$/.test(cleaned) ||
        /^07\d{9}$/.test(cleaned)
      );

    }


    function validateEmail(value) {

      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        value.trim()
      );

    }


    function validatePostcode(value) {

      var v =
        value
          .trim()
          .toUpperCase()
          .replace(/\s/g, "");

      return /^[A-Z]{1,2}\d[A-Z\d]?\d[A-Z]{2}$/.test(
        v
      );

    }


    function validateField(field) {

      if (!field) return true;

      var name =
        field.getAttribute("name");

      var value =
        field.value;


      /* Required select fields */

      if (field.tagName === "SELECT") {

        if (!value) {

          showError(
            field,
            errorMessages[name] ||
              "Please select an option"
          );

          return false;
        }

        clearError(field);

        return true;
      }


      var valid = true;
      var msg = "";


      switch (name) {

        case "name":

          valid =
            validateName(value);

          msg =
            errorMessages.name;

          break;


        case "phone":

          valid =
            validatePhone(value);

          msg =
            errorMessages.phone;

          break;


        case "email":

          valid =
            validateEmail(value);

          msg =
            errorMessages.email;

          break;


        case "postcode":

          valid =
            validatePostcode(value);

          msg =
            errorMessages.postcode;

          break;


        default:

          valid =
            value.trim().length > 0;
      }


      if (!valid) {

        showError(
          field,
          msg
        );

      } else {

        clearError(field);

      }

      return valid;

    }


    /* Real-time validation on blur */

    Object.keys(fields).forEach(function (key) {

      var f = fields[key];

      if (!f) return;


      on(f, "blur", function () {

        validateField(f);

      });


      on(f, "input", function () {

        var group =
          f.closest(".form-group");

        if (
          group &&
          group.classList.contains("error")
        ) {

          validateField(f);

        }

      });

    });


    /* Submit */

    on(form, "submit", function (e) {

      e.preventDefault();

      var allValid = true;


      Object.keys(fields).forEach(function (key) {

        var f = fields[key];

        if (
          f &&
          !validateField(f)
        ) {

          allValid = false;

        }

      });


      if (allValid) {

        /* ---------- Backend Placeholder ---------- */

        var successMsg =
          $("#formSuccess");

        if (successMsg) {

          successMsg.classList.add("show");

          successMsg.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });

        }


        form.reset();


        setTimeout(function () {

          if (successMsg) {
            successMsg.classList.remove("show");
          }

        }, 6000);

      }


      else {

        /* Focus first error */

        var firstError =
          form.querySelector(
            ".form-group.error"
          );

        if (firstError) {

          var errField =
            firstError.querySelector(
              "input, select, textarea"
            );

          if (errField) {
            errField.focus();
          }

        }

      }

    });

  }


  /* ---------- Back to Top ---------- */

  function initBackToTop() {

    var btn =
      $(".back-to-top");

    if (!btn) return;


    function onScroll() {

      if (window.pageYOffset > 400) {

        btn.classList.add("visible");

      } else {

        btn.classList.remove("visible");

      }

    }


    on(btn, "click", function () {

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    });


    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    onScroll();

  }


  /* ---------- Scroll Reveal ---------- */

  function initScrollReveal() {

    var reveals =
      $all(".reveal");

    if (!reveals.length) return;


    if (
      !("IntersectionObserver" in window)
    ) {

      reveals.forEach(function (el) {

        el.classList.add("visible");

      });

      return;
    }


    var observer =
      new IntersectionObserver(
        function (entries) {

          entries.forEach(function (entry) {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.1,
          rootMargin:
            "0px 0px -50px 0px",
        }
      );


    reveals.forEach(function (el) {

      observer.observe(el);

    });

  }


  /* ---------- Quote Modal ---------- */

  function initQuoteModal() {

    var modal =
      $("#quoteModal");

    if (!modal) return;

    var overlay = modal;

    var closeBtn =
      $(".modal-close", modal);

    var triggers =
      $all(
        '[data-open-modal="quote"]'
      );


    function openModal() {

      overlay.classList.add("open");

      document.body.style.overflow =
        "hidden";


      var firstInput =
        $("input, select", modal);


      if (firstInput) {

        setTimeout(function () {

          firstInput.focus();

        }, 300);

      }

    }


    function closeModal() {

      overlay.classList.remove("open");

      document.body.style.overflow =
        "";

    }


    triggers.forEach(function (trigger) {

      on(trigger, "click", function (e) {

        e.preventDefault();

        openModal();

      });

    });


    on(
      closeBtn,
      "click",
      closeModal
    );


    on(
      overlay,
      "click",
      function (e) {

        if (e.target === overlay) {
          closeModal();
        }

      }
    );


    on(
      document,
      "keydown",
      function (e) {

        if (
          e.key === "Escape" &&
          overlay.classList.contains("open")
        ) {

          closeModal();

        }

      }
    );

  }


  /* ---------- Service Card Hover ---------- */

  function initCardHover() {

    $all(
      ".service-card, .trust-card, .why-choose-card"
    ).forEach(function (card) {

      on(
        card,
        "mouseenter",
        function () {

          card.style.transition =
            "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";

        }
      );

    });

  }


  /* ---------- Set Active Nav Link ---------- */

  function initActiveNav() {

    function normalizePath(path) {

      return path
        .replace(
          /\/index\.html$/,
          "/"
        )
        .replace(
          /\.html$/,
          ""
        )
        .replace(
          /\/$/,
          ""
        ) || "/";
    }


    var currentPath =
      normalizePath(
        window.location.pathname
      );


    $all(
      ".nav-link, .mobile-nav-link"
    ).forEach(function (link) {

      var href =
        link.getAttribute("href") ||
        "";

      if (
        !href ||
        href === "#"
      ) {
        return;
      }


      var linkPath =
        normalizePath(
          new URL(
            href,
            window.location.href
          ).pathname
        );


      if (
        linkPath === currentPath
      ) {

        link.classList.add(
          "active"
        );

      }

    });


    /* Services */

    if (
      /\/services\//.test(
        currentPath
      )
    ) {

      var servicesLink =
        document.querySelector(
          '.nav-item.has-dropdown .nav-link[href="#"]'
        );

      if (servicesLink) {
        servicesLink.classList.add(
          "active"
        );
      }

    }


    /* Locations */

    if (
      /\/locations\//.test(
        currentPath
      )
    ) {

      var locationLinks =
        document.querySelectorAll(
          '.nav-item.has-dropdown .nav-link[href="#"]'
        );

      if (locationLinks[1]) {

        locationLinks[1].classList.add(
          "active"
        );

      }

    }

  }


  /* ---------- Init All ---------- */

  function init() {

    document.body.classList.remove(
      "no-js"
    );

    initStickyHeader();

    initMobileMenu();

    initDropdowns();

    initFAQAccordion();

    initSmoothScroll();

    initFormValidation();

    initBackToTop();

    initScrollReveal();

    initQuoteModal();

    initCardHover();

    initActiveNav();

  }


  /* ---------- Start ---------- */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      function () {

        loadSharedComponents()
          .then(init)
          .catch(function (error) {

            console.error(error);

          });

      }
    );

  } else {

    loadSharedComponents()
      .then(init)
      .catch(function (error) {

        console.error(error);

      });

  }

})();