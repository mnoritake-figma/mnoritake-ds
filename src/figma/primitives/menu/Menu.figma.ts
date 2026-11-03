// url=<FIGMA_MENU_MENU>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Menu/Menu.tsx
// component=Menu

import figma from "figma"

const children = figma.selectedInstance.getSlot("Slot") ?? figma.properties.children([
  "Menu Header",
  "Menu Separator",
  "Menu Section",
  "Menu Item",
])

export default {
  id: "Menu",
  imports: ['import { Menu } from "primitives";'],
  example: figma.code`<Menu>${children}</Menu>`,
  metadata: { nestable: true },
}
