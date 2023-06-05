#!/bin/bash

# Replace newlines with @ and tabs with nothing
# Then replace @ with </p><p>
# Then take everything from the first <p> to the last </p>
tr "\n\t" "@" < $1 | sed -e "s_@_</p><p>_g" | grep -o "<p>.*</p>" > $2
