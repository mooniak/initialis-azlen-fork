// The tone mode, chosen in the top bar: the initials in full colour, in grayscale, or in black and
// white only. It is applied to each initial's inks just before it is drawn (so the field, the
// pages and every download agree), and to the page round them by a class on <html> (style.css).
// Changing it reloads the page, so everything already drawn is drawn again.

export const MODES = [
	['colour', 'colour'],
	['gray', 'grayscale'],
	['bw', 'black & white'],
];
const KEY = 'initialis:tone';
const read = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
export const mode = MODES.some(([m]) => m === read()) ? read() : 'colour';
export function setMode(m) {
	if (m === mode) return;
	try { localStorage.setItem(KEY, m); } catch { }
	location.reload();
}
if (typeof document !== 'undefined') document.documentElement.dataset.tone = mode;

const INKS = ['paper', 'inkA', 'inkB', 'inkC'];
const luma = c => {
	const m = /^#?([0-9a-f]{6})$/i.exec(c || '');
	if (!m) return null;
	const n = parseInt(m[1], 16);
	return (0.2126 * (n >> 16) + 0.7152 * (n >> 8 & 255) + 0.0722 * (n & 255)) / 255;
};
const hex = v => '#' + Math.round(v * 255).toString(16).padStart(2, '0').repeat(3);

// P with its inks turned to the mode: grays of the same lightness, or black and white. In black and
// white the paper is white, each ink black or white by how dark it is, and the darkest ink always black
export function tone(P) {
	if (mode === 'colour' || !P) return P;
	const out = { ...P };
	if (mode === 'gray') {
		for (const k of INKS) { const l = luma(P[k]); if (l !== null) out[k] = hex(l); }
		return out;
	}
	const inks = INKS.slice(1).map(k => [k, luma(P[k])]).filter(([, l]) => l !== null);
	const darkest = inks.reduce((a, b) => (b[1] < a[1] ? b : a), inks[0] || [null, 0])[0];
	out.paper = '#ffffff';
	for (const [k, l] of inks) out[k] = k === darkest || l < 0.6 ? '#000000' : '#ffffff';
	return out;
}
