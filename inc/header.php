<?php $basename = basename($_SERVER['SCRIPT_FILENAME']); ?>
<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <title>Website</title>
    <!-- Bootstrap CSS -->
    <link rel="icon" type="image/png" sizes="32x32" href="https://placehold.co/32x32?text=icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Unbounded:wght@200..900&display=swap" rel="stylesheet">
    <?php if($basename=='index.php'){ ?>
    <link rel="stylesheet" href="css/home.css">
    <?php } else {?>
    <link rel="stylesheet" href="css/all.css">
    <?php }?>
</head>
<body>
    <div id="wrapper">
        <header id="header" class="header sticky-top rightmenu">
            <div class="upper-header d-none d-lg-block">
                <div class="container d-flex gap-2 flex-sm-row justify-content-center justify-content-md-end align-items-center">
                    <div class="d-flex align-items-center gap-2 gap-md-3">
                        <ul class="list-unstyled info-list d-flex m-0 gap-3">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                        <a href="#" class="phone fas"><span class="d-none d-lg-block">(800) 828 8180</span></a>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg p-xl-0">
                <div class="container d-flex justify-content-between align-items-center">
                    <a class="navbar-brand" href="index.php">
                        <img src="images/logo.png" alt="site.org">
                    </a>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav m-0 justify-content-end" id="nav">
                            <li class="nav-item">
                                <a class="nav-link" href="index.php">Oversize Load Escort</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Street Lighting</a>
                                <ul class="sub-menu">
                                     <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="demo.php">Traffic Signals</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Traffic Loop Detectors</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"> Directional Boring</a>
                            </li>
                        </ul>  
                    </div>
                    <a href="#" class="btn btn-success ms-4 d-none d-xl-block">Get a Quote</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span>&#9776;</span> <!-- This will be hidden by CSS -->
                    </button>
                </div>
            </nav>
        </header>
        <div class="sticky-btn">
            <a href="#" class="btn btn-success d-block d-xl-none w-100"> Get a Quote  </a>
        </div>