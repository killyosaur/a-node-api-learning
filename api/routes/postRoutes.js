'use strict';
import postCtrl from '../controllers/postsController';

const apiRouter = app => {
    app.route('/posts')
        .get(postCtrl.list_all_posts)
        .post(postCtrl.create_a_post);

    app.route('/posts/:postId')
        .get(postCtrl.read_a_post)
        .put(postCtrl.update_a_post)
        .delete(postCtrl.delete_a_post);
};

export default apiRouter;