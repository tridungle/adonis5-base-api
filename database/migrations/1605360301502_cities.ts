import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cities extends BaseSchema {
  protected tableName = 'cities'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('state_id').unsigned()
      table.string('code', 20)
      table.string('name', 150).notNullable()
      table.boolean('status').defaultTo(true)
      table.timestamps(true)

      table.foreign('state_id').references('id').inTable('states')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
