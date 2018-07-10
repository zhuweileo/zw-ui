<template>
    <button class="zw-button">
        <Icon v-if="icon" :name="icon" class="zw-button-icon"></Icon>
        <slot></slot>
    </button>
</template>

<script>
    import Icon from './Icon'
    export default {
        name: 'Button',
        components: {
            Icon,
        },
        props: {
            icon: {
                type: String,
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
        height: var(--button-height,32px);//8的倍数
        border: 1px solid var(--border-color,#999);
        background: var(--button-bg,#fff);
        border-radius: var(--border-radius,4px);
        color: var(--color,#333);
        font-size: var(--font-size,14px);
        cursor: pointer;
        padding: 0 1em;
        &:focus{outline: none}
        &:hover{border-color: var(--border-color-hover,#666)}
        &:active{background: var(--button-active-bg,#eee)}

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>