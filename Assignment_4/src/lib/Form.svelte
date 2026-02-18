<script>
  // @ts-nocheck

  import { reviewsStore } from "../stores.js";

  let username = localStorage.getItem("form_username") || "";
  let rating = parseInt(localStorage.getItem("form_rating")) || 0;
  let title = localStorage.getItem("form_title") || "";
  let report = localStorage.getItem("form_report") || "";

  $: localStorage.setItem("form_username", username);
  $: localStorage.setItem("form_rating", rating);
  $: localStorage.setItem("form_title", title);
  $: localStorage.setItem("form_report", report);

  function submitForm() {
    if (!username.trim() || !title.trim() || !report.trim() || rating < 1) {
      alert("Bitte alle Felder korrekt ausfüllen und eine Bewertung geben.");
      return;
    }

    const newReview = {
      username,
      rating,
      title,
      content: report,
      createdAt: new Date().toISOString(),
    };

    reviewsStore.update((reviews) => [...reviews, newReview]);

    username = "";
    rating = 0;
    title = "";
    report = "";

    localStorage.removeItem("form_username");
    localStorage.removeItem("form_rating");
    localStorage.removeItem("form_title");
    localStorage.removeItem("form_report");
  }
</script>

<form on:submit|preventDefault={submitForm} class="bg-light p-4 rounded shadow">
  <div class="mb-3">
    <label for="username">Nutzername</label>
    <input
      id="username"
      class="form-control"
      type="text"
      bind:value={username}
      maxlength="30"
      required
    />
  </div>

  <div class="mb-3">
    <label for="rating">Rating</label>
    <div id="rating">
      {#each Array(5) as _, index}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <i
          class="fa-star fa mx-1"
          class:fas={index < rating}
          class:far={index >= rating}
          on:click={() => (rating = index + 1)}
          style="cursor: pointer;"
        ></i>
      {/each}
    </div>
  </div>

  <div class="mb-3">
    <label for="title">Titel</label>
    <input
      id="title"
      class="form-control"
      type="text"
      bind:value={title}
      maxlength="30"
      required
    />
  </div>

  <div class="mb-3">
    <label for="report">Bericht</label>
    <textarea
      id="report"
      class="form-control"
      bind:value={report}
      maxlength="250"
      required
    ></textarea>
  </div>

  <button class="btn btn-success">Bericht senden</button>
</form>
