const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

const shell = require('shelljs');

const isFile = (string) => {
    const re = /(?:\.([^.]+))?$/;
    return !!re.exec(string)[1];
};

const isFolder = (string) => {
    return !isFile(string);
};

const execFileSync = (file, args, options = {}) => {
    options = {
        interactive: false,
        cpOptions: {stdio: 'inherit'},
        shellOptions: {},
        ...options,
    };
    let command = file + ' ' + args.join(' ');
    shell.echo('💠 Executing: ' + command);
    if (options.interactive) {
        if (process.platform === "win32") {
            file += '.cmd';
        }
        child_process.execFileSync(file, args, options.cpOptions);
    } else {
        if (shell.exec(command, options.shellOptions).code !== 0) {
            shell.echo('Error: ' + command + ' failed');
            shell.exit(1);
        }
    }
};

const echo = (message) => {
    return shell.echo('\n💠 ✨  ' + message);
};

const cd = (path) => {
    shell.echo('💠 Current Directory: ' + path);
    shell.cd(path);
};

const copy = (files, from, to) => {
    Object.keys(files).forEach(function (key) {
        let completeFrom = path.resolve(from, key);
        let completeTo = path.resolve(to, files[key]);
        if (isFile(completeTo)) {
            shell.mkdir('-p', path.parse(completeTo).dir);
        } else {
            shell.mkdir('-p', path.join(path.parse(completeTo).dir, path.parse(completeTo).name));
        }
        if (fs.existsSync(completeFrom)) {
            shell.cp('-R', completeFrom, completeTo);
        }
    });
};

const move = (files, from, to) => {
    Object.keys(files).forEach(function (key) {
        let completeFrom = path.resolve(from, key);
        let completeTo = path.resolve(to, files[key]);
        if (isFile(completeTo)) {
            shell.mkdir('-p', path.parse(completeTo).dir);
        } else {
            shell.mkdir('-p', path.join(path.parse(completeTo).dir, path.parse(completeTo).name));
        }
        if (fs.existsSync(completeFrom)) {
            shell.mv('-n', completeFrom, completeTo);
        }
    });
};

module.exports = { execFileSync, echo, cd, copy, move };