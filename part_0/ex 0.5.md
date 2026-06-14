```mermaid
sequenceDiagram
    box Local
        participant u@{ type : actor, alias : User}
        participant b@{ alias : Browser}
    end
    box Cloud
        participant s@{ type : control, alias : Server}
        participant n@{ type : database, alias : notes}
    end

    u->>b: User goes to <br/> https://studies.cs.helsinki.fi/exampleapp/spa
    
    activate b
    b->>s: GET <br/> /exampleapp/spa
    deactivate b

    activate s
    s-->>b: sends /exampleapp/spa page HTML
    deactivate s

    activate b
    b->>s: GET <br/> /exampleapp/main.css
    deactivate b

    activate s
    s-->>b: main.css
    deactivate s

    activate b
    b->>s: GET <br/> /exampleapp/spa.js
    deactivate b

    activate s
    s-->>b: spa.js
    deactivate s

    activate b
    Note over b: Browser executes spa.js <br/> runs function to fetch data.json
    b->>s: GET <br/> /exampleapp/data.json
    deactivate b

    activate s
    n-->>s: Gets notes array
    s-->>b: data.json
    deactivate s
    
    Note over b: creates a local copy of notes array
    Note over b: Browser renders each note inside the notes div
```