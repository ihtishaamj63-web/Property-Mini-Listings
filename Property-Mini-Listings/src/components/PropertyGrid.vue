<template>
  <div v-if="properties.length > 0">
    <TransitionGroup name="card-list" tag="div" class="property-grid">
      <PropertyCard
        v-for="property in properties"
        :key="property.id"
        :property="property"
        :isBookmarked="bookmarkedIds.includes(property.id)"
        @bookmark="$emit('bookmark', property.id)"
      />
    </TransitionGroup>
  </div>
  <div v-else class="empty-state">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      width="64"
      height="64"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
    <h2>No properties found</h2>
    <p>Try adjusting your search criteria or price range</p>
  </div>
</template>

<script>
import PropertyCard from "./PropertyCard.vue";

export default {
  name: "PropertyGrid",
  components: {
    PropertyCard,
  },
  props: {
    properties: {
      type: Array,
      required: true,
    },
    bookmarkedIds: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["bookmark"],
};
</script>

<style scoped>
.property-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
}

.empty-state {
  text-align: center;
  padding: 80px 24px;
  color: #999;
}

.empty-state svg {
  color: #ccc;
  margin-bottom: 16px;
}

.empty-state h2 {
  font-size: 20px;
  color: #666;
  margin-bottom: 8px;
}

.empty-state p {
  font-size: 14px;
}

/* TransitionGroup animations */
.card-list-enter-active {
  transition: all 0.5s ease;
}

.card-list-leave-active {
  transition: all 0.35s ease;
  position: absolute;
}

.card-list-enter-from {
  opacity: 0;
  transform: scale(0.85) translateY(20px);
}

.card-list-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-15px);
}

.card-list-move {
  transition: transform 0.5s ease;
}

@media (max-width: 400px) {
  .property-grid {
    grid-template-columns: 1fr;
  }
}
</style>
