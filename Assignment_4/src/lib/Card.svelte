<script>
  export let username;
  export let rating;
  export let title;
  export let content;
</script>

<div class="card h-100">
  <div class="card-header d-flex justify-content-between">
    <strong>{username}</strong>
    <div>
      {#each Array(5) as _, i}
        <i
          class={i < rating
            ? "fa fa-star text-warning"
            : "fa fa-star-o text-secondary"}
        ></i>
      {/each}
    </div>
  </div>

  <div class="card-body">
    <h5>{title}</h5>
    <p>{content}</p>
  </div>
</div>
