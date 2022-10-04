const model = require('../models/models.blogs');
const getAll = (req, res) => {
    res.render('index', {
        title: 'View blogs',
        blogs: model.blogs
    });
};
const addBlog = (req, res) => {
    if (req.method === 'GET') {
        res.render('addBlog', {
            title: 'Add blog'
        });
    }
    else if (req.method == 'POST') {
        if (req.body) {
            const { title, content } = req.body;
            model.addBlog(title, content);
            res.redirect('/');
        }
    }
}
const getBlogById = (req, res) => {
    const { id } = req.params;
    const result = model.getBlogById(id);
    if (result) {
        res.render('blogDetail', {
            title: 'View blog',
            blog: result
        });
    }
}
const deleteBlog = (req, res) => {
    const { id } = req.params;
    const result = model.deleteBlog(id);
    if (result) {
        res.redirect('/');
    }
    else {
        res.render('error', {
            title: "Error",
            message: "Cannot delete this blog"
        });
    }
}
const editBlog = (req, res) => {
    const { id } = req.params;
    if (req.method === 'GET') {
        const result = model.getBlogById(id);
        res.render('editBlog', {
            title: 'Edit blog',
            blog:result
        });
    }
    else if (req.method === 'POST') {
        if (req.body) {
            const { title, content } = req.body;
            const result = model.editBlog(id,title,content);
            if(result){
                res.redirect('http://localhost:5000/' + id);
            }
            else {
                res.render('error', {
                    title: "Error",
                    message: "Cannot edit this blog"
                });
            }
            
        }
    }
}
const addCommentToBlog = (req, res) => {
    const id = req.params.id;
    const comment = req.body.comment;
    if (comment && model.addCommentToBlog(id, comment)) {
        res.redirect('http://localhost:5000/' + id);
    }
    else res.status(400).render('error', {
        title: "Error",
        message: "Cannot add comment to this blog"
    })


}
module.exports = {
    getAll,
    addBlog,
    getBlogById,
    deleteBlog,
    editBlog,
    getBlogById,
    addCommentToBlog
}