<?php
?><!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="color-scheme" content="dark">
  <title>Sidebar</title>
  <link rel="stylesheet" href="/styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          panel: '#0f1217',
          panel2: '#0c0f14',
          content: '#1a1d24',
          ink: '#e9edf3',
          inkDim: '#9aa0a6',
          border: '#1a2030',
        },
        borderRadius: {
          xl: '12px',
          '2xl': '16px',
        },
        fontFamily: {
          sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        },
      }
    }
  }
</script>
</head>
<body class="antialiased">
  <!-- ЛЕВАЯ ПАНЕЛЬ -->
  <aside class="sidebar" role="navigation" aria-label="Навигация">
    <!-- только иконки -->
    <nav class="sb-nav">
<a class="sb-item" data-route="#/" href="#/" aria-label="Кейс">
  <!-- outline -->
  <svg viewBox="0 0 24 24" class="ico ico-outline">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
    <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
    <path d="M12 12l0 .01" />
    <path d="M3 13a20 20 0 0 0 18 0" />
  </svg>

  <!-- filled -->
  <svg viewBox="0 0 24 24" class="ico ico-filled">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
  </svg>
</a>


<a class="sb-item" data-route="#/contracts" href="#/contracts" aria-label="contracts">
  <!-- outline -->
  <svg viewBox="0 0 24 24" class="ico ico-outline">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M21 12h-8a1 1 0 1 0 -1 1v8a9 9 0 0 0 9 -9" />
    <path d="M16 9a5 5 0 1 0 -7 7" />
    <path d="M20.486 9a9 9 0 1 0 -11.482 11.495" />
  </svg>

  <!-- filled -->
  <svg viewBox="0 0 24 24" class="ico ico-filled">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 10a2 2 0 0 1 1.678 .911l.053 .089h7.269l.117 .007a1 1 0 0 1 .883 .993c0 5.523 -4.477 10 -10 10a1 1 0 0 1 -1 -1v-7.269l-.089 -.053a2 2 0 0 1 -.906 -1.529l-.005 -.149a2 2 0 0 1 2 -2m9.428 -1.334a1 1 0 0 1 -1.884 .668a8 8 0 1 0 -10.207 10.218a1 1 0 0 1 -.666 1.886a10 10 0 1 1 12.757 -12.772m-4.628 -.266a1 1 0 0 1 -1.6 1.2a4 4 0 1 0 -5.6 5.6a1 1 0 0 1 -1.2 1.6a6 6 0 1 1 8.4 -8.4" />
  </svg>
</a>

      <a class="sb-item" data-route="#/upgrades" href="#/upgrades" aria-label="upgrades" data-badge>
  <!-- outline -->
  <svg viewBox="0 0 24 24" class="ico ico-outline">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 4h-6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8" />
    <path d="M18 20v-17" />
    <path d="M15 6l3 -3l3 3" />
  </svg>

  <!-- filled -->
  <svg viewBox="0 0 24 24" class="ico ico-filled">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M14 21a1 1 0 0 0 1 -1v-11.001h-.092a3 3 0 0 1 -2.03 -5.12a.515 .515 0 0 0 -.363 -.879h-6.515a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3z" />
    <path d="M18 21a1 1 0 0 0 1 -1v-14.584l1.293 1.291a1 1 0 0 0 1.32 .083l.094 -.083a1 1 0 0 0 0 -1.414l-3 -3a1 1 0 0 0 -.112 -.097l-.11 -.071l-.114 -.054l-.105 -.035l-.149 -.03l-.117 -.006l-.075 .003l-.126 .017l-.111 .03l-.111 .044l-.098 .052l-.096 .067l-.09 .08l-3 3a1 1 0 1 0 1.414 1.414l1.293 -1.293v14.586a1 1 0 0 0 1 1" />
  </svg>
</a>

<hr class="sb-separator">

<a class="sb-item" data-route="#/promo" href="#/promo" aria-label="promo">
  <!-- outline -->
  <svg viewBox="0 0 24 24" class="ico ico-outline">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
    <path d="M12 8l0 13" />
    <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
    <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
  </svg>

  <!-- filled -->
  <svg viewBox="0 0 24 24" class="ico ico-filled">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M11 14v8h-4a3 3 0 0 1 -3 -3v-4a1 1 0 0 1 1 -1h6zm8 0a1 1 0 0 1 1 1v4a3 3 0 0 1 -3 3h-4v-8h6zm-2.5 -12a3.5 3.5 0 0 1 3.163 5h.337a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-7v-5h-2v5h-7a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.337a3.486 3.486 0 0 1 -.337 -1.5c0 -1.933 1.567 -3.5 3.483 -3.5c1.755 -.03 3.312 1.092 4.381 2.934l.136 .243c1.033 -1.914 2.56 -3.114 4.291 -3.175l.209 -.002zm-9 2a1.5 1.5 0 0 0 0 3h3.143c-.741 -1.905 -1.949 -3.02 -3.143 -3zm8.983 0c-1.18 -.02 -2.385 1.096 -3.126 3h3.143a1.5 1.5 0 1 0 -.017 -3z" />
  </svg>
</a>

<a class="sb-item" data-route="#/faq" href="#/faq" aria-label="Лайки" data-badge>
  <!-- outline -->
  <svg viewBox="0 0 24 24" class="ico ico-outline">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    <path d="M12 16v.01" />
    <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
  </svg>

  <!-- filled -->
  <svg viewBox="0 0 24 24" class="ico ico-filled">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 13a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.44 1.383l.171 -.18a.98 .98 0 0 1 1.11 -.15a1 1 0 0 1 -.34 1.886l-.232 .012a1 1 0 0 0 .111 1.994a3 3 0 0 0 1.371 -5.673z" />
  </svg>
</a>
    </nav>

    <!-- низ: профиль -->
    <div class="sb-bottom">
<a class="sb-item" data-route="#/profile" href="#/profile" aria-label="Профиль" data-badge>
  <!-- outline -->
  <svg viewBox="0 0 24 24" class="ico ico-outline">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  </svg>

  <!-- filled -->
  <svg viewBox="0 0 24 24" class="ico ico-filled">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
    <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
  </svg>
</a>
      </a>
    </div>
  </aside>

  <!-- КОНТЕНТ -->
  <main id="app" class="app"></main>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-left">
        <a href="mailto:support@cs2case.io">support@bids.club</a>
        <span>/</span>
        <a href="#">Contacts</a>
        <span>/</span>
        <a href="#">Terms & Conditions</a>
        <span>/</span>
        <a href="#">Privacy Policy</a>
      </div>
      <div class="footer-right">
        <img src="/img/mastercard.svg" alt="MasterCard" class="pay-logo">
        <img src="/img/visa.svg" alt="Visa" class="pay-logo">
      </div>
    </div>
  </footer>
  <script type="module" src="/router.js"></script>
  <script type="module" src="/store.js"></script>
  <script type="module" src="/app.js"></script>
</body>
</html>