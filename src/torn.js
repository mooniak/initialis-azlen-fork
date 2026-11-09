// The chrome's backing: paperize(el, …) puts a flat sheet behind an element and keeps it fitted to it.

const PAD = 14; // css px round the element for fibres and shadow



// the minimal chrome: a flat sheet, white with a hairline black rule, or solid black when asked for a
// dark paper. No tear, tooth or shadow. The old options (edges, seed, fibres) are accepted and ignored.
export function paperSheet({ w, h, dpr = 1, color = '#ffffff' }) {
	const W = w + 2 * PAD, H = h + 2 * PAD;
	const cv = document.createElement('canvas');
	cv.width = Math.ceil(W * dpr); cv.height = Math.ceil(H * dpr);
	const x = cv.getContext('2d');
	x.scale(dpr, dpr);
	x.translate(PAD, PAD);
	const dark = luma(color) < 0.5;
	x.fillStyle = dark ? '#000' : '#fff';
	x.fillRect(0, 0, w, h);
	if (!dark) { x.strokeStyle = '#000'; x.lineWidth = 1; x.strokeRect(0.5, 0.5, w - 1, h - 1); }
	return { canvas: cv, pad: PAD };
}

function luma(c) {
	const m = /^#?([0-9a-f]{6})$/i.exec(c);
	if (!m) return 1;
	const n = parseInt(m[1], 16);
	return (0.299 * (n >> 16) + 0.587 * (n >> 8 & 255) + 0.114 * (n & 255)) / 255;
}

// keep a sheet behind el (which must be positioned), redrawn when its size changes
export function paperize(el, opts) {
	let cv = null, last = '';
	const draw = () => {
		const w = Math.round(el.offsetWidth), h = Math.round(el.offsetHeight);
		const key = w + 'x' + h;
		if (!w || !h || key === last) return;
		last = key;
		const s = paperSheet({ ...opts, w, h, dpr: Math.min(2, devicePixelRatio || 1) });
		Object.assign(s.canvas.style, { position: 'absolute', left: -s.pad + 'px', top: -s.pad + 'px', width: w + 2 * s.pad + 'px', height: h + 2 * s.pad + 'px', zIndex: -1, pointerEvents: 'none' });
		s.canvas.className = 'sheet-bg';
		if (cv) cv.replaceWith(s.canvas); else el.prepend(s.canvas);
		cv = s.canvas;
	};
	new ResizeObserver(draw).observe(el);
	draw();
	return { redraw: () => { last = ''; draw(); } };
}
