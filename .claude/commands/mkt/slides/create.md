---
description: Create strategic presentation slides with Chart.js and design tokens
argument-hint: [presentation goal and context]
---

Create persuasive HTML slides using design tokens, Chart.js, and the slide knowledge database.

## Task
<task>$ARGUMENTS</task>

## Critical Requirements

**ALL slides MUST:**
1. Embed design tokens inline (for file:// compatibility):
   ```bash
   node .claude/skills/design-system/scripts/embed-tokens.cjs --minimal
   ```
2. Use CSS variables exclusively: `var(--color-primary)`, `var(--slide-bg)`, etc.
3. Use Chart.js for all charts (not CSS-only bars)
4. Include navigation (keyboard arrows, click, progress bar)
5. Center align content properly
6. Focus on conversion/persuasion - you're SELLING, not just presenting

## Knowledge Database

### Search Scripts
```bash
# Basic search (auto-detect domain)
python3 .claude/skills/design-system/scripts/search-slides.py "investor pitch"

# Domain-specific search
python3 .claude/skills/design-system/scripts/search-slides.py "problem agitation" -d copy

# Contextual search (Premium System - recommended)
python3 .claude/skills/design-system/scripts/search-slides.py "problem slide" --context --position 2 --total 9
python3 .claude/skills/design-system/scripts/search-slides.py "cta" --context --position 9 --prev-emotion frustration
```

### Decision System CSVs
| File | Purpose |
|------|---------|
| `slide-strategies.csv` | 15 deck structures + emotion arcs |
| `slide-layouts.csv` | 25 layouts + component variants + animations |
| `slide-layout-logic.csv` | Goal → Layout + break_pattern flag |
| `slide-typography.csv` | Content type → Typography scale |
| `slide-color-logic.csv` | Emotion → Color treatment |
| `slide-backgrounds.csv` | Slide type → Image category |
| `slide-copy.csv` | 25 copywriting formulas |
| `slide-charts.csv` | 25 chart types |

## Design Tokens

**Get tokens (run first):**
```bash
node .claude/skills/design-system/scripts/embed-tokens.cjs --minimal
```

**Embed in HTML `<head>`:**
```html
<style>
  /* Paste output from embed-tokens.cjs here */
  :root { ... }
</style>
```

**Use variables (never hardcode colors):**
```css
background: var(--color-background);
color: var(--color-primary);
color: var(--color-secondary);
color: var(--color-accent);
background: var(--primitive-gradient-primary);
font-family: var(--typography-font-heading);
font-family: var(--typography-font-body);    /* Inter */
```

## Premium Workflow

### 1. Analyze Goal
- Presentation purpose (pitch, demo, report)
- Target audience
- Desired outcome (funding, sale, buy-in)
- Number of slides

### 2. Search Strategy + Get Emotion Arc
```bash
python3 .claude/skills/design-system/scripts/search-slides.py "[goal]" -d strategy
# Returns emotion_arc and sparkline_beats columns
```

### 3. For Each Slide: Contextual Search
```bash
python3 .claude/skills/design-system/scripts/search-slides.py "[slide goal]" \
  --context --position [N] --total [TOTAL] --prev-emotion [PREV]
# Returns: layout, typography, color, animation, background recommendations
```

### 4. Apply Pattern Breaking (Duarte Sparkline)
- System calculates `break_pattern` at 1/3 and 2/3 positions
- Alternate "What Is" (frustration) ↔ "What Could Be" (hope)
- Full-bleed slides reserved for high-emotion beats

### 5. Fetch Background Images (when recommended)
```bash
python3 .claude/skills/design-system/scripts/fetch-background.py hero --css
# Returns Pexels/Unsplash URL + brand-compliant overlay CSS
```

### 6. Apply Copy Formulas
- **PAS**: Problem → Agitate → Solution (problem slides)
- **AIDA**: Attention → Interest → Desire → Action (CTA)
- **FAB**: Feature → Advantage → Benefit (features)
- **Cost of Inaction**: Quantify the loss of not acting

### 7. Validate Token Compliance
```bash
python3 .claude/skills/design-system/scripts/slide-token-validator.py output.html
```

## HTML Generation

### Navigation System

Include this navigation system:
```html
<!-- Progress Bar -->
<div class="progress-bar" id="progressBar"></div>

<!-- Navigation Controls -->
<div class="nav-controls">
    <button class="nav-btn" onclick="prevSlide()">←</button>
    <span class="slide-counter"><span id="current">1</span> / <span id="total">9</span></span>
    <button class="nav-btn" onclick="nextSlide()">→</button>
</div>

<script>
let current = 1;
const total = document.querySelectorAll('.slide').length;

function showSlide(n) {
    if (n < 1) n = 1;
    if (n > total) n = total;
    current = n;
    document.querySelectorAll('.slide').forEach((s, i) => {
        s.classList.toggle('active', i === n - 1);
    });
    document.getElementById('current').textContent = n;
    document.getElementById('progressBar').style.width = (n / total * 100) + '%';
}

function nextSlide() { showSlide(current + 1); }
function prevSlide() { showSlide(current - 1); }

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextSlide(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide(); }
});

showSlide(1);
</script>
```

### Chart.js Implementation

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>

<div class="chart-container">
    <canvas id="revenueChart"></canvas>
</div>

<script>
new Chart(document.getElementById('revenueChart'), {
    type: 'line',
    data: {
        labels: ['Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'MRR ($K)',
            data: [5, 12, 28, 45],
            borderColor: '#FF6B6B',
            backgroundColor: 'rgba(255, 107, 107, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#B8B8D0' } },
            y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#B8B8D0' } }
        }
    }
});
</script>
```

## Slide Structure (YC-Style Pitch)

| # | Slide | Copy Formula | Chart |
|---|-------|--------------|-------|
| 1 | Title | Hook + Value Prop | - |
| 2 | Problem | PAS - Problem | - |
| 3 | Cost | PAS - Agitate | Stats |
| 4 | Solution | FAB | - |
| 5 | Traction | Proof Stack | Line/Bar |
| 6 | Social Proof | Testimonial | - |
| 7 | Pricing | Value Stack | - |
| 8 | Team | Credibility | - |
| 9 | The Ask | CTA + Urgency | - |

## CSS Requirements

```css
/* Slide base - center aligned */
.slide {
    position: absolute;
    width: 100%; height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;
    background: var(--color-background);
}

.slide.active {
    opacity: 1;
    visibility: visible;
}

/* Typography - use tokens */
h1, h2 {
    font-family: var(--typography-font-heading);
    font-weight: var(--primitive-fontWeight-bold);
}

.slide-title {
    font-size: clamp(48px, 8vw, 96px);
    background: var(--primitive-gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

### Animation Classes

Import animations: `<link rel="stylesheet" href="../../css/slide-animations.css">`

| Class | Use For |
|-------|---------|
| `animate-fade-up` | Text content entrance |
| `animate-count` | Metric numbers |
| `animate-scale` | Cards, images |
| `animate-stagger` | Grid children (auto-delays) |
| `animate-chart` | Chart.js containers |
| `animate-pulse` | CTA buttons |
| `card-lift` | Hover effect on cards |

### Background Images

For slides with `use_bg_image: true` in layout-logic:

```html
<div class="slide slide-with-bg" style="background-image: url('https://images.pexels.com/...')">
    <div class="overlay" style="background: linear-gradient(135deg, var(--color-background)E6, var(--color-background)B3)"></div>
    <div class="content">
        <!-- Slide content -->
    </div>
</div>
```

## Reference Implementation

See working example:
```
assets/designs/slides/claudekit-pitch-251223.html
```

## Output

Save to: `assets/designs/slides/{slug}-{date}.html`

## Examples

```bash
# Investor pitch
/design:slides "10-slide seed funding pitch for ClaudeKit Marketing"

# Sales deck
/design:slides "B2B sales deck with ROI focus and traction metrics"

# Product demo
/design:slides "5-slide product walkthrough with feature highlights"
```
