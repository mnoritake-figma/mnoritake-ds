// url=<FIGMA_SECTIONS_PANEL_IMAGE_CONTENT_REVERSE>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/compositions/Sections/Panels.tsx
// component=Panel

import figma from "figma"

const padding = figma.selectedInstance.getEnum("Platform", {"Desktop": "1600", "Mobile": "600"})
const gap = figma.selectedInstance.getEnum("Platform", {"Desktop": "1200", "Mobile": "600"})
const children = figma.selectedInstance.getSlot("Text Content Flow") ?? figma.properties.children(["Text Content Heading", "Text"])

export default {
  id: "PanelImageContentReverse",
  imports: [
    'import { Panel } from "compositions";',
    'import { Flex, FlexItem, Section } from "layout";',
    'import { placeholder } from "images";',
    'import { Image } from "primitives";',
  ],
  example: figma.code`<Section padding="${padding}">
      <Panel gap="${gap}" type="half">
        <FlexItem size="half">
          <Flex direction="column" gap="600">
            ${children}
          </Flex>
        </FlexItem>
        <Image
          src={placeholder}
          alt="Always use image alt"
          aspectRatio="4-3"
          size="medium"
        />
      </Panel>
    </Section>`,
  metadata: { nestable: true },
}
