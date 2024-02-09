<script lang="ts">
  export let IP: string;
  export let Location: string;
  export let Timezone: string;
  export let ISP: string;

  const infos = [
    {
      title: "IP Address",
      info: IP,
    },
    {
      title: "Location",
      info: Location,
    },
    {
      title: "Timezone",
      info: `UTC - ${Timezone}`,
    },
    {
      title: "ISP",
      info: ISP,
    },
  ];
</script>

<div
  class="InfoComponent bg-white rounded-lg flex md:flex-row flex-col text-black w-8/12 md:w-10/12 md:p-12 p-6 mx-auto flex flex-row justify-around md:gap-6 gap-4"
>
  {#each infos as item}
    <div
      class="flex flex-col md:items-start items-center md:pl-6 md:border-l border-solid border-[#D0D4CA] first:border-none gap-2"
    >
      <p class="text-[#9A9A9A] font-bold md:text-base text-sm">{item.title}</p>
      <p class="lg:text-2xl md:text-xl text-base font-bold text-left">{item.info}</p>
    </div>
  {/each}
</div>

<style>
</style>
