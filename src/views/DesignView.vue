<template>
	<CarouselWidget :gallery="[
		'websites/horizontal/apdevs.png',
		'websites/horizontal/dulce.png',
		'websites/horizontal/brow.png',
		'websites/horizontal/doctor.png']"
		:widht="'800px'" :height="'462px'"></CarouselWidget>
		<br>
		<p>
			These are some websites i've designed, the final client used to hired a graphic designer that gave to me a final design to develop my job in these cases was designed keep these design, finally when the website was done I gave a capacitation to final client for teach how they can manage the website.
		</p>
		<h3 style="color: black;">Website's links</h3>
		<p>Here you´re gonna find the url of the websites, <strong style="color: #6d41a1;">if u want to look up click on website's title.</strong></p>
		<ul class="alt botom-border-list portfolio-list">
			<li>
				<strong class="black">
					<a href="https://apdevs.com" target="_blank">APDevs</a>
				</strong>
				<br>
				Website of my current comapny.
			</li>
			<li>
				<strong class="black">
					<a href="https://dulcerojo.com.mx/" target="_blank">Dulce Rojo</a>
				</strong>
				<br>
				Pastry shop in Toluca
			</li>
			<li>
				<strong class="black">
					<a href="https://thebrowstudio.mx/" target="_blank">The Brow Studio</a>
				</strong>
				<br>
				Beauty salon in CDMX.
			</li>
			<li>
				<strong class="black">
					<a href="https://doctormanzo.com/" target="_blank">Doctor Manzo</a>
				</strong>
				<br>
				Fertility clinic in Edo. México.
			</li>
		</ul>
		<p>This websites were developed with CMS (Wordpress, Shopify), HTML/JS/CSS</p>
</template>

<script>
	import CarouselWidget from '@/widgets/CarouselWidget';

	export default {
		components: {
			CarouselWidget
		}
	}
</script>

