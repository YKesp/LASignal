<?php include("inc/header.php"); ?>
<div class="banner">
    <img src="images/traffic-signals-banner.jpg" class="img-fluid" alt="Traffic Signals Banner">
    <div class="caption container text-center">
        <h1 class="text-white">Traffic Signals</h1>
    </div>
</div>
<main id="main">
    <section class="service-page-block">
        <div class="container">
            <div class="service-header">
                <h2 class="service-title">Traffic Signals</h2>
                <p class="service-lead">
                    Los Angeles Signal Construction, Inc provides quality traffic signals throughout Southern California.
                </p>
                <div class="service-description">
                    <p>
                        Our experience includes installing thousands of traffic signals and in-road crosswalk systems. Traffic Signal construction consists of furnishing materials and erecting a traffic signal installation including all traffic signal equipment, poles, bases, wires and miscellaneous materials required for completion of the installation. Our work includes warranties and guarantees as designated in a projects specifications, and response to maintenance and operational issues. Upon final acceptance, we make a transfer of these services to the local government or other agency that will be responsible for continuing maintenance and operation.
                    </p>
                </div>
            </div>
        </div>

        <!-- Service Gallery Carousel Section -->
        <div class="service-gallery-wrap">
            <div class="splide service-splide" id="service-gallery-slider" aria-label="Traffic Signals Gallery">
                <div class="splide__track">
                    <ul class="splide__list">
                        <li class="splide__slide">
                            <a href="images/traffic-signals-img1.jpg" class="gallery-card" data-fancybox="service-gallery" data-caption="Traffic Signal Installation">
                                <img src="images/traffic-signals-img1.jpg" alt="Traffic Signal Installation" class="img-fluid">
                            </a>
                        </li>
                        <li class="splide__slide">
                            <a href="images/traffic-signals-img2.jpg" class="gallery-card" data-fancybox="service-gallery" data-caption="Traffic Signal Work &amp; Maintenance">
                                <img src="images/traffic-signals-img2.jpg" alt="Traffic Signal Work &amp; Maintenance" class="img-fluid">
                            </a>
                        </li>
                        <li class="splide__slide">
                            <a href="images/traffic-signals-img3.jpg" class="gallery-card" data-fancybox="service-gallery" data-caption="Roadside Signal Infrastructure">
                                <img src="images/traffic-signals-img3.jpg" alt="Roadside Signal Infrastructure" class="img-fluid">
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
