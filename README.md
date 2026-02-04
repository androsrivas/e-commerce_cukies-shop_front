# Cukies Shop - Frontend

Frontend de la aplicación e-commerce "Cukies Shop", desarrollado con React y Vite, que consume los endpoints del backend correspondiente para permitir la navegación de productos y la interacción del usuario.

### Tecnologías
- React
- Javascript
- Vite
- shadcn/ui (componentes UI)
- CSS / Tailwind
- Fetch API

### Descripción
Este repositorio contiene el **frontend** de la aplicación Cukies Shop. Su función principal es consumir los endpoints del backend y mostrar la información obtenida en una interfaz web básica.

El desarrollo del frontend es **funcional pero limitado**, ya que el foco principal del proyecto estuvo en la arquitectura  backend y la comunicación mediante API REST. Se han utilizado componentes de la librería  **shadcn/ui** para estructurar la interfaz y acelerar el desarrollo.

El proyecto forma parte de una aplicación full-stack junto con un backend desarrollado en Java y Spring Boot.

### Cómo probar el proyecto
1. Clona el repositorio:
```bash
git clone https://github.com/androsrivas/e-commerce_cukies-shop_front
```

2. Entra en la carpeta:
```bash
cd e-commerce_cukies-shop_front
```

3. Instala las dependencias:
```bash
npm install
```
o
```bash
pnpm install
```

4. Inicia la aplicación en modo de desarrollo:
```bash
npm run dev
```
o
```bash
pnpm run dev
```

5. Abre el navegador en:
```bash
http://localhost:3000
```

### Funcionalidades destacadas
- Consumo de API REST del abckend
- Renderizado de datos obtenidos desde el servidor
- Uso de componentes reutilizables de shadcn/ui
- Estructura base de una tienda online

### Estructura del proyecto
- `src/` - Código fuente de la app React
- `public/` - Archivos estáticos
- `package.json` - Dependencias y scripts
- `vite.config.js` - Configruación de Vite

### Estado del proyecto
Frontend funcional en estado inicial. El proyecto prioriza la integración con el backend y sirve como base para futuras mejoras en al interfaz y experiencia de usuario.
