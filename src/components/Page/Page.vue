<template>
<div>
<div id="nav">
  <div class="box">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  
  </div>
     <span style="text-align: right; font-size: 12px;float:right;color:red;">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px;color:red;"><span>王小虎</span></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
     
    </span>
</div>
<el-container style="height: 100%; border: 1px solid #eee;">
  <el-aside width="200px" style="background-color: #fff;">
    <el-menu :default-active="default_active" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" >
     
      <el-submenu index="1">
        <template slot="title" >
          <div @click="routerChange('/orders','1-1')">
             <i class="el-icon-tickets"></i>
            <span slot="title" >订单管理</span>
          </div>
         
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1" @click="routerChange('/orders','1-1')"><i class="el-icon-menu"></i>选项1</el-menu-item>
          <el-menu-item index="1-2" @click="routerChange('/orders','1-2')"><i class="el-icon-menu"></i>选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3"><i class="el-icon-menu"></i>选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1"><i class="el-icon-menu"></i>选项1</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <div @click="routerChange('/goods_add','2-1')">
               <i class="el-icon-menu"></i>
              <span slot="title">商品管理</span>
          </div>
         
        </template>
        <el-menu-item-group>
          <span slot="title">商品操作</span>
          <el-menu-item index="2-1" @click="routerChange('/goods_add','2-1')"> <i class="el-icon-plus"></i>提交新商品</el-menu-item>
          <el-menu-item index="2-2"> <i class="el-icon-minus"></i>删除商品</el-menu-item>
          <el-menu-item index="2-3"> <i class="el-icon-edit"></i>商品信息修改</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-4"><i class="el-icon-menu"></i>选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-5">
          <span slot="title"><i class="el-icon-menu"></i>选项4</span>
          <el-menu-item index="2-5-1"><i class="el-icon-menu"></i>选项1</el-menu-item>
        </el-submenu>
      </el-submenu>

     
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
</el-menu>
  </el-aside>
  
  <el-container style="border-left: 1px solid #DFE4ED;">
    <el-main >
      
       <router-view></router-view>
      
    </el-main>
  </el-container>
</el-container>

 
</div>
</div>
</template>

<script>
export default {
  data() {
   
    return {
      default_active:"2-1",
      isCollapse: false
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    routerChange(route,active_num){
      this.$router.push(route);
      this.default_active = active_num
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
#nav {
  width: 100%;
  height: 45px;
  background-color: whitesmoke;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

</style>
