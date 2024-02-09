<script lang="ts">
    import L from "leaflet";
    import "leaflet/dist/leaflet.css";
    import { onMount } from "svelte";
    import { fetchUserLocation } from "../../functions/userLocation";

    let userLocation: { latitude: any; longitude: any } | null = null;
    let error = null;

    async function getUserLocation() {
        try {
            userLocation = await fetchUserLocation();
            leafletMap();
        } catch (err) {
            error = err;
        }
    }

    onMount(() => {
        getUserLocation();
    });

    async function leafletMap() {
        if (userLocation) {
            var map = await L.map("map", {
                center: [userLocation.latitude, userLocation.longitude],
                zoom: 13,
            });

            L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
                attribution:
                    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            }).addTo(map);

            var marker = L.marker([
                userLocation.latitude,
                userLocation.longitude,
            ]).addTo(map);
        }
    }
</script>

<div id="map" class=" z-0 h-screen"></div>
