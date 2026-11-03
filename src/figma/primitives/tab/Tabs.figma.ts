// url=<FIGMA_TABS_TABS>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Tab/Tab.tsx
// component=Tabs

import figma from "figma"

const children = figma.selectedInstance.getSlot("Slot") ?? figma.properties.children(["Tab"])

const selectedValues=figma.selectedInstance.findLayers(n=>n.type === "INSTANCE" && n.name === "Tab").flatMap(n=>{
 if(n.type !== "INSTANCE") return [];
 const props=n.executeTemplate().metadata?.props;
 return props?.selected && typeof props.value === "string" ? [props.value] : [];
});

export default {
  id: "Tabs",
  imports: ['import { TabList, TabPanel, Tabs } from "primitives";'],
  example: figma.code`<Tabs ${figma.helpers.react.renderProp("defaultSelectedKey", selectedValues[0])}>
      <TabList>${children}</TabList>
      <TabPanel id="match-each-tab">Some stuff</TabPanel>
    </Tabs>`,
  metadata: { nestable: true },
}
