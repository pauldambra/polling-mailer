#!/bin/bash

set -e

(
	cd server
	npm install && npm test
)

(
	cd pollerMailerApp
    mix test
)