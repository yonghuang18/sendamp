'use strict';

const fs = require('fs');
const argv = require('yargs')
    .option('to', {
        alias: 't',
        description: 'to recipients, separate recipients by comma'
    })
    .option('subject', {
        alias: 's',
        description: 'subject of the message'
    })
    .option('ampfile',
    {
        alias: 'a',
        description: 'read amp body from a file'
    })
    .coerce(['ampfile'], (arg) => {return fs.readFileSync(arg, 'utf8');})
    .demandOption(['to', 'subject', 'ampfile'], 'Please provide to, subject and ampfile!')
    .argv;

const sender = require('./config').sender;
const mailOption = {from: sender.user, to: argv.to};
mailOption.subject = argv.subject;
mailOption.text = "Hello AMP in plain text";
mailOption.html = "<b>Hello AMP in HTML</b>";
mailOption.amp = argv.ampfile;

if (mailOption.amp) {
    const sendEmail = require('./sendEmail');
    sendEmail(sender, mailOption)
    .then(info => console.log('Message sent: %s', info.messageId))
    .catch(err => console.log('Error sending message %s', err));
} else {
    console.log("No amp ... not sending!");
}