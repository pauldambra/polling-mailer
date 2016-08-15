#!/bin/bash

set -e

(
	cd server
	npm test
)

(
	cd pollerMailerApp
    mix test
)