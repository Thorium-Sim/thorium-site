export default preval`
const postsDir = './src/posts/';
const fs = require('fs');
const RSS = require('rss');
const marked = require('marked');

const feed = new RSS({
  title: "R. Alex Anderson",
  description: "It is what it is",
  feed_url: "https://ralexanderson.com/assets/feed.xml",
  site_url: "https://ralexanderson.com",
  webMaster: "R. Alex Anderson",
  copyright: '2017 R. Alex Anderson',
  language: "en"
});

const posts = fs.readdirSync(postsDir).filter(p => p.indexOf('.md') > -1).map(p => {
	return fs.readFileSync(postsDir + p, 'utf-8').split('---').slice(1).reduce((prev, next, i) => {
			if (i === 0) {
				next.split('\\n')
					.map(
						c =>
							c ? c.split(': ').map(d => d.trim().replace(/"/gi, '')) : null
					)
					.filter(e => e)
					.forEach(a => {
						if (a[0] === 'date') {
							prev[a[0]] = new Date(a[1]);
						} else {
							prev[a[0]] = a[1];
						}
					});
			} else {
				prev.content = next;
			}
			return prev;
		}, {})
}).sort((a, b) => {
		if (a.date > b.date) return -1;
		if (a.date < b.date) return 1;
		return 0;
	});

posts.slice(0,20).forEach(p => {
	feed.item({
		title: p.title,
		description: marked(p.content),
		url: 'https://ralexanderson.com/posts' + p.path,
		author: p.author,
		date: p.date.toISOString(),

	})
})
fs.writeFileSync('./src/assets/feed.xml', feed.xml());

module.exports = posts;`;
