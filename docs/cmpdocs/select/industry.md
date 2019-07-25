
# 行业选择
---
## 属性
<Common-DemoApi :apiData="attribute" type="attr" />

## 事件
<Common-DemoApi :apiData="events" type="event"/>

## 方法
<Common-DemoApi :apiData="method" type="method" />


<script>
    export default {
        data() {
            return {
                attribute: [{
                    params: "test",
                    describe: "",
                    type: "",
                    optionValue: "",
                    defaultValue: "",
                }],
                events: [{
                    eventName: "test",
                    describe: "",
                    cbparams: "",
                }],
                method: [{
                    methods: "test",
                    describe: "",
                    cbparams: "",
                }]
            }
        }
    }
</script>


