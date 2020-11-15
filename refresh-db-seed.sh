#! /bin/sh

node ace migration:rollback
node ace migration:run
node ace db:seed
