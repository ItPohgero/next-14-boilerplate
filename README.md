Package ini  berlaku untuk pnpm saja
intall pnpm disini https://pnpm.io/installation

# Project Structure

### `_templates`
This folder contains boilerplate generator templates. You can manipulate templates here to customize boilerplate generation.

### `public`
Global assets can be placed in this folder.

### `src`
Core folder containing application source code.

#### `app`
Responsible for routing, layout mapping, loading, and maintaining dictionaries. Contains a local dictionary.

#### `components`
Global components reside here.

#### `config`
Configuration storage folder.

#### `helpers`
Contains global logic.

#### `hooks`
Custom hooks for separating application logic related to the UI.

#### `layouts`
UI layout components are stored here.

#### `provider`
Folder for provider components.

#### `screens`
Contains JSX UI components.

#### `service`
Service API folder.

#### `shared`
Global state management.

#### `styles`
CSS files are stored here.

## Generate Layout

### Steps
1. Install PNPM.
2. Run `pnpm setup:generator`.

### Generate App
To generate an app, run:
example: pnpm gen:app --name contoh --path contoh

This command will create 10 files:
- `dictionary.ts`
- `EN.json`
- `ID.json`
- `page.tsx`
- `hook`
- `screen`
  - `main`
  - `helper`
  - `component`
  - `module`
  - `parts`

### Generating Layouts
To generate layouts, run:
example: pnpm gen:layout contoh

### Generating Share Redux
To generate share redux, run:
example: pnpm gen:shared contoh