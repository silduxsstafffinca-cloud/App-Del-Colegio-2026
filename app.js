// ===================== SCHEDULE DATA =====================
const TIMEZONE = 'America/Costa_Rica';

const DAYS_ES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const DAYS_SHORT = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

// Subject color mapping
const SUBJECT_COLORS = {
    'ListSpeak /ReadWrit': 'var(--clr-english)',
    'ReadWrit/ListSpeak': 'var(--clr-english)',
    'Español': 'var(--clr-spanish)',
    'Estudios Sociales': 'var(--clr-sociales)',
    'Matemáticas': 'var(--clr-math)',
    'Biología': 'var(--clr-science)',
    'Física': 'var(--clr-physics)',
    'Química': 'var(--clr-chemistry)',
    'Religión': 'var(--clr-religion)',
    'Artes Plásticas': 'var(--clr-arts)',
    'Música': 'var(--clr-music)',
    'Cívica': 'var(--clr-civica)',
    'Mantenimiento Comp': 'var(--clr-comp)',
    'Educ. Física': 'var(--clr-pe)',
    'Literat Leng Inglesa': 'var(--clr-english)',
    'Guía': 'var(--clr-guia)',
    'Afectividad y Sexualidad': 'var(--clr-afect)',
    'LIBRE': 'var(--clr-libre)',
};

// English subjects (for motivational phrases)
const ENGLISH_SUBJECTS = ['ListSpeak /ReadWrit', 'ReadWrit/ListSpeak', 'Literat Leng Inglesa'];

// Motivational phrases for English classes
const MOTIVATION_PHRASES = [
    '💪 "The only way to do great work is to love what you do." — Steve Jobs',
    '🌟 "Believe you can and you\'re halfway there." — Theodore Roosevelt',
    '🚀 "Success is not final, failure is not fatal: it is the courage to continue that counts." — Winston Churchill',
    '📚 "The more that you read, the more things you will know." — Dr. Seuss',
    '🔥 "Don\'t watch the clock; do what it does. Keep going." — Sam Levenson',
    '🎯 "You are never too old to set another goal or to dream a new dream." — C.S. Lewis',
    '✨ "Every expert was once a beginner." — Helen Hayes',
    '🌈 "Learning another language is like becoming another person." — Haruki Murakami',
    '💎 "The limits of my language mean the limits of my world." — Ludwig Wittgenstein',
    '🦋 "One language sets you in a corridor for life. Two languages open every door along the way." — Frank Smith',
    '🏆 "It always seems impossible until it\'s done." — Nelson Mandela',
    '🌍 "To have another language is to possess a second soul." — Charlemagne',
    '⭐ "You don\'t have to be perfect to be amazing."',
    '🎓 "Education is the passport to the future." — Malcolm X',
    '💡 "A different language is a different vision of life." — Federico Fellini',
    '🌱 "Small steps every day lead to big results."',
    '🔑 "English is the key that opens doors to the world."',
    '🎯 "Practice makes progress, not perfection."',
    '💪 "You are doing amazing! Keep pushing forward!"',
    '🌟 "Every word you learn is a step closer to fluency!"',
];

// School Calendar Events (MEP Costa Rica 2026)
const SCHOOL_EVENTS = [
    { date: '2026-02-23', name: 'Inicio de Lecciones', emoji: '🏫', type: 'academic', description: 'Primer día del curso lectivo 2026' },
    { date: '2026-03-29', endDate: '2026-04-05', name: 'Semana Santa (Receso)', emoji: '✝️', type: 'vacation', description: 'Receso de Semana Santa' },
    { date: '2026-04-11', name: 'Día de Juan Santamaría', emoji: '🇨🇷', type: 'holiday', description: 'Batalla de Rivas - Feriado Nacional' },
    { date: '2026-05-01', name: 'Día del Trabajo', emoji: '💪', type: 'holiday', description: 'Día Internacional del Trabajo - Feriado' },
    { date: '2026-07-03', name: 'Fin del I Periodo', emoji: '📋', type: 'academic', description: 'Último día del primer periodo lectivo' },
    { date: '2026-07-06', endDate: '2026-07-17', name: 'Vacaciones de Medio Periodo', emoji: '🏖️', type: 'vacation', description: 'Dos semanas de descanso entre periodos' },
    { date: '2026-07-20', name: 'Inicio del II Periodo', emoji: '📚', type: 'academic', description: 'Primer día del segundo periodo lectivo' },
    { date: '2026-09-15', name: 'Día de la Independencia', emoji: '🇨🇷', type: 'holiday', description: 'Independencia de Costa Rica - Semana Cívica' },
    { date: '2026-12-09', name: 'Finalización de Lecciones', emoji: '🎉', type: 'academic', description: 'Último día del curso lectivo 2026' },
    { date: '2026-12-10', endDate: '2026-12-11', name: 'Actos de Graduación', emoji: '🎓', type: 'graduation', description: 'Ceremonia de graduación del curso lectivo' },
];

// School year dates for progress calculation
const SCHOOL_YEAR_START = new Date('2026-02-23T00:00:00');
const SCHOOL_YEAR_END = new Date('2026-12-09T00:00:00');

// Full schedule: schedule[dayIndex] where 1=Monday ... 5=Friday
// Each item: { lesson, start, end, subject, teacher, type }
// type: 'class' | 'break' | 'lunch'
const SCHEDULE = {
    1: [ // LUNES
        { lesson: 1, start: '7:00', end: '7:40', subject: 'ListSpeak /ReadWrit', teacher: 'Adriana H. / Orieta C.', type: 'class' },
        { lesson: 2, start: '7:40', end: '8:20', subject: 'ListSpeak /ReadWrit', teacher: 'Adriana H. / Orieta C.', type: 'class' },
        { start: '8:20', end: '8:40', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 10 min' },
        { lesson: 3, start: '8:40', end: '9:20', subject: 'ListSpeak /ReadWrit', teacher: 'Adriana H. / Orieta C.', type: 'class' },
        { lesson: 4, start: '9:20', end: '10:00', subject: 'Estudios Sociales', teacher: 'Lorian Delgado', type: 'class' },
        { start: '10:00', end: '10:05', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 5 min' },
        { lesson: 5, start: '10:05', end: '10:45', subject: 'Estudios Sociales', teacher: 'Lorian Delgado', type: 'class' },
        { lesson: 6, start: '10:45', end: '11:25', subject: 'Estudios Sociales', teacher: 'Lorian Delgado', type: 'class' },
        { start: '11:25', end: '12:15', subject: 'Almuerzo', teacher: '', type: 'lunch', label: 'ALMUERZO · 50 min' },
        { lesson: 7, start: '12:15', end: '12:55', subject: 'Español', teacher: 'Meylin Rod.', type: 'class' },
        { lesson: 8, start: '12:55', end: '13:35', subject: 'Español', teacher: 'Meylin Rod.', type: 'class' },
        { start: '13:35', end: '13:40', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 5 min' },
        { lesson: 9, start: '13:40', end: '14:20', subject: 'Mantenimiento Comp', teacher: 'Grettel Arias / Arnoldo A.', type: 'class' },
        { lesson: 10, start: '14:20', end: '15:00', subject: 'Mantenimiento Comp', teacher: 'Grettel Arias / Arnoldo A.', type: 'class' },
        { start: '15:00', end: '15:10', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 10 min' },
        { lesson: 11, start: '15:10', end: '15:50', subject: 'Mantenimiento Comp', teacher: 'Grettel Arias / Arnoldo A.', type: 'class' },
        { lesson: 12, start: '15:50', end: '16:30', subject: 'Mantenimiento Comp', teacher: 'Grettel Arias / Arnoldo A.', type: 'class' },
    ],
    2: [ // MARTES
        { lesson: 1, start: '7:00', end: '7:40', subject: 'Español', teacher: 'Meylin Rod.', type: 'class' },
        { lesson: 2, start: '7:40', end: '8:20', subject: 'Español', teacher: 'Meylin Rod.', type: 'class' },
        { start: '8:20', end: '8:40', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 10 min' },
        { lesson: 3, start: '8:40', end: '9:20', subject: 'Español', teacher: 'Meylin Rod.', type: 'class' },
        { lesson: 4, start: '9:20', end: '10:00', subject: 'ReadWrit/ListSpeak', teacher: 'Orieta C. / Adriana H.', type: 'class' },
        { start: '10:00', end: '10:05', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 5 min' },
        { lesson: 5, start: '10:05', end: '10:45', subject: 'ReadWrit/ListSpeak', teacher: 'Orieta C. / Adriana H.', type: 'class' },
        { lesson: 6, start: '10:45', end: '11:25', subject: 'ReadWrit/ListSpeak', teacher: 'Orieta C. / Adriana H.', type: 'class' },
        { start: '11:25', end: '12:15', subject: 'Almuerzo', teacher: '', type: 'lunch', label: 'ALMUERZO · 50 min' },
        { lesson: 7, start: '12:15', end: '12:55', subject: 'Matemáticas', teacher: 'Yendry Nuñez', type: 'class' },
        { lesson: 8, start: '12:55', end: '13:35', subject: 'Matemáticas', teacher: 'Yendry Nuñez', type: 'class' },
        { start: '13:35', end: '13:40', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 5 min' },
        { lesson: 9, start: '13:40', end: '14:20', subject: 'Cívica', teacher: 'Lorian Delgado', type: 'class' },
        { lesson: 10, start: '14:20', end: '15:00', subject: 'Cívica', teacher: 'Lorian Delgado', type: 'class' },
        { start: '15:00', end: '15:10', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 10 min' },
        { lesson: 11, start: '15:10', end: '15:50', subject: 'Física', teacher: 'Cindy Rodríguez', type: 'class' },
        { lesson: 12, start: '15:50', end: '16:30', subject: 'Física', teacher: 'Cindy Rodríguez', type: 'class' },
    ],
    3: [ // MIÉRCOLES
        { lesson: 1, start: '7:00', end: '7:40', subject: 'Estudios Sociales', teacher: 'Lorian Delgado', type: 'class' },
        { lesson: 2, start: '7:40', end: '8:20', subject: 'Estudios Sociales', teacher: 'Lorian Delgado', type: 'class' },
        { start: '8:20', end: '8:40', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 10 min' },
        { lesson: 3, start: '8:40', end: '9:20', subject: 'Biología', teacher: 'Daniel Ortega', type: 'class' },
        { lesson: 4, start: '9:20', end: '10:00', subject: 'Biología', teacher: 'Daniel Ortega', type: 'class' },
        { start: '10:00', end: '10:05', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 5 min' },
        { lesson: 5, start: '10:05', end: '10:45', subject: 'Literat Leng Inglesa', teacher: 'Wendoly Zuñiga', type: 'class' },
        { lesson: 6, start: '10:45', end: '11:25', subject: 'Literat Leng Inglesa', teacher: 'Wendoly Zuñiga', type: 'class' },
        { start: '11:25', end: '12:15', subject: 'Almuerzo', teacher: '', type: 'lunch', label: 'ALMUERZO · 50 min' },
        { lesson: 7, start: '12:15', end: '12:55', subject: 'ListSpeak /ReadWrit', teacher: 'Adriana H. / Orieta C.', type: 'class' },
        { lesson: 8, start: '12:55', end: '13:35', subject: 'ListSpeak /ReadWrit', teacher: 'Adriana H. / Orieta C.', type: 'class' },
        { start: '13:35', end: '13:40', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 5 min' },
        { lesson: 9, start: '13:40', end: '14:20', subject: 'Matemáticas', teacher: 'Yendry Nuñez', type: 'class' },
        { lesson: 10, start: '14:20', end: '15:00', subject: 'Matemáticas', teacher: 'Yendry Nuñez', type: 'class' },
        { start: '15:00', end: '15:10', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 10 min' },
        { lesson: 11, start: '15:10', end: '15:50', subject: 'Guía', teacher: 'Sala de reuniones', type: 'class' },
        { lesson: 12, start: '15:50', end: '16:30', subject: 'Afectividad y Sexualidad', teacher: '', type: 'class' },
    ],
    4: [ // JUEVES
        { lesson: 1, start: '7:00', end: '7:40', subject: 'Física', teacher: 'Cindy Rodríguez', type: 'class' },
        { lesson: 2, start: '7:40', end: '8:20', subject: 'Física', teacher: 'Cindy Rodríguez', type: 'class' },
        { start: '8:20', end: '8:40', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 10 min' },
        { lesson: 3, start: '8:40', end: '9:20', subject: 'Matemáticas', teacher: 'Yendry Nuñez', type: 'class' },
        { lesson: 4, start: '9:20', end: '10:00', subject: 'Religión', teacher: 'Daniela Morales', type: 'class' },
        { start: '10:00', end: '10:05', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 5 min' },
        { lesson: 5, start: '10:05', end: '10:45', subject: 'Artes Plásticas', teacher: 'Pamela Vargas', type: 'class' },
        { lesson: 6, start: '10:45', end: '11:25', subject: 'Música', teacher: 'Mariano Herrera', type: 'class' },
        { start: '11:25', end: '12:15', subject: 'Almuerzo', teacher: '', type: 'lunch', label: 'ALMUERZO · 50 min' },
        { lesson: 7, start: '12:15', end: '12:55', subject: 'ReadWrit/ListSpeak', teacher: 'Orieta C. / Adriana H.', type: 'class' },
        { lesson: 8, start: '12:55', end: '13:35', subject: 'ReadWrit/ListSpeak', teacher: 'Orieta C. / Adriana H.', type: 'class' },
        { start: '13:35', end: '13:40', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 5 min' },
        { lesson: 9, start: '13:40', end: '14:20', subject: 'Química', teacher: 'Gustavo Chaves', type: 'class' },
        { lesson: 10, start: '14:20', end: '15:00', subject: 'Química', teacher: 'Gustavo Chaves', type: 'class' },
        { start: '15:00', end: '15:10', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 10 min' },
        { lesson: 11, start: '15:10', end: '15:50', subject: 'LIBRE', teacher: '', type: 'class' },
        { lesson: 12, start: '15:50', end: '16:30', subject: 'LIBRE', teacher: '', type: 'class' },
    ],
    5: [ // VIERNES
        { lesson: 1, start: '7:00', end: '7:40', subject: 'Educ. Física', teacher: 'Mario Ven. / Gustavo M.', type: 'class' },
        { lesson: 2, start: '7:40', end: '8:20', subject: 'Educ. Física', teacher: 'Mario Ven. / Gustavo M.', type: 'class' },
        { start: '8:20', end: '8:40', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 10 min' },
        { lesson: 3, start: '8:40', end: '9:20', subject: 'Literat Leng Inglesa', teacher: 'Wendoly Zuñiga', type: 'class' },
        { lesson: 4, start: '9:20', end: '10:00', subject: 'Literat Leng Inglesa', teacher: 'Wendoly Zuñiga', type: 'class' },
        { start: '10:00', end: '10:05', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 5 min' },
        { lesson: 5, start: '10:05', end: '10:45', subject: 'Biología', teacher: 'Daniel Ortega', type: 'class' },
        { lesson: 6, start: '10:45', end: '11:25', subject: 'Biología', teacher: 'Daniel Ortega', type: 'class' },
        { start: '11:25', end: '12:15', subject: 'Almuerzo', teacher: '', type: 'lunch', label: 'ALMUERZO · 50 min' },
        { lesson: 7, start: '12:15', end: '12:55', subject: 'Química', teacher: 'Gustavo Chaves', type: 'class' },
        { lesson: 8, start: '12:55', end: '13:35', subject: 'Química', teacher: 'Gustavo Chaves', type: 'class' },
        { start: '13:35', end: '13:40', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 5 min' },
        { lesson: 9, start: '13:40', end: '14:20', subject: 'LIBRE', teacher: '', type: 'class' },
        { lesson: 10, start: '14:20', end: '15:00', subject: 'LIBRE', teacher: '', type: 'class' },
        { start: '15:00', end: '15:10', subject: 'Receso', teacher: '', type: 'break', label: 'RECESO · 10 min' },
        { lesson: 11, start: '15:10', end: '15:50', subject: 'LIBRE', teacher: '', type: 'class' },
        { lesson: 12, start: '15:50', end: '16:30', subject: 'LIBRE', teacher: '', type: 'class' },
    ],
};

// ===================== UTILITY FUNCTIONS =====================

function getNow() {
    return new Date(new Date().toLocaleString('en-US', { timeZone: TIMEZONE }));
}

function parseTime(timeStr) {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
}

function formatTime12(timeStr) {
    const [h, m] = timeStr.split(':').map(Number);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${h12}:${String(m).padStart(2, '0')} ${ampm}`;
}

function getSubjectColor(subject) {
    return SUBJECT_COLORS[subject] || 'var(--clr-libre)';
}

function getSubjectKey(subject, dayIndex, lessonNum) {
    return `${dayIndex}-${lessonNum}-${subject}`;
}

// ===================== NOTES SYSTEM =====================

function getNotes() {
    try {
        return JSON.parse(localStorage.getItem('horario_notes') || '{}');
    } catch {
        return {};
    }
}

function saveNotes(notes) {
    localStorage.setItem('horario_notes', JSON.stringify(notes));
}

function getNotesForKey(key) {
    const notes = getNotes();
    return notes[key] || [];
}

function addNote(key, text) {
    const notes = getNotes();
    if (!notes[key]) notes[key] = [];
    notes[key].push({ id: Date.now(), text, created: new Date().toISOString() });
    saveNotes(notes);
}

function deleteNote(key, noteId) {
    const notes = getNotes();
    if (notes[key]) {
        notes[key] = notes[key].filter(n => n.id !== noteId);
        if (notes[key].length === 0) delete notes[key];
        saveNotes(notes);
    }
}

function countNotesForKey(key) {
    return getNotesForKey(key).length;
}

// ===================== STATE =====================

let selectedDay = null;
let currentModalKey = null;
let updateInterval = null;
let currentView = 'schedule'; // 'schedule' | 'notes' | 'events'
let lastMotivationIndex = -1;
let notifiedBreaks = {}; // track which breaks we've notified about

// ===================== LIBRE SYSTEM =====================

function getLibreClasses() {
    try {
        return JSON.parse(localStorage.getItem('horario_libre') || '{}');
    } catch { return {}; }
}

function saveLibreClasses(data) {
    localStorage.setItem('horario_libre', JSON.stringify(data));
}

function isClassLibre(dayIndex, lessonNum) {
    const libre = getLibreClasses();
    return !!libre[`${dayIndex}-${lessonNum}`];
}

function toggleLibre(dayIndex, lessonNum) {
    const libre = getLibreClasses();
    const key = `${dayIndex}-${lessonNum}`;
    if (libre[key]) {
        delete libre[key];
    } else {
        libre[key] = true;
    }
    saveLibreClasses(libre);
    renderSchedule();
}

// ===================== INITIALIZATION =====================

function init() {
    injectSVGDefs();
    initTheme();
    initWeather();

    const now = getNow();
    const todayDow = now.getDay(); // 0=Sunday

    // Default to today if weekday, else Monday
    if (todayDow >= 1 && todayDow <= 5) {
        selectedDay = todayDow;
    } else {
        selectedDay = 1;
    }

    setupDayTabs();
    requestNotificationPermission();
    updateAll();

    // Update every second
    updateInterval = setInterval(updateAll, 1000);

    // Setup modal events
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('notes-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });
    document.getElementById('add-note-btn').addEventListener('click', handleAddNote);
    document.getElementById('note-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleAddNote();
    });
}

function injectSVGDefs() {
    // Add gradient definition for countdown circle
    const svg = document.querySelector('.countdown-svg');
    if (svg) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'countdown-gradient');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');

        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', '#6366f1');

        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', '#a78bfa');

        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        svg.insertBefore(defs, svg.firstChild);
    }
}

function setupDayTabs() {
    const tabs = document.querySelectorAll('.day-tab');
    const now = getNow();
    const todayDow = now.getDay();

    tabs.forEach(tab => {
        const day = parseInt(tab.dataset.day);
        if (day === todayDow) tab.classList.add('today');
        if (day === selectedDay) tab.classList.add('active');

        tab.addEventListener('click', () => {
            selectedDay = day;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderSchedule();
        });
    });
}

// ===================== MAIN UPDATE LOOP =====================

function updateAll() {
    updateClock();
    updateYearProgress();
    updateHero();
    updateMotivationBanner();
    checkBreakReminders();
    if (currentView === 'schedule') {
        renderSchedule();
    }
}

function updateClock() {
    const now = getNow();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    document.getElementById('current-time').textContent =
        `${h12}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')} ${ampm}`;
    document.getElementById('current-day').textContent =
        `${DAYS_ES[now.getDay()]} ${now.getDate()}/${now.getMonth() + 1}`;
}

function updateHero() {
    const now = getNow();
    const todayDow = now.getDay();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    const nowSeconds = now.getSeconds();

    const heroStatus = document.getElementById('hero-status');
    const heroTitle = document.getElementById('hero-class-name');
    const heroTeacher = document.getElementById('hero-teacher');
    const countdownMins = document.getElementById('countdown-minutes');
    const countdownCircle = document.getElementById('countdown-circle');
    const heroTimeRange = document.getElementById('hero-time-range');
    const heroLessonNum = document.getElementById('hero-lesson-num');
    const heroNext = document.getElementById('hero-next');
    const statusDot = heroStatus.querySelector('.status-dot');
    const statusText = heroStatus.querySelector('.status-text');

    // Weekend or no schedule
    if (todayDow < 1 || todayDow > 5) {
        statusDot.classList.add('inactive');
        statusText.classList.add('inactive');
        statusText.textContent = 'FIN DE SEMANA';
        heroTitle.textContent = '¡A descansar! 🎉';
        heroTeacher.textContent = 'No hay clases hoy';
        countdownMins.textContent = '😎';
        heroTimeRange.textContent = 'Siguiente: Lunes';
        heroLessonNum.textContent = '';
        heroNext.textContent = '';
        countdownCircle.style.strokeDashoffset = '339.292';
        return;
    }

    const daySchedule = SCHEDULE[todayDow];
    if (!daySchedule) return;

    // Find current item
    let currentItem = null;
    let nextClassItem = null;

    for (let i = 0; i < daySchedule.length; i++) {
        const item = daySchedule[i];
        const startMin = parseTime(item.start);
        const endMin = parseTime(item.end);
        if (nowMinutes >= startMin && nowMinutes < endMin) {
            currentItem = item;
            // Find next class after current
            for (let j = i + 1; j < daySchedule.length; j++) {
                if (daySchedule[j].type === 'class') {
                    nextClassItem = daySchedule[j];
                    break;
                }
            }
            break;
        }
    }

    if (!currentItem) {
        // Before school, after school, or between items
        const firstStart = parseTime(daySchedule[0].start);
        const lastEnd = parseTime(daySchedule[daySchedule.length - 1].end);

        if (nowMinutes < firstStart) {
            // Before school
            statusDot.classList.remove('inactive');
            statusText.classList.remove('inactive');
            statusText.textContent = 'PRÓXIMAMENTE';
            statusText.style.color = '#f59e0b';
            statusDot.style.background = '#f59e0b';
            heroTitle.textContent = daySchedule[0].subject;
            heroTeacher.textContent = daySchedule[0].teacher || '';
            const minsUntil = firstStart - nowMinutes;
            countdownMins.textContent = minsUntil;
            heroTimeRange.textContent = `Inicia ${formatTime12(daySchedule[0].start)}`;
            heroLessonNum.textContent = `Lección ${daySchedule[0].lesson || 1}`;
            heroNext.textContent = `Faltan ${minsUntil} min para iniciar`;
            const progress = 1;
            countdownCircle.style.strokeDashoffset = String(339.292 * progress);
        } else {
            // After school
            statusDot.classList.add('inactive');
            statusText.classList.add('inactive');
            statusText.textContent = 'CLASES TERMINADAS';
            heroTitle.textContent = '¡Listo por hoy! 🎉';
            heroTeacher.textContent = 'Hasta mañana';
            countdownMins.textContent = '✅';
            heroTimeRange.textContent = '';
            heroLessonNum.textContent = '';
            heroNext.textContent = '';
            countdownCircle.style.strokeDashoffset = '339.292';
        }
        return;
    }

    // We have a current item
    const startMin = parseTime(currentItem.start);
    const endMin = parseTime(currentItem.end);
    const totalDuration = endMin - startMin;
    const elapsed = nowMinutes - startMin + (nowSeconds / 60);
    const remaining = Math.max(0, totalDuration - elapsed);
    const remainingMins = Math.ceil(remaining);
    const progress = elapsed / totalDuration;

    if (currentItem.type === 'break' || currentItem.type === 'lunch') {
        statusDot.style.background = '#f59e0b';
        statusText.style.color = '#f59e0b';
        statusText.textContent = currentItem.type === 'lunch' ? 'ALMUERZO' : 'RECESO';
        heroTitle.textContent = currentItem.type === 'lunch' ? '🍽️ Almuerzo' : '☕ Receso';
        heroTeacher.textContent = '';
        heroLessonNum.textContent = '';
    } else {
        statusDot.classList.remove('inactive');
        statusDot.style.background = '#22c55e';
        statusText.classList.remove('inactive');
        statusText.style.color = '#22c55e';
        statusText.textContent = 'EN CLASE';
        heroTitle.textContent = currentItem.subject;
        heroTeacher.textContent = currentItem.teacher || '';
        heroLessonNum.textContent = `Lección ${currentItem.lesson}`;
    }

    countdownMins.textContent = remainingMins;
    heroTimeRange.textContent = `${formatTime12(currentItem.start)} - ${formatTime12(currentItem.end)}`;

    if (nextClassItem) {
        heroNext.textContent = `Siguiente: ${nextClassItem.subject}`;
    } else {
        heroNext.textContent = 'Última del día';
    }

    // Update ring
    const dashoffset = 339.292 * progress;
    countdownCircle.style.strokeDashoffset = String(339.292 - dashoffset);
}

// ===================== SCHEDULE RENDERING =====================

function renderSchedule() {
    const container = document.getElementById('schedule-list');
    const daySchedule = SCHEDULE[selectedDay];

    if (!daySchedule) {
        container.innerHTML = `
            <div class="weekend-message">
                <span class="weekend-emoji">🏖️</span>
                <h3 class="weekend-title">¡Fin de semana!</h3>
                <p class="weekend-subtitle">No hay clases. Disfruta tu descanso.</p>
            </div>`;
        return;
    }

    const now = getNow();
    const todayDow = now.getDay();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    const isToday = selectedDay === todayDow;

    let html = '';

    daySchedule.forEach((item, index) => {
        const startMin = parseTime(item.start);
        const endMin = parseTime(item.end);

        const isCurrent = isToday && nowMinutes >= startMin && nowMinutes < endMin;
        const isPast = isToday && nowMinutes >= endMin;

        if (item.type === 'break' || item.type === 'lunch') {
            let breakClass = 'schedule-item is-break';
            if (isPast) breakClass += ' is-past';
            if (isCurrent) breakClass += ' is-current';

            let breakCountdown = '';
            if (isCurrent) {
                const remaining = endMin - nowMinutes;
                breakCountdown = `<span class="item-countdown${remaining <= 2 ? ' ending-soon' : ''}">${remaining} min</span>`;
            } else if (!isPast && isToday && nowMinutes < startMin) {
                const until = startMin - nowMinutes;
                breakCountdown = `<span class="item-countdown">en ${until} min</span>`;
            }

            html += `
                <div class="${breakClass}">
                    <div class="item-accent" style="background: var(--clr-break)"></div>
                    <div class="break-content" style="display:flex; align-items:center; justify-content:space-between;">
                        <span class="break-text">${item.type === 'lunch' ? '🍽️' : '☕'} ${item.label}</span>
                        ${breakCountdown}
                    </div>
                </div>`;
            return;
        }

        // Check if this class is marked as libre
        const isLibre = isClassLibre(selectedDay, item.lesson);

        let itemClass = 'schedule-item';
        if (isCurrent && !isLibre) itemClass += ' is-current';
        if (isPast) itemClass += ' is-past';
        if (isLibre) itemClass += ' is-libre';

        const displaySubject = isLibre ? 'LIBRE' : item.subject;
        const color = isLibre ? 'var(--clr-libre)' : getSubjectColor(item.subject);
        const noteKey = getSubjectKey(item.subject, selectedDay, item.lesson);
        const noteCount = countNotesForKey(noteKey);

        let countdownHtml = '';
        if (isCurrent && !isLibre) {
            const remaining = Math.ceil(endMin - nowMinutes);
            countdownHtml = `<span class="item-countdown${remaining <= 5 ? ' ending-soon' : ''}">${remaining} min</span>`;
        } else if (!isPast && isToday && nowMinutes < startMin && !isLibre) {
            const until = startMin - nowMinutes;
            if (until <= 120) {
                countdownHtml = `<span class="item-countdown">en ${until} min</span>`;
            }
        }

        const noteBadge = noteCount > 0
            ? `<span class="note-badge">📝 ${noteCount}</span>`
            : '';

        const libreBadge = isLibre
            ? `<span class="libre-badge">Cancelada</span>`
            : '';

        // Two buttons: notes (left icon) and libre toggle (right area)
        html += `
            <div class="${itemClass}">
                <div class="item-accent" style="background: ${color}"></div>
                <div class="item-body" onclick="openModal('${noteKey}', '${item.subject.replace(/'/g, "\\\'")}')">
                    <div class="item-time">
                        <div class="item-time-start">${formatTime12(item.start).replace(' AM', 'a').replace(' PM', 'p')}</div>
                        <div class="item-time-end">${formatTime12(item.end).replace(' AM', 'a').replace(' PM', 'p')}</div>
                    </div>
                    <div class="item-divider"></div>
                    <div class="item-info">
                        <div class="item-subject">${isLibre ? '<s>' + item.subject + '</s> ' : ''}${isLibre ? '' : item.subject}</div>
                        <div class="item-teacher">${item.teacher || '—'}</div>
                    </div>
                    <div class="item-right">
                        ${countdownHtml}
                        ${libreBadge}
                        ${noteBadge}
                        <span class="item-lesson-num">Lec ${item.lesson}</span>
                    </div>
                </div>
                <button class="libre-toggle-btn" onclick="event.stopPropagation(); toggleLibre(${selectedDay}, ${item.lesson})" title="${isLibre ? 'Restaurar clase' : 'Marcar como libre'}">
                    ${isLibre ? '✅' : '❌'}
                </button>
            </div>`;
    });

    container.innerHTML = html;
    renderClassCounter();
}

// ===================== MODAL =====================

function openModal(key, subjectName) {
    currentModalKey = key;
    document.getElementById('modal-title').textContent = `📝 Notas - ${subjectName}`;
    document.getElementById('notes-modal').style.display = 'flex';
    document.getElementById('note-input').value = '';
    renderNotes();
    setTimeout(() => document.getElementById('note-input').focus(), 300);
}

function closeModal() {
    document.getElementById('notes-modal').style.display = 'none';
    currentModalKey = null;
    renderSchedule(); // Refresh badges
}

function renderNotes() {
    const container = document.getElementById('notes-list');
    const notes = getNotesForKey(currentModalKey);

    if (notes.length === 0) {
        container.innerHTML = '<div class="note-empty">No hay notas aún. ¡Agrega una!</div>';
        return;
    }

    container.innerHTML = notes.map(note => `
        <div class="note-item">
            <span class="note-text">${escapeHtml(note.text)}</span>
            <button class="note-delete-btn" onclick="handleDeleteNote(${note.id})" aria-label="Eliminar nota">🗑️</button>
        </div>
    `).join('');
}

function handleAddNote() {
    const input = document.getElementById('note-input');
    const text = input.value.trim();
    if (!text || !currentModalKey) return;

    addNote(currentModalKey, text);
    input.value = '';
    renderNotes();
    input.focus();
}

function handleDeleteNote(noteId) {
    if (!currentModalKey) return;
    deleteNote(currentModalKey, noteId);
    renderNotes();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===================== MOTIVATION BANNER =====================

function updateMotivationBanner() {
    const now = getNow();
    const todayDow = now.getDay();
    const banner = document.getElementById('motivation-banner');
    const text = document.getElementById('motivation-text');

    if (currentView !== 'schedule' || todayDow < 1 || todayDow > 5) {
        banner.style.display = 'none';
        return;
    }

    // Check if selected day has English class and if we're viewing that day
    const daySchedule = SCHEDULE[selectedDay];
    if (!daySchedule) {
        banner.style.display = 'none';
        return;
    }

    const hasEnglish = daySchedule.some(item =>
        item.type === 'class' && ENGLISH_SUBJECTS.includes(item.subject)
    );

    if (hasEnglish) {
        // Pick a random phrase (changes each minute)
        const minuteSeed = Math.floor(Date.now() / 60000);
        const idx = minuteSeed % MOTIVATION_PHRASES.length;
        if (idx !== lastMotivationIndex) {
            lastMotivationIndex = idx;
            text.textContent = MOTIVATION_PHRASES[idx];
        }
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}

// ===================== VIEW SWITCHING =====================

function switchView(view) {
    currentView = view;
    const scheduleSection = document.getElementById('schedule-section');
    const allNotesSection = document.getElementById('all-notes-section');
    const eventsSection = document.getElementById('events-section');
    const dayTabs = document.getElementById('day-tabs');
    const heroCard = document.getElementById('current-class-hero');
    const motivBanner = document.getElementById('motivation-banner');
    const navSchedule = document.getElementById('nav-schedule');
    const navNotes = document.getElementById('nav-notes');
    const navEvents = document.getElementById('nav-events');

    // Reset all
    scheduleSection.style.display = 'none';
    allNotesSection.style.display = 'none';
    eventsSection.style.display = 'none';
    dayTabs.style.display = 'none';
    heroCard.style.display = 'none';
    motivBanner.style.display = 'none';
    navSchedule.classList.remove('active');
    navNotes.classList.remove('active');
    navEvents.classList.remove('active');

    if (view === 'schedule') {
        scheduleSection.style.display = '';
        dayTabs.style.display = 'flex';
        heroCard.style.display = '';
        navSchedule.classList.add('active');
        renderSchedule();
        updateMotivationBanner();
    } else if (view === 'events') {
        eventsSection.style.display = '';
        navEvents.classList.add('active');
        renderEvents();
    } else {
        allNotesSection.style.display = '';
        navNotes.classList.add('active');
        renderAllNotes();
    }
}

// ===================== ALL NOTES RENDERING =====================

function renderAllNotes() {
    const container = document.getElementById('all-notes-list');
    const allNotes = getNotes();
    const keys = Object.keys(allNotes);

    // Count total notes
    let totalCount = 0;
    keys.forEach(k => totalCount += allNotes[k].length);

    if (keys.length === 0 || totalCount === 0) {
        container.innerHTML = `
            <div class="all-notes-empty">
                <span class="all-notes-empty-icon">📝</span>
                <h3 class="all-notes-empty-title">No hay notas aún</h3>
                <p class="all-notes-empty-subtitle">Toca una clase en el horario para agregar notas.</p>
            </div>`;
        return;
    }

    const dayNames = { '1': 'Lunes', '2': 'Martes', '3': 'Miércoles', '4': 'Jueves', '5': 'Viernes' };

    // Group notes by subject
    let html = `
        <div class="all-notes-header">
            <h2 class="all-notes-title">📝 Mis Notas</h2>
            <span class="all-notes-count">${totalCount} nota${totalCount > 1 ? 's' : ''}</span>
        </div>`;

    keys.forEach(key => {
        const notes = allNotes[key];
        if (!notes || notes.length === 0) return;

        // Parse key: dayIndex-lessonNum-subject
        const parts = key.split('-');
        const dayIdx = parts[0];
        const lessonNum = parts[1];
        const subject = parts.slice(2).join('-');
        const dayName = dayNames[dayIdx] || 'Día ' + dayIdx;
        const color = getSubjectColor(subject);

        html += `
            <div class="all-notes-group">
                <div class="all-notes-group-header">
                    <span class="group-color-dot" style="background: ${color}"></span>
                    <span class="group-subject">${escapeHtml(subject)}</span>
                    <span class="group-day-badge">${dayName} · Lec ${lessonNum}</span>
                </div>
                <div class="all-notes-group-body">`;

        notes.forEach(note => {
            html += `
                <div class="all-note-item">
                    <span class="all-note-text">${escapeHtml(note.text)}</span>
                    <button class="all-note-delete" onclick="deleteNoteGlobal('${key}', ${note.id})" aria-label="Eliminar">🗑️</button>
                </div>`;
        });

        html += `
                </div>
            </div>`;
    });

    container.innerHTML = html;
}

function deleteNoteGlobal(key, noteId) {
    const notes = getNotes();
    if (notes[key]) {
        notes[key] = notes[key].filter(n => n.id !== noteId);
        if (notes[key].length === 0) delete notes[key];
        saveNotes(notes);
    }
    renderAllNotes();
}

// ===================== EVENTS RENDERING =====================

function renderEvents() {
    const container = document.getElementById('events-list');
    const now = getNow();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Sort events by date
    const sorted = [...SCHOOL_EVENTS].sort((a, b) => new Date(a.date) - new Date(b.date));

    // Find next upcoming event
    let nextEventIdx = sorted.findIndex(e => {
        const endDate = e.endDate ? new Date(e.endDate + 'T00:00:00') : new Date(e.date + 'T00:00:00');
        return endDate >= today;
    });

    // Header with next event countdown
    let headerHtml = '';
    if (nextEventIdx >= 0) {
        const nextEvent = sorted[nextEventIdx];
        const eventDate = new Date(nextEvent.date + 'T00:00:00');
        const diffMs = eventDate - today;
        const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

        let countdownText = '';
        if (diffDays < 0) {
            countdownText = nextEvent.endDate ? '¡Ahora mismo!' : 'Hoy';
        } else if (diffDays === 0) {
            countdownText = '¡Hoy!';
        } else if (diffDays === 1) {
            countdownText = '¡Mañana!';
        } else {
            countdownText = `En ${diffDays} días`;
        }

        headerHtml = `
            <div class="events-next-card">
                <div class="events-next-label">Próximo evento</div>
                <div class="events-next-emoji">${nextEvent.emoji}</div>
                <div class="events-next-name">${nextEvent.name}</div>
                <div class="events-next-countdown">${countdownText}</div>
                <div class="events-next-date">${formatEventDate(nextEvent.date)}${nextEvent.endDate ? ' - ' + formatEventDate(nextEvent.endDate) : ''}</div>
            </div>`;
    }

    let html = `
        <div class="events-header">
            <h2 class="events-title">📅 Calendario Escolar 2026</h2>
            <span class="events-subtitle">MEP · Liceo Bilingüe de Belén</span>
        </div>
        ${headerHtml}
        <div class="events-timeline">`;

    sorted.forEach((event, idx) => {
        const eventDate = new Date(event.date + 'T00:00:00');
        const endDate = event.endDate ? new Date(event.endDate + 'T00:00:00') : eventDate;
        const diffMs = eventDate - today;
        const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

        const isPast = endDate < today;
        const isActive = today >= eventDate && today <= endDate;
        const isNext = idx === nextEventIdx;

        let statusClass = 'event-future';
        let statusBadge = '';
        if (isPast) {
            statusClass = 'event-past';
            statusBadge = '<span class="event-badge event-badge-past">Pasado</span>';
        } else if (isActive) {
            statusClass = 'event-active';
            statusBadge = '<span class="event-badge event-badge-active">¡Ahora!</span>';
        } else if (diffDays === 0) {
            statusBadge = '<span class="event-badge event-badge-today">¡Hoy!</span>';
        } else if (diffDays === 1) {
            statusBadge = `<span class="event-badge event-badge-soon">¡Mañana!</span>`;
        } else if (diffDays <= 7) {
            statusBadge = `<span class="event-badge event-badge-soon">En ${diffDays} días</span>`;
        } else if (diffDays > 0) {
            statusBadge = `<span class="event-badge event-badge-future">${diffDays} días</span>`;
        }

        const typeColors = {
            'vacation': '#22c55e',
            'holiday': '#f59e0b',
            'academic': '#6366f1',
            'graduation': '#ec4899',
        };
        const dotColor = typeColors[event.type] || '#6366f1';

        html += `
            <div class="event-item ${statusClass} ${isNext ? 'event-highlight' : ''}">
                <div class="event-timeline-dot" style="background: ${dotColor}"></div>
                <div class="event-card">
                    <div class="event-card-top">
                        <span class="event-emoji">${event.emoji}</span>
                        <div class="event-info">
                            <div class="event-name">${event.name}</div>
                            <div class="event-date-text">${formatEventDate(event.date)}${event.endDate ? ' → ' + formatEventDate(event.endDate) : ''}</div>
                        </div>
                        ${statusBadge}
                    </div>
                    <div class="event-description">${event.description}</div>
                </div>
            </div>`;
    });

    html += '</div>';
    container.innerHTML = html;
}

function formatEventDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
}

// ===================== YEAR PROGRESS =====================

function updateYearProgress() {
    const now = getNow();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const totalMs = SCHOOL_YEAR_END - SCHOOL_YEAR_START;
    const elapsedMs = today - SCHOOL_YEAR_START;

    let pct = Math.max(0, Math.min(100, (elapsedMs / totalMs) * 100));
    const daysTotal = Math.ceil(totalMs / (1000 * 60 * 60 * 24));
    const daysElapsed = Math.ceil(elapsedMs / (1000 * 60 * 60 * 24));
    const daysLeft = Math.max(0, daysTotal - daysElapsed);

    document.getElementById('year-progress-pct').textContent = `${Math.round(pct)}%`;
    document.getElementById('year-progress-fill').style.width = `${pct}%`;

    if (today < SCHOOL_YEAR_START) {
        document.getElementById('year-progress-days').textContent = `Faltan ${Math.abs(daysElapsed)} días para iniciar`;
    } else if (today > SCHOOL_YEAR_END) {
        document.getElementById('year-progress-days').textContent = '¡Año completado! 🎉';
    } else {
        document.getElementById('year-progress-days').textContent = `${daysElapsed} días completados · ${daysLeft} días restantes`;
    }
}

// ===================== NOTIFICATIONS =====================

function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

function checkBreakReminders() {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;

    const now = getNow();
    const todayDow = now.getDay();
    if (todayDow < 1 || todayDow > 5) return;

    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    const daySchedule = SCHEDULE[todayDow];
    if (!daySchedule) return;

    daySchedule.forEach(item => {
        if (item.type !== 'break' && item.type !== 'lunch') return;

        const endMin = parseTime(item.end);
        const timeUntilEnd = endMin - nowMinutes;
        const notifKey = `${todayDow}-${item.start}-${now.getDate()}`;

        // Notify 5 minutes before end
        if (timeUntilEnd === 5 && !notifiedBreaks[notifKey]) {
            notifiedBreaks[notifKey] = true;
            const title = item.type === 'lunch' ? '🍽️ Almuerzo' : '☕ Receso';
            const body = `¡Quedan 5 minutos para volver a clases!`;
            try {
                new Notification(title, {
                    body: body,
                    icon: './icon-192.png',
                    badge: './icon-192.png',
                    vibrate: [200, 100, 200],
                });
            } catch (e) {
                // Notifications might not work in all contexts
            }
        }
    });
}

// ===================== CLASS COUNTER =====================

function renderClassCounter() {
    const body = document.getElementById('class-counter-body');
    if (body.style.display === 'none') return; // Only render if open

    // Count all classes across the entire week
    const counts = {};
    for (let day = 1; day <= 5; day++) {
        const daySchedule = SCHEDULE[day];
        if (!daySchedule) continue;
        daySchedule.forEach(item => {
            if (item.type !== 'class') return;
            if (item.subject === 'LIBRE') return;

            // Normalize English subjects
            let subj = item.subject;
            if (subj === 'ReadWrit/ListSpeak') subj = 'ListSpeak /ReadWrit';

            if (!counts[subj]) counts[subj] = 0;
            counts[subj]++;
        });
    }

    // Sort by count descending
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const maxCount = sorted.length > 0 ? sorted[0][1] : 1;

    let html = '';
    sorted.forEach(([subject, count]) => {
        const color = getSubjectColor(subject);
        const barWidth = (count / maxCount) * 100;
        html += `
            <div class="counter-row">
                <span class="counter-color" style="background: ${color}"></span>
                <span class="counter-name">${subject}</span>
                <div class="counter-bar-wrap">
                    <div class="counter-bar-fill" style="width: ${barWidth}%; background: ${color}"></div>
                </div>
                <span class="counter-count">${count}</span>
            </div>`;
    });

    body.innerHTML = html;
}

function toggleClassCounter() {
    const body = document.getElementById('class-counter-body');
    const toggle = document.getElementById('counter-toggle');
    if (body.style.display === 'none') {
        body.style.display = '';
        toggle.classList.add('open');
        renderClassCounter();
    } else {
        body.style.display = 'none';
        toggle.classList.remove('open');
    }
}

// ===================== THEME SYSTEM =====================

const THEME_COLORS = [
    { name: 'Índigo', hex: '#6366f1' },
    { name: 'Violeta', hex: '#8b5cf6' },
    { name: 'Púrpura', hex: '#a855f7' },
    { name: 'Fucsia', hex: '#d946ef' },
    { name: 'Rosa', hex: '#ec4899' },
    { name: 'Rojo', hex: '#ef4444' },
    { name: 'Naranja', hex: '#f97316' },
    { name: 'Ámbar', hex: '#f59e0b' },
    { name: 'Amarillo', hex: '#eab308' },
    { name: 'Lima', hex: '#84cc16' },
    { name: 'Verde', hex: '#22c55e' },
    { name: 'Esmeralda', hex: '#10b981' },
    { name: 'Teal', hex: '#14b8a6' },
    { name: 'Cyan', hex: '#06b6d4' },
    { name: 'Celeste', hex: '#0ea5e9' },
    { name: 'Azul', hex: '#3b82f6' },
    { name: 'Azul oscuro', hex: '#2563eb' },
    { name: 'Slate', hex: '#64748b' },
];

function hexToHSL(hex) {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function applyTheme(hex) {
    const hsl = hexToHSL(hex);
    const root = document.documentElement;

    // accent-1: the main color
    root.style.setProperty('--accent-1', hex);
    // accent-2: slightly lighter
    root.style.setProperty('--accent-2', `hsl(${hsl.h}, ${Math.min(hsl.s + 5, 100)}%, ${Math.min(hsl.l + 8, 80)}%)`);
    // accent-3: even lighter
    root.style.setProperty('--accent-3', `hsl(${hsl.h}, ${Math.min(hsl.s + 10, 100)}%, ${Math.min(hsl.l + 18, 88)}%)`);
    // gradients
    root.style.setProperty('--gradient-hero', `linear-gradient(135deg, ${hex} 0%, hsl(${hsl.h}, ${Math.min(hsl.s + 5, 100)}%, ${Math.min(hsl.l + 8, 80)}%) 50%, hsl(${hsl.h}, ${Math.min(hsl.s + 10, 100)}%, ${Math.min(hsl.l + 18, 88)}%) 100%)`);
    root.style.setProperty('--gradient-active', `linear-gradient(135deg, hsl(${(hsl.h + 30) % 360}, 80%, 55%) 0%, ${hex} 100%)`);
    // border accent
    root.style.setProperty('--border-accent', `rgba(${parseInt(hex.slice(1, 3), 16)}, ${parseInt(hex.slice(3, 5), 16)}, ${parseInt(hex.slice(5, 7), 16)}, 0.3)`);
    // shadow glow
    root.style.setProperty('--shadow-glow', `0 0 40px rgba(${parseInt(hex.slice(1, 3), 16)}, ${parseInt(hex.slice(3, 5), 16)}, ${parseInt(hex.slice(5, 7), 16)}, 0.15)`);

    // Update SVG gradient stops
    const stop1 = document.querySelector('#countdown-gradient stop:first-child');
    const stop2 = document.querySelector('#countdown-gradient stop:last-child');
    if (stop1) stop1.setAttribute('stop-color', hex);
    if (stop2) stop2.setAttribute('stop-color', `hsl(${hsl.h}, ${Math.min(hsl.s + 10, 100)}%, ${Math.min(hsl.l + 18, 88)}%)`);

    // Save preference
    localStorage.setItem('horario_theme', hex);

    // Update palette UI
    document.querySelectorAll('.color-swatch').forEach(sw => {
        sw.classList.toggle('active', sw.dataset.color === hex);
    });
}

function initTheme() {
    const palette = document.getElementById('color-palette');
    palette.innerHTML = THEME_COLORS.map(c =>
        `<div class="color-swatch" data-color="${c.hex}" title="${c.name}" style="background:${c.hex};" onclick="applyTheme('${c.hex}')"></div>`
    ).join('');

    // Restore saved theme
    const saved = localStorage.getItem('horario_theme');
    if (saved) {
        applyTheme(saved);
    } else {
        // Mark default (Índigo) as active
        const defaultSwatch = palette.querySelector('[data-color="#6366f1"]');
        if (defaultSwatch) defaultSwatch.classList.add('active');
    }
}

function toggleSettings() {
    const panel = document.getElementById('settings-panel');
    const btn = document.getElementById('settings-btn');
    const isOpen = panel.style.display !== 'none';

    if (isOpen) {
        panel.style.display = 'none';
        btn.classList.remove('active');
    } else {
        panel.style.display = '';
        btn.classList.add('active');
    }
}

// Close settings when clicking outside
document.addEventListener('click', (e) => {
    const panel = document.getElementById('settings-panel');
    const btn = document.getElementById('settings-btn');
    if (panel && btn && panel.style.display !== 'none') {
        if (!panel.contains(e.target) && !btn.contains(e.target)) {
            panel.style.display = 'none';
            btn.classList.remove('active');
        }
    }
});

// ===================== WEATHER SYSTEM =====================

// Belén, Heredia, Costa Rica coordinates
const WEATHER_LAT = 10.0;
const WEATHER_LON = -84.18;
const WEATHER_UPDATE_INTERVAL = 10 * 60 * 1000; // 10 minutes

// WMO Weather interpretation codes -> Spanish description + emoji
const WMO_CODES = {
    0: { desc: 'Despejado', icon: '☀️' },
    1: { desc: 'Mayormente despejado', icon: '🌤️' },
    2: { desc: 'Parcialmente nublado', icon: '⛅' },
    3: { desc: 'Nublado', icon: '☁️' },
    45: { desc: 'Niebla', icon: '🌫️' },
    48: { desc: 'Niebla helada', icon: '🌫️' },
    51: { desc: 'Llovizna ligera', icon: '🌦️' },
    53: { desc: 'Llovizna moderada', icon: '🌦️' },
    55: { desc: 'Llovizna intensa', icon: '🌧️' },
    56: { desc: 'Llovizna helada', icon: '🌧️' },
    57: { desc: 'Llovizna helada intensa', icon: '🌧️' },
    61: { desc: 'Lluvia ligera', icon: '🌦️' },
    63: { desc: 'Lluvia moderada', icon: '🌧️' },
    65: { desc: 'Lluvia intensa', icon: '🌧️' },
    66: { desc: 'Lluvia helada', icon: '🌧️' },
    67: { desc: 'Lluvia helada intensa', icon: '🌧️' },
    71: { desc: 'Nevada ligera', icon: '🌨️' },
    73: { desc: 'Nevada moderada', icon: '🌨️' },
    75: { desc: 'Nevada intensa', icon: '❄️' },
    77: { desc: 'Granizo', icon: '🌨️' },
    80: { desc: 'Chubascos ligeros', icon: '🌦️' },
    81: { desc: 'Chubascos moderados', icon: '🌧️' },
    82: { desc: 'Chubascos violentos', icon: '⛈️' },
    85: { desc: 'Chubascos de nieve', icon: '🌨️' },
    86: { desc: 'Chubascos de nieve intensos', icon: '❄️' },
    95: { desc: 'Tormenta eléctrica', icon: '⛈️' },
    96: { desc: 'Tormenta con granizo ligero', icon: '⛈️' },
    99: { desc: 'Tormenta con granizo fuerte', icon: '⛈️' },
};

function getWeatherInfo(code) {
    return WMO_CODES[code] || { desc: 'Desconocido', icon: '🌡️' };
}

async function fetchWeather() {
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${WEATHER_LAT}&longitude=${WEATHER_LON}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=America%2FCosta_Rica`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Weather fetch failed');
        const data = await res.json();
        const current = data.current;

        const weatherInfo = getWeatherInfo(current.weather_code);

        document.getElementById('weather-icon').textContent = weatherInfo.icon;
        document.getElementById('weather-temp').textContent = `${Math.round(current.temperature_2m)}°C`;
        document.getElementById('weather-desc').textContent = weatherInfo.desc;
        document.getElementById('weather-feels').textContent = `🌡️ S.T. ${Math.round(current.apparent_temperature)}°`;
        document.getElementById('weather-humidity').textContent = `💧 ${current.relative_humidity_2m}%`;
        document.getElementById('weather-wind').textContent = `💨 ${Math.round(current.wind_speed_10m)} km/h`;

        // Cache the weather data
        localStorage.setItem('horario_weather', JSON.stringify({
            ...current,
            weatherInfo,
            timestamp: Date.now()
        }));
    } catch (err) {
        console.warn('Weather fetch error:', err);
        // Try to use cached data
        loadCachedWeather();
    }
}

function loadCachedWeather() {
    try {
        const cached = JSON.parse(localStorage.getItem('horario_weather'));
        if (cached) {
            document.getElementById('weather-icon').textContent = cached.weatherInfo.icon;
            document.getElementById('weather-temp').textContent = `${Math.round(cached.temperature_2m)}°C`;
            document.getElementById('weather-desc').textContent = cached.weatherInfo.desc;
            document.getElementById('weather-feels').textContent = `🌡️ S.T. ${Math.round(cached.apparent_temperature)}°`;
            document.getElementById('weather-humidity').textContent = `💧 ${cached.relative_humidity_2m}%`;
            document.getElementById('weather-wind').textContent = `💨 ${Math.round(cached.wind_speed_10m)} km/h`;
        }
    } catch { }
}

function initWeather() {
    // Load cached data immediately
    loadCachedWeather();
    // Fetch fresh data
    fetchWeather();
    // Update every 10 minutes
    setInterval(fetchWeather, WEATHER_UPDATE_INTERVAL);
}

// ===================== START =====================
document.addEventListener('DOMContentLoaded', init);


