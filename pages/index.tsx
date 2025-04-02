import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MapPin, Truck, ShieldCheck, Repeat, Boxes, Layers3 } from "lucide-react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/custom/Map"), { ssr: false });

type MotionDivProps = HTMLMotionProps<"div">;

const MotionDiv = (props: MotionDivProps) => (
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
          <h1 className="text-4xl font-bold mb-4">Rio's Transportes</h1>
          <p className="text-lg mb-6">Há 15 anos conectando empresas com eficiência e confiança</p>
          <Button>Solicite um Orçamento</Button>
        </MotionDiv>
      </section>
    </div>
  );
}
