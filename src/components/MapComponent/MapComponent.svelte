<script lang="ts">
    import L from "leaflet";
    import "leaflet/dist/leaflet.css";
    import { onMount } from "svelte";

    async function leafletMap() {
        var map = await L.map("map", {
            center: [51.505, -0.09],
            zoom: 13,
        });
    }
    onMount(() => {
        leafletMap();
    });
</script>

    <div id="map" class="-z-10 h-screen"></div>
