# How to update salmanshaik.ch

Everything happens on github.com in your browser. After **Commit changes**, the site updates in about one minute.

## Change text (intro, status, journey, certifications)

1. Open `_data/content.yml` and click the pencil icon.
2. Change the text between the quotes. Keep the quotes and the spaces at the start of lines.
3. Click **Commit changes**.

## Add a new project (every few days)

1. Upload your images and PDF first:
   - charts to `assets/img` (**Add file > Upload files**)
   - the PDF report to `assets/files`
2. Open `PROJECT-TEMPLATE.md`, click the copy icon to copy all the text.
3. Open the `_projects` folder, click **Add file > Create new file**.
4. Name it with a short web name, for example `lucerne-without-venture-capital.md`. That becomes the address `salmanshaik.ch/work/lucerne-without-venture-capital/`.
5. Paste the template, fill it in, and point `cover`, `pdf` and `visuals` to the files you uploaded.
6. Click **Commit changes**.

The project appears automatically at the top of the Work section, and its charts appear in the Power BI section. Newest projects always come first, based on the `date` line.

## Add your university logos

1. Download each logo from the university's website (PNG with a white or transparent background works best).
2. Rename them `logo-presidency.png` and `logo-hslu.png`, and upload them to `assets/img`.
3. In `content.yml`, set `logo: "logo-presidency.png"` and `logo: "logo-hslu.png"` under each degree.

## Replace a photo

Rename your photo to the exact name of the old one (`profile.jpg`, `gallery-1.jpg` to `gallery-6.jpg`), upload it to `assets/img`, and commit. Change captions in `content.yml`. Keep photos under 1 MB.

## Post an update (the LinkedIn version of a project)

1. In `_posts`, click **Add file > Create new file**.
2. Name it `YYYY-MM-DD-short-title.md`, for example `2026-10-07-lucerne-without-vc.md`. The date at the start is required.
3. Paste and fill in:

```
---
layout: post
title: "Your title"
summary: "One sentence for the list."
tags: ["Research"]
image: /assets/img/your-chart.png
---

Your text. Link to the project like this: [Read the full case](/work/your-project-name/)
```

## Add your CV

Upload the PDF to `assets/files`, then set `cv: "Your_CV_file_name.pdf"` in `content.yml`.

## If something breaks

Open the **Actions** tab. A red cross marks the change that failed; it is usually a missing quote or wrong spacing. Fix it, or restore the previous version from the file's **History**.
