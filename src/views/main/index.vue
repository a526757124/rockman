<template>
<Layout style="main">
            <Header>
                
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']">
                        <MenuItem name="1-1" to="home">
                            <Icon type="ios-navigate"></Icon>
                            <span>首页</span>
                        </MenuItem>
                        <MenuItem name="1-2" to="node">
                            <Icon type="ios-search"></Icon>
                            <span>Node管理</span>
                        </MenuItem>
                        <MenuItem name="1-3" to="task">
                            <Icon type="ios-settings"></Icon>
                            <span>任务管理</span>
                        </MenuItem>
                        <MenuItem name="1-4" to="logs">
                            <Icon type="ios-paper" />
                            <span>日志管理</span>
                        </MenuItem>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 10px 10px'}">
                    <Content class="main-content-con">
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
.main-content-con{
  padding: 15px;
  min-width: 280px;
  background-color: #fff;
  height: calc(100% - 40px);
}
</style>