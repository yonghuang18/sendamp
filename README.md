# sendamp
This is a nodejs app that allows you to send amp emails

To use the tool
1) Set the sender credentials in config.js

For gmail, use
    user: 'test@outlook.com',
    password: 'balabala',
    service: 'Outlook365'

For outlook365, use
    user: 'test@gmail.com',
    password: 'balabala',
    service: 'Gmail'

2) Run the tool with below command line:
node app.js -t "amphtmltest@outlook.com" -s "Hello AMP from sendamp tool" -af "<path to amp file>"

