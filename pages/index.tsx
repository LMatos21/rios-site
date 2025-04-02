import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import * as React from "react";

const Map = dynamic(() => import("../components/custom/Map"), { ssr: false });

// Aqui criamos um componente com tipagem explícita e sem generics no JSX
const MotionDiv: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <motion.div {...props} />
);

export default function RiosTransportes() {
  return (
    <div className="bg-white text-gray-900">
      <section className="bg-gray-900 text-white h-[50vh] flex items-center justify-center">
        <MotionDiv
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text
