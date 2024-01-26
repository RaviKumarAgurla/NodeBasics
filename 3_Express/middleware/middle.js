const myMiddleware = (req, res, next) => {
    console.log('First Middleware')
    next()
}

module.exports = myMiddleware