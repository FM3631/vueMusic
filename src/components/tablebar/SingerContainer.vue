<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in songerList" :key='item.id'>
        <router-link href="javascript:;" to="Musicers" >
          <!--  -->
          <img class="mui-media-object mui-pull-left" src="/static/images/1.png" />
          <div class="mui-media-body" >
            <p class="mui-ellipsis">{{item.title}} </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      songerList:[]
    };
  },
  created() {
    this.getmusicerList();
  },
  methods: {
    getmusicerList() {
      const musicerList =
        this.HOST +"v1/restserver/ting?method=baidu.ting.billboard.billList&type=1";
      this.$axios
        .get(musicerList)
        .then(result => {
          console.log(result);
          this.songerList = result.data.song_list;
        })
        .catch();
    }
  }
};
</script>
<style scoped>
.mui-table-view img {
  border-radius: 50%;
}
.mui-table-view a {
  line-height: 41px;
}
</style>