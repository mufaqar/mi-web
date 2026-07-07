
import Head from 'next/head';

const PageHead = ({ title, description, url, curl, ogType }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={curl ? curl : url} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content={ogType || "website"} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Mufaqar Islam" />
            <meta property="og:image" content="https://www.mufaqar.com/images/og-image.svg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:type" content="image/svg+xml" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@mufaqar" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Head>
    );
};

export default PageHead;
