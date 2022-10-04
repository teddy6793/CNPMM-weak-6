
const blogs = [];
const Blog = (title,content)=>{
    const id = blogs.length+1;
    return {
        id,
        title,
        content,
        comments: []
    };

};
const getBlogById = (blogID)=>{
    const result = blogs.find(blog => blog.id == blogID);
    return result;
}
const addBlog = (title,content)=>{
    let blog = Blog(title,content);
    blogs.push(blog);
};
const deleteBlog = (blogID) => {
    const index = posts.findIndex(blog => blog.id == blogID);
    if(index != -1){
        posts.splice(index,1);
        return true;
    }
    else return false;
};
const editBlog = (blogID, title,content) => {
    const blog = getBlogById(blogID);
    if(blog){
        blog.title = title;
        blog.content = content;
        return true;
    }
    else return false;
}
const addCommentToBlog = (blogID, comment) => {
    const result = blogs.find(blog => blog.id == blogID);
    if(result){
        result.comments.push(comment);
        return true;
    }
    else return false;
}
module.exports = {
    blogs,
    addBlog,
    deleteBlog,
    editBlog,
    addCommentToBlog,
    getBlogById
}