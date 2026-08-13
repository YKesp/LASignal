<?php include("inc/header.php"); ?>
<div class="banner">
    <img src="https://placehold.co/1920x310" class="img-fluid" alt="Image 1">
    <div class="caption container">
        <h1 class="text-white">Demo Page</h1>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Demo Page</li>
            </ol>
        </nav>
    </div>
</div>
<main id="main">
    <!-- ===================== -->
    <!-- BOOTSTRAP CAROUSEL -->
    <!-- ===================== -->
    <div id="styleGuideCarousel" class="carousel slide mb-5" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://via.placeholder.com/1200x400" class="d-block w-100" alt="">
                <div class="carousel-caption">
                    <h1>Heading H1</h1>
                    <p>Sample paragraph text</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://via.placeholder.com/1200x400" class="d-block w-100" alt="">
            </div>
        </div>
    </div>

    <!-- ===================== -->
    <!-- TYPOGRAPHY -->
    <!-- ===================== -->
    <section class="mb-5">
        <div class="container">
            <h2>Typography</h2>

            <h1>H1 Heading</h1>
            <h2>H2 Heading</h2>
            <h3>H3 Heading</h3>
            <h4>H4 Heading</h4>
            <h5>H5 Heading</h5>
            <h6>H6 Heading</h6>

            <p>This is a normal paragraph text used for body content.</p>
            <p class="lead">This is a lead paragraph.</p>

            <a href="#">This is a link</a>

            <br><br>

            <button class="btn btn-primary">Primary Button</button>
            <button class="btn btn-secondary">Secondary Button</button>
            <button class="btn btn-success">Success Button</button>
        </div>
    </section>

    <!-- ===================== -->
    <!-- ACCORDION -->
    <!-- ===================== -->
    <section class="mb-5">
        <div class="container">
            <h2>Accordion</h2>

            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the first item’s accordion body.</strong> It is shown by default, until the
                            collapse plugin adds the appropriate classes that we use to style each element. These
                            classes control the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or overriding our default variables.
                            It’s also worth noting that just about any HTML can go within the
                            <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the second item’s accordion body.</strong> It is hidden by default, until
                            the collapse plugin adds the appropriate classes that we use to style each element. These
                            classes control the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or overriding our default variables.
                            It’s also worth noting that just about any HTML can go within the
                            <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the
                            collapse plugin adds the appropriate classes that we use to style each element. These
                            classes control the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or overriding our default variables.
                            It’s also worth noting that just about any HTML can go within the
                            <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>

            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to
                            demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion
                            body.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to
                            demonstrate the <code>.accordion-flush</code> class. This is the second item’s accordion
                            body. Let’s imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false"
                            aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to
                            demonstrate the <code>.accordion-flush</code> class. This is the third item’s accordion
                            body. Nothing more exciting happening here in terms of content, but just filling up the
                            space to make it look, at least at first glance, a bit more representative of how this would
                            look in a real-world application.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    <!-- ===================== -->
    <!-- TABS -->
    <!-- ===================== -->
    <section class="mb-5">
        <div class="container">
            <h2>Tabs</h2>

            <ul class="nav nav-tabs justify-content-center mb-3">
                <li class="nav-item">
                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#tab1">Inbox</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#tab2">Snoozed</button>
                </li>
            </ul>

            <ul class="nav nav-pills justify-content-center gap-2 mb-3">
                <li class="nav-item">
                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#tab1">Inbox</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#tab2">Snoozed</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#tab3">Sent</button>
                </li>
            </ul>


            <div class="bg-light p-2 rounded d-inline-block mb-3">
                <ul class="nav nav-pills gap-2">
                    <li class="nav-item">
                        <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#tab1">Code
                            Copilot</button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#tab2">Tab Completions</button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#tab3">Custom Snippets</button>
                    </li>
                </ul>
            </div>

            <ul class="nav justify-content-center gap-2">
                <li class="nav-item">
                    <button class="btn btn-light active" data-bs-toggle="tab" data-bs-target="#tab1">Inbox</button>
                </li>
                <li class="nav-item">
                    <button class="btn btn-light" data-bs-toggle="tab" data-bs-target="#tab2">Snoozed</button>
                </li>
                <li class="nav-item">
                    <button class="btn btn-light" data-bs-toggle="tab" data-bs-target="#tab3">Sent</button>
                </li>
            </ul>




            <div class="tab-content p-3 border border-top-0">
                <div class="tab-pane fade show active" id="tab1">
                    Content for Tab 1
                </div>
                <div class="tab-pane fade" id="tab2">
                    Content for Tab 2
                </div>
                <div class="tab-pane fade" id="tab3">
                    Content for Tab 3
                </div>
            </div>
        </div>
    </section>

    <!-- ===================== -->
    <!-- ALERTS -->
    <!-- ===================== -->
    <section class="mb-5">
        <div class="container">
            <h2>Alerts</h2>

            <div class="alert alert-primary" role="alert">
            A simple primary alert—check it out!
            </div>
            <div class="alert alert-secondary" role="alert">
            A simple secondary alert—check it out!
            </div>
            <div class="alert alert-success" role="alert">
            A simple success alert—check it out!
            </div>
            <div class="alert alert-danger" role="alert">
            A simple danger alert—check it out!
            </div>
            <div class="alert alert-warning" role="alert">
            A simple warning alert—check it out!
            </div>
            <div class="alert alert-info" role="alert">
            A simple info alert—check it out!
            </div>
            <div class="alert alert-light" role="alert">
            A simple light alert—check it out!
            </div>
            <div class="alert alert-dark" role="alert">
            A simple dark alert—check it out!
            </div>
        </div>
    </section>

    <!-- ===================== -->
    <!-- BUTTONS -->
    <!-- ===================== -->
    <section class="mb-5">
        <div class="container">
            <h2>Buttons</h2>

            <button class="btn btn-primary">Primary</button>
            <button class="btn btn-outline-primary">Outline</button>
            <button class="btn btn-lg btn-primary">Large Button</button>
        </div>
    </section>

    <!-- ===================== -->
    <!-- FORM ELEMENTS -->
    <!-- ===================== -->
    <section class="mb-5">
        <div class="container">
            <h2>Forms</h2>

            <form>
                <div class="mb-3">
                    <label class="form-label">Text Input</label>
                    <input type="text" class="form-control" placeholder="Enter text">
                </div>

                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control">
                </div>

                <div class="mb-3">
                    <label class="form-label">Select</label>
                    <select class="form-select">
                        <option>Option 1</option>
                        <option>Option 2</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label class="form-label">Textarea</label>
                    <textarea class="form-control"></textarea>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox">
                    <label class="form-check-label">Checkbox</label>
                </div>

                <br>

                <button class="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>

    <!-- ===================== -->
    <!-- TABLE -->
    <!-- ===================== -->
    <section class="mb-5">
        <div class="container">

            <h2>Table</h2>

            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Item 1</td>
                        <td>Value 1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Item 2</td>
                        <td>Value 2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    <!-- ===================== -->
    <!-- Theme Section -->
    <section class="block bg-light py-5">
        <div class="container">
            <h2>heading 2 Title H2</h2>
            <h3>Sub Heading H3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum asperiores saepe esse delectus atque
                libero quo doloribus expedita ducimus in, fugiat minima temporibus aut cum deserunt voluptatum
                voluptatibus laborum enim.</p>
            <a href="#" class="btn btn-primary">Read More</a>
        </div>
    </section>
    <section class="block bg- py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h2>heading 2 Title H2</h2>
                    <h3>Sub Heading H3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum asperiores saepe esse delectus
                        atque libero quo doloribus expedita ducimus in, fugiat minima temporibus aut cum deserunt
                        voluptatum voluptatibus laborum enim.</p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
                <div class="col-md-6">
                    <img src="" alt="">
                </div>
            </div>
        </div>
    </section>
    <!-- ===================== -->

    <div class="pb-4 grid grid-cols-3 gap-4"><a href="https://lipsum.app/id/31/1800x1200" data-fancybox="gallery"><img src="https://lipsum.app/id/31/300x200" width="300" height="200" alt="Gallery picture #1"></a><a href="https://lipsum.app/id/35/1800x1200" data-fancybox="gallery"><img src="https://lipsum.app/id/35/300x200" width="300" height="200" alt="Gallery picture #2"></a><a href="https://lipsum.app/id/34/1800x1200" data-fancybox="gallery"><img src="https://lipsum.app/id/34/300x200" width="300" height="200" alt="Gallery picture #3"></a><a href="https://lipsum.app/id/60/1800x1200" data-fancybox="gallery"><img src="https://lipsum.app/id/60/300x200" width="300" height="200" alt="Gallery picture #4"></a><a href="https://lipsum.app/id/36/1800x1200" data-fancybox="gallery"><img src="https://lipsum.app/id/36/300x200" width="300" height="200" alt="Gallery picture #5"></a><a href="https://lipsum.app/id/9/1800x1200" data-fancybox="gallery"><img src="https://lipsum.app/id/9/300x200" width="300" height="200" alt="Gallery picture #6"></a></div>
</main>

<?php include("inc/footer.php"); ?>