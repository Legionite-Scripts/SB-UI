<!-- src/components/Button.vue -->
<template>
  <button @click="onClick">{{ label }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
button {
  background-color: #42b983;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
