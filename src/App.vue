<script setup lang="ts">
import { QLayout, QDrawer, QPageContainer } from 'quasar'
import { ref } from 'vue'

const isDrawerOpen = ref(false)
</script>

<template>
  <QLayout view="lHh lpR lFf">
    <QDrawer side="left" bordered v-model="isDrawerOpen">Lorem ipsum</QDrawer>

    <QPageContainer>
      <RouterView />
    </QPageContainer>
  </QLayout>
</template>

<style scoped></style>
