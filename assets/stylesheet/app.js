// =========================================
// STAGE 1
// Basic Portfolio JavaScript
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Farikha Portfolio — Stage 1 loaded.");

});

/* =========================
   PROJECT CAROUSEL
========================= */

const projectCarousel =
    document.getElementById("projectsCarousel");

const projectPrev =
    document.getElementById("projectPrev");

const projectNext =
    document.getElementById("projectNext");

const projectProgressBar =
    document.getElementById("projectProgressBar");


if (
    projectCarousel &&
    projectPrev &&
    projectNext
) {

    const scrollAmount = 432;


    /* NEXT */

    projectNext.addEventListener("click", () => {

        projectCarousel.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });

    });


    /* PREVIOUS */

    projectPrev.addEventListener("click", () => {

        projectCarousel.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });

    });


    /* PROGRESS */

    projectCarousel.addEventListener("scroll", () => {

        const maxScroll =
            projectCarousel.scrollWidth -
            projectCarousel.clientWidth;

        const currentScroll =
            projectCarousel.scrollLeft;

        const progress =
            maxScroll > 0
                ? (currentScroll / maxScroll) * 100
                : 0;

        projectProgressBar.style.width =
            `${Math.max(25, progress)}%`;

    });


    /* =========================
       DRAG WITH MOUSE
    ========================= */

    let isDragging = false;

    let startX = 0;

    let scrollStart = 0;


    projectCarousel.addEventListener(
        "mousedown",
        (event) => {

            isDragging = true;

            projectCarousel.classList.add("dragging");

            startX = event.pageX;

            scrollStart =
                projectCarousel.scrollLeft;

        }
    );


    document.addEventListener(
        "mouseup",
        () => {

            isDragging = false;

            projectCarousel.classList.remove(
                "dragging"
            );

        }
    );


    projectCarousel.addEventListener(
        "mousemove",
        (event) => {

            if (!isDragging) return;

            event.preventDefault();

            const distance =
                event.pageX - startX;

            projectCarousel.scrollLeft =
                scrollStart - distance;

        }
    );

}