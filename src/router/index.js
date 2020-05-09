import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import HomeContainer from '../components/tablebar/HomeContainer.vue'
import SingerContainer from '../components/tablebar/SingerContainer.vue'
import ListContainer from '../components/tablebar/ListContainer.vue'
import MyContainer from '../components/tablebar/MyContainer.vue'
import SearchContainer from '../components/tablebar/SearchContainer.vue'
import DayList from '../components/more/DayList.vue'

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
    {path:'/Musicers',component:Musicers},
    {path:'/PlayMusic/:song_id',component:PlayMusic},

    {path:'/ListContainer/NewsongList',component:NewsongList},
    {path:'/ListContainer/HotsongList',component:HotsongList},
    {path:'/ListContainer/RanksongList',component:RanksongList},
    {path:'/ListContainer/EasongList',component:EasongList},
    {path:'/ListContainer/ClassicsongList',component:ClassicsongList},
    {path:'/ListContainer/NetsongList',component:NetsongList},
    {path:'/ListContainer/FilmssongList',component:FilmssongList},
    {path:'/ListContainer/LovesongList',component:LovesongList},
  ]
})