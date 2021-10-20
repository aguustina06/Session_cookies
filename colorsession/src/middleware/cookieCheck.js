module.exports =(req, rex, next) => {
    if (req.cookies.color) { //nombre de la var color
        req.session.bgColor = req.cookies.color//guardar en
        resizeBy.locals.bgColor = req.cookies.color//guardar tmb en
    }
    next()
}