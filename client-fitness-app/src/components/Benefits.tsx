import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "@/components/Benefit";

const benefits: Array<BenefitType> = [
    {
        id: 1,
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: " Classes curated and developed by the industry's best talend, bringing result through innovation. " +
            "Performance at its highest level with renowned Personal Training."
    },
    {
        id: 2,
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: "All new members get a Complimentary Training Session in Personal Training, Pilates or Swim. " +
            "Be rewarded with our seasonal New Member Gift Package complete with merchandise + more"
    },
    {
        id: 3,
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "Have some of the best Personal Training Coaches in the industry right at your fingertips. " +
            "Memberships include one complimentary session with a coach in Personal Training"
    }
];


const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.5 }
    }
}


type Props = {
    setSelectedPage: ( value: SelectedPage ) => void
}

const Benefits = ( { setSelectedPage }: Props ) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div onViewportEnter={ () => setSelectedPage( SelectedPage.Benefits ) }>

                {/*HEADER*/ }
                <motion.div
                    className="md:w-3/5 md:my-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={ { once: true, amount: 0.5 } }
                    transition={ { duration: 1.5 } }
                    variants={ {
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    } }
                >
                    <HText>More Then Just a Gym</HText>
                    <p className="my-5 text-xl">
                        We provide world class fitness equipment, trainers and classes to get
                        to your ultimate goals with ease. We provide true care into each and every member
                    </p>
                </motion.div>

                {/*BENEFITS*/ }
                <motion.div
                    className="md:flex items-center justify-between gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={ { once: true, amount: 0.5 } }
                    variants={ container }
                >
                    { benefits.map( ( benefit: BenefitType ) => (
                        <Benefit key={ benefit.id }
                                 icon={ benefit.icon }
                                 title={ benefit.title }
                                 description={ benefit.description }
                                 setSelectedPage={ setSelectedPage }
                        />
                    ) ) }

                </motion.div>

            </motion.div>

        </section>


    )
}


export default Benefits;