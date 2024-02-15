<script lang="ts">
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
  const queryClient = new QueryClient();
  import MainProvider from "./components/MainProvider/MainProvider.svelte";
</script>

<main class=" h-full">
  <QueryClientProvider client={queryClient}>
    <MainProvider />
  </QueryClientProvider>
</main>
