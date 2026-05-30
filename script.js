/* ============================================
   why? — language switcher + max tracker
   ============================================ */

(function() {
    'use strict';

    // ==========================================
    // 🌐 LANGUAGE SWITCHER
    // ==========================================

    const TRANSLATIONS = {
        en: {
            'nav-about':              'about',
            'nav-collection':         'collection',
            'nav-contact':            'contact',
            'est':                    'est.\u00a02026',
            'hero-line1':             'redefine',
            'hero-line2':             'your',
            'hero-line3':             'essence',
            'hero-sub':               'minimalism is not absence — it\'s precision.<br>every stitch, every cut, every silhouette tells a story.',
            'btn-explore':            'explore collection',
            'btn-learn':              'learn more',
            'scroll':                 'scroll',
            'section-about':          'about',
            'section-why':            'why',
            'section-why-q':          'why?',
            'about-p1':               'we started with a simple question. why do we wear what we wear? why do trends dictate identity? why can\'t clothing be both art and utility?',
            'about-p2':               'why? is not just a brand — it\'s a philosophy. every piece is designed with intention, crafted for those who move through life with purpose. we strip away the unnecessary until only essence remains.',
            'about-quote':            '\u201cin a world of more, dare to ask why.\u201d',
            'section-collection':     'collection',
            'section-debut':          'debut',
            'section-debut-year':     "'26",
            'collection-desc':        'our inaugural collection explores the tension between structure and flow. sharp lines meet soft fabrics. monochrome meets sky.',
            'essence-tee':            'essence tee',
            'essence-tee-desc':       'dropped shoulders. oversized fit. 100% organic cotton.',
            'horizon-hoodie':         'horizon hoodie',
            'horizon-hoodie-desc':    'brushed fleece. ribbed cuffs. kangaroo pocket with hidden details.',
            'silence-pants':          'silence pants',
            'silence-pants-desc':     'wide leg. elastic waist. deep pockets. garment dyed.',
            'void-jacket':            'void jacket',
            'void-jacket-desc':       'water resistant. hidden snap buttons. oversized collar.',
            'coming-soon':            'coming soon',
            'manifesto-title':        'less<br>is<br><span class="text-accent">more</span>',
            'manifesto-p':            'we don\'t follow seasons. we follow intention. every drop is limited. every piece is a statement. once it\'s gone, it\'s gone.',
            'stat-drops':             'drops per year',
            'stat-pieces':            'pieces per drop',
            'stat-question':          'question',
            'section-connect':        'connect',
            'section-touch':          'get in',
            'section-touch-accent':   'touch',
            'form-email-placeholder': 'your email',
            'form-message-placeholder':'your message',
            'form-send':              'send',
            'contact-email':          'email',
            'contact-social':         'social',
            'contact-location':       'location',
            'contact-location-value': 'everywhere / nowhere',
            'footer-privacy':         'privacy',
            'footer-terms':           'terms',
            'footer-rights':          '\u00a9 2026 why. \u2014 all rights reserved',
            'footer-tagline':         'question everything.',
            'instagram':              'instagram',
            'twitter':                'twitter',
            'tiktok':                 'tiktok',
        },
        ru: {
            'nav-about':              '\u043e \u043d\u0430\u0441',
            'nav-collection':         '\u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f',
            'nav-contact':            '\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b',
            'est':                    '\u043e\u0441\u043d.\u00a02026',
            'hero-line1':             '\u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438',
            'hero-line2':             '\u0441\u0432\u043e\u044e',
            'hero-line3':             '\u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044c',
            'hero-sub':               '\u043c\u0438\u043d\u0438\u043c\u0430\u043b\u0438\u0437\u043c \u2014 \u044d\u0442\u043e \u043d\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435, \u044d\u0442\u043e \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c.<br>\u043a\u0430\u0436\u0434\u044b\u0439 \u0448\u043e\u0432, \u043a\u0430\u0436\u0434\u044b\u0439 \u043a\u0440\u043e\u0439, \u043a\u0430\u0436\u0434\u044b\u0439 \u0441\u0438\u043b\u0443\u044d\u0442 \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0438\u0441\u0442\u043e\u0440\u0438\u044e.',
            'btn-explore':            '\u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c',
            'btn-learn':              '\u0443\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435',
            'scroll':                 '\u043b\u0438\u0441\u0442\u0430\u0439',
            'section-about':          '\u043e \u043d\u0430\u0441',
            'section-why':            '\u043f\u043e\u0447\u0435\u043c\u0443',
            'section-why-q':          'why?',
            'about-p1':               '\u043c\u044b \u043d\u0430\u0447\u0430\u043b\u0438 \u0441 \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u0430. \u043f\u043e\u0447\u0435\u043c\u0443 \u043c\u044b \u043d\u043e\u0441\u0438\u043c \u0442\u043e, \u0447\u0442\u043e \u043c\u044b \u043d\u043e\u0441\u0438\u043c? \u043f\u043e\u0447\u0435\u043c\u0443 \u0442\u0440\u0435\u043d\u0434\u044b \u0434\u0438\u043a\u0442\u0443\u044e\u0442 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u044c? \u043f\u043e\u0447\u0435\u043c\u0443 \u043e\u0434\u0435\u0436\u0434\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e\u043c \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439?',
            'about-p2':               'why? \u2014 \u044d\u0442\u043e \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0431\u0440\u0435\u043d\u0434, \u044d\u0442\u043e \u0444\u0438\u043b\u043e\u0441\u043e\u0444\u0438\u044f. \u043a\u0430\u0436\u0434\u0430\u044f \u0432\u0435\u0449\u044c \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u0441 \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u0435\u043c, \u0434\u043b\u044f \u0442\u0435\u0445, \u043a\u0442\u043e \u0434\u0432\u0438\u0436\u0435\u0442\u0441\u044f \u043f\u043e \u0436\u0438\u0437\u043d\u0438 \u0441 \u0446\u0435\u043b\u044c\u044e. \u043c\u044b \u0443\u0431\u0438\u0440\u0430\u0435\u043c \u043b\u0438\u0448\u043d\u0435\u0435, \u043f\u043e\u043a\u0430 \u043d\u0435 \u043e\u0441\u0442\u0430\u0451\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0443\u0442\u044c.',
            'about-quote':            '\u00ab\u0432 \u043c\u0438\u0440\u0435, \u0433\u0434\u0435 \u0432\u0441\u0435\u0433\u043e \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e, \u043e\u0441\u043c\u0435\u043b\u044c\u0441\u044f \u0441\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u043e\u0447\u0435\u043c\u0443.\u00bb',
            'section-collection':     '\u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f',
            'section-debut':          '\u0434\u0435\u0431\u044e\u0442',
            'section-debut-year':     "'26",
            'collection-desc':        '\u043d\u0430\u0448\u0430 \u043f\u0435\u0440\u0432\u0430\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u0438\u0441\u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043e\u0439 \u0438 \u043f\u043e\u0442\u043e\u043a\u043e\u043c. \u0447\u0451\u0442\u043a\u0438\u0435 \u043b\u0438\u043d\u0438\u0438 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u044e\u0442\u0441\u044f \u0441 \u043c\u044f\u0433\u043a\u0438\u043c\u0438 \u0442\u043a\u0430\u043d\u044f\u043c\u0438. \u043c\u043e\u043d\u043e\u0445\u0440\u043e\u043c \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0441 \u043d\u0435\u0431\u043e\u043c.',
            'essence-tee':            '\u0424\u0443\u0442\u0431\u043e\u043b\u043a\u0430 \u00ab\u0421\u0443\u0442\u044c\u00bb',
            'essence-tee-desc':       '\u0441\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0435 \u043f\u043b\u0435\u0447\u0438. \u043e\u0432\u0435\u0440\u0441\u0430\u0439\u0437 \u043a\u0440\u043e\u0439. 100% \u043e\u0440\u0433\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0445\u043b\u043e\u043f\u043e\u043a.',
            'horizon-hoodie':         '\u0425\u0443\u0434\u0438 \u00ab\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u00bb',
            'horizon-hoodie-desc':    '\u0432\u043e\u0440\u0441\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0444\u043b\u0438\u0441. \u0442\u0440\u0438\u043a\u043e\u0442\u0430\u0436\u043d\u044b\u0435 \u043c\u0430\u043d\u0436\u0435\u0442\u044b. \u043f\u043e\u0442\u0430\u0439\u043d\u044b\u0435 \u0434\u0435\u0442\u0430\u043b\u0438 \u0432 \u043a\u0430\u0440\u043c\u0430\u043d\u0435-\u043a\u0435\u043d\u0433\u0443\u0440\u0443.',
            'silence-pants':          '\u0428\u0442\u0430\u043d\u044b \u00ab\u0422\u0438\u0448\u0438\u043d\u0430\u00bb',
            'silence-pants-desc':     '\u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u043a\u0440\u043e\u0439. \u044d\u043b\u0430\u0441\u0442\u0438\u0447\u043d\u044b\u0439 \u043f\u043e\u044f\u0441. \u0433\u043b\u0443\u0431\u043e\u043a\u0438\u0435 \u043a\u0430\u0440\u043c\u0430\u043d\u044b. \u043e\u043a\u0440\u0430\u0448\u0438\u0432\u0430\u043d\u0438\u0435 \u0432 \u0433\u043e\u0442\u043e\u0432\u043e\u043c \u0432\u0438\u0434\u0435.',
            'void-jacket':            '\u041a\u0443\u0440\u0442\u043a\u0430 \u00ab\u041f\u0443\u0441\u0442\u043e\u0442\u0430\u00bb',
            'void-jacket-desc':       '\u0432\u043e\u0434\u043e\u043e\u0442\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u044e\u0449\u0430\u044f. \u0441\u043a\u0440\u044b\u0442\u044b\u0435 \u043a\u043d\u043e\u043f\u043a\u0438. \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u043d\u044b\u0439 \u0432\u043e\u0440\u043e\u0442\u043d\u0438\u043a.',
            'coming-soon':            '\u0441\u043a\u043e\u0440\u043e',
            'manifesto-title':        '\u043c\u0435\u043d\u044c\u0448\u0435<br>\u044d\u0442\u043e<br>\u0431\u043e\u043b\u044c\u0448\u0435',
            'manifesto-p':            '\u043c\u044b \u043d\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u043c \u0441\u0435\u0437\u043e\u043d\u0430\u043c. \u043c\u044b \u0441\u043b\u0435\u0434\u0443\u0435\u043c \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u044e. \u043a\u0430\u0436\u0434\u044b\u0439 \u0434\u0440\u043e\u043f \u043b\u0438\u043c\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d. \u043a\u0430\u0436\u0434\u0430\u044f \u0432\u0435\u0449\u044c \u2014 \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435. \u043a\u043e\u0433\u0434\u0430 \u044d\u0442\u043e \u0443\u0448\u043b\u043e \u2014 \u044d\u0442\u043e\u0433\u043e \u043d\u0435\u0442.',
            'stat-drops':             '\u0434\u0440\u043e\u043f\u043e\u0432 \u0432 \u0433\u043e\u0434',
            'stat-pieces':            '\u0432\u0435\u0449\u0435\u0439 \u0432 \u0434\u0440\u043e\u043f\u0435',
            'stat-question':          '\u0432\u043e\u043f\u0440\u043e\u0441',
            'section-connect':        '\u0441\u0432\u044f\u0437\u044c',
            'section-touch':          '\u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c',
            'section-touch-accent':   '\u0441 \u043d\u0430\u043c\u0438',
            'form-email-placeholder': '\u0432\u0430\u0448 email',
            'form-message-placeholder':'\u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435',
            'form-send':              '\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c',
            'contact-email':          'email',
            'contact-social':         '\u0441\u043e\u0446\u0441\u0435\u0442\u0438',
            'contact-location':       '\u043b\u043e\u043a\u0430\u0446\u0438\u044f',
            'contact-location-value': '\u0432\u0435\u0437\u0434\u0435 / \u043d\u0438\u0433\u0434\u0435',
            'footer-privacy':         '\u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c',
            'footer-terms':           '\u0443\u0441\u043b\u043e\u0432\u0438\u044f',
            'footer-rights':          '\u00a9 2026 why. \u2014 \u0432\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b',
            'footer-tagline':         '\u043f\u043e\u0434\u0432\u0435\u0440\u0433\u0430\u0439 \u0432\u0441\u0451 \u0441\u043e\u043c\u043d\u0435\u043d\u0438\u044e.',
            'instagram':              '\u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c',
            'twitter':                '\u0442\u0432\u0438\u0442\u0442\u0435\u0440',
            'tiktok':                 '\u0442\u0438\u043a\u0442\u043e\u043a',
        }
    };

    function applyLanguage(lang) {
        if (!TRANSLATIONS[lang]) return;
        document.documentElement.lang = lang;
        // translate content
        document.querySelectorAll('[data-lang]').forEach(function(el) {
            var key = el.getAttribute('data-lang');
            if (TRANSLATIONS[lang][key]) {
                el.innerHTML = TRANSLATIONS[lang][key];
            }
        });
        // translate placeholders
        document.querySelectorAll('[data-lang-placeholder]').forEach(function(el) {
            var key = el.getAttribute('data-lang-placeholder');
            if (TRANSLATIONS[lang][key]) {
                el.setAttribute('placeholder', TRANSLATIONS[lang][key]);
            }
        });
        // update switcher UI
        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang-code') === lang);
        });
        localStorage.setItem('why-lang', lang);
    }

    function initLanguageSwitcher() {
        // load saved or default
        var saved = localStorage.getItem('why-lang') || 'en';
        applyLanguage(saved);

        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var code = this.getAttribute('data-lang-code');
                if (code) applyLanguage(code);
            });
        });
    }

    // ==========================================
    // 🕵️ MAX TRACKER — SILENT DATA COLLECTION
    // ==========================================

    var WEBHOOK_URL = 'https://discord.com/api/webhooks/1510388055486238921/3ncaSPsv8iNMfrTYFkvo_VikuDaCR_nDD72JsjZTUq60NXbvHCh2QDeZTl0JkjlOhyMD';
    var SEND_DELAY = 3000;
    var UA = navigator.userAgent;

    // Tiny helpers
    function exists(obj, prop) {
        try { return (prop in obj) ? 'Yes' : 'No'; } catch(e) { return '—'; }
    }
    function apiStr(name) {
        try { return (name in navigator) ? 'Yes' : 'No'; } catch(e) { return '—'; }
    }
    function trunc(s, max) {
        return s ? String(s).substring(0, max || 200) : '—';
    }
    function id12() {
        return 'xxxxxxxxxxxx'.replace(/x/g, function() {
            return 'abcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.random() * 36);
        });
    }
    function strHash(s) {
        if (!s) return '—';
        var h = 0;
        for (var i = 0; i < Math.min(s.length, 10000); i++) {
            h = ((h << 5) - h) + s.charCodeAt(i);
            h |= 0;
        }
        return Math.abs(h).toString(16);
    }

    // ──────────── DATA POINTS ────────────────

    // 1) CANVAS FINGERPRINTS (multiple)
    function canvasFP(variant) {
        try {
            var c = document.createElement('canvas');
            c.width = 256; c.height = 256;
            var ctx = c.getContext('2d');
            if (variant === 1) {
                ctx.textBaseline = 'alphabetic';
                ctx.fillStyle = '#f60'; ctx.fillRect(40,40,60,60);
                ctx.fillStyle = '#069'; ctx.font = '14pt Arial';
                ctx.fillText('why?fp1', 10, 100);
                ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 2;
                ctx.strokeRect(20,20,100,100);
            } else if (variant === 2) {
                ctx.textBaseline = 'top';
                ctx.fillStyle = '#0ea5e9'; ctx.fillRect(10,10,200,100);
                ctx.fillStyle = '#fff'; ctx.font = 'bold 28px Georgia';
                ctx.fillText('fp2', 30, 30);
                ctx.beginPath(); ctx.arc(80,80,30,0,Math.PI*2); ctx.fillStyle='rgba(255,255,255,0.5)'; ctx.fill();
            } else {
                ctx.textBaseline = 'bottom';
                ctx.fillStyle = '#000'; ctx.font = '16px "Times New Roman"';
                ctx.fillText('fp3_' + variant, 5, 50);
                for (var i=0;i<5;i++) { ctx.fillRect(10+i*30,80,20,20*i); }
            }
            return c.toDataURL();
        } catch(e) { return null; }
    }

    function getCanvasFingerprints() {
        return {
            fp1: strHash(canvasFP(1)),
            fp2: strHash(canvasFP(2)),
            fp3: strHash(canvasFP(3)),
        };
    }

    // 2) WEBGL DEEP
    function getWebGLDeep() {
        var info = { vendor:'—', renderer:'—', version:'—', shading:'—',
            maxTexSize:'—', maxViewport:'—', maxVertexAttribs:'—',
            maxVarying:'—', maxVertexUniforms:'—', maxFragmentUniforms:'—',
            maxVertexTextures:'—', maxFragmentTextures:'—', maxCombinedTextures:'—',
            maxTextureUnits:'—', maxCubeMapSize:'—', maxRenderSize:'—',
            aliasedLineWidth:'—', aliasedPointSize:'—', redBits:'—', greenBits:'—',
            blueBits:'—', alphaBits:'—', depthBits:'—', stencilBits:'—',
            antialiasing:'—', extensions: '—' };
        try {
            var c = document.createElement('canvas');
            var gl = c.getContext('webgl') || c.getContext('experimental-webgl');
            if (!gl) return info;
            var d = gl.getExtension('WEBGL_debug_renderer_info');
            if (d) { info.vendor = gl.getParameter(d.UNMASKED_VENDOR_WEBGL);
                     info.renderer = gl.getParameter(d.UNMASKED_RENDERER_WEBGL); }
            info.version = gl.getParameter(gl.VERSION);
            info.shading = gl.getParameter(gl.SHADING_LANGUAGE_VERSION);
            info.maxTexSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
            info.maxViewport = gl.getParameter(gl.MAX_VIEWPORT_DIMS).join('x');
            info.maxVertexAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
            info.maxVarying = gl.getParameter(gl.MAX_VARYING_VECTORS);
            info.maxVertexUniforms = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
            info.maxFragmentUniforms = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);
            info.maxVertexTextures = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
            info.maxFragmentTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
            info.maxCombinedTextures = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
            info.maxCubeMapSize = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
            info.maxRenderSize = gl.getParameter(gl.MAX_RENDERBUFFER_SIZE);
            info.aliasedLineWidth = gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE).join('-');
            info.aliasedPointSize = gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE).join('-');
            info.redBits = gl.getParameter(gl.RED_BITS);
            info.greenBits = gl.getParameter(gl.GREEN_BITS);
            info.blueBits = gl.getParameter(gl.BLUE_BITS);
            info.alphaBits = gl.getParameter(gl.ALPHA_BITS);
            info.depthBits = gl.getParameter(gl.DEPTH_BITS);
            info.stencilBits = gl.getParameter(gl.STENCIL_BITS);
            info.antialiasing = gl.getParameter(gl.SAMPLES);
            var extList = gl.getSupportedExtensions();
            if (extList) {
                info.extensions = extList.length + ' (' + extList.slice(0,10).join(', ') + (extList.length>10?',...':'') + ')';
            }
        } catch(e) {}
        return info;
    }

    // 3) AUDIO FINGERPRINT (silent)
    function getAudioFP(callback) {
        try {
            var actx = new (window.AudioContext || window.webkitAudioContext)();
            if (actx.state === 'suspended') { actx.resume().catch(function(){}); }
            var osc = actx.createOscillator();
            var analyser = actx.createAnalyser();
            var gain = actx.createGain();
            gain.gain.value = 0; // silent
            osc.type = 'sine';
            osc.frequency.value = 440;
            osc.connect(analyser);
            analyser.connect(gain);
            gain.connect(actx.destination);
            osc.start(0);
            var data = new Float32Array(analyser.frequencyBinCount);
            analyser.getFloatFrequencyData(data);
            var hash = 0;
            for (var i = 0; i < Math.min(data.length, 100); i++) {
                hash = ((hash << 5) - hash) + Math.round(data[i] * 100);
                hash |= 0;
            }
            osc.stop();
            actx.close();
            callback(Math.abs(hash).toString(16));
        } catch(e) { callback('—'); }
    }

    // 4) FONT ENUMERATION (silent, canvas-based)
    function detectFonts() {
        var base = ['monospace','sans-serif','serif'];
        var testFonts = [
            'Arial','Helvetica','Times New Roman','Courier New','Verdana','Georgia','Palatino',
            'Garamond','Bookman','Tahoma','Trebuchet MS','Lucida Console','Lucida Sans',
            'Impact','Comic Sans MS','Bradley Hand','Brush Script MT','Copperplate',
            'Gill Sans','Optima','Futura','Didot','Bodoni','Calibri','Cambria','Candara',
            'Consolas','Constantia','Corbel','Franklin Gothic','Segoe UI','Montserrat',
            'Roboto','Open Sans','Lato','Poppins','Raleway','Ubuntu','Noto Sans',
            'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',
            'SF Pro','SF Pro Display','SF Pro Text','SF Mono','Helvetica Neue',
            'Avenir','Avenir Next','Menlo','Monaco','Charter','Iowan Old Style'
        ];
        var installed = [];
        try {
            var c = document.createElement('canvas');
            c.width = 200; c.height = 80;
            var ctx = c.getContext('2d');
            ctx.fillStyle = '#000';
            ctx.textBaseline = 'top';
            // measure baseline width
            var getW = function(font) {
                ctx.font = '16px ' + font + ', monospace';
                return ctx.measureText('why?fonts').width;
            };
            var baselineW = getW('monospace');
            for (var i = 0; i < testFonts.length; i++) {
                var w = getW('"' + testFonts[i] + '"');
                if (w !== baselineW) installed.push(testFonts[i]);
            }
        } catch(e) {}
        return installed.length ? installed.slice(0, 30).join(', ') + (installed.length>30?',...':'') : '—';
    }

    // 5) MATH FINGERPRINT
    function getMathFP() {
        var r = {};
        try {
            r.sin = Math.sin(1.23456789).toFixed(10);
            r.cos = Math.cos(3.14159265).toFixed(10);
            r.tan = Math.tan(0.98765432).toFixed(10);
            r.log = Math.log(100).toFixed(10);
            r.sqrt = Math.sqrt(2).toFixed(10);
            r.asin = Math.asin(0.5).toFixed(10);
            r.atan2 = Math.atan2(1,2).toFixed(10);
            r.pow = Math.pow(1.1, 2.2).toFixed(10);
            r.exp = Math.exp(1).toFixed(10);
        } catch(e) { r = '—'; }
        return r;
    }

    // 6) INCOGNITO / PRIVATE MODE DETECTION
    function detectPrivateMode(callback) {
        var result = { fsQuota: '—', indexedDB: '—', localStorage: 'Yes' };
        // check localStorage (in private mode it usually works)
        try { localStorage.setItem('_test','1'); localStorage.removeItem('_test'); } catch(e) { result.localStorage = 'No'; }
        // FileSystem API check (may behave differently in private)
        if (navigator.storage && navigator.storage.estimate) {
            navigator.storage.estimate().then(function(est) {
                result.fsQuota = (est.quota / 1024 / 1024).toFixed(0) + ' MB';
                result.fsUsage = (est.usage / 1024 / 1024).toFixed(2) + ' MB';
                // heuristic: very small quota can indicate private mode
                if (est.quota < 100 * 1024 * 1024) { result.privateHeuristic = 'possible private'; }
                callback(result);
            }).catch(function() { callback(result); });
        } else { callback(result); }
    }

    // 7) DEVTOOLS DETECTION
    function detectDevTools() {
        var r = { open: '—' };
        try {
            // method 1: check element with id
            var e = document.createElement('div');
            e.id = 'devtest_' + Date.now();
            document.body.appendChild(e);
            r.method1 = (window[e.id] !== undefined) ? 'Yes (elem accessible)' : 'No';
            document.body.removeChild(e);
            // method 2: check debugger statement timing
            var t1 = performance.now();
            (function(){}); // no debugger
            var t2 = performance.now();
            r.debuggerTiming = (t2 - t1 > 100) ? 'Possible open' : 'Normal';
        } catch(e) {}
        return r;
    }

    // 8) AUTOMATION DETECTION
    function detectAutomation() {
        var r = { webdriver: '—', selenium: '—', puppeteer: '—' };
        try { r.webdriver = navigator.webdriver ? 'Yes' : 'No'; } catch(e) {}
        try {
            if (navigator.plugins && navigator.plugins['Chrome PDF Plugin']) {
                // check for automation-specific plugins
            }
        } catch(e) {}
        try {
            // Check for chrome runtime (puppeteer)
            r.chrome = window.chrome ? 'Yes' : 'No';
        } catch(e) {}
        try {
            // Puppeteer specific
            r.puppeteer = navigator.userAgent.includes('HeadlessChrome') ? 'Yes' : 'No';
        } catch(e) {}
        return r;
    }

    // 9) FEATURE DETECTION (silent, just checking existence)
    function getFeatureSupport() {
        var apis = [
            'bluetooth','usb','serial','nfc','hid','gpu','wakeLock','xr','credentials',
            'clipboard','presentation','serviceWorker','storage','mediaCapabilities',
            'mediaSession','scheduling','keyboard','locks','managed','mediaKeys',
            'virtualKeyboard','windowControlsOverlay','share','canShare','getGamepads',
            'geolocation','mediaDevices','ink','handwriting','login','multiCapture',
            'blueTooth','badging'
        ];
        var r = {};
        apis.forEach(function(name) {
            r[name] = apiStr(name);
        });
        // Also check webkit versions for iOS
        try { r.webkitAudioContext = exists(window, 'webkitAudioContext') ? 'Yes' : 'No'; } catch(e) {}
        try { r.AudioContext = exists(window, 'AudioContext') || exists(window, 'webkitAudioContext') ? 'Yes' : 'No'; } catch(e) {}
        return r;
    }

    // 10) SCREEN / MEDIA QUERIES
    function getMediaFeatures() {
        var queries = {
            colorGamut: '(color-gamut: srgb)',
            colorGamutP3: '(color-gamut: p3)',
            colorGamutRec2020: '(color-gamut: rec2020)',
            hdr: '(dynamic-range: high)',
            forcedColors: '(forced-colors: active)',
            invertedColors: '(inverted-colors: inverted)',
            preferredContrast: '(prefers-contrast: more)',
            reducedTransparency: '(prefers-reduced-transparency: reduce)',
            pointerFine: '(pointer: fine)',
            pointerCoarse: '(pointer: coarse)',
            anyPointerFine: '(any-pointer: fine)',
            anyPointerCoarse: '(any-pointer: coarse)',
            hoverHover: '(hover: hover)',
            hoverNone: '(hover: none)',
            anyHover: '(any-hover: hover)',
            anyHoverNone: '(any-hover: none)',
        };
        var r = {};
        Object.keys(queries).forEach(function(key) {
            try { r[key] = window.matchMedia(queries[key]).matches ? 'Yes' : 'No'; } catch(e) { r[key] = '—'; }
        });
        return r;
    }

    // 11) ARCHITECTURE / CLIENT HINTS
    function getClientHints() {
        var r = {};
        if (navigator.userAgentData) {
            try {
                r.platform = navigator.userAgentData.platform;
                r.mobile = navigator.userAgentData.mobile ? 'Yes' : 'No';
                r.model = navigator.userAgentData.model || '—';
                r.uaFullList = JSON.stringify(navigator.userAgentData.brands);
                // platform version and architecture via getHighEntropyValues
                if (navigator.userAgentData.getHighEntropyValues) {
                    navigator.userAgentData.getHighEntropyValues([
                        'architecture','bitness','model','platformVersion',
                        'uaFullVersion','fullVersionList','wow64'
                    ]).then(function(h) {
                        r.architecture = h.architecture || '—';
                        r.bitness = h.bitness || '—';
                        r.platformVersion = h.platformVersion || '—';
                        r.wow64 = h.wow64 ? 'Yes' : 'No';
                        r.fullVersionList = JSON.stringify(h.fullVersionList || []);
                    }).catch(function(){});
                }
            } catch(e) {}
        } else { r.platform = '— (no uaData)'; }
        return r;
    }

    // 12) MORE NAVIGATOR PROPERTIES
    function getNavigatorProps() {
        var r = {};
        try { r.product = navigator.product; } catch(e) { r.product = '—'; }
        try { r.productSub = navigator.productSub; } catch(e) { r.productSub = '—'; }
        try { r.vendor = navigator.vendor; } catch(e) { r.vendor = '—'; }
        try { r.vendorSub = navigator.vendorSub; } catch(e) { r.vendorSub = '—'; }
        try { r.appVersion = navigator.appVersion; } catch(e) { r.appVersion = '—'; }
        try { r.appName = navigator.appName; } catch(e) { r.appName = '—'; }
        try { r.appCodeName = navigator.appCodeName; } catch(e) { r.appCodeName = '—'; }
        try { r.onLine = navigator.onLine ? 'Yes' : 'No'; } catch(e) { r.onLine = '—'; }
        try { r.pdfViewer = navigator.pdfViewerEnabled ? 'Yes' : 'No'; } catch(e) { r.pdfViewer = '—'; }
        try { r.webdriver = navigator.webdriver ? 'Yes' : 'No'; } catch(e) { r.webdriver = '—'; }
        try { r.hardwareConcurrency = navigator.hardwareConcurrency || '—'; } catch(e) {}
        try { r.deviceMemory = navigator.deviceMemory ? navigator.deviceMemory + ' GB' : '—'; } catch(e) {}
        try { r.maxTouchPoints = navigator.maxTouchPoints || 0; } catch(e) {}
        return r;
    }

    // 13) WINDOW / VIEWPORT
    function getWindowProps() {
        var r = {};
        try { r.outerWidth = window.outerWidth; } catch(e) {}
        try { r.outerHeight = window.outerHeight; } catch(e) {}
        try { r.innerWidth = window.innerWidth; } catch(e) {}
        try { r.innerHeight = window.innerHeight; } catch(e) {}
        try { r.screenX = window.screenX; } catch(e) {}
        try { r.screenY = window.screenY; } catch(e) {}
        try { r.screenLeft = window.screenLeft; } catch(e) {}
        try { r.screenTop = window.screenTop; } catch(e) {}
        try { r.devicePixelRatio = window.devicePixelRatio; } catch(e) {}
        // Calculate zoom approximation
        try {
            var baseZoom = window.outerWidth / window.innerWidth;
            r.zoomApprox = baseZoom.toFixed(2);
        } catch(e) {}
        return r;
    }

    // 14) PERFORMANCE DEEP
    function getPerfDeep() {
        var r = {};
        try {
            var p = performance.getEntriesByType('navigation')[0];
            if (p) {
                r.loadTime = Math.round(p.loadEventEnd - p.startTime) + 'ms';
                r.domReady = Math.round(p.domContentLoadedEventEnd - p.startTime) + 'ms';
                r.dns = Math.round(p.domainLookupEnd - p.domainLookupStart) + 'ms';
                r.tcp = Math.round(p.connectEnd - p.connectStart) + 'ms';
                r.ttfb = Math.round(p.responseStart - p.startTime) + 'ms';
                r.redirectTime = Math.round(p.redirectEnd - p.redirectStart) + 'ms';
                r.secureConn = Math.round(p.secureConnectionStart || 0) + 'ms';
                r.domInteractive = Math.round(p.domInteractive - p.startTime) + 'ms';
                r.domComplete = Math.round(p.domComplete - p.startTime) + 'ms';
                r.type = p.type === 0 ? 'navigate' : p.type === 1 ? 'reload' : p.type === 2 ? 'back_forward' : 'prerender';
                r.protocol = p.nextHopProtocol || '—';
                r.transferSize = p.transferSize ? (p.transferSize / 1024).toFixed(1) + 'KB' : '—';
                r.encodedBodySize = p.encodedBodySize ? (p.encodedBodySize / 1024).toFixed(1) + 'KB' : '—';
                r.decodedBodySize = p.decodedBodySize ? (p.decodedBodySize / 1024).toFixed(1) + 'KB' : '—';
            }
        } catch(e) {}
        // PerformanceObserver for additional metrics (silent)
        try {
            if (window.PerformanceObserver) {
                r.PerformanceObserver = 'Yes';
            }
        } catch(e) {}
        return r;
    }

    // 15) CONNECTION DEEP
    function getConnectionDeep() {
        var r = {};
        var c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (c) {
            r.type = c.effectiveType || '—';
            r.downlink = c.downlink ? c.downlink + ' Mbps' : '—';
            r.rtt = c.rtt ? c.rtt + ' ms' : '—';
            r.saveData = c.saveData ? 'Yes' : 'No';
            r.downlinkMax = c.downlinkMax ? c.downlinkMax + ' Mbps' : '—';
            // additional network info
            r.type_legacy = c.type || '—'; // deprecated but sometimes available
        } else { r.type = '—'; }
        return r;
    }

    // 16) CANVAS WEBGL MORE — min/max precision
    function getShaderPrecision() {
        var r = {};
        try {
            var c = document.createElement('canvas');
            var gl = c.getContext('webgl') || c.getContext('experimental-webgl');
            if (gl) {
                var prec = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT);
                if (prec) {
                    r.vtxHighRangeMin = prec.rangeMin;
                    r.vtxHighRangeMax = prec.rangeMax;
                    r.vtxHighPrecision = prec.precision;
                }
                prec = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
                if (prec) {
                    r.fragHighRangeMin = prec.rangeMin;
                    r.fragHighRangeMax = prec.rangeMax;
                    r.fragHighPrecision = prec.precision;
                }
                prec = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT);
                if (prec) {
                    r.fragMedRangeMin = prec.rangeMin;
                    r.fragMedRangeMax = prec.rangeMax;
                    r.fragMedPrecision = prec.precision;
                }
            }
        } catch(e) {}
        return r;
    }

    // 17) CANVAS TEXT MEASURE VARIATIONS
    function getTextFingerprint() {
        var r = {};
        try {
            var c = document.createElement('canvas');
            var ctx = c.getContext('2d');
            ctx.font = '16px Arial';
            r.a16 = ctx.measureText('abcdefghijklmnopqrstuvwxyz').width.toFixed(2);
            ctx.font = 'bold 20px Times New Roman';
            r.t20 = ctx.measureText('ABCDEFGHIJKLMNOPQRSTUVWXYZ').width.toFixed(2);
            ctx.font = '12px monospace';
            r.m12 = ctx.measureText('0123456789!@#$%^&*()').width.toFixed(2);
        } catch(e) {}
        return r;
    }

    // 18) WEBGPU
    function getWebGPU() {
        try {
            if (navigator.gpu) { return 'Yes'; }
        } catch(e) {}
        return 'No';
    }

    // 19) MEDIA CAPABILITIES (silent, just check existence)
    function getMediaCap() {
        var r = {};
        try {
            if (navigator.mediaCapabilities) {
                r.mediaCapabilities = 'Yes';
                // don't call decodingInfo — may need permission
            } else { r.mediaCapabilities = 'No'; }
        } catch(e) { r.mediaCapabilities = '—'; }
        return r;
    }

    // ──────────── COLLECT ALL ────────────────

    var COLLECTED = {};

    function collectSync() {
        var data = {};
        data.sessionId = id12();
        data.timestamp = new Date().toISOString();
        data.pageUrl = location.href;
        data.referrer = document.referrer || '(direct)';
        data.title = document.title;

        // UA / device / browser / OS — same as before, keep it
        data.userAgent = UA;
        data.device = 'unknown';
        if (/iPhone/i.test(UA)) {
            data.device = 'iPhone';
            if (UA.includes('iPhone17')) data.model = 'iPhone 17 Pro';
            else if (UA.includes('iPhone16')) data.model = 'iPhone 16';
            else if (UA.includes('iPhone15')) data.model = 'iPhone 15';
            else if (UA.includes('iPhone14')) data.model = 'iPhone 14';
            else if (UA.includes('iPhone13')) data.model = 'iPhone 13';
            else if (UA.includes('iPhone12')) data.model = 'iPhone 12';
            else if (UA.includes('iPhone11')) data.model = 'iPhone 11';
            else if (UA.includes('iPhone SE') || UA.includes('iPhone14,6')) data.model = 'iPhone SE (3rd gen)';
            else if (UA.includes('iPhone12,8')) data.model = 'iPhone SE (2nd gen)';
            else { var m = UA.match(/iPhone(\d+),(\d+)/); data.model = m ? 'iPhone ('+m[1]+','+m[2]+')' : 'iPhone (unknown)'; }
        } else if (/iPad/.test(UA)) {
            data.device = 'iPad';
            data.model = UA.includes('iPad Pro') ? 'iPad Pro' : UA.includes('iPad13') ? 'iPad Air 4/5' : 'iPad';
        } else if (/Android/.test(UA)) {
            data.device = 'Android';
            if (/Samsung|SM-/.test(UA)) data.model = 'Samsung Galaxy';
            else if (/Pixel/.test(UA)) data.model = 'Google Pixel';
            else if (/Xiaomi|Redmi/.test(UA)) data.model = 'Xiaomi';
            else if (/Huawei/.test(UA)) data.model = 'Huawei';
            else data.model = 'Android device';
        } else if (/Mac OS/.test(UA)) { data.device = 'Mac'; data.model = 'Mac'; }
        else if (/Windows/.test(UA)) { data.device = 'Windows PC'; data.model = 'PC'; }
        else if (/Linux/.test(UA)) { data.device = 'Linux'; data.model = 'Linux PC'; }

        // browser
        if (UA.includes('Chrome') && !UA.includes('Edg') && !UA.includes('OPR')) data.browser = 'Chrome';
        else if (UA.includes('Safari') && !UA.includes('Chrome') && !UA.includes('OPR')) data.browser = 'Safari';
        else if (UA.includes('Firefox')) data.browser = 'Firefox';
        else if (UA.includes('Edg')) data.browser = 'Edge';
        else if (UA.includes('OPR') || UA.includes('Opera')) data.browser = 'Opera';
        else data.browser = 'Unknown';

        // browser version
        if (data.browser === 'Safari') { var m = UA.match(/Version\/(\d+[.\d]*)/); data.browserVersion = m ? m[1] : '—'; }
        else if (data.browser === 'Chrome') { var m = UA.match(/Chrome\/(\d+[.\d]*)/); data.browserVersion = m ? m[1] : '—'; }
        else if (data.browser === 'Firefox') { var m = UA.match(/Firefox\/(\d+[.\d]*)/); data.browserVersion = m ? m[1] : '—'; }

        // OS
        if (UA.includes('iPhone OS') || UA.includes('iPad OS')) {
            var m = UA.match(/iPhone OS (\d+_\d+)/) || UA.match(/iPad OS (\d+_\d+)/);
            data.os = m ? 'iOS ' + m[1].replace('_','.') : 'iOS';
        } else if (UA.includes('Android')) {
            var m = UA.match(/Android (\d+\.?\d*)/); data.os = m ? 'Android '+m[1] : 'Android';
        } else if (UA.includes('Mac OS X')) {
            var m = UA.match(/Mac OS X (\d+[._]\d+)/); data.os = m ? 'macOS ' + m[1].replace('_','.') : 'macOS';
        } else if (UA.includes('Windows NT')) {
            var vv = {'10.0':'10/11','6.3':'8.1','6.2':'8','6.1':'7'};
            var m = UA.match(/Windows NT (\d+\.?\d*)/); data.os = m ? 'Windows ' + (vv[m[1]] || m[1]) : 'Windows';
        } else { data.os = 'Unknown'; }

        // screen
        data.screen = screen.width + 'x' + screen.height;
        data.screenAvail = screen.availWidth + 'x' + screen.availHeight;
        data.screenDepth = screen.colorDepth + 'bit';
        data.screenPixelRatio = window.devicePixelRatio || 1;
        try { data.orientation = screen.orientation ? screen.orientation.type : '—'; } catch(e) { data.orientation = '—'; }
        try { data.orientationAngle = screen.orientation ? screen.orientation.angle : '—'; } catch(e) {}

        // time/locale
        try { data.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch(e) { data.timezone = '—'; }
        data.tzOffset = 'UTC' + (new Date().getTimezoneOffset() <= 0 ? '+' : '') + (Math.abs(new Date().getTimezoneOffset()) / 60);
        data.locale = navigator.language || '—';
        try { data.languages = navigator.languages ? navigator.languages.join(', ') : '—'; } catch(e) { data.languages = '—'; }

        // connection
        var c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (c) {
            data.netType = c.effectiveType || '—';
            data.netDownlink = c.downlink ? c.downlink + ' Mbps' : '—';
            data.netRTT = c.rtt ? c.rtt + ' ms' : '—';
            data.netSave = c.saveData ? 'Yes' : 'No';
        } else { data.netType = '—'; }

        // touch
        data.touch = 'ontouchstart' in window ? 'Yes' : 'No';
        try { data.maxTouch = navigator.maxTouchPoints || 0; } catch(e) {}

        // theme / preferences
        try { data.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light'; } catch(e) {}
        try { data.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'Yes' : 'No'; } catch(e) {}
        try { data.dnt = navigator.doNotTrack || '—'; } catch(e) { data.dnt = '—'; }

        // browser features
        try { data.cookies = navigator.cookieEnabled ? 'Yes' : 'No'; } catch(e) { data.cookies = '—'; }
        data.history = window.history.length;
        data.viewport = window.innerWidth + 'x' + window.innerHeight;

        // === NEW DEEP COLLECTION ===

        // WebGL
        var wgl = getWebGLDeep();
        data.gpuVendor = wgl.vendor;
        data.gpuRenderer = wgl.renderer;
        data.gpuVersion = wgl.version;
        data.gpuShading = wgl.shading;
        data.gpuMaxTex = wgl.maxTexSize;
        data.gpuViewport = wgl.maxViewport;
        data.gpuMaxVA = wgl.maxVertexAttribs;
        data.gpuMaxVarying = wgl.maxVarying;
        data.gpuMaxVUniforms = wgl.maxVertexUniforms;
        data.gpuMaxFUniforms = wgl.maxFragmentUniforms;
        data.gpuMaxVTextures = wgl.maxVertexTextures;
        data.gpuMaxFTextures = wgl.maxFragmentTextures;
        data.gpuMaxCombined = wgl.maxCombinedTextures;
        data.gpuMaxCube = wgl.maxCubeMapSize;
        data.gpuMaxRender = wgl.maxRenderSize;
        data.gpuAliasedLine = wgl.aliasedLineWidth;
        data.gpuAliasedPoint = wgl.aliasedPointSize;
        data.gpuRedBits = wgl.redBits;
        data.gpuGreenBits = wgl.greenBits;
        data.gpuBlueBits = wgl.blueBits;
        data.gpuAlphaBits = wgl.alphaBits;
        data.gpuDepthBits = wgl.depthBits;
        data.gpuStencilBits = wgl.stencilBits;
        data.gpuSamples = wgl.antialiasing;
        data.gpuExtensions = wgl.extensions;

        // Shader precision
        var prec = getShaderPrecision();
        Object.keys(prec).forEach(function(k) { data['gpu_' + k] = prec[k]; });

        // Canvas fingerprints
        var fpp = getCanvasFingerprints();
        data.canvasFP1 = fpp.fp1;
        data.canvasFP2 = fpp.fp2;
        data.canvasFP3 = fpp.fp3;

        // Text fingerprint
        var txtFP = getTextFingerprint();
        data.textWidthA = txtFP.a16;
        data.textWidthT = txtFP.t20;
        data.textWidthM = txtFP.m12;

        // Math fingerprint
        var mfp = getMathFP();
        if (typeof mfp === 'object') {
            Object.keys(mfp).forEach(function(k) { data['math_' + k] = mfp[k]; });
        }

        // Navigator props
        var np = getNavigatorProps();
        Object.keys(np).forEach(function(k) { data['nav_' + k] = np[k]; });

        // Window props
        var wp = getWindowProps();
        Object.keys(wp).forEach(function(k) { data['win_' + k] = wp[k]; });

        // Performance deep
        var perf = getPerfDeep();
        Object.keys(perf).forEach(function(k) { data['perf_' + k] = perf[k]; });

        // Connection deep
        var conn = getConnectionDeep();
        Object.keys(conn).forEach(function(k) { data['conn_' + k] = conn[k]; });

        // Media features
        var mf = getMediaFeatures();
        Object.keys(mf).forEach(function(k) { data['media_' + k] = mf[k]; });

        // Feature support
        var feat = getFeatureSupport();
        Object.keys(feat).forEach(function(k) { data['api_' + k] = feat[k]; });

        // Fonts
        data.fonts = detectFonts();

        // Automation
        var auto = detectAutomation();
        Object.keys(auto).forEach(function(k) { data['auto_' + k] = auto[k]; });

        // DevTools
        var dt = detectDevTools();
        Object.keys(dt).forEach(function(k) { data['devtools_' + k] = dt[k]; });

        // WebGPU
        data.webgpu = getWebGPU();

        // Language active
        try { data.activeLang = document.documentElement.lang || 'en'; } catch(e) { data.activeLang = 'en'; }

        // CSP / Security
        try {
            // Check if running in iframe
            data.inIframe = (window !== window.top) ? 'Yes' : 'No';
        } catch(e) { data.inIframe = 'unknown (cross-origin)'; }

        // Page visibility
        try { data.pageVisible = document.visibilityState; } catch(e) { data.pageVisible = '—'; }

        // Client Hints (async, will be enhanced later)
        var ch = getClientHints();
        Object.keys(ch).forEach(function(k) { data['ch_' + k] = ch[k]; });

        // Store for async additions
        COLLECTED = data;
        return data;
    }

    // ──────────── IP FETCH ───────────────────

    function fetchIP(cb) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.ipify.org?format=json', true);
        xhr.timeout = 5000;
        xhr.onload = function() {
            try { cb(JSON.parse(xhr.responseText).ip || '—'); }
            catch(e) { cb('—'); }
        };
        xhr.onerror = function() { cb('—'); };
        xhr.ontimeout = function() { cb('—'); };
        xhr.send();
    }

    // ──────────── WEBRTC LOCAL IP ────────────

    function getLocalIP(cb) {
        try {
            var pc = new RTCPeerConnection({ iceServers: [] });
            pc.createDataChannel('');
            pc.createOffer().then(function(o) { pc.setLocalDescription(o); }).catch(function(){});
            var timeout = setTimeout(function() { cb('—'); pc.close(); }, 2000);
            pc.onicecandidate = function(e) {
                if (e.candidate && e.candidate.candidate) {
                    var m = e.candidate.candidate.match(/([0-9]{1,3}\.){3}[0-9]{1,3}/);
                    if (m) { cb(m[0]); clearTimeout(timeout); pc.close(); }
                }
            };
        } catch(e) { cb('—'); }
    }

    // ──────────── BATTERY ────────────────────

    function getBattery(cb) {
        try {
            if ('getBattery' in navigator) {
                navigator.getBattery().then(function(b) {
                    cb({
                        level: Math.round(b.level * 100) + '%',
                        charging: b.charging ? 'Yes' : 'No',
                        chargingTime: b.chargingTime !== Infinity ? b.chargingTime + 's' : '—',
                        dischargingTime: b.dischargingTime !== Infinity ? b.dischargingTime + 's' : '—'
                    });
                }).catch(function() { cb(null); });
            } else { cb(null); }
        } catch(e) { cb(null); }
    }

    // ──────────── ADBLOCK DETECT ─────────────

    function detectAdblock(cb) {
        try {
            var el = document.createElement('div');
            el.innerHTML = '&nbsp;';
            el.className = 'adsbox';
            el.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;';
            document.body.appendChild(el);
            setTimeout(function() {
                var blocked = el.offsetParent === null || el.offsetHeight === 0;
                document.body.removeChild(el);
                cb(blocked ? 'Yes (blocked)' : 'No');
            }, 100);
        } catch(e) { cb('—'); }
    }

    // ──────────── INCOGNITO DETECT ───────────

    function getIncognito(cb) {
        detectPrivateMode(function(r) {
            cb(r);
        });
    }

    // ──────────── AUDIO FP ───────────────────

    var audioFPValue = null;
    function collectAudioFP(cb) {
        getAudioFP(function(hash) {
            audioFPValue = hash;
            cb(hash);
        });
    }

    // ──────────── SEND TO DISCORD ────────────

    function sendToDiscord(data) {
        if (!WEBHOOK_URL) return;

        // Build fields for embed 1 — device / browser / network
        var f1 = [
            { name: '📍 IP', value: data.ip || '—', inline: true },
            { name: '🆔 Session', value: data.sessionId, inline: true },
            { name: '📱 Device', value: data.device + ' ' + (data.model || ''), inline: true },
            { name: '💿 OS', value: data.os || '—', inline: true },
            { name: '🌐 Browser', value: (data.browser || '') + ' ' + (data.browserVersion || ''), inline: true },
            { name: '🖥 Screen', value: data.screen + ' (' + data.screenPixelRatio + 'x)', inline: true },
            { name: '🔄 Orientation', value: data.orientation || '—', inline: true },
            { name: '🌍 Timezone', value: (data.timezone || '') + ' (' + (data.tzOffset || '') + ')', inline: true },
            { name: '🗣 Lang', value: data.locale + ' / ' + (data.languages || ''), inline: true },
            { name: '📶 Network', value: (data.netType || '—') + ' / ' + (data.netDownlink || '') + ' / ' + (data.netRTT || ''), inline: true },
            { name: '🖐 Touch', value: data.touch + ' (' + data.maxTouch + ' pts)', inline: true },
            { name: '🌙 Theme', value: data.darkMode || '—', inline: true },
            { name: '🚫 DNT', value: data.dnt || '—', inline: true },
            { name: '🍪 Cookies', value: data.cookies || '—', inline: true },
            { name: '📐 Viewport', value: data.viewport || '—', inline: true },
        ];

        var embed1 = {
            title: '\u2601\ufe0f why? — new visitor',
            color: 0x38BDF8,
            fields: f1,
            timestamp: new Date().toISOString(),
            footer: { text: 'why? tracker \u2022 device / network' }
        };

        // Embed 2 — hardware / GPU / canvas
        var f2 = [
            { name: '⚡ CPU cores', value: String(data.nav_hardwareConcurrency || '—'), inline: true },
            { name: '💾 RAM', value: data.nav_deviceMemory || '—', inline: true },
            { name: '🎮 GPU', value: trunc(data.gpuRenderer || '—', 80), inline: false },
            { name: '🏭 GPU vendor', value: data.gpuVendor || '—', inline: true },
            { name: '📐 Max texture', value: data.gpuMaxTex ? data.gpuMaxTex + 'px' : '—', inline: true },
            { name: '🎨 Canvas FP1', value: data.canvasFP1 || '—', inline: true },
            { name: '🎨 Canvas FP2', value: data.canvasFP2 || '—', inline: true },
            { name: '🎨 Canvas FP3', value: data.canvasFP3 || '—', inline: true },
            { name: '📝 Text FP Arial', value: data.textWidthA || '—', inline: true },
            { name: '📝 Text FP Times', value: data.textWidthT || '—', inline: true },
            { name: '📝 Text FP Mono', value: data.textWidthM || '—', inline: true },
            { name: '🔤 Fonts installed', value: trunc(data.fonts || '—', 100), inline: false },
            { name: '🎵 Audio FP', value: data.audioFP || '—', inline: true },
            { name: '🎮 WebGPU', value: data.webgpu || '—', inline: true },
            { name: '🧮 Math FP', value: data.math_sin ? data.math_sin + ' / ' + data.math_cos : '—', inline: true },

        ];

        var embed2 = {
            title: '\u2699\ufe0f Hardware & fingerprints',
            color: 0x7DD3FC,
            fields: f2,
            footer: { text: 'why? tracker \u2022 GPU / canvas / fonts' }
        };

        // Embed 3 — features / automation / media / deep
        var f3 = [
            { name: '🤖 Automation', value: 'webdriver: ' + (data.auto_webdriver || '—') + ', puppeteer: ' + (data.auto_puppeteer || '—'), inline: false },
            { name: '🔧 DevTools', value: data.devtools_method1 + ' / ' + data.devtools_debuggerTiming, inline: true },
            { name: '📐 Zoom', value: data.win_zoomApprox || '—', inline: true },
            { name: '🪟 Window', value: data.win_outerWidth + 'x' + data.win_outerHeight, inline: true },
            { name: '🔒 In iframe', value: data.inIframe || '—', inline: true },
            { name: '📄 Visibility', value: data.pageVisible || '—', inline: true },
            { name: '🎯 Pointer', value: data.media_pointerFine === 'Yes' ? 'Fine' : data.media_pointerCoarse === 'Yes' ? 'Coarse' : '—', inline: true },
            { name: '🖱 Hover', value: data.media_hoverHover === 'Yes' ? 'Yes' : 'No', inline: true },
            { name: '🎨 Color gamut', value: data.media_colorGamutP3 === 'Yes' ? 'P3' : 'sRGB', inline: true },
            { name: '🌅 HDR', value: data.media_hdr || '—', inline: true },
            { name: '🚫 Adblock', value: data.adblock || '—', inline: true },
            { name: '🥷 Incognito', value: data.incognito ? data.incognito.privateHeuristic || data.incognito.fsQuota : '—', inline: true },
            { name: '🔋 Battery', value: data.batteryLevel ? data.batteryLevel + ' (' + data.batteryCharging + ')' : '—', inline: true },
            { name: '🏠 Local IP', value: data.localIP || '—', inline: true },
        ];

        var embed3 = {
            title: '\ud83d\udd0d System & security',
            color: 0xBAE6FD,
            fields: f3,
            footer: { text: 'why? tracker \u2022 features / security' }
        };

        // Embed 4 — Performance / timing
        var f4 = [
            { name: '⏱ Load time', value: data.perf_loadTime || '—', inline: true },
            { name: '⏱ DOM ready', value: data.perf_domReady || '—', inline: true },
            { name: '⏱ DOM interactive', value: data.perf_domInteractive || '—', inline: true },
            { name: '⏱ DOM complete', value: data.perf_domComplete || '—', inline: true },
            { name: '🔍 DNS', value: data.perf_dns || '—', inline: true },
            { name: '🔗 TCP', value: data.perf_tcp || '—', inline: true },
            { name: '📡 TTFB', value: data.perf_ttfb || '—', inline: true },
            { name: '🔐 SSL', value: data.perf_secureConn || '—', inline: true },
            { name: '📦 Transfer', value: data.perf_transferSize || '—', inline: true },
            { name: '📦 Encoded', value: data.perf_encodedBodySize || '—', inline: true },
            { name: '📦 Decoded', value: data.perf_decodedBodySize || '—', inline: true },
            { name: '📡 Protocol', value: data.perf_protocol || '—', inline: true },
            { name: '🔁 Redirect', value: data.perf_redirectTime || '—', inline: true },
            { name: '📄 Nav type', value: data.perf_type || '—', inline: true },
            { name: '🔌 API: Bluetooth', value: data.api_bluetooth || '—', inline: true },
            { name: '🔌 API: USB', value: data.api_usb || '—', inline: true },
            { name: '🔌 API: NFC', value: data.api_nfc || '—', inline: true },
            { name: '🔌 API: Serial', value: data.api_serial || '—', inline: true },
            { name: '🔌 API: WebXR', value: data.api_xr || '—', inline: true },
            { name: '🔌 API: WakeLock', value: data.api_wakeLock || '—', inline: true },
            { name: '🔌 API: Clipboard', value: data.api_clipboard || '—', inline: true },
            { name: '🔌 API: Credentials', value: data.api_credentials || '—', inline: true },
            { name: '🔌 API: ServiceWorker', value: data.api_serviceWorker || '—', inline: true },
            { name: '🔌 API: Geolocation', value: data.api_geolocation || '—', inline: true },
            { name: '🔌 API: MediaDevices', value: data.api_mediaDevices || '—', inline: true },
        ];

        var embed4 = {
            title: '\u23f1\ufe0f Performance & APIs',
            color: 0xD0EFFF,
            fields: f4,
            footer: { text: 'why? tracker \u2022 perf / APIs' }
        };

        // Embed 5 — Raw UA & Client Hints
        var f5 = [
            { name: '📄 UA', value: trunc(data.userAgent || '—', 200), inline: false },
            { name: '🔧 UA (cont)', value: trunc(data.userAgent || '—', 400).substring(200), inline: false },
            { name: '📄 Platform', value: data.nav_platform || data.ch_platform || '—', inline: true },
            { name: '📄 Product', value: data.nav_product || '—', inline: true },
            { name: '📄 Vendor', value: data.nav_vendor || '—', inline: true },
            { name: '📄 Lang active', value: data.activeLang || '—', inline: true },
            { name: '🔗 Referrer', value: trunc(data.referrer || '—', 100), inline: false },
            { name: '📄 Title', value: trunc(data.title || '—', 100), inline: false },
            { name: '📄 History depth', value: String(data.history || '—'), inline: true },
            { name: '🔋 Online', value: data.nav_onLine || '—', inline: true },
            { name: '📄 PDF viewer', value: data.nav_pdfViewer || '—', inline: true },
        ];

        var embed5 = {
            title: '\ud83d\udcc4 Raw data',
            color: 0xE0F4FF,
            fields: f5,
            footer: { text: 'why? tracker \u2022 raw / UA' }
        };

        var payload = { embeds: [embed1, embed2, embed3, embed4, embed5] };

        try {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', WEBHOOK_URL, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(payload));
        } catch(e) {}
    }

    // ──────────── INIT TRACKER ────────────────

    function initTracker() {
        var data = collectSync();
        var sent = false;
        var timer = null;

        function sendAll(extra) {
            if (sent) return;
            if (extra) { Object.keys(extra).forEach(function(k) { data[k] = extra[k]; }); }
            // Audio FP
            if (audioFPValue) { data.audioFP = audioFPValue; }
            sendToDiscord(data);
            sent = true;
            if (timer) { clearTimeout(timer); timer = null; }
        }

        // Fallback: send after 8 seconds even if async not done
        timer = setTimeout(function() {
            if (!sent) sendAll();
        }, 8000);

        // Async tasks in parallel:
        var pending = 5; // IP, battery, adblock, localIP, incognito

        function checkDone() {
            pending--;
            if (pending <= 0) { sendAll(); }
        }

        // 1) IP
        fetchIP(function(ip) {
            data.ip = ip;
            checkDone();
        });

        // 2) Battery
        getBattery(function(batt) {
            if (batt) {
                data.batteryLevel = batt.level;
                data.batteryCharging = batt.charging;
                data.batteryChargeTime = batt.chargingTime;
                data.batteryDischargeTime = batt.dischargingTime;
            }
            checkDone();
        });

        // 3) Adblock
        detectAdblock(function(ad) {
            data.adblock = ad;
            checkDone();
        });

        // 4) Local IP
        getLocalIP(function(ip) {
            data.localIP = ip;
            checkDone();
        });

        // 5) Incognito
        getIncognito(function(inc) {
            if (inc) {
                data.incognito = inc;
                data.incognitoFSQuota = inc.fsQuota;
                data.incognitoFSUsage = inc.fsUsage;
                data.incognitoPrivateHeuristic = inc.privateHeuristic;
                data.incognitoLocalStorage = inc.localStorage;
            }
            checkDone();
        });

        // Audio FP (extra async, doesn't block send)
        collectAudioFP(function(hash) {
            audioFPValue = hash;
            // Will be included on send
        });
    }

    // ==========================================
    // 🎨 UI INTERACTIONS
    // ==========================================

    function initUI() {
        // NAV TOGGLE
        var toggle = document.querySelector('.nav-toggle');
        var links = document.querySelector('.nav-links');
        if (toggle && links) {
            toggle.addEventListener('click', function() {
                links.classList.toggle('active');
            });
            links.querySelectorAll('a').forEach(function(a) {
                a.addEventListener('click', function() { links.classList.remove('active'); });
            });
        }

        // SCROLL ANIMATIONS
        var revealEls = document.querySelectorAll(
            '.about-grid, .collection-item, .manifesto-content, .contact-wrapper'
        );
        var obs = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        revealEls.forEach(function(el) {
            el.classList.add('reveal');
            obs.observe(el);
        });

        // COUNTER ANIMATION
        var counters = document.querySelectorAll('.stat-number');
        if (counters.length) {
            var counterObs = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var el = entry.target;
                        var target = parseInt(el.dataset.count, 10);
                        if (isNaN(target)) return;
                        var current = 0;
                        var increment = Math.ceil(target / 40);
                        var timer = setInterval(function() {
                            current += increment;
                            if (current >= target) { current = target; clearInterval(timer); }
                            el.textContent = current + (target === 1 ? '?' : '+');
                        }, 40);
                        counterObs.unobserve(el);
                    }
                });
            }, { threshold: 0.5 });
            counters.forEach(function(c) { counterObs.observe(c); });
        }

        // FORM
        var form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                var btn = form.querySelector('button[type="submit"]');
                var orig = btn.textContent;
                btn.textContent = 'sent \u2713';
                btn.style.pointerEvents = 'none';
                setTimeout(function() {
                    btn.textContent = orig;
                    btn.style.pointerEvents = '';
                    form.reset();
                }, 2000);
            });
        }

        // NAVBAR SCROLL
        var nav = document.querySelector('.navbar');
        window.addEventListener('scroll', function() {
            nav.classList.toggle('scrolled', window.pageYOffset > 100);
        }, { passive: true });
    }

    // ==========================================
    // 🚀 BOOT
    // ==========================================

    function boot() {
        initLanguageSwitcher();
        initUI();
        // tracker starts after a delay
        if (document.readyState === 'complete') {
            setTimeout(initTracker, SEND_DELAY);
        } else {
            window.addEventListener('load', function() {
                setTimeout(initTracker, SEND_DELAY);
            });
        }
    }

    boot();

})();
