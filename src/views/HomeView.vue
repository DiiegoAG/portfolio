<template>
    <!-- Intro -->
    <section id="welcome" class="wrapper style1 fullscreen fade-up">
        <div class="inner">
            <img class="profile-img" src="@/assets/perfil.jpeg" alt="profile-img" data-position="top center"/>
            <h1>Hi!, Welcome to my portfolio</h1>
            <h2>I'm Diego Arreola, Full Stack developer</h2>
            <p>
                I'm from Mexico, <strong>25 years old</strong>, currently live in Celaya, Gto.
                <br>
                My favorites languages to program are <strong>PHP</strong> for back-end & <strong>JavaScript</strong> for front-end. I've worked with Java, C++ and a little bit Python.
                <br>
                I usually use <strong>Laravel</strong> for back-end & <strong>VueJS</strong> for front-end, at the moment i'm using Laravel for back-end and a mix of old frameworks like <strong>Marionette & BackBone</strong>.
                <br>
                I've developed websites with <strong>CMS</strong> like <strong>Wordpress & Shopify</strong>, personally i like to use Wordpress.
                <br>
                Also i've designed to many websites using <strong>HTML, CSS & Javascript</strong>.
            </p>
            <p class="img-text">
                <img src="@/assets/itclogo.png" width="100px" alt="itcelaya-logo"/>
                <span>
                    <strong>&nbsp; Graduated from the National Technological Institute of Mexico in Celaya.</strong>
                    <br>
                    <small>&nbsp; Jun 2023</small>
                </span>
            </p>
        </div>
    </section>

    <!-- One -->
    <section id="worked-in" class="wrapper style2 spotlights">
        <div class="container text-center">
            <h1>&lt; Projects where i've participated /&gt;</h1>
        </div>
        <section>
            <CarouselWidget :gallery="['websites/apdevs.png', 'websites/dulce.png', 'websites/brow.png', 'websites/cgp.png']" :widht="'500px'" :height="'400px'"></CarouselWidget>
            <div class="content">
                <div class="inner">
                    <h2>Sed ipsum dolor</h2>
                    <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                    <ul class="actions">
                        <li><a href="generic.html" class="button">Learn more</a></li>
                    </ul>
                </div>
            </div>
        </section>
        <section>
            <div class="content">
                <div class="inner">
                    <h2>Sed ipsum dolor</h2>
                    <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                    <ul class="actions">
                        <li><a href="generic.html" class="button">Learn more</a></li>
                    </ul>
                </div>
            </div>
            <CarouselWidget :gallery="['systems/pos.png', 'systems/mahlen.png', 'systems/facturacion.png']" :widht="'500px'" :height="'400px'"></CarouselWidget>
        </section>
        <section>
            <CarouselWidget :gallery="['others/vesta.png', 'others/cloud.png']" :widht="'500px'" :height="'400px'"></CarouselWidget>
            <div class="content">
                <div class="inner">
                    <h2>Sed ipsum dolor</h2>
                    <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                    <ul class="actions">
                        <li><a href="generic.html" class="button">Learn more</a></li>
                    </ul>
                </div>
            </div>
        </section>
    </section>

    <!-- Two -->
    <section id="two" class="wrapper style3 fade-up">
        <div class="inner">
            <h2>What we do</h2>
            <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
            <div class="features">
                <section>
                    <span class="icon solid major fa-code"></span>
                    <h3>Lorem ipsum amet</h3>
                    <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                </section>
                <section>
                    <span class="icon solid major fa-lock"></span>
                    <h3>Aliquam sed nullam</h3>
                    <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                </section>
                <section>
                    <span class="icon solid major fa-cog"></span>
                    <h3>Sed erat ullam corper</h3>
                    <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                </section>
                <section>
                    <span class="icon solid major fa-desktop"></span>
                    <h3>Veroeros quis lorem</h3>
                    <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                </section>
                <section>
                    <span class="icon solid major fa-link"></span>
                    <h3>Urna quis bibendum</h3>
                    <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                </section>
                <section>
                    <span class="icon major fa-gem"></span>
                    <h3>Aliquam urna dapibus</h3>
                    <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                </section>
            </div>
            <ul class="actions">
                <li><a href="generic.html" class="button">Learn more</a></li>
            </ul>
        </div>
    </section>

    <!-- Three -->
    <section id="three" class="wrapper style1 fade-up">
        <div class="inner">
            <h2>Get in touch</h2>
            <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
            <div class="split style1">
                <section>
                    <form method="post" action="#">
                        <div class="fields">
                            <div class="field half">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div class="field half">
                                <label for="email">Email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div class="field">
                                <label for="message">Message</label>
                                <textarea name="message" id="message" rows="5"></textarea>
                            </div>
                        </div>
                        <ul class="actions">
                            <li><a href="" class="button submit">Send Message</a></li>
                        </ul>
                    </form>
                </section>
                <section>
                    <ul class="contact">
                        <li>
                            <h3>Address</h3>
                            <span>12345 Somewhere Road #654<br />
                                Nashville, TN 00000-0000<br />
                            USA</span>
                        </li>
                        <li>
                            <h3>Email</h3>
                            <a href="#">user@untitled.tld</a>
                        </li>
                        <li>
                            <h3>Phone</h3>
                            <span>(000) 000-0000</span>
                        </li>
                        <li>
                            <h3>Social</h3>
                            <ul class="icons">
                                <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                                <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                                <li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
                                <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                                <li><a href="#" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
    import CarouselWidget from '@/widgets/CarouselWidget'
    export default {
        components: {
            CarouselWidget
        }
    }
</script>
