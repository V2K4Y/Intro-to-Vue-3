app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div class="review-container">
  <h3>Reviews:</h3>
    <ul class="review-list">
      <li v-for="(review, index) in reviews" :key="index"
      class = "fd">
        {{ review.name }} gave this {{ review.rating }} stars
        <br/>
        "{{ review.review }}"
        <br/>
        <!-- solution -->
        Recommended: {{ review.recommend }}
        <!-- solution -->
      </li>
    </ul>
  </div>
`,
})