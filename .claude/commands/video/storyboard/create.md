---
description: 💡💡 Create a storyboard for video content
argument-hint: [script-file-or-prompt]
---

Create video storyboards with START/END frame pairs for Nano Banana Flash to Veo 3.1 pipeline.

## Your Brief

<args>$ARGUMENTS</args>

## Instructions

1. **Activate skills**:
   - Load `video-production` skill with `references/storyboard-format.md`, `references/video-art-directions.md` and `references/quality-review-workflow.md`
   - Load `creativity` skill for style templates, color palettes, visual trends
   - Load `assets-organizing` skill for output path conventions
2. **Parse input**: Script file path OR text prompt describing video concept
3. **Determine platform**: YouTube (16:9), TikTok/Reels (9:16), or Square (1:1)

## Workflow

### Step 1: Analyze Input
- If script file: Extract scenes, timing, visual descriptions
- If prompt: Generate 4-scene structure (Hook → Problem → Solution → CTA)

### Step 2: Generate Storyboard
For each scene, create:
- **Start Frame**: Imagen prompt with style tags + validation criteria
- **End Frame**: Imagen prompt ensuring continuity + validation criteria
- **Motion**: Veo directive (static, dolly, pan)
- **Audio**: Voiceover text, music cue, SFX timestamps
- **Duration**: 2-3 seconds per scene

### Step 3: Generate Frames
Use `ai-multimodal` skill (referenced `image-generation.md`) to generate START and END frame images with Nano Banana Flash.
If there are referenced images in the brief, use `Multi-Image Composition`.
Make sure the output frames do not contain any hex color codes.

### Step 4: Review Frames
Use `ai-multimodal` vision skill to analyze the generated frames and validate each frame pair before proceeding.
**DO NOT** use the default `Read` tool to read the frames unless `ai-multimodal` skill fails.
If there are any unacceptable issues: use `ai-multimodal` skill to modify or re-generate and re-check.

**Unacceptable issues:**
- Typo errors
- Hex color codes in the frames
- Duplicate text
- Blurry text
- Inconsistent style
- Meaningless content
- Unintended motion
- Unintended continuity
- Unintended cropping

## Output Structure

Create directory: `assets/storyboards/{date}-{slug}/` containing:
- `storyboard.md` - Full storyboard document
- `storyboard.json` - Machine-readable scene data
- `scene-{N}-1-start.png` - Start frame images
- `scene-{N}-2-end.png` - End frame images

## Output Format (`storyboard.md`)

```markdown
---
title: "{working title}"
slug: {kebab-case-topic}
type: {type}
platform: {platform}
aspect_ratio: {16:9|9:16|1:1}
target_length: "{e.g. 45s | 8-12 min}"
audience: "{who}"
goal: "{desired outcome}"
cta: "{cta}"
art_direction: "{selected style from video-art-directions}"
script: "{script file path or prompt}"
---

# Storyboard: {Title}

**Generated:** {date} | **Aspect:** {ratio} | **Duration:** {total}s

---

## Script
{script overview}
{script file path}

### Core Promise
{one sentence}

### Key Points
- {point}
- {point}
- {point}

### Angle
{what makes this different}

---

## Creative Direction

### Art Direction: {style name}
**Core Keywords:** {keywords from reference}
**Color Palette:** {hex codes + names}
**Signature Effects:** {effects from reference}

### Visual Style
{2-3 sentences describing the overall visual approach}

### Audio Style
**Music:** {genre, mood, BPM, instruments}
**Voiceover:** {style, tone, pacing}
**SFX:** {overall approach to sound design}

---

## Scene {N}: {Name}

| Property | Value |
|----------|-------|
| Timing | {start}-{end} |
| Duration | {N}s |
| Shot | {wide/medium/close-up} |
| Motion | {veo directive} |

### Start Frame
**Prompt:** {imagen prompt with style tags}
![Start](./scene-{N}-1-start.png)

### End Frame
**Prompt:** {imagen prompt with style tags}
![End](./scene-{N}-2-end.png)

### Video Prompts (Veo 3.1):
\`\`\`
[Start state → End state] [Motion description]
[Camera movement: pan/tilt/dolly/crane/tracking]
[Cinematography style from art direction]
[Scene transitions: cut/fade/dissolve]
\`\`\`

### Audio
- **VO:** "{voiceover text}"
- **Music:** {mood, bpm}
- **SFX:** {timestamp: sound}

#### Music Prompt (Lyria)
```
{Complete Lyria prompt: genre, mood, BPM, instruments, intensity curve}
```

### Review Notes
{validation criteria, continuity checks}

---
```

## Example Usage

```bash
# From script file
/video:storyboard:create scripts/product-demo.md

# From prompt
/video:storyboard:create "30-second TikTok ad for fitness app showing before/after transformation"
```
