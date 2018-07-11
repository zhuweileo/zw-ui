<template>
    <div class="zw-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ButtonGroup',
        mounted() {
            for(let node of this.$el.children){
                if(node.tagName.toLowerCase() !== 'button') console.warn('按钮组的子元素必须是zw-button!')
            }
        }
    }
</script>

<style lang='scss'>
    .zw-button-group {
        font-size: 0;
        .zw-button {
            border-radius: 0;
            vertical-align: middle;

            &:first-child {
                border-top-left-radius: var(--border-radius, 4px);
                border-bottom-left-radius: var(--border-radius, 4px);
            }
            &:last-child {
                border-top-right-radius: var(--border-radius, 4px);
                border-bottom-right-radius: var(--border-radius, 4px);
            }
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>