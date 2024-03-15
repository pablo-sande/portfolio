export type SkillCardItem = {
    id: number;
    title: string;
    thumbnail: string;
    skillLevel: number;
}

export type FormFields = {
    name: string,
    email: string,
    subject: string,
    message: string,
}

export type FormKeys = {
    serviceId: string,
    templateId: string,
    publicKey: string,
}