---
description: Generate images with enhanced prompt & project context
argument-hint: [description]
---

💡💡💡
Activate `ai-multimodal`, `brand-guidelines` skills.

## Task
<task>$ARGUMENTS</task>

## Workflow

### Step 1: Extract Brand Context (Dynamic)

Run brand injection script to get USER's brand context:

```bash
node .claude/skills/brand-guidelines/scripts/inject-brand-context.cjs --json
```

**If no brand docs exist:** Prompt user to run `/marketing:init` or create `docs/brand-guidelines.md` first.

### Step 2: AI-Enhance Prompt (Claude Code)

Claude Code enhances user's simple prompt using brand context:

**Input:** Simple prompt (e.g., "team meeting") + brand JSON

**Enhancement process:**
1. Understand user intent from simple prompt
2. Add scene/setting appropriate to the concept
3. Integrate brand colors naturally (not just append hex codes)
4. Apply style keywords as descriptive language
5. Include composition/photography terms
6. Match brand mood/tone

**Output example:**
```
Simple: "team meeting"
Enhanced: "Executive team meeting in a sophisticated dark-themed
boardroom, warm golden amber lighting casting soft glows across
polished conference table, ocean blue subtle highlights in glass
panels, professional atmosphere with calm confidence, premium
minimalist interior, cinematic depth of field, business-forward"
```

**Quality checklist:**
- [ ] Scene context added (not just keywords appended)
- [ ] Colors integrated naturally in descriptions
- [ ] Photography/composition language included
- [ ] Mood matches brand personality
- [ ] No prohibited visual elements mentioned

### Step 3: Determine Output Path

| Content Type | Output Path |
|--------------|-------------|
| Banner, header | `assets/banners/` |
| Social graphic | `assets/banners/social-media/` |
| Email header | `assets/banners/email-headers/` |
| Landing page | `assets/banners/landing-pages/` |
| Campaign asset | `assets/designs/campaigns/` |
| Infographic | `assets/infographics/` |

### Step 4: Generate Image

```bash
python .claude/skills/ai-multimodal/scripts/gemini_batch_process.py \
  --task generate \
  --prompt "<enhanced-prompt>" \
  --output "<output-path>"
```

**Models:** `imagen-4.0-fast-generate-001` (draft) | `imagen-4.0-generate-001` (standard) | `imagen-4.0-ultra-generate-001` (final)

**Aspects:** `16:9` (banner) | `1:1` (social) | `9:16` (story) | `4:3` (slides)

### Step 5: Verify

1. Analyze with ai-multimodal vision
2. Compare colors against brand palette
3. Report output path

## Examples

```bash
/design:generate "hero banner for landing page"
/design:generate "LinkedIn post graphic, 1:1 aspect"
/design:generate "email header for welcome sequence"
```

## Notes
- Brand context extracted dynamically from user's `docs/brand-guidelines.md`
- No hardcoded colors/fonts - reads from user's project
- Filename: `{purpose}-{date}.png`
