<script>
    import image from "../../images/pattern-bg-desktop.png";
    import SearchBarComponent from "../SearchBarComponent/SearchBarComponent.svelte";
</script>

<div class="Header relative">
    <p class="absolute text-3xl left-1/2 -translate-x-1/2 top-6 font-semibold">
        IP Address Tracker
    </p>
    <img src={image} class="w-full" alt="Pattern Background" />
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4/12">
        <SearchBarComponent />
    </div>
</div>

<style>
</style>
