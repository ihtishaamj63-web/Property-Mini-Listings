<template>
  <div class="card" :class="{ unavailable: !property.available }">
    <div class="card-image-wrapper">
      <img
        :src="property.image"
        :alt="property.title"
        class="card-image"
        loading="lazy"
      />
      <span v-if="!property.available" class="not-available-badge"
        >Not Available</span
      >
      <button
        @click="$emit('bookmark')"
        class="bookmark-button"
        :class="{ active: isBookmarked }"
        :aria-label="isBookmarked ? 'Remove bookmark' : 'Add bookmark'"
      >
        <svg
          viewBox="0 0 24 24"
          :fill="isBookmarked ? 'currentColor' : 'none'"
          stroke="currentColor"
          stroke-width="2"
          width="20"
          height="20"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      </button>
    </div>
    <div class="card-content">
      <div class="card-type">{{ property.type }}</div>
      <h3 class="card-title">{{ property.title }}</h3>
      <div class="card-location">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          width="16"
          height="16"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        {{ property.location }}
      </div>
      <div class="card-footer">
        <span class="card-price">R{{ property.price.toLocaleString() }}</span>
        <span class="card-per-night">/ night</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PropertyCard",
  props: {
    property: {
      type: Object,
      required: true,
    },
    isBookmarked: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["bookmark"],
};
</script>

<style scoped>
.card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.card.unavailable {
  opacity: 0.8;
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: #e0e0e0;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .card-image {
  transform: scale(1.05);
}

.not-available-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #e74c3c;
  color: #ffffff;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(231, 76, 60, 0.4);
}

.bookmark-button {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #666;
  backdrop-filter: blur(4px);
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.bookmark-button:hover {
  background: #ffffff;
  color: #16213e;
}

.bookmark-button.active {
  color: #e74c3c;
  background: rgba(255, 255, 255, 0.95);
}

.card-content {
  padding: 20px;
}

.card-type {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #888;
  margin-bottom: 6px;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1a1a2e;
  line-height: 1.3;
}

.card-location {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
}

.card-footer {
  display: flex;
  align-items: baseline;
  gap: 4px;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
}

.card-price {
  font-size: 22px;
  font-weight: 700;
  color: #16213e;
}

.card-per-night {
  font-size: 14px;
  color: #999;
}

@media (max-width: 400px) {
  .card-image-wrapper {
    height: 180px;
  }
}
</style>
