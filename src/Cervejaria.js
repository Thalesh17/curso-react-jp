import React from "react";
import "./App.css";

export default function Cervejaria() {
  return <h1> Passe o mouse na cerveja para encher</h1>;
}

export function Copo() {
  return (
    <div id="container">
      <div id="glass">
        <div id="water" />
      </div>
    </div>
  );
}

export function ChamaParaBeber() {
  return (
    <div>GELIN, TEKIN , MAQUINETA</div>
  );
}
