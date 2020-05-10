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

    <!-- 歌词 -->
    <div>
      <!-- {{lyricList.lrcContent}} -->
    </div>


    <div style="margin-top:110px">
      <div style="float:left; color:red">
        <i class="mui-icon-extra mui-icon-extra-heart-filled"></i>
      </div>
      <div style="float:right">
        <i class="mui-icon mui-icon-download"></i>
      </div>
    </div>

    <audio
      controls
      loop
      muted
      style="margin-top:20px"
      :src="playData.bitrate.show_link"
    >
      <source />
    </audio>
  </div>
</template>
<script>
import $ from "jquery";
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
        pic_big: ""
      },
      titleTop: {
        title: "",
        author: ""
      },
      // 获取歌词
      lyricList: {
        lrcContent: ""
      },
      musicList: [],

    };
  },
  created() {
    this.getMusic();
    this.getLyricList();
  },

  methods: {
    //获取歌曲接口
    getMusic() {
      // console.log(this.$route.params.song_id)
      const musicUrl =
        this.HOST +
        "/v1/restserver/ting?method=baidu.ting.song.play&songid=" +
        this.$route.params.song_id;
      this.$axios
        .get(musicUrl)
        .then(result => {
          // console.log(result);
          this.playData = result.data;
          this.imgObj.pic_big = result.data.songinfo.pic_big;
          this.titleTop.title = result.data.songinfo.title;
          this.titleTop.author = result.data.songinfo.author;
        })
        .catch();
    },

    //歌词接口
    getLyricList() {
      const lyricListUrl =
        this.HOST +
        "/v1/restserver/ting?method=baidu.ting.song.lry&songid=" +
        this.$route.params.song_id;
      this.$axios
        .get(lyricListUrl)
        .then(result => {
          // console.log(result);
          this.lyricList.lrcContent = result.data.lrcContent;
          console.log(this.lyricList.lrcContent);
        })
        .catch();
    },
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