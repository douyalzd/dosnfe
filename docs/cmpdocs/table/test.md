# 组件开发规范
---

## 文档模板

```md
# 文档标题
---

## 属性
<Common-DemoApi :apiData="attribute" type="attr" />

## 事件
<Common-DemoApi :apiData="events" type="event"/>

## 方法
<Common-DemoApi :apiData="method" type="method" />

## 插槽
<Common-DemoApi :apiData="slots" type="slot" />


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
                }],
                slots: [{
                    name: "test",
                    describe: "",
                }]
            }
        }
    }
</script>
```