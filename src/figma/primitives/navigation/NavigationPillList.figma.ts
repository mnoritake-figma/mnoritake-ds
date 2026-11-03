// url=<FIGMA_NAVIGATION_NAVIGATION_PILL_LIST>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Navigation/Navigation.tsx
// component=Navigation

import figma from "figma"

const children = figma.selectedInstance.getSlot("Slot") ?? figma.selectedInstance.getSlot("Slot 2") ?? figma.properties.children(["Navigation Pill"])
const direction = figma.selectedInstance.getEnum("Direction", {"Row": "row", "Column": "column"})

export default {
  id: "NavigationPillList",
  imports: ['import { Navigation } from "primitives";'],
  example: figma.code`<Navigation direction="${direction}">${children}</Navigation>`,
  metadata: { nestable: true },
}
