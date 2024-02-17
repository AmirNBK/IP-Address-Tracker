<script lang="ts">
    export let query;
    import L from "leaflet";
    import "leaflet/dist/leaflet.css";
    import { finalIp } from "../../functions/store";
    import marker from "../../assets/marker.png";

    $: {
        $query.data;
        leafletMap();
    }

    async function leafletMap() {
        var map = await L.map("map", {
            center: [$query.data.latitude, $query.data.longitude],
            zoom: 13,
        });

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution:
                '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        var MarkerIcon = L.icon({
            iconUrl: marker,
            shadowUrl: "",

            iconSize: [46, 46],
            shadowSize: [50, 64],
            iconAnchor: [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor: [-3, -76],
        });
        L.marker([$query.data.latitude, $query.data.longitude], {
            icon: MarkerIcon,
        }).addTo(map);
    }
</script>

{#key $finalIp}
    <div id="map" class=" z-0 h-screen"></div>
{/key}
