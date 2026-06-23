<template>
  <div class="search-bar">
    <svg
      class="search-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Search by title or location..."
      class="search-input"
    />
    <button
      v-if="modelValue"
      @click="$emit('update:modelValue', '')"
      class="clear-button"
      aria-label="Clear search"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        width="18"
        height="18"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
.search-bar {
  position: relative;
  flex: 1;
  min-width: 250px;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #999;
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 14px 16px 14px 48px;
  font-size: 15px;
  font-family: "Inter", sans-serif;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  background: #ffffff;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
  outline: none;
}

.search-input:focus {
  border-color: #16213e;
  box-shadow: 0 0 0 3px rgba(22, 33, 62, 0.1);
}

.search-input::placeholder {
  color: #bbb;
}

.clear-button {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  padding: 4px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.clear-button:hover {
  background-color: #f0f0f0;
  color: #333;
}
</style>
