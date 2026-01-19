"use client";

import React from "react";
import { motion } from "framer-motion";

const categories = [
    {
        title: "Mobile",
        skills: ["Flutter", "Dart", "Riverpod", "BLoC"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Go", "Python"],
    },
    {
        title: "Platform / DevOps",
        skills: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines"],
    },
    {
        title: "Databases",
        skills: ["Firestore", "PostgreSQL", "Redis"],
    },
];

export function TechStack() {
    return (
        <section id="stack" className="py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The Core Stack</h2>
                    <p className="text-muted-foreground text-lg italic">Built for scale, engineered for performance.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 border rounded-2xl bg-card hover:border-foreground/50 transition-colors group"
                        >
                            <h3 className="text-xl font-bold mb-6 group-hover:text-foreground transition-colors">
                                {category.title}
                            </h3>
                            <ul className="space-y-4">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="text-muted-foreground flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-foreground/20 rounded-full" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
