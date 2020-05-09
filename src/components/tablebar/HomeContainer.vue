<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-header">
        <div style="float:left">今日榜单</div>
        <div style="float:right; font-size:12px;">
          <router-link to="/DayList">更多</router-link>
        </div>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <router-link :to="'PlayMusic/'+item.song_id" class="imgs" v-for='item in picList' :key='item.album_id' :mess='item.song_id'>
            <img :src="item.pic_big" alt />
            <p>{{item.title}}</p>
          </router-link>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">
        <div style="float:left">新歌速递</div>
        <div style="float:right; font-size:12px;">更多</div>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <router-link :to="'PlayMusic/'+item.song_id" class="imgs" v-for='item in newPicList' :key="item.id">
            <img :src="item.pic_big" alt />
            <p>{{item.album_title}}</p>
            <p>{{item.artist_name}}</p>
          </router-link>
         
        </div>
      </div>
    </div>

    <!-- 轮播图 -->

    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../../assets/1.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/2.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/3.jpg" alt />
      </mt-swipe-item>
    </mt-swipe>

    <div class="mui-card">
      <div class="mui-card-header">
        <div style="float:left">音乐榜单</div>
        <div style="float:right; font-size:12px;">更多</div>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-navbar class="page-part" v-model="selected">
            <mt-tab-item id="1">新歌榜</mt-tab-item>
            <mt-tab-item id="2">热歌榜</mt-tab-item>
            <mt-tab-item id="3">King榜</mt-tab-item>
          </mt-navbar>

          <!-- tabcontainer -->
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
              <ul class="mui-table-view">
                <router-link :to="'PlayMusic/'+item.song_id" class="mui-table-view-cell mui-media" v-for='item in musicNewList' :key='item.id'>
                  <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.pic_big" />
                    <div class="mui-media-body">
                      <span>{{item.title}}</span>
                      <p class="mui-ellipsis">{{item.artist_name}}</p>
                    </div>
                  </a>
                </router-link>
              </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <ul class="mui-table-view">
                <router-link :to="'PlayMusic/'+item.song_id" class="mui-table-view-cell mui-media" v-for='item in musicHotList' :key='item.id'>
                  <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.pic_big" />
                    <div class="mui-media-body">
                      <span>{{item.title}}</span>
                      <p class="mui-ellipsis">{{item.artist_name}}</p>
                    </div>
                  </a>
                </router-link>
                
              </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
              <ul class="mui-table-view">
                <router-link :to="'PlayMusic/'+item.song_id" class="mui-table-view-cell mui-media" v-for='item in musicKingList' :key='item.id'>
                  <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.pic_big" />
                    <div class="mui-media-body">
                      <span>{{item.title}}</span>
                      <p class="mui-ellipsis">{{item.artist_name}}</p>
                    </div>
                  </a>
                </router-link>
                
              </ul>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
      </div>
      <div class="mui-card-footer">
        <div style="margin:auto">查看该榜单></div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">
        <div style="float:left">热门歌单</div>
        <div style="float:right; font-size:12px;">更多</div>
      </div>
      <div class="mui-card-content">
        <router-link :to="'PlayMusic/'+item.song_id" class="mui-card-content-inner imgs"  v-for='item in footerMusicList' :key='item.id'>
          <div >
            <img :src="item.pic_big" alt />
            <p>{{item.title}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "todayList",
  data() {
    return {
      selected: "1",
      picList:[],
      newPicList:[],
      musicNewList:[],
      musicHotList:[],
      musicKingList:[],
      footerMusicList:[]
    };
  },



  created() {
    this.getMusicList(),
    this.getNewList(),
    this.getMusicNewList(),
    this.getMusicHotList(),
    this.getMusicKingList(),
    this.getFooterMusicList()
  },
  methods:{
    //今日榜单列表
    getMusicList(){
           const musicListUrl = this.HOST+'/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=6'
           this.$axios.get(musicListUrl)
           .then(res=>{
             console.log(res)
             this.picList = res.data.song_list
           })
           .catch()
       },
    //新歌速递列表
    getNewList(){
           const newMusicListUrl = this.HOST+'/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=3'
           this.$axios.get(newMusicListUrl)
           .then(res=>{
            //  console.log(res)
             this.newPicList = res.data.song_list
           })
           .catch()
       },
    //音乐榜单--新歌榜
    getMusicNewList(){
          const musicNewListUrl = this.HOST+'/v1/restserver/ting?method=baidu.ting.billboard.billList&type=23&size=3'
           this.$axios.get(musicNewListUrl)
           .then(res=>{
            //  console.log(res)
             this.musicNewList = res.data.song_list
           })
           .catch()
    },
    //音乐榜单--热歌榜
    getMusicHotList(){
          const musicHotListUrl = this.HOST+'/v1/restserver/ting?method=baidu.ting.billboard.billList&type=24&size=3'
           this.$axios.get(musicHotListUrl)
           .then(res=>{
            //  console.log(res)
             this.musicHotList = res.data.song_list
           })
           .catch()
    },
    //音乐榜单--King榜
    getMusicKingList(){
          const musicKingListUrl = this.HOST+'/v1/restserver/ting?method=baidu.ting.billboard.billList&type=25&size=3'
           this.$axios.get(musicKingListUrl)
           .then(res=>{
            //  console.log(res)
             this.musicKingList = res.data.song_list
           })
           .catch()
    },
    //底部热门歌单
    getFooterMusicList(){
          const footerMusicListUrl = this.HOST+'/v1/restserver/ting?method=baidu.ting.billboard.billList&type=21&size=6'
           this.$axios.get(footerMusicListUrl)
           .then(res=>{
            //  console.log(res)
             this.footerMusicList = res.data.song_list
           })
           .catch()
    },
  }
};
</script>
<style scoped>
.body {
  font-size: 14px;
}
.imgs {
  width: 33%;
  padding: 10px;
  float: left;
}
.imgs img {
  width: 100%;
}
.imgs p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  text-align: center;
  margin-bottom: 0;
}
.mui-card-header {
  font-size: 14px;
}
/* 轮播图 */
.mint-swipe {
  height: 200px;
  padding: 15px;
}
.mint-swipe-items-wrap img {
  width: 100%;
  height: 100%;
}
</style>

