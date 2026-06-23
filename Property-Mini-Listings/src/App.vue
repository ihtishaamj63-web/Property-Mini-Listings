<template>
  <div class="app">
    <AppHeader :totalCount="properties.length" :activeCount="activeCount" />
    <main class="main-content">
      <div class="controls">
        <SearchBar v-model="searchQuery" />
        <SortToggle :sortOrder="sortOrder" @toggle="toggleSort" />
      </div>
      <PriceRangeFilter
        :min="priceRange.min"
        :max="priceRange.max"
        @update:rangeMin="rangeMin = $event"
        @update:rangeMax="rangeMax = $event"
      />
      <PropertyGrid
        :properties="filteredAndSortedProperties"
        :bookmarkedIds="bookmarkedIds"
        @bookmark="toggleBookmark"
      />
    </main>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import SearchBar from "./components/SearchBar.vue";
import SortToggle from "./components/SortToggle.vue";
import PriceRangeFilter from "./components/PriceRangeFilter.vue";
import PropertyGrid from "./components/PropertyGrid.vue";
import { properties, getPriceRange } from "./data/properties.js";

export default {
  name: "App",
  components: {
    AppHeader,
    SearchBar,
    SortToggle,
    PriceRangeFilter,
    PropertyGrid,
  },
  data() {
    const range = getPriceRange(properties);
    return {
      properties,
      searchQuery: "",
      sortOrder: "low-to-high",
      bookmarkedIds: [],
      rangeMin: range.min,
      rangeMax: range.max,
    };
  },
  computed: {
    priceRange() {
      return getPriceRange(this.properties);
    },
    activeCount() {
      return this.properties.filter((p) => p.available).length;
    },
    filteredAndSortedProperties() {
      let result = [...this.properties];

      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase().trim();
        result = result.filter(
          (p) =>
            p.title.toLowerCase().includes(query) ||
            p.location.toLowerCase().includes(query),
        );
      }

      result = result.filter(
        (p) => p.price >= this.rangeMin && p.price <= this.rangeMax,
      );

      result.sort((a, b) => {
        return this.sortOrder === "low-to-high"
          ? a.price - b.price
          : b.price - a.price;
      });

      return result;
    },
  },
  methods: {
    toggleSort() {
      this.sortOrder =
        this.sortOrder === "low-to-high" ? "high-to-low" : "low-to-high";
    },
    toggleBookmark(id) {
      const index = this.bookmarkedIds.indexOf(id);
      if (index === -1) {
        this.bookmarkedIds.push(id);
      } else {
        this.bookmarkedIds.splice(index, 1);
      }
      this.saveBookmarks();
    },
    saveBookmarks() {
      localStorage.setItem("bookmarkedIds", JSON.stringify(this.bookmarkedIds));
    },
    loadBookmarks() {
      const saved = localStorage.getItem("bookmarkedIds");
      if (saved) {
        this.bookmarkedIds = JSON.parse(saved);
      }
    },
  },
  mounted() {
    this.loadBookmarks();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
  background-color: #f5f5f5;
  color: #1a1a2e;
}

.app {
  min-height: 100vh;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;
}

.controls {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  align-items: center;
  flex-wrap: wrap;
}

@media (max-width: 600px) {
  .controls {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
