<template>
    <!-- Intro -->
    <section id="welcome" class="wrapper style1 fullscreen fade-up">
        <div class="inner">
            <img class="profile-img" src="@/assets/perfil.jpeg" alt="profile-img" data-position="top center"/>
            <h1>Hi!, Welcome to my portfolio</h1>
            <h2>I'm Diego Arreola, Full Stack developer</h2>
            <p>
                Computer Systems Engineer with almost 3 years of experience in development such as BACKEND and FRONTEND, experience in: Javascript, Typescript, PHP and Python, knowledge in administration and configuration of SMTP emails, basic knowledge of LINUX server administration, 6 years of experience in the design of websites with HTML/CSS or CMS, experience in web development frameworks ReactJS, VueJS, MarionetteJS, BackboneJS, Laravel 7.x, 8.x, 9.x, 10.x, experience in database design and administration SQL and NoSQL data.
            </p>
            <p class="img-text">
                <img src="@/assets/itclogo.png" width="100px" alt="itcelaya-logo" style="margin-right: 10px;" />
                <span>
                    <strong>Graduated from the National Technological Institute of Mexico in Celaya.</strong>
                    <br>
                    <small>Dec 2022</small>
                </span>
            </p>
        </div>
    </section>

    <!-- One -->
    <section id="experience" class="wrapper style2 spotlights">
        <div class="container text-center">
            <h1>&lt; Experience /&gt;</h1>
        </div>
        <section>
            <CarouselWidget :gallery="['websites/apdevs.png', 'websites/dulce.png', 'websites/brow.png', 'websites/cgp.png']" :widht="'500px'" :height="'400px'"></CarouselWidget>
            <div class="content">
                <div class="inner">
                    <h2>My websites designed</h2>
                    <p>I´ve developed too much websites using CMS like Wordpress or Shopify but also with only HTML, CSS and JS. I started to design 5 years ago when started the university.</p>
                    <ul class="actions">
                        <li><a href="generic.html" @click.prevent="openModal('DesignView')" class="button">Learn more</a></li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="mobile-align">
            <div class="content">
                <div class="inner">
                    <h2>Systems where I've developed</h2>
                    <p>I currently have 2 years of experience in the development area where I've participated in different development full stack projects principally using <strong>Laravel (PHP)</strong> for back and <strong>MarrionetteJS, BackboneJS and VueJS (JavaScript)</strong> in frontend.</p>
                    <ul class="actions">
                        <li><a href="generic.html" @click.prevent="openModal('ProgrammingView')" class="button">Learn more</a></li>
                    </ul>
                </div>
            </div>
            <CarouselWidget :gallery="['systems/pos.png', 'systems/mahlen.png', 'systems/facturacion.png']" :widht="'500px'" :height="'400px'"></CarouselWidget>
        </section>
        <section>
            <CarouselWidget :gallery="['others/vesta.png', 'others/cloud.png']" :widht="'500px'" :height="'400px'"></CarouselWidget>
            <div class="content">
                <div class="inner">
                    <h2>Some other activities in the area</h2>
                    <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                    <ul class="actions">
                        <li><a href="generic.html" @click.prevent="openModal('OthersView')" class="button">Learn more</a></li>
                    </ul>
                </div>
            </div>
        </section>
    </section>

    <!-- Two -->
    <section id="technologies" class="wrapper style3 fade-up">
        <div class="inner">
            <h2>Languages, Technologies and Tools</h2>
            <p>Technologies with which I have experience, whether in personal or work projects.</p>
            <div class="features">
                <section>
                    <span class="icon"><i class="fa-brands fa-js"></i></span>
                    <h3>Javascript</h3>
                    <p>I have <strong>2 years of experience</strong> programming with JavaScript focused on frontend development, the technologies that I've used are the following: <strong>MarionetteJS, BackboneJS, VueJS, ReactJS, JQuery, Promise-based HTTP, JavaScript vanilla, API RESTful</strong></p>
                    <div class="icons-container">
                        <i class="fa-brands fa-vuejs"></i>
                        <i class="fa-brands fa-react"></i>
                        <i class="fa-brands fa-js"></i>
                    </div>
                </section>
                <section>
                    <span class="icon"><i class="fa-brands fa-php"></i></span>
                    <h3>Backend</h3>
                    <p>I have <strong>2 years of experience</strong> programming with php focused on backend development, the technologies that I have used with this language are the following: <strong>Laravel, PHP vanilla, SQL, Create API's' endpoints</strong></p>
                    <div class="icons-container">
                        <i class="fa-brands fa-laravel"></i>
                        <i class="fa-brands fa-php"></i>
                    </div>
                </section>
                <section>
                    <span class="icon"><i class="fa-solid fa-terminal"></i></span>
                    <h3>Tools to developed</h3>
                    <p>During these 2 years of development I have used several tools that have helped me develop in a more efficient way and keep track of the versions of the application under development, these tools are following: <strong>HTML5, CSS3, Boostrap, Wordpress, Shopify, Postman, Git, Github, GitLab, Visual Studio Code, Sublime Text, Databases management tools, flowcharts, Databases flowcharts, SCRUM</strong></p>
                </section>
                <section>
                    <span class="icon"><i class="fa-solid fa-screwdriver-wrench"></i></span>
                    <h3>Other tools in work</h3>
                    <p>I have also used other tools that were required to accomplish the requested tasks: <strong>Anydesk, TeamViewer, SMTP mails, Outlook, MacOS, Windows, Linux, Cloudfire, Vesta, CPanel, Zoom, Office</strong>.</p>
                </section>
            </div>
        </div>
    </section>

    <!-- Three -->
    <section id="three" class="wrapper style1 fade-up">
        <div class="inner">
            <h2>Contact to me</h2>
            <p>If you are interested in contacting me, you have my email and CV or my contact information available, if you prefer, you can use the following form and send an email right now.</p>
            <div class="split style1">
                <section>
                    <form @submit.prevent="sendEmail">
                        <div class="fields">
                            <div class="field half">
                                <label for="name">Name</label>
                                <input type="text" v-model="mailData.name" required />
                            </div>
                            <div class="field half">
                                <label for="email">Email</label>
                                <input type="email" v-model="mailData.email" required />
                            </div>
                            <div class="field">
                                <label for="subject">Subject</label>
                                <input type="text" v-model="mailData.subject" required />
                            </div>
                            <div class="field">
                                <label for="message">Message</label>
                                <textarea v-model="mailData.message" rows="5" required></textarea>
                            </div>
                        </div>
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <input type="submit" class="button submit" value="Send Message">
                        </div>
                    </form>
                </section>
                <section id="my-cv">
                    <ul class="contact">
                        <li>
                            <h3>Donwload my CV</h3>
                            <a href="./files/CV_Arreola_Galvan_Diego_EN.pdf" style="margin-right: 10px;" download><img src="@/assets/languages/eng.png" alt="cv-eng"/></a>
                            <a href="./files/CV_Arreola_Galvan_Diego.pdf" download><img src="@/assets/languages/esp.png" alt="cv-eng"/></a>
                        </li>
                        <li>
                            <h3>Lcoation</h3>
                            <span>Celaya, Guanajuato. MX</span>
                        </li>
                        <li>
                            <h3>Email</h3>
                            <a href="mailto:arreola.galvan.diego@gmail.com">arreola.galvan.diego@gmail.com</a>
                        </li>
                        <li>
                            <h3>Social Networks</h3>
                            <a href="https://www.linkedin.com/in/arreola-galvan-diego/"><i class="fa-brands fa-linkedin" style="font-size: 50px;"></i></a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </section>

    <vs-modal class="modal" ref="DesignView" title="My websites designed" :removeCloseButton="true" size="l">
        <div class="modal-body">
            <DesignView></DesignView>
        </div>
        <div class="modal-footer">
            <button class="btn-modal" @click="closeModal('DesignView')">Close</button>
        </div>
        <hr style="visibility: hidden; height: 20px;">
    </vs-modal>

    <vs-modal class="modal" ref="ProgrammingView" title="I've programmed" :removeCloseButton="true" size="l">
        <div class="modal-body">
            <ProgrammingView></ProgrammingView>
        </div>
        <div class="modal-footer">
            <button class="btn-modal" @click="closeModal('ProgrammingView')">Close</button>
        </div>
        <hr style="visibility: hidden; height: 20px;">
    </vs-modal>

    <vs-modal class="modal" ref="OthersView" title="Some other activities in the area" :removeCloseButton="true" size="l">
        <div class="modal-body">
            <OthersView></OthersView>
        </div>
        <div class="modal-footer">
            <button class="btn-modal" @click="closeModal('OthersView')">Close</button>
        </div>
        <hr style="visibility: hidden; height: 20px;">
    </vs-modal>
    <Notivue v-slot="item">
        <Notification :item="item" />
    </Notivue>
</template>

<script>
    import CarouselWidget from '@/widgets/CarouselWidget';
    import VsModal from "@vuesimple/vs-modal";
    import DesignView from '@/views/DesignView';
    import ProgrammingView from '@/views/ProgrammingView';
    import OthersView from '@/views/OthersView';
    import { Notivue, Notification, push } from 'notivue';
    import { updateConfig } from 'notivue'

    export default {
        mounted () {
            updateConfig({
                position: 'bottom-left',
            });
        },
        data () {
            return {
                mailData: {
                    email: '',
                    name: '',
                    subject: '',
                    message: '',
                }
            }
        },
        components: {
            CarouselWidget,
            VsModal,
            DesignView,
            ProgrammingView,
            OthersView,
            Notivue,
            Notification
        },
        methods: {
            openModal(ref) {
                this.$refs[ref].open();
            },
            closeModal(ref) {
                this.$refs[ref].close();
            },
            async sendEmail() {
                const notification = push.promise("We're sending your message, hold on...")

                await window.Email.send({
                    Host : "smtp.elasticemail.com",
                    Port: 2525,
                    Username : "arreola.galvan.diego@gmail.com",
                    Password : "65FB46A8A6F27979A9316D030C838444ACBC",
                    To : 'arreola.galvan.diego@gmail.com',
                    From : 'arreola.galvan.diego@gmail.com',
                    Subject : `${this.mailData.subject}`,
                    Body : `<h1>Correo de contacto portafolio web</h1><p><b>${this.mailData.name}</b> &lt;${this.mailData.email}&gt;</p><p>Mensaje:<br>------------------------------------------<br>${this.mailData.message}</p>`
                })
                .then((message) => {
                    setTimeout(() => {
                        notification.resolve({
                            title: message,
                            message: 'Your message has been successfully sent!',
                            position: 'bottom-right',
                        });
                        this.clearForm();
                    }, 2000);
                })
                .catch(error => {
                    setTimeout(() => {
                        notification.reject({
                            title: error,
                            message: 'There was an error sending your message. Please try again.'
                        });
                    }, 2000);
                });
            },
            clearForm () {
                this.mailData.email = '';
                this.mailData.name = '';
                this.mailData.subject = '';
                this.mailData.message = '';
            }
        },
    }
</script>

<style>
@import 'notivue/notification.css';
@import 'notivue/animations.css';
</style>
