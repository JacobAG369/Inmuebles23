# 🚀 Guía de Desarrollo - Inmuebles23

¡Bienvenido al proyecto! Para mantener la consistencia y estabilidad del código, por favor sigue estos pasos cada vez que trabajes en una nueva funcionalidad o corrección.

## 🛠 Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) y npm (incluido con Node.js).

---

## 🏎️ Flujo de Trabajo (Workflow)

Sigue estos pasos detalladamente para cada tarea que realices:

### 1. Crear una rama desde `main`
Antes de empezar a programar, asegúrate de tener lo último de la rama principal:

```bash
git checkout main
git pull origin main
git checkout -b feature/nombre-de-tu-feature
```

### 2. Instalar dependencias
Sincroniza tus dependencias locales cada vez que cambies de rama:

```bash
npm install
```

### 3. Desarrollo local
Para levantar el servidor de desarrollo con Vite:

```bash
npm run dev
```

### ✅ Validación Obligatoria (Checklist de Calidad)
Antes de subir tu rama o crear un Pull Request, debes ejecutar la siguiente suite de comandos para garantizar que el proyecto no "truene" en producción y mantenga los estándares de calidad.

### 4. Limpieza y Formato
Corre los linters y el formateador para asegurar que el código sigue las reglas del equipo:

```bash
npm run lint    # Verifica errores de código y estilo
npm run format  # Aplica el formato automático
```

### 5. Análisis de dependencias y archivos muertos
(Si usas knip, asegúrate de tenerlo configurado en package.json scripts, de lo contrario omite este paso o usa el comando correspondiente)

### 6. Prueba de Build
Finalmente, valida que el proyecto compila correctamente para producción:

```bash
npm run build
```

[!IMPORTANT] Si alguno de los comandos anteriores falla, no subas tus cambios. Revisa los errores en la terminal, soluciónalos y vuelve a ejecutar las validaciones hasta que todas pasen en limpio.

📤 Subir cambios
Si todas las validaciones fueron exitosas, procede a subir tu trabajo:

```bash
git add .
git commit -m "feat: descripción corta de lo que hiciste"
git push origin feature/nombre-de-tu-feature
```

---

## 🏗 Estructura del Proyecto (Migración a React)

Este proyecto ha sido migrado de un template HTML/CSS a una aplicación React moderna utilizando Vite, Tailwind CSS y shadcn/ui.

### Tecnologías Principales
- **React**: Biblioteca de UI.
- **Vite**: Build tool y servidor de desarrollo.
- **Tailwind CSS (v4)**: Framework de estilos utility-first.
- **shadcn/ui**: Biblioteca de componentes reutilizables.
- **TanStack Router**: Enrutamiento tipo-seguro.
- **Lucide React**: Iconos.

### Estructura de Directorios

- `src/components/layout`: Componentes estructurales (Header, Footer, Layout).
- `src/components/home`: Componentes específicos de la página de inicio (HeroCarousel).
- `src/components/property`: Componentes relacionados con inmuebles (PropertyCard).
- `src/components/ui`: Componentes base de shadcn/ui (Button, Card, Input, etc.).
- `src/pages`: Páginas de la aplicación (Home, Buy, Rent, Contact, Login, PropertyDetail).
- `src/lib`: Utilidades y datos estáticos (data.js).

### Configuración Especial

- **Alias `@`**: Configurado en `vite.config.js` y `jsconfig.json` para apuntar a `./src`.
- **Tailwind v4**: Configurado en `src/index.css` usando `@import "tailwindcss";` y variables CSS para el tema de shadcn.
- **TanStack Router**: Configurado en `src/router.jsx`.
