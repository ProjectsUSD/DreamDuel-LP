# AnimaTales Landing Page - Guía de Desarrollo

## 🎨 Guía de Estilos

### Colores
Usa las clases de Tailwind personalizadas:
- `bg-primary-dark` - Fondo principal
- `bg-neon-gradient` - Gradiente rosa/violeta
- `text-gradient` - Texto con gradiente
- `border-neon-pink/30` - Bordes con opacidad

### Animaciones
Siempre usa Framer Motion para animaciones:
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Contenido
</motion.div>
```

### Componentes
- Todos los componentes son 'use client'
- Usa TypeScript estricto
- Props siempre tipadas con interfaces

## 🧩 Agregar Nuevos Componentes

1. Crear archivo en `/src/components/NuevoComponente.tsx`
2. Agregar traducciones en `/src/locales/es.json` y `/src/locales/en.json`
3. Importar y usar en `/src/app/[locale]/page.tsx`
4. Mantener el mismo estilo visual (dark, neon, rounded)

## 🌐 Agregar Traducciones

Edita ambos archivos:
- `/src/locales/es.json`
- `/src/locales/en.json`

Uso:
```tsx
const t = useTranslations();
const text = t('section.key');
```

## 🎯 Convenciones

- **Nombres de archivos**: PascalCase para componentes
- **Nombres de variables**: camelCase
- **Constantes**: UPPER_SNAKE_CASE
- **CSS**: Tailwind utility classes primero

## 🚀 Deploy

### Vercel (Recomendado)
```bash
vercel deploy
```

### Docker
```bash
docker build -t animatales-landing .
docker run -p 3000:3000 animatales-landing
```

## 🧪 Testing (Próximamente)

```bash
npm run test
npm run test:e2e
```

## 📊 Performance

- Lazy load de imágenes
- Code splitting automático (Next.js)
- Optimización de fonts (Google Fonts)
- Minificación CSS/JS en producción
