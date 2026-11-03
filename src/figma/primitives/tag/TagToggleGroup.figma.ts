// url=<FIGMA_TAGS_TAG_TOGGLE_GROUP>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Tag/Tag.tsx
// component=TagToggleGroup

import figma from "figma"

const children = figma.selectedInstance.getSlot("Slot") ?? figma.properties.children(["Tag Toggle"])

const selectedValues=figma.selectedInstance.findLayers(n=>n.type === "INSTANCE" && n.name === "Tag Toggle").flatMap(n=>{
 if(n.type !== "INSTANCE") return [];
 const props=n.executeTemplate().metadata?.props;
 return props?.selected && typeof props.value === "string" ? [props.value] : [];
});

export default {
  id: "TagToggleGroup",
  imports: [
    'import { Label, TagToggleGroup, TagToggleList } from "primitives";',
  ],
  example: figma.code`<TagToggleGroup ${figma.helpers.react.renderProp("defaultSelectedKeys", figma.helpers.react.array(selectedValues))} selectionMode="multiple">
      <Label>Label this!</Label>
      <TagToggleList>${children}</TagToggleList>
    </TagToggleGroup>`,
  metadata: { nestable: true },
}
