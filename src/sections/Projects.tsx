"use client";

import React, { useState } from "react";

import nuit from "@/assets/images/mockupndli.png";

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
import boutique from "@/assets/images/boutique.png";
import ads from "@/assets/images/ads.png";
import articles from "@/assets/images/articles.png";
import post1 from "@/assets/images/Post.png";
import accueil from "@/assets/images/accueil.png";
import offres from "@/assets/images/offre.png";
import cal from "@/assets/images/cal.png";
import apl from "@/assets/images/apl.png";
import noyau from "@/assets/images/NoyauConnexion.png";

import MMILAN from "@/assets/images/MMILAN.png";
import ecomove from "@/assets/images/ecomove.png";

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
            { title: "Site fonctionnel livré en 12 h" },
            { title: "Thème : organisation d’événements e-sportifs" },
            { title: "1er prix — jury ISEN 2025" },
        ],
        link: "https://ndl-isen-2025.alexandrecadel.fr/",
        image: nuit,
        detailedDescription: {
            context:
                "Hackathon nocturne de l’ISEN : réaliser, en 12 heures, un site événementiel autour de l’organisation d’évènements e-sportifs (tournois, inscriptions, planning). Contraintes fortes : temps ultra-court, démo live devant jury, livrable public et responsive.",
            objectives: [
                "Sortir un MVP opérationnel : présentation de l’événement, inscriptions d’équipes, planning et classement, compte à rebours.",
                "Offrir une UX très simple (mobile-first) pour limiter la friction le soir même.",
                "Déployer le site avant la soutenance et assurer une démo fluide.",
            ],
            methodologie: [
                "Cadrage express (scope strict, user flow minimal), prototypage rapide (sections clés), puis développement itératif en petites tâches (to-do → doing → done). Tests fréquents en conditions réelles (mobile/wifi), mise en prod progressive et correctifs à chaud avant la démo. Focus sur des composants réutilisables (cartes équipe, blocs planning, pastilles d’état) et sur la lisibilité des infos (hiérarchie typographique, contrastes, CTA clairs).",
            ],
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "GitHub",
                "Vercel",
                "Figma",
                "Shadcn/UI",
            ],
            resultats: [
                "Site livré en 12 h, déployé et démontré en live sans incident.",
                "1er prix du jury ISEN 2025.",
                "Parcours clair (inscription → planning → suivi des scores), responsive et compréhensible en quelques secondes.",
                "Base réutilisable pour d’autres évènements de type LAN/meet-up.",
            ],
            competencesValidees: {
                COMPRENDRE: [
                    "respect des bonnes pratiques web (lisibilité, accessibilité de base, performance “suffisante” pour la démo)",
                ],
                CONCEVOIR: [
                    "cadrage fonctionnel, hiérarchie d’information, design mobile-first.",
                ],
                EXPRIMER: ["micro-copies efficaces, pitch de démo clair."],
                DEVELOPPER: [
                    "intégration front responsive, interactions simples, mise en ligne en autonomie.",
                ],
                ENTREPRENDRE: [
                    "gestion du temps, priorisation, démo convaincante (pression temps réel).",
                ],
            },
        },
    },
    {
        company: "Relance e-commerce (OMS)",
        year: "2024",
        title: "TPEPASCHER.com",
        results: [
            { title: "Relance e-commerce sous Wix" },
            { title: "Google PageSpeed Insights 97 + SEO/SEA" },
            { title: "37 commandes en 7 mois" },
        ],
        link: "https://www.tpepascher.com/",
        image: boutique,
        media: {
            screenshots: [ads, articles],
        },
        detailedDescription: {
            context:
                "Relance d’une sous-marque e-commerce arrêtée en 2018. Mission : créer un site marchand performant et maintenable par une petite équipe non technique.",
            objectives: [
                "Site e-commerce complet et responsive (catalogue, commandes, back-office).",
                "Score PageSpeed > 90 + bases SEO solides.",
                "Acquisition mixte : blog SEO (11 articles) + SEA Google Ads.",
                "Transmission : formation et documentation.",
            ],
            methodologie: [
                "Benchmark UX/SEO/positionnement.",
                "Prototypage Figma puis production visuelle (shooting + scripts Photoshop).",
                "Intégration et configuration sous Wix (gabarits, fiches structurées, taxonomie).",
                "Optimisations perfs/SEO (compression, structure, Screaming Frog & PageSpeed).",
                "Mise en place Analytics/Search Console & campagnes Ads.",
                "Allers-retours avec le gérant, formation back-office.",
            ],
            technologies: [
                "Wix (CMS)",
                "Figma",
                "Adobe Photoshop",
                "Screaming Frog SEO Spider",
                "Google PageSpeed Insights",
                "Google Analytics / Search Console",
                "Google Ads",
                "Gestion Domaine/DNS/HTTPS",
            ],
            resultats: [
                "Score PageSpeed porté de 59 à 97.",
                "37 commandes en 7 mois.",
                "4 570 clics et 600 000+ impressions via Ads.",
                "Back-office opérationnel et repris par l’équipe.",
            ],
            competencesValidees: {
                COMPRENDRE: [
                    "AC21.01 – Analyse de stratégie/positionnement",
                    "AC21.02 – Audit trafic & indexation",
                    "AC21.05 – Cartographie de l’expérience (Analytics)",
                ],
                CONCEVOIR: [
                    "Architecture d’information, gabarits produits, parcours d’achat",
                ],
                EXPRIMER: [
                    "Ligne éditoriale claire, rédaction d’articles, publications RS",
                ],
                DEVELOPPER: [
                    "AC14.01/02/03/04/06 – Environnement outillé, intégration responsive, données structurées, mise en ligne, personnalisation CMS",
                    "AC24.01/03/05 – Responsive, interactions, optimisation perfs/SEO",
                ],
                ENTREPRENDRE: [
                    "AC15.01 – Pilotage classique du projet",
                    "AC15.02 – Budget SEA et suivi",
                    "AC25.01 – Amélioration continue (itérations)",
                    "AC25.05 – Codes pro (docs, passation)",
                    "AC15.07 – Messages pro (formation, supports)",
                ],
            },
        },
    },
    {
        company: "Itinéraire Café / OMS",
        year: "2022–2023",
        title: "i-menus — Menu tablette & borne",
        results: [
            { title: "Menu tablette clé-en-main" },
            { title: "50+ visuels batchés (Photoshop)" },
            { title: "Thème clair/sombre + borne" },
        ],
        link: "https://www.i-menus.com/",
        image: post1,
        detailedDescription: {
            context:
                "Mission confiée par Optima Monétique Systèmes pour déployer la solution i-menus chez Itinéraire Café en amont de la saison estivale. Enjeux : personnaliser l’application de menu tablette à l’identité du client, produire et intégrer 50+ visuels produits, et proposer une variante borne consultative pour capter les passants — le tout en moins d’un mois.",
            objectives: [
                "Menu tablette fidèle à la charte du client",
                "Deux directions UI (clair/sombre) au choix",
                "Production visuelle industrialisée et légère",
                "Adaptation borne : déclinaisons visuelles grand format pour l’attraction vitrine.",
                "Intégration back-office i-menus + déclinaison borne",
            ],
            methodologie: [
                "Brief & mini-benchmark, maquettes Figma, itérations",
                "Actions Photoshop + traitement par lots pour 50+ visuels",
                "Compression Optimizilla et tests sur tablette",
                "Intégration back-office (accueil, catégories, familles, fiches)",
                "Adaptation borne (grands visuels cohérents)",
            ],
            technologies: [
                "Figma",
                "Adobe Photoshop (actions & batch)",
                "Optimizilla",
                "Back-office i-menus",
                "site i-menus",
            ],
            resultats: [
                "Livraison dans les délais avant saison",
                "Bibliothèque de visuels homogènes et optimisés",
                "Borne consultative alignée avec le menu tablette",
                "Autonomie client via le back-office",
            ],
            competencesValidees: {
                COMPRENDRE: [
                    "AC11.02 – Évaluer un dispositif existant",
                    "AC11.05 – Identifier les cibles et usages",
                ],
                CONCEVOIR: [
                    "AC12.01 – Concevoir en termes d’usage et de fonctionnalité",
                ],
                EXPRIMER: [
                    "AC13.02 – Pistes graphiques",
                    "AC13.03 – Création/retouche visuels",
                    "AC13.05 – UI design (wireframes, écrans)",
                    "AC13.06 – Optimisation médias",
                ],
                DEVELOPPER: [
                    "AC14.01/14.02/14.06 – Environnement outillé, intégration, personnalisation CMS",
                    "AC24.01 – Responsive",
                ],
                ENTREPRENDRE: [
                    "AC15.01 – Gestion de projet (délais serrés)",
                    "AC15.07 – Restitution et dialogue client",
                ],
            },
        },
    },
    {
        company: "Ariane Méditerranée",
        year: "2025",
        title: "App Glide — Offres & Positionnements",
        results: [
            { title: "App interne Glide" },
            { title: "Offres & positionnements centralisés" },
            { title: "Stats & notifications auto" },
        ],
        link: "https://ariane-mediterranee.fr",
        image: accueil,
        media: {
            screenshots: [accueil, offres],
        },
        detailedDescription: {
            context:
                "Centralisation des offres, positionnements, événements et ressources dans une app interne Glide (zéro budget, utilisateurs non techniques).",
            objectives: [
                "Unifier offres/candidats/événements/stats",
                "Fiabiliser l’historique et gagner du temps",
                "Produire des indicateurs utiles (insertions, archivage)",
            ],
            methodologie: [
                "Itérations courtes, canal Slack pour feedbacks",
                "Modélisation des données (Sheets) et vues Glide",
                "Automatisations Make/Zapier (mails, archivage J+90)",
                "Documentation + micro-formations 1:1",
            ],
            technologies: [
                "Glide",
                "Google Sheets & Drive",
                "Make",
                "Slack",
                "Zapier",
            ],
            resultats: [
                "Usage quotidien par les équipes (CIP, CRE, référents)",
                "Statuts d’offres + archivage auto pour statistiques",
                "Historique par bénéficiaire, traçabilité renforcée",
                "Adoption rapide grâce à la doc et l’accompagnement",
            ],
            competencesValidees: {
                COMPRENDRE: [
                    "AC11.02 – Évaluer un dispositif existant",
                    "AC11.05 – Identifier les cibles/usages internes",
                ],
                CONCEVOIR: [
                    "AC12.01 – Concevoir en termes d’usage",
                    "AC22.01 – Co-concevoir le produit avec retours terrain",
                ],
                EXPRIMER: [
                    "AC13.01 – Rédiger doc et messages d’accompagnement",
                ],
                DEVELOPPER: [
                    "AC14.01/14.06 – Environnement outillé & personnalisation CMS",
                    "AC24.01/24.03 – Vues responsives & interactions",
                ],
                ENTREPRENDRE: [
                    "AC35.01 – Piloter un produit",
                    "AC35.02 – Maîtriser la qualité d’usage",
                    "AC35.04 – Défendre et expliquer les choix",
                ],
            },
        },
    },
    {
        company: "Ariane Méditerranée",
        year: "2025",
        title: "App gestion des formations & salles",
        results: [
            { title: "App gestion formations" },
            { title: "Planning, salles, présences" },
            { title: "Backend complet (Node/Mongo)" },
        ],
        link: "https://ariane-mediterranee.fr",
        image: cal,
        media: {
            screenshots: [cal, apl],
        },
        detailedDescription: {
            context:
                "Remplacement de Google Sheets par une app web centralisée pour planifier formations/salles et suivre les présences.",
            objectives: [
                "Créer formations/séances (ponctuelles & récurrentes)",
                "Réserver salles et affecter formateurs/bénéficiaires",
                "Assurer traçabilité et préparer exports PDF/emails",
            ],
            methodologie: [
                "React (Vite)",
                "Node.js",
                "Express",
                "MongoDB/Mongoose",
                "JWT",
                "Bootstrap CSS",
                "React Big Calendar",
                "Puppeteer PDF",
            ],
            technologies: [
                "Glide",
                "Google Sheets & Drive",
                "Make",
                "Slack",
                "Zapier",
            ],
            resultats: [
                "Backend complet livré, front opérationnel pour la gestion",
                "Centralisation et traçabilité des données",
                "Adoption interne positive, extension multi-agences prévue",
            ],
            competencesValidees: {
                COMPRENDRE: [
                    "AC11.02 – Évaluer un dispositif existant",
                    "AC11.05 – Identifier les cibles/usages internes",
                ],
                CONCEVOIR: [
                    "AC12.01 – Concevoir en termes d’usage",
                    "AC22.01 – Co-concevoir le produit avec retours terrain",
                ],
                EXPRIMER: [
                    "AC13.01 – Rédiger doc et messages d’accompagnement",
                ],
                DEVELOPPER: [
                    "AC14.01",
                    "AC14.02",
                    "AC14.05",
                    "AC24.01",
                    "AC24.04",
                    "AC34.01",
                    "AC34.02",
                ],
                ENTREPRENDRE: [
                    "AC35.01 – Piloter un produit",
                    "AC35.02 – Maîtriser la qualité d’usage",
                    "AC35.04 – Défendre et expliquer les choix",
                ],
            },
        },
    },
];

// Academic Projects
const academicProjects = [
    {
        company: "Projet de Recherche",
        year: "2023",
        title: "Mediterraweb - SAE 201-202",
        results: [
            { title: "Identité de marque & charte complètes" },
            { title: "Site vitrine WordPress responsive orienté conversion" },
            { title: "Teaser de lancement + event VR sponsorisé" },
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
                "Projet d’agence fictive mené en mode “équipe-agence” (commande SAEMMITLN). Exigences : identité originale, cohérence de marque, présence web, lancement événementiel (teaser + événement imposés), et communication multicanale mesurable, le tout sur un planning serré (S11→S22).",
            objectives: [
                "Formaliser une identité de marque complète (nom, logo, charte) et un positionnement clair.",
                "Mettre en ligne un site vitrine orienté conversion (contact, prise d’information).",
                "Produire un teaser de lancement et opérer une campagne social media cohérente.",
                "Organiser un événement VR fédérateur autour de l’agence.",
            ],
            methodologie: [
                "Branding & UX-UI : benchmark, personas, naming, charte (couleurs/typos), maquettes Figma.",
                "Site : intégration WordPress (Hello + Elementor), arborescence conversion-first, responsive, base SEO.",
                "Teaser & event : note d’intention, storyboard, tournage, montage/motion; logistique d’un mini-event VR.",
                "Communication : lignes éditoriales, calendriers de publications, suivi des performances (Meta/GA).",
                "Gestion de projet : WBS, Gantt, jalons, budget/sponsors, registres de risques, dossiers de suivi.",
            ],
            technologies: [
                "Figma",
                "Illustrator/Photoshop",
                "After Effects/Premiere Pro",
                "WordPress (Hello + Elementor)",
                "Hostinger",
                "Meta Business Suite",
                "Google Analytics",
                "Event) Unity/Blender pour les assets VR",
                "MS Project (WBS/Gantt)",
            ],
            resultats: [
                "Identité visuelle aboutie (logo, charte, déclinaisons web/print, favicon, kits réseaux).",
                "Site vitrine opérationnel (pages agence/services/réalisations/blog/contact, CTA permanents, responsive).",
                "Teaser finalisé et diffusé + campagne social media (posts, carrousels, Reels).",
                "Événement VR organisé (~40 participants) avec sponsoring Gaumont Pathé et retours positifs.",
                "Dossiers livrés : cahier des charges, cahier de conception, WBS/Gantt, guide d’utilisation/maintenance.",
            ],
            competencesValidees: {
                COMPRENDRE: [
                    "AC11.01 - Présenter une organisation, ses activités et son environnement",
                    "AC11.04 - Analyser des formes médiatiques et leur sémiotique",
                    "AC11.05 - Identifier les cibles",
                    "AC11.06 – Entretiens/personas et user stories pour cadrer cibles & usages.",
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
                "Événement e-sport organisé par le département MMI Toulon (promo entière, pôles dédiés). Enjeux : centraliser l’info (site), fiabiliser les matchs (serveurs dédiés), fluidifier l’exploitation jour J (accueil, arbitrage, régie). Contraintes fortes de réseau/électricité, délais courts, et adoption par +90 étudiants.",
            objectives: [
                "Mettre en ligne un hub d’inscriptions et d’informations clair, fournir un classement live lisible pour les joueurs/spectateurs, et assurer la stabilité des serveurs de jeu (Counter-Strike 2) malgré la faible maturité de l’écosystème à la date de l’événement.",
            ],
            methodologie: [
                "Côté web, j’ai intégré l’équipe dev : pages “planning” et “connexion”, corrections de bugs, hébergement, nom de domaine, configuration emails automatiques, et déploiement continu via GitHub (pull requests + hooks). J’ai aussi développé la page “classement des pools” avec rendu conditionnel selon la place (or/argent/bronze + effets). Côté infra, j’ai créé et configuré les serveurs CS2 (jeton Steam, modes, maps, slots), écrit un script d’automatisation Windows pour le lancement, et mené des tests en réseau local virtualisé afin de m’aligner sur les conditions réelles. Le jour J : installation des postes, anti-triche, hosting des parties, et support régie.",
            ],
            technologies: [
                "PHP, MySQL, Git/GitHub (PR, hooks), hébergement web + DNS & emails, Counter-Strike 2 Dedicated Server, scripts Windows, OBS/plateformes live (support régie).",
            ],
            resultats: [
                "Le site a servi de point d’entrée fiable (planning, connexions, infos joueurs) et la page de classement dynamique a rendu la compétition lisible en temps réel. Les serveurs CS2 ont tenu la charge pendant l’événement, malgré des commandes encore instables à cette période. L’exploitation terrain (accueil, arbitrage, régie) s’est déroulée sans incident majeur sur mon périmètre.",
            ],
            competencesValidees: {
                COMPRENDRE: [
                    "contraintes techniques (LAN, débit, droits), tests en environnement simulé, adaptation rapide.",
                ],
                CONCEVOIR: [
                    "architecture des pages clés, logique de classement, scénarisation des flux joueurs.",
                ],
                EXPRIMER: [
                    "interfaces claires pour un contexte live, messages techniques aux équipes, présence micro (cast/annonces ponctuelles).",
                ],
                DEVELOPPER: [
                    "intégration front dynamique (JS/CSS conditionnel), back PHP/MySQL, déploiement et automatisation.",
                ],
                ENTREPRENDRE: [
                    "préparation opérationnelle, gestion des risques réseau/serveurs, coordination avec régie/arbitrage.",
                ],
            },
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
        company: "Université de Toulon",
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
    {
        company: "Université de Toulon",
        year: "2025",
        title: "VisioConf",
        results: [
            { title: "Temps réel (Socket.io)" },
            { title: "Next.js + Express + Mongo" },
            { title: "Reprise & refactor d’un legacy" },
        ],
        link: "",
        image: noyau,
        detailedDescription: {
            context:
                "Reprise et ré-appropriation d’un projet legacy de 3ᵉ année pour en faire une base stable et démontrable : messagerie/visioconf inspirée de Discord/Teams, avec équipes, salons textuels & vocaux et partage de fichiers. Enjeu : comprendre un code existant, le refactorer, sécuriser l’authentification et livrer une démo fluide en temps réel.",
            objectives: [
                "Stabiliser la communication temps réel (chat, présence, notifications), structurer les modèles de données (équipes, salons, messages, pièces jointes), sécuriser l’accès (rôles/droits, JWT), mettre en place un environnement conteneurisé pour développer/tester, et fournir une documentation claire (archi, installation, usage).",
            ],
            methodologie: [
                "Audit du code hérité puis refactor par couches (front, API, sockets). Conception d’un schéma d’architecture et d’une modélisation MongoDB unifiée. Mise en place du flux PR/merge GitHub, d’un docker-compose (MongoDB + API Express + front Next.js) et d’un reverse proxy. Côté front : composants Next.js + TypeScript, gestion d’état, vues équipes/salons. Côté back : controllers Express, rooms Socket.io, logique d’autorisations, upload de fichiers. Sessions de tests latence/fiabilité et démos itératives.",
            ],
            technologies: [
                "Next.js",
                "Express.js",
                "Socket.io",
                "MongoDB + Mongoose",
                "JWT",
                "Docker",
                "GitHub",
            ],
            resultats: [
                "Messagerie temps réel (chat, présence, notifications), création/gestion d’équipes et de salons, partage de fichiers, base de code documentée et conteneurisée (setup en quelques commandes). Performances stables en démo, avec une architecture prête pour des features ultérieures (visio/audio étendue, recherche, modération).",
            ],
            competencesValidees: {
                COMPRENDRE: [
                    "Audit d’un legacy, mesure rapide latence/charge, veille technique.",
                ],
                CONCEVOIR: [
                    "Architecture modulaire, règles d’accès et de permissions, schémas d’archi.",
                ],
                EXPRIMER: [
                    "Docs techniques (installation/archi/usage) et démos claires.",
                ],
                DEVELOPPER: [
                    "Framework client & serveur, sockets en temps réel, modélisation de données, packaging Docker.",
                ],
                ENTREPRENDRE: [
                    "Pilotage itératif (PR/merge), coordination et priorisation, défense des choix techniques.",
                ],
            },
        },
    },
] as const;

type AcademicProject = (typeof academicProjects)[number];
type PortfolioProject = (typeof portfolioProjects)[number];
type AnyProject = AcademicProject | PortfolioProject;

export const ProjectsSection = () => {
    const [isAcademicView, setIsAcademicView] = useState(false);
    const [selectedProject, setSelectedProject] = useState<AnyProject | null>(
        null
    );

    const toggleProjectView = () => setIsAcademicView(!isAcademicView);
    const openProjectModal = (project: AnyProject) =>
        setSelectedProject(project);
    const closeProjectModal = () => setSelectedProject(null);

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

                    {/* Toggle */}
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

                    {/* Cartes projets */}
                    <div className="mt-10 md:mt-20 flex flex-col gap-20">
                        {currentProjects.map((project, projectIndex) => {
                            const hasDetails =
                                (project as any).detailedDescription ||
                                (project as any).media ||
                                (project as any).pdfs;

                            return (
                                <Card
                                    key={project.title}
                                    className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                                    style={{
                                        top: `calc(64px + ${
                                            projectIndex * 40
                                        }px`,
                                    }}
                                >
                                    <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                        <div className="lg:pb-16">
                                            <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
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
                                                    className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
                                                >
                                                    <span>Découvrir</span>
                                                    <ArrowUpRightIcon className="size-4" />
                                                </a>

                                                {/* NEW: bouton En savoir plus pour TOUTES les cartes (pro & académiques) si contenu détaillé
                            — et fallback : on affiche quand même une modale résumé */}
                                                <button
                                                    onClick={() =>
                                                        openProjectModal(
                                                            project as AnyProject
                                                        )
                                                    }
                                                    className="bg-white/10 text-white h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                                                >
                                                    <span>En savoir plus</span>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                                            />
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Modale (pro & académiques) */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <Card className="w-full max-w-5xl md:w-4/5 lg:w-4/5 xl:w-4/5 max-h-[90vh] overflow-hidden relative bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-md shadow-2xl">
                        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700 scrollbar-thumb-rounded-full h-[80vh] custom-scrollbar">
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
                                {/* Média (si dispo) */}
                                {(selectedProject as any).media ||
                                (selectedProject as any).pdfs ? (
                                    <section>
                                        <h3 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mb-3">
                                            Média du Projet
                                        </h3>

                                        {(selectedProject as any).media
                                            ?.type === "video" && (
                                            <div className="flex justify-center mb-4">
                                                <a
                                                    href={
                                                        (selectedProject as any)
                                                            .media.url
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
                                                >
                                                    🎥 Voir la vidéo sur YouTube
                                                </a>
                                            </div>
                                        )}

                                        {(selectedProject as any).media
                                            ?.screenshots?.length > 0 && (
                                            <div className="flex flex-wrap justify-center gap-4">
                                                {(
                                                    selectedProject as any
                                                ).media.screenshots.map(
                                                    (
                                                        imageSrc: any,
                                                        index: number
                                                    ) => (
                                                        <div
                                                            key={index}
                                                            className="flex justify-center"
                                                        >
                                                            <Image
                                                                src={imageSrc}
                                                                alt={`Screenshot ${
                                                                    index + 1
                                                                }`}
                                                                className="rounded-lg w-auto h-auto max-w-[600px]"
                                                            />
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        )}

                                        {(selectedProject as any).pdfs?.length >
                                            0 && (
                                            <div className="flex flex-col items-center gap-4 mt-6">
                                                {(
                                                    selectedProject as any
                                                ).pdfs.map(
                                                    (
                                                        pdf: any,
                                                        index: number
                                                    ) => (
                                                        <a
                                                            key={index}
                                                            href={pdf.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
                                                        >
                                                            📄 {pdf.name}
                                                        </a>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </section>
                                ) : null}

                                {/* Contexte (ou fallback résumé) */}
                                <section>
                                    <h3 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mb-4">
                                        Contexte
                                    </h3>
                                    <p className="text-white/60">
                                        {(selectedProject as any)
                                            .detailedDescription?.context ??
                                            `Projet ${selectedProject.title} — ${selectedProject.company} (${selectedProject.year}).`}
                                    </p>
                                </section>

                                {/* Objectifs */}
                                {(selectedProject as any).detailedDescription
                                    ?.objectives && (
                                    <section>
                                        <h3 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mb-3">
                                            Objectifs
                                        </h3>
                                        <ul className="list-disc list-inside text-white/60 space-y-2">
                                            {(
                                                selectedProject as any
                                            ).detailedDescription.objectives.map(
                                                (
                                                    obj: string,
                                                    index: number
                                                ) => (
                                                    <li key={index}>{obj}</li>
                                                )
                                            )}
                                        </ul>
                                    </section>
                                )}

                                {/* Méthodologie */}
                                {(selectedProject as any).detailedDescription
                                    ?.methodologie && (
                                    <section>
                                        <h3 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mb-3">
                                            Méthodologie
                                        </h3>
                                        <ul className="list-disc list-inside text-white/60">
                                            {(
                                                selectedProject as any
                                            ).detailedDescription.methodologie.map(
                                                (m: string, i: number) => (
                                                    <li key={i}>{m}</li>
                                                )
                                            )}
                                        </ul>
                                    </section>
                                )}

                                {/* Technologies */}
                                {(selectedProject as any).detailedDescription
                                    ?.technologies && (
                                    <section>
                                        <h3 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mb-3">
                                            Technologies Utilisées
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {(
                                                selectedProject as any
                                            ).detailedDescription.technologies.map(
                                                (tech: string, i: number) => (
                                                    <span
                                                        key={i}
                                                        className="bg-white/10 text-white/80 px-2 py-1 rounded-md text-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </section>
                                )}

                                {/* Résultats (détaillés) */}
                                {(selectedProject as any).detailedDescription
                                    ?.resultats && (
                                    <section>
                                        <h3 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mb-3">
                                            Résultats
                                        </h3>
                                        <ul className="list-disc list-inside text-white/60">
                                            {(
                                                selectedProject as any
                                            ).detailedDescription.resultats.map(
                                                (r: string, i: number) => (
                                                    <li key={i}>{r}</li>
                                                )
                                            )}
                                        </ul>
                                    </section>
                                )}

                                {/* Fallback "Faits marquants" si pas de detailedDescription.resultats */}
                                {!(selectedProject as any).detailedDescription
                                    ?.resultats &&
                                    selectedProject.results?.length > 0 && (
                                        <section>
                                            <h3 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mb-3">
                                                Faits marquants
                                            </h3>
                                            <ul className="list-disc list-inside text-white/60">
                                                {selectedProject.results.map(
                                                    (r, i) => (
                                                        <li key={i}>
                                                            {r.title}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </section>
                                    )}

                                {/* Compétences (si dispo) */}
                                {(selectedProject as any).detailedDescription
                                    ?.competencesValidees && (
                                    <section>
                                        <h3 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mb-3">
                                            Compétences Validées
                                        </h3>
                                        <div className="space-y-4">
                                            {Object.entries(
                                                (selectedProject as any)
                                                    .detailedDescription
                                                    .competencesValidees
                                            ).map(
                                                (
                                                    [category, skills]: any,
                                                    index
                                                ) => (
                                                    <div key={index}>
                                                        <h4 className="text-lg font-semibold text-white/80 mb-2">
                                                            {category}
                                                        </h4>
                                                        <ul className="list-disc list-inside text-white/60 space-y-1">
                                                            {skills.map(
                                                                (
                                                                    skill: string,
                                                                    j: number
                                                                ) => (
                                                                    <li key={j}>
                                                                        {skill}
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </section>
                                )}

                                {/* Lien “Découvrir” dans la modale */}
                                {selectedProject.link && (
                                    <div className="flex justify-center pt-2">
                                        <a
                                            href={selectedProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
                                        >
                                            Découvrir
                                            <ArrowUpRightIcon className="size-4" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Card>
                </div>
            )}
        </>
    );
};
