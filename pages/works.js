import InnerPages_Banner from '../components/innerPages-banner'
import WorkLayout from '../components/workLayout'


export default function Works() {
  return (
    <>
      <InnerPages_Banner title="PORTFOLIO" />
      <section className='py-24 px-5'>
        <div className='grid md:grid-cols-2 gap-8'>
          <WorkLayout />
          <WorkLayout />
          <WorkLayout />
          <WorkLayout />
          <WorkLayout />
          <WorkLayout />
        </div>
      </section>
    </>
  )
}
