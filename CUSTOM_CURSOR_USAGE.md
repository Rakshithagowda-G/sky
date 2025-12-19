# Custom Cursor Component

A fully reusable custom cursor component built with Framer Motion and Tailwind CSS.

## Features

- ✅ Two elements: small filled dot and larger outlined ring
- ✅ Smooth spring animations with Framer Motion
- ✅ Ring trails behind the dot with inertia
- ✅ Hides default browser cursor
- ✅ Blue color (#3b82f6 / Tailwind blue-500)
- ✅ Ring scales up on hover over interactive elements
- ✅ `pointer-events: none` to prevent interference
- ✅ Performance optimized (no re-renders on mouse move)
- ✅ Disabled on touch devices

## Usage

The component is already integrated into the root layout at `src/app/layout.tsx`:

```tsx
import CustomCursor from "@/components/custom-cursor";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
```

## How It Works

### Framer Motion Hooks

- **`useMotionValue`**: Tracks cursor position without causing re-renders
- **`useSpring`**: Creates smooth spring animations for the dot and ring
- **`useAnimationControls`**: Controls the ring scale animation on hover

### Performance Optimization

- Uses `useMotionValue` instead of state to avoid re-renders on every mouse move
- Event listeners are attached once in `useEffect`
- Hover detection happens on `mousemove` using `elementFromPoint`

### Interactive Elements

The cursor detects and scales up when hovering over:
- Links (`a`)
- Buttons (`button`)
- Inputs (`input`, `textarea`, `select`)
- Elements with `role="button"`
- Elements with `tabindex` (except `-1`)
- Elements with `.cursor-pointer` class

## Customization

To change the cursor color, modify the Tailwind classes in the component:

```tsx
// Change from blue-500 to another color
className="... bg-blue-500 ..."  // Dot
className="... border-blue-500 ..."  // Ring
```

To adjust the spring animation, modify the spring config:

```tsx
const springConfig = { damping: 25, stiffness: 300 };  // Dot
const ringSpring = { damping: 20, stiffness: 150 };   // Ring (slower for trailing effect)
```

To change the hover scale:

```tsx
ringControls.start({ scale: 1.5 });  // Change 1.5 to desired scale
```

## Files

- Component: `src/components/custom-cursor.tsx`
- Integrated in: `src/app/layout.tsx`

