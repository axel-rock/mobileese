<script lang="ts">
	// import type { PageData } from './$types';
	import type { Project } from '../../../project';
	import { PUBLIC_MAPBOX_TOKEN } from '$env/static/public';
	import { Geocoder, Map, controls } from '@beyonk/svelte-mapbox';
	import type { MapBoxGeocoderEvent } from '@beyonk/svelte-mapbox';

	export let project: Project = {
		images: []
	};
	export let mapComponent;
	export const { GeolocateControl, NavigationControl } = controls;
	export let center = { lat: 47.2184, lng: 1.5536 };
	export let files: FileList;

	function onFileChanges(e: Event) {
		// To Do, upload images and get a download URL
		project.images = [...(project.images || []), ...Array.from(files).map((file) => file.name)];
	}

	function onMapUpdate(e: MapBoxGeocoderEvent) {
		console.log(e);
		if (e.details?.result?.center) {
			// mapComponent.map.setCenter(e.details.result.center);
			project.lat = e.details.result.center[0];
			project.lng = e.details.result.center[1];
		}
	}

	function eventHandler(e) {
		console.log(e);
	}

	function nextStep() {
		console.log(e);
	}

	// export let data: PageData;
</script>

<form method="POST">
	<fieldset>
		<p>Trouver le meilleur interlocuteur pour vous, en 2 minutes.</p>
		<label for="customerType">Vous représentez :</label>
		<select name="customerType" id="customerType" bind:value={project.customerType} required>
			<option value="" selected disabled />
			<option value="enterprise">Entreprise</option>
			<option value="mobility_operator">Opérateur de mobilité</option>
			<option value="local_community">Collectivité locale</option>
			<option value="condominium">Syndicat de copropriété</option>
		</select>
	</fieldset>

	<fieldset>
		<label>Où se situe votre projet ?</label>
		<div>
			<Geocoder accessToken={PUBLIC_MAPBOX_TOKEN} on:result={onMapUpdate} />
		</div>
		<div class="map-container">
			<Map
				accessToken={PUBLIC_MAPBOX_TOKEN}
				bind:this={mapComponent}
				{center}
				options={{
					zoom: 2
				}}
			>
				<GeolocateControl options={{ some: 'control-option' }} on:eventname={eventHandler} />
				<!-- <NavigationControl /> -->
			</Map>
		</div>
	</fieldset>

	<fieldset>
		<label for="numberOfParkingSpots">Nombre de points de charge envisagés:</label>
		<input
			type="number"
			name="numberOfParkingSpots"
			id="numberOfParkingSpots"
			placeholder="ex: 10"
			required
			bind:value={project.numberOfParkingSpots}
		/>
	</fieldset>

	<fieldset>
		<label for="chargingSpeed">Vitesse de recharge:</label>
		<select name="chargingSpeed" id="chargingSpeed" bind:value={project.chargingSpeed} required>
			<option value="" selected disabled>Choisir ma puissance idéale </option>
			<option value="slow">Lente (jusqu'à 15kw)</option>
			<option value="fast">Rapide</option>
		</select>
	</fieldset>

	<fieldset>
		<label for="pictureOfParkingSpots">Avez-vous des photos des places de parking à équiper ?</label
		>
		<input
			type="file"
			name="pictureOfParkingSpots"
			id="pictureOfParkingSpots"
			accept="image/*"
			capture="environment"
			multiple
			bind:files
			on:change={onFileChanges}
		/>
		<button disabled>Passer cette étape</button>
	</fieldset>

	<fieldset>
		<label for="pictureOfGridSetup"
			>Avez-vous des photos de l'installation electique existante ?</label
		>
		<input
			type="file"
			name="pictureOfGridSetup"
			id="pictureOfGridSetup"
			accept="image/*"
			capture="environment"
			multiple
			bind:files
			on:change={onFileChanges}
		/>
		<button disabled on:click={nextStep}>Passer cette étape</button>
	</fieldset>

	<fieldset>
		<p>Merci pour ces informations, nous allons vous recontacter au plus vite.</p>
		<label for="email">Email:</label>
		<input type="email" name="email" id="email" bind:value={project.email} required />

		<button type="submit">C'est parti !</button>
	</fieldset>
</form>

<pre>
	{JSON.stringify(project, null, 2)}
</pre>

<style>
	.map-container {
		height: 400px;
	}

	form {
		gap: 0;
	}

	fieldset {
		padding: 1rem;
		margin: 0;
		border: 1px solid #ccc;
	}

	fieldset:has(.map-container) {
		padding: 1rem 0 0 0;
	}

	fieldset:has(.map-container) > *:not(.map-container) {
		margin: 1rem;
	}
</style>
