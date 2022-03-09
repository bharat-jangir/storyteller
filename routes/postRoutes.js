var express = require("express")
var router = express.Router()
const protectUser = require("./protectRoute")
const Post = require("../schema/post")

/////create post
router.post("/post", protectUser, async (req, res) => {
    try {
        const { heading, subheading, content, relatedposts, language, writer } = req.body
        const newPost = await new Post({
            heading,
            subheading,
            content,
            relatedposts,
            language,
            writer
        })

        await newPost.save()

        res.status(201).json(newPost)

    } catch (error) {
        throw new Error(error.message)

    }
})

/////update post
router.put("/post", protectUser, async (req, res) => {
    try {
        const { postId } = req.body
        const post = await Post.findOneAndUpdate({ _id: postId }, req.body, { new: true })
        await post.save()
        res.json(post)

    } catch (error) {
        throw new Error(error.message)

    }
})

////delete post
router.delete("/post/:id", protectUser, async (req, res) => {
    try {
        const postId = req.params.id
        const post = await Post.findOneAndDelete({ _id: postId })
        res.json("post has been deleted")
    } catch (error) {
        throw new Error(error.message)

    }
})

////fetch all posts
router.get("/post", async (req, res) => {
    try {
        const allPosts = await Post.find()
        res.status(200).json(allPosts)

    } catch (error) {

    }

})
router.get("/post/:id", async (req, res) => {
    const postId = req.params.id
    try {
        const post = await Post.findById(postId)
        res.json(post)
    } catch (error) {
        res.status(404).json(
            { message: "post is not found" }
        )

    }
})


/////////search post 

// router.post("/post/:q", async (req, res) => {
//     try {
//         const Query = req.params.q
//         const posts = await Post.find()
//         const data= posts.map(u=>{
//             var post=u.heading.toLocaleLowerCase().match(Query) || u.subheading.toLocaleLowerCase().match(Query)
//             const mainPost=post.pobulate("_id")
//             return mainPost
//         })

//         res.json(data)

//     } catch (error) {
//         console.log(error);

//     }
// })

router.get("/post/query/:q", async (req, res) => {
    
    const Query=req.params.q
    const post =await Post.find({
        $or: [
                  { heading: { $regex: Query, $options: "i" } },
                   { subheading: { $regex: Query, $options: "i" } },
        
              ]
    })

    res.json(post)
   
})


module.exports = router