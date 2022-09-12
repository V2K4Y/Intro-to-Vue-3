app.component('review-display',{
    props:{
        reviews: {
            type:Array,
            required:true
        }
    },
    template:
    /*html*/
    `<div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="review in reviews">
                {{review.name}} gave {{review.rating}} rating.
                <br/>
                "{{review.review}}"
            </li>
        </ul>
    </div>`
})