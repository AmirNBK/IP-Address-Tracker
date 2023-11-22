<script>
    import image from "../../images/pattern-bg-desktop.png";
    import InfoComponent from "../InfoComponent/InfoComponent.svelte";
    import SearchBarComponent from "../SearchBarComponent/SearchBarComponent.svelte";
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
        <InfoComponent
            IP="192.212.23.451"
            Location="Brooklyn, NY"
            Timezone="05:00"
            ISP="SpaceX"
        />
    </div>
</div>

<style>
</style>
