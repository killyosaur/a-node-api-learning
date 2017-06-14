'use strict';
import arangojs from 'arangojs';

const db = arangojs();
const graph = db.graph('tiamatDB');

function list_all_posts(req, res) {
    try {
        let docs = await graph.vertexCollection('posts').all();
        res.json(docs);
    } catch(e) {
        res.status(400).send(e);
    }
}

function create_a_post(req, res) {
    try {
        let collection = graph.vertexCollection('posts');
        let doc = await collection.save(req.body);
        res.status(202).json(doc);
    } catch(e) {
        res.status(400).send(e);
    }        
}

function read_a_post(req, res) {
    try {
        let doc = await graph.vertexCollection('posts').document(req.params.postId);
        res.json(doc);
    } catch(e) {
        res.status(400).send(e);
    }
}

function update_a_post(req, res) {
    try {
        let doc = await graph.vertexCollection('posts').update(req.params.postId, req.body);
        res.json(doc);
    } catch(e) {
        res.status(400).send(e);
    }
}

function delete_a_post(req, res) {
    try {
        await graph.vertexCollection('posts').remove(req.params.postId);
        res.status(204);
    } catch(e) {
        res.status(400).send(e);
    }
}

export {
    list_all_posts,
    create_a_post,
    read_a_post,
    update_a_post,
    delete_a_post
};