<template>
  <h1>This is an about page</h1>
  <button @click="openDialog">Open Dialog</button>
</template>

<script setup>
import { useDialog } from 'primevue/usedialog'
import DialogContent from '@/components/DialogContent.vue'

const dialog = useDialog()

const openDialog = () => {
  dialog.open(DialogContent, {
    props: {
      header: 'Dialog Header',
      style: {
        width: '50vw',
      },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
      modal: true,
    },
    onClose: (e) => {
      console.log(e)
    },
  })
}
</script>

<style></style>
