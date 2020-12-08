---
title: 'Vscode'
featuredImage: './cover.jpg'
---

# Visual Studio Code

## Extensions

- [CoenraadS.bracket-pair-colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [dsznajder.es7-react-js-snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [eamodio.gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [formulahendry.auto-close-tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [formulahendry.auto-rename-tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [mikestead.dotenv](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [msjsdiag.debugger-for-chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
- [sdras.night-owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)
- [Tyriar.lorem-ipsum](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum)
- [vscode-icons-team.vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)
- [vscodevim.vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)
- [WallabyJs.quokka-vscode](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)
- [wesbos.theme-cobalt2](https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2)
- [wix.vscode-import-cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

To generate the list

```javascript
const { execSync, spawn } = require('child_process');

const result = execSync('code --list-extensions');

const list = String(result)
  .split('\n')
  .filter(Boolean)
  .map(
    (x) => `- [${x}](https://marketplace.visualstudio.com/items?itemName=${x})`
  )
  .join('\n');

const proc = spawn('pbcopy');
proc.stdin.write(list);
proc.stdin.end();
```

## settings.json

```json
{
  // ---------------------------------------------------
  // Editor Settings
  // ---------------------------------------------------
  "breadcrumbs.enabled": true,
  "diffEditor.ignoreTrimWhitespace": false,
  "window.title": "${activeEditorMedium}${separator}${rootName}",
  "search.exclude": {
    "**/.git": true,
    "**/dist": true,
    "**/node_modules": true
  },
  "editor.detectIndentation": false,
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.rulers": [80],
  "editor.fontFamily": "'Hack', 'Cascadia Code','FiraCode-Retina', Consolas, 'Courier New', monospace",
  "editor.fontLigatures": false,
  "editor.fontSize": 14,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.lineNumbers": "on",
  "editor.minimap.size": "fit",
  // "editor.mouseWheelZoom": true,
  "editor.quickSuggestionsDelay": 0,
  "editor.renderWhitespace": "boundary", // "boundary" does not render single space between words
  "editor.snippetSuggestions": "top",
  "[javascript]": {
    "editor.suggestSelection": "recentlyUsed",
    "editor.suggest.showKeywords": false
  },
  "files.autoSave": "onFocusChange",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "window.zoomLevel": -1,

  // ---------------------------------------------------
  // workbench config
  // ---------------------------------------------------
  "workbench.colorTheme": "Night Owl",
  "workbench.editor.limit.enabled": true,
  "workbench.editor.limit.value": 10,
  "workbench.iconTheme": "vscode-icons",
  "workbench.sideBar.location": "right",

  // ---------------------------------------------------
  // terminal config
  // ---------------------------------------------------
  "terminal.integrated.fontFamily": "MesloLGS NF",

  // ---------------------------------------------------
  // Emmet Settings (Extension)
  // ---------------------------------------------------
  "emmet.triggerExpansionOnTab": true,
  "emmet.showSuggestionsAsSnippets": true,

  // ---------------------------------------------------
  // VIM Settings (Extension)
  // ---------------------------------------------------
  "vim.statusBarColorControl": false,
  "vim.easymotion": true,
  "vim.surround": true,
  "vim.incsearch": true,
  "vim.hlsearch": true,
  "vim.useSystemClipboard": true,
  "vim.useCtrlKeys": true,
  "vim.insertModeKeyBindingsNonRecursive": [],
  "vim.normalModeKeyBindingsNonRecursive": [
    {
      // cursor navigation
      "before": ["j"],
      "after": ["g", "j"]
    },
    {
      // cursor navigation
      "before": ["k"],
      "after": ["g", "k"]
    },
    {
      // clear last search highlighting
      "before": ["<C-n>"],
      "commands": [":nohl"]
    },
    {
      // window navigation
      "before": ["<leader>", "h"],
      "after": ["<C-w>", "h"]
    },
    {
      // window navigation
      "before": ["<leader>", "j"],
      "after": ["<C-w>", "j"]
    },
    {
      // window navigation
      "before": ["<leader>", "k"],
      "after": ["<C-w>", "k"]
    },
    {
      // window navigation
      "before": ["<leader>", "l"],
      "after": ["<C-w>", "l"]
    },
    {
      // vim easymotion
      "before": ["<leader>", "<leader>"],
      "after": ["<Leader>", "<Leader>", "<Leader>", "b", "d", "w"]
    }
  ],
  "vim.visualModeKeyBindingsNonRecursive": [
    {
      "before": ["p"],
      "after": ["\"", "_", "d", "P"]
    }
  ],
  "vim.handleKeys": {},
  "vim.leader": "<space>",

  // ---------------------------------------------------
  // Prettier Settings (Extension)
  // ---------------------------------------------------
  "prettier.printWidth": 80,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "es5",
  "prettier.useTabs": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // ---------------------------------------------------
  // Eslint Settings (Extension)
  // ---------------------------------------------------
  "eslint.validate": ["javascript"],

  // ---------------------------------------------------
  // Others
  // ---------------------------------------------------
  "scm.alwaysShowRepositories": true,
  "vsicons.dontShowNewVersionMessage": true,
  "git.path": "/usr/bin/git",
  "git.ignoreMissingGitWarning": true
}
```

## keybindings.json

```json
[
  // Place your settings in this file to overwrite the default settings
  {
    "key": "ctrl+.",
    "command": "editor.action.triggerSuggest",
    "when": "editorHasCompletionItemProvider && textInputFocus && !editorReadonly"
  },
  {
    "key": "ctrl+tab",
    "command": "workbench.action.terminal.focusNext",
    "when": "terminalFocus"
  },
  {
    "key": "ctrl+shift+tab",
    "command": "workbench.action.terminal.focusPrevious",
    "when": "terminalFocus"
  },
  {
    "key": "cmd+n",
    "command": "workbench.action.terminal.new",
    "when": "terminalFocus"
  },
  {
    "key": "cmd+w",
    "command": "workbench.action.terminal.kill",
    "when": "terminalFocus"
  }
]
```
