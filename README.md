# Peičević Group — Web Stranica

Službena web stranica za Peičević Group, vodećeg distributera LPG plina u Slavoniji.

## Tehnologije

- **Čisti HTML5 / CSS3 / Vanilla JS** — bez frameworka, bez build toola
- **Google Fonts** — Syne (naslovi) + Outfit (tijelo teksta)
- **Inline SVG** — nula dodatnih HTTP zahtjeva za ikonice i van ilustraciju
- **IntersectionObserver** — scroll reveal animacije
- **JSON-LD** — strukturirani podaci za Google (LocalBusiness schema)

## Struktura projekta

```
Group Website/
├── index.html        # Početna stranica
├── dostava.html      # Stranica dostave LPG plina
├── stanice.html      # Auto-plin stanice
├── kontakt.html      # Kontakt & narudžba
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

## Lighthouse

Cilj: **95+ Performance** na svim stranicama.

Optimizacije koje su implementirane:
- `font-display: swap` + CSS fallback font metrics (`ascent-override`, `size-adjust`) — nulti CLS od font swapa
- Hero `<h1>` bez `reveal` animacije — LCP element vidljiv na prvom paintu
- `loading="lazy"` na footer logoovima ispod folda
- `defer` na JS skripti
- Trimani font weightovi (Syne: 600/700/800, Outfit: 300/400/500/600)
- `IntersectionObserver` odmah pokazuje elemente u viewportu pri učitavanju
