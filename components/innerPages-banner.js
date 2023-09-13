import { motion, Variant } from 'framer-motion'
import { fadeUp } from "../const/animation";

export default function InnerPages_Banner(props) {
  return (
    <>
      <motion.section
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="py-24 bg-gray-50">
        <div className='container mx-auto flex flex-col items-center space-y-2 p-4'>
          <motion.h6
            variants={fadeUp}
            className='text-xl font-medium tracking-widest text-center text-slate-500'>
            {props.sub}
          </motion.h6>
          <motion.h1
            variants={fadeUp}
            className='md:text-6xl text-4xl font-extrabold text-center text-black after:content-["."] after:ml-0.5 after:text-customPink'>
            {props.title}
          </motion.h1>
        </div>
      </motion.section>
    </>
  )
}
