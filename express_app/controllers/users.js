module.exports.controller = (app) => {
    //get user page
    app.get('/users', (req,res) => {
        res.render('index', {title: 'Users'})
    }) 
}