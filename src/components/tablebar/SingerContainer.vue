<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in songerList" :key="item.id">
        <router-link href="javascript:;" to="Musicers">
          <img class="mui-media-object mui-pull-left" :src="infoObj.avatar_s500" />
          <div class="mui-media-body">
            <p class="mui-ellipsis">{{infoObj.name}}</p>
          </div>
        </router-link>
      </li>
    </ul>
    <!-- <div class="box" v-for="item in songerList" :key="item.id">
      <img  :src="item.avatar_s500" alt="">
      <div class="inner">{{infoObj.name}}11111111</div>
    </div>-->
  </div>
</template> 
<script>
export default {
  data() {
    return {
      songerList: [],
      songerList1: [],
      infoObj: {
        name: "",
        avatar_s500: ""
      }
    };
  },
  created() {
    this.getmusicerList();
    // this.getsongerList1();
  },
  methods: {
    // getsongerList1() {
    //   this.songerList.forEach(item => {
    //     this.songerList1.push(item);
    //   });
    //   console.log(this.songerList1);
    // },
    getmusicerList() {
      const musicerList =
        this.HOST +
        "v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid=2517";
      this.$axios
        .get(musicerList)
        .then(result => {
          this.infoObj.name = result.data.name;
          this.infoObj.avatar_s500 = result.data.avatar_s500;
          console.log(this.infoObj.name);
          this.songerList = result.data;
          console.log(result);
        })
        .catch();
    }
  }
};
</script>
<style scoped>
li {
  line-height: 42px;
}
.mui-table-view img {
  border-radius: 50%;

}

</style>