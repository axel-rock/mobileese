<script lang="ts">
	const customerTypes = {
		enterprise: 'Entreprise',
		mobility_operator: 'Opérateur de mobilité',
		local_community: 'Collectivité locale',
		condominium: 'Syndicat de copropriété'
	};

	const speeds = {
		slow: 'lent',
		fast: 'rapide'
	};

	export let id: string;
	export let customerType: string;
	export let email: string;
	export let address: string;
	export let lat: number;
	export let lng: number;
	export let images: string[];
	export let numberOfParkingSpots: number;
	export let chargingSpeed: number;
</script>

<article>
	<p>
		<b>{customerTypes[customerType]} </b> souhaite <b>{numberOfParkingSpots} </b> points de charge
		<b>{speeds[chargingSpeed]}{numberOfParkingSpots > 1 ? 's' : ''} </b>
	</p>
	<p>{address}</p>
	<a href="mailto:{email}">{email}</a>
</article>

<style>
	article {
		background-color: #0001;
		border-radius: 1rem;
		padding: 1rem;
		margin: 1rem;
		gap: 0;
	}
</style>
