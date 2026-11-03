// url=<FIGMA_NAVIGATION_NAVIGATION_BUTTON_LIST>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Navigation/Navigation.tsx
// component=Navigation

import figma from "figma"

const children = figma.selectedInstance.getSlot("Slot") ?? figma.properties.children(["Navigation Button"])
const direction = figma.selectedInstance.getEnum("Direction", {"Row": "row", "Column": "column"})

export default {
  id: "NavigationButtonList",
  imports: ['import { Navigation } from "primitives";'],
  example: figma.code`<Navigation direction="${direction}">${children}</Navigation>`,
  metadata: { nestable: true },
}
