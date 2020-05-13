<template>
  <div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list v-model="loading" :finished="finished" :offset="offset" finished-text="没有更多了" @load="onLoad">
    <h4 style="margin:10px">{{this.$route.params.title}}</h4>
    <router-link
      :to="'/PlayMusic/'+item.song_id"
      class="musicBox"
      v-for="item in picList"
      :key="item.id"
    >
      <img :src="item.pic_big" alt />
      <p>{{item.title}}</p>
    </router-link>
    </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  data() {
    return {
      picList: [],
      loading: false,
      finished: false,
      refreshing: false,
      offset: 100
    };
  },
  created() {
    // this.getMusicList();
  },
  methods: {
    /* getMusicList() {
      
    }, */

    onLoad() {
      console.log(this.$route.params.type);
      console.log(this.$route.params.title);
      const musicListUrl =
        this.HOST +
        "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=" +
        this.$route.params.type;
      this.$axios
        .get(musicListUrl)
        .then(res => {
          console.log(res);
          this.picList = res.data.song_list;
        })
        .catch();

      setTimeout(() => {
        if (this.refreshing) {
          this.picList = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.picList.push(this.picList.length + 1);
        }
        this.loading = false;

        if (this.picList.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    }
  }
};
</script>
<style scoped>
.musicBox {
  width: 50%;
  float: left;
  text-align: center;
}
</style>

