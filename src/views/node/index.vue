<template>
    <div class="tb">
      <tableH icon="md-apps" text="Node列表">
        <div slot="content"></div>
        <slot>
          <div style="text-align: right;">
            <i-button type="info" icon="md-add" @@click="onAdd">新建Node</i-button>
            <i-button type="warning" @@click="onEdit" icon="md-construct">修改Node</i-button>
            <i-button type="success" @@click="tiggerAction('start')" icon="md-arrow-dropright">启动Node</i-button>
            <i-button type="error" @@click="tiggerAction('pause')" icon="ios-power">暂停Node</i-button>
            <i-button icon="md-close" @@click="tiggerAction('remove')">删除Node</i-button>
            <i-button type="info" icon="md-refresh" @@click="onRefresh(false)">刷新</i-button>
          </div>
        </slot>
      </tableH>
      <tableC
        id="table"
        :columns="columns"
        :tableData="data"
        ref="table"
        :height="315"
      ></tableC>
    </div>
</template>
<script>
import tableC from '@/components/table/table.vue';
import tableH from '@/components/table/table-header.vue';
export default {
    components: { tableC, tableH },
    data() {
        return {
            columns: [
                {
                    title: 'Node名称',
                    key: 'name'
                },
                {
                    title: '服务器IP',
                    key: 'ip'
                },
                {
                    title: '状态',
                    key: 'sate'
                }
            ],
            data: [
            ]
        }
    },
    methods: {
        init() {

        },
        onAdd() {

        },
        onEdit() {

        },
        tiggerAction() {

        },
        onRefresh() {

        }
    }

}
</script>
