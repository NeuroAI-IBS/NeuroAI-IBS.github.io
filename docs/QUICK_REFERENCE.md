# Quick Reference

This document provides quick instructions for common tasks on the IBS NeuroAI Lab website.

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
| 6 | Opportunities | /opportunities/ |

### How to Change

1. **Change text:** Edit the `name` field
2. **Change order:** Edit the `weight` field (lower = earlier in menu)
3. **Add new item:** Add a new `[[menu.main]]` block with name, weight, and url

### Example: Swap Resources and Opportunities

```toml
[[menu.main]]
  name = "Opportunities"
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

Add photos to `static/images/people/`.

---

## Adding Publications

Add markdown files to `content/publication/`.

---

## Adding Research Projects

Add markdown files to `content/research/`.
