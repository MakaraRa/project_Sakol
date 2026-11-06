
<script setup lang="ts">
import { computed, ref } from 'vue'
import { universities } from '../data/universities'

const search = ref('')
const selectedLocation = ref('All')
const selectedType = ref('All')

const locations = ['All', ...new Set(universities.map((u) => u.location))]

const filteredUniversities = computed(() => {
  return universities.filter((university) => {
    const matchesSearch =
      university.name.toLowerCase().includes(search.value.toLowerCase())

    const matchesLocation =
      selectedLocation.value === 'All' ||
      university.location === selectedLocation.value

    const matchesType =
      selectedType.value === 'All' ||
      university.type === selectedType.value

    return matchesSearch && matchesLocation && matchesType
  })
})
</script>

<template>
  <main class="page-container">
    <section class="page-heading">
      <h1>Explore Universities</h1>
      <p>Discover universities and explore your study opportunities.</p>
    </section>

    <section class="search-area">
      <input
        v-model="search"
        type="search"
        placeholder="Search universities..."
        aria-label="Search universities"
      />

      <select v-model="selectedLocation" aria-label="Filter by location">
        <option v-for="location in locations" :key="location" :value="location">
          {{ location === 'All' ? 'All locations' : location }}
        </option>
      </select>

      <select v-model="selectedType" aria-label="Filter by university type">
        <option value="All">All types</option>
        <option value="Public">Public</option>
        <option value="Private">Private</option>
      </select>
    </section>

    <div class="results-heading">
      <p>{{ filteredUniversities.length }} universities found</p>
    </div>

    <section v-if="filteredUniversities.length" class="university-grid">
      <article
        v-for="university in filteredUniversities"
        :key="university.id"
        class="university-card"
      >
        <div class="university-logo">
          {{ university.name.charAt(0) }}
        </div>

        <div class="university-info">
          <span class="type-label">{{ university.type }}</span>
          <h2>{{ university.name }}</h2>
          <p class="location">{{ university.location }}</p>
          <p class="description">{{ university.description }}</p>
        </div>

        <button class="details-button">View Details →</button>
      </article>
    </section>

    <p v-else class="empty-message">
      No universities found. Try another search or filter.
    </p>
  </main>
</template>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 24px;
}

.page-heading {
  margin-bottom: 32px;
}

.page-heading h1 {
  font-size: 32px;
  margin: 0 0 8px;
}

.page-heading p,
.results-heading p {
  color: #64748b;
}

.search-area {
  display: flex;
  gap: 12px;
  margin-bottom: 28px;
}

.search-area input,
.search-area select {
  height: 46px;
  padding: 0 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  color: #334155;
}

.search-area input {
  flex: 1;
  min-width: 150px;
}

.results-heading {
  margin-bottom: 16px;
}

.university-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.university-card {
  display: flex;
  flex-direction: column;
  padding: 22px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}

.university-logo {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: #eff6ff;
  color: #2563eb;
  font-size: 20px;
  font-weight: 700;
}

.university-info {
  flex: 1;
}

.type-label {
  display: inline-block;
  margin-top: 16px;
  color: #2563eb;
  font-size: 12px;
  font-weight: 600;
}

.university-card h2 {
  font-size: 17px;
  line-height: 1.4;
}

.location,
.description {
  color: #64748b;
  font-size: 14px;
  line-height: 1.6;
}

.details-button {
  align-self: flex-start;
  margin-top: 14px;
  padding: 10px 0;
  border: none;
  background: transparent;
  color: #2563eb;
  font-weight: 600;
  cursor: pointer;
}

.empty-message {
  padding: 40px;
  text-align: center;
  color: #64748b;
}

@media (max-width: 850px) {
  .university-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .page-container {
    padding: 36px 18px;
  }

  .search-area {
    flex-direction: column;
  }

  .university-grid {
    grid-template-columns: 1fr;
  }
}
</style>
