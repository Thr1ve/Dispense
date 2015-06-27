## Components
####Controller (Puppet?):
- Accepts commands to
  - push code
  - restart server
  - display metrics
  - eat your dog ( because fuck dogs, right? )

####Client (PuppetMaster?)
- sends commands to controller through CLI
- possibly displays metrics in a UI? maybe not...cool place for asciimation ?

#### Middleware modules

Sets of commands geared toward dealing with a specific area or technology

Examples:
- Git
- Docker
- Nginx Configuration
- Express Configuration
- bin scripts
- Connecting other vantage servers
- accept commands from web-hooks when code is pushed?
- Make UI in browser



###Ideas:
#### "floating castle" --  A Docker instance running:
  - Live-Reload Server that ...
    - Watches code pulled from git
  - Vantage Server that ...
    - accepts web-hooks from github/gitlab
    - Pulls new code from github/gitlab
    - Streams output of Live-reload server
      - option: and/or linting ?
  - Express Server that ...
    - Serves the static, bundled SPA
  - Wetty server that...
    - Displays the terminal in browser
  - A backend with Dockerized Nginx that ...
    - spins up more floating castle instances on demand, available at random hashes on route
