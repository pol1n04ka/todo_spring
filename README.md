# Todo app

Simple todo app with Spring Boot Java backend and Vue/Nuxt frontend.

### Checklist

- [X] Create api
- [X] Delete static and templates folder
- [ ] Write tests
- [ ] Create frontend
- [ ] Create docker containers for both and add reverse proxy for prod (caddy maybe)
- [ ] Write setup instructions
- [ ] Write deploy instructions

Example of configuration for nuxt proxy: 

```ts
export default defineNuxtConfig({
  nitro: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',  // Spring Boot
        changeOrigin: true
      }
    }
  }
})
```

## How to set up

## How to deploy