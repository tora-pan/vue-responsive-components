<template>
  <button
    class="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="submit"
  >
    {{ buttonText }}
  </button>
</template>
<script>
export default {
  name: "SecondaryButton",
  props: {
    buttonText: String,
  },
};
</script>
