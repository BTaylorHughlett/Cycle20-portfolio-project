<template>
  <section class="portfolio-manager" id="portfolio-manager">
    <div class="pm-header">
      <h2>Portfolio Manager</h2>
      <p>
        A beginner-friendly CRUD example that connects this Vue app to a
        monday.com board. It reads, create, update, and delete portfolio items!
      </p>
    </div>

    <div class="pm-layout">
      <div class="pm-panel pm-form-panel">
        <h3>
          {{ isEditing ? "Edit Portfolio Item" : "Create Portfolio Item" }}
        </h3>
        <p class="pm-helper-text">
          This form only uses these fields: title, description, tech stack,
          status, GitHub link, and image URL.
        </p>

        <form class="pm-form" @submit.prevent="handleSubmit">
          <label>
            <span>Project Title</span>
            <input
              v-model.trim="form.title"
              type="text"
              placeholder="Example: Mood Bloom"
              required
            />
          </label>

          <label>
            <span>Description</span>
            <textarea
              v-model.trim="form.description"
              rows="5"
              placeholder="Write a simple description of the project"
            />
          </label>

          <label>
            <span>Tech Stack</span>
            <input
              v-model.trim="form.techStack"
              type="text"
              placeholder="Example: Vue, Node.js, PostgreSQL"
            />
          </label>

          <label>
            <span>Status</span>
            <input
              v-model.trim="form.status"
              type="text"
              placeholder="Example: Working on it"
            />
          </label>

          <label>
            <span>GitHub Link</span>
            <input
              v-model.trim="form.githubLink"
              type="text"
              placeholder="Example: https://github.com/your-name/project"
            />
          </label>

          <label>
            <span>Image URL</span>
            <input
              v-model.trim="form.imageUrl"
              type="text"
              placeholder="Example: https://images.example.com/project.png"
            />
          </label>

          <div class="pm-button-row">
            <button type="submit" :disabled="isBusy">
              {{
                isBusy
                  ? "Saving..."
                  : isEditing
                    ? "Save Changes"
                    : "Create Item"
              }}
            </button>
            <button
              v-if="isEditing"
              type="button"
              class="pm-secondary"
              @click="resetForm"
              :disabled="isBusy"
            >
              Cancel Edit
            </button>
          </div>
        </form>
      </div>

      <div class="pm-panel pm-list-panel">
        <div class="pm-list-header">
          <div>
            <h3>Portfolio Items</h3>
            <p class="pm-helper-text">
              Reading directly from your monday.com board.
            </p>
          </div>
          <button class="pm-secondary" @click="loadItems" :disabled="isBusy">
            {{ isBusy ? "Working..." : "Refresh List" }}
          </button>
        </div>

        <p v-if="message" class="pm-message">{{ message }}</p>
        <p v-if="errorMessage" class="pm-error">{{ errorMessage }}</p>
        <div v-if="isLoading" class="pm-loading">
          Loading portfolio items...
        </div>
        <div v-else-if="items.length === 0" class="pm-empty">
          No portfolio items found yet. Create your first item using the form.
        </div>

        <div v-else class="pm-card-list">
          <article v-for="item in items" :key="item.id" class="pm-card">
            <div class="pm-card-top">
              <div>
                <h4>{{ item.title }}</h4>
                <p class="pm-status">
                  Status: {{ item.status || "No status yet" }}
                </p>
              </div>
              <div class="pm-card-actions">
                <button
                  class="pm-secondary"
                  @click="startEdit(item)"
                  :disabled="isBusy"
                >
                  Edit
                </button>
                <button
                  class="pm-danger"
                  @click="handleDelete(item)"
                  :disabled="isBusy"
                >
                  Delete
                </button>
              </div>
            </div>

            <p class="pm-description">
              {{ item.description || "No description provided." }}
            </p>
            <ul class="pm-details">
              <li>
                <strong>Tech Stack:</strong>
                {{ item.techStack || "None listed" }}
              </li>
              <li>
                <strong>GitHub Link:</strong>
                {{ item.githubLink || "None listed" }}
              </li>
              <li>
                <strong>Image URL:</strong> {{ item.imageUrl || "None listed" }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// TODO Make it work!
</script>

<style scoped>
.portfolio-manager {
  padding: 2rem;
  background: #f5f7fb;
}
.pm-header {
  max-width: 900px;
  margin: 0 auto 1.5rem;
}
.pm-header h2,
.pm-panel h3,
.pm-card h4 {
  margin-bottom: 0.5rem;
}
.pm-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}
.pm-panel {
  background: #fff;
  border: 1px solid #d9e0ea;
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.05);
}
.pm-form {
  display: grid;
  gap: 1rem;
}
.pm-form label {
  display: grid;
  gap: 0.45rem;
}
.pm-form input,
.pm-form textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #c9d3e0;
  border-radius: 8px;
  font: inherit;
}
.pm-button-row,
.pm-list-header,
.pm-card-top,
.pm-card-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: space-between;
  align-items: center;
}
button {
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  cursor: pointer;
  font: inherit;
  background: #1f4bb3;
  color: white;
}
button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.pm-secondary {
  background: #e8eef9;
  color: #173b89;
}
.pm-danger {
  background: #b42318;
  color: white;
}
.pm-helper-text,
.pm-status,
.pm-message,
.pm-error,
.pm-loading,
.pm-empty,
.pm-description,
.pm-details {
  margin: 0;
}
.pm-message {
  color: #0f7b3e;
  margin-bottom: 1rem;
}
.pm-error {
  color: #b42318;
  margin-bottom: 1rem;
}
.pm-card-list {
  display: grid;
  gap: 1rem;
}
.pm-card {
  border: 1px solid #d9e0ea;
  border-radius: 10px;
  padding: 1rem;
  background: #fbfcff;
}
.pm-details {
  padding-left: 1.2rem;
}
@media (max-width: 900px) {
  .pm-layout {
    grid-template-columns: 1fr;
  }
  .pm-list-header,
  .pm-card-top {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
