<template>
  <div class="musicer">
    <div class="back" v-for="item in imager" :key="item.id">
      <div class="outer">
        <img :src="item.pic_small" class="img1" />
        <p>{{item.author}}</p>
      </div>
      <img :src="item.pic_small" alt />
    </div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in lister" :key="item.id">
        <div class="mui-media-body">
          <p class="mui-ellipsis">{{item.title}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lister: [],
      imager: []
    };
  },
  created() {
    this.getsingerList();
    this.getimageList();
  },
  methods: {
    getsingerList() {
      const singerList =
        this.HOST +
        "v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid=2517";
      this.$axios
        .get(singerList)
        .then(result => {
          console.log(result);
          this.lister = result.data.songlist;
        })
        .catch();
    },
    getimageList() {
      const imageList =
        this.HOST +
        "v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid=2517&limits=1";
      this.$axios
        .get(imageList)
        .then(result => {
          console.log(result);
          this.imager = result.data.songlist;
        })
        .catch();
    }
  }
};
</script>
<style scoped>
.back img {
  opacity: 0.1;
  width: 100%;
  height: 140px;
  z-index: 3;
}
.back {
  position: relative;
}
.outer {
  text-align: center;
  margin-left: 132px;
  margin-top: 45px;
  position: absolute;
}
.img1 {
  border-radius: 50%;
  width: 42px !important;
  height: 42px !important;
  opacity: 1 !important;
}
</style>