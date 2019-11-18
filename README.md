# sendamp
This is a super simple nodejs app that allows you to send test email with amp.

## Setup
To use the tool, first set the sender credentials in config.js

For outlook365, use
- user: 'test@outlook.com',
- password: 'balabala',
- service: '**Outlook365**'

For gmail, use
- user: 'test@gmail.com',
- password: 'balabala',
- service: '**Gmail**'

## Syntax
node app.js -t "amphtmltest@outlook.com" -s "Hello AMP from sendamp tool" -a "HelloAmp.html"

Or the long one:

node app.js --to "amphtmltest@outlook.com" --subject "Hello AMP from sendamp tool" --ampfile "HelloAmp.html"
