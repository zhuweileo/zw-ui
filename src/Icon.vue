<template>
    <svg class="zw-icon">
        <use :xlink:href="'#zw-'+name" ></use>
    </svg>
</template>

<script>
    import './icons'
    export default {
        name: 'Icon',
        props: {
            name: {
                type: String,
            },
        },
    }
</script>

<style lang='scss'>
    .zw-icon{
        width: 1em;
        height: 1em;
    }
</style>