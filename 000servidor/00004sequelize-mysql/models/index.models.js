const User = require('./User')
const Character = require('./Characters')
const Movies = require('./Movies')
const GenderTypes = require('./GenderTypes')
const ContentTypes = require('./ContentTypes')

//RELACIONES

//muchos a muchos
Character.belongsToMany(Movies, {
    through:'charactersMovies'
})

//mucho a muchos
Movies.belongsToMany(Character, {
    through:'charactersMovies'
})

//uno a uno
Movies.belongsTo(GenderTypes, {
    foreignKey:'genderTypeId',
    targetKey:'id'
})

//uno a muchos
GenderTypes.hasMany(Movies, {
    foreignKey:'genderTypeId',
    sourceKey:'id'
})

ContentTypes.hasMany(Movies, {
    as:'movies',
    foreignKey:'contentTypeId'

})

Movies.belongsTo(ContentTypes, {
    foreignKey:'contentTypeId',
    targetKey:'id'
})


module.exports = {
    User,
    Character,
    Movies,
    GenderTypes,
    ContentTypes
}

