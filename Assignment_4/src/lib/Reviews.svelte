<script>
  import Card from "./Card.svelte";
  export let reviews = [];
</script>

<div class="row g-3">
  {#each reviews as review (review.createdAt)}
    <div class="col-md-6">
      <Card {...review} />
    </div>
  {/each}
</div>
