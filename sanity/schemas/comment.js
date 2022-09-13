export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    },
    {
      name: 'buzz',
      title: 'Buzz',
      description: 'Reference the Buzz the comment is associated to:',
      type: 'reference',
      // The type that is being referenced
      to: {
        type: 'buzz',
      }
    },
  ],
  
}
