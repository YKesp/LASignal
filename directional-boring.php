<?php include("inc/header.php"); ?>
<div class="banner">
    <img src="images/directional-boring-banner.jpg" class="img-fluid" alt="Directional Boring Banner">
    <div class="caption container text-center">
        <h1 class="text-white">Directional Boring</h1>
    </div>
</div>
<main id="main">
    <section class="service-page-block">
        <div class="container">
            <div class="service-header">
                <h2 class="service-title">Directional Boring</h2>
                <p class="service-lead">
                    Los Angeles Signal Construction, Inc. is also equipped to offer you its Directional Boring service.
                </p>
                <div class="service-description">
                    <p>
                        This process is performed using heavy-duty directional boring machines, which often rely on hydraulics to generate sufficient drilling power. Prior to drilling, potholing is to be performed to locate and protect utilities by other agencies.
                    </p>
                    <p>
                        This directional boring machine drills a small pilot hole using a special metal bit. This pilot hole serves as a guide for the remaining bores. After the pilot hole has been drilled successfully, our workers drive a metal cutting tool, or reamer, through the soil. The reamer cuts out a path larger than the diameter of the planned piping or conduit.
                    </p>
                    <p>
                        Finally, the reamer is run through the bore once more, and is used to drag the pipe or conduit into place. Rather than drill these holes straight down, directional boring allows our workers to create horizontal bores that run parallel to the ground above, which we use to lay underground utilities, including electric lines.
                    </p>
                </div>
            </div>
        </div>

        <!-- Service Gallery Carousel Section -->
        <div class="service-gallery-wrap">
            <div class="splide service-splide" id="service-gallery-slider" aria-label="Directional Boring Gallery">
                <div class="splide__track">
                    <ul class="splide__list">
                        <li class="splide__slide">
                            <a href="images/directional-boring-img1.jpg" class="gallery-card" data-fancybox="service-gallery" data-caption="Directional Boring Site Operations">
                                <img src="images/directional-boring-img1.jpg" alt="Directional Boring Site Operations" class="img-fluid">
                            </a>
                        </li>
                        <li class="splide__slide">
                            <a href="images/directional-boring-img2.jpg" class="gallery-card" data-fancybox="service-gallery" data-caption="Heavy Duty Drilling &amp; Trenching Crew">
                                <img src="images/directional-boring-img2.jpg" alt="Heavy Duty Drilling &amp; Trenching Crew" class="img-fluid">
                            </a>
                        </li>
                        <li class="splide__slide">
                            <a href="images/directional-boring-img3.jpg" class="gallery-card" data-fancybox="service-gallery" data-caption="Utility Conduit &amp; Boring Equipment">
                                <img src="images/directional-boring-img3.jpg" alt="Utility Conduit &amp; Boring Equipment" class="img-fluid">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Floating Nav Arrows -->
            <div class="service-slider-nav">
                <div class="slider-nav-pill">
                    <button type="button" class="nav-arrow-btn" id="service-prev-btn" aria-label="Previous Image">
                        <svg viewBox="0 0 14 14"><path d="M9 2.5L4.5 7L9 11.5"/></svg>
                    </button>
                    <span class="nav-divider"></span>
                    <button type="button" class="nav-arrow-btn" id="service-next-btn" aria-label="Next Image">
                        <svg viewBox="0 0 14 14"><path d="M5 2.5L9.5 7L5 11.5"/></svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
</main>

<script>
document.addEventListener('DOMContentLoaded', function () {
    var sliderEl = document.getElementById('service-gallery-slider');
    if (sliderEl && typeof Splide !== 'undefined') {
        var serviceSplide = new Splide('#service-gallery-slider', {
            type: 'loop',
            start: 1,
            focus: 'center',
            autoWidth: true,
            gap: '24px',
            arrows: false,
            pagination: false,
            autoplay: false,
            speed: 600,
            updateOnMove: true,
            trimSpace: false,
            breakpoints: {
                1400: {
                    gap: '20px'
                },
                991: {
                    gap: '16px'
                },
                575: {
                    gap: '12px'
                }
            }
        });

        serviceSplide.on('moved', function () {
            serviceSplide.refresh();
        });

        serviceSplide.mount();

        var prevBtn = document.getElementById('service-prev-btn');
        var nextBtn = document.getElementById('service-next-btn');

        if (prevBtn) {
            prevBtn.addEventListener('click', function (e) {
                e.preventDefault();
                serviceSplide.go('<');
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', function (e) {
                e.preventDefault();
                serviceSplide.go('>');
            });
        }
    }
});
</script>

<?php include("inc/footer.php"); ?>
