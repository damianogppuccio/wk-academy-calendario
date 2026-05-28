/* ══════════════════════════════════════════════════════════════════
   MOTORE CALENDARIO — NON MODIFICARE QUESTO FILE
   Modificare solo events.js
   ══════════════════════════════════════════════════════════════════ */

(function(){

  var MESI = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'];
  var GIORNI = ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'];

  function parseDate(dateStr, timeStr) {
    if (!dateStr || !timeStr) {
      console.warn('[Calendario] Riga con data o ora mancante — ignorata.');
      return null;
    }
    var d = dateStr.split('/');
    var t = timeStr.split(':');
    if (d.length !== 3 || t.length !== 2) {
      console.warn('[Calendario] Formato errato: "' + dateStr + '" / "' + timeStr + '" — usare GG/MM/AAAA e HH:MM');
      return null;
    }
    var dt = new Date(+d[2], +d[1]-1, +d[0], +t[0], +t[1], 0);
    if (isNaN(dt.getTime())) {
      console.warn('[Calendario] Data non valida: "' + dateStr + ' ' + timeStr + '"');
      return null;
    }
    return dt;
  }

  function nowRome() {
    return new Date(new Date().toLocaleString('en-US', { timeZone:'Europe/Rome' }));
  }

  function badgeHTML(now, start, end) {
    var diff = start - now;
    var isLive = now >= start && now < end;
    var isSoon = !isLive && diff > 0 && diff <= 30 * 60 * 1000;
    if (isLive) return { dot:'ev-dot-live', html:'<span class="badge-live">\u25CF LIVE</span>' };
    if (isSoon) return { dot:'ev-dot-soon', html:'<span class="badge-soon">Tra poco live</span>' };
    return { dot:'ev-dot-future', html:'' };
  }

  function buildRow(e, now, showQaTag) {
    var dd = ('0' + e.start.getDate()).slice(-2);
    var mm = MESI[e.start.getMonth()];
    var gg = GIORNI[e.start.getDay()];
    var b  = badgeHTML(now, e.start, e.end);

    var dotClass = b.dot;
    if (e.tipo === 'qa' && dotClass === 'ev-dot-future') dotClass = 'ev-dot-qa';

    var qaBadge = (showQaTag && e.tipo === 'qa')
      ? '<span class="badge-qa">Q&A</span>'
      : '';

    var rowBg = (e.tipo === 'qa') ? ' ev-row-qa' : '';

    return ''
      + '<a class="ev-row' + rowBg + '" href="' + (e.link || '#') + '" target="_blank">'
      +   '<div class="ev-timeline">'
      +     '<div class="ev-dot ' + dotClass + '"></div>'
      +   '</div>'
      +   '<div class="ev-content">'
      +     '<div class="ev-date">'
      +       '<div class="ev-dd">' + dd + '</div>'
      +       '<div class="ev-mm">' + mm + '</div>'
      +     '</div>'
      +     '<div class="ev-info">'
      +       '<div class="ev-name">' + e.titolo + '</div>'
      +       '<div class="ev-time">'
      +         '<i class="ti ti-clock" style="font-size:12px;" aria-hidden="true"></i>'
      +         gg + ' \u00B7 ' + e.oi + ' \u2013 ' + e.of
      +       '</div>'
      +     '</div>'
      +     b.html
      +     qaBadge
      +     '<i class="ti ti-chevron-right ev-chevron" aria-hidden="true"></i>'
      +   '</div>'
      + '</a>';
  }

  function buildTalk(talk, now) {
    var dd = ('0' + talk.start.getDate()).slice(-2);
    var mm = MESI[talk.start.getMonth()];
    var gg = GIORNI[talk.start.getDay()];
    var b  = badgeHTML(now, talk.start, talk.end);

    return ''
      + '<a class="talk-row" href="' + (talk.link || '#') + '" target="_blank">'
      +   '<div class="talk-icon">'
      +     '<i class="ti ti-microphone" style="font-size:18px;color:#fff;" aria-hidden="true"></i>'
      +   '</div>'
      +   '<div class="talk-info">'
      +     '<div class="talk-label">Academy Talk</div>'
      +     '<div class="talk-name">' + talk.titolo + '</div>'
      +     '<div class="talk-time">'
      +       '<i class="ti ti-calendar" style="font-size:12px;" aria-hidden="true"></i>'
      +       dd + ' ' + mm + ' \u00B7 ' + gg + ' \u00B7 ' + talk.oi + ' \u2013 ' + talk.of
      +     '</div>'
      +   '</div>'
      +   b.html
      +   '<i class="ti ti-chevron-right" style="font-size:15px;color:#85BC20;" aria-hidden="true"></i>'
      + '</a>';
  }

  function prepareList(arr, tipo) {
    if (!arr || !Array.isArray(arr)) return [];
    return arr
      .map(function(e) {
        var s = parseDate(e.data, e.ora_inizio);
        var f = parseDate(e.data, e.ora_fine);
        if (!s || !f) return null;
        return { start:s, end:f, titolo:e.titolo, link:e.link, oi:e.ora_inizio, of:e.ora_fine, tipo:tipo };
      })
      .filter(function(e) { return e !== null; });
  }

  function render() {
    var now = nowRome();
    var mostraQa = (typeof MOSTRA_QA !== 'undefined') && MOSTRA_QA === true;

    var webinars = prepareList(typeof WEBINAR !== 'undefined' ? WEBINAR : [], 'webinar');
    var qas      = mostraQa ? prepareList(typeof QA !== 'undefined' ? QA : [], 'qa') : [];
    var talks    = prepareList(typeof TALKS !== 'undefined' ? TALKS : [], 'talk');

    var activeTalk = talks
      .filter(function(e) { return e.end > now; })
      .sort(function(a,b) { return a.start - b.start; })[0] || null;

    var maxRolling = activeTalk ? 5 : 6;

    var rolling = webinars.concat(qas)
      .filter(function(e) { return e.end > now; })
      .sort(function(a,b) { return a.start - b.start; })
      .slice(0, maxRolling);

    var rows = '';
    rolling.forEach(function(e) {
      rows += buildRow(e, now, mostraQa);
    });

    if (!rows && !activeTalk) {
      rows = '<div class="empty">Nessun webinar in programma</div>';
    }

    var talkSection = '';
    if (activeTalk) {
      talkSection = '<div class="talk-section">' + buildTalk(activeTalk, now) + '</div>';
    }

    document.getElementById('cal').innerHTML = ''
      + '<div class="cal-wrap">'
      +   '<div class="cal-header">'
      +     '<div class="cal-title">'
      +       '<i class="ti ti-calendar-event" style="font-size:18px;" aria-hidden="true"></i>'
      +       'Calendario webinar Genya'
      +     '</div>'
      +     '<div class="cal-accent"></div>'
      +     '<div class="cal-sub">Prossimi eventi in programma</div>'
      +   '</div>'
      +   '<div class="cal-body">' + rows + '</div>'
      +   talkSection
      + '</div>';
  }

  render();
  setInterval(render, 30000);

})();
