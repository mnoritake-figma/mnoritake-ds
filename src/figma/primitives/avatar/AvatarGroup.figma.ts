// url=<FIGMA_AVATARS_AVATAR_GROUP>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Avatar/Avatar.tsx
// component=AvatarGroup

import figma from "figma"

const instance = figma.selectedInstance
const spacing = instance.getEnum("Spacing", {"Overlap": "negative-200", "Spaced": "100"})
const children = instance.getSlot("Avatars") ?? instance.getSlot("Avatars2") ?? figma.properties.children(["Avatar"])

export default {
  id: "AvatarGroup",
  imports: ['import { AvatarGroup } from "primitives";'],
  example: figma.code`<AvatarGroup
      ${spacing ? figma.code`spacing="${spacing}"` : ""}
      ${instance.getBoolean("Show Overflow") ? figma.code`max={3}` : figma.code`max={Number.MAX_SAFE_INTEGER}`}
    >
      ${children}
    </AvatarGroup>`,
  metadata: { nestable: true },
}
