<template>
  <div class="body">
    <div class="header">
      <div style="float:left;width:33%">
        <router-link to="/HomeContainer" class="mui-icon mui-icon-home-filled"></router-link>
      </div>
      <div style="float:left;width:33%;text-align:center">
        <p style="margin-bottom:0">{{titleTop.title}}</p>
        <p>{{titleTop.author}}</p>
      </div>
      <div style="float:right;">
        <i class="mui-icon mui-icon-search"></i>
      </div>
    </div>

    <div class="con">
      <img :src="imgObj.pic_big" alt />
    </div>

    <div style="margin-top:110px">
      <div style="float:left; color:red">
        <i class="mui-icon-extra mui-icon-extra-heart-filled"></i>
      </div>
      <div style="float:right">
        <i class="mui-icon mui-icon-download"></i>
      </div>
    </div>

    <audio controls loop muted style="margin-top:20px" :src="playData.bitrate.show_link">
      <source />
    </audio>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      playData: {
        bitrate: {
          show_link: ""
        },
        songinfo: {
          title: ""
        }
      },
      imgObj: {
        pic_big: "",
      },
      titleTop:{
          title:'',
          author:''
      },
      musicList: [],
    }
  },
  created() {
    this.getMusic();
  },
  
  methods: {
    getMusic() {
      console.log(this.$route.params.song_id)
      const musicUrl =
        this.HOST +
        "/v1/restserver/ting?method=baidu.ting.song.play&songid="+this.$route.params.song_id;
      this.$axios
        .get(musicUrl)
        .then(result => {
          console.log(result);
          this.playData = result.data;
          this.imgObj.pic_big = result.data.songinfo.pic_big
          this.titleTop.title = result.data.songinfo.title
          this.titleTop.author = result.data.songinfo.author
        })
        .catch();
    }
  }
};
</script>
<style scoped>
.body {
  padding: 20px;
}
.con {
  margin-top: 50px;
  text-align: center;
}
</style>