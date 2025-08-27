import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Laurence from "@/assets/images/Laurence SANIAL.png";
import Fred from "@/assets/images/Fred.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Cards";
import { Fragment } from "react";
import kamel from "@/assets/images/kamel.png";

const testimonials = [
    {
        name: "Frederique MOREL",
        position: "Assistante de direction @ Ariane Méditerranée",
        text: "Top Guénolé, merci beaucoup, comme à ton habitude, lorsqu’on échange avec toi sur un sujet tu vas au fond des choses, c’est très appréciable de voir à quel point tu t’investis merci 😊",
        avatar: Fred,
    },
    {
        name: "Laurence SANIAL",
        position: "Directrice d'Ariane Méditerranée",
        text: "Tout d’abord Guénolé je voulais te remercier car tu as fait un excellent travail sur notre site Internet et tu as géré en autonomie les choix graphiques qui nous correspondent parfaitement et cela signifie à quel point tu as compris qui on était et combien tu t’es approprié notre secteur. Je te félicite vraiment je suis très contente du résultat pourtant je suis pénible !! Bravo",
        avatar: Laurence,
    },
    {
        name: "Kamel GABTENI",
        position:
            "Formateur & Responsable projets numériques @ Ariane Méditerranée",
        text: "Travailler avec Guénolé, c’est avoir la certitude qu’un projet avance, même quand les moyens sont limités. J’ai vu son évolution de près : au début on a construit les premières pages de l’application Glide ensemble, puis très vite il a pris les rênes tout seul. Il a su développer des solutions adaptées aux besoins réels des équipes, avec toujours le souci de la simplicité et de l’efficacité.",
        avatar: kamel,
    },
];

export const TestimonialsSection = () => {
    return (
        <div className="py-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    eyebrow="Témoignages"
                    title="Ce qu&rsquo;ils disent de moi"
                    description="Laissez-vous convaincre par les témoignages de ceux qui
                m&rsquo;ont fait confiance."
                />
                <div
                    className="mt-12 lg:mt-20 flex overflow-x-clip 
                [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4"
                >
                    <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
                        {[...new Array(2)].fill(0).map((_, index) => (
                            <Fragment key={index}>
                                {testimonials.map((testimonial) => (
                                    <Card
                                        key={testimonial.name}
                                        className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                                    >
                                        <div className="flex gap-4 items-center">
                                            <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                                <Image
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    className="max-h-full"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-semibold">
                                                    {testimonial.name}
                                                </div>
                                                <div className="text-sm text-white/40">
                                                    {testimonial.position}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-4 md:mt-6 text-sm md:text-base">
                                            {testimonial.text}
                                        </p>
                                    </Card>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
