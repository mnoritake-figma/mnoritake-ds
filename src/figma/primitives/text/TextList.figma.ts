// url=<FIGMA_TEXT_TEXT_LIST>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Text/Text.tsx
// component=TextList

import figma from "figma"

const children = figma.selectedInstance.getSlot("Slot") ?? figma.properties.children(["Text List Item"])
const title = figma.selectedInstance.getBoolean("Has Title", {
  true: figma.properties.children(["Text Strong"]),
  false: undefined,
})
const density = figma.selectedInstance.getEnum("Density", {"Default": "default", "Tight": "tight"})

export default {
  id: "TextList",
  imports: ['import { TextList } from "primitives";'],
  example: figma.code`<TextList${figma.helpers.react.renderProp(
    "title",
    title,
  )} density="${density}">${children}</TextList>`,
  metadata: { nestable: true },
}
