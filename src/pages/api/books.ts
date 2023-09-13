import {NextApiRequest, NextApiResponse} from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.status(405).send({error: true, message: `Method ${req.method} not allowed`});
    }
    const {subject, pageIndex} = req.query;

    const gbooksReqParams = new URLSearchParams();
    if (!subject) {
        res.status(400).send({error: true, message: 'Subject is required'});
    } else {
        gbooksReqParams.set('q', `Subject:${subject}`);
    }
    if (!pageIndex || typeof pageIndex !== 'string') {
        res.status(400).send({error: true, message: 'Page index is required'});

    } else {
        gbooksReqParams.set('startIndex', pageIndex.toString());
    }


    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?${gbooksReqParams.toString()}`)

    const booksData = await response.json();
    res.status(200).send({
        data: booksData,
    })
}