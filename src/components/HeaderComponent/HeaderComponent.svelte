<script>
    import { fetchUserData, ip, ipChange } from "../../functions/store";
    import image from "../../images/pattern-bg-desktop.png";
    import InfoComponent from "../InfoComponent/InfoComponent.svelte";
    import SearchBarComponent from "../SearchBarComponent/SearchBarComponent.svelte";
    import { createQuery } from "@tanstack/svelte-query";
    import { onMount } from "svelte";


    export const query = createQuery({
        queryKey: ["userInfo"],
        queryFn: async () => {
            const ipAddress = $ip;
            return await fetchUserData(ipAddress);
        },
    });

</script>

<div class="Header relative z-10 h-72">
    <p
        class="absolute text-3xl left-1/2 w-full -translate-x-1/2 top-6 font-semibold"
    >
        IP Address Tracker
    </p>
    <img
        src={image}
        class="w-full object-cover h-full"
        alt="Pattern Background"
    />
    <div
        class="absolute left-1/2 xl:top-1/3 top-32 -translate-x-1/2 -translate-y-1/2 lg:w-4/12 w-10/12"
    >
        <SearchBarComponent />
    </div>

    {#key $query.data}
        <div class="w-full absolute md:top-2/3 top-44">
            {#if $query.isLoading}
                Loading...
            {/if}
            {#if $query.isSuccess}
                <InfoComponent
                    IP={$query.data.ip}
                    Location={`${$query.data.country_name}, ${$query.data.city}`}
                    Timezone={$query.data.time_zone.offset}
                    ISP={$query.data.isp}
                />
            {/if}
        </div>
    {/key}
</div>

<style>
</style>
