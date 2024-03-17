# Boilerplate next 14

Project stucture

### _templates
this is the boilerplate generator template folder, you can manipulate templates here

### public
we can put global assets in this folder

### src
core folder
#### app
for routing and mapping layout, loading, dictionary
there is already a local dictionary,

#### components
put global components here

#### config
for storing configurations

#### helpers
global logic folder

#### hooks
separates by means of custome hooks all application logins we put with the ui here

#### layouts
ui layouting here

#### provider
folder for providers

#### screens
folder for storing jsx ui

#### service
folder for the service api

#### shared
global state

#### styles
for storing css

==================================

## Generate Layout
Steps
- Install PNPM
- pnpm setup:generator

#### Generate App
`pnpm gen:app`
- will create 10 files
-- dictionary.ts
-- EN.json
-- ID.json
-- page.tsx
-- hook
-- screen
--- main
--- helper
--- component
--- module
--- parts

#### Generating Layouts
`pnpm gen:layout`

#### Generate Global State Redux
`pnpm gen:shared`