<template>
    <Layout >
            <Header class="main-header">
                <Menu mode="horizontal" theme="dark" active-name="1" class="main-header-menu">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1" to="home">
                            <Icon type="ios-navigate" ></Icon>
                            监控
                        </MenuItem>
                        <MenuItem name="2" to="node">
                            <Icon type="ios-keypad"></Icon>
                            NODE
                        </MenuItem>
                        <MenuItem name="3" to="task">
                            <Icon type="ios-analytics"></Icon>
                            任务
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            日志
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Layout>
                    <Content class="main-content">
                        <keep-alive >
                          <router-view/>
                        </keep-alive>
                    </Content>
                </Layout>
            </Layout>
    </Layout>
</template>
<script>
    export default {

    }
</script>
<style scoped>
.main {
  height: 100%;
}
.main-header,.main-header-menu,.ivu-menu-item{
    height: 64px;
}

.main-content{
    position: absolute;
    left: 0;
    right: 0;
    padding:0 80px;
    margin: 0 auto;
    margin-top: 40px;
    /* background: #EDF0F5; */
    min-height: calc(100% - 104px);
}
.main-content-con{
  padding: 15px;
  min-width: 280px;
  background-color: #fff;
  height: calc(100% - 40px);
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
        /* width: 420px; */
        padding-left: 180px;
        /* margin: 0 auto; */
        /* margin-right: 20px; */
}
.ivu-menu-item-active{
    background: #33A6F7;
}
</style>
