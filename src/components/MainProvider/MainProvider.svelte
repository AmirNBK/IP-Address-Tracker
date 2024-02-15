<script lang="ts">
    import { createQuery } from "@tanstack/svelte-query";
    import HeaderComponent from "../HeaderComponent/HeaderComponent.svelte";
    import MapComponent from "../MapComponent/MapComponent.svelte";
    import { fetchUserData, finalIp } from "../../functions/store";
    import { onMount } from "svelte";

    let previousFinalIp: null | string = null;

    const query = createQuery({
        queryKey: ["userInfo"],
        queryFn: async () => {
            return await fetchUserData($finalIp);
        },
    });

    onMount(() => {
        previousFinalIp = $finalIp;
    });

    $: {
        if ($finalIp !== previousFinalIp) {
            $query.refetch();
            previousFinalIp = $finalIp;
        }
    }
</script>

<div class="MainProvider relative">
    <HeaderComponent {query} />
    <MapComponent {query} />
</div>
