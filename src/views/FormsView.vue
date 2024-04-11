<template>
  <h1>This is a forms page</h1>
  <Form @submit="onSubmit" class="Forms" v-slot="{ meta, err }">
    <Field type="email" name="email" rules="required|email" />
    <ErrorMessage name="email" />

    <Field name="name" rules="required" />
    <ErrorMessage name="name" />
    <button :disabled="!meta.valid">Sign up for newsletter</button>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'

const onSubmit = (values) => {
  console.log(values)
}

</script>

<style scoped>
.Forms {
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
