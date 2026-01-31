# Tony's Jagged Alliance Series Systems & Tactics Guide

A mechanics-first technical reference for:

- Jagged Alliance 2 v1.12
- Jagged Alliance 2: Wildfire

This project documents:

- Cross-version differences
- Combat systems
- Stealth & vision
- AI behavior
- Tactical doctrine

Unlike most guides, this archive focuses on **how the engine actually works**, not walkthroughs.

Live site: <https://jas-guide.pages.dev>

## Use MkDocs build a static site

Build requirement:

- Python [3.8.10](https://www.python.org/downloads/release/python-3810/)

Preview: `mkdocs serve`

Build:

- `python -m venv $HOME/py`
- `pip install -r requirements.txt`
- `mkdocs build`

Deploy it on cloudflare

- build command: `mkdocs build`
- Build output directory: `site`
- add a custom environment `PYTHON_VERSION=3.8`

ref: <https://developers.cloudflare.com/pages/framework-guides/deploy-an-mkdocs-site/>
