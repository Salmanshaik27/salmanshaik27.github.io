# How to update salmanshaik.ch

Everything happens on github.com in your browser. After **Commit changes**, the site updates in about one minute.

## Text: tagline, Who I am, What I bring, What I am looking for

Open `_data/content.yml`, click the pencil icon, change the text between the quotes, and commit.
- `tagline`: the bold sentence on the home page
- `who`: the paragraphs in the "Who I am" panel
- `skills`: the skill groups in "What I bring"
- `looking`: the blocks in "What I am looking for"
- `certifications`, `education`: certificates and degrees

## Background photo, video, CV

- **Background:** upload a landscape photo to `assets/img` (for example `lucerne.jpg`) and set `backdrop: "/assets/img/lucerne.jpg"`.
- **Video:** upload a short MP4 to `assets/files` (under about 20 MB) and set `video: "/assets/files/intro.mp4"`. It replaces your photo in "Who I am".
- **CV:** upload the PDF to `assets/files` and set `cv: "Your_CV.pdf"`.

## Add a project (it appears in the carousel automatically)

1. Upload its charts to `assets/img` and its PDF to `assets/files`.
2. Copy all text of `PROJECT-TEMPLATE.md`.
3. In `_projects`, **Add file > Create new file**, name it like `lucerne-without-vc.md`, paste, fill in, commit.

The project and each of its charts become slides in the 3D carousel and tiles in the album.

## Add a blog post (it appears in the wheel automatically)

In `_posts`, create `YYYY-MM-DD-short-title.md` and paste:

```
---
layout: post
title: "Your title"
summary: "One sentence."
image: /assets/img/your-chart.png
---

Your text.
```

## Power BI

If you get a Power BI "Publish to web" link (needs a work or school account), paste it into `powerbi_embed` in `content.yml`. It appears on the Data page above the interactive charts.

## If something breaks

Open the **Actions** tab. A red cross marks the change that failed, usually a missing quote or wrong spacing in `content.yml`. Fix it or restore the previous version from the file's **History**.
