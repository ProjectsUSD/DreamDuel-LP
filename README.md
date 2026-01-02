# AnimaTales - Landing Page 🌸✨

Landing page inmersiva y elegante para **AnimaTales**, un generador de historias interactivas (roleplay) basado en IA con estética anime y libertad narrativa total.

## 🚀 Stack Tecnológico

- **Next.js 14** (App Router) - Framework React para producción
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de utilidades CSS
- **Framer Motion** - Animaciones fluidas y profesionales
- **Lucide React** - Iconos modernos
- **next-intl** - Internacionalización (ES/EN)

## 📁 Estructura del Proyecto

```
LandingPageHtai/
├── src/
│   ├── app/
│   │   ├── [locale]/              # Rutas internacionalizadas
│   │   │   ├── layout.tsx         # Layout con i18n
│   │   │   └── page.tsx           # Página principal
│   │   └── globals.css            # Estilos globales + Tailwind
│   ├── components/
│   │   ├── AgeVerificationModal.tsx    # Modal +18 (PRIORITARIO)
│   │   ├── HeroSection.tsx             # Hero con chat interactivo
│   │   ├── CharacterCarousel.tsx       # Slider infinito de personajes
│   │   ├── FeaturesSection.tsx         # 4 beneficios clave
│   │   ├── LiveSimulator.tsx           # Generador interactivo
│   │   ├── PricingSection.tsx          # Planes Free/Premium
│   │   ├── Testimonials.tsx            # Reseñas de usuarios
│   │   ├── Footer.tsx                  # Footer completo
│   │   ├── LanguageSwitcher.tsx        # Selector de idioma
│   │   ├── ScrollToTop.tsx             # Botón scroll to top
│   │   └── AnimatedBackground.tsx      # Fondo animado
│   ├── locales/
│   │   ├── es.json                # Traducciones español
│   │   └── en.json                # Traducciones inglés
│   ├── lib/
│   │   └── utils.ts               # Utilidades
│   ├── types/
│   │   └── clsx.d.ts              # Type definitions
│   ├── i18n.ts                    # Configuración i18n
│   └── middleware.ts              # Middleware Next.js
├── tailwind.config.ts             # Configuración Tailwind personalizada
├── tsconfig.json                  # Configuración TypeScript
├── next.config.js                 # Configuración Next.js
├── postcss.config.js              # PostCSS
├── package.json                   # Dependencias
└── README.md

```

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| **Primary Dark** | `#0f0f12` | Fondo principal |
| **Primary Darker** | `#08080a` | Fondo oscuro secundario |
| **Neon Pink** | `#ec4899` | Acento primario |
| **Neon Violet** | `#8b5cf6` | Acento secundario |
| **Neon Crimson** | `#dc2626` | Acento terciario |

### Gradientes Especiales
- `bg-neon-gradient`: Rosa → Violeta
- `bg-purple-gradient`: Púrpura → Azul
- `text-gradient`: Degradado de texto multicolor

## 🛠️ Instalación y Uso

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Compilar para producción

```bash
npm run build
npm start
```

## 🌐 Idiomas Soportados

- **Español (ES)** - Idioma por defecto
- **Inglés (EN)**

El cambio de idioma se hace mediante el selector flotante en la esquina superior derecha.

## ✨ Componentes Implementados

### ✅ Modal de Verificación de Edad
- Overlay elegante con backdrop blur
- Verificación +18 obligatoria
- Almacenamiento en sessionStorage
- Animaciones de entrada suaves
- Efectos glow neón

### ✅ Hero Section
- Título impactante con gradiente
- Chat interactivo simulado (lado derecho)
- 2 CTAs con animaciones hover
- Partículas flotantes en background
- Indicadores de confianza
- Responsivo completo

### ✅ Character Carousel
- Slider infinito (marquee effect)
- 8 personajes con placeholders
- Etiquetas de personalidad
- Efectos hover y glow
- Fade effect en los bordes

### ✅ Features Section
- 4 características principales
- Iconos animados
- Cards con hover effects
- Gradientes y glows
- Call to action integrado

### ✅ Live Simulator
- Selector de tags interactivo (máx. 3)
- Generador de títulos de historias
- Animación de "generando"
- Preview del resultado
- Feedback visual inmediato

### ✅ Pricing Section
- Plan Free
- Plan Premium (destacado)
- Badges y efectos especiales
- Lista de características
- CTAs diferenciados

### ✅ Testimonials
- 3 reseñas con avatares
- Sistema de estrellas
- Contenido bilingüe
- Animaciones de entrada

### ✅ Footer
- Información de marca
- Links legales
- Redes sociales
- Disclaimer +18
- Email de contacto

### ✅ Componentes Adicionales
- **LanguageSwitcher**: Selector de idioma flotante
- **ScrollToTop**: Botón para volver arriba
- **AnimatedBackground**: Fondo con orbes animados

## 🎯 Características Destacadas

### Animaciones (Framer Motion)
- Fade in/out suaves
- Slide up en scroll
- Hover effects interactivos
- Partículas flotantes
- Orbes de fondo animados
- Transiciones de página

### Diseño
- 100% Responsivo (Mobile-first)
- Dark mode nativo
- Glassmorphism effects
- Glow effects neón
- Bordes redondeados modernos
- Tipografía: Outfit + Nunito

### UX
- Navegación suave (scroll smooth)
- Feedback visual constante
- Loading states
- Micro-interacciones
- Accesibilidad básica

### Privacidad
- Verificación de edad
- Disclaimers legales
- Meta tags robots: noindex
- Mensaje de privacidad

## 📝 Próximas Mejoras (Opcional)

- [ ] Conectar con backend real
- [ ] Autenticación de usuarios
- [ ] Sistema de registro
- [ ] Galería de personajes real
- [ ] Sistema de pagos (Stripe)
- [ ] Dashboard de usuario
- [ ] Generación de imágenes IA
- [ ] Chat funcional con IA
- [ ] Analytics integrado

## ⚠️ Nota Legal

Este proyecto está diseñado para contenido exclusivamente **adulto (+18)**. Incluye:
- Verificación de edad obligatoria
- Disclaimers apropiados
- Meta tags para prevenir indexación
- Mensajes de privacidad

**Uso responsable:** Este código es un demo educativo. Asegúrate de cumplir con todas las leyes locales y regulaciones aplicables antes de desplegar en producción.

## 📄 Licencia

Este proyecto es privado y está destinado únicamente para uso personal o educativo.

---

**Desarrollado con ❤️ por AnimaTales Team**

🌸 *Donde tus fantasías cobran vida* ✨
