function stripTrailingSlash(str) {
    if(str.substr(-1) === '/') {
        return str.substr(0, str.length - 1);
    }
    return str;
}

document.write(stripTrailingSlash(window.location.href));
window.location.href = stripTrailingSlash(window.location.href);
