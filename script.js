/* =========================================
   VANDANA VILLA
   SCRIPT.JS — COMPLETE A TO Z
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =========================================
       ELEMENTS
    ========================================= */

    const header =
        document.querySelector(".site-header");

    const menuButton =
        document.querySelector(".menu-button");

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const mobileLinks =
        document.querySelectorAll(".mobile-menu a");

    const desktopLinks =
        document.querySelectorAll(".desktop-nav a");

    const scrollTopBtn =
        document.getElementById("scrollTopBtn");

    const currentYear =
        document.getElementById("currentYear");


    /* =========================================
       CURRENT YEAR
    ========================================= */

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =========================================
       MOBILE MENU
    ========================================= */

    if (menuButton && mobileMenu) {

        menuButton.addEventListener(
            "click",
            () => {

                const isOpen =
                    mobileMenu.classList.toggle("open");

                menuButton.classList.toggle(
                    "active",
                    isOpen
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

                document.body.classList.toggle(
                    "menu-open",
                    isOpen
                );

            }
        );


        /* Close menu after clicking a link */

        mobileLinks.forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu.classList.remove(
                        "open"
                    );

                    menuButton.classList.remove(
                        "active"
                    );

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );

                }
            );

        });

    }


    /* =========================================
       HEADER ON SCROLL
    ========================================= */

    const handleHeaderScroll = () => {

        if (!header) return;

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    };


    window.addEventListener(
        "scroll",
        handleHeaderScroll,
        { passive: true }
    );

    handleHeaderScroll();


    /* =========================================
       SCROLL TO TOP
    ========================================= */

    const handleScrollTopButton = () => {

        if (!scrollTopBtn) return;

        if (window.scrollY > 500) {

            scrollTopBtn.classList.add("show");

        } else {

            scrollTopBtn.classList.remove("show");

        }

    };


    window.addEventListener(
        "scroll",
        handleScrollTopButton,
        { passive: true }
    );

    handleScrollTopButton();


    if (scrollTopBtn) {

        scrollTopBtn.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =========================================
       SMOOTH ANCHOR LINKS
    ========================================= */

    const allAnchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    allAnchorLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (!target) return;


                event.preventDefault();


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;


                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }
        );

    });


    /* =========================================
       ACTIVE NAVIGATION
    ========================================= */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const updateActiveNavigation = () => {

        if (!sections.length) return;


        const scrollPosition =
            window.scrollY +
            (header ? header.offsetHeight : 0) +
            100;


        let currentSection = "";


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop;

            const sectionBottom =
                sectionTop +
                section.offsetHeight;


            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        [...desktopLinks, ...mobileLinks]
            .forEach((link) => {

                const href =
                    link.getAttribute("href");


                link.classList.toggle(
                    "active",
                    href === `#${currentSection}`
                );

            });

    };


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();


    /* =========================================
       AMENITY MODAL
    ========================================= */

    const amenityModal =
        document.getElementById(
            "amenityModal"
        );

    const amenityModalClose =
        document.getElementById(
            "amenityModalClose"
        );

    const amenityModalImage =
        document.getElementById(
            "amenityModalImage"
        );

    const amenityModalTitle =
        document.getElementById(
            "amenityModalTitle"
        );

    const amenityModalText =
        document.getElementById(
            "amenityModalText"
        );


    const amenityCards =
        document.querySelectorAll(
            ".amenity-card"
        );


    const openAmenityModal = (card) => {

        if (!amenityModal) return;


        const title =
            card.dataset.title ||
            card.querySelector("h3")?.textContent ||
            "Vandana Villa";


        const description =
            card.dataset.description ||
            "Enjoy this premium facility at Vandana Villa.";


        const image =
            card.dataset.image || "";


        if (amenityModalTitle) {

            amenityModalTitle.textContent =
                title;

        }


        if (amenityModalText) {

            amenityModalText.textContent =
                description;

        }


        if (amenityModalImage) {

            if (image) {

                amenityModalImage.src =
                    image;

                amenityModalImage.alt =
                    title;

                amenityModalImage.style.display =
                    "block";

            } else {

                amenityModalImage.removeAttribute(
                    "src"
                );

                amenityModalImage.alt = "";

                amenityModalImage.style.display =
                    "none";

            }

        }


        amenityModal.classList.add(
            "active"
        );

        amenityModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";

    };


    const closeAmenityModal = () => {

        if (!amenityModal) return;


        amenityModal.classList.remove(
            "active"
        );

        amenityModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow =
            "";

    };


    amenityCards.forEach((card) => {

        card.addEventListener(
            "click",
            () => {

                openAmenityModal(card);

            }
        );


        card.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    openAmenityModal(card);

                }

            }
        );

    });


    if (amenityModalClose) {

        amenityModalClose.addEventListener(
            "click",
            closeAmenityModal
        );

    }


    /* Close by clicking outside */

    if (amenityModal) {

        amenityModal.addEventListener(
            "click",
            (event) => {

                if (
                    event.target ===
                    amenityModal
                ) {

                    closeAmenityModal();

                }

            }
        );

    }


    /* Close modal with Escape */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                amenityModal?.classList.contains(
                    "active"
                )
            ) {

                closeAmenityModal();

            }

        }
    );


    /* =========================================
       GALLERY LIGHTBOX
    ========================================= */

    const galleryImages =
        document.querySelectorAll(
            ".gallery-item img"
        );


    let lightbox = null;
    let lightboxImage = null;


    const createLightbox = () => {

        if (lightbox) return;


        lightbox =
            document.createElement("div");

        lightbox.className =
            "gallery-lightbox";


        lightbox.innerHTML = `
            <button
                class="gallery-lightbox-close"
                type="button"
                aria-label="Close image"
            >
                &times;
            </button>

            <img
                class="gallery-lightbox-image"
                src=""
                alt=""
            >
        `;


        document.body.appendChild(
            lightbox
        );


        lightboxImage =
            lightbox.querySelector(
                ".gallery-lightbox-image"
            );


        const closeButton =
            lightbox.querySelector(
                ".gallery-lightbox-close"
            );


        closeButton.addEventListener(
            "click",
            closeLightbox
        );


        lightbox.addEventListener(
            "click",
            (event) => {

                if (
                    event.target === lightbox
                ) {

                    closeLightbox();

                }

            }
        );

    };


    const openLightbox = (image) => {

        createLightbox();


        if (!lightboxImage) return;


        lightboxImage.src =
            image.currentSrc ||
            image.src;


        lightboxImage.alt =
            image.alt || "Vandana Villa";


        lightbox.classList.add(
            "active"
        );


        document.body.style.overflow =
            "hidden";

    };


    function closeLightbox() {

        if (!lightbox) return;


        lightbox.classList.remove(
            "active"
        );


        document.body.style.overflow =
            "";

    }


    galleryImages.forEach((image) => {

        image.style.cursor =
            "zoom-in";


        image.addEventListener(
            "click",
            () => {

                openLightbox(image);

            }
        );

    });


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                lightbox?.classList.contains(
                    "active"
                )
            ){

                closeLightbox();

            }

        }
    );


    /* =========================================
       BEACH GET DIRECTIONS
    ========================================= */

    const directionButtons =
        document.querySelectorAll(
            ".direction-button[data-location]"
        );


    directionButtons.forEach((button) => {

        button.addEventListener(
            "click",
            (event) => {

                const location =
                    button.dataset.location;


                if (!location) return;


                event.preventDefault();


                const mapsUrl =
                    "https://www.google.com/maps/search/?api=1&query=" +
                    encodeURIComponent(location);


                window.open(
                    mapsUrl,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    });

           /* =========================================
   ENQUIRY FORM → WHATSAPP
========================================= */

const enquiryForm =
    document.querySelector(
        ".enquiry-form"
    );


/*
   Temporary public WhatsApp number.
   Change this ONE number later when required.
*/

const whatsappNumber =
    "919601996733";


if (enquiryForm) {

    enquiryForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const formData =
                new FormData(
                    enquiryForm
                );


            const name =
                formData.get("name") ||
                "";

            const phone =
                formData.get("phone") ||
                "";

            const date =
                formData.get("date") ||
                "";

            const guests =
                formData.get("guests") ||
                "";

            const message =
                formData.get("message") ||
                "";


            const whatsappMessage = `
Hello Vandana Villa,

I would like to make an enquiry.

Name: ${name}
Phone: ${phone}
Preferred Date: ${date}
Number of Guests: ${guests}

Message:
${message}

Thank you.
            `.trim();


            const whatsappUrl =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(
                    whatsappMessage
                );


            window.open(
                whatsappUrl,
                "_blank",
                "noopener,noreferrer"
            );


            const formMessage =
                document.querySelector(
                    ".form-message"
                );


            if (formMessage) {

                formMessage.textContent =
                    "Opening WhatsApp...";

            }

        }
    );

}         
  /* =========================================
   WHATSAPP LINKS
========================================= */

const whatsappLinks =
    document.querySelectorAll(
        'a[href*="wa.me"]'
    );


whatsappLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            link.setAttribute(
                "target",
                "_blank"
            );

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        }
    );

});


/* =========================================
   IMAGE ERROR HANDLING
========================================= */

const allImages =
    document.querySelectorAll("img");


allImages.forEach((image) => {

    image.addEventListener(
        "error",
        () => {

            image.classList.add(
                "image-error"
            );

        }
    );

});


/* =========================================
   PAGE LOADED
========================================= */

document.body.classList.add(
    "page-loaded"
);

});
