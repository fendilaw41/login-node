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
            message: "Gagal Fetch Posts"
        });
    }
}

export const storePost = async(req, res) => {
    const { title, slug, body, description } = req.body
    try {
        if (!title) {
            res.status(400).send({ message: "Post title can not be empty!"});
            return;
        }
        if (!body) {
            res.status(400).send({ message: "Post Body can not be empty!"});
            return;
        }
        if (!description) {
            res.status(400).send({ message: "Post Description can not be empty!"});
            return;
        }
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
       res.json({
           status: false,
           message: error.message
        });
    }
}

export const getPostById = async(req, res) => {
    try {
        const id = req.params.id;
        const post = await Posts.findAll({
            attributes: ['title', 'body', 'description'],
            where: {
                id: id
            }
        });
        if(!post[0])
        res.status(404).send({
            message: "Posts with id " + id + " is not found."
        });
        else
        res.json({
            status: true,
            message: "Success Post By Id",
            data: post[0]
        });
        
    } catch (error) {
        res.json({
            status: false,
            message: error.message
         });
    }
}

export const updatePost = async(req, res) => {
        const id = req.params.id;
        const { title, slug, body, description } = req.body
    try {
        if (!title) {
            res.status(400).send({ message: "Post title can not be empty!"});
            return;
        }
        if (!body) {
            res.status(400).send({ message: "Post Body can not be empty!"});
            return;
        }
        if (!description) {
            res.status(400).send({ message: "Post Description can not be empty!"});
            return;
        }
        await Posts.update({ title: title, slug: slug, body: body, description: description }, {
            where: { id: id } 
        })
        res.json({ status: true,  message: "Success Update Post" });
        
    } catch (error) {
        res.json({  status: false, message: "Failed Fetch Posts", error: error.message });
    }
}

export const deletePost = async(req, res) => {
    try {
        const id = req.params.id;
        await Posts.destroy({ where: { id: id } });
        
        res.json({ status: true, message: "Success Post Deleted" });
        
    } catch (error) {
        res.json({ status: false, message: error.message });
    }
}