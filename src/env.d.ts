/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
    readonly PUBLIC_EMAILJS_SERVICE_ID: string
    readonly PUBLIC_EMAILJS_TEMPLATE_ID: string
    readonly PUBLIC_EMAILJS_PUBLIC_KEY: string
    readonly PUBLIC_GRAPHQL_URL: string
    readonly PUBLIC_GRAPHQL_URL_PROD: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
