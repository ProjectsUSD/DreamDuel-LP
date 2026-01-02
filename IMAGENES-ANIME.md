# 🎨 Guía de Imágenes de Anime para AnimaTales

## 📸 Dónde Conseguir Imágenes de Anime Girls de Calidad

### Sitios Recomendados (NSFW/SFW):

1. **Pixiv** (https://www.pixiv.net)
   - La plataforma #1 para arte anime
   - Filtrar por "R-18" para contenido erótico
   - Buscar: "anime girl", "waifu", nombre del personaje

2. **Danbooru** (https://danbooru.donmai.us)
   - Repositorio masivo de imágenes anime
   - Sistema de tags muy completo
   - Tags útiles: `1girl`, `solo`, `portrait`, `looking_at_viewer`

3. **Gelbooru** (https://gelbooru.com)
   - Similar a Danbooru
   - Mucho contenido NSFW

4. **ArtStation** (https://www.artstation.com)
   - Arte profesional
   - Buscar "anime character design"

5. **DeviantArt** (https://www.deviantart.com)
   - Comunidad de artistas
   - Mucho fanart de personajes anime

### 🤖 Generadores de IA para Anime (RECOMENDADO):

1. **Waifu Labs** (https://waifulabs.com)
   - Generador gratuito de waifus
   - Imágenes de alta calidad
   - Listo para usar

2. **This Waifu Does Not Exist** (https://www.thiswaifudoesnotexist.net)
   - Genera waifus aleatorias
   - Gratis, sin copyright

3. **NovelAI** (https://novelai.net)
   - Generador profesional
   - Permite NSFW
   - Requiere suscripción

4. **Stable Diffusion Web UI** (Local)
   - Genera tus propias imágenes
   - Modelos: AnythingV5, Counterfeit, etc.
   - Control total

### 📝 Reemplazar en CharacterCarousel.tsx:

```typescript
const characters = [
  { 
    name: 'Sakura', 
    type: translations.types[0], 
    image: '/images/characters/sakura.jpg', // ← Cambia aquí
    color: 'from-pink-600 to-rose-600',
    description: '¿Qué miras? No es que me importe...'
  },
  // ... más personajes
];
```

### 🖼️ URLs de Ejemplo (Placeholders temporales):

Mientras consigues tus imágenes, puedes usar estos placeholders:

```
https://i.imgur.com/[ID].jpg (Sube tus imágenes a Imgur)
https://cdn.jsdelivr.net/gh/tu-repo/images/character1.jpg
https://your-domain.com/images/character1.jpg
```

### ⚠️ Consideraciones Legales:

1. **Copyright**: Asegúrate de tener derechos sobre las imágenes
2. **Generadas por IA**: Generalmente sin copyright, verifica ToS
3. **Fanart**: Pide permiso al artista original
4. **Uso comercial**: Usa solo imágenes con licencia apropiada

### 🎯 Especificaciones Técnicas:

- **Resolución mínima**: 512x768px (aspecto 3:4)
- **Formato**: JPG, PNG, WebP
- **Peso máximo**: 500KB (optimizar para web)
- **Ratio**: 3:4 (vertical, tipo tarjeta)

### 🔥 Tags Útiles para Búsqueda:

Para contenido SFW:
- `anime girl portrait`
- `waifu`
- `anime character art`
- `visual novel character`

Para contenido NSFW/Sugerente:
- `anime girl sexy`
- `ecchi`
- `suggestive`
- `bikini`
- `lingerie`

### 📦 Estructura de Carpetas Recomendada:

```
public/
└── images/
    └── characters/
        ├── sakura.jpg
        ├── akira.jpg
        ├── yuki.jpg
        ├── raven.jpg
        ├── luna.jpg
        ├── iris.jpg
        ├── nova.jpg
        └── celeste.jpg
```

### 🚀 Optimización:

Usa herramientas como:
- **TinyPNG**: Compresión sin pérdida
- **Squoosh**: Conversor a WebP
- **ImageOptim**: Optimización automática

---

## 💡 Tip Pro:

Para un look profesional, todas las imágenes deben tener:
- Mismo estilo artístico
- Fondo similar o transparente
- Misma iluminación
- Calidad consistente

**Considera contratar a un artista de Pixiv o Fiverr para crear un set personalizado.** 🎨
