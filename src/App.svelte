<script lang="ts">
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
  const queryClient = new QueryClient();
  import HeaderComponent from "./components/HeaderComponent/HeaderComponent.svelte";
  import MapComponent from "./components/MapComponent/MapComponent.svelte";
</script>

<main class=" h-full">
  <QueryClientProvider client={queryClient}>
    <HeaderComponent />
    <MapComponent />
  </QueryClientProvider>
</main>
