// url=<FIGMA_SECTIONS_CARD_GRID_PRICING>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/layout/Section/Section.tsx
// component=Section

import figma from "figma";

const instance=figma.selectedInstance;
const padding=instance.getEnum("Platform",{"Desktop": "1200", "Mobile": "600"});
const schedule=figma.properties.children(["Navigation Pill List"]);
const cards=instance.getSlot("Card Grid") ?? figma.properties.children(["Pricing Card"]);
export default {id:"CardGridPricing",imports:['import { Flex, Section } from "layout";'],
example:figma.code`<Section padding="${padding}"><Flex container direction="column" gap="${padding}">${schedule}<Flex wrap gap="${padding}">${cards}</Flex></Flex></Section>`,metadata:{nestable:true}};
