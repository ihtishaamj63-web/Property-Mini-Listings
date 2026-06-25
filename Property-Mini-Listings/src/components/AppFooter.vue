<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <h3 class="footer-logo">Homes & Beyond</h3>
        <p class="footer-tagline">Cape Town Short-Term Rentals</p>
      </div>
      <div class="footer-links">
        <a href="#" class="footer-link">About</a>
        <a href="#" class="footer-link">Contact</a>
        <a href="#" class="footer-link">Terms</a>
        <a href="#" class="footer-link">Privacy</a>
      </div>
      <p class="footer-copy">
        &copy; {{ currentYear }} Homes & Beyond. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.footer {
  background: #1a1a2e;
  color: #a0a0b8;
  padding: 40px 0 24px;
  margin-top: 48px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}

.footer-logo {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
}

.footer-tagline {
  font-size: 13px;
  color: #a0a0b8;
}

.footer-links {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-link {
  color: #a0a0b8;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #ffffff;
}

.footer-copy {
  font-size: 13px;
  color: #666;
  margin-top: 8px;
}
</style>
