<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入歌名、歌手、专辑"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div>
      <ul>
        <li v-for="item in resultList" :key="item.id">
          <router-link :to="'/PlayMusic/'+item.songid">
            <span style="font-size:14px">歌名：{{item.songname}}</span> 
            <span style="font-size:12px">作者：{{item.artistname}}</span> 
          </router-link>
          
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      value: "",
      resultList: []
    };
  },
  created() {
    
  },
  methods: {
    onSearch(val) {
      const searchListUrl =
        this.HOST + "/v1/restserver/ting?method=baidu.ting.search.catalogSug&query="+this.value;
      this.$axios
        .get(searchListUrl)
        .then(result => {
          console.log(result);
          this.resultList = result.data.song;
        })
        .catch();
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },

    //搜索功能实现
  }
};
</script>
<style scoped>
</style>