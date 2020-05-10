import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)



import HomeContainer from '../components/tablebar/HomeContainer.vue'
import SingerContainer from '../components/tablebar/SingerContainer.vue'
import ListContainer from '../components/tablebar/ListContainer.vue'
import MyContainer from '../components/tablebar/MyContainer.vue'
import SearchContainer from '../components/tablebar/SearchContainer.vue'
import DayList from '../components/more/DayList.vue'
import NewList from '../components/more/NewList.vue'
import BillList from '../components/more/BillList.vue'
import HotMusicList from '../components/more/HotMusicList.vue'

import Musicers from '../components/musicer/Musicers.vue'
import PlayMusic from '../components/tablebar/PlayMusic.vue'



import NewsongList from '../components/rankinglist/NewsongList.vue'
import HotsongList from '../components/rankinglist/HotsongList.vue'
import RanksongList from '../components/rankinglist/RanksongList.vue'
import EasongList from '../components/rankinglist/EasongList.vue'
import ClassicsongList from '../components/rankinglist/ClassicsongList.vue'
import NetsongList from '../components/rankinglist/NetsongList.vue'
import FilmssongList from '../components/rankinglist/FilmssongList.vue'
import LovesongList from '../components/rankinglist/LovesongList.vue'


export default new Router({
  routes: [
    {path:'/',redirect:'/HomeContainer'},
    {path:'/HomeContainer',component:HomeContainer},
    {path:'/SingerContainer',component:SingerContainer},
    {path:'/ListContainer',component:ListContainer},
    {path:'/NewsongList',component:NewsongList},
    {path:'/MyContainer',component:MyContainer},
    {path:'/SearchContainer',component:SearchContainer},
    {path:'/DayList',component:DayList},
    {path:'/NewList',component:NewList},
    {path:'/BillList',component:BillList},
    {path:'/HotMusicList',component:HotMusicList},
    {path:'/Musicers/:ting_uid',component:Musicers},
    {path:'/PlayMusic/:song_id',component:PlayMusic},

    {path:'/NewsongList/',component:NewsongList},
    {path:'/HotsongList',component:HotsongList},
    {path:'/RanksongList',component:RanksongList},
    {path:'/EasongList',component:EasongList},
    {path:'/ClassicsongList',component:ClassicsongList},
    {path:'/NetsongList',component:NetsongList},
    {path:'/FilmssongList',component:FilmssongList},
    {path:'/LovesongList',component:LovesongList},
  ]
})