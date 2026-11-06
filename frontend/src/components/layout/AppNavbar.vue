
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <RouterLink to="/universities" class="logo">
      Sakol<span> :)</span>
    </RouterLink>

    <nav>
      <RouterLink to="/universities">Universities</RouterLink>
      <RouterLink to="/majors">Majors</RouterLink>
      <RouterLink to="/find-my-major">Find My Major</RouterLink>
    </nav>

    <div class="nav-actions">
      <button class="language-button">EN / KH</button>
      <button class="login-button">Login</button>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  height: 72px;
  padding: 0 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-bottom: 1px solid #e5e7eb;
}

.logo {
  font-size: 25px;
  font-weight: 750;
  color: #1e40af;
  text-decoration: none;
}

.logo span {
  color: #2563eb;
}

nav {
  display: flex;
  gap: 32px;
}

nav a {
  color: #64748b;
  font-size: 14px;
  text-decoration: none;
}

nav a.router-link-active {
  color: #2563eb;
  font-weight: 600;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.language-button,
.login-button {
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.language-button {
  background: transparent;
  color: #475569;
}

.login-button {
  background: #2563eb;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
}

@media (max-width: 700px) {
  .navbar {
    padding: 0 4%;
  }

  nav {
    gap: 12px;
  }

  nav a {
    font-size: 12px;
  }

  .nav-actions {
    display: none;
  }
}
</style>
