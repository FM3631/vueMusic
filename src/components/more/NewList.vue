<template>
  <div>
        <h4 style="margin:10px">新歌速递</h4>
        <router-link :to="'PlayMusic/'+item.song_id" class="musicBox" v-for='item in picList' :key='item.id'>
            <img :src="item.pic_big" alt="">
             <p>{{item.title}}</p>
        </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      picList: []
    };
  },
  created() {
    this.getMusicList();
  },
  methods: {
    getMusicList() {
      const musicListUrl =
        this.HOST +
        "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&";
      this.$axios
        .get(musicListUrl)
        .then(res => {
          console.log(res);
          this.picList = res.data.song_list;
        })
        .catch();
    },
  },
  
};
</script>
<style scoped>
.musicBox {
  width: 50%;
  float: left;
  text-align: center;
}
</style>

