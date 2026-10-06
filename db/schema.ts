import {sqliteTable,text,integer,uniqueIndex,index} from 'drizzle-orm/sqlite-core';
export const content=sqliteTable('content',{
 id:text('id').primaryKey(),type:text('type').notNull(),slug:text('slug').notNull(),title:text('title').notNull(),
 excerpt:text('excerpt').notNull().default(''),body:text('body').notNull().default(''),image:text('image').notNull().default(''),
 category:text('category').notNull().default(''),status:text('status').notNull().default('draft'),
 meta:text('meta').notNull().default('{}'),position:integer('position').notNull().default(0),
 updatedAt:text('updated_at').notNull(),
},t=>[uniqueIndex('content_type_slug').on(t.type,t.slug),index('content_type_status').on(t.type,t.status)]);
export const cmsState=sqliteTable('cms_state',{key:text('key').primaryKey(),value:text('value').notNull()});
