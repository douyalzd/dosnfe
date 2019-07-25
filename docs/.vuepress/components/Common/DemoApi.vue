<template>
    <div class="api-wrap">
        <!-- <h3>{{ title }}</h3> -->
        <el-table border v-if="type === 'attr'" :data="apiData" style="width: 100%">
            <el-table-column prop="params" label="参数" width="140" />
            <el-table-column prop="describe" label="说明" width="120" />
            <el-table-column prop="type" label="类型" />
            <el-table-column prop="optionValue" label="可选值" />
            <el-table-column prop="defaultValue" label="默认值" />
        </el-table>
        <el-table v-if="type === 'event'" border :data="apiData" style="width: 100%">
            <el-table-column prop="eventName" label="事件名称" width="140" />
            <el-table-column prop="describe" label="说明" />
            <el-table-column prop="cbparams" label="回调参数" />
        </el-table>
        <el-table v-if="type === 'method'" border :data="apiData" style="width: 100%">
            <el-table-column prop="methods" label="方法名" width="140" />
            <el-table-column prop="describe" label="说明" />
            <el-table-column prop="cbparams" label="参数" />
        </el-table>
        <el-table v-if="type === 'slot'" border :data="apiData" style="width: 100%">
            <el-table-column prop="name" label="name" width="140" />
            <el-table-column prop="describe" label="说明" />
        </el-table>
    </div>
</template>

<script>
export default {
    name: "DemoApi",
    props: {
        type: {
            type: String,
            default: "attr"
        },
        title: {
            type: String,
            default: "属性"
        },
        apiData: Array
    }
};
</script>

<style lang="scss" scoped>
.api-wrap {
    margin-top: 10px;
    + .api-wrap {
        margin: 40px 0;
    }
    &:first-child {
        margin-top: 80px;
    }
    &:last-child {
        margin-bottom: 80px;
    }
}
.el-table /deep/ {
    table {
        border-collapse: collapse;
        margin: 0;
    }

    tr {
        border: none;
        border-bottom: 1px solid #dfe2e5;
    }

    th, td{
        border: none;
        border-right: 1px solid #EBEEF5;
    }

    .el-table__body,
    .el-table__footer,
    .el-table__header {
        border-collapse: collapse;
    }
}
</style>
