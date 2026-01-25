# Extract Design Guidelines

Two extraction methods based on input type:
- **Live URLs** → `dembrandt` CLI (automated token extraction)
- **Screenshots/Images** → ai-multimodal skill (visual analysis)

## Method 1: URL Extraction (Dembrandt)

Use for live websites and competitor analysis. Extracts colors, typography, spacing, borders, shadows, components automatically.

```bash
# Basic extraction
npx dembrandt example.com --save-output

# W3C Design Tokens format
npx dembrandt example.com --dtcg --save-output

# Dark mode variant
npx dembrandt example.com --dark-mode --save-output

# Mobile viewport
npx dembrandt example.com --mobile --save-output
```

Output: `output/<domain>/TIMESTAMP.json` with design tokens.

See `dembrandt-usage.md` for full CLI options and troubleshooting.

## Method 2: Screenshot/Image Analysis

Use for static images, design mockups, gallery inspiration (Dribbble, Awwwards, Mobbin).

```bash
python scripts/gemini_batch_process.py \
  --files docs/inspiration/reference.png \
  --task analyze \
  --prompt "[see extraction-prompts.md]" \
  --output docs/design-guidelines/extracted-design.md \
  --model gemini-2.5-flash
```

### Multi-Screen / Video Analysis
```bash
# Multiple screens
python scripts/gemini_batch_process.py \
  --files home.png about.png contact.png \
  --prompt "[see extraction-prompts.md]" \
  --output docs/design-guidelines/complete-system.md

# Motion/interaction video
python scripts/gemini_batch_process.py \
  --files interaction-demo.mp4 \
  --prompt "[see extraction-prompts.md for motion]" \
  --output docs/design-guidelines/motion-system.md
```

## Use Cases

| Input Type | Method | Best For |
|------------|--------|----------|
| Live URL | dembrandt | Competitor analysis, brand audits |
| Screenshot | ai-multimodal | Dribbble/Awwwards inspiration |
| Video | ai-multimodal | Motion/animation extraction |
| Design file | ai-multimodal | Figma exports, mockups |

## References

- `dembrandt-usage.md` - Full dembrandt CLI documentation
- `extraction-prompts.md` - AI analysis prompt templates
- `extraction-best-practices.md` - Capture quality tips
- `extraction-output-templates.md` - Documentation formats

## Integration

After extraction, use with `asset-generation.md` for design-aligned visual assets.
