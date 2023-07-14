//product.js
import {defineType, defineField} from 'sanity'

const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'The name of the product',
    }),
    defineField({
      name: 'productImage',
      type: 'image',
      description: 'Image of the product',
    }),

    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
    }),
    defineField({
      name: 'cost',
      type: 'number',
      description: 'Cost in dollars.',
    }),
  ],
})

export default product
