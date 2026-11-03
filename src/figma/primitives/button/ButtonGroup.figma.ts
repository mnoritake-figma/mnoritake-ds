// url=<FIGMA_BUTTONS_BUTTON_GROUP>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Button/Button.tsx
// component=ButtonGroup

import figma from "figma";
const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const align = instance.getEnum("Align", {"Justify": "justify", "Start": "start", "End": "end", "Center": "center", "Stack": "stack"});
const buttons = instance.findLayers(n=>n.type === "INSTANCE" && n.name === "Button");
const first=buttons[0]; const last=buttons[1];
const start=instance.getBoolean("Button Start") && first?.type === "INSTANCE" ? first.executeTemplate().example : undefined;
const end=instance.getBoolean("Button End") && last?.type === "INSTANCE" ? last.executeTemplate().example : undefined;
const children=figma.code`${start}${end}`;

export default {
  id: "ButtonGroup",
  imports: ['import { ButtonGroup } from "primitives";'],
  example: figma.code`<ButtonGroup
      ${rp("align", align)}
    >
      ${children}
    </ButtonGroup>`,
  metadata: { nestable: true },
};
