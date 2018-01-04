#!/usr/bin/env node

const { exec } = require('child_process');

const countArgs = (argv) => {
    if (argv.length < 2) {
        return false
    }
    return argv
}

const argString = (argv) => {
    return argv.slice(2).join(" ")
}

const addCommand = (argString) => {
    return `open https://duckduckgo.com/?q='${argString}'`
}

const maybePipe = (funcs) => (data) => {
    return funcs.reverse().reduce((value, func) => {
        if (!value) {
            return value;
        }
        return func(value)
    }, data)
}

const command = maybePipe([addCommand, argString, countArgs])(process.argv)

if (command) {
    exec(command)
} else {
    console.error(`SEARCHFACE
    Insufficient params passed, usage 'searchface items etc'`)
}
