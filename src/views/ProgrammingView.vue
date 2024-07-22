<template>
	<CarouselWidget :gallery="[
		'systems/horizontal/pos.png',
		'systems/horizontal/facturacion.png',
		'systems/horizontal/mahlen.png',]"
		:widht="'800px'" :height="'462px'"></CarouselWidget>
		<br>

		<h3 style="color: black;">Some of my projects developed</h3>
		<p>I've participated in the development of these 3 systems principally developing the fullstack role since I modified both the backend and the frontend.</p>
		<h4 style="color: black;">Technologies i used</h4>
		<ul>
			<li>Laravel 5.* - 10.* (backend and frontend)</li>
			<li>MarionetteJS (frontend)</li>
			<li>BackboneJS</li>
			<li>Swig</li>
			<li>VueJS</li>
			<li>JQuery</li>
			<li>Promise-based HTTP</li>
			<li>PHP and Javascript vanilla</li>
			<li>Version control software GitHub and GitLab</li>
		</ul>
		<ul class="alt botom-border-list portfolio-list">
			<li>
				<strong class="black">
					<a href="https://pos.apdevs.com" target="_blank">Point of Sale (Img. 1)</a>
				</strong>
				<br>
				It's the first system developed for the company and therefore the first that I modified, it is a system for information and inventory management for a business, basically it is an ERP that is in constant development. In this project I worked on both the backend (Laravel) and the frontend (Marionette, Backbone and JavaScript).
				<br><br>
				Some modules i developed were:
				<ul>
					<li>
						Module to generate barcodes to products and print it with 128 code bar. (Full stack development PHP and JS)
					</li>
					<li>
						Option to add IVA in products cost and automatically put new cost with IVA. (Full stack development)
					</li>
					<li>
						Endpoint and command to register pos in self-invoicing system. (Full stack development)
					</li>
					<li>
						Features to an university that's using this system. (Full stack development)
					</li>
					<li>
						Reports to download (xls, print in web, etc). (Full stack development)
					</li>
					<li>
						Solve bugs and extra features. (Full stack development)
					</li>
				</ul>
			</li>
			<li>
				<strong class="black">
					<a href="https://facturacion.apdevs.com/" target="_blank">Self Invoicing System (Img. 2)</a>
				</strong>
				<br>
				This is a system that was completely designated to me, i developed it fullstack and deploy the system, the purpose of this system was to allow the customer to generate the invoice for their purchase without need for the staff to generate it when bought it.
				<br>
				This system needs another system in this case it is point of sale, so I developed some endpoints in the point of sale system to register the store in a database with all the systems available to use this system, which takes the ID of store, customer billing data and purchase data to generate the invoice, this invoice was generated in the POS at the same time and was saved for consultation.
				<br><br>
				What I developed:
				<ul>
					<li>
						Backend for POS requests, data processing and storage as well as the design of the database and registration for the stores associated with the app using Laravel (PHP).
					</li>
					<li>
						Design of views with forms for invoice data. (PHP using Blade from Laravel).
					</li>
					<li>
						Testing enpoints using an apis platform
					</li>
					<li>
						Modification of the point of sale code for the correct functioning of the issuing and receiving of invoices.
					</li>
				</ul>
			</li>
			<li>
				<strong class="black">
					<a href="https://disa.apdevs.com/" target="_blank">Warehouse resource management system (Img. 3)</a>
				</strong>
				<br>
				This system was developed for the administration and output of merchandise in a company, generating saida vouchers at the same time that these could have different statuses (approved, rejected, etc.) to keep control over the parts and costs that came out. I participated in the development of the project as a fullstack, developing modules as views.
				<br>
				I developed:
				<br>
				<ul>
					<li>
						Creation of migrations for the database as well as relationships between existing and new tables.
					</li>
					<li>
						Module for administration of departments, warehouse, staff that uses last two modules to create a staff.
					</li>
					<li>
						Module for managing output voucher, total of parts and cost as well as the change of state between them (approved, rejected, etc.).
					</li>
					<li>
						Interfaces for all created modules and their actions.
					</li>
					<li>
						Report of vouchers generated with the pieces included ready to export in a xls format.
					</li>
					<li>
						Automatic personnel upload using an xls.
					</li>
				</ul>
			</li>
		</ul>
</template>

<script>
	import CarouselWidget from '@/widgets/CarouselWidget';

	export default {
		components: {
			CarouselWidget
		}
	}
</script>

