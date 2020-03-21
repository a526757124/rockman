<template>
    <div class="tb">
        <div>
            <tableH icon="md-apps" text="任务列表">
                <div slot="content"></div>
                <slot>
                <div style="text-align: right;">
                    <i-button type="info" icon="md-add" @click="onAdd">新建任务</i-button>
                    <i-button type="warning" @click="onEdit" icon="md-construct">修改任务</i-button>
                    <i-button type="success" @click="tiggerAction('start')" icon="md-arrow-dropright">启动任务</i-button>
                    <i-button type="success" @click="tiggerAction('run')" icon="md-open">立即执行</i-button>
                    <i-button type="error" @click="tiggerAction('pause')" icon="ios-power">暂停任务</i-button>
                    <i-button icon="md-close" @click="tiggerAction('remove')">删除任务</i-button>
                    <i-button type="info" icon="md-refresh" @click="onRefresh(false)">刷新</i-button>
                </div>
                </slot>
            </tableH>
            <tableC
                id="table"
                :columns="columns"
                :tableData="data"
                ref="table"
                :height="315">
            </tableC>
        </div>
    <div>
        <Modal v-model="model"
            v-bind:title="modelMessage"
            width="660"
            v-bind:mask-closable="closable"
            v-bind:footer-hide="footerHide"
            @on-ok="onSave"
            class-name="vertical-center-modal">
            <div class="model-content">
                <i-form ref="formValidate" :label-width="120" v-bind:model="taskValidate" v-bind:rules="ruleValidate">
                    <form-item v-for="item in taskForm" v-bind:key="item.name" v-bind:label="item.text+'：'" v-bind:prop="item.name">
                        <label v-if="item.readonly">{{taskValidate[item.name]}}</label>
                        <i-input v-else-if="item.type=='textarea'" v-model="taskValidate[item.name]" type="textarea"></i-input>
                        <i-select v-else-if="item.type=='select'" @@on-change="onChange(item,taskValidate[item.name])" v-model="taskValidate[item.name]" style="width:378px">
                            <i-option v-for="item in selectCom.data" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                        </i-select>
                        <i-input v-else v-model="taskValidate[item.name]" v-bind:class="{'read-only':item.readOnly}" v-bind:placeholder="item.placeholder"></i-input>
                    </form-item>
                </i-form>
            </div>
        </Modal>
    </div>

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
                    title: '任务名称',
                    key: 'name'
                },
                {
                    title: '任务类型',
                    key: 'type'
                },
                {
                    title: '间隔(Cron)',
                    key: 'cron'
                },
                {
                    title: '最后执行时间',
                    key: 'lstDate'
                },
                {
                    title: '状态',
                    key: 'sate'
                },
                {
                    title: '描述',
                    key: 'remark'
                },
                {
                    title: '操作',
                    slot: 'action',
                    width: 280,
                    align: 'center',
                    render: (h, params) => {
                            // return h('div', [
                            //     h('Button', {
                            //         props: {
                            //             type: 'warning',
                            //             size: 'small',
                            //             style: {
                            //                 marginRight: '5px',
                            //             }
                            //         }
                            //     }, '修改'),
                            //     h('Button', {
                            //         props: {
                            //             type: '暂时',
                            //             size: 'small'
                            //         }
                            //     }, '暂停'),
                            //     h('Button', {
                            //         props: {
                            //             type: 'success',
                            //             size: 'small'
                            //         }
                            //     }, '启动'),
                            //     h('Button', {
                            //         props: {
                            //             type: 'error',
                            //             size: 'small'
                            //         }
                            //     }, '删除'),
                            // ]);
                        }
                }
            ],
            data: [
                {
                    name: '破损统计',
                    type: '',
                    cron: '',
                    lstDate: '',
                    sate: '',
                    remark: ''
                }
            ],
            selectCom: {
                model: 'post',
                data: [{ value: 'post', label: 'post' }, { value: 'get', label: 'get' }]
            },
            closable: false,
            footerHide: false,
            model: false,
            modelMessage: '任务管理',
            taskValidate: {
                taskName: '',
groupName: '',
interval: '',
apiUrl: '',
authKey: '',
authValue:
                    '',
describe: '',
requestType: ''
            },
            ruleValidate: {
                taskName: [{ required: true, message: '任务名称必填', trigger: 'blur' }],
                groupName: [{ required: true, message: '分组名称必填', trigger: 'blur' }],
                interval: [{ required: true, message: '间隔(Cron)必填', trigger: 'blur' }],
                requestType: [{ required: true, message: '请选择请求方式', trigger: 'change' }],
                apiUrl: [{ required: true, message: 'ApiUrl必填', trigger: 'blur' }]
            },
            taskForm: [
                { name: 'taskName', text: '任务名称', value: '', placeholder: '任务名称与触发器名称默认相同', readOnly: false },
                { name: 'groupName', text: '分组', value: '', placeholder: '分组名称与分组名称默认相同', readOnly: false },
                { name: 'interval', text: '间隔(Cron)', value: '', placeholder: '如10分钟执行一次：0/0 0/10 * * * ? ' },
                { name: 'apiUrl', text: 'ApiUrl', value: '', placeholder: '远程调用接口URL' },
                { name: 'authKey', text: 'header(key)', value: '', placeholder: '请求header验证的Key' },
                { name: 'authValue', text: 'header(value)', value: '', placeholder: '请求header验证的Key' },
                {
                    name: 'requestType',
text: '请求方式',
value: '',
onChange: (data, value) => {
                    },
placeholder: 'post/get',
type: 'select'
                },
                { name: 'describe', text: '描述', value: '', type: 'textarea' }
            ]
        }
    },
    methods: {
        init() {

        },
        onAdd() {
            for (var key in this.taskValidate) {
                this.taskValidate[key] = '';
            }
            // this.setFormClass(false);
            this.model = true;
        },
        onEdit() {

        },
        tiggerAction() {

        },
        onRefresh() {

        },
        onSave() {

        }
    }

}
</script>
