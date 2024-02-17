<script>
    import { fade } from "svelte/transition";
    export let query;
    import image from "../../images/pattern-bg-desktop.png";
    import InfoComponent from "../InfoComponent/InfoComponent.svelte";
    import SearchBarComponent from "../SearchBarComponent/SearchBarComponent.svelte";
    import invalidIp from '../../assets/invalidIp.png'
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

    <div class="w-full absolute md:top-2/3 top-44">
        {#if $query.isLoading}
            Loading...
        {/if}
        <div transition:fade>
            {#if $query.isSuccess}
                {#key $query.data}
                    <InfoComponent
                        IP={$query.data.ip}
                        Location={`${$query.data.country_name}, ${$query.data.city}`}
                        Timezone={$query.data.time_zone.offset}
                        ISP={$query.data.isp}
                    />
                {/key}
            {/if}
            {#if $query.error}
                <div
                    class="InfoComponent bg-white rounded-lg flex flex-col items-center text-black w-8/12 md:w-4/12 md:p-6 p-4 mx-auto flex flex-row justify-around gap-4"
                >
                <img src={invalidIp} class="md:w-16 w-12"/>
                    <p class="md:text-lg text-sm text-red-600">
                        Please enter a valid IP address and try again
                    </p>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
</style>
