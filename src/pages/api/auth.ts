import {NextApiRequest, NextApiResponse} from "next";


const validate = (email: string, password: string) => {
    const emailIsValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    const passwordIsValid = password.length >= 8;
    if (!emailIsValid || !passwordIsValid) {
        return {error: true, message: 'Email or password are incorrect'};
    }
    return {error: false};
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).send({error: true, message: `Method ${req.method} not allowed`});
    }

    const {email, password} = req.body;
    // Ваша функция для валидации
    const validatedInfo = validate(email, password);

    if (validatedInfo.error) {
        res.status(400).send({error: true, message: 'Email or password are incorrect'});
    } else {
        res.status(200).send({success: true, token: 'testToken'});
    }
}
