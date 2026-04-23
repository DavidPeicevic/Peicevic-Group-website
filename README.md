# Peičević Group — Web Stranica

Službena web stranica za Peičević Group, vodećeg distributera LPG plina u Slavoniji.

## Tehnologije

- **Čisti HTML5 / CSS3 / Vanilla JS** — bez frameworka, bez build toola
- **Google Fonts** — Syne (naslovi) + Outfit (tijelo teksta)
- **Inline SVG** — nula dodatnih HTTP zahtjeva za ikonice i van ilustraciju
- **IntersectionObserver** — scroll reveal animacije
- **JSON-LD** — strukturirani podaci za Google i AI sustave (višestruke schema vrste)

## Struktura projekta

```
Group Website/
├── index.html        # Početna stranica
├── dostava.html      # Stranica dostave LPG plina
├── stanice.html      # Auto-plin stanice
├── kontakt.html      # Kontakt & narudžba
├── sitemap.xml       # XML sitemap za Google Search Console
├── robots.txt        # Upute za web crawlere
├── css/
│   └── styles.css    # Jedinstven CSS za sve stranice
├── js/
│   └── main.js       # Navigacija, scroll reveal, forme
└── assets/
    ├── logo.png      # Flame logo (256×256, transparent pozadina)
    └── logo.svg      # SVG verzija loga
```

## Pokretanje

Nema instalacije. Otvori `index.html` u pregledniku ili serviraj lokalnim HTTP serverom:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (npx)
npx serve .
```

Zatim otvori `http://localhost:8000`.

## Stranice

| Stranica | Opis |
|---|---|
| `index.html` | Hero, stats, pokrivenost gradova |
| `dostava.html` | Informacije o dostavi plinskih boca |
| `stanice.html` | Auto-plin stanica Nova Gradiška |
| `kontakt.html` | Kontakt forma i narudžba |

## Kontakt podaci u kodu

Kontakt podaci su hardkodirani direktno u HTML datotekama:

- **Telefon:** `+385 95 809 6832`
- **Email:** `peicevicgroup@gmail.com`
- **Facebook:** `https://www.facebook.com/share/14Z4bkbMiuM/`
- **WhatsApp:** `https://wa.me/385958096832`

Za promjenu kontakt podataka, pretraži sve `.html` datoteke za gornje vrijednosti i zamijeni ih.

## Sigurnost

- Nema API keyeva u kodu
- Nema backenda ni baze podataka
- Nema ovisnosti o trećim stranama osim Google Fonts CDN-a

## SEO & GEO Optimizacija

### Klasični SEO
- Jedinstveni `<title>` i `<meta description>` na svakoj stranici
- `<link rel="canonical">` na svim stranicama
- `robots.txt` s referencom na sitemap
- `sitemap.xml` s prioritetima za sve 4 stranice — submitati u Google Search Console
- Open Graph tagovi (`og:title`, `og:description`, `og:type`, `og:url`, `og:locale`, `og:site_name`) na svim stranicama
- Twitter Card tagovi na svim stranicama

### JSON-LD Structured Data (po stranici)

| Stranica | Schema vrste |
|---|---|
| `index.html` | `LocalBusiness` (ime, adresa, radno vrijeme, kontakt, osnivač, VAT, Facebook) |
| `dostava.html` | `Service` (naziv, područje dostave, gradovi) + `FAQPage` + `BreadcrumbList` |
| `stanice.html` | `LocalBusiness` + `GasStation` (adresa, radno vrijeme, gorivo) + `FAQPage` + `BreadcrumbList` |
| `kontakt.html` | `LocalBusiness` + `ContactPoint` (telefon, email, radno vrijeme) + `BreadcrumbList` |

### GEO — Optimizacija za AI odgovore (ChatGPT, Perplexity, Bing Copilot, Google AI Overviews)

`FAQPage` schema na `dostava.html` i `stanice.html` strukturira odgovore u Q&A formatu koji AI sustavi direktno citiraju. Pokrivena pitanja:
- "Koja mjesta pokrivate dostavom plina?" → Vukovar, Vinkovci, Đakovo, Sisak, Velika Gorica, Županja
- "Kako naručiti dostavu plinskih boca?"
- "Jesu li boce sigurne i atestirane?"
- "Gdje se nalazi auto-plin stanica?"
- "Koje je radno vrijeme stanice?"

### Verifikacija
- [Google Rich Results Test](https://search.google.com/test/rich-results) — provjera schema markup-a
- [Schema Validator](https://validator.schema.org) — validacija JSON-LD
- Google Search Console → Sitemaps → unesi `https://peicevicgroup.hr/sitemap.xml`

---

## Lighthouse

Cilj: **95+ Performance** na svim stranicama.

Optimizacije koje su implementirane:
- `font-display: swap` + CSS fallback font metrics (`ascent-override`, `size-adjust`) — nulti CLS od font swapa
- Hero `<h1>` bez `reveal` animacije — LCP element vidljiv na prvom paintu
- `loading="lazy"` na footer logoovima ispod folda
- `defer` na JS skripti
- Trimani font weightovi (Syne: 600/700/800, Outfit: 300/400/500/600)
- `IntersectionObserver` odmah pokazuje elemente u viewportu pri učitavanju
- JSON-LD schema koristi `<script type="application/ld+json">` — nulti utjecaj na render performance
