// url=<FIGMA_ACCORDION_ACCORDION>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Accordion/Accordion.tsx
// component=Accordion

import figma from "figma";
const children = figma.selectedInstance.getSlot("Items") ?? figma.properties.children(["Accordion Item"]);

export default {
  id: "Accordion",
  imports: ['import { Accordion } from "primitives";'],
  example: figma.code`<Accordion>${children}</Accordion>`,
  metadata: { nestable: true },
};
