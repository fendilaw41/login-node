import Posts from '../models/PostModel.js'

export const getAllPost = async(req, res) => {
    try {
        const posts = await Posts.findAll({
            attributes: ['id', 'title', 'body', 'description']
        });
        res.json({
            status: true,
            message: "Success Fetch Post",
            data: posts
        });
    } catch (error) {
        res.json({
            status: false,
            message: "Gagal Fetch Posts",
            data: error
        });
    }
}

export const storePost = async(req, res) => {
    const { title, slug, body, description } = req.body
    try {
        await Posts.create({
            title: title,
            slug: slug,
            body: body,
            description: description
        })

        res.json({
            status: true,
            message: "Success Save Posts"
        });
        
    } catch (error) {
        console.log(error);
    }
}