import InnerPages_Banner from '../../components/innerPages-banner';
import PageHead from '../../components/pagesmeta';
import WorkLayout from '../../components/workLayout';
import { Works_Data } from '../../const/works';

export default function Works() {
  return (
    <>
      <PageHead
        title="Portfolio: Full Stack MERN Developer | WordPress | React | NextJs "
        description="I build with Love websites that are fast, easy to manage, secure & convert your visitors into customers."
        url="https://www.mufaqar.com/work"
      />
      <InnerPages_Banner title="PORTFOLIO" />
      <section className="py-24 px-5">
        <div className="grid md:grid-cols-2 gap-8">
          {Works_Data?.map((item, id) => {
            return <WorkLayout key={id} data={item} />;
          })}
        </div>
      </section>
    </>
  );
}
