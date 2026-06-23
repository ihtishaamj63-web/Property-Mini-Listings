<template>
  <button
    @click="$emit('toggle')"
    class="sort-button"
    :class="{ active: sortOrder === 'high-to-low' }"
  >
    <svg
      class="sort-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      width="20"
      height="20"
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="14" y2="12" />
      <line x1="4" y1="18" x2="8" y2="18" />
    </svg>
    <span
      >Price:
      {{ sortOrder === "low-to-high" ? "Low to High" : "High to Low" }}</span
    >
    <svg
      class="chevron"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      width="16"
      height="16"
    >
      <polyline
        :points="
          sortOrder === 'low-to-high' ? '6 9 12 15 18 9' : '6 15 12 9 18 15'
        "
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "SortToggle",
  props: {
    sortOrder: {
      type: String,
      required: true,
    },
  },
  emits: ["toggle"],
};
</script>

<style scoped>
.sort-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 20px;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  color: #333;
}

.sort-button:hover {
  border-color: #16213e;
  background: #fafafa;
}

.sort-button.active {
  border-color: #16213e;
  background: #16213e;
  color: #ffffff;
}

.sort-icon,
.chevron {
  flex-shrink: 0;
}
</style>
