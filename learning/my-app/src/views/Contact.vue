<template>
    <div>
        <h1>{{ h1Text }}</h1>
        <input v-model="h1Text">
    </div>
</template>

<script>
export default {
    data() {
        return {
            h1Text: "This is an contact page"
        }
    }
}
</script>

<style>

</style>