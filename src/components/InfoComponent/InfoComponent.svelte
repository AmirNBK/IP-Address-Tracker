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
  class="InfoComponent bg-white rounded-lg flex flex-row text-black w-fit p-12 mx-auto flex flex-row justify-around gap-6"
>
  {#each infos as item}
    <div
      class="flex flex-col items-start pl-6 border-l border-solid border-[#D0D4CA] first:border-none gap-2"
    >
      <p class="text-[#9A9A9A] font-bold">{item.title}</p>
      <p class="text-2xl font-bold">{item.info}</p>
    </div>
  {/each}
</div>

<style>
</style>
