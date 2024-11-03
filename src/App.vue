<template>
   <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
<Badge
  :variant="'solid'"
  :ref_for="true"
  size="lg"
  label="Badge"
  theme="green"
>
  Badge
</Badge>
qwdqwd
<Button @click="dialog1 = true">
  Show Dialog
</Button>
<Dialog
  :options="{
    title: 'Confirm',
    message: 'Are you sure you want to confirm this action?',
    size: 'xl',
    actions: [
      {
        label: 'Confirm',
        variant: 'solid',
        onClick: () => {

            console.log('qwqwdwqdqwd')

                },
      },
    ],
  }"
  v-model="dialog1"
/>
</template>


<script setup>
import { ref } from 'vue';
import { Badge, Dialog, Button } from 'frappe-ui';

const dialog1 = ref(false);

</script>

<style scoped>

</style>
