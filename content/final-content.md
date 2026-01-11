# GoAds Final Website Content

> **Status:** APPROVED - Ready for Implementation
> **Date:** 2026-01-11
> **Version:** 2.0 (Expanded Structure)

---

## Homepage Structure (18 Sections)

| #   | Section               | Component                    | Background      | Content Type                  |
| --- | --------------------- | ---------------------------- | --------------- | ----------------------------- |
| 1   | Header                | header.tsx                   | transparent     | Navigation                    |
| 2   | Hero                  | hero-section.tsx             | BLACK           | Hero + CTAs                   |
| --- | --- WHITE BLOCK 1 --- | ---------------------------- | --------------- | ----------------------------- |
| 3   | Feature Cards         | model-showcase-section.tsx   | WHITE           | Agency Ad Accounts (5 cards)  |
| 4   | Partner Logos         | logo-partners-section.tsx    | WHITE           | Payment methods marquee       |
| 5   | Benefits Bento        | bento-section.tsx            | WHITE           | 10 benefit cards              |
| 6   | Use Cases             | use-cases-section.tsx        | WHITE           | 3 use cases                   |
| 7   | Pricing               | pricing-section.tsx          | WHITE           | 4 pricing tiers               |
| --- | --- GREY BREAK 1 ---  | ---------------------------- | --------------- | ----------------------------- |
| 8   | How It Works          | app-showcase-section.tsx     | GREY            | 3-step purchase process       |
| --- | --- WHITE BLOCK 2 --- | ---------------------------- | --------------- | ----------------------------- |
| 9   | Milestones Banner     | big-picture-section.tsx      | WHITE           | Achievement gallery carousel  |
| 10  | Testimonials Bento    | NEW bento-style              | WHITE           | 8 testimonial cards           |
| 11  | Global Presence       | investor-showcase-section    | WHITE           | World map + stats             |
| --- | --- GREY BREAK 2 ---  | ---------------------------- | --------------- | ----------------------------- |
| 12  | Simple Process        | app-showcase-section.tsx     | GREY            | Order → Delivery → Scale      |
| --- | --- WHITE BLOCK 3 --- | ---------------------------- | --------------- | ----------------------------- |
| 13  | Guarantee             | enterprise-advantage-section | WHITE           | 4 guarantee cards             |
| 14  | Meta Assets Products  | NEW bento-style              | WHITE           | BMs, Profiles, Pages          |
| 15  | Compare vs Others     | NEW table section            | WHITE           | GoAds vs Competitors          |
| 16  | FAQ                   | enterprise-faq-section.tsx   | WHITE           | 7 questions                   |
| --- | --- DARK FOOTER ---   | ---------------------------- | --------------- | ----------------------------- |
| 17  | CTA Banner            | cta-banner-section.tsx       | DARK            | Final conversion              |
| 18  | Footer                | footer.tsx                   | DARK            | Links + contact               |

### Background Color Rhythm

```
BLACK  → Hero (dramatic entrance)
WHITE  → Core content (Feature Cards → Pricing)
GREY   → Visual break #1 (How It Works)
WHITE  → Social proof (Milestones → Testimonials → Global)
GREY   → Visual break #2 (Simple Process)
WHITE  → Trust building (Guarantee → Products → Compare → FAQ)
DARK   → Conversion (CTA Banner → Footer)
```

---

## Section Classification

### 100% FROM KREA (Just Change Content)

These sections use Krea components exactly as-is, only replacing text/images:

| Section        | Krea Component             | What Changes              |
| -------------- | -------------------------- | ------------------------- |
| Header         | header.tsx                 | Logo, menu items, CTA     |
| Hero           | hero-section.tsx           | Headline, subheadline     |
| Feature Cards  | model-showcase-section.tsx | Card titles, descriptions |
| Partner Logos  | logo-partners-section.tsx  | Logo images               |
| Benefits Bento | bento-section.tsx          | Benefit titles, text      |
| Use Cases      | use-cases-section.tsx      | Use case content          |
| Pricing        | pricing-section.tsx        | Prices, features          |
| How It Works   | app-showcase-section.tsx   | Title, description        |
| Simple Process | app-showcase-section.tsx   | Title, description        |
| Milestones     | big-picture-section.tsx    | Slides content            |
| FAQ            | enterprise-faq-section.tsx | Questions, answers        |
| CTA Banner     | cta-banner-section.tsx     | Headline, CTA text        |
| Footer         | footer.tsx                 | Links, contact info       |

**Total: 13 sections**

### REPURPOSED FROM KREA (Different Purpose, Same Design)

These sections use Krea components but for a different purpose:

| GoAds Section   | Original Krea Section        | Original Purpose        | GoAds Purpose            |
| --------------- | ---------------------------- | ----------------------- | ------------------------ |
| Global Presence | investor-showcase-section    | Investor logos + hiring | World map + global stats |
| Guarantee       | enterprise-advantage-section | Enterprise features     | 4 guarantee cards        |

**Total: 2 sections**

### KREA-INSPIRED (New Components Following Krea Design System)

These are NEW components built using Krea's design tokens, typography, spacing:

| GoAds Section        | Inspired By       | What's New                       |
| -------------------- | ----------------- | -------------------------------- |
| Testimonials Bento   | bento-section.tsx | New layout for testimonial cards |
| Meta Assets Products | bento-section.tsx | Product cards with prices        |
| Compare vs Others    | (none)            | Entirely new comparison table    |

**Total: 3 sections**

### KREA SECTIONS NOT USED (Kept for Future Pages)

These Krea sections exist in codebase but not used on GoAds homepage:

| Krea Section              | Original Purpose                      | Why Not Used                | Future Use         |
| ------------------------- | ------------------------------------- | --------------------------- | ------------------ |
| ModelShowcaseSection      | AI model showcase slider              | Krea-specific AI content    | Keep for reference |
| EnterpriseShowcaseSection | Enterprise dashboard mockup           | Enterprise-specific         | Enterprise page    |
| EnterpriseContactSection  | Enterprise contact form               | Enterprise-specific         | Enterprise page    |
| FeatureCards              | Feature cards (different from slider) | Using ModelShowcase instead | Features page      |

**Total: 4 sections (not deleted, kept in codebase)**

---

## Summary

```
┌──────────────────────────────────────────────────────────────┐
│  SECTION SOURCES                                             │
├──────────────────────────────────────────────────────────────┤
│  100% Krea (content swap only)     │  13 sections  │  72%   │
│  Repurposed Krea (different use)   │   2 sections  │  11%   │
│  Krea-Inspired (new components)    │   3 sections  │  17%   │
├──────────────────────────────────────────────────────────────┤
│  TOTAL GoAds Sections              │  18 sections  │ 100%   │
├──────────────────────────────────────────────────────────────┤
│  Unused Krea (kept for future)     │   4 sections  │   -    │
└──────────────────────────────────────────────────────────────┘
```

---

## 1. Hero Section ✅ APPROVED (2026-01-11)

> **Brainstorm:** `./brainstorming/2026-01-11-hero-brainstorm-summary.md`

### Trust Badge

"7-Day Warranty on Every Product"

### Main Headline

"Stop Losing Accounts. Start Scaling."

### Subheadline

"Meta assets that stay alive — 7-day warranty, real support, and the stability your campaigns need."

### Primary CTA

"Get Started"

### Secondary CTA

"See Pricing"

### Visual

abstract gradient animation

---

## 2. Header Navigation

### Logo

GoAds (need logo file)

### Menu Structure

**Agency Ad Accounts** (dropdown)

- Meta Agency Ad Accounts → "Get a Meta Agency Ad Account"
- Google Agency Ad Accounts → "Get a Google Agency Ad Account"
- TikTok Agency Ad Accounts → "Get a TikTok Agency Ad Account"
- Bing Agency Ad Accounts → "Get a Bing Agency Ad Account"

**Assets** (dropdown)

- Facebook Accounts → "Aged, verified profiles designed for stability, trust, and ad scalability."
- Business Managers → "Clean BMs with proper structure for teams, billing, and permissions."
- Facebook Pages → "Niche-aligned pages to boost credibility, feedback, and ad delivery."

**Services** (dropdown)

- Feedback Score Boost → "Diagnose, recover, and grow page feedback with compliant improvement."
- Account Health Assessment → "Full compliance audit + action plan to prevent flags and unlock spend."
- Unban Service → "Ethical recovery for restricted BMs, profiles, and pages with clear timelines."

**Resources** (dropdown)

- Partners → "Exclusive tools and providers we trust for scale."
- Our Team → "Performance marketers, engineers, and support—available 24/7 worldwide."
- Reviews → "Real outcomes from active advertisers."
- Blog → "Tested playbooks, platform updates, and step-by-step scaling guides."

**Affiliates** (link)

**Get Started** (CTA button)

---

## 3. Feature Cards Section (Agency Ad Accounts)

### Card 1: Meta Agency Ad Accounts

**Title:** Meta Agency Ad Accounts
**Description:** Pre-established agency accounts with higher trust scores, faster approvals, and better stability. Run your campaigns on infrastructure that's already proven.
**CTA:** Get Started

### Card 2: Google Agency Ad Accounts

**Title:** Google Agency Ad Accounts
**Description:** Whitelisted Google ad accounts for Search, Display, YouTube, and Shopping. Higher approval rates, wider reach, better conversions.
**CTA:** Get Started

### Card 3: TikTok Agency Ad Accounts

**Title:** TikTok Agency Ad Accounts
**Description:** Tap into TikTok's explosive reach with agency accounts designed for scale. Pre-established trust, faster approvals, better performance.
**CTA:** Get Started

### Card 4: Business Managers

**Title:** Business Managers
**Description:** Verified BMs from BM1 to BM5 with varying DSL limits. Choose the trust level your operation needs — from starter to enterprise-grade.
**CTA:** Get Started

### Card 5: Meta Assets

**Title:** Profiles & Pages
**Description:** Aged, verified profiles and pages built for stability. The foundation that keeps your ad accounts running.
**CTA:** Get Started

---

## 4. Partner/Logo Section

### Section Header

**Title:** The Industry's Best Agency Ad Account Provider
**Subtitle:** Professional Meta infrastructure

### Logos to Display

- Payment methods: Stripe, PayPal, Visa, Mastercard, Wise, Bitcoin
- (Add partner logos when available)

---

## 5. Benefits/Bento Section

### Section Header

**Title:** Why Agencies Choose Us
**Subtitle:** The reliability your ad operation deserves

### Benefits Grid (10 items)

| #   | Title              | Description                                         |
| --- | ------------------ | --------------------------------------------------- |
| 1   | 7-Day Warranty     | Something wrong? 1:1 replacement, no questions.     |
| 2   | Fast Support       | Real humans, fast responses, 24/7 availability.     |
| 3   | Stable Assets      | Pre-verified, aged, and tested before delivery.     |
| 4   | Structured Process | Clear steps from purchase to launch.                |
| 5   | Agency-Tested      | The same assets agencies trust for their clients.   |
| 6   | Verified BMs       | Real documentation, proper structure, actual trust. |
| 7   | Scaling Ready      | Infrastructure built for growth, not just launch.   |
| 8   | Professional Team  | Small team, big accountability.                     |
| 9   | Global Service     | Serving advertisers worldwide.                      |
| 10  | Peace of Mind      | Focus on your ads. We handle the infrastructure.    |

---

## 6. Meta Assets Products Section (NEW)

### Section Header

**Title:** Professional Meta Assets
**Subtitle:** The foundation your ad accounts need

### Product Cards (Bento Grid)

| Product               | Price Range | Description                                  | Features                                     |
| --------------------- | ----------- | -------------------------------------------- | -------------------------------------------- |
| Business Manager BM1  | $50-80      | Verified with running campaign capability    | Create Pixel, Running Campaign, Basic DSL    |
| Business Manager BM5  | $280-350    | Enterprise-grade with $250+ DSL              | Unlimited Capacity, High Trust, Proven Track |
| Premium Aged Profiles | $35-50      | Reinstated, aged accounts for admin roles    | 2FA Enabled, 3+ Years Old, Clean History     |
| Advertising Pages     | $25-40      | Niche-optimized pages for better ad delivery | Good Feedback, Aged, Niche-Aligned           |
| Pixel Bank BM         | $50-80      | Dedicated BM for pixel management            | Unlimited Pixels, Event Tracking, API Access |
| Profile + Page Combo  | $55-75      | Complete setup for new ad account            | Admin Profile + Optimized Page               |

### CTA

"View All Products"

---

## 7. Milestones Banner Section (NEW)

### Section Header

**Title:** Built for Scale. Proven by Numbers.
**Subtitle:** Growing alongside our clients

### Achievement Slides (Carousel)

| Slide | Metric         | Value  | Description                              |
| ----- | -------------- | ------ | ---------------------------------------- |
| 1     | Active Clients | 500+   | Advertisers trust us with infrastructure |
| 2     | Assets Sold    | 5,000+ | BMs, Profiles, Pages delivered           |
| 3     | Revenue Growth | 10x    | From $3k to $32k monthly in 12 months    |
| 4     | Countries      | 50+    | Serving advertisers worldwide            |
| 5     | Support Speed  | <2h    | Average response time                    |
| 6     | Warranty Rate  | 95%+   | Claims honored within policy             |

### Visual Style

- Large number display with metric label
- Background gradient or pattern
- Navigation arrows + progress bar

---

## 8. Guarantee Section (NEW)

### Section Header

**Title:** Our Guarantee to You
**Subtitle:** Professional standards, no compromises

### Guarantee Cards (4-column grid)

| Card Title         | Features                                      |
| ------------------ | --------------------------------------------- |
| 7-Day Replacement  | • 1:1 replacement for issues                  |
|                    | • No questions asked within policy            |
|                    | • Fast turnaround                             |
|                    | • Clear eligibility criteria                  |
| Quality Assurance  | • Pre-tested before delivery                  |
|                    | • Verified documentation                      |
|                    | • Aged and stable assets                      |
|                    | • Proper structure and setup                  |
| Support Promise    | • Real humans, not bots                       |
|                    | • 24/7 availability                           |
|                    | • Multi-channel (Telegram, WhatsApp, Discord) |
|                    | • Direct access to team                       |
| Professional Setup | • Clear delivery process                      |
|                    | • Setup guidance included                     |
|                    | • Best practices documentation                |
|                    | • Onboarding support                          |

---

## 9. Use Cases Section

### Section Header

**Title:** Built for How You Work

### Use Case 1: E-commerce Scaling

**Description:** From dropshipping to established brands — the Meta infrastructure you need to scale profitably. Stable accounts, verified BMs, and support that understands your urgency.

### Use Case 2: Agency Operations

**Description:** Reliable wholesale partner for your client accounts. Consistent quality, volume capacity, and the support your team needs.

### Use Case 3: Affiliate & Performance

**Description:** The infrastructure that survives aggressive campaigns. Stable assets, fast replacement, and no judgment on your vertical.

---

## 10. Pricing Section

### Section Header

**Title:** Simple, Transparent Pricing
**Subtitle:** One-time purchase, ongoing support

### Tier 1: Basic Pack

**Price:** $90 (one-time)
**Tagline:** Start advertising today
**Description:** An affordable entry-level pack for individuals or small businesses starting their Facebook ads journey.
**Includes:**

- Business Manager (Unverified)
- Asia Profile (Admin Account)
- Optimized Advertising Page
  **CTA:** View Pack

### Tier 2: Advanced Setup ⭐ Recommended

**Price:** $180 (one-time)
**Tagline:** Ready to scale
**Description:** Perfect for growing businesses ready to scale: includes verified BM, premium profiles, and aged pages for professional campaigns!
**Includes:**

- BM1 Verified (Running Campaign & Create Pixel) - $80 Value
- Premium Aged Reinstated Profiles (2x) - $80 Value
- Aged Reinstated Pages (2x) - $70 Value
  **CTA:** View Pack

### Tier 3: Premium Bulletproof Setup

**Price:** $550 (one-time)
**Badge:** Best Value
**Tagline:** Professional infrastructure
**Description:** The ultimate premium pack for agencies — BM5 verified with unlimited capacity, pixel management, and professional infrastructure!
**Includes:**

- BM5 Verified $250 DSL (Running Campaign) - $330 Value
- BM1 Verified (Pixel Bank) - $80 Value
- Premium Aged Reinstated Profiles (4x) - $200 Value
- +1 more products
  **CTA:** View Pack

### Tier 4: Elite Bulletproof Setup

**Price:** $890 (one-time)
**Badge:** Premium Choice
**Tagline:** Enterprise-grade setup
**Description:** Enterprise-grade pack with dual BM5s, premium aged profiles, and aged pages — built for large-scale operations and maximum redundancy.
**Includes:**

- BM5 Verified $250 DSL (Running Campaign) - $330 Value
- BM5 Verified $250 DSL (Pixel Bank) - $330 Value
- Premium Aged Reinstated Profiles (6x) - $300 Value
- +2 more products
  **CTA:** View Pack

---

## 8. How It Works Section (GREY BREAK #1)

> **Component:** app-showcase-section.tsx
> **Background:** bg-primary-100 (grey)

### Section Header

**Title:** Simple. Fast. Reliable.
**Subtitle:** Get started in 3 steps

### Content

A centered section with title, description, and a visual representation of the 3-step process.

### Steps (Visual Cards or Flow)

| Step | Title   | Description                                | Icon     |
| ---- | ------- | ------------------------------------------ | -------- |
| 1    | Choose  | Browse our catalog. Pick what you need.    | Shopping |
| 2    | Pay     | Secure checkout. Multiple payment options. | Card     |
| 3    | Receive | Fast delivery. Setup guidance included.    | Rocket   |

### Description Text

"No complicated onboarding. No lengthy verification. Choose your assets, complete payment, and receive delivery within 24 hours. Our team is available 24/7 to help you get started."

### Visual Style

- Grey background (`bg-primary-100`)
- Centered content with max-width
- 3 cards or icons in a row showing the steps
- CTA button at bottom

---

## 11. Testimonials Bento Section (NEW)

### Section Header

**Title:** What Our Clients Say
**Subtitle:** Real feedback from active advertisers

### Testimonials Grid (8 cards, varied sizes)

| #   | Quote                                                              | Client Type           | Rating     |
| --- | ------------------------------------------------------------------ | --------------------- | ---------- |
| 1   | "We completely moved from Proads to GoAds. Better service."        | Agency Client         | ⭐⭐⭐⭐⭐ |
| 2   | "Fast and reliable support. Haven't used anyone else since."       | E-commerce Advertiser | ⭐⭐⭐⭐⭐ |
| 3   | "Support is way better than Proads."                               | Performance Marketer  | ⭐⭐⭐⭐⭐ |
| 4   | "Very good experience with GoAds. Fast and reliable."              | Solo Advertiser       | ⭐⭐⭐⭐⭐ |
| 5   | "BM5s are rock solid. No issues in 6 months of heavy spend."       | Scaling Agency        | ⭐⭐⭐⭐⭐ |
| 6   | "Warranty claim handled in under 2 hours. Impressed."              | Dropshipper           | ⭐⭐⭐⭐⭐ |
| 7   | "Finally, a provider that operates like a real business."          | Media Buyer           | ⭐⭐⭐⭐⭐ |
| 8   | "Switched from 3 different vendors. GoAds is the one that sticks." | E-com Brand Owner     | ⭐⭐⭐⭐⭐ |

### Layout

- Large card (spans 2 cols): Testimonial 1
- Medium cards (1 col): Testimonials 2-4
- Large card (spans 2 cols): Testimonial 5
- Medium cards: Testimonials 6-8

---

## 12. Compare vs Others Section (NEW)

### Section Header

**Title:** Why GoAds?
**Subtitle:** See the difference

### Comparison Table

| Feature                | GoAds    | MMO Vendors | Other Agencies |
| ---------------------- | -------- | ----------- | -------------- |
| 7-Day Warranty         | ✓        | ✗           | Sometimes      |
| 24/7 Support           | ✓        | ✗           | ✓              |
| Response Time          | <2 hours | 12-48 hours | 4-8 hours      |
| Pre-Tested Assets      | ✓        | ✗           | Sometimes      |
| BM1 to BM5 Options     | ✓        | BM1 only    | Limited        |
| Direct Communication   | ✓        | Ticket Only | ✓              |
| Volume Discounts       | ✓        | ✗           | ✓              |
| Clear Pricing          | ✓        | Hidden fees | ✓              |
| Setup Guidance         | ✓        | ✗           | Sometimes      |
| Professional Invoicing | ✓        | ✗           | ✓              |

---

## 13. Global Presence Section (NEW)

### Section Header

**Title:** Serving Advertisers Worldwide
**Subtitle:** From Vietnam to the world

### Stats Display

| Stat              | Value | Label                        |
| ----------------- | ----- | ---------------------------- |
| Countries Served  | 50+   | Global reach                 |
| Active Clients    | 500+  | Trusted by advertisers       |
| Support Languages | 3     | English, Vietnamese, Chinese |
| Operating Hours   | 24/7  | Always available             |

### Visual

- World map with highlighted regions (Americas, Europe, Asia-Pacific)
- Dots/markers for client concentration areas

### CTA Buttons

"Get Started" | "Contact Sales"

---

## 12. Simple Process Section (GREY BREAK #2)

> **Component:** app-showcase-section.tsx
> **Background:** bg-primary-100 (grey)

### Section Header

**Title:** Focus on Your Ads. We Handle the Rest.
**Subtitle:** Your infrastructure partner

### Content

A centered section emphasizing the peace-of-mind aspect of using GoAds.

### Value Proposition Cards (3 columns)

| Card | Title         | Description                                      |
| ---- | ------------- | ------------------------------------------------ |
| 1    | You Advertise | Run campaigns, test creatives, scale what works. |
| 2    | We Supply     | Stable BMs, verified profiles, agency accounts.  |
| 3    | You Scale     | Hit your goals without infrastructure headaches. |

### Description Text

"Stop worrying about bans, restrictions, and unstable assets. We've built the infrastructure so you can focus on what matters — scaling your campaigns and growing your business."

### CTA

"Get Started Today"

### Visual Style

- Grey background (`bg-primary-100`)
- Centered layout
- 3 icon cards showing the partnership flow
- Single prominent CTA button

---

## 14. FAQ Section

### Q1: What is an agency ad account?

Agency accounts are pre-established advertising accounts with higher trust scores from the platform. They typically have fewer restrictions, faster approvals, and better stability than new personal accounts.

### Q2: What happens if my asset gets banned?

We offer 7-day warranty with 1:1 replacement. If something goes wrong within the warranty period (and it's not due to policy violation on your end), we replace it free.

### Q3: How is GoAds different from other providers?

We operate as a professional agency, not an MMO-style vendor. That means structured processes, clear communication, real support, and accountability. Agencies trust us as their supplier — that's our quality standard.

### Q4: What payment methods do you accept?

We accept Stripe, PayPal, bank transfer (Wise, IBAN), and cryptocurrency (Bitcoin, USDT).

### Q5: How fast is delivery?

Most orders are delivered within 24 hours. Complex setups may take up to 48 hours.

### Q6: What support do you offer after purchase?

Fast response via Telegram, WhatsApp, or Discord. We're a small team, so you get real humans who know your order — not ticket numbers.

### Q7: Why are BM5 accounts more expensive?

BM5 accounts have already run campaigns successfully, giving them higher trust with Meta. BM1 accounts are verified but haven't been 'proven' yet. More trust = more stability = higher price.

---

## 15. CTA Banner Section

### Headline

"Stop Worrying About Bans. Start Scaling."

### Subheadline

"7-day warranty. Real support. Agency-tested quality."

### CTA Button

"Get Started"

---

## 16. Footer

### Tagline

"Professional Meta infrastructure for serious advertisers"

### Quick Links

**Products**

- Agency Ad Accounts
- Business Managers
- Profiles & Pages
- Packs

**Services**

- Feedback Score Boost
- Account Health Assessment
- Unban Service

**Resources**

- Blog
- Partners
- Our Team
- Reviews

**Support**

- Contact
- FAQ
- Terms of Service
- Privacy Policy

### Contact

- Telegram: @Justin_goads
- WhatsApp: (add number)
- Discord: (add link)
- Email: (add email)

### Payment Methods

Stripe, PayPal, Visa, Mastercard, Wise, Bitcoin

### Copyright

© 2026 GoAds — All rights reserved

---

## Assets Needed (TODO)

- [ ] GoAds logo (SVG)
- [ ] Abstract gradient animation for hero
- [ ] Partner/certification logos (if any)
- [ ] Team photos (optional)
- [ ] Product screenshots (optional)
- [ ] World map graphic for Global Presence section
- [ ] Milestone/achievement images or icons

---

## Section → Component Mapping

| Section               | Krea Component to Repurpose      | Modifications Needed          |
| --------------------- | -------------------------------- | ----------------------------- |
| How It Works (Grey)   | app-showcase-section.tsx         | 3-step process cards          |
| Simple Process (Grey) | app-showcase-section.tsx         | 3 value prop cards            |
| Meta Assets Products  | bento-section.tsx                | New variant for products      |
| Milestones Banner     | big-picture-section.tsx          | Change slides to achievements |
| Guarantee             | enterprise-advantage-section.tsx | Change cards to guarantees    |
| Testimonials Bento    | bento-section.tsx                | New variant for testimonials  |
| Compare vs Others     | NEW component                    | Table layout with checkmarks  |
| Global Presence       | investor-showcase-section.tsx    | Map + stats instead of logos  |

---

## Implementation Phases (With Approval Gates)

### Phase 0: Content Approval ⏳ CURRENT

> **Status:** Awaiting your approval of all content in this document

Review all section content below and confirm:

- [ ] Hero content approved
- [ ] Navigation structure approved
- [ ] Feature Cards content approved
- [ ] Benefits content approved
- [ ] Pricing content approved
- [ ] FAQ content approved
- [ ] All other section content approved

---

### Phase 1: 100% Krea Sections (Content Swap Only)

**Scope:** 13 sections - just replace text/images, no component changes

| #   | Section        | Component                  | Status  |
| --- | -------------- | -------------------------- | ------- |
| 1   | Header         | header.tsx                 | ⬜ TODO |
| 2   | Hero           | hero-section.tsx           | ⬜ TODO |
| 3   | Feature Cards  | model-showcase-section.tsx | ⬜ TODO |
| 4   | Partner Logos  | logo-partners-section.tsx  | ⬜ TODO |
| 5   | Benefits Bento | bento-section.tsx          | ⬜ TODO |
| 6   | Use Cases      | use-cases-section.tsx      | ⬜ TODO |
| 7   | Pricing        | pricing-section.tsx        | ⬜ TODO |
| 8   | How It Works   | app-showcase-section.tsx   | ⬜ TODO |
| 9   | Simple Process | app-showcase-section.tsx   | ⬜ TODO |
| 10  | Milestones     | big-picture-section.tsx    | ⬜ TODO |
| 11  | FAQ            | enterprise-faq-section.tsx | ⬜ TODO |
| 12  | CTA Banner     | cta-banner-section.tsx     | ⬜ TODO |
| 13  | Footer         | footer.tsx                 | ⬜ TODO |

**Placeholder sections (description only):**

- Global Presence → `<!-- Phase 2: Global Presence -->`
- Guarantee → `<!-- Phase 2: Guarantee -->`
- Testimonials Bento → `<!-- Phase 3: Testimonials -->`
- Meta Assets Products → `<!-- Phase 3: Meta Assets -->`
- Compare vs Others → `<!-- Phase 3: Compare -->`

**Deliverable:** Working page with all 100% Krea sections + placeholder comments for others

**Approval Gate:** ⬜ User approves Phase 1 implementation

---

### Phase 2: Repurposed Krea Sections

**Scope:** 2 sections - same components, different purpose

| #   | Section         | Original Component            | Modification                 | Status  |
| --- | --------------- | ----------------------------- | ---------------------------- | ------- |
| 1   | Global Presence | investor-showcase-section.tsx | Map + stats instead of logos | ⬜ TODO |
| 2   | Guarantee       | enterprise-advantage-section  | Warranty cards not features  | ⬜ TODO |

**Approval Gate:** ⬜ User approves Phase 2 implementation

---

### Phase 3: Krea-Inspired Sections (New Components)

**Scope:** 3 sections - new components following Krea design system

| #   | Section              | Based On      | What's New                 | Status  |
| --- | -------------------- | ------------- | -------------------------- | ------- |
| 1   | Testimonials Bento   | bento-section | Grid for testimonial cards | ⬜ TODO |
| 2   | Meta Assets Products | bento-section | Product cards with prices  | ⬜ TODO |
| 3   | Compare vs Others    | (new)         | Comparison table component | ⬜ TODO |

**Approval Gate:** ⬜ User approves Phase 3 implementation

---

### Phase Summary

```
Phase 0: Content Approval        ← YOU ARE HERE
    ↓
Phase 1: 100% Krea (13 sections) → Approval Gate
    ↓
Phase 2: Repurposed (2 sections) → Approval Gate
    ↓
Phase 3: New/Inspired (3 sections) → Approval Gate
    ↓
DONE: 18 sections complete
```

---

## Content Statistics

- Total Sections: 18
- Grey Break Sections: 2 (How It Works, Simple Process)
- New Sections Added: 7 (How It Works, Simple Process, Meta Assets, Milestones, Guarantee, Testimonials Bento, Compare, Global Presence)
- Testimonials: 8
- FAQ Questions: 7
- Pricing Tiers: 4
- Product Types: 6
- Guarantee Cards: 4
- Comparison Points: 10
- Process Steps: 6 (3 + 3 in grey sections)
