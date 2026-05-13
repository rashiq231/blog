import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'
await initDatabase()
const post = new Post({
  title: 'Hello Mongoose',
  author: 'Rashiq',
  contents: 'This post is stored in MongoDB',
  tags: ['mongoose', 'mongodb'],
})

const createdPost = await post.save()
await Post.findByIdAndUpdate(createdPost._id, {
  $set: { title: 'Hello Again, mongoose!' },
})

const posts = await Post.find()
console.log(posts)
