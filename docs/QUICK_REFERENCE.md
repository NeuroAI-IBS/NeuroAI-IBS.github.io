# Quick Reference

This document provides quick instructions for common tasks on the IBS NeuroAI Group website.

---

## Menu Items

Menu items are configured in `hugo.toml` under `[[menu.main]]` entries.

### Structure

```toml
[[menu.main]]
  name = "Display Text"   # Text shown in the menu
  weight = 1              # Order (lower numbers appear first)
  url = "/path/"          # Link destination
```

### Current Menu Order

| Weight | Name | URL |
|--------|------|-----|
| 1 | Home | / |
| 2 | People | /people/ |
| 3 | Research | /research/ |
| 4 | Publications | /publication/ |
| 5 | Resources | /resources/ |
| 6 | Open Positions | /opportunities/ |

### How to Change

1. **Change text:** Edit the `name` field
2. **Change order:** Edit the `weight` field (lower = earlier in menu)
3. **Add new item:** Add a new `[[menu.main]]` block with name, weight, and url

### Example: Swap Resources and Open Positions

```toml
[[menu.main]]
  name = "Open Positions"
  weight = 5
  url = "/opportunities/"

[[menu.main]]
  name = "Resources"
  weight = 6
  url = "/resources/"
```

---

## Adding People

See `content/people/` for examples. Each person needs:

```toml
+++
title = "Full Name"
role = "pi"  # pi, senior, student, alumni
position = "Job Title"
photo = "images/people/filename.jpg"
email = "email@example.com"
homepage = "https://..."
scholar = "https://scholar.google.com/..."
github = "https://github.com/..."
linkedin = "https://linkedin.com/in/..."
twitter = "https://twitter.com/..."
+++

Description text here.
```

### Adding Photos

1. Place photo in `static/images/people/` (e.g., `static/images/people/firstname_lastname.jpg`)
2. Set the `photo` field in the front matter to match: `photo = "images/people/firstname_lastname.jpg"`
3. Recommended: Use square images (e.g., 400x400px) for consistent display

---

## Adding Publications

Add markdown files to `content/publication/`.

---

## Adding Research Projects

Add markdown files to `content/research/`.

---

## Home Page Text & Hero Headers

Update the main hero block (big heading + subtitle) via `hugo.toml` and the home markdown content.

1. **Hero heading (`<h1>`):** Edit `[params] author` in `hugo.toml`.
2. **Hero subtitle (`<h2>`):** Edit `[params] info` (string or array) in `hugo.toml`. Arrays render multiple stacked lines.
3. **About paragraphs & extra headings:** Edit `content/_index.md`. Any Markdown you add here is inserted below the hero block.
4. **Custom structure (optional):** Copy `themes/hugo-coder/layouts/_partials/home/author.html` to `layouts/_partials/home/author.html` to fully control the markup.
5. Run `hugo server` to preview the new copy before deploying.

---

## Styling: Line Height & Paragraph Spacing

Custom styles are in `assets/scss/custom.scss`.

### Line Height

Add to your target selector:

```scss
.content {
  line-height: 1.8;  // Default is usually 1.5-1.6
}
```

### Paragraph Spacing

Control margin between paragraphs:

```scss
.content p {
  margin-bottom: 1.5rem;  // Increase for more space
}
```

### Example: Adjust About Section

```scss
.about-content {
  line-height: 1.8;

  p {
    margin-bottom: 1.5rem;
  }
}
```

After changes, rebuild with `hugo server` to preview.

---

## Header Spacing

Control the space above and below headings (h1–h6) within content areas.

### Reduce Header-to-Body Gap

Add to `.content` in `assets/scss/custom.scss`:

```scss
.content {
  h1, h2, h3, h4, h5, h6 {
    margin: 2rem 0 1rem 0;  // Theme default: 4rem 0 2.5rem 0
  }
}
```

- First value (`2rem`): space **above** the heading
- Last value (`1rem`): space **below** the heading (before body text)

Adjust these values as needed, then run `hugo server` to preview.

---

## Updating Banner Logo Size

Logos in the top banner use the `.banner-logo` class defined in `assets/scss/custom.scss`. Update its `height` to scale all banner logos uniformly while preserving aspect ratios:

```scss
.banner-logo {
  height: 3.6rem;  // Increase/decrease this value as needed
  width: auto;
}
```

1. Edit `assets/scss/custom.scss` and change the `height` value.
2. Run `hugo server` (or rebuild) to preview the updated size.

### Center Logo Specific Tweaks

- The center logo image is `static/images/logo_w_CMG.png`, referenced in `layouts/_partials/header.html`.
- Its link target is `https://www.ibs.re.kr/ccs`. Update the `<a>` tag there if the destination changes.
- Use the `.banner-logo-center` helper class when you need a different size or offset for the center logo only:

```scss
.banner-logo-center {
  height: 4.5rem;
  margin-top: 0.75rem; // low value to nudge it downward
}
```

---

## Home Page Logo Size (`logo.png`)

The large logo on the home hero section uses the `.avatar img` selector in `assets/scss/custom.scss`.

1. Locate `.avatar img` (near the top of the file).
2. Adjust `width: 40rem;` (and the mobile override inside the media query). Set `height` instead if you prefer height-driven sizing and keep `width: auto;` for aspect ratio.
3. Save and run `hugo server` to confirm the new scale.

### Adjusting Logo Position

If the logo appears too low (or too high), adjust its vertical position by adding styles to `.avatar` or `.avatar img` in `assets/scss/custom.scss`:

```scss
.avatar {
  margin-top: -2rem;  // Negative values move it up, positive values move it down
}

// Or adjust the image itself:
.avatar img {
  margin-top: -1rem;  // Fine-tune positioning
  // Alternative: use transform for precise control
  // transform: translateY(-1rem);
}
```

1. Edit `assets/scss/custom.scss` and add the `.avatar` or `.avatar img` positioning rules.
2. Adjust the `margin-top` value (negative = up, positive = down) until the logo is positioned correctly.
3. Run `hugo server` to preview the changes.

---

## Linking to Specific Sections

Use anchored headings plus Hugo's `ref` shortcode to send visitors to an exact spot on a page.

1. **Add an `id` to the target heading**
   In Markdown, append `{#anchor-name}` to the heading (e.g., `## Principal Investigator {#principal-investigator}`).
   In HTML templates, set the attribute directly:

   ```html
   <h2 id="principal-investigator">Principal Investigator</h2>
   ```

2. **Link to the anchored section**
   Reference the page and anchor with `ref`, just like a normal internal link:

   ```markdown
   [PI]({{< ref "people/_index.md#principal-investigator" >}})
   ```

3. **Preview** with `hugo server` to confirm the jump scrolls to the intended section.

---

## People Page: Adjusting Spacing Between Photo, Name, and Icons

The people page cards display a photo, name, and social icons. To adjust the gaps between these elements:

**Important:** The theme's `.content h3` styles override simple selectors, so you need to use more specific selectors with `!important` to ensure your changes take effect.

1. **Edit `assets/scss/custom.scss`** and locate the `.person-photo`, `.person-name`, and `.person-social` selectors.

2. **Adjust spacing between photo and name:**
   - Modify `margin-bottom` in `.person-photo` (currently `0.3rem`)
   - Modify `margin-top` in `.person-name` (first value in the `margin` shorthand, currently `0.5rem`)
   - Current total gap: `0.3rem + 0.5rem = 0.8rem`

3. **Adjust spacing between name and icons:**
   - Modify `margin-bottom` in `.person-name` (third value in the `margin` shorthand, currently `0.15rem`)
   - Modify `margin-top` in `.person-social` (currently `0.75rem`)
   - Current total gap: `0.15rem + 0.75rem = 0.9rem`

### Current Implementation

```scss
.person-photo {
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 0.3rem; // Gap after photo
}

// More specific selector to override .content h3 styles
.person-left .person-name,
.person-card .person-name {
  margin: 0.5rem 0 0.15rem !important; // Override theme's h3 margin
  font-size: 1.8rem;
}

.person-social {
  list-style: none;
  padding: 0;
  margin: 0.75rem 0 0 !important; // Gap before icons
  display: flex;
  justify-content: center;
  gap: 1rem;
}
```

### Example: Reduce All Gaps

```scss
.person-photo {
  margin-bottom: 0.2rem;  // Reduced gap after photo
}

.person-left .person-name,
.person-card .person-name {
  margin: 0.3rem 0 0.1rem !important;  // Reduced margins
  font-size: 1.8rem;
}

.person-social {
  margin: 0.3rem 0 0 !important;  // Reduced gap before icons
}
```

### Example: Increase Gaps

```scss
.person-photo {
  margin-bottom: 0.5rem;  // Increased gap after photo
}

.person-left .person-name,
.person-card .person-name {
  margin: 1rem 0 0.5rem !important;  // Increased margins
  font-size: 1.8rem;
}

.person-social {
  margin: 1rem 0 0 !important;  // Increased gap before icons
}
```

**Note:** After making changes, restart `hugo server` and hard refresh your browser (`Cmd+Shift+R` on Mac, `Ctrl+Shift+R` on Windows/Linux) to see the updates. The `!important` flags are necessary to override the theme's default h3 styles.

---

## People Page: Section Separator

A horizontal separator appears between the "Undergraduate Interns" and "Alumni" sections on the people page.

### Current Implementation

The separator is added in `layouts/people/list.html` using an `<hr>` element with the class `section-separator`. It only appears if both sections exist.

### Styling the Separator

The separator styling is defined in `assets/scss/custom.scss`:

```scss
.section-separator {
  margin: 4rem 0;
  border: none;
  border-top: 1px solid #ddd;
  width: 100%;
}
```

### Adjusting the Separator

- **Change spacing:** Modify the `margin` value (currently `4rem 0`)
- **Change color:** Modify `border-top` color (currently `#ddd`)
- **Change thickness:** Modify `border-top` width (currently `1px`)
- **Change style:** Replace `solid` with `dashed`, `dotted`, etc.

### Example: Thicker, Darker Separator

```scss
.section-separator {
  margin: 4rem 0;
  border: none;
  border-top: 2px solid #999;
  width: 100%;
}
```
