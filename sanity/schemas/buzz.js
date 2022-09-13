export default {
  name: 'buzz',
  title: 'Buzz',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Text in Tweet',
      type: 'string',
    },
    {
      name: 'blockBuzz',
      title: 'Block Buzz',
      description: 'ADMIN Controls: Toggle if Tweet is deemed inappropriate',
      type: 'boolean',
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
      name: 'image',
      title: 'Buzz image',
      type: 'string',
    },
  ],
}
