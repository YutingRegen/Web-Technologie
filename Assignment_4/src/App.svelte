<script>
  import Header from "./lib/Header.svelte";
  import Form from "./lib/Form.svelte";
  import Reviews from "./lib/Reviews.svelte";
  import { reviewsStore } from "./stores.js";
</script>

<main>
  <Header
    title="Erfahrungsberichte Rock am See 2025"
    subtitle="Teilt eure Erfahrungen mit uns und den anderen Besucher:innen"
  />

  <div class="container my-5">
    <Form />
    <hr />
    <Reviews reviews={$reviewsStore} />
  </div>
</main>
