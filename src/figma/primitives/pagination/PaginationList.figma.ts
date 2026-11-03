// url=<FIGMA_PAGINATION_PAGINATION_LIST>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Pagination/Pagination.tsx
// component=PaginationList

import figma from "figma"

const children = figma.selectedInstance.getSlot("Slot") ?? figma.properties.children([
  "Pagination Page",
  "Pagination Gap",
])

export default {
  id: "PaginationList",
  imports: ['import { PaginationList } from "primitives";'],
  example: figma.code`<PaginationList>${children}</PaginationList>`,
  metadata: { nestable: true },
}
