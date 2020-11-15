import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Addresses extends BaseSchema {
  protected tableName = 'addresses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('city_id').unsigned()
      table.integer('user_id').unsigned()
      table.string('zip_code', 30).notNullable()
      table.string('place', 120).notNullable()
      table.string('number', 45).notNullable()
      table.string('neighborhood', 80).notNullable()
      table.string('complement', 120)
      table.boolean('is_default').defaultTo(true)
      table.timestamps(true)

      table.foreign('city_id').references('id').inTable('cities')
      table.foreign('user_id').references('id').inTable('users')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
