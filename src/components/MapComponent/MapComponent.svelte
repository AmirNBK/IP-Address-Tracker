<script lang="ts">
    import L from "leaflet";
    import "leaflet/dist/leaflet.css";
    import { onMount } from "svelte";
    
    async function leafletMap() {
        var map = await L.map("map", {
            center: [51.505, -0.09],
            zoom: 13,
        });

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution:
                '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        var marker = L.marker([51.5, -0.09]).addTo(map);
    }
    onMount(() => {
        leafletMap();
    });
</script>

<div id="map" class="-z-10 h-screen"></div>
