
# 侧边栏弹窗
---

![侧边栏弹窗](/image/001.jpg)

## 属性
<Common-DemoApi :apiData="attribute" type="attr" />

## 事件
<Common-DemoApi :apiData="events" type="event"/>

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
                slots: [{
                    name: "test",
                    describe: "",
                }]
            }
        }
    }
</script>


