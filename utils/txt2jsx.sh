#!/bin/bash

# Replace newlines with @ and tabs with nothing
# Then replace @ with </p><p>
# Then take everything from the first <p> to the last </p>
html_txt=$(tr "\n\t" "@" < $1 | sed -e "s_@_</p><p>_g" | grep -o "<p>.*</p>")
jsx_txt="const content = (<>$html_txt</>);export default content;"
echo $jsx_txt > $2
