<template>
    <div>
        <i-table :columns="columns" :data="tableData" class="v-table" border>
        </i-table>
    </div>
</template>
<script>
    export default {
        props: {
            tableData: {
                // 表数据源,配置了url就不用传这个参数了
                type: Array,
                default: () => {
                    return [];
                }
            },
            columns: {
                type: Array,
                default: () => []
                // [ {
                //   field: "columnType",
                //   title: "数据类型",
                //   width: 120,
                //   hidden:false,
                //   edit: { type: "text", status: false, data: [], key: "" }
                // }] //列的的数据格式edit格式： type类型(text,date,datetime,select,switch),status是否默认为编辑状态
                // data如果是select这里data应该有数据源，如果没有数据请设置key字典编号
            },
            url: {
                type: String,
                default: ''
            },
            paginationHide: {
              type: Boolean,
              default: true
            }
        },
        data () {
            return {
            }
        }
    }
</script>
<style scoped>

</style>
