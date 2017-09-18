[![npm version](https://badge.fury.io/js/comfygure.svg)](https://badge.fury.io/js/comfygure) [![Build Status](https://travis-ci.org/marmelab/comfygure.png?branch=master)](https://travis-ci.org/marmelab/comfygure)

# comfygure

A cli to help you manage your configurations for development, test and deployment. Open sourced and maintained by [marmelab](https://marmelab.com/).

[Source](https://github.com/marmelab/comfygure) - [Releases](https://github.com/marmelab/comfygure/releases) - [StackOverflow](https://stackoverflow.com/questions/tagged/comfy/)

[![asciicast](https://asciinema.org/a/137703.png)](https://asciinema.org/a/137703)

## Features

* End-to-end encryption
* Multiple format supports (JSON, YAML, Environment variables)
* Configuration versioning (git-like)

## Installation

comfygure is available from npm. You can install it (and its required dependencies)
using:

```sh
npm install -g comfygure
comfy help
```

## Basic Usage

In a project directory, initialize a new configuration with `comfy init`:

```sh
> comfy init

Initializing project configuration...
Project created on comfy server https://comfy.marmelab.com
Configuration saved locally in .comfy/config
comfy project successfully created
```

Set the configuration for a particular environment based on the content of an existing file using `comfy setall`:

```sh
> echo '{"login": "admin", "password": "S3cr3T"}' > config.json
> comfy setall development config.json
Great! Your configuration was successfully saved.
```

Grab that configuration from any server using `comfy get`:

```sh
> comfy get development
{"login": "admin", "password": "S3cr3T"}
> comfy get development --envvars
export LOGIN='admin';
export PASSWORD='S3cr3T';
```

To store a remote configuration in the environment, use:

```sh
> comfy get development | source /dev/stdin
> echo $LOGIN
admin
```

You now have all your credentials in `.comfy/config`, you can give them to your co-workers or use them on your remote server.

See the [documentation](https://marmelab.com/comfygure/) to know more about how it works and the remote usage.

## License

comfygure is licensed under the [MIT Licence](https://github.com/marmelab/admin-on-rest/blob/master/LICENSE.md), sponsored and supported by [marmelab](http://marmelab.com).
