# Email links and spam reduction

**Last updated:** 2026-05-20

This site avoids publishing raw `mailto:` addresses in HTML where possible, to reduce address harvesting by bots. People-page contact links still work for visitors with JavaScript enabled.

---

## Summary

| Location | How contact works |
|----------|-------------------|
| **People** (`/people/`) | Envelope icon; address stored as Base64 in `data-e`, decoded to `mailto:` by JavaScript |
| **Open Positions** (`/opportunities/`) | Google Form link + envelope icon (no lab email on this page) |
| **Shortcode** `email-icon` | Email → obfuscated icon; `http(s)` URL → direct link (e.g. application form) |

---

## People page: obfuscated mailto

### How it works

1. In Markdown front matter you still set a normal email, e.g. `email = "name@ibs.re.kr"`.
2. The people card template renders the envelope via `layouts/_partials/email-obfuscated-link.html`.
3. The built HTML contains `href="#"` and `data-e="<base64>"` — not a plain `mailto:name@…` string.
4. On page load, `assets/js/email-obfuscate.js` finds `.email-obfuscated` links and sets `href` to `mailto:` + decoded address.

### Files

| File | Role |
|------|------|
| `layouts/_partials/email-obfuscated-link.html` | Envelope `<a>` with `data-e` set via Hugo `base64Encode` |
| `layouts/_partials/people/card.html` | Uses the partial when `email` is set |
| `assets/js/email-obfuscate.js` | Decodes `data-e` and assigns `mailto:` href |
| `hugo.toml` → `params.customJS` | Loads the script site-wide (`["js/email-obfuscate.js"]`) |

The script must live under **`assets/js/`** (not `static/js/`), because hugo-coder loads `customJS` via Hugo Pipes (`resources.Get`).

### Adding or changing a person’s email

Edit the person’s Markdown under `content/people/` as usual:

```toml
email = "firstname.lastname@ibs.re.kr"
```

No extra steps — the obfuscation is automatic at build time.

### Limitations

- **JavaScript required:** Without JS, the icon stays at `href="#"` and does not open mail.
- **Not secret:** Base64 is trivial to decode; this blocks naive scrapers, not targeted harvesting.
- **Source still has the address:** The email remains in content files (and Git). Only the *published HTML* avoids a plain `mailto:` string.

---

## Open Positions: Google Form

Applications on `/opportunities/` should not use the PI inbox. The “How to Apply” section links to a Google Form.

Edit `content/opportunities/_index.md` and replace `PLACEHOLDER` in **both** the text link and the shortcode with your real form ID:

```markdown
**How to Apply:** … via [this Google Form](https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform) {{< email-icon "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform" >}}.
```

The `email-icon` shortcode treats `http://` / `https://` arguments as normal URLs (not email), so the envelope opens the form in a new tab.

---

## `email-icon` shortcode

Use in Markdown content:

```markdown
{{< email-icon "person@ibs.re.kr" >}}
{{< email-icon "https://docs.google.com/forms/d/e/FORM_ID/viewform" >}}
```

| Argument | Behavior |
|----------|----------|
| Contains `@` (email) | Obfuscated envelope → `mailto:` via JavaScript |
| Starts with `http://` or `https://` | Envelope links directly to that URL |

Implementation: `layouts/shortcodes/email-icon.html`.

---

## What we tried and did not keep

### HTML entity encoding in `mailto:` (USC-style)

Some lab sites (e.g. [USC NSEIP People](https://nseip.usc.edu/people/)) use `mailto:` hrefs with mixed plain text and numeric entities (`&#97;`, `&#64;`, etc.).

We first encoded **every** character as entities. That produced broken links: mail clients showed literal `&#115;&#117;…` instead of the real address. Full entity encoding in `mailto:` is unreliable across browsers and clients.

### Current approach

JavaScript + Base64 in `data-e` gives working `mailto:` behavior and keeps the address out of the static HTML as a readable string. Open Positions uses a form instead of email for applications.

---

## Maintenance checklist

- [ ] Replace `PLACEHOLDER` in `content/opportunities/_index.md` when the Google Form is ready.
- [ ] After changing `assets/js/email-obfuscate.js`, run `hugo` and confirm `/people/` envelope links open the correct address.
- [ ] If adding email icons elsewhere, prefer `{{< email-icon "…" >}}` or `partial "email-obfuscated-link.html"` — do not add raw `mailto:address@domain` in templates.

---

## Related docs

- [QUICK_REFERENCE.md](QUICK_REFERENCE.md) — Adding people (front matter `email` field)
