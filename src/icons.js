// Icons for the UI: minimal line icons on a 24-unit grid, drawn as SVG paths with a round
// 1.75-unit stroke. A `fill` icon is filled instead (the saved bookmark). GitHub's mark is its own
// filled outline.
//   save, saved   a bookmark, in outline and filled
//   context       a page: a square initial and lines of text
//   look          four corners pushing out: see it large
//   png, gif, mp4 download: an arrow down onto a line
//   back, forward arrows
//   share         an arrow rising out of a tray
//   point         an arrow, for the lessons (turned to point up, down or left)
//   person, edit, sliders
//   github        GitHub's mark

const poly = (...pts) => ({ pts });

const DOWNLOAD = { d: 'M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19.5h14' };
export const ICONS = {
	save: { d: 'M6.5 3.5h11v17L12 16.5l-5.5 4z' },
	saved: { d: 'M6.5 3.5h11v17L12 16.5l-5.5 4z', fill: true },
	context: { d: 'M4.5 3.5h15v17h-15zM7.5 7h4v4h-4zM14 7.5h2.5M14 10.5h2.5M7.5 14h9M7.5 17h6' },
	look: { d: 'M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5' },
	png: DOWNLOAD, gif: DOWNLOAD, mp4: DOWNLOAD,
	back: { d: 'M19.5 12h-15M10.5 6l-6 6 6 6' },
	forward: { d: 'M4.5 12h15M13.5 6l6 6-6 6' },
	share: { d: 'M12 15V3.5M7.5 8 12 3.5 16.5 8M5 12v8h14v-8' },
	point: { d: 'M4 12h15M13 6l6 6-6 6' },
	person: { d: 'M12 11.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 20.5c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5' },
	edit: { d: 'M15.5 4.5l4 4L9 19H5v-4zM13 7l4 4' },
	sliders: { d: 'M6 4v16M12 4v16M18 4v16M3.5 15h5M9.5 8h5M15.5 16h5' },
	github: [poly(...[[32,5.7],[30.4,5.7],[28.7,5.9],[27.1,6.1],[25.5,6.5],[23.9,6.9],[22.3,7.5],[20.8,8.1],[19.3,8.8],[17.9,9.6],[16.5,10.5],[15.2,11.5],[13.9,12.6],[12.7,13.7],[11.6,15],[10.6,16.2],[9.6,17.6],[8.7,19],[7.9,20.4],[7.2,21.9],[6.6,23.4],[6.1,25],[5.7,26.6],[5.4,28.2],[5.1,29.9],[5,31.5],[5,33.1],[5.1,34.8],[5.3,36.4],[5.5,38.1],[5.9,39.7],[6.4,41.2],[7,42.8],[7.6,44.3],[8.4,45.8],[9.2,47.2],[10.2,48.5],[11.2,49.8],[12.3,51.1],[13.4,52.3],[14.7,53.4],[15.9,54.4],[17.3,55.3],[18.7,56.2],[20.2,56.9],[21.7,57.6],[23.2,58.2],[24.8,58.1],[25.3,56.6],[25.3,54.9],[25.3,53.3],[24.5,52.5],[22.9,52.7],[21.2,52.6],[19.6,52.2],[18.2,51.4],[17,50.3],[16.2,48.8],[15.5,47.4],[14.6,46],[13.3,44.9],[12.2,43.8],[13.5,43.2],[15,43.6],[16.4,44.6],[17.4,45.9],[18.4,47.2],[19.7,48.2],[21.2,48.8],[22.8,48.9],[24.5,48.6],[25.5,47.5],[26,46],[27,44.7],[25.5,44.4],[23.9,44.1],[22.3,43.6],[20.8,43],[19.4,42.1],[18.1,41.1],[17.1,39.8],[16.2,38.4],[15.6,36.9],[15.2,35.3],[14.9,33.7],[14.8,32],[14.8,30.4],[15.1,28.7],[15.5,27.2],[16.3,25.7],[17.3,24.4],[17.2,22.9],[17,21.2],[17.1,19.6],[17.4,18],[18.3,16.8],[19.9,17],[21.5,17.5],[22.9,18.3],[24.4,19.1],[25.8,19.5],[27.4,19.1],[29.1,18.9],[30.7,18.8],[32.4,18.7],[34,18.8],[35.7,19],[37.3,19.3],[38.9,19.5],[40.3,18.7],[41.7,17.9],[43.2,17.2],[44.8,16.9],[46.2,17.2],[46.7,18.8],[46.9,20.4],[46.8,22.1],[46.5,23.7],[47.2,25],[48,26.4],[48.7,28],[49,29.6],[49.1,31.2],[49.1,32.9],[48.9,34.5],[48.6,36.1],[48,37.7],[47.3,39.2],[46.3,40.5],[45.1,41.6],[43.8,42.6],[42.3,43.3],[40.7,43.8],[39.1,44.2],[37.5,44.5],[37.5,45.3],[38.2,46.7],[38.6,48.4],[38.6,50],[38.6,51.6],[38.6,53.3],[38.6,54.9],[38.6,56.6],[39.1,58.1],[40.7,58.2],[42.3,57.6],[43.8,56.9],[45.3,56.1],[46.7,55.3],[48,54.4],[49.3,53.3],[50.6,52.2],[51.7,51.1],[52.8,49.8],[53.8,48.5],[54.8,47.2],[55.6,45.8],[56.4,44.3],[57,42.8],[57.6,41.2],[58.1,39.7],[58.5,38.1],[58.7,36.4],[58.9,34.8],[59,33.1],[59,31.5],[58.9,29.9],[58.6,28.2],[58.3,26.6],[57.9,25],[57.4,23.4],[56.8,21.9],[56.1,20.4],[55.3,19],[54.4,17.6],[53.4,16.2],[52.4,15],[51.3,13.7],[50.1,12.6],[48.8,11.5],[47.5,10.6],[46.1,9.6],[44.7,8.8],[43.2,8.1],[41.7,7.5],[40.1,6.9],[38.5,6.5],[36.9,6.1],[35.3,5.9],[33.6,5.7]])],
};

export function drawIcon(name, css, { color = '#000', dpr = Math.min(2, devicePixelRatio || 1) } = {}) {
	const cv = document.createElement('canvas');
	cv.width = cv.height = Math.round(css * dpr);
	cv.style.width = cv.style.height = css + 'px';
	const x = cv.getContext('2d');
	const icon = ICONS[name];
	x.fillStyle = x.strokeStyle = color;
	if (Array.isArray(icon)) {
		// a filled outline on a 64-unit square
		x.scale(cv.width / 64, cv.height / 64);
		const draw = s => { const p = new Path2D(); s.pts.forEach(([px, py], i) => i ? p.lineTo(px, py) : p.moveTo(px, py)); p.closePath(); x.fill(p); };
		for (const s of icon) if (!s.cut) draw(s);
		x.globalCompositeOperation = 'destination-out';
		for (const s of icon) if (s.cut) draw(s);
		x.globalCompositeOperation = 'source-over';
		return cv;
	}
	x.scale(cv.width / 24, cv.height / 24);
	const p = new Path2D(icon.d);
	x.lineWidth = 1.75; x.lineCap = 'round'; x.lineJoin = 'round';
	if (icon.fill) x.fill(p);
	x.stroke(p);
	return cv;
}

// share, for the word buttons: the same icon, marked so the CSS can space it
export function drawShare(css, { color = '#000', dpr } = {}) {
	const cv = drawIcon('share', css, { color, dpr });
	cv.className = 'sharemark';
	return cv;
}
