# Dembrandt: Website Design Token Extraction

Command-line tool for extracting design systems from live websites into design tokens.

## Installation

```bash
npm install -g dembrandt
# Or use without installing:
npx dembrandt <url>
```

Requires Node.js 18+

## Basic Usage

```bash
# Basic extraction (terminal display)
dembrandt example.com

# Save JSON output
dembrandt example.com --save-output

# W3C Design Tokens format (Style Dictionary compatible)
dembrandt example.com --dtcg --save-output
```

## Extraction Options

| Flag | Description |
|------|-------------|
| `--save-output` | Save JSON to `output/<domain>/TIMESTAMP.json` |
| `--dtcg` | Export W3C Design Tokens format (`.tokens.json`) |
| `--dark-mode` | Extract dark mode color variant |
| `--mobile` | Mobile viewport (390x844) for responsive analysis |
| `--slow` | 3x longer timeouts for JS-heavy sites |
| `--browser=firefox` | Firefox for Cloudflare-protected sites |

## What Gets Extracted

- Colors (semantic, palette, CSS variables)
- Typography (fonts, sizes, weights, sources)
- Spacing (margin/padding scales)
- Borders (radius, widths, styles)
- Shadows
- Components (buttons, badges, inputs, links)
- Breakpoints
- Icons & frameworks

## Example Workflows

### Competitive Analysis
```bash
dembrandt competitor.com --save-output --dtcg
dembrandt competitor2.com --save-output --dtcg
# Compare output JSON files
```

### Dark Mode Design System
```bash
dembrandt brand.com --save-output
dembrandt brand.com --dark-mode --save-output
```

### Mobile-First Analysis
```bash
dembrandt responsive-site.com --mobile --save-output
```

## Troubleshooting

**Bot detection / timeouts**: Use Firefox browser
```bash
dembrandt protected-site.com --browser=firefox
```

**JavaScript-heavy SPAs**: Use slow mode
```bash
dembrandt spa-site.com --slow
```

## Integration

After extraction, use tokens with:
- `asset-generation.md` for design-aligned visual assets
- `extraction-output-templates.md` for documentation formats
