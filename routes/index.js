const group =require('./group/group.js')

module.exports =app=>{
    app.use('/group',group)

}
