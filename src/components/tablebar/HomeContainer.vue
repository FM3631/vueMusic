Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@fengchunwei 
FM3631
/
vueMusic
1
11
 Code
 Issues 0
 Pull requests 1 Actions
 Projects 0
 Wiki
 Security 0
 Insights
vueMusic/src/components/tablebar/HomeContainer.vue
@FM3631 FM3631 分支测试
79eb564 6 hours ago
286 lines (279 sloc)  9.99 KB
  
<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-header">
        <div style="float:left">今日榜单</div>
        <div style="float:right; font-size:12px;">
          <router-link to='/DayList'>更多</router-link>
          </div>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="imgs">
            <img src="/static/images/1.png" alt />
            <p>这是一行字多出来的隐藏这是一行字多出来的隐藏</p>
          </div>
          <div class="imgs">
            <img src="/static/images/2.png" alt />
            <p>这是一行字多出来的隐藏这是一行字多出来的隐藏</p>
          </div>
          <div class="imgs">
            <img src="/static/images/3.png" alt />
            <p>这是一行字多出来的隐藏这是一行字多出来的隐藏</p>
          </div>
          <div class="imgs">
            <img src="/static/images/4.png" alt />
            <p>这是一行字多出来的隐藏这是一行字多出来的隐藏</p>
          </div>
          <div class="imgs">
            <img src="/static/images/5.png" alt />
            <p>这是一行字多出来的隐藏这是一行字多出来的隐藏</p>
          </div>
          <div class="imgs">
            <img src="/static/images/6.png" alt />
            <p>这是一行字多出来的隐藏这是一行字多出来的隐藏</p>
          </div>
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
          <div class="imgs">
            <img src="/static/images/1.png" alt />
            <p>歌名</p>
            <p>作者</p>
          </div>
          <div class="imgs">
            <img src="/static/images/2.png" alt />
            <p>歌名</p>
            <p>作者</p>
          </div>
          <div class="imgs">
            <img src="/static/images/3.png" alt />
            <p>歌名</p>
            <p>作者</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 轮播图 -->

    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="/static/images/3.png" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/static/images/2.png" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/static/images/1.png" alt />
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
            <mt-tab-item id="1">选项一</mt-tab-item>
            <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3">选项三</mt-tab-item>
          </mt-navbar>

          <!-- tabcontainer -->
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
              <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media">
                  <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="/static/images/1.png" />
                    <div class="mui-media-body">
                      幸福
                      <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                    </div>
                  </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                  <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="/static/images/2.png" />
                    <div class="mui-media-body">
                      木屋
                      <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                    </div>
                  </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                  <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="/static/images/3.png" />
                    <div class="mui-media-body">
                      CBD
                      <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                    </div>
                  </a>
                </li>
              </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media">
                  <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="/static/images/3.png" />
                    <div class="mui-media-body">
                      幸福
                      <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                    </div>
                  </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                  <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="/static/images/1.png" />
                    <div class="mui-media-body">
                      木屋
                      <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                    </div>
                  </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                  <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="/static/images/2.png" />
                    <div class="mui-media-body">
                      CBD
                      <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                    </div>
                  </a>
                </li>
              </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
              <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media">
                  <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="/static/images/2.png" />
                    <div class="mui-media-body">
                      幸福
                      <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                    </div>
                  </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                  <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="/static/images/3.png" />
                    <div class="mui-media-body">
                      木屋
                      <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                    </div>
                  </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                  <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="/static/images/1.png" />
                    <div class="mui-media-body">
                      CBD
                      <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                    </div>
                  </a>
                </li>
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
        <div class="mui-card-content-inner">
          <div class="imgs">
            <img src="/static/images/1.png" alt />
            <p>这是一行字多出来的隐藏这是一行字多出来的隐藏</p>
          </div>
          <div class="imgs">
            <img src="/static/images/2.png" alt />
            <p>这是一行字多出来的隐藏这是一行字多出来的隐藏</p>
          </div>
          <div class="imgs">
            <img src="/static/images/3.png" alt />
            <p>这是一行字多出来的隐藏这是一行字多出来的隐藏</p>
          </div>
          <div class="imgs">
            <img src="/static/images/4.png" alt />
            <p>这是一行字多出来的隐藏这是一行字多出来的隐藏</p>
          </div>
          <div class="imgs">
            <img src="/static/images/5.png" alt />
            <p>这是一行字多出来的隐藏这是一行字多出来的隐藏</p>
          </div>
          <div class="imgs">
            <img src="/static/images/6.png" alt />
            <p>这是一行字多出来的隐藏这是一行字多出来的隐藏</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "1"
    };
  },
 
  methods:{
    
  }
};
</script>
<style scoped>
.body{
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
.mui-card-header{
  font-size: 14px;
}
/* 轮播图 */
.mint-swipe {
  height: 200px;
}
.mint-swipe-items-wrap img {
  width: 100%;
  height: 100%;
}
</style>
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
