# 🚀 Guía de Desarrollo - Inmuebles23

¡Bienvenido al proyecto! Para mantener la consistencia y estabilidad del código, por favor sigue estos pasos cada vez que trabajes en una nueva funcionalidad o corrección.

## 🛠 Requisitos Previos

Asegúrate de tener instalado [Bun](https://bun.sh/), ya que es el gestor de paquetes oficial del proyecto.

---

## 🏎️ Flujo de Trabajo (Workflow)

Sigue estos pasos detalladamente para cada tarea que realices:

### 1. Crear una rama desde `main`
Antes de empezar a programar, asegúrate de tener lo último de la rama principal:

```bash
git checkout main
git pull origin main
git checkout -b feature/nombre-de-tu-feature
2. Instalar dependencias
Sincroniza tus dependencias locales cada vez que cambies de rama:

Bash

bun install
3. Desarrollo local
Para levantar el servidor de desarrollo con Vite:

Bash

bun run dev
✅ Validación Obligatoria (Checklist de Calidad)
Antes de subir tu rama o crear un Pull Request, debes ejecutar la siguiente suite de comandos para garantizar que el proyecto no "truene" en producción y mantenga los estándares de calidad.

4. Limpieza y Formato
Corre los linters y el formateador para asegurar que el código sigue las reglas del equipo:

Bash

bun run lint    # Verifica errores de código y estilo
bun run format  # Aplica el formato automático
5. Análisis de dependencias y archivos muertos
Usamos Knip para encontrar archivos, dependencias o exportaciones que no se están usando:

Bash

bun run knip
6. Prueba de Build
Finalmente, valida que el proyecto compila correctamente para producción:

Bash

bun run build
[!IMPORTANT] Si alguno de los comandos anteriores falla, no subas tus cambios. Revisa los errores en la terminal, soluciónalos y vuelve a ejecutar las validaciones hasta que todas pasen en limpio.

📤 Subir cambios
Si todas las validaciones fueron exitosas, procede a subir tu trabajo:

Bash

git add .
git commit -m "feat: descripción corta de lo que hiciste"
git push origin feature/nombre-de-tu-feature