import { useId } from "react";
import conf from "../conf/conf.js";

import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    account;
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {

            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                })

        } catch (error) {
            console.log("config Service :: createPost :: error ", error)
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {

            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                })

        } catch (error) {
            console.log("config Service :: UpdatePost :: error ", error)
        }
    }

    async deletePost(slug) {
        try {

            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug)
            return true;

        } catch (error) {
            console.log("config Service :: deletePost :: error ", error)
            return false;
        }
    }

    async getPost(slug) {
        try {

            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug)


        } catch (error) {
            console.log("config Service :: getPost :: error ", error)
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {

            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("config Service :: getPosts :: error ", error)
            return false;
        }
    }


    // File Upload Services 

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("config Service :: UploadFile :: error ", error)
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("config Service :: deleteFile :: error ", error)
            return false;
        }
    }

    getFilePreview(fileId) {
        try {
            return this.bucket.getFileView(
                conf.appwriteBucketId,
                fileId
            )

        } catch (error) {
            console.log("config Service :: deleteF getFilePreview :: error ", error)
            return false;
        }
    }



}




const service = new Service()

export default service;