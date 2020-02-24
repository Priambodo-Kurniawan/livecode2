<template>
    <li>
        <div uk-grid>
            <div class="uk-width-expand">
                <h5 class="uk-margin-remove">
                    <b>{{ data.reviewer }}</b>
                </h5>
                <p class="uk-margin-remove">point: {{ data.point }}</p>
            </div>
            <div class="uk-width-auto">
                <button class="uk-button uk-button-default" @click="$parent.deleteReview(data.id)">
                    delete
                </button> 
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: 'ReviewItem',
    props: ['data']
}
</script>
