module.exports.controller = (app) => {
    //get user page
    app.get('/users', (req,res) => {
        res.render('users', {title: 'Users', description: 'This is a decription of all the users'})
    }) 
}