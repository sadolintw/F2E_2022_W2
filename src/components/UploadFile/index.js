import React from 'react';
import { useAtom } from "jotai";
import { bgFileAtom } from "../../data";

const UploadFile = () => {
  const canvasRef = useRef(null);
  const [bgFileData, setBgFileData] = useAtom(bgFileAtom);

  
}

