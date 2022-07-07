<template>
  <div>
      <input type="text" v-gfocus v-model="sum" v-number="sum">
      <!-- <input type="text" v-focus> -->
      <p v-color="colorStr" @click="colorStr = 'aqua'">点击更换颜色</p>
  </div>
</template>

<script>
// 目标: 创建 "自定义指令", 让输入框自动聚焦
// 1. 创建自定义指令
// 全局 / 局部
// 2. 在标签上使用自定义指令  v-指令名
// 注意:
// inserted方法 - 指令所在标签, 被插入到网页上触发(一次)
// update方法 - 指令对应数据/标签更新时, 此方法执行
export default {
    data(){
        return {
            colorStr: 'red',
            sum: '',
        }
    },
    directives: {
        focus: {
            inserted(el){
                el.focus()
            }
        },
        number: {
            // el:自定义指令所在的标签    binding:标签的集合    vnode:虚拟DOM  
            inserted(el, binding, vnode){
                console.log(binding.expression);  // 返回具体的表达式
                el.value = el.value.replace(/[^\d.]/g, "")
                vnode.context[binding.expression] = el.value
            },
            update(el, binding, vnode){
                el.value = el.value.replace(/[^\d.]/g, "")
                vnode.context[binding.expression] = el.value
            }
        },
        color: {
            inserted(el, binding){
                el.style.color = binding.value
            },
            update(el, binding){
                el.style.color = binding.value
            }
        }
    }
}
</script>

<style>

</style>