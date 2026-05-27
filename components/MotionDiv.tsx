"use client";

import React from "react";
import { motion } from "framer-motion";

type MotionDivProps = React.ComponentProps<typeof motion.div> & { children?: React.ReactNode };

export default function MotionDiv(props: MotionDivProps) {
  const { children, ...rest } = props;
  return <motion.div {...rest}>{children}</motion.div>;
}
