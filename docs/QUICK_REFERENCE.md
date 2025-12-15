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
