
import { Client } from "@notionhq/client"
 
// Initializing a client


const notion = new Client({auth: import.meta.env.NOTION_API_KEY})

import { NotionToMarkdown } from "notion-to-md";

const n2m = new NotionToMarkdown({ notionClient: notion })


function getDate(datestring) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let date = new Date()

    if (datestring) {
        date = new Date(datestring)
    }

    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    let today = `${month} ${day}, ${year}`

    return today
}

const getPageMetaData = (post) => {
    const getTags = (tags) => {
        const allTags = tags.map((tag) => {
            return tag.name
        })

        return allTags
    }

    var coverImage = null

    if (post.cover !== null) {
        if (post.cover.type == "external") {
            coverImage = post.cover.external.url
        }
    }

    return {
        id: post.id,
        title: post.properties.Name.title[0].plain_text,
        tags: getTags(post.properties.Tags.multi_select),
        date: getDate(post.properties.Created.created_time),
        slug: post.properties.Slug.rich_text[0].plain_text,
        coverImage: coverImage,
    }
}

const parseProjectMetadata = async (project) => {
    const getTags = (tags) => {
        const allTags = tags.map((tag) => {
            return tag.name
        })

        return allTags
    }

    var coverImage = null

    if (project.cover !== null) {
        if (post.cover.type == "external") {
            coverImage = post.cover.external.url
        }
    }

    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks)

    return {
        id: project.id,
        title: project.properties.Name.title[0].plain_text,
        description: project.properties.Description.title[0].plain_text,
        skills: getTags(project.properties.Skills.multi_select),
        tags: getTags(project.properties.Tags.multi_select),
        date: getDate(project.properties.Created.created_time),
        coverImage: coverImage,
    }
}

export const getAllPublished = async () => {

    
    const posts = await notion.databases.query({
        database_id: import.meta.env.NOTION_DB,
        filter: {
            property: "Published",
            checkbox: {
                equals: true,
            },
        },
        sorts: [
            {
                property: "Created",
                direction: "descending",
            },
        ],
    })

    const allPosts = posts.results


    const postPromises = allPosts.map(async (post) => {
        let postmeta = getPageMetaData(post)
    

        const postdata = await getSinglePostBySlug(postmeta.slug)

        return postdata;
    });

    return await Promise.all(postPromises);

}



export const getAllPosts = async () => {
    const posts = await notion.databases.query({
        database_id:import.meta.env.NOTION_DB,
        filter: {
            property: "Published",
            checkbox: {
                equals: true,
            },
        },
        sorts: [
            {
                property: "Created",
                direction: "descending",
            },
        ],
    })

    const allProjects = posts.results;

    const projects = await allProjects.map( async (project) =>  {
        return await parseProjectMetadata(project)
    });

    return projects;
}

// Then, create a new function called getSinglePost in /lib/notion.js.

export const getSinglePostBySlug = async (slug) => {
    const response = await notion.databases.query({
        database_id: import.meta.env.NOTION_DB,
        filter: {
            property: "Slug",
            formula: {
                string: {
                    equals: slug,
                },
            },
        },
    })

    const page = response.results[0]
    const metadata = getPageMetaData(page)
    const mdblocks = await n2m.pageToMarkdown(page.id)
    const mdString = n2m.toMarkdownString(mdblocks)

    return {
        metadata,
        markdown: mdString,
    }
}
