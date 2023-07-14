import {defineType, defineField} from 'sanity'
const productReview = defineType({
  name: 'productReview',
  title: 'Product Review',
  type: 'document',
  fields: [
    defineField({
      name: 'product',
      type: 'reference',
      to: {type: 'product'},
    }),
    defineField({
      name: 'title',
      type: 'string',
      description: 'Your review in less than 10 words',
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Full name',
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email address',
    }),
    defineField({
      name: 'rating',
      type: 'number',
      description: 'Rate the product out of 10',
    }),
    defineField({
      name: 'date',
      type: 'datetime',
    }),
    defineField({
      name: 'review',
      type: 'text',
      description: 'Your review in as many words as you can come up with',
    }),
    defineField({
      name: 'wouldRecommend',
      title: 'Would recommend to a friend',
      type: 'boolean',
    }),
  ],
})

export default productReview
