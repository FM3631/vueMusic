<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <router-link href="javascript:;" to="Musicers">
          <img class="mui-media-object mui-pull-left" src="/static/images/1.png" />
          <div class="mui-media-body">
            <p class="mui-ellipsis">薛之谦</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.mui-table-view img {
  border-radius: 50%;
}
.mui-table-view a {
  line-height: 41px;
}
</style>