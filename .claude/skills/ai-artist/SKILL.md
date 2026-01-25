---
name: ai-artist
description: "Prompt engineering intelligence. 20 styles, 10 platforms, 16 subjects, 16 LLM patterns, 25 quality modifiers, 15 domains. Actions: craft, write, generate, build, optimize, create prompts. Models: Midjourney, DALL-E, Stable Diffusion, Flux, Imagen, Veo, Runway, Claude, GPT, Gemini. Styles: cyberpunk, photorealistic, anime, cinematic, watercolor, minimalist, vaporwave. Topics: prompt structure, negative prompts, chain-of-thought, few-shot, weighting, parameters."
version: 2.0.0
license: MIT
---

# AI Artist - Prompt Engineering Intelligence

Comprehensive prompt engineering for image generation and LLM interactions. Contains 20+ visual styles, 10 platforms, 16 subject types, 16 LLM patterns, 25 quality modifiers, and 15 domain contexts. Searchable database with BM25 ranking.

## When to Apply

Reference these guidelines when:
- Generating images with Midjourney, DALL-E, SD, Flux
- Crafting system prompts for Claude, GPT, Gemini
- Writing prompts for video generation (Veo, Runway)
- Optimizing existing prompts for better results
- Building domain-specific prompts (marketing, gaming, etc.)

## Quick Reference

### Image Prompt Structure
```
[Subject] + [Style] + [Lighting] + [Composition] + [Quality] + [Platform Params]
```

### LLM Prompt Structure
```
[Role] + [Context] + [Task] + [Format] + [Constraints] + [Examples]
```

---

## Prerequisites

Check if Python is installed:

```bash
python3 --version || python --version
```

---

## How to Use This Skill

When user requests prompt engineering work (craft, write, generate, build, optimize prompts), follow this workflow:

### Step 1: Analyze User Requirements

Extract key information from user request:
- **Output type**: Image, LLM response, video
- **Target platform**: Midjourney, DALL-E, SD, Flux, Claude, GPT
- **Subject**: Portrait, product, landscape, abstract, etc.
- **Style keywords**: Cyberpunk, minimalist, cinematic, etc.
- **Domain context**: Marketing, gaming, editorial, etc.

### Step 2: Search Relevant Domains

```bash
python3 .claude/skills/ai-artist/scripts/search.py "<keywords>" --domain <domain>
```

**Available domains:**

| Domain | Use For | Example Keywords |
|--------|---------|------------------|
| `style` | Visual styles, aesthetics | cyberpunk, anime, watercolor, cinematic |
| `platform` | Platform syntax, parameters | midjourney, dall-e, stable diffusion |
| `subject` | Subject-specific tips | portrait, hands, product, landscape |
| `llm` | LLM prompt patterns | chain-of-thought, few-shot, json format |
| `quality` | Quality modifiers | 8k, photorealistic, sharp focus |
| `domain` | Domain-specific guidance | marketing, gaming, e-commerce |

### Step 3: Build Prompts (Image Generation)

Use the prompt builder for comprehensive image prompts:

```bash
python3 .claude/skills/ai-artist/scripts/search.py "<subject>" --build-prompt [-p <platform>] [-s <style>] [-c <context>]
```

**Example:**
```bash
python3 .claude/skills/ai-artist/scripts/search.py "professional woman in office" --build-prompt -p midjourney -s cinematic -c marketing
```

### Step 4: Build Prompts (LLM)

For LLM prompt patterns:

```bash
python3 .claude/skills/ai-artist/scripts/search.py "<task>" --llm-pattern [--pattern <pattern_name>]
```

**Example:**
```bash
python3 .claude/skills/ai-artist/scripts/search.py "analyze competitor pricing" --llm-pattern --pattern "chain of thought"
```

---

## Platform Quick Reference

| Platform | Key Syntax | Tips |
|----------|------------|------|
| Midjourney | `--ar 16:9 --style raw --v 6.1 --no` | Put important concepts first |
| DALL-E 3 | Natural language, mention "HD" | Be descriptive, not keyword-heavy |
| Stable Diffusion | `(word:1.3)`, negative prompt | Use quality tags (masterpiece) |
| Flux | Natural prompts, --guidance | Lower guidance = more creative |
| Claude | XML tags, extended thinking | Use prefill for format control |

---

## Common Patterns by Task

### Marketing Hero Images
```bash
python3 .claude/skills/ai-artist/scripts/search.py "SaaS product landing" --build-prompt -p midjourney -s minimalist -c marketing
```

### Product Photography
```bash
python3 .claude/skills/ai-artist/scripts/search.py "premium watch" --domain subject
python3 .claude/skills/ai-artist/scripts/search.py "product photography" --domain style
```

### Character Design
```bash
python3 .claude/skills/ai-artist/scripts/search.py "fantasy hero" --build-prompt -p midjourney -s fantasy
```

### LLM System Prompts
```bash
python3 .claude/skills/ai-artist/scripts/search.py "json output structure" --domain llm
```

---

## Anti-Patterns to Avoid

| Issue | Problem | Solution |
|-------|---------|----------|
| Vague prompts | "make it better" | Specify exactly what to change |
| Conflicting styles | "minimal cyberpunk clutter" | Choose compatible aesthetics |
| Wrong platform syntax | DALL-E with --ar params | Match syntax to platform |
| Missing negatives (SD) | Unwanted elements appear | Add negative prompt |
| Over-prompting | Redundant keywords | Keep prompts focused |

---

## References

For detailed guidance, load:

| Topic | File |
|-------|------|
| LLM patterns | `references/llm-prompting.md` |
| Image syntax | `references/image-prompting.md` |
| Gemini/Nano | `references/nano-banana.md` |
| Advanced | `references/advanced-techniques.md` |
| Domain patterns | `references/domain-patterns.md` |
