<script lang="ts">
    import ip from "../../functions/store";
    import arrow from "../../images/icon-arrow.svg";

    function handleInput(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        if (inputElement) {
            ip.set(inputElement.value);
        }
    }
    $: {
        console.log($ip);
    }
</script>

<div class="SearchBarComponent relative">
    <input
        placeholder="Search for any IP address or domain"
        class="w-full bg-white rounded-xl p-4 outline-none text-black placeholder:text-sm md:placeholder:text-base"
        on:input={handleInput}
    />

    <div
        class="absolute bg-black w-[12%] right-0 rounded-r-xl top-0 h-full flex flex-col items-center justify-center"
    >
        <img src={arrow} alt="arrow" />
    </div>
</div>

<style>
</style>
