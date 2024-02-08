<script>
    import image from "../../images/pattern-bg-desktop.png";
    import InfoComponent from "../InfoComponent/InfoComponent.svelte";
    import SearchBarComponent from "../SearchBarComponent/SearchBarComponent.svelte";
    import { createQuery } from "@tanstack/svelte-query";
    import { onMount } from "svelte";

    const query = createQuery({
        queryKey: ["userInfo"],
        queryFn: async () =>
            await fetch(
                "https://geo.ipify.org/api/v2/country?apiKey=at_7IQs4y42x4L1YVtt6ZKtWHI6WkwyV",
            ).then((r) => r.json()),
    });

    $: {
            console.log("Response data changed:", $query.data);
    }
</script>

<div class="Header relative">
    <p class="absolute text-3xl left-1/2 -translate-x-1/2 top-6 font-semibold">
        IP Address Tracker
    </p>
    <img src={image} class="w-full" alt="Pattern Background" />
    <div
        class="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-4/12"
    >
        <SearchBarComponent />
    </div>

    <div class="w-full absolute top-2/3">
        {#if $query.isPending}
            Loading...
        {/if}
        {#if $query.isSuccess}
            <InfoComponent
                IP={$query.data.ip}
                Location={`${$query.data.location.region}, ${$query.data.location.country}`}
                Timezone={$query.data.location.timezone}
                ISP={$query.data.isp}
            />
        {/if}
    </div>
</div>

<style>
</style>
