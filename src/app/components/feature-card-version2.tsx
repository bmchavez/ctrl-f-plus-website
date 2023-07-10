// ctrl-f-plus-website/src/app/tab-hoarders/components/FeatureCard.tsx

import { motion } from 'framer-motion';
import FeatureIcon1 from './icons/feature1';
import FeatureIcon2 from './icons/feature2';
import FeatureIcon3 from './icons/feature3';
import Container from './layout/Container';

const features = [
  {
    title: `All-Tab Search: The Panoramic View`,
    subTitle: `Upgrade from One-Tab Searches`,
    description: `Your CTRL+F only searches one tab? That's cute. We prefer the panoramic view.`,
    icon: FeatureIcon1,
  },
  {
    title: `Familiar Interface: Revolutionary Yet Comfortable`,
    subTitle: `Innovation with Coziness`,
    description: `Just because we've revolutionized search doesn't mean we can't be cozy. Slip into something comfortable.`,
    icon: FeatureIcon2,
  },
  {
    title: `Easy Activation: CTRL+SHIFT+F`,
    subTitle: `Simplicity at Your Fingertips`,
    description: `CTRL+SHIFT+F. So easy a caveman could do it. But don't worry, you'll probably get the hang of it too.`,
    icon: FeatureIcon3,
  },
];

export default function FeatureCardVersion2() {
  const iconVariants = (index: number) => {
    const initialXOffset = index % 2 === 1 ? '500' : '-500';
    const delayTime = 0.25 * index;

    return {
      hidden: { opacity: 0, scale: 1, x: initialXOffset },
      show: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
          duration: 1.5,
          delay: delayTime,

          // duration: 1.5,
        },
      },
    };
  };

  const textVariants = (index: number) => {
    const delayTime = 0.25 * index;

    return {
      hidden: { opacity: 0, scale: 1, y: 500 },
      show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 1.5,
          // delay: 0.25,
          delay: delayTime,

          // duration: 1.5,
        },
      },
    };
  };

  return (
    <>
      {features.map((feat, index) => {
        return (
          <Container key={feat.title} className="mx-auto flex w-full flex-col ">
            <div className=" laptop:text-left">
              <motion.div
                className="flex min-h-[38.3125rem] flex-col items-center justify-center gap-9 overflow-hidden rounded-[2.25rem] bg-white p-10 shadow-xl laptop:flex-row"
                whileInView="show"
                initial="hidden"
              >
                <motion.div
                  className={`basis-1/3  ${
                    index % 2 === 1 ? 'laptop:order-last' : ''
                  }`}
                  variants={iconVariants(index)}
                >
                  {<feat.icon />}
                </motion.div>

                <motion.div
                  className="flex basis-2/3 flex-col items-center justify-center gap-9 "
                  variants={textVariants(index)}
                >
                  <h2 className="w-full text-center font-inter text-fs-base text-primary1 laptop:text-left">
                    {feat.title}
                  </h2>
                  <h3 className="w-full text-center font-inter text-fs-x0 text-dark1 tablet:text-fs-xl laptop:text-left">
                    {feat.subTitle}
                  </h3>
                  <p
                    className="max-w-[19rem] text-center font-open-sans text-fs-lg text-dark1 tablet:max-w-[23.6875rem] laptop:max-w-full laptop:text-left
    "
                  >
                    {feat.description}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </Container>
        );
      })}
    </>
  );
}

// export default function FeatureCard() {
//   return (
//     // h-full  min-w-[23.5rem]
//     <Container className="mx-auto flex w-full flex-col ">
//       {/* grid grid-cols-1 */}
//       {/* px-[2.25rem] */}
//       <div className="laptop:text-left">
//         <div className="flex min-h-[38.3125rem] flex-col items-center justify-center gap-9 rounded-[2.25rem] bg-white p-10 shadow-xl laptop:flex-row ">
//           <FeatureIcon1 className="basis-1/3" />
//           <div className="flex basis-2/3 flex-col items-center justify-center gap-9 ">
//             <h2 className="w-full text-center font-inter text-fs-base text-primary1 laptop:text-left">
//               All-Tab Search: The Panoramic View
//             </h2>
//             <h3 className="w-full text-center font-inter text-fs-x0 text-dark1 tablet:text-fs-xl laptop:text-left">
//               Upgrade from <br className="hidden laptop:block" />
//               One-
//               <br className="hidden tablet:block laptop:hidden" />
//               Tab Searches
//             </h3>
//             <p
//               className="max-w-[19rem] text-center font-open-sans text-fs-lg text-dark1 tablet:max-w-[23.6875rem] laptop:max-w-full laptop:text-left
// "
//             >
//               Your CTRL+F only searches one tab? That's cute. We prefer the
//               panoramic view.
//             </p>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// }