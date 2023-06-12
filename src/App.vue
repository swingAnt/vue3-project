<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside class="aside">
        <div class="logoBox">
        <div class="logo">
          <img class="img" :src="logo" />
          XXX系统
        </div>
        </div>
        <el-menu router default-openeds="['1']" default-active="drag" class="el-menu-vertical-demo">
          <el-menu-item index="drag">
            <el-icon>
              <setting />
            </el-icon>
            <template #title>拖拽布局</template>
          </el-menu-item>
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span>组件示例</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="form">form</el-menu-item>
              <el-menu-item index="table">table</el-menu-item>
              <el-menu-item index="pinia">pinia</el-menu-item>
              <el-menu-item index="useMouse">useMouse</el-menu-item>
              <el-menu-item index="404">errorPage</el-menu-item>
              
            </el-menu-item-group>
           
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="padding:0px">       <div className="header">
                
                <div className="avator">
                  <img class="img" :src="avator" />
                 张三
            </div>
            </div></el-header>
       <div  className="content"> <router-view /></div>
      </el-container>
    </el-container>
  </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import logo from '@/assets/images/logo.png'
import avator from '@/assets/images/avator.png'


</script>
  
<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  height: calc(100% - 64px);
  border-right:0px;
  overflow: hidden;
}

.common-layout {
  height: 100%;
  .container {
    height: 100%;
.aside{
  width: 200px;
  height: 100%;
  .logoBox{
  width:100%;
  height: 64px;
  background: linear-gradient(to right,#e3f2fd26, #E3F2FD);
  .logo {
      height: 64px;
      display: flex;
      align-items: center;
      margin-left: 20px;
      min-height: 64px;
      font-size: 14px;
      font-weight: 600;
      .img {
        height: 32px;
        height: 32px;
        height: 36px;
        width: 36px;
        object-fit: fill;

      }
    }
}
}
.header {
    display: flex;
    background: linear-gradient(to right,#E3F2FD, #9198e5);
    justify-content: flex-end;
    position: sticky;
    z-index: 100;
    left: 0;
    top: 0;
    .avator {
        height: 64px;
        display: flex;
        align-items: center;
        min-height: 64px;
        font-size: 14px;
        margin-right: 20px;
        font-weight: 600;
        .img {
            height: 32px;
            width: 32px;
            object-fit: fill;
            margin-right: 15px;
            border-radius: 50%;
        }
    }



}
.content{
  width: 100%;
    position: relative;
    height: calc(100% - 64px);
    padding: 24px;

}
  }

}
</style>
  