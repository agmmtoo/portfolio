// remove '.md', replace capital letters with small ones, space with '-'
// 'My Title.md' to 'my-title'
const toSlug = title => title.slice(0, title.length - 3)
    .replace(/\s/g, "-")
    .toLowerCase();

// replace '-' with space, capitalize letters and insert '.md' extension
// 'my-title' to 'My Title.md'
const toTitle = slug => slug
    .split("-")
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ")
    + ".md"

export { toSlug, toTitle };
