import { Brands } from '../components/brands'
import InnerPages_Banner from '../components/innerPages-banner'
import Story from '../components/story'
import Testimonial from '../components/testimonial'

export default function About() {
    return (
        <>
            <InnerPages_Banner title="Mufaqar" />

            <Story />

            <Brands />

            <section className='py-16 px-4'>
                <Testimonial />
            </section>
        </>
    )
}
