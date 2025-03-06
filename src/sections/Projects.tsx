"use client";

import React, { useState } from "react";
import greenweb from "@/assets/images/greenweb.png";
import greenweb2 from "@/assets/images/GreenWeb 2.png";

import structure from "@/assets/images/3 PAGES.png";
import structure1 from "@/assets/images/page1.jpg";
import structure2 from "@/assets/images/page2.jpg";
import structure3 from "@/assets/images/page3.jpg";

import planty from "@/assets/images/planty.png";
import planty1 from "@/assets/images/maquette.png";
import planty2 from "@/assets/images/wordpress.jpg";

import mediterraweb from "@/assets/images/mediterraweb.png";

import MMILAN from "@/assets/images/MMILAN.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import ecomove from "@/assets/images/ecomove.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";

import gamedev from "@/assets/images/gamedev.png";
import blender from "@/assets/images/blender.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Cards";

// Professional Projects
const portfolioProjects = [
    {
        company: "La Nuit de l'ISEN",
        year: "2025",
        title: "Premier prix du Hackathon",
        results: [
            { title: "Enhanced user experience by 40%" },
            { title: "Improved site speed by 50%" },
            { title: "Increased mobile traffic by 35%" },
        ],
        link: "https://mmilan-toulon.alexandrecadel.fr/",
        image: MMILAN,
    },
    {
        company: "Innovative Co",
        year: "2021",
        title: "Light Saas Landing Page",
        results: [
            { title: "Boosted sales by 20%" },
            { title: "Expanded customer reach by 35%" },
            { title: "Increased brand awareness by 15%" },
        ],
        link: "https://youtu.be/7hi5zwO75yc",
        image: lightSaasLandingPage,
    },
    {
        company: "Quantum Dynamics",
        year: "2023",
        title: "AI Startup Landing Page",
        results: [
            { title: "Enhanced user experience by 40%" },
            { title: "Improved site speed by 50%" },
            { title: "Increased mobile traffic by 35%" },
        ],
        link: "https://youtu.be/Z7I5uSRHMHg",
        image: aiStartupLandingPage,
    },
];

// Academic Projects
const academicProjects = [
    {
        company: "Université de Toulon",
        year: "1ère année",
        title: "Green Web",
        results: [
            { title: "Développement d'un modèle prédictif" },
            { title: "Collecte et traitement de données complexes" },
            { title: "Présentation de résultats innovants" },
        ],
        link: "https://example.com/academic-project-1",
        image: greenweb,
        pdfs: [
            {
                name: "Résumé du brevet",
                url: "/documents/depot_de_brevet_lhuillier-buard-canoine.pdf",
            },
        ],
        media: {
            screenshots: [greenweb2],
        },
        detailedDescription: {
            context:
                "Projet de recherche visant à analyser l'impact environnemental des changements climatiques dans la région PACA.",
            objectives: [
                "Modéliser les tendances climatiques à long terme",
                "Identifier les zones les plus vulnérables",
                "Proposer des stratégies d'adaptation",
                "Analyser les impacts à long terme",
                "Développer des modèles prédictifs complexes",
                "Comprendre les dynamiques environnementales régionales",
            ],
            methodologie: [
                "Collecte de données satellitaires",
                "Analyse statistique avancée",
                "Utilisation de modèles de machine learning",
            ],
            technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
            resultats: [
                "Création d'un modèle prédictif avec 85% de précision",
                "Publication dans une revue scientifique internationale",
                "Présentation lors d'une conférence académique",
            ],
        },
    },
    {
        company: "Université de Toulon",
        year: "1ère année",
        title: "Magazine Structure",
        results: [
            { title: "Conception d'une interface utilisateur intuitive" },
            { title: "Intégration de visualisations de données dynamiques" },
            { title: "Optimisation des performances de l'application" },
        ],
        link: "https://example.com/academic-project-2",
        image: structure,
        media: {
            screenshots: [structure1, structure2, structure3],
        },
        detailedDescription: {
            context:
                "Développement d'une plateforme web pour la visualisation interactive de données complexes.",
            objectives: [
                "Créer une interface utilisateur intuitive",
                "Permettre la visualisation de différents types de données",
                "Assurer une performance optimale",
            ],
            methodologie: [
                "Conception UX/UI itérative",
                "Développement frontend avec React",
                "Intégration de bibliothèques de visualisation",
            ],
            technologies: ["React", "D3.js", "Tailwind CSS", "TypeScript"],
            resultats: [
                "Application fonctionnelle avec 5 types de graphiques différents",
                "Temps de chargement réduit de 40%",
                "Retours positifs de la communauté académique",
            ],
        },
    },
    {
        company: "Projet de Recherche",
        year: "2ème année",
        title: "Planty",
        results: [
            { title: "Conception d'une interface utilisateur intuitive" },
            { title: "Intégration de visualisations de données dynamiques" },
            { title: "Optimisation des performances de l'application" },
        ],
        link: "https://example.com/academic-project-2",
        image: planty,
        media: {
            screenshots: [planty1, planty2],
        },
        detailedDescription: {
            context:
                "Développement d'une plateforme web pour la visualisation interactive de données complexes.",
            objectives: [
                "Créer une interface utilisateur intuitive",
                "Permettre la visualisation de différents types de données",
                "Assurer une performance optimale",
            ],
            methodologie: [
                "Conception UX/UI itérative",
                "Développement frontend avec React",
                "Intégration de bibliothèques de visualisation",
            ],
            technologies: ["React", "D3.js", "Tailwind CSS", "TypeScript"],
            resultats: [
                "Application fonctionnelle avec 5 types de graphiques différents",
                "Temps de chargement réduit de 40%",
                "Retours positifs de la communauté académique",
            ],
        },
    },
    {
        company: "Projet de Recherche",
        year: "2023",
        title: "Mediterraweb - SAE 201-202",
        results: [
            { title: "Conception d'une interface utilisateur intuitive" },
            { title: "Intégration de visualisations de données dynamiques" },
            { title: "Optimisation des performances de l'application" },
        ],
        link: "https://example.com/academic-project-2",
        image: mediterraweb,
        media: {
            type: "video",
            url: "https://www.youtube.com/embed/lsVHfcFbhhM",
            screenshots: [mediterraweb],
        },
        pdfs: [
            {
                name: "Cahier de conception",
                url: "/documents/cahier_conception_SAE_201-202.pdf",
            },
            {
                name: "Cahier des charges fonctionnel",
                url: "/documents/SAE_201_202_CDCF_CANOINE-BUARD-LHUILLIER-MARIA-CADEL-PITRUZELLA-GUILLET (1).pdf",
            },
        ],
        detailedDescription: {
            context:
                "Création d'une agence de développement web proposant des services de conception de sites, de templates et de plugins.",
            objectives: [
                "Établir une identité visuelle et une présence en ligne pour l'agence",
                "Développer un site vitrine fonctionnel et attractif",
                "Produire des supports de communication pour promouvoir l'agence",
            ],
            methodologie: [
                "Définition de la charte graphique et création du logo",
                "Développement du site web avec une approche responsive",
                "Production d'un teaser et d'une campagne publicitaire",
            ],
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "WordPress",
                "Adobe Suite",
            ],
            resultats: [
                "Identité visuelle complète (nom, logo, charte graphique)",
                "Site web vitrine opérationnel et responsive",
                "Teaser de lancement et campagne de publicité",
            ],
            competencesValidees: {
                COMPRENDRE: [
                    "AC11.01 - Présenter une organisation, ses activités et son environnement",
                    "AC11.04 - Analyser des formes médiatiques et leur sémiotique",
                    "AC11.05 - Identifier les cibles",
                ],
                CONCEVOIR: [
                    "AC12.01 - Concevoir un produit ou un service en termes d’usage et de fonctionnalité",
                    "AC12.04 - Proposer une stratégie de communication",
                ],
                EXPRIMER: [
                    "AC13.01 - Écrire pour les médias numériques",
                    "AC13.02 - Produire des pistes graphiques et des planches d’inspiration",
                    "AC13.03 - Créer, composer et retoucher des visuels",
                    "AC13.04 - Tourner et monter une vidéo",
                    "AC13.05 - Designer une interface web (wireframes, UI)",
                    "AC13.06 - Optimiser les médias en fonction de leurs usages et supports de diffusion",
                ],
                DEVELOPPER: [
                    "AC14.01 - Exploiter de manière autonome un environnement de développement efficace",
                    "AC14.02 - Produire des pages Web fluides incluant un balisage sémantique efficace et des interactions simples",
                    "AC14.03 - Générer des pages Web à partir de données structurées",
                    "AC14.04 - Mettre en ligne une application Web en utilisant une solution d’hébergement standard",
                    "AC14.06 - Déployer et personnaliser une application Web en utilisant un CMS ou un framework MVC",
                ],
                ENTREPRENDRE: [
                    "AC15.01 - Gérer un projet avec une méthode classique",
                    "AC15.02 - Budgéter un projet et suivre sa rentabilité",
                    "AC15.05 - Construire une présence en ligne professionnelle",
                    "AC15.06 - Interagir au sein des organisations",
                    "AC15.07 - Produire un message écrit ou oral professionnel",
                ],
            },
        },
    },
    {
        company: "Université de Toulon",
        year: "2023",
        title: "Intégration site MMI LAN",
        results: [
            { title: "Développement d'un modèle prédictif" },
            { title: "Collecte et traitement de données complexes" },
            { title: "Présentation de résultats innovants" },
        ],
        link: "https://mmilan-toulon.alexandrecadel.fr/",
        image: MMILAN,
        detailedDescription: {
            context:
                "Projet de recherche visant à analyser l'impact environnemental des changements climatiques dans la région PACA.",
            objectives: [
                "Modéliser les tendances climatiques à long terme",
                "Identifier les zones les plus vulnérables",
                "Proposer des stratégies d'adaptation",
                "Analyser les impacts à long terme",
                "Développer des modèles prédictifs complexes",
                "Comprendre les dynamiques environnementales régionales",
            ],
            methodologie: [
                "Collecte de données satellitaires",
                "Analyse statistique avancée",
                "Utilisation de modèles de machine learning",
            ],
            technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
            resultats: [
                "Création d'un modèle prédictif avec 85% de précision",
                "Publication dans une revue scientifique internationale",
                "Présentation lors d'une conférence académique",
            ],
        },
    },
    {
        company: "Université de Toulon",
        year: "2023",
        title: "Animation 3D",
        results: [
            { title: "Développement d'un modèle prédictif" },
            { title: "Collecte et traitement de données complexes" },
            { title: "Présentation de résultats innovants" },
        ],
        link: "https://example.com/academic-project-1",
        image: blender,
        media: {
            type: "video",
            url: "https://www.youtube.com/embed/FiPKNxhXvBY",
            screenshots: [blender, blender], // On utilise l'image existante pour le test
        },

        detailedDescription: {
            context:
                "Projet de recherche visant à analyser l'impact environnemental des changements climatiques dans la région PACA.",
            objectives: [
                "Modéliser les tendances climatiques à long terme",
                "Identifier les zones les plus vulnérables",
                "Proposer des stratégies d'adaptation",
                "Analyser les impacts à long terme",
                "Développer des modèles prédictifs complexes",
                "Comprendre les dynamiques environnementales régionales",
            ],
            methodologie: [
                "Collecte de données satellitaires",
                "Analyse statistique avancée",
                "Utilisation de modèles de machine learning",
            ],
            technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
            resultats: [
                "Création d'un modèle prédictif avec 85% de précision",
                "Publication dans une revue scientifique internationale",
                "Présentation lors d'une conférence académique",
            ],
        },
    },
    {
        company: "Projet de Recherche",
        year: "2023",
        title: "ECOMOVE",
        results: [
            { title: "Conception d'une interface utilisateur intuitive" },
            { title: "Intégration de visualisations de données dynamiques" },
            { title: "Optimisation des performances de l'application" },
        ],
        link: "https://ecomove.alexandrecadel.fr/",
        image: ecomove,
        detailedDescription: {
            context:
                "Développement d'une plateforme web pour la visualisation interactive de données complexes.",
            objectives: [
                "Créer une interface utilisateur intuitive",
                "Permettre la visualisation de différents types de données",
                "Assurer une performance optimale",
            ],
            methodologie: [
                "Conception UX/UI itérative",
                "Développement frontend avec React",
                "Intégration de bibliothèques de visualisation",
            ],
            technologies: ["React", "D3.js", "Tailwind CSS", "TypeScript"],
            resultats: [
                "Application fonctionnelle avec 5 types de graphiques différents",
                "Temps de chargement réduit de 40%",
                "Retours positifs de la communauté académique",
            ],
        },
    },
];

export const ProjectsSection = () => {
    const [isAcademicView, setIsAcademicView] = useState(false);
    const [selectedProject, setSelectedProject] = useState<
        (typeof academicProjects)[0] | null
    >(null);

    const toggleProjectView = () => {
        setIsAcademicView(!isAcademicView);
    };

    const openProjectModal = (project: (typeof academicProjects)[0]) => {
        setSelectedProject(project);
    };

    const closeProjectModal = () => {
        setSelectedProject(null);
    };

    const currentProjects = isAcademicView
        ? academicProjects
        : portfolioProjects;

    return (
        <>
            <section className="pb-16 lg:py-24">
                <div className="container">
                    <SectionHeader
                        eyebrow="Projets récents"
                        title="Portfolio professionnel"
                        description="Découvrez comment j'ai transformé des concepts en expériences numériques attractives."
                    />
                    {/* Toggle Switch */}
                    <div className="flex justify-center my-6">
                        <div className="flex items-center">
                            <span
                                className={`mr-4 ${
                                    !isAcademicView
                                        ? "font-bold"
                                        : "text-white/50"
                                }`}
                            >
                                Projets Professionnels
                            </span>
                            <label className="inline-flex relative items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={isAcademicView}
                                    onChange={toggleProjectView}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                            <span
                                className={`ml-4 ${
                                    isAcademicView
                                        ? "font-bold"
                                        : "text-white/50"
                                }`}
                            >
                                Projets Académiques
                            </span>
                        </div>
                    </div>

                    <div className="mt-10 md:mt-20 flex flex-col gap-20">
                        {currentProjects.map((project, projectIndex) => (
                            <Card
                                key={project.title}
                                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                                style={{
                                    top: `calc(64px + ${projectIndex * 40}px`,
                                }}
                            >
                                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                    <div className="lg:pb-16">
                                        <div
                                            className="bg-gradient-to-r from-emerald-300 to-sky-400 
                                    inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text"
                                        >
                                            <span>{project.company}</span>
                                            <span>&bull;</span>
                                            <span>{project.year}</span>
                                        </div>

                                        <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                                            {project.title}
                                        </h3>
                                        <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                                        <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                                            {project.results.map(
                                                (result, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex gap-2 text-sm md:text-base text-white/50"
                                                    >
                                                        <CheckCircleIcon className="size-5 md:size-6" />
                                                        <span>
                                                            {result.title}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <div className="flex gap-4 mt-8">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl
                                     font-semibold inline-flex items-center justify-center gap-2"
                                            >
                                                <span>Découvrir</span>
                                                <ArrowUpRightIcon className="size-4" />
                                            </a>
                                            {isAcademicView && (
                                                <button
                                                    onClick={() =>
                                                        openProjectModal(
                                                            project as (typeof academicProjects)[0]
                                                        )
                                                    }
                                                    className="bg-white/10 text-white h-12 w-full md:w-auto px-6 rounded-xl
                                     font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                                                >
                                                    <span>En savoir plus</span>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            className="mt-8 -mb-4 md:-mb-0 
                                            lg:mt-0 lg:absolute lg:h-full
                                            lg:w-auto lg:max-w-none"
                                        />
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal pour les projets académiques */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <Card
                        className="w-full max-w-5xl md:w-4/5 lg:w-4/5 xl:w-4/5 
                        max-h-[90vh] overflow-hidden relative 
                        bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 
                        backdrop-blur-md shadow-2xl"
                    >
                        <div
                            className="p-4 sm:p-6 md:p-8 
                            overflow-y-auto scrollbar-thin scrollbar-track-transparent 
                            scrollbar-thumb-zinc-700 scrollbar-thumb-rounded-full 
                            h-[80vh] custom-scrollbar"
                        >
                            <button
                                onClick={closeProjectModal}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white z-20 transition-colors"
                            >
                                ✕
                            </button>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-6">
                                {selectedProject.title}
                            </h2>

                            <div className="space-y-6">
                                <section>
                                    <h3 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mb-3">
                                        Média du Projet
                                    </h3>

                                    {/* Bouton pour ouvrir la vidéo YouTube */}
                                    {selectedProject.media?.type ===
                                        "video" && (
                                        <div className="flex justify-center mb-4">
                                            <a
                                                href={selectedProject.media.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl   font-semibold inline-flex items-center justify-center gap-2"
                                            >
                                                🎥 Voir la vidéo sur YouTube
                                            </a>
                                        </div>
                                    )}

                                    {/* Affichage des images en dessous du bouton */}
                                    {selectedProject.media?.screenshots &&
                                        selectedProject.media.screenshots
                                            .length > 0 && (
                                            <div className="flex flex-wrap justify-center gap-4">
                                                {selectedProject.media.screenshots.map(
                                                    (imageSrc, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex justify-center"
                                                        >
                                                            <Image
                                                                src={imageSrc}
                                                                alt={`Screenshot ${
                                                                    index + 1
                                                                }`}
                                                                className="rounded-lg w-auto h-auto max-w-[600px]" // Ajuste la largeur max
                                                            />
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    {/* Bouton pour ouvrir le PDF, affiché uniquement si un PDF est défini */}
                                    {/* Affichage des boutons PDF s'il y a plusieurs fichiers */}
                                    {selectedProject?.pdfs &&
                                        selectedProject.pdfs.length > 0 && (
                                            <div className="flex flex-col items-center gap-4 mt-6">
                                                {selectedProject.pdfs.map(
                                                    (pdf, index) => (
                                                        <a
                                                            key={index}
                                                            href={pdf.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl   font-semibold inline-flex items-center justify-center gap-2"
                                                        >
                                                            📄 {pdf.name}
                                                        </a>
                                                    )
                                                )}
                                            </div>
                                        )}
                                </section>

                                <section>
                                    <h3 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mb-4">
                                        Contexte
                                    </h3>
                                    <p className="text-white/60">
                                        {
                                            selectedProject.detailedDescription
                                                .context
                                        }
                                    </p>
                                </section>

                                <section>
                                    <h3 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mb-3">
                                        Objectifs
                                    </h3>
                                    <ul className="list-disc list-inside text-white/60 space-y-2">
                                        {selectedProject.detailedDescription.objectives.map(
                                            (obj, index) => (
                                                <li key={index}>{obj}</li>
                                            )
                                        )}
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mb-3">
                                        Méthodologie
                                    </h3>
                                    <ul className="list-disc list-inside text-white/60">
                                        {selectedProject.detailedDescription.methodologie.map(
                                            (method, index) => (
                                                <li key={index}>{method}</li>
                                            )
                                        )}
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mb-3">
                                        Technologies Utilisées
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.detailedDescription.technologies.map(
                                            (tech, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-white/10 text-white/80 px-2 py-1 rounded-md text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </section>

                                <section>
                                    <h3 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mb-3">
                                        Résultats
                                    </h3>
                                    <ul className="list-disc list-inside text-white/60">
                                        {selectedProject.detailedDescription.resultats.map(
                                            (resultat, index) => (
                                                <li key={index}>{resultat}</li>
                                            )
                                        )}
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </Card>
                </div>
            )}
        </>
    );
};
