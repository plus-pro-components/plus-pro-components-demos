<template>
  <el-config-provider :locale="locale">
    <!-- 自动导入 -->
    <PlusDatePicker v-model="value" />
    <!-- <ElDatePicker /> -->
    {{ value }}
  </el-config-provider>
</template>

<script setup>
import { ref } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import plusZhCn from 'plus-pro-components/locale/zh-cn'

const value = ref()
const locale = ref({ ...zhCn, ...plusZhCn })
</script>
