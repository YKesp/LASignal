<?php include("inc/header.php"); ?>
<div class="banner">
    <img src="images/traffic-loop-detector-banner.jpg" class="img-fluid" alt="Traffic Loop Detector Banner">
    <div class="caption container text-center">
        <h1 class="text-white">Traffic Loop Detector</h1>
    </div>
</div>
<main id="main">
    <section class="service-page-block">
        <div class="container">
            <div class="service-header">
                <h2 class="service-title">Traffic Loop Detector</h2>
                <p class="service-lead">
                    Los Angeles Signal Construction, Inc specializes in the installation of traffic loop detector systems throughout Southern California.
                </p>
                <div class="service-description">
                    <p>
                        A traffic loop detector is a sensor found at intersection, parking lots, driveways or ripe gate systems, In which a circular cut is made with A saw in the road surface, wire is wrapped around the loop cut, held in its socket and sealed. As a car approaches a traffic signal or car park boom gate, it senses the cars magnetic field and tells the intersection controller there are cars waiting to go.
                    </p>
                </div>
            </div>
        </div>

        <!-- Service Gallery Carousel Section -->
        <div class="service-gallery-wrap">
            <div class="splide service-splide" id="service-gallery-slider" aria-label="Traffic Loop Detector Gallery">
                <div class="splide__track">
                    <ul class="splide__list">
                        <li class="splide__slide">
                            <a href="images/traffic-loop-detector-img1.jpg" class="gallery-card" data-fancybox="service-gallery" data-caption="Installing Traffic Loop Detector System">
                                <img src="images/traffic-loop-detector-img1.jpg" alt="Installing Traffic Loop Detector System" class="img-fluid">
                            </a>
                        </li>
                        <li class="splide__slide">
                            <a href="images/traffic-loop-detector-img2.jpg" class="gallery-card" data-fancybox="service-gallery" data-caption="Nighttime Loop Detector Road Cut &amp; Sealing">
                                <img src="images/traffic-loop-detector-img2.jpg" alt="Nighttime Loop Detector Road Cut &amp; Sealing" class="img-fluid">
                            </a>
                        </li>
                        <li class="splide__slide">
                            <a href="images/traffic-loop-detector-img3.jpg" class="gallery-card" data-fancybox="service-gallery" data-caption="Completed Roadway Loop Detector">
                                <img src="images/traffic-loop-detector-img3.jpg" alt="Completed Roadway Loop Detector" class="img-fluid">
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
