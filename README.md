# template-wxt

> Develop web extensions using [WXT](https://github.com/wxt-dev/wxt)

## Installation

**Prerequisites:**

- [Bun](https://bun.sh/docs/installation)

After installing Bun, run the following command to install the project dependencies:

```bash
bun install
```

**Quick start**

Use `bun create` to quickly scaffold a new project. This will download the repo, install dependencies, and initialize `.git`.

```bash
bun create metonym/template-wxt <folder-name>
```
## Usage

### Development

```bash
bun run dev
```

### Build

```bash
bun run build
```

Alternatively, `bun run package` goes a step further by zipping the build output into a `.zip` file.

---

**Misc. Notes**

At a minimum, Chrome [recommends a minimum](https://developer.chrome.com/docs/apps/manifest/icons#:~:text=You%20should%20always%20provide%20a,favicon%20for%20an%20extension's%20pages.) of three icon sizes for the extension:

- 16px: Used in the extension's toolbar icon.
- 48px: Used in the extension's management page in the Chrome browser.
- 128px: Used as the icon for the extension in the Chrome Web Store.
