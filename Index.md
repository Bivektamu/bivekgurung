<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio - Bivek Jang Gurung - Front End Developer</title>

        <!--  Jquery js file  -->
    
        <script
        src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous"></script>

    <!--  Bootstrap css file  -->
    <link rel="stylesheet" href="./css/bootstrap.min.css">

    <!--  font awesome icons  -->
    <link rel="stylesheet" href="./css/all.min.css">

    <!--  custom css file  -->
    <link rel="stylesheet" href="./css/style.css">

    <!--  Responsive css file  -->
    <link rel="stylesheet" href="./css/responsive.css">
</head>

<body>
    <!-- header section -->
    <header id="header" class="header_area">
        <div class="main-menu">
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="/">
                    <h2><span>BG</span></h2>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse" id="navbarNav">
                    <div class="mr-auto"></div>
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link target" href="#banner">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link target" href="#about">about</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link target" href="#skills">skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link target" href="#project">projects</a>
                        </li>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link target" href="#contact">contact</a>
                        </li>

                        

                        <li class="nav-item">
                            <a class="nav-link hvr-buzz-out" id="tel" href="tel:+61452424565">
                                <i class="fas fa-mobile-alt"></i>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    </header>

    <main class="site-main">

        <!-- banner section  -->
        <section id="banner" class="site-banner">
            <div class="container" id="hire-btn">
                <div class="row">
                    <div class="col-lg-6 col-md-12 site-title">
                        <h3 class="title-text">Hey</h3>
                        <h1 class="title-text text-uppercase">I am Bivek</h1>
                        <h4 class="title-text text-uppercase">Front End Developer</h4>
                        <div class="site-buttons">
                            <div class="d-flex flex-row flex-wrap">
                                <a  href="#contact" class="btn target button primary-button mr-4 text-uppercase">
                                    hire me
                                </a>
                                    
                                <a href="/resume.pdf" target="_blank" class="btn button secondary-button text-uppercase">Get cv</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 banner-image">
                        <img src="./img/banner/banner-image.png" alt="banner-img" class="img-fluid">
                    </div>
                </div>
            </div>
        </section>

        <!-- about section -->
        <section id="about" class="about-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="about-image">
                            <img src="./img/about-us.png" alt="About us" class="img-fluid">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 about-title">
                        <h2 class="text-uppercase pt-5">
                            <span>Let me</span>
                            <span>introduce</span>
                            <span>myself</span>
                        </h2>
                        <!-- <a href="#contact" id="hire-btn" class="target">
                            hire me</a> -->
                        <div class="paragraph py-4 w-75">
                            <p class="para">
                                    2+ years of extensive professional experience and skills in HTML5, CSS3, SASS/SCSS, less, React, Redux, Javascript, ES6, jQuery, AJAX, Bootstrap 4,  
                                    and specializing in PSD to HTML5 semantic conversion with keen attention to details. Working knowledge 
                                    of design tools such as Sketch, Illustrator and Photoshop. Currently working as a freelancer and 
                                    looking for full time opportunity.
                            </p>
                            <p class="para">
                                I believe anything can be overcome through commitment and hardwork. Always up for learning new things.
                            </p>
                        </div>
                        <a href="/resume.pdf" target="_blank" class="btn button primary-button text-uppercase">Download cv</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- skills section -->
        <section id="skills" class="skills-area">
            <div class="container">
                <div class="row">
                    <h1 class="title-h1 col-12 mb-5 text-uppercase">My Speciality</h1>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="first-row row">
        
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-brand">
                                    <img src="./img/brands/logo1.png" alt="Brand-1 ">
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-brand">
                                    <img src="./img/brands/logo2.png" alt="Brand-2 ">
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-brand">
                                    <img src="./img/brands/logo3.png" alt="Brand-3 ">
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-brand">
                                    <img src="./img/brands/logo4.png" alt="Brand-4">
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-brand">
                                    <img src="./img/brands/logo5.png" alt="Brand-5 ">
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-brand">
                                    <img src="./img/brands/logo6.png" alt="Brand-6">
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-brand">
                                    <img src="./img/brands/logo7.png" alt="Brand-7 ">
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-brand">
                                    <img src="./img/brands/logo8.png" alt="Brand-8 ">
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-brand">
                                    <img src="./img/brands/logo9.png" alt="Brand-9">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="experience-area">
                            <div class="d-flex flex-row years-area">
                                <h2 class="p-3 years">2<sup>+</sup></h2>
                                <h2>
                                    <span>Years</span>
                                    <span>Experience</span>
                                    <span>Working</span>
                                </h2>
                            </div>
                            <div class="d-flex flex-row flex-wrap call-area">
                                <span><i class="fas fa-phone-alt fa-3x px-3"></i></span>
                                <div class="call-now">
                                    <a href="tel:+61452424565" class="text-uppercase h4 font-roboto">Call Now</a>
                                    <span class="font-roboto py-2">(+61) 452 424 565</span>
                                </div>
                            </div>
                            <div class="bg-panel"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- project section -->
        <section id="project" class="project-area">
            <div class="container">
                <div class="project-title pb-5">
                    <h1 class="text-uppercase title-h1">Recently Done Project</h1>
                    <h1 class="text-uppercase title-h1">Quality Work</h1>
                </div>
        
                <!-- <div class="button-group">
                    <button type="button" class="active" id="btn1" data-filter="*">All</button>
                    <button type="button" data-filter=".popular">Popular</button>
                    <button type="button" data-filter=".latest">Latest</button>
                    <button type="button" data-filter=".following">Following</button>
                    <button type="button" data-filter=".upcoming">Upcoming</button>
                </div> -->
        
                <div class="row grid mx-lg-n5">
                    <div class="col-lg-6 col-md-6 col-sm-12 element-item latest px-lg-5">
                        <div class="our-project">
                            <div class="img">
                                <img src="./img/portfolio/p1.png" alt="portfolio-1" class="img-fluid">
                                <div class="link-wrapper ">
                                    <a target="_blank" href="https://github.com/Bivektamu/eshop">View Code <i class="fab fa-github"></i></a>
                                    <a target="_blank" href="https://mobilestore-reactproject.netlify.com/">View Live <i class="fas fa-link"></i></a>
                                </div>
                            </div>
                            <div class="title py-4">
                                <h4 class="text-uppercase">Mobile Store</h4>
                                <!-- <span class="text-secondary">Latest, Portfolio</span> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 element-item popular px-lg-5">
                        <div class="our-project">
                            <div class="img">
                                <img src="./img/portfolio/p2.png" alt="portfolio-2" class="img-fluid">
                                <div class="link-wrapper ">
                                    <a href="#">View Code <i class="fab fa-github"></i></a>
                                    <a href="#">View Live <i class="fas fa-link"></i></a>
                                </div>
                            </div>
                            <div class="title py-4">
                                <h4 class="text-uppercase">Real Estate Web App</h4>
                                <!-- <span class="text-secondary">Popular, Portfolio</span> -->
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>

        <!-- contact section -->
        <section id="contact" class="contact-area">
            <div class="container">
                <div class="social text-center">
                    <h1 class="title-h1 text-uppercase">Contact</h1>
                    <a href="https://www.facebook.com/bivek.tamu.5" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="mailto:bivek.tamu@gmail.com"><i class="far fa-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/bivek-gurung-b4602a62/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/bivektamu/" target="_blank"><i class="fab fa-github"></i></a>
                </div>  
            </div>
        </section>
    </main>


    <!--  custom js file  -->
    <script src="./js/main.js"></script>

    
    <script type="text/javascript">
        

    </script>

</body>

</html>