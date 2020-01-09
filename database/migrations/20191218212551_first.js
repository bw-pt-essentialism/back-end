
exports.up = function(knex) {
  return (
        knex.schema
            .createTable('users', users => {
                users.increments()
                users.string('name', 60).notNullable()
                users
                    .string('username', 180)
                    .notNullable()
                    .unique()
                users.string('password', 255).notNullable()
                users.string('email', 180).notNullable()
                users.integer('age')

            }) 
            .createTable('projects', prjt => {
                prjt.increments()
                prjt
                    .string('name', 60)
                    .notNullable()
                    .unique()
                prjt.string('description')
                prjt.integer('user_id')
                    .unsigned()
                    .references('id')
                    .inTable('users')
                    .onUpdate('CASCADE')
                    .onDelete('CASCADE')
                })
            .createTable('values', values => {
                values.increments()
                values
                    .string('name')
                    .notNullable()
                    .unique()
                values
                    .string('description')
            })
            .createTable('user_values', uvals => {
                uvals.increments()
                uvals
                    .integer('user_id')
                    .unsigned()
                    .notNullable()
                    .references('id')
                    .inTable('users')
                    .onUpdate('CASCADE')
                    .onDelete('CASCADE')
                uvals
                    .integer('value_id')
                    .unsigned()
                    .notNullable()
                    .references('id')
                    .inTable('values')
                    .onUpdate('CASCADE')
                    .onDelete('CASCADE')
            })
  )
    
};

exports.down = function(knex) {
  return (
      knex.schema
        .dropTableIfExists('user_values')
        .dropTableIfExists('values')
        .dropTableIfExists('projects')
        .dropTableIfExists('users')
  )
};
