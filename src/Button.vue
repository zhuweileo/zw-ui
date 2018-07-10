<template>
    <button class="zw-button">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            icon: {
                type: Number,
                default: 0
            },
            loading: {
                type: Boolean,
                default: false,
            },

        },
    }
</script>

<style lang='scss'>
    .zw-button{
        height: 32px;//8的倍数
        border: 1px solid rgba(153,153,153,1);
        background: #fff;
        border-radius: 4px;
        color: #333;
        font-size: 14px;
        cursor: pointer;
        padding: 0 1em;
        &:focus{outline: none}
        &:hover{border-color: #666}
        &:active{background: #eee}
    }
</style>