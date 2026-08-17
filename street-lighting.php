<?php include("inc/header.php"); ?>
<div class="banner">
    <img src="images/street-lighting-banner.jpg" class="img-fluid" alt="Street Lighting Banner">
    <div class="caption container text-center">
        <h1 class="text-white">Street Lighting</h1>
    </div>
</div>
<main id="main">
    <section class="service-page-block">
        <div class="container">
            <div class="service-header">
                <h2 class="service-title">Street Lighting</h2>
                <p class="service-lead">
                    Los Angeles Signal Construction, Inc., provides quality street lighting construction throughout Southern California.
                </p>
                <div class="service-description">
                    <p>
                        Once a project has been awarded and contracts have been sent, we order a projects required street lighting material and initiate our reeds. Los Angeles Signal Construction, Inc. often carries stock street lighting materials, such as street lighting poles and luminaires, allowing for quick turn-key projects. Upon final acceptance, we make a transfer of these services to the local government or other agency that will be responsible for continuing maintenance and operation.
                    </p>
                </div>
            </div>
        </div>

        <!-- Service Gallery Carousel Section -->
        <div class="service-gallery-wrap">
            <div class="splide service-splide" id="service-gallery-slider" aria-label="Street Lighting Gallery">
                <div class="splide__track">
                    <ul class="splide__list">
                        <li class="splide__slide">
                            <a href="images/street-lighting-img1.jpg" class="gallery-card" data-fancybox="service-gallery" data-caption="Street Lighting Pole Installation">
                                <img src="images/street-lighting-img1.jpg" alt="Street Lighting Pole Installation" class="img-fluid">
                            </a>
                        </li>
                        <li class="splide__slide">
                            <a href="images/street-lighting-img2.jpg" class="gallery-card" data-fancybox="service-gallery" data-caption="Intersection Street Lighting Project">
                                <img src="images/street-lighting-img2.jpg" alt="Intersection Street Lighting Project" class="img-fluid">
                            </a>
                        </li>
                        <li class="splide__slide">
                            <a href="images/street-lighting-img3.jpg" class="gallery-card" data-fancybox="service-gallery" data-caption="Roadway Street Lighting Maintenance">
                                <img src="images/street-lighting-img3.jpg" alt="Roadway Street Lighting Maintenance" class="img-fluid">
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
