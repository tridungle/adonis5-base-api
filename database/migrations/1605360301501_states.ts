import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class States extends BaseSchema {
  protected tableName = 'states'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('country_id').unsigned()
      table.string('code')
      table.string('name')
      table.string('initials')
      table.boolean('status').defaultTo(true)
      table.timestamps(true)

      table.foreign('country_id').references('id').inTable('countries')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
