<template>
  <div>
    <div class="musicList">
      <router-link to="/ListContainer/NewsongList">
          <img src="../../assets/logo.png" alt />
      </router-link>
      <div class="list">
        <ul>
          <li>
            <span>1</span>红梅花儿开（电影《囧妈》）
          </li>
          <li>
            <span>2</span>红梅花儿开（电影《囧妈》）
          </li>
          <li>
            <span>3</span>红梅花儿开（电影《囧妈》）
          </li>
        </ul>
      </div>
    </div>

    <div class="musicList">
      <img src="../../assets/logo.png" alt />
      <div class="list">
        <ul>
          <li>
            <span>1</span>红梅花儿开（电影《囧妈》）
          </li>
          <li>
            <span>2</span>红梅花儿开（电影《囧妈》）
          </li>
          <li>
            <span>3</span>红梅花儿开（电影《囧妈》）
          </li>
        </ul>
      </div>
    </div>

    <div class="musicList">
      <img src="../../assets/logo.png" alt />
      <div class="list">
        <ul>
          <li>
            <span>1</span>红梅花儿开（电影《囧妈》）
          </li>
          <li>
            <span>2</span>红梅花儿开（电影《囧妈》）
          </li>
          <li>
            <span>3</span>红梅花儿开（电影《囧妈》）
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.getMusicList();
  },
  methods: {
    //   getMusicList(){
    //       this.$axios.get('http://tingapi.ting.baidu.com/v1/restserver/ting&baidu.ting.search.catalogSug')
    //       .then(result => {
    //       this.musicList = )
    //       .catch()
    //   }
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
.musicList .list {
  width: 65%;
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