
import moduleAlias from 'module-alias'

//
// Register alias
//
moduleAlias.addAlias('@domain', __dirname + '/domain')
moduleAlias.addAlias('@infrastructure', __dirname + '/infrastructure')

moduleAlias()