<template>








  <ListView :columns="[
    {
      label: 'Name',
      key: 'name',
      width: 3,
    },
    {
      label: 'Email',
      key: 'email',
      width: '200px',
    },
    {
      label: 'Role',
      key: 'role',
    },
    {
      label: 'Status',
      key: 'status',
    },
  ]" :rows="data" />














</template>


<script setup>
import { ref, computed } from 'vue';
import { Badge, Dialog, Button, ListView } from 'frappe-ui';



const data = ref([
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@doe.com",
    "status": "Active",
    "role": "Developer",
    "user_image": "https://avatars.githubusercontent.com/u/499550"
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "email": "jane@doe.com",
    "status": "Inactive",
    "role": "HR",
    "user_image": "https://avatars.githubusercontent.com/u/499120"
  },
  {
    "id": 3,
    "name": "Bob Smith",
    "email": "bob@smith.com",
    "status": "Active",
    "role": "Manager",
    "user_image": "https://avatars.githubusercontent.com/u/12345"
  },
  {
    "id": 4,
    "name": "Alice Johnson",
    "email": "alice@johnson.com",
    "status": "Inactive",
    "role": "Designer",
    "user_image": "https://avatars.githubusercontent.com/u/67890"
  },
  {
    "id": 5,
    "name": "Tom Wilson",
    "email": "tom@wilson.com",
    "status": "Active",
    "role": "Tester",
    "user_image": "https://avatars.githubusercontent.com/u/54321"
  },
  {
    "id": 6,
    "name": "Sarah Lee",
    "email": "sarah@lee.com",
    "status": "Inactive",
    "role": "Analyst",
    "user_image": "https://avatars.githubusercontent.com/u/98765"
  },
  {
    "id": 7,
    "name": "Mike Brown",
    "email": "mike@brown.com",
    "status": "Active",
    "role": "Developer",
    "user_image": "https://avatars.githubusercontent.com/u/13579"
  },
  {
    "id": 8,
    "name": "Emily Davis",
    "email": "emily@davis.com",
    "status": "Inactive",
    "role": "HR",
    "user_image": "https://avatars.githubusercontent.com/u/24680"
  },
  {
    "id": 9,
    "name": "David Wilson",
    "email": "david@wilson.com",
    "status": "Active",
    "role": "Manager",
    "user_image": "https://avatars.githubusercontent.com/u/35791"
  },
  {
    "id": 10,
    "name": "Lisa Chen",
    "email": "lisa@chen.com",
    "status": "Inactive",
    "role": "Designer",
    "user_image": "https://avatars.githubusercontent.com/u/46802"
  },
  {
    "id": 11,
    "name": "Chris Nguyen",
    "email": "chris@nguyen.com",
    "status": "Active",
    "role": "Tester",
    "user_image": "https://avatars.githubusercontent.com/u/57913"
  },
  {
    "id": 12,
    "name": "Samantha Patel",
    "email": "samantha@patel.com",
    "status": "Inactive",
    "role": "Analyst",
    "user_image": "https://avatars.githubusercontent.com/u/68024"
  },
  {
    "id": 13,
    "name": "Mark Gonzalez",
    "email": "mark@gonzalez.com",
    "status": "Active",
    "role": "Developer",
    "user_image": "https://avatars.githubusercontent.com/u/79135"
  },
  {
    "id": 14,
    "name": "Olivia Reyes",
    "email": "olivia@reyes.com",
    "status": "Inactive",
    "role": "HR",
    "user_image": "https://avatars.githubusercontent.com/u/80246"
  },
  {
    "id": 15,
    "name": "Robert Garcia",
    "email": "robert@garcia.com",
    "status": "Active",
    "role": "Manager",
    "user_image": "https://avatars.githubusercontent.com/u/91357"
  },
])



const dialog1 = ref(false);

const doubleCount = computed(() => dialog1.value = true);

// Method
function doubleCount_log() {
  console.log(doubleCount)
  console.log(dialog1)

}




</script>

<style scoped></style>
