<template>
  <header class="header">
    <div class="header-content">
      <div class="brand">
        <h1 class="brand-name">Homes & Beyond</h1>
        <p class="brand-tagline">Cape Town Short-Term Rentals</p>
      </div>
      <div class="stats">
        <span class="stat-badge">
          <span class="stat-number">{{ activeCount }}</span>
          <span class="stat-label">Available</span>
        </span>
        <span class="stat-badge total">
          <span class="stat-number">{{ totalCount }}</span>
          <span class="stat-label">Total</span>
        </span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    totalCount: {
      type: Number,
      required: true,
    },
    activeCount: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #ffffff;
  padding: 24px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.brand-name {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.brand-tagline {
  font-size: 14px;
  color: #a0a0b8;
  margin-top: 4px;
}

.stats {
  display: flex;
  gap: 16px;
}

.stat-badge {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 12px 20px;
  text-align: center;
  backdrop-filter: blur(10px);
}

.stat-badge.total {
  background: rgba(255, 255, 255, 0.05);
}

.stat-number {
  display: block;
  font-size: 24px;
  font-weight: 700;
}

.stat-label {
  font-size: 12px;
  color: #a0a0b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@media (max-width: 500px) {
  .header-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
