<template>
  <div>
    <div class="fixed">
        <mt-header title="搜索结果">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right" class="more"></mt-button>
        </mt-header>
        <div class="redbg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'findResults',
}
</script>

<style lang="scss" scoped>
    // .redbg {
    //     back
    // }
</style>



