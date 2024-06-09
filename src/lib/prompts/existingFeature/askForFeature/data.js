export default [
    {
        "id": "pageable",
        "name": "Pageable",
        "version": "0.0.1",
        "description": "Adds pageing capacity to a notifiles app",
        "packages": [
            {
                "id": "@notifiles-community/pageable-parse-server",
                "description": "",
                "type": "main",
                "components": ["server"],
                "url": "https://github.com/notifiles-community/pageable-parse-server.git"
            },
            {
                "id": "@notifiles-community/pageable-parse-classes",
                "description": "",
                "type": "classes",
                "components": ["server"]
            },
        ],
        "author": {
            "name": "notifiles Community",
            "email": "servablecommunity@gmail.com",
            "url": "https://servablecommunity.com/"
        },
        "keywords": [
            "node",
            "features",
            "notifiles",
            "yeoman-toolbox"
        ],
        "repository": {
            "type": "git",
            "url": "https://github.com/notifiles-community/toolbox-notifiles.git"
        },
        "bugs": {
            "url": "https://github.com/notifiles-community/toolbox-notifiles/issues"
        },
        "main": "./toolboxs/app/index.js",
        "homepage": "http://servablecommunity.com",
        "license": "MIT",
        "engines": {
            "node": ">=14.15.0"
        },
        "icon": "https://cdn3d.iconscout.com/3d/free/preview/free-toffee-4356774-3618919.png?f=avif&h=1400",
        "declaration": {
            "template": {
                "id": "pageable",
                "name": "pageable",
                "slug": "pg",
                // module: {
                //     '@notifiles-community/publishable-parse-server': '*'
                // },
                // version: '*',
                "params": {
                    "apiKey": "<%= apiKey %>",
                    "liveClasses": ["publishable"],
                    "schema": {
                        "restrictSecurity": true
                    }
                }
            },
            "parameters": [
                {
                    "id": "apiKey",
                    "prompt": {
                        "type": "input",
                        "name": "API Key",
                        "message": "API Key",
                        "default": "",
                        "validate": {
                            "type": "",
                            "params": {}
                        }
                    }
                },
            ]
        },

    },
    {
        "id": "emailable",
        "name": "Emailable",
        "version": "0.0.1",
        "description": "Adds email capacity to a notifiles app",
        "howto": "Fill the API key",
        "packages": [
            {
                "id": "@notifiles-community/notifiles-emailable",
                "description": "",
                "type": "main",
                "components": ["server"],
                "url": "https://github.com/notifiles-community/notifiles-emailable.git"
            }
        ],
        "author": {
            "name": "notifiles Community",
            "email": "servablecommunity@gmail.com",
            "url": "https://servablecommunity.com/"
        },
        "keywords": [
            "node",
            "features",
            "notifiles",
            "yeoman-toolbox"
        ],
        "repository": {
            "type": "git",
            "url": "https://github.com/notifiles-community/notifiles-emailable.git"
        },
        "bugs": {
            "url": "https://github.com/notifiles-community/notifiles-emailable.git#issues"
        },
        "main": "./toolboxs/app/index.js",
        "homepage": "http://servablecommunity.com",
        "license": "MIT",
        "engines": {
            "node": ">=14.15.0"
        },
        "email": "servablecommunity@gmail.com",
        "icon": "https://cdn3d.iconscout.com/3d/free/preview/free-toffee-4356774-3618919.png?f=avif&h=1400",
        "declaration": {
            "template": {
                "id": 'emailable',
                "name": 'emailable',
                "slug": 'em',
                "params": {
                    "apiKey": "<%= apiKey %>",
                    "frontWebUrl": "<%= frontWebUrl %>",
                    "env": CliNext.env.NODE_ENV,
                    "appName": CliNext.env.SERVABLE_APP_NAME,
                    "restrictSend": "<%= restrictSend %>",
                    "restrictTo": "<%= restrictTo %>",
                    "restrictToRegex": "<%= restrictToRegex %>",
                    "schema": {
                        "exclude": false
                    }
                }
            },
            "parameters": [
                {
                    "id": "apiKey",
                    "prompt": {
                        "type": "input",
                        "name": "API Key",
                        "message": "API Key",
                        "default": "",
                        "validate": {
                            "type": "",
                            "params": {}
                        }
                    }
                },
                {
                    "id": "frontWebUrl",
                    "prompt": {
                        "type": "input",
                        "message": "Front Web Url",
                        "default": "",
                        "validate": {
                            "type": "",
                            "params": {}
                        }
                    }
                },
                {
                    "id": "restrictSend",
                    "prompt": {
                        "type": "input",
                        "message": "Restrict send",
                        "default": "",
                        "validate": {
                            "type": "",
                            "params": {}
                        }
                    }
                },
                {
                    "id": "restrictTo",
                    "prompt": {
                        "type": "input",
                        "message": "Restrict to",
                        "default": "",
                        "validate": {
                            "type": "",
                            "params": {}
                        }
                    }
                },
                {
                    "id": "restrictToRegex",
                    "prompt": {
                        "type": "input",
                        "message": "Restrict to Regex",
                        "default": "",
                        "validate": {
                            "type": "",
                            "params": {}
                        }
                    }
                }
            ]
        },
    },
    {
        "id": "slugable",
        "name": "Slugable",
        "packages": [
            {
                "id": "@notifiles-community/slugable",
                "description": "",
                "type": "main"
            }
        ],
        "author": "notifiles Community",
        "email": "servablecommunity@gmail.com",
        "description": "Adds slug capacity to a notifiles app",
        "icon": "https://cdn3d.iconscout.com/3d/free/preview/free-toffee-4356774-3618919.png?f=avif&h=1400",
    },
    {
        "id": "reviewable",
        "name": "Reviewable",
        "packages": [
            {
                "id": "notifiles-reviewable",
                "description": "",
                "type": "main"
            }
        ],
        "author": "notifiles Community",
        "email": "servablecommunity@gmail.com",
        "description": "Adds review capacity to a notifiles app",
        "icon": "https://cdn3d.iconscout.com/3d/free/preview/free-toffee-4356774-3618919.png?f=avif&h=1400",
    },
    {
        "id": "publishable",
        "name": "Publishable",
        "packages": [
            {
                "id": "notifiles-publishable",
                "description": "",
                "type": "main"
            }
        ],
        "author": "notifiles Community",
        "email": "servablecommunity@gmail.com",
        "description": "Adds review capacity to a notifiles app",
        "icon": "https://cdn3d.iconscout.com/3d/free/preview/free-toffee-4356774-3618919.png?f=avif&h=1400",
    }
]
