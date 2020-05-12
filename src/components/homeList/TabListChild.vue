<template>
    <div>
        <ul class="mui-table-view">
                <router-link
                  :to="'PlayMusic/'+item.song_id"
                  class="mui-table-view-cell mui-media"
                  v-for="item in musicNewList"
                  :key="item.id"
                >
                  <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.pic_big" />
                    <div class="mui-media-body">
                      <span>{{item.title}}</span>
                      <p class="mui-ellipsis">{{item.artist_name}}</p>
                    </div>
                  </a>
                </router-link>
              </ul>
    </div>
</template>
<script>
export default {
    props:{
        type:String,
        size:String
    },
    data(){
        return {
             musicNewList:[],
        }
    },
    created() {
    this.getMusicNewList()
  },
    methods:{
        getMusicNewList() {
            // console.log(this.type)
      const musicNewListUrl =
        this.HOST +
        `/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${this.type}&size=${this.size}`;
      this.$axios
        .get(musicNewListUrl)
        .then(res => {
          //  console.log(res)
          this.musicNewList = res.data.song_list;
        })
        .catch();
    },
    }
}
</script>
<style scoped>
    
</style>