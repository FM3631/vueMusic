<template>
  <div>
    <div class="musicList">

      <!-- 新歌 -->
      <router-link to="/ListContainer/NewsongList">
        <img
          src="http://business.cdn.qianqian.com/qianqian/pic/bos_client_9a4fbbbfa50203aaa9e69bf189c6a45b.jpg"
          alt
        />

      </router-link>
      <ul>
        <li v-for="item1 in newSongList" :key="item1.id">
          <span>{{item1.rank}}</span>
          {{item1.title}}
        </li>
      </ul>
    </div>

    <div class="musicList">
      <!-- 热歌 -->
      <router-link to="/ListContainer/HotsongList">
        <img
          src="http://hiphotos.qianqian.com/ting/pic/item/838ba61ea8d3fd1f1326c83c324e251f95ca5f8c.jpg"
          alt
        />
      </router-link>
      <ul>
        <li v-for="item2 in hotSongList" :key="item2.id">
          <span>{{item2.rank}}</span>
          {{item2.title}}
        </li>
      </ul>
    </div>
    <div class="musicList">
      <!-- 摇滚 -->
      <router-link to="/ListContainer/RanksongList">
        <img
          src="http://business.cdn.qianqian.com/qianqian/pic/bos_client_e07e190f46a7d018fdd2a023f5a7c60d.jpg"
          alt
        />
      </router-link>
      <ul>
        <li v-for="item3 in rankSongList" :key="item3.id">
          <span>{{item3.rank}}</span>
          {{item3.title}}
        </li>
      </ul>
    </div>
    <div class="musicList">
      <!-- 欧美 -->
      <router-link to="/ListContainer/EasongList">
        <img
          src="http://business.cdn.qianqian.com/qianqian/pic/bos_client_9362a5a55277e6fb271010a45bc99e17.jpg"
          alt
        />
      </router-link>
      <ul>
        <li v-for="item4 in eaSongList" :key="item4.id">
          <span>{{item4.rank}}</span>
          {{item4.title}}
        </li>
      </ul>
    </div>
    <div class="musicList">
      <!-- 经典 -->
      <router-link to="/ListContainer/ClassicsongList">
        <img
          src="http://business.cdn.qianqian.com/qianqian/pic/bos_client_e6b795613995b69b73861ca7e7732015.jpg"
          alt
        />
      </router-link>
      <ul>
        <li v-for="item5 in calssicSongList" :key="item5.id">
          <span>{{item5.rank}}</span>
          {{item5.title}}
        </li>
      </ul>
    </div>
    <div class="musicList">
      <!-- 情歌对唱 -->
      <router-link to="/ListContainer/LovesongList">
        <img
          src="http://business.cdn.qianqian.com/qianqian/pic/bos_client_fe192f7fb7513b553e6289733f9478bb.jpg"
          alt
        />
      </router-link>
      <ul>
        <li v-for="item6 in loveSongList" :key="item6.id">
          <span>{{item6.rank}}</span>
          {{item6.title}}
        </li>
      </ul>
    </div>
    <div class="musicList">
      <!-- 影视金曲 -->
      <router-link to="/ListContainer/FilmssongList">
        <img
          src="http://business.cdn.qianqian.com/qianqian/pic/bos_client_2347fb14878de20a3b972a8f44a5c3a8.jpg"
          alt
        />
      </router-link>
      <ul>
        <li v-for="item7 in filmsSongList" :key="item7.id">
          <span>{{item7.rank}}</span>
          {{item7.title}}
        </li>
      </ul>
    </div>
    <div class="musicList">
      <!-- 网络歌曲 -->
      <router-link to="/ListContainer/NetsongList">
        <img
          src="http://business.cdn.qianqian.com/qianqian/pic/bos_client_6b67628d46638bccdc6bd8c9854b759b.jpg"
          alt
        />
      </router-link>
      <ul>
        <li v-for="item8 in netSongList" :key="item8.id">
          <span>{{item8.rank}}</span>
          {{item8.title}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newSongList: [],
      hotSongList: [],
      rankSongList: [],
      eaSongList: [],
      calssicSongList: [],
      filmsSongList: [],
      loveSongList: [],
      netSongList:[],
    };
  },
  created() {

    this.getHotList();
    this.getNewList();
    this.getRankList();
    this.getEaList();
    this.getClassicList();
    this.getLoveList();
    this.getFilmsList();
    this.getNetList();
  },
  
    
  
  methods: {
    getNewList() {
      let test1 =
        this.HOST +
        "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1";
      this.$axios
        .get(test1)
        .then(res1 => {
          this.newSongList = res1.data.song_list;
          // console.log(res1);
        })
        .catch();
    },
    getHotList() {
      let test2 =
        this.HOST +
        "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2";
      this.$axios
        .get(test2)
        .then(res2 => {
          this.hotSongList = res2.data.song_list;
          // console.log(res2);
        })
        .catch();
    },
    getRankList() {
      let test3 =
        this.HOST +
        "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=11";
      this.$axios
        .get(test3)
        .then(res3 => {
          this.rankSongList = res3.data.song_list;
          // console.log(res3);
        })
        .catch();
    },
    getEaList() {
      let test4 =
        this.HOST +
        "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=21";
      this.$axios
        .get(test4)
        .then(res4 => {
          this.eaSongList = res4.data.song_list;
          // console.log(res4);
        })
        .catch();
    },
    getClassicList() {
      let test5 =
        this.HOST +
        "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=22";
      this.$axios
        .get(test5)
        .then(res5 => {
          this.calssicSongList = res5.data.song_list;
          // console.log(res5);
        })
        .catch();
    },
    getLoveList() {
      let test6 =
        this.HOST +
        "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=23";
      this.$axios
        .get(test6)
        .then(res6 => {
          this.loveSongList = res6.data.song_list;
          // console.log(res6);
        })
        .catch();
    },
    getFilmsList() {
      let test7 =
        this.HOST +
        "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=24";
      this.$axios
        .get(test7)
        .then(res7 => {
          this.filmsSongList = res7.data.song_list;
          // console.log(res7);
        })
        .catch();
    },
    getNetList() {
      let test8 =
        this.HOST +
        "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=25";
      this.$axios
        .get(test8)
        .then(res8 => {
          this.netSongList = res8.data.song_list;
          // console.log(res7);
        })
        .catch();
    }

  }
};
</script>
<style scoped>
.musicList {
  font-size: 14px;
  color: #999;
  margin-top: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #999;
}
.musicList ul {
  width: 65%;
  height: 100px;
  overflow: hidden;
  float: right;
}
.musicList img {
  width: 30%;
}
.musicList ul li {
  height: 20px;
  width: 100%;
  list-style: none;
  float: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 10px;
}
.musicList ul li span {
  font-weight: 800;
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
  color: red;
  display: inline-block;
  margin: 0 10px;
}
</style>