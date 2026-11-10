# Joshua Anayochukwu — portfolio site

A static website built with Jekyll, hosted free on GitHub Pages. You edit plain text files; GitHub builds and publishes the site about a minute after every change. Nothing to install.

## Put it online (one time, about 15 minutes)

1. Sign in to GitHub and create a new **public** repository named exactly `JaushAnay.github.io`.
2. On the new repository page, click **uploading an existing file**. Drag in everything inside this folder (not the folder itself), including the folders that start with `_`. Click **Commit changes**.
3. Go to **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
4. Wait 1–2 minutes, then open `https://jaushanay.github.io`.

To check a build: open the **Actions** tab. A green tick means the site is live; a red cross shows which file has a mistake.

## Everyday edits

Open a file on github.com, click the pencil icon, change it, and click **Commit changes**. This works on a phone too.

| To change | Edit this file |
| --- | --- |
| Name, email, links, CV, photo, "Now" date | `_config.yml` |
| Home page headline and intro | `index.html` (top section) |
| About story and education | `about.md` |
| Skills and their levels | `_data/skills.yml` |
| Jobs | `_data/experience.yml` |
| Certifications and courses | `_data/learning.yml` |
| Services and how you work | `contact.md` |
| What you're doing now | `now.md` |
| A project | its file in `_projects/` |
| Colours and fonts | `assets/css/style.css` (top of file) |

**Add a project:** copy `templates/new-project.md` into `_projects/`, give it a new name such as `_projects/hospital-dashboard.md`, and fill it in. Set `featured: true` on the three projects you want on the home page.

**Publish an article or note:** copy `templates/new-post.md` into a new `_posts/` folder with a dated name such as `_posts/2026-12-01-my-first-article.md`. The Writing link appears in the menu automatically once the first post exists.

**Add your CV:** upload the PDF to `assets/`, then set `cv_file: /assets/your-file-name.pdf` in `_config.yml`. Download buttons appear automatically. Consider removing your phone number from the public version.

**Add a cover image to a project:** upload the image to `assets/img/projects/`, then set two lines at the top of the project file:
`cover: /assets/img/projects/file-name.png` and `cover_alt: "One sentence describing the image"`. It appears on the project card and at the top of the project page. Wide images (16:9, about 1600 × 900 pixels) look best. Leave `cover: ""` to show no image.

**Add screenshots inside a case study:** upload to `assets/img/projects/`, then put this on its own line where the image should appear:
`{% include figure.html src="/assets/img/projects/file-name.png" alt="What it shows" caption="One sentence on what to notice." %}`
Visitors can click the image to see it full size.

**Making good screenshots:** use Windows + Shift + S to capture just the part you need. Crop out toolbars and taskbars, hide any personal or work details, and name files in lowercase with hyphens, e.g. `crestfield-readmissions-dashboard.png`. Keep each file under about 500 KB; squoosh.app shrinks large images for free.

**Hide a link:** set it to `""` in `_config.yml`.

## Notes inside project files

Lines like `<!-- Add: ... -->` are reminders for you. They never appear on the site. Replace them with real content as each project progresses.

## Writing offline

Draft in any notes app during power or network outages. When you're online, paste into the file on GitHub and commit.

## Custom domain (later)

Buy a domain (Cloudflare Registrar or Porkbun, about $11/year for .com). In **Settings → Pages → Custom domain**, enter it and follow GitHub's DNS instructions. Then update `url:` in `_config.yml`.

## YAML tips (the `.yml` files and the block at the top of each page)

- Keep the spaces at the start of lines exactly as they are; indentation matters.
- If a value contains a colon, wrap it in quotes: `summary: "Problem: duplicate records"`.
- Lists use a dash and a space: `- Item`.
