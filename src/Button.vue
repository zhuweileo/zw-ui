<template>
    <button class="zw-button" :class="{'zw-button-icon-right':iconSide === 'right'}" @click="onClick">
        <Icon v-if="icon" :name="icon" class="zw-button-icon"></Icon>
        <span class="zw-button-text">
            <slot></slot>
        </span>
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
            iconSide: {
                type: String,
                default: 'left',
                validator(value){
                    return ['left','right'].indexOf(value) !== -1
                }
            }

        },
        methods: {
            onClick(e) {
                this.$emit('click',e)
            }
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

        display: inline-flex;
        justify-content: center;
        align-items: center;
        .zw-button-icon {
            order: 1;
            margin-right: .3em;
        }
        .zw-button-text {
            order: 2;
        }

        &.zw-button-icon-right{
            .zw-button-icon {
                order: 2;
                margin-left: .3em;
                margin-right: 0;
            }
            .zw-button-text {
                order: 1;
            }
        }
    }
</style>