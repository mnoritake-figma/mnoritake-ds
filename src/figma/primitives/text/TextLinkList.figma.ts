// url=<FIGMA_TEXT_TEXT_LINK_LIST>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Text/Text.tsx
// component=TextLinkList

import figma from "figma"

const children = figma.selectedInstance.getSlot("Slot") ?? figma.properties.children(["Text Link List Item"])
const title = figma.selectedInstance.getBoolean("Has Title", {
  true: figma.properties.children(["Text Strong"]),
  false: undefined,
})
const density = figma.selectedInstance.getEnum("Density", {"Default": "default", "Tight": "tight"})

export default {
  id: "TextLinkList",
  imports: ['import { TextLinkList } from "primitives";'],
  example: figma.code`<TextLinkList${figma.helpers.react.renderProp(
    "title",
    title,
  )} density="${density}">${children}</TextLinkList>`,
  metadata: { nestable: true },
}
